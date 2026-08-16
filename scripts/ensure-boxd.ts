/**
 * Ensures the boxd CLI is present at ~/.local/bin/boxd, downloading it if
 * missing. Uses Bun's fetch instead of curl since the Railway build image
 * doesn't ship curl. Mirrors https://boxd.sh/downloads/install.sh (minus the
 * shell-rc/skills bits, which don't apply to a headless server).
 */
import { existsSync } from "node:fs";
import { mkdir, chmod } from "node:fs/promises";
import { homedir } from "node:os";
import path from "node:path";

const installDir = path.join(homedir(), ".local", "bin");
const binPath = path.join(installDir, "boxd");

if (existsSync(binPath)) {
  console.log(`boxd already installed at ${binPath}`);
  process.exit(0);
}

function detectPlatform(): string {
  const os = process.platform;
  const arch = process.arch;
  if (os === "linux" && arch === "x64") return "linux-amd64";
  if (os === "linux" && arch === "arm64") return "linux-arm64";
  if (os === "darwin" && arch === "arm64") return "darwin-arm64";
  throw new Error(`Unsupported platform for boxd CLI: ${os}/${arch}`);
}

const platform = detectPlatform();
console.log(`Installing boxd CLI (${platform})…`);

const manifestRes = await fetch(`https://boxd.sh/downloads/cli/latest-${platform}.json`);
if (!manifestRes.ok) throw new Error(`Failed to fetch boxd version manifest: ${manifestRes.status}`);
const manifest = (await manifestRes.json()) as { version: string; url: string; sha256: string };

const binRes = await fetch(manifest.url);
if (!binRes.ok) throw new Error(`Failed to download boxd binary: ${binRes.status}`);
const bytes = new Uint8Array(await binRes.arrayBuffer());

const hasher = new Bun.CryptoHasher("sha256");
hasher.update(bytes);
const actualSha = hasher.digest("hex");
if (actualSha !== manifest.sha256) {
  throw new Error(`boxd binary hash mismatch (expected ${manifest.sha256}, got ${actualSha})`);
}

await mkdir(installDir, { recursive: true });
await Bun.write(binPath, bytes);
await chmod(binPath, 0o755);

console.log(`Installed boxd v${manifest.version} to ${binPath}`);
