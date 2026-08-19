import { lookup as dnsLookup } from "node:dns";
import { isIP } from "node:net";
import { request as httpsRequest } from "node:https";

import type { AgentCard } from "./a2a-types.ts";

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
    const did = (await fetchTextWithPublicIpGuard(`https://${h}/.well-known/atproto-did`)).trim();
    if (isAtprotoDid(did)) return did;
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
    return await fetchJsonWithPublicIpGuard<DidDocument>(url);
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

function normalizeIpLiteral(hostname: string): string {
  return hostname.startsWith("[") && hostname.endsWith("]")
    ? hostname.slice(1, -1)
    : hostname;
}

function validatePublicHttpsUrl(url: string, label: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`${label} is invalid: ${url}`);
  }

  if (parsed.protocol !== "https:") {
    throw new Error(`${label} must use HTTPS`);
  }

  const hostname = normalizeIpLiteral(parsed.hostname.toLowerCase());
  if (
    !hostname ||
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    (!hostname.includes(".") && isIP(hostname) === 0)
  ) {
    throw new Error(`${label} must use a public hostname`);
  }

  if (isIP(hostname) !== 0 && !isPublicIpAddress(hostname)) {
    throw new Error(`${label} cannot use a private or loopback IP address`);
  }

  return parsed;
}

function guardedLookup(
  hostname: string,
  options: { all?: boolean } | number,
  callback: (err: Error | null, address: string | Array<{ address: string; family: number }>, family?: number) => void,
) {
  const normalized = normalizeIpLiteral(hostname);
  const wantsAll = typeof options === "object" && !!options?.all;
  if (isIP(normalized) !== 0) {
    if (!isPublicIpAddress(normalized)) {
      callback(new Error("Hostname resolves to a private or loopback address"), "");
      return;
    }
    if (wantsAll) {
      callback(null, [{ address: normalized, family: isIP(normalized) }]);
      return;
    }
    callback(null, normalized, isIP(normalized));
    return;
  }

  dnsLookup(normalized, { all: true, verbatim: true }, (err, addresses) => {
    if (err) {
      callback(err, "");
      return;
    }
    if (!addresses.length) {
      callback(new Error("Hostname did not resolve"), "");
      return;
    }
    if (addresses.some(address => !isPublicIpAddress(address.address))) {
      callback(new Error("Hostname resolves to a private or loopback address"), "");
      return;
    }
    if (wantsAll) {
      callback(null, addresses);
      return;
    }
    callback(null, addresses[0].address, addresses[0].family);
  });
}

async function fetchTextWithPublicIpGuard(url: string, accept = "text/plain", redirectsRemaining = 3): Promise<string> {
  const parsed = validatePublicHttpsUrl(url, "Resolved URL");

  return await new Promise((resolve, reject) => {
    const req = httpsRequest(parsed, {
      method: "GET",
      headers: { Accept: accept },
      lookup: guardedLookup,
    }, (res) => {
      const status = res.statusCode ?? 0;
      const location = res.headers.location;
      if (status >= 300 && status < 400 && location) {
        res.resume();
        if (redirectsRemaining <= 0) {
          reject(new Error("Too many redirects"));
          return;
        }
        const nextUrl = new URL(location, parsed).toString();
        fetchTextWithPublicIpGuard(nextUrl, accept, redirectsRemaining - 1).then(resolve, reject);
        return;
      }

      const chunks: Buffer[] = [];
      res.on("data", chunk => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString("utf8");
        if (status < 200 || status >= 300) {
          reject(new Error(`Request failed: ${status}`));
          return;
        }
        resolve(body);
      });
    });

    req.setTimeout(8_000, () => req.destroy(new Error("Request timed out")));
    req.on("error", reject);
    req.end();
  });
}

async function fetchJsonWithPublicIpGuard<T>(url: string): Promise<T> {
  const text = await fetchTextWithPublicIpGuard(url, "application/json");
  return JSON.parse(text) as T;
}

function normalizeAgentCardUrl(url: string): string {
  let cardUrl = url.trim().replace(/\/$/, "");
  if (!cardUrl.endsWith("/.well-known/agent-card.json") && !cardUrl.includes("/.well-known/")) {
    cardUrl = `${cardUrl}/.well-known/agent-card.json`;
  }
  return cardUrl;
}

export async function fetchResolvedAgentCard(url: string): Promise<AgentCard> {
  const card = await fetchJsonWithPublicIpGuard<AgentCard>(normalizeAgentCardUrl(url));
  if (!card.name || !card.url) {
    throw new Error("Invalid agent card: missing name or url");
  }
  return card;
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
  const safePdsUrl = validatePublicHttpsUrl(pdsUrl, "Resolved PDS URL").toString().replace(/\/$/, "");
  const url = `${safePdsUrl}/xrpc/com.atproto.repo.getRecord?repo=${encodeURIComponent(did)}&collection=${encodeURIComponent(ATPROTO_AGENT_CARD_NSID)}&rkey=self`;
  try {
    const json = await fetchJsonWithPublicIpGuard<{ value: AgentCardRecord }>(url);
    return json.value ?? null;
  } catch (e) {
    const message = (e as Error).message;
    if (message === "Request failed: 400" || message === "Request failed: 404") return null;
    if (
      message.startsWith("Request failed:") ||
      message.startsWith("Resolved PDS URL") ||
      message.includes("private or loopback")
    ) {
      throw e;
    }
    return null;
  }
}

// ─── Top-level resolver ──────────────────────────────────────────────────────────

export interface AtprotoResolution {
  did: string;
  handle?: string;
  a2aUrl: string;
}

function isPrivateIpv4Address(ip: string): boolean {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some(part => !Number.isInteger(part) || part < 0 || part > 255)) {
    return true;
  }

  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a >= 224) return true;
  return false;
}

function isPrivateIpv6Address(ip: string): boolean {
  const normalized = ip.toLowerCase();
  if (normalized === "::" || normalized === "::1") return true;
  if (normalized.startsWith("fc") || normalized.startsWith("fd")) return true;
  if (normalized.startsWith("fe8") || normalized.startsWith("fe9") || normalized.startsWith("fea") || normalized.startsWith("feb")) return true;
  if (normalized.startsWith("::ffff:")) {
    return isPrivateIpv4Address(normalized.slice("::ffff:".length));
  }
  return false;
}

function isPublicIpAddress(ip: string): boolean {
  const family = isIP(ip);
  if (family === 4) return !isPrivateIpv4Address(ip);
  if (family === 6) return !isPrivateIpv6Address(ip);
  return false;
}

export async function validateResolvedA2AUrl(url: string): Promise<string> {
  return validatePublicHttpsUrl(url, "Resolved A2A URL").toString();
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
    return { did, handle, a2aUrl: await validateResolvedA2AUrl(fromDoc) };
  }

  // 2. PDS record lookup
  const pdsUrl = extractPdsUrl(doc);
  const record = await fetchAgentCardRecord(pdsUrl, did);
  if (record?.a2aUrl) {
    return { did, handle, a2aUrl: await validateResolvedA2AUrl(record.a2aUrl) };
  }

  throw new Error(
    `No A2A agent card found for ${handle ?? did}. ` +
    `The DID document has no "A2AAgentCard" service entry and the PDS has no ${ATPROTO_AGENT_CARD_NSID} record.`
  );
}
