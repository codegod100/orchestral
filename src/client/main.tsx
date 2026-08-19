import { render } from "preact";
import { useState, useEffect, useCallback, useRef } from "preact/hooks";

// ─── API helpers ───────────────────────────────────────────────────────────────

async function api(path: string, opts?: RequestInit) {
  const res = await fetch(`/api${path}`, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", ...(opts?.headers ?? {}) },
    ...opts,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(body.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// ─── Components ────────────────────────────────────────────────────────────────

function App() {
  const [agents, setAgents] = useState<any[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [view, setView] = useState<"list" | "chat" | "add" | "jobs">("list");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const refreshAgents = useCallback(async () => {
    try {
      const data = await api("/agents");
      setAgents(data.agents || []);
    } catch (e) {
      console.error("Failed to load agents:", e);
    }
  }, []);

  const handleDeleteAgent = useCallback(async (agent: any) => {
    if (!confirm(`Remove "${agent.name}"? This deletes its conversation history too.`)) return;
    try {
      await api(`/agents/${agent.id}`, { method: "DELETE" });
      setSelectedAgent((prev: any) => {
        if (prev?.id === agent.id) {
          setView("list");
          return null;
        }
        return prev;
      });
      await refreshAgents();
    } catch (e: any) {
      alert(`Failed to remove agent: ${e.message}`);
    }
  }, [refreshAgents]);

  useEffect(() => {
    (async () => {
      try {
        const me = await api("/auth/me");
        setUser(me.user);
      } catch {}
      await refreshAgents();
      setLoading(false);
    })();
  }, []);

  const s = (extra?: string) => ({
    style: { ...(extra ? Object.fromEntries(extra.split(";").filter(Boolean).map(p => {
      const [k, v] = p.trim().split(":");
      return [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v.trim()];
    })) : {}) },
  });

  if (loading) return html`<div style=${{ padding: "2rem", color: "var(--text-dim)" }}>Loading…</div>`;

  return html`
    <div style=${{ display: "flex", height: "100vh", overflow: "hidden" }}>
      ${/* Sidebar */ ""}
      <aside style=${{
        width: "280px", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column",
        background: "var(--bg-card)", flexShrink: 0,
      }}>
        <div style=${{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>
          <h1 style=${{ fontSize: "1.1rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem" }}>
            🎵 Orchestral
          </h1>
          <p style=${{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "0.25rem" }}>
            A2A Agent Console
          </p>
        </div>

        <div style=${{ padding: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button
            onClick=${() => { setView("add"); setSelectedAgent(null); }}
            style=${{
              width: "100%", padding: "0.6rem 0.75rem", borderRadius: "var(--radius)",
              background: "var(--accent)", color: "white", border: "none", cursor: "pointer",
              fontWeight: 600, fontSize: "0.85rem",
            }}
          >
            + Add Agent
          </button>
          <button
            onClick=${() => { setView("jobs"); setSelectedAgent(null); }}
            style=${{
              width: "100%", padding: "0.6rem 0.75rem", borderRadius: "var(--radius)",
              background: view === "jobs" ? "var(--bg-hover)" : "transparent",
              border: "1px solid var(--border)", color: "var(--text)", cursor: "pointer",
              fontWeight: 600, fontSize: "0.85rem",
            }}
          >
            🚀 Jobs
          </button>
        </div>

        <div style=${{ flex: 1, overflowY: "auto", padding: "0 0.75rem" }}>
          ${agents.map(agent => html`
            <div
              key=${agent.id}
              onClick=${() => { setSelectedAgent(agent); setView("chat"); }}
              style=${{
                width: "100%", textAlign: "left", padding: "0.75rem", marginBottom: "0.25rem",
                borderRadius: "var(--radius)", border: "1px solid transparent",
                background: selectedAgent?.id === agent.id ? "var(--bg-hover)" : "transparent",
                color: "var(--text)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              ${agent.icon_url
                ? html`<img src=${agent.icon_url} style=${{ width: "1.5rem", height: "1.5rem", borderRadius: "50%" }} />`
                : html`<span style=${{ fontSize: "1.25rem" }}>🤖</span>`
              }
              <div style=${{ flex: 1, minWidth: 0 }}>
                <div style=${{ fontSize: "0.85rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  ${agent.name}
                </div>
                <div style=${{
                  fontSize: "0.7rem", marginTop: "0.15rem",
                  color: agent.auth_state === "connected" ? "var(--success)" : "var(--warning)",
                }}>
                  ${agent.auth_state === "connected" ? "● Connected" : "○ Needs auth"}
                </div>
              </div>
              <button
                onClick=${(e: any) => { e.stopPropagation(); handleDeleteAgent(agent); }}
                title="Remove agent"
                style=${{
                  background: "transparent", border: "none", color: "var(--text-dim)",
                  cursor: "pointer", fontSize: "0.9rem", padding: "0.25rem", lineHeight: 1,
                  flexShrink: 0, borderRadius: "var(--radius)",
                }}
              >
                🗑
              </button>
            </div>
          `)}
        </div>

        <div style=${{ padding: "0.75rem", borderTop: "1px solid var(--border)" }}>
          ${user
            ? html`<div style=${{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
              Signed in as ${user.name || user.email || user.sub}
              <br/><a href="/api/auth/logout" style=${{ color: "var(--accent)" }}>Log out</a>
            </div>`
            : html`<div style=${{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
              <a href="/api/auth/login" style=${{ color: "var(--accent)" }}>Sign in with Pocket ID</a>
            </div>`
          }
        </div>
      </aside>

      ${/* Main content */ ""}
      <main style=${{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
        ${view === "add" && html`<${AddAgent} onAdded=${(a) => { refreshAgents(); setSelectedAgent(a); setView("chat"); }} />`}
        ${view === "chat" && selectedAgent && html`<${ChatView} agent=${selectedAgent} onRefresh=${refreshAgents} onDelete=${() => handleDeleteAgent(selectedAgent)} />`}
        ${view === "jobs" && html`<${JobsView} agents=${agents} />`}
        ${view === "list" && html`<${EmptyState} />`}
      </main>
    </div>
  `;
}

function EmptyState() {
  return html`
    <div style=${{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "var(--text-dim)" }}>
      <div style=${{ fontSize: "3rem", marginBottom: "1rem" }}>🎵</div>
      <p style=${{ fontSize: "1rem" }}>Select an agent or add a new one to get started</p>
      <p style=${{ fontSize: "0.8rem", marginTop: "0.5rem", color: "var(--text-dimmer)" }}>
        Orchestral connects to A2A agents via OIDC and lets you message them
      </p>
    </div>
  `;
}

const JOB_STATUS_LABEL: Record<string, string> = {
  queued: "Queued",
  provisioning: "Provisioning container…",
  cloning: "Cloning repo…",
  running: "Bot is working…",
  patching: "Applying patch…",
  opening_pr: "Opening PR…",
  done: "Done",
  failed: "Failed",
};

function JobsView({ agents }: any) {
  const [github, setGithub] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [agentId, setAgentId] = useState("");
  const [repo, setRepo] = useState("");
  const [repoSearch, setRepoSearch] = useState("");
  const [instruction, setInstruction] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const connectedAgents = (agents || []).filter((a: any) => a.auth_state === "connected");
  const filteredRepos = repos.filter((r: any) =>
    r.full_name.toLowerCase().includes(repoSearch.trim().toLowerCase())
  );

  const refreshJobs = useCallback(async () => {
    try {
      const data = await api("/jobs");
      setJobs(data.jobs || []);
    } catch (e) {
      console.error("Failed to load jobs:", e);
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const status = await api("/github/status");
        setGithub(status);
        if (status.connected) {
          const data = await api("/github/repos");
          setRepos(data.repos || []);
        }
      } catch (e: any) {
        setError(e.message);
      }
      await refreshJobs();
    })();
  }, []);

  // Poll for job updates while any job is in-flight
  useEffect(() => {
    const active = jobs.some(j => !["done", "failed"].includes(j.status));
    if (!active) return;
    const t = setInterval(refreshJobs, 3000);
    return () => clearInterval(t);
  }, [jobs, refreshJobs]);

  async function handleSubmit(e?: any) {
    e?.preventDefault();
    if (!agentId || !repo || !instruction.trim() || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const data = await api("/jobs", {
        method: "POST",
        body: JSON.stringify({ agent_id: agentId, repo, instruction: instruction.trim() }),
      });
      setJobs(prev => [data.job, ...prev]);
      setInstruction("");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  return html`
    <div style=${{ maxWidth: "760px", margin: "0 auto", padding: "2rem", overflowY: "auto", flex: 1 }}>
      <h2 style=${{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>🚀 Jobs</h2>
      <p style=${{ fontSize: "0.8rem", color: "var(--text-dim)", marginBottom: "1.5rem" }}>
        Pick a repo and a bot, describe what to do, and orchestral spins up a fresh container,
        asks the bot for a patch, and opens a pull request.
      </p>

      ${!github?.configured && html`
        <div style=${{ padding: "0.9rem", background: "rgba(245,158,11,0.1)", border: "1px solid var(--warning)", borderRadius: "var(--radius)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
          GitHub isn't configured on the server yet. Set <code>GITHUB_CLIENT_ID</code> / <code>GITHUB_CLIENT_SECRET</code>
          from a GitHub OAuth App (callback: <code>/api/github/callback</code>) to enable jobs.
        </div>
      `}

      ${github?.configured && !github?.connected && html`
        <div style=${{ padding: "0.9rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", marginBottom: "1.5rem" }}>
          <p style=${{ fontSize: "0.85rem", marginBottom: "0.75rem" }}>Connect GitHub to pick a repo and open PRs.</p>
          <a href="/api/github/login" style=${{
            display: "inline-block", padding: "0.5rem 1rem", borderRadius: "var(--radius)",
            background: "var(--accent)", color: "white", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem",
          }}>
            🔗 Connect GitHub
          </a>
        </div>
      `}

      ${github?.connected && html`
        <div style=${{ fontSize: "0.8rem", color: "var(--success)", marginBottom: "1rem" }}>
          ● Connected to GitHub as ${github.login}
        </div>

        <form onSubmit=${handleSubmit} style=${{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <label style=${{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.3rem" }}>Repository</label>
            <input
              type="search"
              value=${repoSearch}
              onInput=${(e: any) => setRepoSearch(e.target.value)}
              placeholder="Search repositories…"
              aria-label="Search repositories"
              style=${{ ...inputStyle, marginBottom: "0.5rem" }}
            />
            <select value=${repo} onChange=${(e: any) => setRepo(e.target.value)} style=${{ ...inputStyle }}>
              <option value="">${filteredRepos.length ? "Select a repo…" : "No matching repos"}</option>
              ${filteredRepos.map((r: any) => html`<option key=${r.full_name} value=${r.full_name}>${r.full_name}${r.private ? " 🔒" : ""}</option>`)}
            </select>
          </div>

          <div>
            <label style=${{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.3rem" }}>Bot</label>
            <select value=${agentId} onChange=${(e: any) => setAgentId(e.target.value)} style=${{ ...inputStyle }}>
              <option value="">Select a bot…</option>
              ${connectedAgents.map((a: any) => html`<option key=${a.id} value=${a.id}>${a.name}</option>`)}
            </select>
            ${connectedAgents.length === 0 && html`<p style=${{ fontSize: "0.7rem", color: "var(--text-dimmer)", marginTop: "0.3rem" }}>No connected bots yet — add one first.</p>`}
          </div>

          <div>
            <label style=${{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.3rem" }}>Command</label>
            <textarea
              value=${instruction}
              onInput=${(e: any) => setInstruction(e.target.value)}
              placeholder="e.g. Fix the off-by-one error in the pagination helper"
              rows="3"
              style=${{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
            />
          </div>

          ${error && html`<div style=${{ color: "var(--danger)", fontSize: "0.8rem" }}>${error}</div>`}

          <button type="submit" disabled=${!agentId || !repo || !instruction.trim() || submitting} style=${{
            alignSelf: "flex-start", padding: "0.6rem 1.5rem", borderRadius: "var(--radius)",
            background: "var(--accent)", color: "white", border: "none", cursor: "pointer",
            fontWeight: 600, fontSize: "0.9rem",
            opacity: (!agentId || !repo || !instruction.trim() || submitting) ? 0.5 : 1,
          }}>
            ${submitting ? "Starting…" : "▶ Run Job"}
          </button>
        </form>
      `}

      <h3 style=${{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.75rem" }}>Recent jobs</h3>
      ${jobs.length === 0 && html`<p style=${{ fontSize: "0.8rem", color: "var(--text-dimmer)" }}>No jobs yet.</p>`}
      <div style=${{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        ${jobs.map((job: any) => html`
          <div key=${job.id} style=${{ border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "0.75rem 1rem", background: "var(--bg-card)" }}>
            <div style=${{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}
                 onClick=${() => setExpanded(expanded === job.id ? null : job.id)}>
              <span style=${{
                fontSize: "0.7rem", fontWeight: 700, padding: "0.15rem 0.5rem", borderRadius: "999px",
                background: job.status === "done" ? "rgba(34,197,94,0.15)" : job.status === "failed" ? "rgba(239,68,68,0.15)" : "rgba(99,102,241,0.15)",
                color: job.status === "done" ? "var(--success)" : job.status === "failed" ? "var(--danger)" : "var(--accent)",
              }}>
                ${JOB_STATUS_LABEL[job.status] || job.status}
              </span>
              <span style=${{ fontSize: "0.85rem", fontWeight: 600, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                ${job.repo}: ${job.instruction}
              </span>
              ${job.pr_url && html`
                <a href=${job.pr_url} target="_blank" onClick=${(e: any) => e.stopPropagation()} style=${{ fontSize: "0.75rem", color: "var(--accent)" }}>
                  View PR →
                </a>
              `}
            </div>
            ${expanded === job.id && html`
              <pre style=${{
                marginTop: "0.75rem", padding: "0.75rem", background: "var(--bg)", borderRadius: "8px",
                fontSize: "0.7rem", color: "var(--text-dim)", whiteSpace: "pre-wrap", maxHeight: "300px", overflowY: "auto",
              }}>${job.log || "(no log yet)"}${job.error ? `\n\nError: ${job.error}` : ""}</pre>
            `}
          </div>
        `)}
      </div>
    </div>
  `;
}

function AddAgent({ onAdded }: any) {
  const [cardUrl, setCardUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAdd() {
    setError("");
    setLoading(true);
    try {
      const data = await api("/agents", {
        method: "POST",
        body: JSON.stringify({ card_url: cardUrl }),
      });
      onAdded(data.agent);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return html`
    <div style=${{ maxWidth: "640px", margin: "0 auto", padding: "2rem", overflowY: "auto", flex: 1 }}>
      <h2 style=${{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>Add A2A Agent</h2>

      <div style=${{ marginBottom: "1.5rem" }}>
        <label style=${{ display: "block", fontSize: "0.85rem", color: "var(--text-dim)", marginBottom: "0.4rem" }}>
          Agent Card URL
        </label>
        <input
          type="text"
          value=${cardUrl}
          onInput=${(e: any) => setCardUrl(e.target.value)}
          placeholder="https://agent.example.com"
          style=${inputStyle}
        />
        <p style=${{ fontSize: "0.75rem", color: "var(--text-dimmer)", marginTop: "0.4rem" }}>
          The URL where the agent publishes its Agent Card. Orchestral will fetch /.well-known/agent-card.json.
          OIDC credentials are automatically configured for agents on the same identity provider.
        </p>
      </div>

      ${error && html`<div style=${{ padding: "0.75rem", background: "rgba(239,68,68,0.1)", border: "1px solid var(--danger)", borderRadius: "var(--radius)", color: "var(--danger)", fontSize: "0.85rem", marginBottom: "1rem" }}>
        ${error}
      </div>`}

      <button
        onClick=${handleAdd}
        disabled=${!cardUrl || loading}
        style=${{
          padding: "0.6rem 1.5rem", borderRadius: "var(--radius)", background: "var(--accent)",
          color: "white", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem",
          opacity: (!cardUrl || loading) ? 0.5 : 1,
        }}
      >
        ${loading ? "Connecting…" : "Add Agent"}
      </button>
    </div>
  `;
}

function ChatView({ agent, onRefresh, onDelete }: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [convId, setConvId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [agentDetail, setAgentDetail] = useState<any>(agent);
  const [showInfo, setShowInfo] = useState(false);
  const messagesEnd = useRef<any>(null);
  const inputEl = useRef<any>(null);
  const eventSource = useRef<AbortController | null>(null);
  // Guards against a slow/stale async fetch clobbering messages a newer
  // action already replaced — e.g. the initial conversation-history GET
  // resolving *after* the user has already sent a message, overwriting the
  // just-added optimistic + streamed messages with the pre-send history and
  // making them "flash and disappear". Every state-mutating action bumps
  // this; any async result checks it's still current before applying.
  const epochRef = useRef(0);

  // Load agent detail
  useEffect(() => {
    api(`/agents/${agent.id}`).then(d => setAgentDetail(d)).catch(() => {});
  }, [agent.id]);

  const openConversation = useCallback(async (id: string) => {
    const epoch = ++epochRef.current;
    setConvId(id);
    const msgs = await api(`/conversations/${id}/messages`);
    if (epoch !== epochRef.current) return; // superseded by a newer load/send
    setMessages(msgs.messages || []);
  }, []);

  // Load (or create) a conversation on first load of this agent
  useEffect(() => {
    (async () => {
      try {
        const data = await api(`/agents/${agent.id}/conversations`);
        const convs = data.conversations || [];
        setConversations(convs);
        if (convs.length > 0) {
          await openConversation(convs[0].id);
        } else {
          const epoch = ++epochRef.current;
          const conv = await api(`/agents/${agent.id}/conversations`, { method: "POST" });
          if (epoch !== epochRef.current) return;
          setConversations([conv.conversation]);
          setConvId(conv.conversation.id);
          setMessages([]);
        }
      } catch (e: any) {
        setError(e.message);
      }
    })();
  }, [agent.id]);

  async function handleNewConversation() {
    setError("");
    const epoch = ++epochRef.current;
    try {
      const data = await api(`/agents/${agent.id}/conversations`, { method: "POST" });
      if (epoch !== epochRef.current) return;
      setConversations(prev => [data.conversation, ...prev]);
      setConvId(data.conversation.id);
      setMessages([]);
      setInput("");
    } catch (e: any) {
      if (epoch === epochRef.current) setError(e.message);
    }
  }

  async function handleSwitchConversation(id: string) {
    if (id === convId) return;
    setError("");
    try {
      await openConversation(id);
    } catch (e: any) {
      setError(e.message);
    }
  }

  // Auto-scroll
  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Re-focus the input once sending finishes. It's `disabled` while
  // `sending` is true so the user can't queue up a second message
  // mid-send — but a disabled input is force-blurred by the browser the
  // instant that attribute flips on, and re-enabling it afterward doesn't
  // restore focus on its own. Without this, every single message costs a
  // click back into the input before the next one.
  useEffect(() => {
    if (!sending && !needsAuth) {
      inputEl.current?.focus();
    }
  }, [sending]);

  async function handleSend(e?: any) {
    e?.preventDefault();
    if (!input.trim() || !convId || sending) return;
    const text = input.trim();
    const activeConvId = convId;
    setInput("");
    setSending(true);
    setError("");
    const epoch = ++epochRef.current;

    // Optimistic: add user message
    setMessages(prev => [...prev, { role: "user", text, created_at: Date.now() / 1000, id: "temp-" + Date.now() }]);
    // Add placeholder for agent response
    setMessages(prev => [...prev, { role: "agent", text: "", created_at: Date.now() / 1000, id: "temp-agent-" + Date.now(), streaming: true }]);

    try {
      // Try streaming first
      const supportsStreaming = agentDetail?.agent_card?.capabilities?.streaming ?? true;
      if (supportsStreaming) {
        await streamMessage(text, activeConvId, epoch);
      } else {
        await sendNonStreaming(text, activeConvId, epoch);
      }
    } catch (err: any) {
      if (epoch === epochRef.current) {
        setError(err.message);
        if (err.message.includes("Authentication")) {
          onRefresh();
        }
        // Remove the streaming placeholder
        setMessages(prev => prev.filter(m => !m.streaming));
      }
    } finally {
      setSending(false);
    }
  }

  async function streamMessage(text: string, activeConvId: string, epoch: number) {
    const res = await fetch(`/api/conversations/${activeConvId}/stream`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
      credentials: "same-origin",
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({ error: res.statusText }));
      throw new Error(body.error || `HTTP ${res.status}`);
    }

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const events = buffer.split("\n\n");
      buffer = events.pop() || "";

      for (const event of events) {
        for (const line of event.split("\n")) {
          if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.error) throw new Error(data.error);

              // Extract text from various response types. Mirrors the
              // server's replace-vs-append semantics (index.ts's /stream
              // handler) exactly: only an artifactUpdate with append:true
              // concatenates onto what's already shown; everything else
              // (a replace-style artifactUpdate, or a message/statusUpdate)
              // REPLACES the accumulated text, same as what gets persisted.
              // Blindly concatenating every chunk regardless of type — the
              // previous behavior — double-appended a final "complete text"
              // artifact onto the already-built word-by-word stream, then
              // the post-stream history refetch replaced that doubled text
              // with the correctly-saved single copy, reading as the
              // message glitching/disappearing.
              let chunk = "";
              let isAppend = false;
              if (data.task?.status?.message?.parts) {
                chunk = data.task.status.message.parts.map((p: any) => p.text || "").join("");
              } else if (data.message?.parts) {
                chunk = data.message.parts.map((p: any) => p.text || "").join("");
              } else if (data.artifactUpdate?.artifact?.parts) {
                chunk = data.artifactUpdate.artifact.parts.map((p: any) => p.text || "").join("");
                isAppend = !!data.artifactUpdate.append;
              } else if (data.statusUpdate?.status?.message?.parts) {
                chunk = data.statusUpdate.status.message.parts.map((p: any) => p.text || "").join("");
              }

              if (chunk) {
                fullText = isAppend ? fullText + chunk : chunk;
                // Update the streaming message
                if (epoch === epochRef.current) {
                  setMessages(prev => prev.map(m =>
                    m.streaming ? { ...m, text: fullText } : m
                  ));
                }
              }
            } catch (parseErr: any) {
              if (parseErr.message) throw parseErr;
            }
          }
        }
      }
    }

    // Finalize: reload messages from server to get proper IDs
    if (epoch === epochRef.current) {
      const msgs = await api(`/conversations/${activeConvId}/messages`);
      if (epoch === epochRef.current) setMessages(msgs.messages || []);
    }
  }

  async function sendNonStreaming(text: string, activeConvId: string, epoch: number) {
    await api(`/conversations/${activeConvId}/send`, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    if (epoch !== epochRef.current) return;
    const msgs = await api(`/conversations/${activeConvId}/messages`);
    if (epoch === epochRef.current) setMessages(msgs.messages || []);
  }

  // Connect button for agents needing OIDC
  const [connecting, setConnecting] = useState(false);
  const [clientIdInput, setClientIdInput] = useState("");
  const [clientSecretInput, setClientSecretInput] = useState("");

  async function handleConnect() {
    setConnecting(true);
    setError("");
    try {
      // Only save credentials when the user manually provided them (not baked in)
      if (!agentDetail?.has_oidc_credentials && clientIdInput) {
        await api(`/agents/${agent.id}/credentials`, {
          method: "POST",
          body: JSON.stringify({ client_id: clientIdInput, client_secret: clientSecretInput }),
        });
      }
      // Redirect to the OIDC authorization flow
      window.location.href = `/api/agents/${agent.id}/connect`;
    } catch (e) {
      setError(e.message);
    } finally {
      setConnecting(false);
    }
  }

  const needsAuth = agentDetail?.auth_state !== "connected";
  const redirectUri = typeof window !== "undefined" ? `${window.location.origin}/api/agent/oidc/callback` : "";

  return html`
    <div style=${{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      ${/* Header */ ""}
      <header style=${{ padding: "1rem 1.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        ${agentDetail?.icon_url
          ? html`<img src=${agentDetail.icon_url} style=${{ width: "2rem", height: "2rem", borderRadius: "50%" }} />`
          : html`<span style=${{ fontSize: "1.5rem" }}>🤖</span>`
        }
        <div style=${{ flex: 1 }}>
          <h2 style=${{ fontSize: "1rem", fontWeight: 600 }}>${agentDetail?.name || agent.name}</h2>
          ${agentDetail?.description && html`<p style=${{ fontSize: "0.75rem", color: "var(--text-dim)" }}>${agentDetail.description}</p>`}
        </div>
        ${conversations.length > 1 && html`
          <select
            value=${convId}
            onChange=${(e: any) => handleSwitchConversation(e.target.value)}
            style=${{
              padding: "0.4rem 0.6rem", borderRadius: "var(--radius)", background: "var(--bg-card)",
              border: "1px solid var(--border)", color: "var(--text)", fontSize: "0.75rem", outline: "none",
            }}
          >
            ${conversations.map((conv, i) => html`
              <option key=${conv.id} value=${conv.id}>
                ${new Date(conv.created_at * 1000).toLocaleString()} ${i === 0 ? "(latest)" : ""}
              </option>
            `)}
          </select>
        `}
        <button
          onClick=${handleNewConversation}
          title="Start a new conversation with this agent"
          style=${{
            padding: "0.4rem 0.75rem", borderRadius: "var(--radius)", background: "var(--bg-card)",
            border: "1px solid var(--border)", color: "var(--text)", cursor: "pointer",
            fontWeight: 600, fontSize: "0.75rem",
          }}
        >
          + New Conversation
        </button>
        <div style=${{
          padding: "0.25rem 0.6rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 600,
          background: needsAuth ? "rgba(245,158,11,0.1)" : "rgba(34,197,94,0.1)",
          color: needsAuth ? "var(--warning)" : "var(--success)",
          border: `1px solid ${needsAuth ? "var(--warning)" : "var(--success)"}`,
        }}>
          ${needsAuth ? "Needs Auth" : "Connected"}
        </div>
        <button
          onClick=${() => setShowInfo(v => !v)}
          title="Agent info"
          style=${{
            padding: "0.4rem 0.6rem", borderRadius: "var(--radius)",
            background: showInfo ? "var(--bg-hover)" : "var(--bg-card)",
            border: "1px solid var(--border)", color: "var(--text-dim)", cursor: "pointer",
            fontWeight: 600, fontSize: "0.75rem",
          }}
        >
          ℹ️
        </button>
        <button
          onClick=${onDelete}
          title="Remove this agent"
          style=${{
            padding: "0.4rem 0.75rem", borderRadius: "var(--radius)", background: "var(--bg-card)",
            border: "1px solid var(--border)", color: "var(--text-dim)", cursor: "pointer",
            fontWeight: 600, fontSize: "0.75rem",
          }}
        >
          🗑 Remove
        </button>
      </header>

      ${showInfo && html`
        <div style=${{
          padding: "0.9rem 1.5rem", borderBottom: "1px solid var(--border)",
          fontSize: "0.78rem", color: "var(--text-dim)", display: "flex", flexDirection: "column", gap: "0.35rem",
        }}>
          ${[
            ["Card URL", agentDetail?.card_url],
            ["Endpoint URL", agentDetail?.agent_card?.url],
            ["Protocol version", agentDetail?.agent_card?.protocolVersion],
            ["Transport", agentDetail?.agent_card?.preferredTransport],
            ["Agent version", agentDetail?.agent_card?.version],
            ["Security", agentDetail?.security_type],
            ["Streaming", agentDetail?.agent_card?.capabilities?.streaming ? "yes" : "no"],
            ["Skills", (agentDetail?.agent_card?.skills || []).map((s: any) => s.name || s.id).filter(Boolean).join(", ") || "—"],
            ["Added", agentDetail?.created_at ? new Date(agentDetail.created_at * 1000).toLocaleString() : undefined],
          ].filter(([, v]) => v !== undefined && v !== null && v !== "").map(([label, value]) => html`
            <div key=${label} style=${{ display: "flex", gap: "0.6rem" }}>
              <span style=${{ minWidth: "110px", flexShrink: 0, color: "var(--text-dimmer)" }}>${label}</span>
              <span style=${{ color: "var(--text)", wordBreak: "break-all" }}>${value}</span>
            </div>
          `)}
        </div>
      `}

      ${needsAuth && html`
        <div style=${{ padding: "1.5rem", borderBottom: "1px solid var(--border)", maxWidth: "600px" }}>
          ${agentDetail?.has_oidc_credentials ? html`
            <p style=${{ color: "var(--text)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              This agent requires OIDC. Credentials are configured automatically.
            </p>
            <div style=${{ padding: "0.6rem", background: "var(--bg)", borderRadius: "8px", marginBottom: "1rem", fontSize: "0.75rem", color: "var(--text-dim)" }}>
              <strong style=${{ color: "var(--warning)" }}>One-time setup:</strong> Ensure this redirect URI is registered in your identity provider:
              <br/>
              <code style=${{ color: "var(--accent)", fontSize: "0.7rem", wordBreak: "break-all" }}>${redirectUri}</code>
            </div>
            <button onClick=${handleConnect} disabled=${connecting} style=${{
              padding: "0.6rem 1.5rem", borderRadius: "var(--radius)", background: "var(--accent)",
              color: "white", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem",
              opacity: connecting ? 0.5 : 1,
            }}>
              ${connecting ? "Redirecting…" : "🔑 Connect"}
            </button>
          ` : html`
            <p style=${{ color: "var(--text)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
              This agent requires OIDC authentication.
            </p>
            <p style=${{ color: "var(--text-dim)", marginBottom: "1rem", fontSize: "0.8rem" }}>
              Enter the Pocket ID client ID for this agent. If the client is set to <strong>public</strong> in
              <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{ color: "var(--accent)" }}>Pocket ID admin</a>,
              no secret is needed — PKCE handles it. Otherwise include the secret too.
            </p>
            <div style=${{ marginBottom: "0.75rem" }}>
              <label style=${{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.3rem" }}>
                Client ID
              </label>
              <input
                type="text"
                value=${clientIdInput}
                onInput=${(e: any) => setClientIdInput(e.target.value)}
                placeholder="Pocket ID client ID"
                style=${{ ...inputStyle, width: "100%" }}
              />
            </div>
            <div style=${{ marginBottom: "0.75rem" }}>
              <label style=${{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)", marginBottom: "0.3rem" }}>
                Client Secret
              </label>
              <input
                type="password"
                value=${clientSecretInput}
                onInput=${(e: any) => setClientSecretInput(e.target.value)}
                placeholder="Pocket ID client secret (leave blank for public clients)"
                style=${{ ...inputStyle, width: "100%" }}
              />
            </div>
            <div style=${{ padding: "0.6rem", background: "var(--bg)", borderRadius: "8px", marginBottom: "1rem", fontSize: "0.75rem", color: "var(--text-dim)" }}>
              <strong style=${{ color: "var(--warning)" }}>One-time setup:</strong> Add this redirect URI to this client in Pocket ID:
              <br/>
              <code style=${{ color: "var(--accent)", fontSize: "0.7rem", wordBreak: "break-all" }}>${redirectUri}</code>
              <br/>
              <a href="https://id.openbao.boxd.sh/settings/admin/oidc-clients" target="_blank" style=${{ color: "var(--accent)", fontSize: "0.7rem" }}>
                → Pocket ID admin
              </a>
            </div>
            <button onClick=${handleConnect} disabled=${!clientIdInput || connecting} style=${{
              padding: "0.6rem 1.5rem", borderRadius: "var(--radius)", background: "var(--accent)",
              color: "white", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem",
              opacity: (!clientIdInput || connecting) ? 0.5 : 1,
            }}>
              ${connecting ? "Redirecting…" : "🔑 Connect"}
            </button>
          `}
        </div>
      `}

      ${/* Messages */ ""}
      <div style=${{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
        <div style=${{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          ${messages.length === 0 && !needsAuth && html`
            <div style=${{ textAlign: "center", padding: "3rem", color: "var(--text-dimmer)" }}>
              <p style=${{ fontSize: "0.9rem" }}>Send a message to start talking to this agent via A2A</p>
            </div>
          `}
          ${messages.map(msg => html`
            <div key=${msg.id} style=${{
              maxWidth: "85%", alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              padding: "0.6rem 0.9rem", borderRadius: "var(--radius)", fontSize: "0.875rem", lineHeight: 1.5,
              background: msg.role === "user" ? "var(--accent)" : "var(--bg-card)",
              color: msg.role === "user" ? "white" : "var(--text)",
              whiteSpace: "pre-wrap",
            }}>
              ${msg.text || (msg.streaming ? "…" : "")}
            </div>
          `)}
          <div ref=${messagesEnd} />
        </div>
      </div>

      ${error && html`
        <div style=${{ padding: "0.5rem 1.5rem", color: "var(--danger)", fontSize: "0.8rem" }}>
          ${error}
        </div>
      `}

      ${/* Input */ ""}
      <footer style=${{ borderTop: "1px solid var(--border)", padding: "1rem 1.5rem" }}>
        <form onSubmit=${handleSend} style=${{ maxWidth: "720px", margin: "0 auto", display: "flex", gap: "0.5rem" }}>
          <input
            ref=${inputEl}
            type="text"
            value=${input}
            onInput=${(e: any) => setInput(e.target.value)}
            placeholder=${needsAuth ? "Connect to start messaging…" : "Send a message…"}
            disabled=${needsAuth || sending}
            style=${{
              flex: 1, padding: "0.6rem 0.9rem", borderRadius: "var(--radius)",
              background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)",
              fontSize: "0.875rem", outline: "none",
              opacity: (needsAuth || sending) ? 0.5 : 1,
            }}
          />
          <button type="submit" disabled=${needsAuth || sending || !input.trim()} style=${{
            padding: "0.6rem 1.2rem", borderRadius: "var(--radius)", background: "var(--accent)",
            color: "white", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem",
            opacity: (needsAuth || sending || !input.trim()) ? 0.5 : 1,
          }}>
            ${sending ? "…" : "Send"}
          </button>
        </form>
      </footer>
    </div>
  `;
}

// ─── Styles ────────────────────────────────────────────────────────────────────

const inputStyle = {
  width: "100%",
  padding: "0.6rem 0.9rem",
  borderRadius: "var(--radius)",
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontSize: "0.875rem",
  outline: "none",
};

// ─── HTML helper (using htm/preact) ─────────────────────────────────────────────
// We use a lightweight JSX alternative via tagged templates

import { html } from "htm/preact";

// ─── Render ────────────────────────────────────────────────────────────────────

render(html`<${App} />`, document.getElementById("root")!);
