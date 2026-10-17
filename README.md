# API Courier

A small browser game for learning GET requests, POST requests with JSON bodies, and reading JSON response fields.

## Play

Live GitHub Pages: https://pythonidaer.github.io/api-gamified-demo/

Repository: https://github.com/Pythonidaer/api-gamified-demo

This repository is the working source. Pushes to main run checks and publish dist/ through GitHub Actions. The earlier ChatGPT-hosted Site is a separate snapshot. All assets use relative URLs for the GitHub Pages subdirectory.

Open the published site. Edit the starter JavaScript and select Run delivery. Requests run against a deterministic local API simulator in a disposable Web Worker. Each attempt has a timeout. No API credentials, backend, or model calls are needed. Progress and drafts save to browser localStorage when available.

## Original courier assets

`dist/assets/` contains six transparent PNG parts, README notes, and `courier.json`: an authored Spine 4.2-format skeleton with idle, walk, wait, and celebrate timelines. `dist/courier-assets.zip` is downloadable in the game. The source artwork is produced by `make_assets.py` using Pillow.

The rig has not been imported or verified in Spine Editor. There is no native `.spine` project. The live game uses an original, limited Canvas region-and-bone renderer written for this asset structure. It contains no Esoteric Software Spine runtime. To integrate the official runtime, obtain or confirm an appropriate Spine Editor license, import and verify the rig, export an atlas and matching runtime-version data, then replace the Canvas renderer with the official PixiJS or Phaser integration.

## Verification

Run `node check-game.cjs`. JavaScript syntax and rig asset references have been checked. Interactive browser QA was unavailable in this environment. Please verify on mobile Safari and desktop: running all missions, code edits, hint toggle, response details, persistence after reload, and pausing motion.

## Files

- `dist/index.html`: page and instructions
- `dist/style.css`: responsive layout
- `dist/game-core.js`: missions, simulation, validation
- `dist/app.js`: UI, worker execution, independent animation renderer
- `make_assets.py`: original courier artwork and rig authoring
- `check-game.cjs`: focused mission checks
