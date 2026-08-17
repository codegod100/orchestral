/**
 * Job runner: spawns a fresh boxd container, clones a repo into it, asks one
 * of the connected A2A agents ("bots") for a patch implementing an
 * instruction, applies it, pushes a branch, and opens a pull request.
 *
 * Requires the `boxd` CLI on PATH and authenticated (the host running
 * orchestral needs its own boxd account), plus a GitHub token stored via the
 * GitHub OAuth flow (see github.ts).
 */

import { getAgent, getJob, updateJob, appendJobLog, getSetting, type JobRecord } from "./store.ts";
import { sendMessage, extractText } from "./a2a-client.ts";

const JOB_TIMEOUT_MS = 10 * 60 * 1000; // 10 min per boxd exec step

// The boxd CLI only reads BOXD_TOKEN (or --token) for auth — it does NOT
// recognize BOXD_API_KEY (that name is only for the Python/TS SDKs' Compute()
// class). Railway's variable here has historically been named BOXD_API_KEY,
// which left the CLI silently unauthenticated: `boxd machine new` would then
// hang waiting on a browser device-auth flow that can never complete
// headless, until the outer timeout killed it. Bridge the name so either
// works, regardless of what the platform env var is actually called.
if (!process.env.BOXD_TOKEN && process.env.BOXD_API_KEY) {
  process.env.BOXD_TOKEN = process.env.BOXD_API_KEY;
}

function log(jobId: string, line: string) {
  console.log(`[job ${jobId}] ${line}`);
  appendJobLog(jobId, line);
}

// ─── boxd helpers ────────────────────────────────────────────────────────────

/** Read a stream to completion, invoking onLine per newline-terminated chunk as it arrives. */
async function pump(stream: ReadableStream<Uint8Array>, onLine?: (line: string) => void): Promise<string> {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let full = "";
  let buf = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });
    full += chunk;
    if (onLine) {
      buf += chunk;
      let idx: number;
      while ((idx = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, idx);
        if (line) onLine(line);
        buf = buf.slice(idx + 1);
      }
    }
  }
  if (onLine && buf) onLine(buf);
  return full;
}

async function runCmd(
  cmd: string[],
  opts?: { timeoutMs?: number; onLine?: (line: string) => void }
): Promise<{ code: number; stdout: string; stderr: string }> {
  // stdin: "ignore" — inheriting the server's stdin risks a hang if the child
  // ever reads from it (it's open but never sends anything in this context).
  const proc = Bun.spawn(cmd, { stdout: "pipe", stderr: "pipe", stdin: "ignore" });
  const timeoutMs = opts?.timeoutMs ?? JOB_TIMEOUT_MS;

  // Stream output line-by-line (into the job log via onLine) as it's produced,
  // instead of only surfacing it after the process exits or times out — a
  // command that hangs partway through used to leave the job log blank for
  // its entire timeout window, with no clue where it got stuck.
  const collect = (async () => {
    const [stdout, stderr] = await Promise.all([
      pump(proc.stdout, opts?.onLine ? (l) => opts.onLine!(`  ${l}`) : undefined),
      pump(proc.stderr, opts?.onLine ? (l) => opts.onLine!(`  ${l}`) : undefined),
    ]);
    const code = await proc.exited;
    return { code, stdout, stderr };
  })();

  // Race against the timeout instead of relying on proc.kill() alone — if the
  // child ignores SIGTERM or its pipes never close, awaiting `collect` above
  // would hang forever even after kill() is called.
  const timedOut = Symbol("timeout");
  let timeoutHandle: ReturnType<typeof setTimeout>;
  const timeout = new Promise<typeof timedOut>((resolve) => {
    timeoutHandle = setTimeout(() => resolve(timedOut), timeoutMs);
  });

  try {
    const result = await Promise.race([collect, timeout]);
    if (result === timedOut) {
      proc.kill("SIGKILL");
      throw new Error(`command timed out after ${timeoutMs}ms: ${cmd.join(" ")}`);
    }
    return result;
  } finally {
    clearTimeout(timeoutHandle!);
  }
}

/**
 * Verify boxd is authenticated before committing to a multi-minute provision
 * wait. An unauthenticated CLI doesn't fail fast on `machine new` — it hangs
 * trying a browser device-auth flow that can never complete headless, so
 * without this check a bad/missing token just looks like a slow timeout.
 */
async function boxdCheckAuth(): Promise<void> {
  const r = await runCmd(["boxd", "auth"], { timeoutMs: 15_000 }).catch((e) => {
    throw new Error(`boxd auth check failed: ${(e as Error).message} — is BOXD_TOKEN set?`);
  });
  if (r.code !== 0) {
    throw new Error(`boxd is not authenticated (set BOXD_TOKEN): ${r.stderr || r.stdout}`);
  }
}

/**
 * A cheap, side-effect-free API call (list machines) run before the far more
 * expensive `machine new`. `boxd auth` only proves the token is valid — it
 * doesn't prove the host can actually reach boxd's provisioning API (e.g. a
 * Railway egress/DNS/firewall issue would still let `boxd auth` pass while
 * `machine new` hangs indefinitely). This narrows a mystery 3-minute timeout
 * down to "auth is fine but the network to boxd is broken" immediately.
 */
async function boxdCheckReachable(): Promise<void> {
  const r = await runCmd(["boxd", "machine", "list", "--json"], { timeoutMs: 20_000 }).catch((e) => {
    throw new Error(
      `boxd API unreachable from this host: ${(e as Error).message} — likely an egress/DNS/firewall issue, not an auth problem`
    );
  });
  if (r.code !== 0) {
    throw new Error(`boxd API call failed: ${r.stderr || r.stdout}`);
  }
}

async function boxdNew(name: string, jobId: string): Promise<void> {
  const r = await runCmd(["boxd", "machine", "new", name, "--json"], {
    timeoutMs: 5 * 60 * 1000,
    onLine: (l) => log(jobId, l),
  });
  if (r.code !== 0) throw new Error(`boxd machine new failed: ${r.stderr || r.stdout}`);
}

async function boxdExec(name: string, script: string, envVars: Record<string, string> = {}, jobId?: string): Promise<string> {
  const cmd = ["boxd", "machine", "exec", name];
  for (const [k, v] of Object.entries(envVars)) cmd.push("-e", `${k}=${v}`);
  cmd.push("--", "bash", "-lc", script);
  const r = await runCmd(cmd, jobId ? { onLine: (l) => log(jobId, l) } : undefined);
  if (r.code !== 0) {
    throw new Error(`command failed (exit ${r.code}):\n${r.stderr || r.stdout}`);
  }
  return r.stdout;
}

async function boxdCp(localPath: string, remotePath: string, machine: string): Promise<void> {
  const r = await runCmd(["boxd", "machine", "cp", localPath, `${machine}:${remotePath}`]);
  if (r.code !== 0) throw new Error(`boxd machine cp failed: ${r.stderr || r.stdout}`);
}

async function boxdStop(name: string): Promise<void> {
  await runCmd(["boxd", "machine", "stop", name], { timeoutMs: 60_000 }).catch(() => {});
}

// ─── Patch extraction ───────────────────────────────────────────────────────

/** Pull a unified diff out of an agent's (possibly chatty, markdown-wrapped) reply. */
function extractPatch(text: string): string | null {
  const fenced = text.match(/```(?:diff|patch)?\n([\s\S]*?)```/);
  const body = fenced ? fenced[1] : text;
  if (!/^(diff --git|--- )/m.test(body)) return null;
  return body.trim() + "\n";
}

// ─── Runner ──────────────────────────────────────────────────────────────────

export async function runJob(jobId: string): Promise<void> {
  const job = getJob(jobId);
  if (!job) return;

  const agent = getAgent(job.agent_id);
  if (!agent) {
    updateJob(jobId, { status: "failed", error: "Agent not found" });
    return;
  }
  if (agent.auth_state !== "connected") {
    updateJob(jobId, { status: "failed", error: "Bot is not connected — reconnect it first" });
    return;
  }

  const githubToken = getSetting("github_token");
  if (!githubToken) {
    updateJob(jobId, { status: "failed", error: "GitHub is not connected — connect it first" });
    return;
  }

  const machineName = `orchestral-job-${jobId.slice(0, 8)}`;
  const branch = `orchestral/${jobId.slice(0, 8)}`;
  updateJob(jobId, { status: "provisioning", machine_name: machineName, branch });

  try {
    await boxdCheckAuth();
    await boxdCheckReachable();

    log(jobId, `→ provisioning boxd machine ${machineName}`);
    await boxdNew(machineName, jobId);

    log(jobId, `→ cloning ${job.repo}`);
    updateJob(jobId, { status: "cloning" });
    await boxdExec(
      machineName,
      `set -euo pipefail
       git clone "https://x-access-token:\${GITHUB_TOKEN}@github.com/${job.repo}.git" repo
       cd repo
       git checkout -b "${branch}"
       git config user.email "orchestral@bots.local"
       git config user.name "Orchestral Bot"`,
      { GITHUB_TOKEN: githubToken },
      jobId
    );

    log(jobId, `→ gathering repo context`);
    const tree = await boxdExec(machineName, `cd repo && git ls-files | head -300`, {}, jobId);

    log(jobId, `→ asking bot "${agent.name}" for a patch`);
    updateJob(jobId, { status: "running" });
    const card = JSON.parse(agent.agent_card_json);
    const prompt = [
      `You are working inside a fresh clone of the GitHub repo ${job.repo}.`,
      `Task: ${job.instruction}`,
      ``,
      `Repo file listing:`,
      tree.trim(),
      ``,
      `Reply with ONLY a unified git diff (output of \`git diff\`) that implements the task.`,
      `Do not include explanation — just the diff, optionally inside a \`\`\`diff code block.`,
    ].join("\n");

    const response = await sendMessage(card.url, agent.access_token, {
      message: {
        role: "ROLE_USER",
        parts: [{ kind: "text", text: prompt }],
        messageId: crypto.randomUUID(),
      },
      configuration: { acceptedOutputModes: ["text/plain"] },
    });
    const replyText = extractText(response);
    const patch = extractPatch(replyText);

    if (!patch) {
      log(jobId, `✗ bot reply did not contain a usable diff:\n${replyText.slice(0, 2000)}`);
      throw new Error("Bot did not return a usable diff — see log");
    }

    log(jobId, `→ applying patch (${patch.split("\n").length} lines)`);
    updateJob(jobId, { status: "patching" });
    const localPatchPath = `/tmp/orchestral-job-${jobId}.patch`;
    await Bun.write(localPatchPath, patch);
    await boxdCp(localPatchPath, "/tmp/job.patch", machineName);

    await boxdExec(
      machineName,
      `set -euo pipefail
       cd repo
       git apply --whitespace=fix /tmp/job.patch
       git add -A
       git commit -m "${job.instruction.replace(/"/g, '\\"').slice(0, 200)}"
       git push "https://x-access-token:\${GITHUB_TOKEN}@github.com/${job.repo}.git" "${branch}"`,
      { GITHUB_TOKEN: githubToken },
      jobId
    );

    log(jobId, `→ opening pull request`);
    updateJob(jobId, { status: "opening_pr" });
    const prBody = `Automated by Orchestral bot **${agent.name}**.\n\n**Instruction:**\n${job.instruction}`;
    const localBodyPath = `/tmp/orchestral-job-${jobId}.body`;
    await Bun.write(localBodyPath, prBody);
    await boxdCp(localBodyPath, "/tmp/pr-body.md", machineName);

    const prOut = await boxdExec(
      machineName,
      `set -euo pipefail
       cd repo
       gh pr create --title "${job.instruction.replace(/"/g, '\\"').slice(0, 70)}" --body-file /tmp/pr-body.md --head "${branch}"`,
      { GITHUB_TOKEN: githubToken, GH_TOKEN: githubToken },
      jobId
    );
    const prUrlMatch = prOut.match(/https:\/\/github\.com\/\S+\/pull\/\d+/);
    const prUrl = prUrlMatch ? prUrlMatch[0] : null;

    log(jobId, prUrl ? `✓ opened ${prUrl}` : `✓ pushed branch ${branch} (PR URL not detected — check GitHub)`);
    updateJob(jobId, { status: "done", pr_url: prUrl });
  } catch (e) {
    const err = e as Error;
    log(jobId, `✗ failed: ${err.message}`);
    updateJob(jobId, { status: "failed", error: err.message });
  } finally {
    await boxdStop(machineName);
  }
}
