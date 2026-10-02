# Cozy Friends World

A small, original, offline dollhouse game for Android. Version **0.1.0** is the first playable neighborhood, with original SVG artwork and four animal friends: Mochi, Pip, Luna and Boba.

## Play

- Drag friends around **Honeybell Home**, **Buttercup Café**, and **Clover Garden**.
- Tap furniture labels or drop a friend onto a care spot to eat, wash, play, cuddle or nap.
- Drag pocket snacks onto a friend, or tap one to give it to the selected friend.
- Choose six outfit colors, four accessories and six facial expressions.
- Grow berries in the garden, harvest coins and share the fruit.
- Pop bubbles in a timed minigame. Complete six wishes for a one-time 40-coin reward.
- Buy a lavender rug, twinkle lights and daisies using earned coins.
- Progress, positions, outfits, needs and decorations save automatically on the device.

No ads, accounts, real-money purchases, network permission or external runtime assets. Needs gently decline only while playing. Friends never die and progress does not decay while the app is closed.

## Download the Android test APK

Open [Actions → Build Android APK](https://github.com/dmlazid/Cozy-Friends-World/actions/workflows/android.yml), select the latest successful run, and download **Cozy-Friends-World-0.1.0** from Artifacts. Extract the ZIP and install its APK on Android 8.0 or newer. This is a debug-signed test build, not a Play Store release.

The workflow caches the test signing key for updates. Cache expiry can change that key; production releases will need a separately managed private signing key. Back up progress before uninstalling: uninstalling may remove the device save.

## Build

Use JDK 17, Gradle 8.9, Android SDK 35 and build tools. Run:

```sh
gradle assembleDebug lintDebug
```

The APK is written to `app/build/outputs/apk/debug/app-debug.apk`. CI installs the toolchain automatically. The Gradle wrapper is not bundled; use Gradle 8.9 or the configured GitHub Actions build.

## Desktop development

The same game can be tested without an Android build:

```sh
python3 -m http.server 8080 --directory app/src/main/assets/game
node --test tests/model.test.mjs
```

Open `http://localhost:8080`. Use a landscape window. Keyboard users can select friends with Tab, move a focused friend using arrow keys, and activate buttons with Enter/Space.

`model.mjs` owns game rules and validated save recovery. `art.mjs` draws the original vector characters, furniture and scenery. `game.mjs` handles input, sound, dialogs and the game loop. Android uses `WebViewAssetLoader` for packaged assets with file/content access disabled, and blocks all other requests.

## Scope of this first version

This is a 2D sandbox starter game with three locations, not a full commercial world. The school, hospital, nursery, garage, character creator, voice recording and story recording are not included yet. All characters and artwork in this repository are original; no Talking Tom characters, branding or game assets are included.

## Technical references

- [Android in-app web content](https://developer.android.com/develop/ui/views/layout/webapps/load-local-content)
- [Android Gradle Plugin 8.7 compatibility](https://developer.android.com/build/releases/agp-8-7-0-release-notes)
