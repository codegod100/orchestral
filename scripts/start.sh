#!/bin/sh
# Production start script.
#
# The job runner (src/server/jobs.ts) shells out to the `boxd` CLI to spawn
# containers for jobs. Railway's build image doesn't ship it, so make sure
# it's present (and on PATH) before starting the server. Auth is via a
# BOXD_TOKEN env var (see https://docs.boxd.sh — non-interactive, no login
# needed). Note the CLI only reads BOXD_TOKEN, not BOXD_API_KEY (that name is
# for the SDKs) — jobs.ts bridges BOXD_API_KEY -> BOXD_TOKEN at boot in case
# the Railway variable is still named that way.
set -e

export PATH="$HOME/.local/bin:$PATH"

bun run "$(dirname "$0")/ensure-boxd.ts"

exec bun run src/server/index.ts
