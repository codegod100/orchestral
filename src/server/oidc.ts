/**
 * OIDC client for connecting to A2A agents that declare OpenIdConnectSecurityScheme.
 * Implements Authorization Code flow with PKCE (S256).
 */

import { jwtVerify, createRemoteJWKSet } from "jose";
import { updateAgent, type AgentRecord } from "./store.ts";

// ─── PKCE ──────────────────────────────────────────────────────────────────

export async function generatePkce(): Promise<{ verifier: string; challenge: string }> {
  const verifier = base64url(crypto.getRandomValues(new Uint8Array(32)));
  const hash = new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)));
  return { verifier, challenge: base64url(hash) };
}

function base64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function randomString(len = 32): Promise<string> {
  return base64url(crypto.getRandomValues(new Uint8Array(len)));
}

// ─── OIDC Discovery ──────────────────────────────────────────────────────────

export interface OIDCDiscovery {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint?: string;
  jwks_uri: string;
  end_session_endpoint?: string;
}

export async function discoverOIDC(issuer: string): Promise<OIDCDiscovery> {
  const url = `${issuer.replace(/\/$/, "")}/.well-known/openid-configuration`;
  const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
  if (!res.ok) throw new Error(`OIDC discovery failed: ${res.status}`);
  return (await res.json()) as OIDCDiscovery;
}

// ─── Authorization URL ─────────────────────────────────────────────────────────

export function buildAuthorizeUrl(opts: {
  authorizeEndpoint: string;
  clientId: string;
  redirectUri: string;
  scope: string;
  state: string;
  codeChallenge: string;
}): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: opts.clientId,
    redirect_uri: opts.redirectUri,
    scope: opts.scope,
    state: opts.state,
    code_challenge: opts.codeChallenge,
    code_challenge_method: "S256",
  });
  return `${opts.authorizeEndpoint}?${params.toString()}`;
}

// ─── Token Exchange ─────────────────────────────────────────────────────────

export interface TokenResponse {
  access_token?: string;
  id_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
  scope?: string;
}

export async function exchangeCode(opts: {
  tokenEndpoint: string;
  code: string;
  redirectUri: string;
  clientId: string;
  clientSecret?: string;
  codeVerifier: string;
}): Promise<TokenResponse> {
  const params: Record<string, string> = {
    grant_type: "authorization_code",
    code: opts.code,
    redirect_uri: opts.redirectUri,
    client_id: opts.clientId,
    code_verifier: opts.codeVerifier,
  };
  // Only include client_secret if provided (Pocket ID supports `none` auth method with PKCE)
  if (opts.clientSecret) params.client_secret = opts.clientSecret;

  const res = await fetch(opts.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params),
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Token exchange failed: ${res.status} ${body}`);
  }

  return (await res.json()) as TokenResponse;
}

// ─── Token Refresh ──────────────────────────────────────────────────────────

export async function refreshToken(opts: {
  tokenEndpoint: string;
  refreshToken: string;
  clientId: string;
  clientSecret: string;
}): Promise<TokenResponse> {
  const res = await fetch(opts.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: opts.refreshToken,
      client_id: opts.clientId,
      client_secret: opts.clientSecret,
    }),
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Token refresh failed: ${res.status} ${body}`);
  }

  return (await res.json()) as TokenResponse;
}

// ─── JWKS verification ──────────────────────────────────────────────────────

const jwksCache = new Map<string, ReturnType<typeof createRemoteJWKSet>>();

export function getJwks(jwksUri: string) {
  if (!jwksCache.has(jwksUri)) {
    jwksCache.set(jwksUri, createRemoteJWKSet(new URL(jwksUri)));
  }
  return jwksCache.get(jwksUri)!;
}

export async function verifyIdToken(
  idToken: string,
  issuer: string,
  clientId: string,
): Promise<Record<string, unknown>> {
  const discovery = await discoverOIDC(issuer);
  const jwks = getJwks(discovery.jwks_uri);
  const { payload } = await jwtVerify(idToken, jwks, {
    issuer,
    audience: clientId,
  });
  return payload as Record<string, unknown>;
}

// ─── Orchestral's own session (cookie-based) ──────────────────────────────────

export interface SessionClaims {
  sub: string;
  email?: string;
  name?: string;
  iat: number;
  exp: number;
}

export async function createSession(
  sessionSecret: string,
  claims: Omit<SessionClaims, "iat" | "exp">,
): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sessionSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const { SignJWT } = await import("jose");
  return new SignJWT({ email: claims.email, name: claims.name })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(claims.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(key);
}

export async function verifySession(
  sessionSecret: string,
  token: string,
): Promise<SessionClaims | null> {
  try {
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(sessionSecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"],
    );
    const { jwtVerify } = await import("jose");
    const { payload } = await jwtVerify(token, key);
    if (typeof payload.sub !== "string") return null;
    return {
      sub: payload.sub,
      email: (payload.email as string) ?? undefined,
      name: (payload.name as string) ?? undefined,
      iat: payload.iat!,
      exp: payload.exp!,
    };
  } catch {
    return null;
  }
}


// ─── Device Code Flow ──────────────────────────────────────────────────────────

export interface DeviceCodeResponse {
  device_code: string;
  user_code: string;
  verification_uri: string;
  verification_uri_complete?: string;
  expires_in: number;
  interval: number;
}

export async function startDeviceCode(opts: {
  deviceAuthorizationEndpoint: string;
  clientId: string;
  scope?: string;
}): Promise<DeviceCodeResponse> {
  const res = await fetch(opts.deviceAuthorizationEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: opts.clientId,
      scope: opts.scope || "openid profile email offline_access",
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Device code failed: ${res.status} ${body}`);
  }

  return (await res.json()) as DeviceCodeResponse;
}

export interface DeviceTokenResult {
  access_token?: string;
  id_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
  pending?: boolean;
  error?: string;
}

export async function pollDeviceToken(opts: {
  tokenEndpoint: string;
  deviceCode: string;
  clientId: string;
}): Promise<DeviceTokenResult> {
  const res = await fetch(opts.tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      device_code: opts.deviceCode,
      client_id: opts.clientId,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  const body = (await res.json()) as any;

  if (res.status === 400 && body.error === "authorization_pending") {
    return { pending: true };
  }
  if (res.status === 400 && body.error === "slow_down") {
    return { pending: true };
  }
  if (!res.ok) {
    return { error: body.error_description || body.error || `HTTP ${res.status}` };
  }

  return {
    access_token: body.access_token,
    id_token: body.id_token,
    refresh_token: body.refresh_token,
    expires_in: body.expires_in,
    token_type: body.token_type,
  };
}

// ─── Token refresh ───────────────────────────────────────────────────────────

/**
 * Refresh an agent's OIDC access token if it's expired (or expiring within a
 * minute) and a refresh token is available. Shared by both the chat-send
 * routes and jobs.ts's bot-messaging step — jobs.ts previously used
 * agent.access_token directly without this, so an expired token surfaced as
 * a job failure ("Authentication required — token may be expired") on the
 * bot-messaging step instead of transparently refreshing like chat already
 * does.
 */
export async function ensureFreshToken(agent: AgentRecord): Promise<AgentRecord> {
  if (!agent.token_expires_at || !agent.refresh_token) return agent;
  if (agent.token_expires_at > Date.now() + 60_000) return agent;

  try {
    const discovery = await discoverOIDC(agent.oidc_issuer!);
    const tokens = await refreshToken({
      tokenEndpoint: discovery.token_endpoint,
      refreshToken: agent.refresh_token,
      clientId: agent.oidc_client_id!,
      clientSecret: agent.oidc_client_secret!,
    });

    const updated = updateAgent(agent.id, {
      access_token: tokens.access_token ?? agent.access_token,
      refresh_token: tokens.refresh_token ?? agent.refresh_token,
      token_expires_at: Date.now() + (tokens.expires_in ?? 3600) * 1000,
    });
    return updated ?? agent;
  } catch {
    return agent;
  }
}
