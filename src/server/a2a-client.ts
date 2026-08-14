/**
 * A2A client: fetch Agent Cards, send messages, handle streaming.
 * Uses the HTTP+JSON/REST protocol binding from the A2A spec.
 */

import type { AgentCard, SendMessageRequest, SendMessageResponse, StreamResponse, Task } from "./a2a-types.ts";

// ─── Agent Card ────────────────────────────────────────────────────────────

/**
 * Fetch an Agent Card from a well-known URL.
 * Accepts:
 *   - Full URL to the agent card (e.g. https://agent.example.com/.well-known/agent-card.json)
 *   - Base URL (e.g. https://agent.example.com) — appends /.well-known/agent-card.json
 */
export async function fetchAgentCard(url: string): Promise<AgentCard> {
  let cardUrl = url.trim().replace(/\/$/, "");
  if (!cardUrl.endsWith("/.well-known/agent-card.json")) {
    if (cardUrl.includes("/.well-known/")) {
      // Already a well-known path
    } else {
      cardUrl = `${cardUrl}/.well-known/agent-card.json`;
    }
  }

  const res = await fetch(cardUrl, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch agent card: ${res.status} ${res.statusText}`);
  }
  const card = (await res.json()) as AgentCard;
  if (!card.name || !card.url) {
    throw new Error("Invalid agent card: missing name or url");
  }
  return card;
}

/**
 * Detect the security type from an Agent Card.
 * Returns { type, issuer? } or null if no security required.
 */
export function detectSecurity(card: AgentCard): {
  type: "oidc" | "oauth2" | "apiKey" | "httpAuth" | "none";
  issuer?: string;
  schemeName?: string;
} {
  if (!card.securitySchemes || !card.security) return { type: "none" };

  for (const securityEntry of card.security) {
    for (const [schemeName] of Object.entries(securityEntry)) {
      const scheme = card.securitySchemes[schemeName];
      if (!scheme) continue;

      if ("openIdConnectSecurityScheme" in scheme) {
        return {
          type: "oidc",
          issuer: scheme.openIdConnectSecurityScheme.openIdConnectUrl,
          schemeName,
        };
      }
      if ("oauth2SecurityScheme" in scheme) {
        return { type: "oauth2", schemeName };
      }
      if ("apiKeySecurityScheme" in scheme) {
        return { type: "apiKey", schemeName };
      }
      if ("httpAuthSecurityScheme" in scheme) {
        return { type: "httpAuth", schemeName };
      }
    }
  }
  return { type: "none" };
}

// ─── A2A Messaging (REST binding) ───────────────────────────────────────────

/**
 * Send a message to an A2A agent (non-streaming).
 * Uses the HTTP+JSON/REST binding: POST /message:send
 */
export async function sendMessage(
  agentUrl: string,
  accessToken: string | null,
  request: SendMessageRequest,
): Promise<SendMessageResponse> {
  const url = `${agentUrl.replace(/\/$/, "")}/message:send`;
  const headers: Record<string, string> = {
    "Content-Type": "application/a2a+json",
    Accept: "application/a2a+json",
  };
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(120_000),
  });

  if (res.status === 401) {
    throw new AuthError("Authentication required — token may be expired");
  }
  if (res.status === 403) {
    throw new AuthError("Authorization denied — insufficient permissions");
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`A2A send failed: ${res.status} ${res.statusText} — ${body}`);
  }

  return (await res.json()) as SendMessageResponse;
}

/**
 * Send a message to an A2A agent with streaming (SSE).
 * Uses the HTTP+JSON/REST binding: POST /message:stream
 * Returns an async generator of StreamResponse events.
 */
export async function* sendMessageStream(
  agentUrl: string,
  accessToken: string | null,
  request: SendMessageRequest,
): AsyncGenerator<StreamResponse> {
  const url = `${agentUrl.replace(/\/$/, "")}/message:stream`;
  const headers: Record<string, string> = {
    "Content-Type": "application/a2a+json",
    Accept: "text/event-stream",
  };
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(300_000),
  });

  if (res.status === 401) {
    throw new AuthError("Authentication required — token may be expired");
  }
  if (res.status === 403) {
    throw new AuthError("Authorization denied — insufficient permissions");
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`A2A stream failed: ${res.status} ${res.statusText} — ${body}`);
  }

  if (!res.body) throw new Error("No response body for stream");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    // Parse SSE events
    const events = buffer.split("\n\n");
    buffer = events.pop() || "";

    for (const event of events) {
      const lines = event.split("\n");
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6);
          try {
            yield JSON.parse(data) as StreamResponse;
          } catch {
            // Skip invalid JSON
          }
        }
      }
    }
  }
}

/**
 * Get a task by ID from an A2A agent.
 * GET /tasks/{id}
 */
export async function getTask(
  agentUrl: string,
  accessToken: string | null,
  taskId: string,
): Promise<Task> {
  const url = `${agentUrl.replace(/\/$/, "")}/tasks/${taskId}`;
  const headers: Record<string, string> = { Accept: "application/a2a+json" };
  if (accessToken) headers["Authorization"] = `Bearer ${accessToken}`;

  const res = await fetch(url, { headers, signal: AbortSignal.timeout(15_000) });
  if (!res.ok) throw new Error(`Get task failed: ${res.status}`);
  return (await res.json()) as Task;
}

/**
 * Extract text from an A2A response (task or message).
 */
export function extractText(response: SendMessageResponse | StreamResponse): string {
  if ("task" in response) {
    const task = response.task;
    // Check status message
    if (task.status?.message?.parts) {
      const text = partsToText(task.status.message.parts);
      if (text) return text;
    }
    // Check artifacts
    if (task.artifacts) {
      const texts = task.artifacts
        .map(a => partsToText(a.parts))
        .filter(Boolean);
      if (texts.length) return texts.join("\n\n");
    }
    // Check history (last agent message)
    if (task.history) {
      for (let i = task.history.length - 1; i >= 0; i--) {
        const msg = task.history[i];
        if (msg.role === "ROLE_AGENT") {
          const text = partsToText(msg.parts);
          if (text) return text;
        }
      }
    }
    return "";
  }
  if ("message" in response) {
    return partsToText(response.message.parts);
  }
  if ("statusUpdate" in response) {
    return partsToText(response.statusUpdate.status.message?.parts ?? []);
  }
  if ("artifactUpdate" in response) {
    return partsToText(response.artifactUpdate.artifact.parts);
  }
  return "";
}

function partsToText(parts: any[]): string {
  return parts
    .filter(p => p.kind === "text" || typeof p.text === "string")
    .map(p => p.text)
    .join("");
}

// ─── Error ──────────────────────────────────────────────────────────────────

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}
