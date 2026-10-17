# API Courier design decisions

Updated 2026-10-17. Applies to the existing API Courier hosted project, not to the reference repositories.

## Reviewed sources

- https://github.com/Pythonidaer/typography-learning/blob/main/AGENTS.md
- https://github.com/Pythonidaer/typography-learning/blob/main/DESIGN_DECISIONS.md
- https://github.com/Pythonidaer/typography-learning/blob/main/WEBSITE_DESIGN_BASELINE.md
- https://github.com/Pythonidaer/typography-learning/blob/main/dist/icons.js
- https://github.com/Pythonidaer/master-icon-library/blob/main/AGENTS.md
- https://github.com/Pythonidaer/master-icon-library/blob/main/DESIGN_DECISIONS.md
- https://github.com/Pythonidaer/master-icon-library/blob/main/PROJECT_DESIGN_ADDITIONS.md
- https://github.com/Pythonidaer/master-icon-library/blob/main/WEBSITE_DESIGN_BASELINE.md

Read current main-branch files through GitHub on 2026-10-17. The full baseline version 1.2 is preserved in WEBSITE_DESIGN_BASELINE.md. Reference projects are unchanged. Later decision entries take precedence over earlier superseded entries, including Master Icon Library's explicit Load more and nonsticky search decisions.

## Applied decisions

| Decision | Reason | Alternative | Check |
| --- | --- | --- | --- |
| No emojis or text-character UI icons | Explicit shared user preference | Saved SVG for a meaningful icon | Scan HTML, CSS, and JS for emoji and substitute icon characters |
| Text-only run, next, download, and hint actions | Arrows and plus/minus glyphs add no required meaning | Deliberately mapped approved SVGs | Inspect static and dynamically assigned labels |
| Exact saved Johnny UI close SVG in icons.js | Match Typography's approved accessible close control | Lucide belongs to the reference icon catalog, not every project | Compare path geometry to retrieved source |
| Plain API Courier heading and a concise purpose sentence | Replace slogan, repeated eyebrow, and PLAYTEST label | Narrative remains in missions and the illustrated world | Check heading hierarchy and copy |
| Existing Pip artwork and warm palette retained | User explicitly liked this game's design; preserve creative identity | Reference sites' neutral/dark palettes are scoped choices | This is an intentional exception to avoiding automatic beige/orange palettes |
| Sticky 68px frosted header; 14px blur and 78%/92% opacity | Carry the useful shared header treatment into the existing game palette | Opaque background when blur is unsupported | Source checks; browser scrolling review pending |
| Visible mission navigation stays in normal flow | Three lesson controls are contextual choices, not global site destinations | No unrelated hamburger/dropdown added | Current mission indicated via aria-current and underline |
| Compact task-first layout and consistent 16/24/32px major gaps | Make the actual game and code primary | Large promotional hero removed | Mobile wrapping review pending |
| 16px code input at every width | Carry over the Safari input-zoom decision including landscape | Never disable user pinch zoom | Source checked; iPhone behavior unverified |
| At least 44px action targets and reserved focus clearance | Support touch and visible keyboard focus | Do not hide outlines to avoid overlap | Dedicated dialog controls row and source spacing checked |
| Native named dialog with icon-only close, Escape, backdrop dismissal, and focus return | Keep instructions accessible and focused | No unnecessary animated panel | Native behavior and handler source checked; rendered review pending |
| Show/Hide hint exposes aria-expanded and aria-controls | Make disclosure state understandable | Native details could serve this function | State-handler source checked |
| Pause freezes animation time instead of resetting the character | Preserve meaningful motion control and reduced-motion support | Original jump to idle removed | Animation state source checked; device review pending |
| Quiet footer with assets and reset actions | Remove the repeated instructional slogan | No repeated brand block | Source checked |

## Scope and verification

Preserve all three missions, starter code, mock API behavior, feedback, response inspection, XP, browser-local drafts and progress, and the original downloadable courier assets. This is a UI refinement, not official Spine runtime integration. Asset and runtime limits in README.md still apply.

Syntax checks and the existing mission logic checks pass. Source scans check for emojis and character-icon substitutes. Browser automation/control-browser is unavailable, so mobile Safari wrapping, sticky blur, dialog focus geometry, and animation appearance remain for device review. Deployment confirms publication only.


## Initial Chapters 1–3 — 2026-10-17

- Add six short missions per chapter: requests/responses, JSON basics, and reading structured data. Choice, JSON, and JavaScript exercises match the learning goal rather than requiring full request boilerplate in every task.
- Keep all three original missions under Original practice, with legacy progress/draft migration on the same browser origin. New progress uses stable chapter/mission IDs; repeat completions do not duplicate XP. All chapters and missions stay available.
- Keep the existing world, palette, controls, and approved close SVG. Add a normal-flow chapter summary and mission selector. Examples, learning goals, hints, and solutions are disclosures; the Chapter 3 manifest opens by default because it is necessary to solve its tasks.
- Each chapter has a brief story purpose. JSON/data-only exercises are checked at the outpost; only request exercises animate a round trip, so reading JSON is not misrepresented as a network call.
- Add progressive hints and optional solutions. Answer checks compare semantic values and types, accept equivalent property access, and ignore JSON property ordering. The current checks verify the result rather than proving the learner derived it without hard-coding.
- Use static same-origin worker files for exercise execution. Run checks cover correct/incorrect answers, supplied starters, JSON syntax/types, equivalent code, null/missing values, and save migration. Browser automation remains unavailable, so mobile Safari layout, focus, and worker behavior are not visually verified.
