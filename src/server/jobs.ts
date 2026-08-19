/**
 * Job runner: spawns a fresh boxd container, clones a repo into it, asks one
 * of the connected A2A agents ("bots") for a patch implementing an
 * instruction, applies it, pushes a branch, and opens a pull request.
 *
 * Requires the `boxd` CLI on PATH and authenticated (the host running
 * orchestral needs its own boxd account), plus a GitHub token stored via the
 * GitHub OAuth flow (see github.ts).
 *
 * Auth: BOXD_TOKEN/API-key auth (see https://docs.boxd.sh) was found to be
 * broken server-side for this account as of 2026-08-17 — every key tested
 * (fresh member, fresh org, the previous production key) was rejected as
 * invalid immediately, while an interactive session was not. Production now
 * runs on a persisted `boxd auth login` session instead (see scripts/start.sh
 * — XDG_CONFIG_HOME points boxd's config dir at the /data volume so the
 * session survives redeploys). The BOXD_API_KEY->BOXD_TOKEN bridge below is
 * kept as a fallback for whenever boxd's API-key auth is fixed upstream, but
 * note an explicit BOXD_TOKEN always overrides a stored session — don't set
 * BOXD_API_KEY/BOXD_TOKEN in the environment unless the key is known-good, or
 * it'll silently take precedence over a working login.
 */

import { getAgent, getJob, updateJob, appendJobLog, getSetting, type JobRecord } from "./store.ts";
import { sendMessage, extractText } from "./a2a-client.ts";
import { ensureFreshToken } from "./oidc.ts";

const JOB_TIMEOUT_MS = 10 * 60 * 1000; // 10 min per boxd exec step

// See the file-header note above — only bridges if a key happens to be set;
// harmless no-op in the normal (session-based) case.
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
 * Retry a flaky, side-effect-free check a couple of times before giving up.
 * Seen in prod: `boxd auth` — a cheap call that's normally sub-second —
 * timing out on the very first boxd invocation of a freshly booted
 * container, while later calls (or the same call moments later) succeed.
 * That's the signature of a transient DNS/connection hiccup rather than a
 * real outage, so a couple of quick retries clear it without masking a
 * genuine, persistent failure (a bad token still fails all 3 attempts).
 */
async function withRetry<T>(jobId: string, label: string, attempts: number, fn: () => Promise<T>): Promise<T> {
  let lastErr: Error | undefined;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e as Error;
      if (i < attempts) {
        log(jobId, `⚠ ${label} attempt ${i}/${attempts} failed (${lastErr.message}) — retrying`);
        await new Promise((r) => setTimeout(r, 2_000));
      }
    }
  }
  throw lastErr;
}

/**
 * Verify boxd is authenticated before committing to a multi-minute provision
 * wait. An unauthenticated CLI doesn't fail fast on `machine new` — it hangs
 * trying a browser device-auth flow that can never complete headless, so
 * without this check a bad/missing token just looks like a slow timeout.
 */
async function boxdCheckAuth(jobId: string): Promise<void> {
  await withRetry(jobId, "boxd auth check", 3, async () => {
    const r = await runCmd(["boxd", "auth"], { timeoutMs: 20_000 }).catch((e) => {
      throw new Error(`boxd auth check failed: ${(e as Error).message} — is BOXD_TOKEN set?`);
    });
    if (r.code !== 0) {
      throw new Error(`boxd is not authenticated (set BOXD_TOKEN): ${r.stderr || r.stdout}`);
    }
  });
}

/**
 * A cheap, side-effect-free API call (list machines) run before the far more
 * expensive `machine new`. `boxd auth` only proves the token is valid — it
 * doesn't prove the host can actually reach boxd's provisioning API (e.g. a
 * Railway egress/DNS/firewall issue would still let `boxd auth` pass while
 * `machine new` hangs indefinitely). This narrows a mystery 3-minute timeout
 * down to "auth is fine but the network to boxd is broken" immediately.
 */
async function boxdCheckReachable(jobId: string): Promise<void> {
  await withRetry(jobId, "boxd reachability check", 3, async () => {
    const r = await runCmd(["boxd", "machine", "list", "--json"], { timeoutMs: 20_000 }).catch((e) => {
      throw new Error(
        `boxd API unreachable from this host: ${(e as Error).message} — likely an egress/DNS/firewall issue, not an auth problem`
      );
    });
    if (r.code !== 0) {
      throw new Error(`boxd API call failed: ${r.stderr || r.stdout}`);
    }
  });
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

// ─── Repo context gathering ─────────────────────────────────────────────────

// Extensions/paths not worth sending as "source" — binaries the bot can't
// usefully read, and generated lockfiles that are huge and never hand-edited.
const BINARY_EXT_RE = /\.(png|jpe?g|gif|ico|svg|ttf|otf|woff2?|webp|pdf|zip|gz|tar|mp3|mp4|wasm|bin)$/i;
const SKIP_NAME_RE = /(^|\/)(Cargo\.lock|package-lock\.json|bun\.lock|yarn\.lock|pnpm-lock\.yaml|go\.sum)$/;

const MAX_CONTEXT_FILES = 60; // cap on how many files we even attempt to fetch
// Real jobs run against orchestral's own repo kept failing on src/client/main.tsx
// specifically — a genuinely large single-file UI component (41KB and growing)
// that's also the file most instructions actually need to edit. At the old 6K
// cap it always got keyword-excerpted instead of sent in full, and bots kept
// writing diffs against content they'd only partially seen, which then failed
// to apply. Raised enough to fit a file like that whole; still falls back to
// keyword-excerpting above this for genuinely huge files (verified earlier
// against a real 156KB Rust file).
const MAX_PER_FILE_CHARS = 50_000; // per-file truncation while fetching
const MAX_TOTAL_CONTEXT_CHARS = 150_000; // budget for what actually goes in the prompt

const STOPWORDS = new Set([
  "the", "a", "an", "to", "of", "in", "on", "for", "and", "or", "is", "are", "be",
  "this", "that", "with", "please", "make", "create", "implement", "add", "update",
  "fix", "change", "new", "it", "its", "from", "as", "by", "at", "into", "also",
  "should", "would", "could", "will", "just", "some", "there",
]);

/** Pull content words out of the instruction to grep large files for relevant sections. */
function extractKeywords(instruction: string): string[] {
  const words = instruction
    .toLowerCase()
    .split(/[^a-z0-9_]+/)
    .filter((w) => w.length >= 3 && !STOPWORDS.has(w));
  return [...new Set(words)].slice(0, 20);
}

/**
 * Fetch contents for a budgeted subset of the repo's text files and format
 * them for the prompt. A bare file listing isn't enough for a bot to write a
 * real diff — it can only guess at file contents, which produced a "here's
 * what I'd need" reply instead of a patch in practice. Filenames come from
 * `git ls-files` inside the *bot's own* target repo, so they're written to a
 * file and read via a `while read` loop inside the container rather than
 * interpolated into a shell command — avoids shell-injection risk from a
 * repo with adversarial or merely space-containing filenames.
 *
 * Files over the per-file cap aren't just head-truncated (which lands
 * wherever byte 6000 happens to fall — often mid-function, nowhere near
 * anything relevant) — they're grepped for the instruction's keywords with
 * context instead, so a huge file still yields a useful, on-topic excerpt.
 * Verified against a real 156KB file: keyword grep landed exactly in the
 * toolbar/menu section, right where a new UI element belongs. Falls back to
 * a plain head truncation (clearly labeled) if no keyword matches at all.
 */
async function gatherFileContents(
  machineName: string,
  jobId: string,
  files: string[],
  instruction: string
): Promise<{ block: string; includedCount: number; totalCount: number }> {
  const candidates = files
    .filter((f) => !BINARY_EXT_RE.test(f) && !SKIP_NAME_RE.test(f))
    .slice(0, MAX_CONTEXT_FILES);

  if (candidates.length === 0) {
    return { block: "(no readable source files found)", includedCount: 0, totalCount: files.length };
  }

  const localListPath = `/tmp/orchestral-job-${jobId}-files.txt`;
  await Bun.write(localListPath, candidates.join("\n") + "\n");
  await boxdCp(localListPath, "/tmp/files.txt", machineName);

  const keywords = extractKeywords(instruction);
  // Written to a file and read via `grep -f` (fixed-string matching) rather
  // than interpolated into the script, for the same shell-injection reasons
  // as the file list above — keywords ultimately come from user input.
  const localKeywordsPath = `/tmp/orchestral-job-${jobId}-keywords.txt`;
  await Bun.write(localKeywordsPath, keywords.join("\n") + "\n");
  await boxdCp(localKeywordsPath, "/tmp/keywords.txt", machineName);

  const marker = "===ORCHESTRAL_FILE===";
  const dumpScript = `cd repo && while IFS= read -r f; do
    [ -f "$f" ] || continue
    echo "${marker}$f"
    size=$(wc -c < "$f" 2>/dev/null || echo 0)
    if [ "$size" -le ${MAX_PER_FILE_CHARS} ]; then
      head -c ${MAX_PER_FILE_CHARS} -- "$f"
    else
      excerpt=$(grep -inF -f /tmp/keywords.txt -B 5 -A 15 -- "$f" 2>/dev/null | head -c ${MAX_PER_FILE_CHARS})
      if [ -n "$excerpt" ]; then
        echo "# (large file, $size bytes — showing keyword-matched excerpts with surrounding context, not the full file)"
        printf '%s\\n' "$excerpt"
      else
        echo "# (large file, $size bytes — no keyword match found; showing only the first ${MAX_PER_FILE_CHARS} bytes)"
        head -c ${MAX_PER_FILE_CHARS} -- "$f"
      fi
    fi
    echo
  done < /tmp/files.txt`;
  const dump = await boxdExec(machineName, dumpScript, {}, jobId);

  const parts = dump.split(marker).filter(Boolean);
  let budget = MAX_TOTAL_CONTEXT_CHARS;
  let included = 0;
  const sections: string[] = [];
  for (const part of parts) {
    const nl = part.indexOf("\n");
    if (nl < 0) continue;
    const path = part.slice(0, nl);
    const content = part.slice(nl + 1);
    if (budget <= 0) break;
    const chunk = `### ${path}\n\`\`\`\n${content.trim()}\n\`\`\`\n`;
    sections.push(chunk);
    budget -= chunk.length;
    included++;
  }

  const omitted = files.length - included;
  const suffix = omitted > 0 ? `\n(…${omitted} more files omitted for size — ask if one of them is needed)` : "";
  return { block: sections.join("\n") + suffix, includedCount: included, totalCount: files.length };
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
    updateJob(jobId, { status: "failed", error: "Agent is not connected — reconnect it first" });
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
    await boxdCheckAuth(jobId);
    await boxdCheckReachable(jobId);

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
    const files = tree.trim().split("\n").filter(Boolean);

    // A bare file listing isn't enough for a bot to write a real diff — it
    // can only guess at contents, which in practice produced "I don't have
    // the repo files, can you paste them?" instead of a patch. Fetch actual
    // contents for a budgeted subset of files instead.
    const { block: fileContents, includedCount, totalCount } = await gatherFileContents(machineName, jobId, files, job.instruction);
    log(jobId, `→ sending contents of ${includedCount}/${totalCount} files to the bot`);

    log(jobId, `→ asking bot "${agent.name}" for a patch`);
    updateJob(jobId, { status: "running" });
    // Chat sends already refresh an expiring OIDC token before use (see
    // index.ts's ensureFreshToken calls) — jobs.ts didn't, so a bot whose
    // token had simply expired since it was last connected surfaced as a
    // job failure ("Authentication required — token may be expired") right
    // at this step instead of transparently refreshing like chat does.
    const freshAgent = await ensureFreshToken(agent);
    const card = JSON.parse(freshAgent.agent_card_json);
    const prompt = [
      `You are working inside a fresh clone of the GitHub repo ${job.repo}.`,
      `Task: ${job.instruction}`,
      ``,
      `Repo file listing:`,
      tree.trim(),
      ``,
      `Contents of the repo's files (below) — use these, don't guess:`,
      fileContents,
      ``,
      `Reply with ONLY a unified git diff (output of \`git diff\`) that implements the task.`,
      `Do not include explanation — just the diff, optionally inside a \`\`\`diff code block.`,
    ].join("\n");

    const response = await sendMessage(
      card.url,
      freshAgent.access_token,
      {
        message: {
          role: "ROLE_USER",
          parts: [{ kind: "text", text: prompt }],
          messageId: crypto.randomUUID(),
        },
        configuration: { acceptedOutputModes: ["text/plain"] },
      },
      // The default 120s timeout was hit here in practice once the prompt
      // grew to include real file contents (~60K chars) instead of just a
      // filename listing — jobs already run for minutes and nothing is
      // waiting on a spinner, so give the bot much more room.
      8 * 60 * 1000
    );
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
       # --recount: bots hand-write unified diffs from memory rather than
       # running an actual diff tool, and reliably get hunk-header line
       # counts wrong (e.g. "@@ -44,12 +46,16 @@" when the hunk body
       # actually has 14/18 lines) — git apply then desyncs and rejects the
       # *next* hunk as "patch fragment without header". --recount tells git
       # to derive the counts from the hunk body itself instead of trusting
       # the bot's arithmetic; the file:line positions are still respected.
       git apply --recount --whitespace=fix /tmp/job.patch
       git add -A
       git commit -m "${job.instruction.replace(/"/g, '\\"').slice(0, 200)}"
       git push "https://x-access-token:\${GITHUB_TOKEN}@github.com/${job.repo}.git" "${branch}"`,
      { GITHUB_TOKEN: githubToken },
      jobId
    );

    log(jobId, `→ opening pull request`);
    updateJob(jobId, { status: "opening_pr" });
    const prBody = `Automated by Orchestral agent **${agent.name}**.\n\n**Instruction:**\n${job.instruction}`;
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
