#!/usr/bin/env bash
set -euo pipefail
: "${GITHUB_REPOSITORY:?Missing repository}"
: "${GITHUB_SHA:?Missing commit}"
: "${GITHUB_RUN_NUMBER:?Missing build number}"
: "${GITHUB_RUN_ID:?Missing workflow run}"
test -s release-apk/Cozy-Friends-World.apk
version=$(python3 - <<'PY'
import re
from pathlib import Path
match = re.search(r"versionName\s+'([0-9][0-9A-Za-z.+-]*)'", Path('app/build.gradle').read_text())
if not match:
    raise SystemExit('Missing or invalid Android versionName')
print(match.group(1))
PY
)
tag="v${version}-build${GITHUB_RUN_NUMBER}"
notes_file=$(mktemp)
trap 'rm -f "$notes_file"' EXIT
cat > "$notes_file" <<NOTES
Download **Cozy-Friends-World.apk** below, open it on your Android phone, and tap **Install**.

Version: ${version} · Build: ${GITHUB_RUN_NUMBER}

- Android build, lint and automated gameplay checks passed.
- Offline test build for Android 8.0 and newer.
- Four friends, three locations, dress-up, care, gardening and Bubble Meadow.
- Progress saves on the device. Install over the existing app when Android allows it to keep your save.

[Build details](https://github.com/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}) · [All versions](https://github.com/${GITHUB_REPOSITORY}/releases)
NOTES
# Publish jobs are serialized. An older, slower build must not replace a newer download.
latest_tag=$(gh api "repos/${GITHUB_REPOSITORY}/releases/latest" --jq '.tag_name' 2>/dev/null || true)
latest_flag=true
if [[ "$latest_tag" =~ -build([0-9]+)$ ]] && (( BASH_REMATCH[1] > GITHUB_RUN_NUMBER )); then
  latest_flag=false
fi
if gh release view "$tag" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
  gh release upload "$tag" release-apk/Cozy-Friends-World.apk --repo "$GITHUB_REPOSITORY" --clobber
  gh release edit "$tag" --repo "$GITHUB_REPOSITORY" --latest="$latest_flag" --notes-file "$notes_file"
else
  gh release create "$tag" release-apk/Cozy-Friends-World.apk \
    --repo "$GITHUB_REPOSITORY" --target "$GITHUB_SHA" \
    --title "Cozy Friends World ${version} · Build ${GITHUB_RUN_NUMBER}" \
    --notes-file "$notes_file" --latest="$latest_flag"
fi
