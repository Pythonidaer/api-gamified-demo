# API Courier

A small browser game with three beginner chapters about requests/responses, JSON basics, and reading structured data. The original GET/POST/JSON prototype remains available as practice.

## Play

Live GitHub Pages: https://pythonidaer.github.io/api-gamified-demo/

Repository: https://github.com/Pythonidaer/api-gamified-demo

This repository is the working source. Pushes to main run checks and publish dist/ through GitHub Actions. The earlier ChatGPT-hosted Site is a separate snapshot. All assets use relative URLs for the GitHub Pages subdirectory.

Open the published site. Choose a chapter, then answer a question or edit its JSON/JavaScript. Select Check answer or Run request. Requests run against a deterministic local API simulator in a disposable Web Worker. Each attempt has a timeout. No API credentials, backend, or model calls are needed. Progress and drafts save to browser localStorage when available.

## Chapters available now

1. **Requests and responses:** six missions covering client/server roles, API contracts, request URLs, response parts, content-type metadata, and HTTPS.
2. **JSON basics:** six missions covering quoted keys/strings, numbers, booleans/null, arrays, syntax repair, and a combined manifest.
3. **Reading structured data:** six missions covering fields, nested objects, array indexes, combined lookups, bracket notation, and null versus missing properties.

All chapters are open. Each mission has a short explanation, task, worked example, graduated hints, solution, and specific answer feedback. Chapter 2 checks JSON directly; Chapter 3 supplies a visible parsed manifest as `data`. `report()` is a game helper, not a JavaScript built-in. Chapter 1 introduces only the small amount of request code needed; later planned chapters expand these topics.

Use the chapter buttons and mission selector to move around. Progress, answers, and drafts use stable mission IDs in browser storage. Original prototype completions and drafts migrate into Original practice on the same origin; GitHub Pages and the earlier ChatGPT Site have separate browser storage. Each mission awards XP once. You can replay freely.

Run `node check-chapters.cjs` and `node check-game.cjs`. The chapter checks cover all 18 solutions, wrong answers, JSON syntax/types, equivalent JavaScript answers, null/missing semantics, and old/new progress restoration. The chapter UI and worker integration still need device review.

## Original courier assets

`dist/assets/` contains six transparent PNG parts, README notes, and `courier.json`: an authored Spine 4.2-format skeleton with idle, walk, wait, and celebrate timelines. `dist/courier-assets.zip` is downloadable in the game. The source artwork is produced by `make_assets.py` using Pillow.

The rig has not been imported or verified in Spine Editor. There is no native `.spine` project. The live game uses an original, limited Canvas region-and-bone renderer written for this asset structure. It contains no Esoteric Software Spine runtime. To integrate the official runtime, obtain or confirm an appropriate Spine Editor license, import and verify the rig, export an atlas and matching runtime-version data, then replace the Canvas renderer with the official PixiJS or Phaser integration.

## Verification

Run `node check-game.cjs` and `node check-chapters.cjs`. JavaScript syntax and rig asset references have been checked. Interactive browser QA was unavailable in this environment. Please verify on mobile Safari and desktop: running all missions, code edits, hint toggle, response details, persistence after reload, and pausing motion.

## Files

- `dist/index.html`: page and instructions
- `dist/style.css`: responsive layout
- `dist/game-core.js`: preserved prototype missions and API simulation
- `dist/curriculum.js`: chapter content and semantic answer checks
- `dist/progress.js`: progress validation and migration
- `dist/runner.js` and `dist/exercise-worker.js`: isolated exercise execution
- `dist/app.js`: UI, worker execution, independent animation renderer
- `make_assets.py`: original courier artwork and rig authoring
- `check-game.cjs`: focused mission checks


## Future improvements

Planning checklist, added 2026-10-17. Chapters 1–3 are now implemented as an initial 18-mission learning sequence; remaining curriculum and polish tasks below are future work unless explicitly marked complete.

### Adaptations from Flexbox Zombies

References:
- https://mastery.games/post/flexboxzombies2/ — Spine animation, soundtrack and atmosphere, sound effects, per-target correctness feedback, improved hints/dialogue, and polish.
- https://flexboxzombies.com/ — twelve concept-led chapters, a continuing story, repeated coding challenges, and a final combined challenge.

- [ ] Verify the courier rig in Spine Editor, refine idle/walk/wait/delivery/celebration animations, and integrate the official runtime after an appropriate license is confirmed.
- [ ] Add distinct visual reactions for requests, successful responses, rejected requests, and completed deliveries. Keep technical outcomes accurate: a successful data request returns data rather than automatically moving physical stock.
- [ ] Add optional background music, environmental audio, and delivery/error sound effects, with explicit sound controls and a silent default until user interaction.
- [ ] Show partial correctness for endpoint, method, headers, body, and response interpretation after running code. Explain which parts worked without treating a specific string match as the only valid solution.
- [ ] Add graduated hints: concept reminder, relevant example, then an explained solution.
- [ ] Design a chapter-based story with short dialogue, recurring characters, clear stakes, and a mission reason for each new concept.
- [ ] Create multiple short coding puzzles per concept, increasing independence and combining earlier skills.
- [ ] Add a final multi-step delivery challenge that combines the learned concepts.
- [ ] Polish instructional wording, dialogue, error explanations, transitions, and mobile/keyboard behavior through playtesting.

### Additional API Courier proposals

These are our proposed extensions, not verified features of Flexbox Zombies.

- [x] Implement Chapters 1–3 with 18 missions, outcomes, examples, graduated hints, solutions, and chapter selection.
- [ ] Implement Chapters 4–16 and evaluate prerequisites and learning outcomes across the full curriculum.
- [ ] Write a small story/content guide: Pip's role, the settlement's goal, recurring characters, terminology, dialogue length, and a chapter-by-chapter plot outline. Keep narrative skippable and task instructions independently understandable.
- [ ] Use an explain/example/practice/feedback pattern. Start with small edits, move to short original requests, and reuse concepts in later missions.
- [ ] Add optional review missions and track demonstrated skills separately from lessons visited. Award XP once per achievement rather than repeatedly for replaying the same answer.
- [ ] Add chapter selection, resume points, and a persistent skill map without punitive streaks or time pressure.
- [ ] Add an expandable glossary and reference examples beside the editor.
- [ ] Keep local API simulation as the default; clearly distinguish simulation rules from actual HTTP/browser behavior.
- [ ] Validate retention with unfamiliar scenarios and an optional real API exercise after the simulated curriculum.
- [ ] Test mobile Safari, desktop browsers, keyboard navigation, increased text size, reduced motion, sound controls, and save/restore behavior.

### Proposed curriculum: JSON, HTTP, and web API fundamentals

Scope: practical consumption of HTTP APIs using JSON and a small amount of JavaScript. APIs are a broader concept than HTTP endpoints; JSON is one possible data format. This is a proposed beginner curriculum, not a claim of complete coverage of all API styles or HTTP internals.

| Chapter | Technical learning goals | Story application |
| --- | --- | --- |
| 1. Requests and responses | APIs as contracts; client/server roles; request method/URL/headers/body; response status/headers/body; HTTP versus HTTPS | Pip learns the depot's delivery rules |
| 2. JSON values and syntax | Objects, arrays, strings, numbers, booleans, null; quoted keys; invalid syntax | Prepare a valid supply manifest |
| 3. Reading structured data | Nested objects, arrays, indexes, dot/bracket access; missing versus null values | Find a destination inside a manifest |
| 4. Encoding and validating data | JSON text versus JS objects; parse/stringify; response.json(); syntax versus required-field/type validation | Encode a parcel label and check its fields |
| 5. URLs and endpoints | Scheme, host, path, resource IDs, query parameters, URL encoding | Address the correct depot |
| 6. GET and asynchronous requests | fetch(), promises, await, Response objects, JSON bodies; basic GET safety/idempotency | Request the inventory |
| 7. Headers and formats | Content-Type, Accept, application/json; response formats and empty bodies | Choose a readable manifest format |
| 8. Status codes and failures | 2xx/3xx/4xx/5xx; 200/201/204/400/401/403/404/409/429/500; response.ok; HTTP errors versus network/JSON errors; try/catch | Diagnose rejected and interrupted deliveries |
| 9. Creating with POST | JSON request bodies, required fields, returned IDs, validation errors | Register a delivery |
| 10. Updating and deleting | PUT/PATCH/DELETE; replacement versus partial update; safe versus idempotent semantics; endpoint-specific contracts | Correct, replace, or cancel an order |
| 11. Querying collections | Filtering, sorting, pagination, list envelopes; query names follow the API's contract | Find and retrieve the needed supplies |
| 12. Identity and permissions | Authentication versus authorization; API keys, bearer tokens, cookies at a basic level; 401 versus 403; protect private credentials | Obtain the right depot access |
| 13. Resilient requests | AbortController/timeouts, rate limits, Retry-After, bounded retry/backoff, duplicate creation risks, idempotency support | Recover from a busy or unavailable depot |
| 14. Caching and freshness | Cache-Control, fresh/stale data, ETag, conditional requests and 304 | Decide whether a saved inventory is current |
| 15. Browser boundaries | Origins, CORS/preflight, credentials/cookies, mixed content; no-cors is not a readable-response workaround; CORS is not authorization | Understand why a browser blocks a route |
| 16. Reading contracts and completing a delivery | Read API docs/sample OpenAPI contracts; required fields, pagination, errors and versioning; combine request, validation, mutation, and verification | Restore the outpost's supply route |

Do not force twelve chapters simply to match the reference. Chapter count follows learning goals. Each chapter should contain several brief, independently resumable missions; chapters can span sessions. Provide the minimal JavaScript scaffolding needed so API practice does not become an unrelated JavaScript course.

Story-writing pattern for every chapter:
1. A concrete problem at the outpost.
2. A short explanation of the new concept.
3. A worked example.
4. Small code-edit challenges.
5. A new scenario solved with less help.
6. Specific feedback, a visible consequence, and a later review opportunity.

Further curriculum references:
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Later optional expansions: building a server, databases, OAuth implementation, GraphQL, webhooks, WebSockets, streaming, and deeper HTTP protocol/version details. These require their own learning goals and are not assumed prerequisites for this beginner game.
