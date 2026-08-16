#!/bin/sh
# Production start script.
#
# The job runner (src/server/jobs.ts) shells out to the `boxd` CLI to spawn
# containers for jobs. Railway's build image doesn't ship it, so make sure
# it's present (and on PATH) before starting the server. Auth is via
# BOXD_API_KEY (see https://docs.boxd.sh — non-interactive, no login needed).
set -e

export PATH="$HOME/.local/bin:$PATH"

if ! command -v boxd >/dev/null 2>&1; then
  echo "boxd CLI not found — installing…"
  curl -fsSL https://boxd.sh/downloads/install.sh | sh
fi

exec bun run src/server/index.ts
