/**
 * SQLite-backed storage for orchestral.
 */

import { Database } from "bun:sqlite";

const db = new Database("orchestral.db", { create: true });
db.exec("PRAGMA journal_mode = WAL;");
db.exec("PRAGMA foreign_keys = ON;");

// ─── Schema ────────────────────────────────────────────────────────────────

db.exec(`
  CREATE TABLE IF NOT EXISTS agents (
    id TEXT PRIMARY KEY,
    card_url TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    icon_url TEXT,
    agent_card_json TEXT NOT NULL,
    security_type TEXT,
    oidc_issuer TEXT,
    oidc_client_id TEXT,
    oidc_client_secret TEXT,
    access_token TEXT,
    refresh_token TEXT,
    token_expires_at INTEGER,
    created_at INTEGER DEFAULT (unixepoch()),
    auth_state TEXT
  );

  CREATE TABLE IF NOT EXISTS oidc_flows (
    state TEXT PRIMARY KEY,
    agent_id TEXT,
    issuer TEXT,
    client_id TEXT,
    client_secret TEXT,
    code_verifier TEXT,
    redirect_uri TEXT,
    return_url TEXT,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS conversations (
    id TEXT PRIMARY KEY,
    agent_id TEXT NOT NULL,
    context_id TEXT,
    created_at INTEGER DEFAULT (unixepoch()),
    FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL,
    role TEXT NOT NULL,
    text TEXT NOT NULL,
    task_id TEXT,
    created_at INTEGER DEFAULT (unixepoch()),
    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
`);

// ─── Agent Store ────────────────────────────────────────────────────────────

export interface AgentRecord {
  id: string;
  card_url: string;
  name: string;
  description: string | null;
  icon_url: string | null;
  agent_card_json: string;
  security_type: string | null;
  oidc_issuer: string | null;
  oidc_client_id: string | null;
  oidc_client_secret: string | null;
  access_token: string | null;
  refresh_token: string | null;
  token_expires_at: number | null;
  created_at: number;
  auth_state: string | null;
}

export function insertAgent(a: Omit<AgentRecord, "created_at">): AgentRecord {
  db.prepare(`
    INSERT INTO agents (id, card_url, name, description, icon_url, agent_card_json, security_type, oidc_issuer, oidc_client_id, oidc_client_secret, access_token, refresh_token, token_expires_at, auth_state)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    a.id, a.card_url, a.name, a.description, a.icon_url, a.agent_card_json,
    a.security_type, a.oidc_issuer, a.oidc_client_id, a.oidc_client_secret,
    a.access_token, a.refresh_token, a.token_expires_at, a.auth_state
  );
  return getAgent(a.id)!;
}

export function getAgent(id: string): AgentRecord | null {
  return db.prepare("SELECT * FROM agents WHERE id = ?").get(id) as AgentRecord | null;
}

export function listAgents(): AgentRecord[] {
  return db.prepare("SELECT * FROM agents ORDER BY created_at DESC").all() as AgentRecord[];
}

export function updateAgent(id: string, updates: Partial<AgentRecord>): AgentRecord | null {
  const current = getAgent(id);
  if (!current) return null;
  const merged = { ...current, ...updates, id };
  db.prepare(`
    UPDATE agents SET
      card_url = ?, name = ?, description = ?, icon_url = ?, agent_card_json = ?,
      security_type = ?, oidc_issuer = ?, oidc_client_id = ?, oidc_client_secret = ?,
      access_token = ?, refresh_token = ?, token_expires_at = ?, auth_state = ?
    WHERE id = ?
  `).run(
    merged.card_url, merged.name, merged.description, merged.icon_url, merged.agent_card_json,
    merged.security_type, merged.oidc_issuer, merged.oidc_client_id, merged.oidc_client_secret,
    merged.access_token, merged.refresh_token, merged.token_expires_at, merged.auth_state,
    id
  );
  return getAgent(id);
}

export function deleteAgent(id: string): void {
  db.prepare("DELETE FROM agents WHERE id = ?").run(id);
}

// ─── OIDC Flow Store ────────────────────────────────────────────────────────

export interface OIDCFlow {
  state: string;
  agent_id: string | null;
  issuer: string;
  client_id: string;
  client_secret: string;
  code_verifier: string;
  redirect_uri: string;
  return_url: string;
  created_at: number;
}

export function insertOIDCFlow(f: Omit<OIDCFlow, "created_at">): OIDCFlow {
  db.prepare(`
    INSERT OR REPLACE INTO oidc_flows (state, agent_id, issuer, client_id, client_secret, code_verifier, redirect_uri, return_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(f.state, f.agent_id, f.issuer, f.client_id, f.client_secret, f.code_verifier, f.redirect_uri, f.return_url);
  return getOIDCFlow(f.state)!;
}

export function getOIDCFlow(state: string): OIDCFlow | null {
  return db.prepare("SELECT * FROM oidc_flows WHERE state = ?").get(state) as OIDCFlow | null;
}

export function deleteOIDCFlow(state: string): void {
  db.prepare("DELETE FROM oidc_flows WHERE state = ?").run(state);
}

// ─── Conversation & Message Store ───────────────────────────────────────────

export function createConversation(agentId: string, contextId?: string) {
  const id = crypto.randomUUID();
  db.prepare("INSERT INTO conversations (id, agent_id, context_id) VALUES (?, ?, ?)").run(id, agentId, contextId ?? null);
  return { id, agent_id: agentId, context_id: contextId ?? null, created_at: Date.now() / 1000 };
}

export function getConversation(id: string) {
  return db.prepare("SELECT * FROM conversations WHERE id = ?").get(id) as any | null;
}

export function listConversations(agentId: string) {
  return db.prepare("SELECT * FROM conversations WHERE agent_id = ? ORDER BY created_at DESC").all(agentId) as any[];
}

export function addMessage(convId: string, role: string, text: string, taskId?: string) {
  const id = crypto.randomUUID();
  db.prepare("INSERT INTO messages (id, conversation_id, role, text, task_id) VALUES (?, ?, ?, ?, ?)").run(id, convId, role, text, taskId ?? null);
  return { id, conversation_id: convId, role, text, task_id: taskId ?? null, created_at: Date.now() / 1000 };
}

export function listMessages(convId: string) {
  return db.prepare("SELECT * FROM messages WHERE conversation_id = ? ORDER BY created_at ASC").all(convId) as any[];
}

export function updateConversationContext(convId: string, contextId: string) {
  db.prepare("UPDATE conversations SET context_id = ? WHERE id = ?").run(contextId, convId);
}

// ─── Settings ──────────────────────────────────────────────────────────────

export function getSetting(key: string): string | null {
  const row = db.prepare("SELECT value FROM settings WHERE key = ?").get(key) as any;
  return row?.value ?? null;
}

export function setSetting(key: string, value: string): void {
  db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)").run(key, value);
}
