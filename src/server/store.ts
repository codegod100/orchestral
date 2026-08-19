/**
 * SQLite-backed storage for orchestral.
 */

import { Database } from "bun:sqlite";
import { existsSync } from "node:fs";
import path from "node:path";

// Store the DB on the persistent volume when one's mounted (Railway mounts
// orchestral's volume at /data — see railway.json / the service's volume
// config), falling back to the working directory for local dev where there
// is no volume. Without this, the DB was created at a bare relative path,
// which resolves inside the container's ephemeral filesystem — every fresh
// deploy got a brand new empty database, silently dropping all agents, the
// GitHub OAuth token, and job history. DATA_DIR can override either way.
const DATA_DIR = process.env.DATA_DIR ?? (existsSync("/data") ? "/data" : ".");
const DB_PATH = path.join(DATA_DIR, "orchestral.db");
console.log(`Using SQLite DB at ${DB_PATH}`);

const db = new Database(DB_PATH, { create: true });
db.exec("PRAGMA journal_mode = WAL;");
db.exec("PRAGMA foreign_keys = ON;");

// Additive migrations for existing databases
for (const col of ["atproto_did TEXT", "atproto_handle TEXT"]) {
  try { db.exec(`ALTER TABLE agents ADD COLUMN ${col}`); } catch { /* already exists */ }
}

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
    auth_state TEXT,
    atproto_did TEXT,
    atproto_handle TEXT
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

  CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    agent_id TEXT NOT NULL,
    repo TEXT NOT NULL,
    instruction TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'queued',
    machine_name TEXT,
    branch TEXT,
    pr_url TEXT,
    log TEXT NOT NULL DEFAULT '',
    error TEXT,
    created_at INTEGER DEFAULT (unixepoch()),
    updated_at INTEGER DEFAULT (unixepoch()),
    FOREIGN KEY (agent_id) REFERENCES agents(id) ON DELETE CASCADE
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
  atproto_did: string | null;
  atproto_handle: string | null;
}

export function insertAgent(a: Omit<AgentRecord, "created_at">): AgentRecord {
  db.prepare(`
    INSERT INTO agents (id, card_url, name, description, icon_url, agent_card_json, security_type, oidc_issuer, oidc_client_id, oidc_client_secret, access_token, refresh_token, token_expires_at, auth_state, atproto_did, atproto_handle)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    a.id, a.card_url, a.name, a.description, a.icon_url, a.agent_card_json,
    a.security_type, a.oidc_issuer, a.oidc_client_id, a.oidc_client_secret,
    a.access_token, a.refresh_token, a.token_expires_at, a.auth_state,
    a.atproto_did ?? null, a.atproto_handle ?? null
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
      access_token = ?, refresh_token = ?, token_expires_at = ?, auth_state = ?,
      atproto_did = ?, atproto_handle = ?
    WHERE id = ?
  `).run(
    merged.card_url, merged.name, merged.description, merged.icon_url, merged.agent_card_json,
    merged.security_type, merged.oidc_issuer, merged.oidc_client_id, merged.oidc_client_secret,
    merged.access_token, merged.refresh_token, merged.token_expires_at, merged.auth_state,
    merged.atproto_did ?? null, merged.atproto_handle ?? null,
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

// ─── Jobs ──────────────────────────────────────────────────────────────────
// A "job" is a single run: an agent (bot) working on a repo in a fresh boxd
// container, from an instruction to (hopefully) an open pull request.

export interface JobRecord {
  id: string;
  agent_id: string;
  repo: string;
  instruction: string;
  status: string;
  machine_name: string | null;
  branch: string | null;
  pr_url: string | null;
  log: string;
  error: string | null;
  created_at: number;
  updated_at: number;
}

export function createJob(agentId: string, repo: string, instruction: string): JobRecord {
  const id = crypto.randomUUID();
  db.prepare(`
    INSERT INTO jobs (id, agent_id, repo, instruction, status) VALUES (?, ?, ?, ?, 'queued')
  `).run(id, agentId, repo, instruction);
  return getJob(id)!;
}

export function getJob(id: string): JobRecord | null {
  return db.prepare("SELECT * FROM jobs WHERE id = ?").get(id) as JobRecord | null;
}

export function listJobs(): JobRecord[] {
  return db.prepare("SELECT * FROM jobs ORDER BY created_at DESC").all() as JobRecord[];
}

export function updateJob(id: string, updates: Partial<JobRecord>): JobRecord | null {
  const current = getJob(id);
  if (!current) return null;
  const merged = { ...current, ...updates, id };
  db.prepare(`
    UPDATE jobs SET status = ?, machine_name = ?, branch = ?, pr_url = ?, log = ?, error = ?, updated_at = unixepoch()
    WHERE id = ?
  `).run(merged.status, merged.machine_name, merged.branch, merged.pr_url, merged.log, merged.error, id);
  return getJob(id);
}

export function appendJobLog(id: string, line: string): void {
  const job = getJob(id);
  if (!job) return;
  const log = job.log ? `${job.log}\n${line}` : line;
  db.prepare("UPDATE jobs SET log = ?, updated_at = unixepoch() WHERE id = ?").run(log, id);
}

// ─── Settings ──────────────────────────────────────────────────────────────

export function getSetting(key: string): string | null {
  const row = db.prepare("SELECT value FROM settings WHERE key = ?").get(key) as any;
  return row?.value ?? null;
}

export function setSetting(key: string, value: string): void {
  db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)").run(key, value);
}
