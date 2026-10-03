#!/usr/bin/env bash
set -euo pipefail
mkdir -p "$HOME/.android"
base64 --decode .github/test-signing/cozy-friends-debug.keystore.b64 > "$HOME/.android/debug.keystore"
chmod 600 "$HOME/.android/debug.keystore"
keytool -list -v -keystore "$HOME/.android/debug.keystore" -storepass android -alias androiddebugkey | grep 'SHA256:'
