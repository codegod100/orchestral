#!/bin/sh
# Production start script.
#
# The job runner (src/server/jobs.ts) shells out to the `boxd` CLI to spawn
# containers for jobs. Railway's build image doesn't ship it, so make sure
# it's present (and on PATH) before starting the server.
#
# Auth: BOXD_TOKEN/API-key auth (see https://docs.boxd.sh) turned out to be
# broken server-side for this account as of 2026-08-17 — every key tested
# (fresh member, fresh org, the existing production key) was rejected as
# invalid, while an interactive browser-login session worked fine. Until
# that's fixed upstream, boxd's config dir (which holds the logged-in
# session) is pointed at /data via XDG_CONFIG_HOME — the same persistent
# volume the SQLite DB lives on — instead of the container's ephemeral
# $HOME. A one-time `boxd auth login` run against a deployed container (see
# README) persists the session there, and it survives every redeploy from
# then on. jobs.ts's BOXD_API_KEY->BOXD_TOKEN bridge is left in place as a
# fallback for whenever boxd's API-key auth starts working again.
set -e

export PATH="$HOME/.local/bin:$PATH"
export XDG_CONFIG_HOME="${XDG_CONFIG_HOME:-/data/config}"
mkdir -p "$XDG_CONFIG_HOME"

bun run "$(dirname "$0")/ensure-boxd.ts"

exec bun run src/server/index.ts
