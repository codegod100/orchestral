/**
 * ATProto identity resolution for orchestral.
 *
 * Resolves handles and DIDs to A2A agent card URLs by walking the ATProto
 * identity stack: handle → DID → DID document → PDS → agentCard record.
 *
 * Record format stored in a user's PDS:
 *   collection: app.orchestral.agentCard
 *   rkey:       self
 *   value:      { $type, cardUrl, description?, createdAt? }
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface DidDocument {
  id: string;
  alsoKnownAs?: string[];
  verificationMethod?: unknown[];
  service?: Array<{
    id: string;
    type: string;
    serviceEndpoint: string;
  }>;
}

/** app.orchestral.agentCard — stored in a user's PDS to advertise their A2A agent */
export interface OrchestraAgentCardRecord {
  $type: "app.orchestral.agentCard";
  cardUrl: string;
  description?: string;
  createdAt?: string;
}

export interface AtprotoResolution {
  did: string;
  pdsEndpoint: string;
  cardUrl: string;
  /** true when the card URL came from a PDS record rather than the fallback */
  fromRecord: boolean;
}

// ─── Constants ──────────────────────────────────────────────────────────────

const PLC_DIRECTORY = "https://plc.directory";
const BSKY_XRPC = "https://bsky.social/xrpc";
const TIMEOUT_MS = 10_000;

// ─── Handle resolution ──────────────────────────────────────────────────────

/**
 * Resolve an ATProto handle to a DID.
 *
 * Tries two methods in order:
 *   1. GET https://bsky.social/xrpc/com.atproto.identity.resolveHandle
 *   2. GET https://<handle>/.well-known/atproto-did  (for self-hosted handles)
 */
export async function resolveHandleToDid(handle: string): Promise<string> {
  const h = handle.startsWith("@") ? handle.slice(1) : handle;

  const xrpcUrl = `${BSKY_XRPC}/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(h)}`;
  const xrpcRes = await fetch(xrpcUrl, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  }).catch(() => null);

  if (xrpcRes?.ok) {
    const data = (await xrpcRes.json()) as { did?: string };
    if (data.did?.startsWith("did:")) return data.did;
  }

  // Fall back to .well-known/atproto-did (self-hosted handles)
  const wkRes = await fetch(`https://${h}/.well-known/atproto-did`, {
    signal: AbortSignal.timeout(TIMEOUT_MS),
  }).catch(() => null);

  if (wkRes?.ok) {
    const did = (await wkRes.text()).trim();
    if (did.startsWith("did:")) return did;
  }

  throw new Error(`Could not resolve handle "${handle}" to a DID`);
}

// ─── DID document resolution ─────────────────────────────────────────────────

/**
 * Resolve a DID to its DID document.
 * Supports did:plc (via plc.directory) and did:web.
 */
export async function resolveDid(did: string): Promise<DidDocument> {
  let url: string;

  if (did.startsWith("did:plc:")) {
    url = `${PLC_DIRECTORY}/${did}`;
  } else if (did.startsWith("did:web:")) {
    // did:web:example.com            → https://example.com/.well-known/did.json
    // did:web:example.com:path:sub   → https://example.com/path/sub/did.json
    const identifier = did.slice("did:web:".length);
    const [domain, ...pathParts] = identifier.split(":");
    const path =
      pathParts.length > 0
        ? pathParts.join("/") + "/did.json"
        : ".well-known/did.json";
    url = `https://${domain}/${path}`;
  } else {
    throw new Error(`Unsupported DID method — only did:plc and did:web are supported`);
  }

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`Failed to resolve DID "${did}": HTTP ${res.status}`);
  }
  return (await res.json()) as DidDocument;
}

/**
 * Extract the PDS (Personal Data Server) service endpoint from a DID document.
 */
export function getPdsEndpoint(didDoc: DidDocument): string | null {
  return (
    didDoc.service?.find((s) => s.type === "AtprotoPersonalDataServer")
      ?.serviceEndpoint ?? null
  );
}

// ─── PDS record lookup ───────────────────────────────────────────────────────

/**
 * Fetch an app.orchestral.agentCard record (rkey=self) from a user's PDS.
 * Returns the cardUrl stored in the record, or null if absent.
 */
export async function fetchPdsAgentCardRecord(
  pdsEndpoint: string,
  did: string,
): Promise<string | null> {
  const url =
    `${pdsEndpoint.replace(/\/$/, "")}/xrpc/com.atproto.repo.getRecord` +
    `?repo=${encodeURIComponent(did)}&collection=app.orchestral.agentCard&rkey=self`;

  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { value?: OrchestraAgentCardRecord };
    return data.value?.cardUrl ?? null;
  } catch {
    return null;
  }
}

// ─── Main resolution entry point ─────────────────────────────────────────────

/**
 * Resolve an ATProto DID or handle to an A2A agent card URL.
 *
 * Resolution order:
 *   1. If handle (or @handle), resolve to DID
 *   2. Fetch DID document → extract PDS endpoint
 *   3. Query PDS for app.orchestral.agentCard (rkey=self) record
 *   4. Fall back to <pds>/.well-known/agent-card.json if no record found
 */
export async function resolveAtprotoToCardUrl(
  didOrHandle: string,
): Promise<AtprotoResolution> {
  let did = didOrHandle.trim();

  if (!did.startsWith("did:")) {
    did = await resolveHandleToDid(did);
  }

  const didDoc = await resolveDid(did);
  const pdsEndpoint = getPdsEndpoint(didDoc);
  if (!pdsEndpoint) {
    throw new Error(`No PDS endpoint in DID document for "${did}"`);
  }

  const recordCardUrl = await fetchPdsAgentCardRecord(pdsEndpoint, did);
  if (recordCardUrl) {
    return { did, pdsEndpoint, cardUrl: recordCardUrl, fromRecord: true };
  }

  const fallbackUrl = `${pdsEndpoint.replace(/\/$/, "")}/.well-known/agent-card.json`;
  return { did, pdsEndpoint, cardUrl: fallbackUrl, fromRecord: false };
}

// ─── Identifier detection ────────────────────────────────────────────────────

/**
 * Return true if the input looks like an ATProto identifier (DID or handle)
 * rather than a plain HTTPS URL.
 */
export function isAtprotoIdentifier(input: string): boolean {
  const s = input.trim();
  if (s.startsWith("did:plc:") || s.startsWith("did:web:")) return true;
  if (s.startsWith("@")) return true;
  // Bare handle: has dots, no slashes, not an http URL
  if (!s.startsWith("http") && !s.includes("/") && s.includes(".")) return true;
  return false;
}
