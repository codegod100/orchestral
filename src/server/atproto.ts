/**
 * ATProto identity resolution for orchestral.
 *
 * Allows adding agents by DID or handle instead of a raw A2A URL.
 * Resolution flow:
 *   handle → DID (via DNS TXT or /.well-known/atproto-did)
 *   DID     → DID Document (via PLC directory or did:web)
 *   DID Doc → PDS endpoint
 *   PDS     → agent record (app.orchestral.agentCard) containing a2aUrl
 *
 * If no orchestral-specific record exists, we also check the DID document's
 * service endpoints for an entry of type "A2AAgentCard".
 */

export const ATPROTO_AGENT_CARD_NSID = "app.orchestral.agentCard";

// ─── Detection ─────────────────────────────────────────────────────────────────

/** Returns true for did:plc:… or did:web:… strings. */
export function isAtprotoDid(input: string): boolean {
  return /^did:(plc|web):[a-zA-Z0-9._:%-]+$/.test(input.trim());
}

/**
 * Returns true for @-prefixed handles or bare domain-style handles
 * (e.g. @alice.bsky.social or alice.bsky.social).
 * We exclude plain HTTP/S URLs and anything that looks like a hostname-only
 * card URL without dots (which would be a local hostname).
 */
export function isAtprotoHandle(input: string): boolean {
  const s = input.trim();
  if (s.startsWith("http://") || s.startsWith("https://")) return false;
  if (isAtprotoDid(s)) return false;
  // Must contain at least one dot and look like a handle
  const handle = s.startsWith("@") ? s.slice(1) : s;
  return /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)+$/.test(handle);
}

export function isAtprotoInput(input: string): boolean {
  return isAtprotoDid(input) || isAtprotoHandle(input);
}

// ─── Handle → DID ─────────────────────────────────────────────────────────────

/**
 * Resolve an ATProto handle to a DID.
 * Tries HTTPS first (/.well-known/atproto-did), then falls back to the
 * public Bluesky AppView API which supports any PLC-registered handle.
 */
export async function resolveHandleToDid(handle: string): Promise<string> {
  const h = handle.startsWith("@") ? handle.slice(1) : handle;

  // 1. Try /.well-known/atproto-did on the handle's domain
  try {
    const res = await fetch(`https://${h}/.well-known/atproto-did`, {
      signal: AbortSignal.timeout(5_000),
      headers: { Accept: "text/plain" },
    });
    if (res.ok) {
      const did = (await res.text()).trim();
      if (isAtprotoDid(did)) return did;
    }
  } catch {
    // fall through
  }

  // 2. Use the public Bluesky/ATProto identity resolution API
  const apiUrl = `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${encodeURIComponent(h)}`;
  const res = await fetch(apiUrl, {
    signal: AbortSignal.timeout(8_000),
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Failed to resolve handle "${h}": ${res.status} ${res.statusText}`);
  }
  const json = (await res.json()) as { did: string };
  if (!json.did) throw new Error(`No DID returned for handle "${h}"`);
  return json.did;
}

// ─── DID → DID Document ────────────────────────────────────────────────────────

export interface DidDocument {
  id: string;
  service?: Array<{
    id: string;
    type: string;
    serviceEndpoint: string;
  }>;
  [key: string]: unknown;
}

export async function resolveDidDocument(did: string): Promise<DidDocument> {
  let url: string;

  if (did.startsWith("did:plc:")) {
    url = `https://plc.directory/${encodeURIComponent(did)}`;
  } else if (did.startsWith("did:web:")) {
    // did:web:example.com → https://example.com/.well-known/did.json
    // did:web:example.com:path → https://example.com/path/did.json
    const withoutPrefix = did.slice("did:web:".length);
    const parts = withoutPrefix.split(":");
    const domain = decodeURIComponent(parts[0]);
    const path = parts.length > 1 ? parts.slice(1).map(decodeURIComponent).join("/") : ".well-known";
    url = `https://${domain}/${path}/did.json`;
  } else {
    throw new Error(`Unsupported DID method: ${did}`);
  }

  const res = await fetch(url, {
    signal: AbortSignal.timeout(8_000),
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`Failed to fetch DID document for ${did}: ${res.status}`);
  return (await res.json()) as DidDocument;
}

/** Extract the PDS endpoint URL from a DID document. */
export function extractPdsUrl(doc: DidDocument): string {
  const pds = doc.service?.find(s =>
    s.id === "#atproto_pds" || s.type === "AtprotoPersonalDataServer"
  );
  if (!pds) throw new Error(`No PDS service found in DID document for ${doc.id}`);
  return pds.serviceEndpoint.replace(/\/$/, "");
}

/** Check if the DID document advertises an A2A card URL directly. */
export function extractA2AUrlFromDidDoc(doc: DidDocument): string | null {
  const svc = doc.service?.find(s =>
    s.type === "A2AAgentCard" || s.id === "#a2a_agent_card" || s.id === "#a2aAgentCard"
  );
  return svc?.serviceEndpoint ?? null;
}

// ─── PDS → Agent Record ─────────────────────────────────────────────────────────

export interface AgentCardRecord {
  $type: typeof ATPROTO_AGENT_CARD_NSID;
  /** The A2A agent card URL (or base URL; /.well-known/agent-card.json is appended if needed). */
  a2aUrl: string;
  /** Optional display name override. */
  displayName?: string;
}

/**
 * Fetch the orchestral agent card record from the actor's PDS.
 * Looks for a record of type app.orchestral.agentCard with rkey "self".
 * Returns null if no such record exists.
 */
export async function fetchAgentCardRecord(
  pdsUrl: string,
  did: string,
): Promise<AgentCardRecord | null> {
  const url = `${pdsUrl}/xrpc/com.atproto.repo.getRecord?repo=${encodeURIComponent(did)}&collection=${encodeURIComponent(ATPROTO_AGENT_CARD_NSID)}&rkey=self`;
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(8_000),
      headers: { Accept: "application/json" },
    });
    if (res.status === 400 || res.status === 404) return null;
    if (!res.ok) throw new Error(`PDS record fetch failed: ${res.status}`);
    const json = (await res.json()) as { value: AgentCardRecord };
    return json.value ?? null;
  } catch (e) {
    if ((e as Error).message.startsWith("PDS record fetch failed")) throw e;
    return null;
  }
}

// ─── Top-level resolver ──────────────────────────────────────────────────────────

export interface AtprotoResolution {
  did: string;
  handle?: string;
  a2aUrl: string;
}

/**
 * Resolve an ATProto DID or handle to an A2A agent card URL.
 *
 * Resolution order:
 *   1. Check the DID document's service endpoints for type "A2AAgentCard"
 *   2. Fetch an app.orchestral.agentCard record from the actor's PDS
 */
export async function resolveAtprotoAgent(input: string): Promise<AtprotoResolution> {
  let did: string;
  let handle: string | undefined;

  if (isAtprotoDid(input.trim())) {
    did = input.trim();
  } else {
    handle = input.trim().startsWith("@") ? input.trim().slice(1) : input.trim();
    did = await resolveHandleToDid(handle);
  }

  const doc = await resolveDidDocument(did);

  // 1. DID document service endpoint (fastest — no extra HTTP round trip)
  const fromDoc = extractA2AUrlFromDidDoc(doc);
  if (fromDoc) {
    return { did, handle, a2aUrl: fromDoc };
  }

  // 2. PDS record lookup
  const pdsUrl = extractPdsUrl(doc);
  const record = await fetchAgentCardRecord(pdsUrl, did);
  if (record?.a2aUrl) {
    return { did, handle, a2aUrl: record.a2aUrl };
  }

  throw new Error(
    `No A2A agent card found for ${handle ?? did}. ` +
    `The DID document has no "A2AAgentCard" service entry and the PDS has no ${ATPROTO_AGENT_CARD_NSID} record.`
  );
}
