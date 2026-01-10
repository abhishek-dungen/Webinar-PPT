#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

git add -A

if git diff --cached --quiet; then
  exit 0
fi

timestamp="$(date +"%Y-%m-%d %H:%M:%S")"
git commit -m "auto: ${timestamp}"
