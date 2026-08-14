/**
 * Mock A2A server for testing orchestral without a real agent.
 * Run: bun run src/server/mock-a2a.ts
 */

import { Hono } from "hono";
import { streamSSE } from "hono/streaming";

const app = new Hono();
const PORT = 4748;

// ─── Agent Card ────────────────────────────────────────────────────────────────

app.get("/.well-known/agent-card.json", (c) => {
  return c.json({
    protocolVersion: "1.0",
    name: "Think (Mock)",
    description: "A mock A2A agent for testing orchestral. Responds with echo + thinking.",
    url: `http://localhost:${PORT}`,
    preferredTransport: "JSONRPC",
    version: "0.1.0",
    capabilities: {
      streaming: true,
      pushNotifications: false,
      stateTransitionHistory: true,
      extendedAgentCard: false,
    },
    defaultInputModes: ["text/plain"],
    defaultOutputModes: ["text/plain"],
    skills: [
      {
        id: "chat",
        name: "General Chat",
        description: "Echo and thinking responses for testing.",
        tags: ["chat", "test"],
        examples: ["Hello", "What can you do?"],
      },
    ],
    // No security — open access for testing
    securitySchemes: {},
    security: [],
  });
});

// ─── A2A REST endpoints ───────────────────────────────────────────────────────────

app.post("/message:send", async (c) => {
  const body = await c.req.json();
  const text = body.message?.parts?.map((p: any) => p.text).join("") || "";
  const taskId = crypto.randomUUID();
  const contextId = body.message?.contextId || `ctx-${Date.now()}`;

  // Simulate thinking
  const responseText = `🤔 You said: "${text}"\n\nThis is a mock A2A response. In production, this would come from the Think agent at think.latha.org. The Think agent has persistent memory, workspace tools, and Linear integration.`;

  return c.json({
    task: {
      id: taskId,
      contextId,
      status: {
        state: "TASK_STATE_COMPLETED",
        message: {
          role: "ROLE_AGENT",
          parts: [{ kind: "text", text: responseText }],
          messageId: crypto.randomUUID(),
          taskId,
          contextId,
        },
      },
      history: [
        {
          role: "ROLE_USER",
          parts: [{ kind: "text", text }],
          messageId: body.message?.messageId || crypto.randomUUID(),
          taskId,
          contextId,
        },
        {
          role: "ROLE_AGENT",
          parts: [{ kind: "text", text: responseText }],
          messageId: crypto.randomUUID(),
          taskId,
          contextId,
        },
      ],
      kind: "task",
    },
  });
});

app.post("/message:stream", async (c) => {
  const body = await c.req.json();
  const text = body.message?.parts?.map((p: any) => p.text).join("") || "";
  const taskId = crypto.randomUUID();
  const contextId = body.message?.contextId || `ctx-${Date.now()}`;

  return streamSSE(c, async (stream) => {
    // Working status
    await stream.writeSSE({
      data: JSON.stringify({
        task: {
          id: taskId,
          contextId,
          status: { state: "TASK_STATE_WORKING" },
          kind: "task",
        },
      }),
    });

    await new Promise((r) => setTimeout(r, 200));

    // Stream the response word by word
    const responseText = `🤔 You said: "${text}"\n\nThis is a streaming mock A2A response. Each word is streamed via Server-Sent Events, simulating how a real agent would stream its output.`;
    const words = responseText.split(" ");

    let accumulated = "";
    for (let i = 0; i < words.length; i++) {
      accumulated += (i > 0 ? " " : "") + words[i];
      await stream.writeSSE({
        data: JSON.stringify({
          artifactUpdate: {
            taskId,
            contextId,
            artifact: {
              artifactId: "stream-1",
              name: "response",
              parts: [{ kind: "text", text: accumulated }],
            },
            lastChunk: i === words.length - 1,
            kind: "artifact-update",
          },
        }),
      });
      await new Promise((r) => setTimeout(r, 50));
    }

    // Completion
    await stream.writeSSE({
      data: JSON.stringify({
        statusUpdate: {
          taskId,
          contextId,
          status: {
            state: "TASK_STATE_COMPLETED",
            message: {
              role: "ROLE_AGENT",
              parts: [{ kind: "text", text: responseText }],
              messageId: crypto.randomUUID(),
            },
          },
          final: true,
          kind: "status-update",
        },
      }),
    });
  });
});

app.get("/tasks/:id", (c) => {
  return c.json({ error: "Task not found" }, 404);
});

console.log(`🤖 Mock A2A server → http://localhost:${PORT}`);
export default { port: PORT, fetch: app.fetch };
