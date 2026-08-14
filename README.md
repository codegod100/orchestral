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

# Or with OIDC auth for the console:
export OIDC_CLIENT_SECRET="your-pocket-id-client-secret"
bun run dev
```

Open `http://localhost:4747`.

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

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `4747` | Orchestral server port |
| `ORCHESTRAL_URL` | `http://localhost:$PORT` | Public URL (for OIDC redirect) |
| `OIDC_ISSUER` | `https://id.openbao.boxd.sh` | Console OIDC issuer |
| `OIDC_CLIENT_ID` | `orchestral` | Console OIDC client ID |
| `OIDC_CLIENT_SECRET` | (empty = dev mode) | Console OIDC client secret |
| `SESSION_SECRET` | `orchestral-dev-secret-change-me` | HMAC key for session JWTs |

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
