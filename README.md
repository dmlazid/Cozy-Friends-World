# Cozy Friends World

A small, original, offline dollhouse game for Android. Version **0.3.0** builds on the interactive kitchen, playroom and decorating systems by making Mochi, Pip, Luna and Boba feel more lively while you play.

## New in 0.3.0 — Living Friends

- Friends now have small personality moments while they are standing around: waving, hopping, looking around, stretching, dancing and proudly reacting to things they hold.
- Nearby friends can notice each other and have short social moments instead of standing silently like dolls.
- Walking now has tiny footstep puffs so movement feels grounded and less stiff.
- Tapping a friend gives a quick physical reaction in addition to the existing speech and selection behavior.
- The new animation layer stays out of the way while a friend is walking, sleeping, eating, playing, resting or being dragged.
- Reduced-motion accessibility is respected, and all v0.2.0 saves and gameplay remain compatible.

## Mix, make & play

- Five locations on an illustrated neighborhood map, including Little Chef Kitchen and Wonder Playroom.
- Open the fridge, pantry, toy chest and bookshelf to take ingredients and toys.
- Drag, place, stack, hold, recolor and put away real objects. Friends carry held items between rooms.
- Combine two to four ingredients in the pot, cook and serve a dish, then feed it to a friend. Ten discoverable recipes plus a custom bowl for other combinations.
- Move and recolor added chairs, tables, rugs, flowers and toys. Choose four room palettes and daytime/evening lighting.
- Blinking, idle movements, walking limbs, play reactions, eating and resting poses. Tap empty floor to walk; toggle Living to let other friends wander.
- Existing saves migrate automatically with coins, outfits and progress preserved.

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

**[Download the latest APK](https://github.com/dmlazid/Cozy-Friends-World/releases/latest/download/Cozy-Friends-World.apk)**

Open the downloaded APK on your Android phone and tap **Install**. Android 8.0 or newer is required. This is a debug-signed test build.

Every successful update on `main` automatically publishes an APK to [GitHub Releases](https://github.com/dmlazid/Cozy-Friends-World/releases), after the Android build, lint and gameplay checks pass. The link above always points to the newest successful published build. Older APKs remain available in the release history. Each build has an increasing Android version code.

The same APK is also kept as **Cozy-Friends-World-APK** under the [build workflow's artifacts](https://github.com/dmlazid/Cozy-Friends-World/actions/workflows/android.yml).

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
node --test tests/*.test.mjs
```

Open `http://localhost:8080`. Use a landscape window. Keyboard users can select friends with Tab, move a focused friend using arrow keys, and activate buttons with Enter/Space.

`model.mjs` owns game rules and validated save recovery. `art.mjs` draws the original vector characters, furniture and scenery. `game.mjs` handles input, sound, dialogs and the main game loop. `play-world.mjs` handles the sandbox objects, walking and cooking systems. `living-friends.mjs` adds non-blocking personality gestures and social animation. Android uses `WebViewAssetLoader` for packaged assets with file/content access disabled, and blocks all other requests.

## Scope

This is a growing 2D sandbox game with five locations, not yet a full commercial world. The school, hospital, nursery, garage, character creator, voice recording and story recording are not included yet. All characters and artwork in this repository are original; no Talking Tom, Bluey or other third-party characters, branding or game assets are included.

## Technical references

- [Android in-app web content](https://developer.android.com/develop/ui/views/layout/webapps/load-local-content)
- [Android Gradle Plugin 8.7 compatibility](https://developer.android.com/build/releases/agp-8-7-0-release-notes)
