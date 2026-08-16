# Orchestral — A2A Agent Orchestration Console

A web app that lets you **OIDC into A2A agents**, **add them to a web interface**, and **message them** using the [Agent2Agent (A2A) protocol](https://a2a-protocol.org/).

## Does A2A have OIDC as part of the spec?

**Yes.** The A2A specification includes `OpenIdConnectSecurityScheme` (Section 4.5.5) as one of the built-in security schemes. An agent's Agent Card declares its security requirements via the `securitySchemes` and `security` fields. When an agent declares an OIDC scheme, it specifies an `openIdConnectUrl` pointing to the OIDC provider's discovery endpoint. The client then performs a standard OIDC Authorization Code flow with PKCE to obtain tokens, which are sent as `Authorization: Bearer` headers on every A2A request.

Other security schemes in the spec:
- `APIKeySecurityScheme`
- `HTTPAuthSecurityScheme` (e.g., Bearer, Basic)
- `OAuth2SecurityScheme` (with Authorization Code, Client Credentials, and Device Code flows)
- `MutualTLSSecurityScheme`

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Orchestral (this app)                  │
│                                                           │
│  ┌─────────┐    ┌──────────┐    ┌──────────────────────┐  │
│  │ Web UI  │◄──►│ Hono API │◄──►│ A2A Client + OIDC    │  │
│  │ (Preact)│    │ (Bun)    │    │ (fetch + jose)       │  │
│  └─────────┘    └──────────┘    └──────────┬───────────┘  │
│                                             │              │
│  ┌──────────┐                                │              │
│  │ SQLite   │◄────────────────────────────────┘              │
│  │ Storage  │                                               │
│  └──────────┘                                               │
└─────────────────────────────────────────────────────────────┘
                    │ A2A + Bearer Token
                    ▼
┌─────────────────────────────────────────────────────────┐
│              A2A Agent (e.g., think.latha.org)            │
│                                                           │
│  /.well-known/agent-card.json   ← Agent Card discovery   │
│  /message:send                  ← A2A REST endpoint      │
│  /message:stream                ← A2A streaming (SSE)    │
│  /tasks/:id                     ← Task status            │
│                                                           │
│  OIDC: Pocket ID (id.openbao.boxd.sh)                     │
└─────────────────────────────────────────────────────────┘
```

## Features

- **Agent Discovery**: Add agents by URL — orchestral fetches their `/.well-known/agent-card.json`
- **OIDC Authentication**: When an agent declares `OpenIdConnectSecurityScheme`, orchestral performs Authorization Code + PKCE flow against the agent's OIDC provider and stores the resulting Bearer token
- **A2A Messaging**: Send messages to agents via the HTTP+JSON/REST binding (`POST /message:send`, `POST /message:stream`)
- **Streaming**: Real-time streaming responses via Server-Sent Events
- **Multi-turn Conversations**: Context IDs are maintained across messages for conversational continuity
- **Token Refresh**: Automatic refresh of expired tokens using stored refresh tokens
- **Console Auth**: The orchestral console itself can be protected with OIDC (same Pocket ID provider)

## Quick Start

### 1. Install dependencies

```sh
cd orchestral
bun install
```

### 2. Build the frontend

```sh
bun run build
```

### 3. Start the server

```sh
# Dev mode (no auth required for the console itself)
bun run dev

# Or with OIDC auth for the console (the client must first be registered in Pocket ID):
export OIDC_ISSUER="https://id.openbao.boxd.sh"
export OIDC_CLIENT_ID="d64f29d9-7239-46e7-8a62-d7aa42b07603"
# Public clients use PKCE and do not need a client secret
unset OIDC_CLIENT_SECRET
export ORCHESTRAL_URL="https://orchestral.example.com" # the public URL users visit
bun run dev
```

In Pocket ID, register an OIDC application and add this **exact** redirect URI:
`https://orchestral.example.com/api/auth/callback` (or
`http://localhost:4747/api/auth/callback` for local-only testing). Use the registered client ID above. Orchestral uses Authorization Code + PKCE,
so a Pocket ID public client does not require a client secret. If `OIDC_CLIENT_ID` is omitted, the console stays in development mode; if it
is set to a value that was not registered in Pocket ID, Pocket ID responds with
“The requested OAuth 2.0 Client does not exist.”

Open `http://localhost:4747` (or the configured public URL).

### 4. Test with the mock A2A server

```sh
# In another terminal:
bun run src/server/mock-a2a.ts

# Then in the orchestral UI:
# 1. Click "Add Agent"
# 2. Enter: http://localhost:4748
# 3. The mock agent has no auth — you can message immediately
```

### 5. Connect to the real Think agent

The `think` agent at `think.latha.org` has been updated to serve an A2A Agent Card and A2A REST endpoints. To connect:

1. Click "Add Agent" in orchestral
2. Enter: `https://think.latha.org`
3. Expand "OIDC credentials" and enter your Pocket ID client ID and secret (registered at `id.openbao.boxd.sh`)
4. Click "Add Agent"
5. Click "Connect via OIDC" — you'll be redirected to Pocket ID to authenticate
6. After auth, you can message the Think agent via A2A

### 6. Jobs — bot + repo + instruction → PR

Jobs let you pick a repo and a connected bot, describe a task, and orchestral
will spin up a fresh [boxd](https://boxd.sh) container, clone the repo into
it, ask the bot for a patch, apply it, push a branch, and open a pull
request — no local setup needed per run.

Requirements:

1. **`boxd` CLI** installed and authenticated on the machine running
   orchestral (it shells out to `boxd machine new/exec/cp`). This means
   orchestral itself should run on a boxd machine, or wherever `boxd auth`
   is already logged in.
2. **A GitHub OAuth App** — create one at
   [github.com/settings/developers](https://github.com/settings/developers)
   with callback URL `${ORCHESTRAL_URL}/api/github/callback`, then set:
   ```sh
   export GITHUB_CLIENT_ID="..."
   export GITHUB_CLIENT_SECRET="..."
   ```
3. In the orchestral UI, open **🚀 Jobs**, click **Connect GitHub**, pick a
   repo and a connected bot, describe the task, and click **Run Job**.

The bot is asked (via a normal A2A text message) to reply with a unified
diff implementing the instruction; orchestral applies that diff inside the
container and opens the PR with `gh pr create`. This works best with bots
that are good at returning clean diffs from a file listing + instruction —
it's not a full coding-agent sandbox (the bot itself doesn't get shell
access inside the container, only the text prompt).

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4747` | Orchestral server port |
| `ORCHESTRAL_URL` | `http://localhost:$PORT` | Public URL (for OIDC redirect) |
| `OIDC_ISSUER` | `https://id.openbao.boxd.sh` | Console OIDC issuer |
| `OIDC_CLIENT_ID` | `orchestral` | Console OIDC client ID |
| `OIDC_CLIENT_SECRET` | (empty = dev mode) | Console OIDC client secret |
| `SESSION_SECRET` | `orchestral-dev-secret-change-me` | HMAC key for session JWTs |
| `GITHUB_CLIENT_ID` | (empty = jobs disabled) | GitHub OAuth App client ID |
| `GITHUB_CLIENT_SECRET` | (empty) | GitHub OAuth App client secret |

## A2A Protocol Details

Orchestral uses the **HTTP+JSON/REST binding** of the A2A protocol:

| Operation | HTTP Method & Path |
|-----------|-------------------|
| Send message | `POST /message:send` |
| Send streaming message | `POST /message:stream` (SSE response) |
| Get task | `GET /tasks/{id}` |
| List tasks | `GET /tasks` |
| Cancel task | `POST /tasks/{id}:cancel` |
| Subscribe to task | `POST /tasks/{id}:subscribe` (SSE response) |
| Agent Card | `GET /.well-known/agent-card.json` |
| Extended Agent Card | `GET /extendedAgentCard` |

Content type: `application/a2a+json`
Authentication: `Authorization: Bearer <token>` (token from OIDC flow)

## Project Structure

```
orchestral/
├── src/
│   ├── server/
│   │   ├── index.ts         # Hono server — API routes + static file serving
│   │   ├── store.ts         # SQLite storage (agents, conversations, messages, OIDC flows)
│   │   ├── oidc.ts          # OIDC client (PKCE, discovery, token exchange, session JWTs)
│   │   ├── a2a-client.ts    # A2A JSON-RPC/REST client (fetch cards, send/stream messages)
│   │   ├── a2a-types.ts     # A2A protocol TypeScript types
│   │   └── mock-a2a.ts      # Mock A2A server for testing
│   └── client/
│       └── main.tsx         # Preact + HTM frontend (agent list, chat UI, add agent, OIDC connect)
├── public/
│   ├── index.html           # HTML entry point
│   └── app.js               # Built frontend bundle
├── package.json
└── tsconfig.json
```

## Think Agent A2A Adapter

The `think` agent (`/home/nandi/code/think`) has been updated with:

- **`src/a2a.ts`** — A2A protocol adapter:
  - `/.well-known/agent-card.json` — Agent Card declaring Think's capabilities, skills, and OIDC security scheme
  - `POST /message:send` — Non-streaming A2A message endpoint (bridges to Think's `runTurn`)
  - `POST /message:stream` — Streaming A2A endpoint (SSE with task/artifact/status events)
  - `GET /tasks/:id` — Task status endpoint
  - Bearer token verification against Pocket ID JWKS
- **`src/server.ts`** — Updated to route A2A requests before the session gate (A2A uses Bearer tokens, not session cookies)

The Agent Card declares:
```json
{
  "securitySchemes": {
    "pocketid": {
      "openIdConnectSecurityScheme": {
        "type": "openIdConnect",
        "openIdConnectUrl": "https://id.openbao.boxd.sh"
      }
    }
  },
  "security": [{ "pocketid": [] }]
}
```

## Tech Stack

- **Runtime**: Bun
- **Server**: Hono
- **Storage**: SQLite (bun:sqlite)
- **Frontend**: Preact + HTM (no JSX build step required)
- **OIDC**: jose (JWT, JWKS, PKCE)
- **A2A**: HTTP+JSON/REST binding with SSE streaming
