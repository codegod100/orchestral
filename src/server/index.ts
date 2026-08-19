/**
 * Orchestral — A2A Agent Orchestration Console.
 *
 * A web app that lets you:
 *   1. OIDC into A2A agents (using their Agent Card securitySchemes)
 *   2. Add them to a web interface
 *   3. Message them via the A2A protocol
 *
 * Uses Bun + Hono. The built React frontend is served from /public.
 */

import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { getCookie, setCookie } from "hono/cookie";
import { streamSSE } from "hono/streaming";

import {
  insertAgent, getAgent, listAgents, updateAgent, deleteAgent,
  insertOIDCFlow, getOIDCFlow, deleteOIDCFlow,
  createConversation, getConversation, listConversations,
  addMessage, listMessages, updateConversationContext,
  getSetting, setSetting,
  createJob, listJobs, getJob, updateJob, appendJobLog,
  type AgentRecord,
} from "./store.ts";
import {
  generatePkce, randomString, discoverOIDC, buildAuthorizeUrl,
  exchangeCode, refreshToken, createSession, verifySession,
  startDeviceCode, pollDeviceToken, ensureFreshToken,
  type OIDCDiscovery,
} from "./oidc.ts";
import {
  fetchAgentCard, detectSecurity, sendMessage, sendMessageStream,
  extractText, AuthError,
} from "./a2a-client.ts";
import {
  buildGithubAuthorizeUrl, exchangeGithubCode, getGithubUser, listGithubRepos,
} from "./github.ts";
import { runJob } from "./jobs.ts";

// ─── Config ────────────────────────────────────────────────────────────────

const PORT = Number(process.env.PORT ?? 4747);
const ORCHESTRAL_URL = process.env.ORCHESTRAL_URL ?? `http://localhost:${PORT}`;

// Orchestral's own OIDC (for the user to log in to the console itself).
// Uses Pocket ID (same as think.latha.org).
const CONSOLE_OIDC_ISSUER = process.env.OIDC_ISSUER ?? "https://id.openbao.boxd.sh";
const CONSOLE_OIDC_CLIENT_ID = process.env.OIDC_CLIENT_ID ?? "d64f29d9-7239-46e7-8a62-d7aa42b07603";
const CONSOLE_OIDC_CLIENT_SECRET = process.env.OIDC_CLIENT_SECRET ?? "";
const SESSION_SECRET = process.env.SESSION_SECRET ?? "orchestral-dev-secret-change-me";
const SESSION_COOKIE = "orchestral_session";
const OAUTH_STATE_COOKIE = "orchestral_oauth_state";
const PKCE_VERIFIER_COOKIE = "orchestral_pkce";
const RETURN_URL_COOKIE = "orchestral_return";
const AGENT_OIDC_REDIRECT = `${ORCHESTRAL_URL}/api/agent/oidc/callback`;
const CONSOLE_OIDC_REDIRECT = `${ORCHESTRAL_URL}/api/auth/callback`;

// GitHub OAuth (for repo access + opening PRs from jobs).
// Register an OAuth App at https://github.com/settings/developers with
// callback URL `${ORCHESTRAL_URL}/api/github/callback`.
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID ?? "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET ?? "";
const GITHUB_OAUTH_REDIRECT = `${ORCHESTRAL_URL}/api/github/callback`;
const GITHUB_STATE_COOKIE = "orchestral_github_state";

// ─── Helpers ────────────────────────────────────────────────────────────────

function getSession(c: any): { sub: string; email?: string; name?: string } | null {
  const token = getCookie(c, SESSION_COOKIE);
  if (!token) return null;
  // verifySession is async but we need sync here — use a cached approach
  return null; // handled in middleware
}

function parseCookies(request: Request): Record<string, string> {
  const out: Record<string, string> = {};
  const raw = request.headers.get("cookie") ?? "";
  for (const pair of raw.split(";")) {
    const eq = pair.indexOf("=");
    if (eq < 0) continue;
    out[pair.slice(0, eq).trim()] = pair.slice(eq + 1).trim();
  }
  return out;
}

async function getSessionFromRequest(request: Request): Promise<{ sub: string; email?: string; name?: string } | null> {
  const cookies = parseCookies(request);
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;
  return await verifySession(SESSION_SECRET, token);
}

// ─── App ─────────────────────────────────────────────────────────────────────

const app = new Hono();

// ─── Auth middleware ───────────────────────────────────────────────────────────

// Skip auth in dev mode if no OIDC client secret configured
const AUTH_ENABLED = CONSOLE_OIDC_CLIENT_ID !== "";
// Secure cookies are required in production, but must be disabled for the
// documented http://localhost development URL or the browser will drop PKCE
// state cookies before the callback.
const COOKIE_SECURE = ORCHESTRAL_URL.startsWith("https://");

app.use("/api/*", async (c, next) => {
  // Allow auth-related endpoints without session
  const path = new URL(c.req.url).pathname;
  if (
    path === "/api/auth/login" ||
    path === "/api/auth/callback" ||
    path === "/api/auth/logout" ||
    path === "/api/health" ||
    path === "/api/agent/oidc/callback" ||
    path === "/api/github/callback"
  ) {
    return next();
  }

  if (!AUTH_ENABLED) {
    // Dev mode — allow all requests without auth
    c.set("session", { sub: "dev", email: "dev@localhost", name: "Developer" });
    return next();
  }

  const session = await getSessionFromRequest(c.req.raw);
  if (!session) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  c.set("session", session);
  return next();
});

// ─── Health ──────────────────────────────────────────────────────────────────

app.get("/api/health", (c) => c.json({ ok: true, service: "orchestral" }));

// ─── Console Auth (OIDC login for the orchestral console itself) ───────────────

app.get("/api/auth/login", async (c) => {
  if (!AUTH_ENABLED) return c.json({ ok: true, session: "dev" });
  const state = await randomString(16);
  const { verifier, challenge } = await generatePkce();
  const returnUrl = c.req.query("return") || "/";

  const discovery = await discoverOIDC(CONSOLE_OIDC_ISSUER);
  const authUrl = buildAuthorizeUrl({
    authorizeEndpoint: discovery.authorization_endpoint,
    clientId: CONSOLE_OIDC_CLIENT_ID,
    redirectUri: CONSOLE_OIDC_REDIRECT,
    scope: "openid profile email",
    state,
    codeChallenge: challenge,
  });

  setCookie(c, OAUTH_STATE_COOKIE, state, { maxAge: 600, path: "/", httpOnly: true, secure: COOKIE_SECURE, sameSite: "Lax" });
  setCookie(c, PKCE_VERIFIER_COOKIE, verifier, { maxAge: 600, path: "/", httpOnly: true, secure: COOKIE_SECURE, sameSite: "Lax" });
  setCookie(c, RETURN_URL_COOKIE, returnUrl, { maxAge: 600, path: "/", httpOnly: true, secure: COOKIE_SECURE, sameSite: "Lax" });

  return c.redirect(authUrl);
});

app.get("/api/auth/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");
  const error = c.req.query("error");

  if (error) return c.text(`Authentication error: ${error}`, 400);
  if (!code || !state) return c.text("Missing code or state", 400);

  const cookies = parseCookies(c.req.raw);
  const savedState = cookies[OAUTH_STATE_COOKIE];
  const verifier = cookies[PKCE_VERIFIER_COOKIE];
  const returnUrl = cookies[RETURN_URL_COOKIE] || "/";

  if (!savedState || savedState !== state) return c.text("Invalid state", 400);
  if (!verifier) return c.text("Missing PKCE verifier", 400);

  const discovery = await discoverOIDC(CONSOLE_OIDC_ISSUER);
  const tokens = await exchangeCode({
    tokenEndpoint: discovery.token_endpoint,
    code,
    redirectUri: CONSOLE_OIDC_REDIRECT,
    clientId: CONSOLE_OIDC_CLIENT_ID,
    clientSecret: CONSOLE_OIDC_CLIENT_SECRET,
    codeVerifier: verifier,
  });

  // Get user info from ID token or userinfo endpoint
  let sub = "unknown";
  let email: string | undefined;
  let name: string | undefined;

  if (tokens.id_token) {
    // Decode without strict verification for user info (token was verified by exchange)
    const parts = tokens.id_token.split(".");
    if (parts.length >= 2) {
      const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
      sub = payload.sub ?? sub;
      email = payload.email;
      name = payload.name;
    }
  }

  const session = await createSession(SESSION_SECRET, { sub, email, name });
  setCookie(c, SESSION_COOKIE, session, { maxAge: 7 * 24 * 3600, path: "/", httpOnly: true, secure: COOKIE_SECURE, sameSite: "Lax" });

  // Store original OIDC tokens so they can be reused for agents using the same issuer
  if (tokens.access_token || tokens.id_token) {
    setSetting("console_oidc_token", tokens.access_token || tokens.id_token || "");
    if (tokens.refresh_token) setSetting("console_oidc_refresh", tokens.refresh_token);
    if (tokens.expires_in) setSetting("console_oidc_expires", String(Date.now() + tokens.expires_in * 1000));
  }

  // Clear temporary cookies
  setCookie(c, OAUTH_STATE_COOKIE, "", { maxAge: 0, path: "/" });
  setCookie(c, PKCE_VERIFIER_COOKIE, "", { maxAge: 0, path: "/" });
  setCookie(c, RETURN_URL_COOKIE, "", { maxAge: 0, path: "/" });

  return c.redirect(returnUrl);
});

app.get("/api/auth/logout", (c) => {
  setCookie(c, SESSION_COOKIE, "", { maxAge: 0, path: "/" });
  if (!AUTH_ENABLED) return c.json({ ok: true });
  const endSessionUrl = new URL(`${CONSOLE_OIDC_ISSUER}/api/oidc/end-session`);
  endSessionUrl.searchParams.set("client_id", CONSOLE_OIDC_CLIENT_ID);
  endSessionUrl.searchParams.set("post_logout_redirect_uri", ORCHESTRAL_URL);
  return c.redirect(endSessionUrl.toString());
});

app.get("/api/auth/me", (c) => {
  const session = c.get("session");
  return c.json({ user: session });
});

// ─── Agent management ──────────────────────────────────────────────────────────

// List all connected agents
app.get("/api/agents", (c) => {
  const agents = listAgents();
  return c.json({
    agents: agents.map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
      icon_url: a.icon_url,
      card_url: a.card_url,
      security_type: a.security_type,
      auth_state: a.auth_state,
      created_at: a.created_at,
    })),
  });
});

// Get full agent details
app.get("/api/agents/:id", (c) => {
  const agent = getAgent(c.req.param("id"));
  if (!agent) return c.json({ error: "Agent not found" }, 404);
  return c.json({
    id: agent.id,
    name: agent.name,
    description: agent.description,
    icon_url: agent.icon_url,
    card_url: agent.card_url,
    security_type: agent.security_type,
    auth_state: agent.auth_state,
    oidc_issuer: agent.oidc_issuer ?? null,
    has_oidc_credentials: !!(agent.oidc_client_id),
    agent_card: JSON.parse(agent.agent_card_json),
    created_at: agent.created_at,
  });
});

// Add a new agent by Agent Card URL
app.post("/api/agents", async (c) => {
  const body = await c.req.json();
  const { card_url, oidc_client_id, oidc_client_secret } = body;

  if (!card_url) return c.json({ error: "card_url required" }, 400);

  // Fetch the Agent Card
  let card;
  try {
    card = await fetchAgentCard(card_url);
  } catch (e) {
    return c.json({ error: `Failed to fetch agent card: ${(e as Error).message}` }, 502);
  }

  // Detect security requirements
  const security = detectSecurity(card);
  const agentId = crypto.randomUUID();

  let authState: string | null = null;
  let accessToken: string | null = null;
  let refreshToken: string | null = null;
  let tokenExpiresAt: number | null = null;

  if (security.type === "none") {
    authState = "connected";
  } else if (security.type === "oidc") {
    const consoleIssuer = CONSOLE_OIDC_ISSUER.replace(/\/$/, "");
    const agentIssuer = security.issuer?.replace(/\/$/, "") ?? "";
    const sameIssuer = agentIssuer === consoleIssuer;

    // Bake in console OIDC credentials for agents on the same issuer so users
    // don't have to manually enter a client ID per agent.
    if (sameIssuer && !oidc_client_id) {
      oidc_client_id = CONSOLE_OIDC_CLIENT_ID;
      oidc_client_secret = oidc_client_secret ?? CONSOLE_OIDC_CLIENT_SECRET;
    }

    // If the console token is already available, reuse it directly.
    const consoleToken = getSetting("console_oidc_token");
    if (sameIssuer && consoleToken) {
      authState = "connected";
      accessToken = consoleToken;
      refreshToken = getSetting("console_oidc_refresh");
      const expiresStr = getSetting("console_oidc_expires");
      tokenExpiresAt = expiresStr ? Number(expiresStr) : null;
    } else {
      authState = "needs_auth";
    }
  } else {
    authState = "needs_auth";
  }

  const agent = insertAgent({
    id: agentId,
    card_url: card_url.trim().replace(/\/$/, ""),
    name: card.name,
    description: card.description ?? null,
    icon_url: card.iconUrl ?? null,
    agent_card_json: JSON.stringify(card),
    security_type: security.type,
    oidc_issuer: security.issuer ?? null,
    oidc_client_id: oidc_client_id ?? null,
    oidc_client_secret: oidc_client_secret ?? null,
    access_token: accessToken,
    refresh_token: refreshToken,
    token_expires_at: tokenExpiresAt,
    auth_state: authState,
  });

  return c.json({ agent: { id: agent.id, name: agent.name, auth_state: agent.auth_state, security_type: agent.security_type } });
});

// Delete an agent
app.delete("/api/agents/:id", (c) => {
  const id = c.req.param("id");
  deleteAgent(id);
  return c.json({ ok: true });
});

// ─── Agent OIDC connection flow ──────────────────────────────────────────────────

// Start OIDC flow for connecting to an agent (GET — browser redirect)
app.get("/api/agents/:id/connect", async (c) => {
  const agent = getAgent(c.req.param("id"));
  if (!agent) return c.json({ error: "Agent not found" }, 404);

  if (agent.security_type !== "oidc") {
    return c.json({ error: "Agent does not use OIDC" }, 400);
  }

  if (!agent.oidc_client_id) {
    return c.json({ error: "OIDC client_id required — provide it in the agent credentials" }, 400);
  }

  // No client_secret needed — Pocket ID supports PKCE-only (none auth method)
  const issuer = agent.oidc_issuer!;
  const discovery = await discoverOIDC(issuer);

  const state = await randomString(16);
  const { verifier, challenge } = await generatePkce();

  insertOIDCFlow({
    state,
    agent_id: agent.id,
    issuer,
    client_id: agent.oidc_client_id,
    client_secret: agent.oidc_client_secret || "",
    code_verifier: verifier,
    redirect_uri: AGENT_OIDC_REDIRECT,
    return_url: `/agents/${agent.id}`,
  });

  const authUrl = buildAuthorizeUrl({
    authorizeEndpoint: discovery.authorization_endpoint,
    clientId: agent.oidc_client_id,
    redirectUri: AGENT_OIDC_REDIRECT,
    scope: "openid profile email",
    state,
    codeChallenge: challenge,
  });

  return c.redirect(authUrl);
});

// ─── Device code flow (no redirect URI or client secret needed) ────────────────

// Start device code flow for connecting to an agent
app.post("/api/agents/:id/device-code", async (c) => {
  const agent = getAgent(c.req.param("id"));
  if (!agent) return c.json({ error: "Agent not found" }, 404);
  if (agent.security_type !== "oidc") return c.json({ error: "Agent does not use OIDC" }, 400);

  const issuer = agent.oidc_issuer!;
  const discovery = await discoverOIDC(issuer);
  const clientId = agent.oidc_client_id || CONSOLE_OIDC_CLIENT_ID;

  const deviceCode = await startDeviceCode({
    deviceAuthorizationEndpoint: discovery.device_authorization_endpoint,
    clientId,
  });

  // Store the device code + agent info for polling
  insertOIDCFlow({
    state: deviceCode.device_code,
    agent_id: agent.id,
    issuer,
    client_id: clientId,
    client_secret: agent.oidc_client_secret || "",
    code_verifier: deviceCode.device_code,
    redirect_uri: "",
    return_url: `/agents/${agent.id}`,
  });

  return c.json({
    user_code: deviceCode.user_code,
    verification_uri: deviceCode.verification_uri,
    verification_uri_complete: deviceCode.verification_uri_complete,
    device_code: deviceCode.device_code,
    expires_in: deviceCode.expires_in,
    interval: deviceCode.interval || 5,
  });
});

// Poll for device code completion
app.post("/api/agents/:id/device-code/poll", async (c) => {
  const agent = getAgent(c.req.param("id"));
  if (!agent) return c.json({ error: "Agent not found" }, 404);

  const body = await c.req.json().catch(() => ({}));
  const deviceCode = body.device_code;
  if (!deviceCode) return c.json({ error: "device_code required" }, 400);

  const flow = getOIDCFlow(deviceCode);
  if (!flow) return c.json({ error: "Invalid or expired device code" }, 400);

  const discovery = await discoverOIDC(flow.issuer);
  const result = await pollDeviceToken({
    tokenEndpoint: discovery.token_endpoint,
    deviceCode: flow.code_verifier,
    clientId: flow.client_id,
  });

  if (result.pending) return c.json({ status: "pending" });
  if (result.error) {
    deleteOIDCFlow(deviceCode);
    return c.json({ status: "error", error: result.error });
  }

  // Success — store the token
  const expiresIn = result.expires_in ?? 3600;
  updateAgent(flow.agent_id!, {
    access_token: result.access_token || result.id_token,
    refresh_token: result.refresh_token ?? null,
    token_expires_at: Date.now() + expiresIn * 1000,
    auth_state: "connected",
  });

  deleteOIDCFlow(deviceCode);
  return c.json({ status: "completed" });
});

// Update agent OIDC credentials
app.post("/api/agents/:id/credentials", async (c) => {
  const agent = getAgent(c.req.param("id"));
  if (!agent) return c.json({ error: "Agent not found" }, 404);

  const body = await c.req.json();
  const updated = updateAgent(agent.id, {
    oidc_client_id: body.client_id ?? agent.oidc_client_id,
    oidc_client_secret: body.client_secret ?? agent.oidc_client_secret,
    auth_state: body.client_id ? "needs_auth" : agent.auth_state,
  });

  return c.json({ agent: { id: updated?.id, auth_state: updated?.auth_state } });
});

// OIDC callback for agent connection
app.get("/api/agent/oidc/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");
  const error = c.req.query("error");

  if (error) return c.html(renderErrorPage(`Agent authentication error: ${error}`));
  if (!code || !state) return c.html(renderErrorPage("Missing code or state"));

  const flow = getOIDCFlow(state);
  if (!flow) return c.html(renderErrorPage("Invalid or expired state"));

  deleteOIDCFlow(state);

  const discovery = await discoverOIDC(flow.issuer);
  const tokens = await exchangeCode({
    tokenEndpoint: discovery.token_endpoint,
    code,
    redirectUri: flow.redirect_uri,
    clientId: flow.client_id,
    clientSecret: flow.client_secret,
    codeVerifier: flow.code_verifier,
  });

  if (!tokens.access_token && !tokens.id_token) {
    return c.html(renderErrorPage("No tokens returned from agent OIDC provider"));
  }

  const expiresIn = tokens.expires_in ?? 3600;
  updateAgent(flow.agent_id!, {
    access_token: tokens.access_token ?? tokens.id_token,
    refresh_token: tokens.refresh_token ?? null,
    token_expires_at: Date.now() + expiresIn * 1000,
    auth_state: "connected",
  });

  return c.redirect(flow.return_url || "/");
});

// ─── GitHub connection (for repo picking + opening PRs from jobs) ──────────────

app.get("/api/github/status", (c) => {
  const token = getSetting("github_token");
  const login = getSetting("github_login");
  return c.json({
    configured: GITHUB_CLIENT_ID !== "",
    connected: !!token,
    login: login || null,
  });
});

app.get("/api/github/login", async (c) => {
  if (!GITHUB_CLIENT_ID) return c.json({ error: "GITHUB_CLIENT_ID not configured on the server" }, 400);
  const state = await randomString(16);
  setCookie(c, GITHUB_STATE_COOKIE, state, { maxAge: 600, path: "/", httpOnly: true, secure: COOKIE_SECURE, sameSite: "Lax" });
  const authUrl = buildGithubAuthorizeUrl({
    clientId: GITHUB_CLIENT_ID,
    redirectUri: GITHUB_OAUTH_REDIRECT,
    state,
  });
  return c.redirect(authUrl);
});

app.get("/api/github/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");
  const error = c.req.query("error");
  if (error) return c.html(renderErrorPage(`GitHub authentication error: ${error}`));
  if (!code || !state) return c.html(renderErrorPage("Missing code or state"));

  const cookies = parseCookies(c.req.raw);
  if (cookies[GITHUB_STATE_COOKIE] !== state) return c.html(renderErrorPage("Invalid state"));
  setCookie(c, GITHUB_STATE_COOKIE, "", { maxAge: 0, path: "/" });

  try {
    const tokens = await exchangeGithubCode({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      code,
      redirectUri: GITHUB_OAUTH_REDIRECT,
    });
    setSetting("github_token", tokens.access_token);
    const user = await getGithubUser(tokens.access_token);
    setSetting("github_login", user.login);
  } catch (e) {
    return c.html(renderErrorPage(`GitHub connection failed: ${(e as Error).message}`));
  }

  return c.redirect("/");
});

app.get("/api/github/repos", async (c) => {
  const token = getSetting("github_token");
  if (!token) return c.json({ error: "GitHub not connected" }, 400);
  try {
    const repos = await listGithubRepos(token);
    console.log(`GitHub repos fetched: ${repos.length}`);
    return c.json({
      repos: repos.map(r => ({
        full_name: r.full_name, private: r.private,
        default_branch: r.default_branch, html_url: r.html_url,
      })),
    });
  } catch (e) {
    console.error("Failed to list GitHub repos:", e);
    return c.json({ error: (e as Error).message }, 502);
  }
});

// ─── Jobs (bot + repo + instruction → PR, run in a fresh boxd container) ───────

app.get("/api/jobs", (c) => c.json({ jobs: listJobs() }));

app.get("/api/jobs/:id", (c) => {
  const job = getJob(c.req.param("id"));
  if (!job) return c.json({ error: "Job not found" }, 404);
  return c.json({ job });
});

app.post("/api/jobs", async (c) => {
  const body = await c.req.json();
  const { agent_id, repo, instruction } = body;
  if (!agent_id || !repo || !instruction) {
    return c.json({ error: "agent_id, repo, and instruction are required" }, 400);
  }
  const agent = getAgent(agent_id);
  if (!agent) return c.json({ error: "Agent not found" }, 404);
  if (!getSetting("github_token")) return c.json({ error: "GitHub not connected" }, 400);

  const job = createJob(agent_id, repo, instruction);
  // Fire and forget — job status/log is polled via GET /api/jobs/:id.
  runJob(job.id).catch((e) => console.error(`Job ${job.id} crashed:`, e));

  return c.json({ job });
});

// ─── Conversations & Messaging ──────────────────────────────────────────────────

// List conversations for an agent
app.get("/api/agents/:id/conversations", (c) => {
  const agentId = c.req.param("id");
  const convs = listConversations(agentId);
  return c.json({ conversations: convs });
});

// Create a new conversation
app.post("/api/agents/:id/conversations", (c) => {
  const agentId = c.req.param("id");
  const conv = createConversation(agentId);
  return c.json({ conversation: conv });
});

// Get messages in a conversation
app.get("/api/conversations/:convId/messages", (c) => {
  const convId = c.req.param("convId");
  const msgs = listMessages(convId);
  return c.json({ messages: msgs });
});

// Send a message to an agent via A2A (non-streaming)
app.post("/api/conversations/:convId/send", async (c) => {
  const convId = c.req.param("convId");
  const conv = getConversation(convId);
  if (!conv) return c.json({ error: "Conversation not found" }, 404);

  const agent = getAgent(conv.agent_id);
  if (!agent) return c.json({ error: "Agent not found" }, 404);
  if (agent.auth_state !== "connected") return c.json({ error: "Agent not authenticated" }, 403);

  const body = await c.req.json();
  const text = body.text;
  if (!text) return c.json({ error: "text required" }, 400);

  // Save user message
  addMessage(convId, "user", text);

  // Refresh token if needed
  const freshAgent = await ensureFreshToken(agent);

  // Build A2A message
  const messageId = crypto.randomUUID();
  const card = JSON.parse(agent.agent_card_json);
  const a2aRequest = {
    message: {
      role: "ROLE_USER",
      parts: [{ kind: "text", text }],
      messageId,
      ...(conv.context_id ? { contextId: conv.context_id } : {}),
    },
    configuration: {
      acceptedOutputModes: ["text/plain", "application/json"],
    },
  };

  try {
    const response = await sendMessage(card.url, freshAgent.access_token, a2aRequest);
    const responseText = extractText(response);
    let taskId: string | undefined;

    if ("task" in response) {
      taskId = response.task.id;
      // Save context ID for multi-turn
      if (response.task.contextId && !conv.context_id) {
        updateConversationContext(convId, response.task.contextId);
      }
    }

    // Save agent response
    const msg = addMessage(convId, "agent", responseText || "(no response text)", taskId);
    return c.json({ message: msg, response });
  } catch (e) {
    if (e instanceof AuthError) {
      updateAgent(agent.id, { auth_state: "needs_auth" });
      return c.json({ error: "Authentication expired — please reconnect", needs_auth: true }, 401);
    }
    return c.json({ error: (e as Error).message }, 502);
  }
});

// Send a message to an agent via A2A (streaming SSE)
app.post("/api/conversations/:convId/stream", async (c) => {
  const convId = c.req.param("convId");
  const conv = getConversation(convId);
  if (!conv) return c.json({ error: "Conversation not found" }, 404);

  const agent = getAgent(conv.agent_id);
  if (!agent) return c.json({ error: "Agent not found" }, 404);
  if (agent.auth_state !== "connected") return c.json({ error: "Agent not authenticated" }, 403);

  const body = await c.req.json();
  const text = body.text;
  if (!text) return c.json({ error: "text required" }, 400);

  // Save user message
  addMessage(convId, "user", text);

  // Refresh token if needed
  const freshAgent = await ensureFreshToken(agent);

  // Build A2A message
  const messageId = crypto.randomUUID();
  const card = JSON.parse(agent.agent_card_json);
  const a2aRequest = {
    message: {
      role: "ROLE_USER",
      parts: [{ kind: "text", text }],
      messageId,
      ...(conv.context_id ? { contextId: conv.context_id } : {}),
    },
    configuration: {
      acceptedOutputModes: ["text/plain", "application/json"],
    },
  };

  return streamSSE(c, async (stream) => {
    try {
      let fullText = "";
      let taskId: string | undefined;

      for await (const event of sendMessageStream(card.url, freshAgent.access_token, a2aRequest)) {
        const text = extractText(event);

        if ("artifactUpdate" in event) {
          // Artifact updates: if not append, replace; if append, concatenate.
          // Guard the replace branch on non-empty text — some agents (seen
          // with billy's ADK-based backend) send a trailing artifactUpdate
          // with an empty `data` part and no `append` flag as their final
          // lastChunk marker, reusing the streaming artifact's id. Without
          // this guard that event replaces the fully-accumulated fullText
          // with "" right before the loop ends, so `if (fullText)` below
          // skips addMessage() and the reply — already streamed correctly to
          // the client — never gets persisted. The client then re-fetches
          // history after the stream closes and the message vanishes, since
          // it was never actually saved.
          if (event.artifactUpdate.append) {
            fullText += text;
          } else if (text) {
            fullText = text;
          }
        } else if (text) {
          // Message or statusUpdate: replace
          fullText = text;
        }

        if ("task" in event) {
          taskId = event.task.id;
          if (event.task.contextId && !conv.context_id) {
            updateConversationContext(convId, event.task.contextId);
          }
        }

        await stream.writeSSE({ data: JSON.stringify(event) });
      }

      // Save the full agent response
      if (fullText) {
        addMessage(convId, "agent", fullText, taskId);
      }
    } catch (e) {
      const err = e as Error;
      await stream.writeSSE({ data: JSON.stringify({ error: err.message }) });
      if (e instanceof AuthError) {
        updateAgent(agent.id, { auth_state: "needs_auth" });
      }
    }
  });
});

// ─── Static file serving ───────────────────────────────────────────────────────

// Serve built frontend from /public
app.use("/*", serveStatic({ root: "./public" }));

// SPA fallback
app.get("/*", serveStatic({ path: "./public/index.html" }));

// ─── Error page ────────────────────────────────────────────────────────────────

function renderErrorPage(message: string): string {
  return `<!doctype html><html><body style="font-family:sans-serif;padding:2rem;color:#dc2626">
    <h1>Connection Error</h1><p>${message}</p>
    <p><a href="/">← Back to Orchestral</a></p>
  </body></html>`;
}

// ─── Start ──────────────────────────────────────────────────────────────────────

// Jobs are fire-and-forget in-process promises — they don't survive a
// restart/redeploy. Mark anything still "in flight" from a previous process
// as failed instead of leaving it stuck forever in the UI.
for (const job of listJobs()) {
  if (!["done", "failed"].includes(job.status)) {
    updateJob(job.id, { status: "failed", error: "Interrupted by server restart" });
    appendJobLog(job.id, "✗ interrupted by server restart");
  }
}

console.log(`🎵 Orchestral — A2A Agent Orchestration Console`);
console.log(`   → http://localhost:${PORT}`);
console.log(`   Auth: ${AUTH_ENABLED ? "enabled (OIDC via " + CONSOLE_OIDC_ISSUER + ")" : "disabled (dev mode)"}`);

export default {
  hostname: "0.0.0.0",
  port: PORT,
  fetch: app.fetch,
};
