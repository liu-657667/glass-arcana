# Current QA overview — 2026-11-13

This section supersedes counts/status below; older entries remain historical evidence, not new testing.

- Baseline: committed `57b0b376b039e9f1e3a43d5c364b92589c868666`. The missing later 16-file candidate has NOT been recovered. See `REIMPLEMENTATION_STATUS.md`.
- Baseline offline verification: 57 tests, TypeScript, production build and complete notices for six rendered runtime packages passed.
- Isolated Chrome origin on port 5197: Chinese/English searches, uppercase matching, zero results, Cups filter (14), bilingual About, Wheel/Ace of Cups differences, three-card reveal with upright/reversed cards, finish and journal reopen passed. Reopening preserved card identities and orientations. Three displayed faces loaded at 220 x 330 after animation; no console errors observed.
- No live API or credentials used. Only the QA tab and its preview process were closed. Original checkout remained unchanged. This pass does not certify all 78 visual details, Safari/mobile or full accessibility. Firefox excluded by owner.
- Reproducible checks: `npm run check`; `npm run build:web` for independent web assets. Committed manifests: `src/artDerivatives.json`, `src/artReview.json`. Do not rely on an inaccessible external freeze file as release evidence.
- Release scope remains source code for an adapted cultural-study/reflection tool, not a certified historical deck or hosted AI service. No release, push or deployment performed.

## Historical QA record

# Pre-release functional QA — 2026-11-12

## Result
Functional candidate, not a full release approval. 21 application tests +19 offline HTTP/provider/budget tests passed (40 total). TypeScript and Vite production build passed. No real API/key used. User history at5173 not modified: browser tests used independent localhost:5174 containing only synthetic QA records. Normal mock restored after testing; temporary5174 server stopped.

## Browser-verified this pass
- Three-card draw conceals identities, click/Enter/Space reveal each stable card. Example Eight of Wands upright / Six of Swords reversed / Five of Pentacles upright stayed identical after language change and history reopen.
- One-card draw with reversals disabled yields upright card;220×330 layout. Tab-scoped reduced-motion computed animation=none and focus stayed on the same button. Emulation reset.
- Chinese mock response lists correct card names/orientations; changing to English clears chat without changing cards.
- 1500ms tab-only network delay permits Cancel; form returns editable, no late response. Offline request produces explicit local-only error, no fallback. Network restored.
- English gallery search for High Priestess returns1; nonsense query returns0 with empty state; suit filter Pentacles returns14.
- All312 original/derivative artwork paths respond HTTP200 via local HEAD.78 original identities and234 derivatives present and hashes tested.
- Blocked WebP requests with cache disabled: Priestess gallery/detail successfully fell back to PNG (currentSrc verified); screenshot inspected. Block rule/cache override removed afterward.
- Desktop detail and390px gallery screenshots reviewed, readable; Escape closes modal and focus returns to invoking card. Real API consent never selected.

## Delivery sizes, not synthetic speed claims
Original PNG total299,234,978 bytes.320px variants6,922,102 bytes;640px26,765,528;1024px68,632,028. Client JS328.45kB (gzip89.51kB), CSS15.92kB. Lazy gallery/responsive sources reduce browser transfer but production dist still includes originals plus derivatives (424MiB measured on disk). Hosting quotas/storage need checking before deployment. No public-network timing, Lighthouse score, or CDN budget certified.

## Not covered / remaining limitations
- Full screen-reader testing, Safari/Firefox/iOS hardware, very narrow screens below390px, high-DPR performance not tested.
- History export download and destructive clear were not exercised in this pass; parsing/corruption/restore have unit coverage. Storage quota exhaustion/browser-private-mode not simulated.
- Both derivative AND PNG missing has not been fault-injected; native alt text exists, but no dedicated user-facing retry/error UI yet.
- No real provider rerun: earlier separate budgeted acceptance is recorded in AI_LIVE_ACCEPTANCE.md; backend currently intentionally disabled.
- Candidate art not final; Wheel typography remains incomplete. Knowledge78 basic first-pass sections only, not full historical/visual certification. Licensing/security audit handled independently.
- Existing CSS has accumulated historical overrides; current regressions passed but future style cleanup recommended before expanding layouts.

## Additional edge checks — 2026-11-12
- Latest total: 49 offline tests (27 app +22 server), typecheck/build and six runtime-license checks passed.
- Isolated localhost:5176 browser export produced a 536-byte JSON file containing only the newly created synthetic reading; file was parsed and its three card IDs/orientations/positions matched the displayed history. Export's browser-tool download event timed out, but the actual completed file was verified on disk.
- Clicking clear opened the correct confirmation; Cancel preserved the synthetic reading. Confirmed deletion browser path was not completed: browser control encountered native-dialog focus issues and then user activity. No user5173 history was read or cleared. Synthetic export retained as recovery copy.
- Extracted history operations used by the app now have isolated tests for quota exception, unavailable storage, failed/successful removal of only the history key, export round-trip and merging current stored records. Quota was simulated in unit tests, NOT by filling the user's disk or browser.
- Added explicit bilingual image-unavailable state after both WebP and PNG fail; card identity/reading preserved. New fallback UI compiles; actual double-failure browser rendering remains pending, not certified by the earlier single-failure test.
- No live AI requests, credentials, repository changes or publication involved.

## Offline follow-up
51 tests (29 app +22 server) and standard build passed. Dual-error state transition now tested: responsive→fallback→unavailable, terminal without retry loop, bilingual message; component uses the tested transition and resets on identity change. This is NOT a browser screenshot test. Independent web-lite build and artifact hash/path verification passed; originals unchanged. See ASSET_DELIVERY_PLAN.md for exact sizes and pending JPEG visual checks.

## Lightweight browser follow-up
- Isolated localhost5176 served dist-web (not user's5173). Blocking only WebP in that tab produced successful major-2.jpg fallback; actual currentSrc verified. Desktop screenshot showed B/J/TORA, scroll and principal stained-glass lines legible. This is a representative sample, not exhaustive 78-image/high-DPR quality approval.
- Blocking WebP AND JPEG showed explicit Chinese unavailable card in gallery. 390×844 English screenshot showed readable English fallback and stable card identity; document scrollWidth390 equals viewport390 (no horizontal overflow). This verifies the new double-failure visual state in the lightweight artifact. All network/cache and viewport overrides were restored before proceeding.
- Clear confirmation again opened for the exported synthetic5176 history; native focus handling timed out. Confirmation outcome could not be verified, so it remains unpassed. User's5173 page was active; no foreground switch or further native action was taken to avoid interference.
- Isolated preview stopped afterward. No real model calls or user5173 history changes. Normal PNG artifact's double-failure browser case remains separate from this JPEG variant, though shared state logic is tested.

## Resolved browser blockers — final isolated follow-up
- With user explicitly away from computer, brought only the isolated localhost5176 tab forward, clicked native confirmation OK for the previously exported synthetic history. Browser tooling retained a stale dialog flag after native dismissal; a fresh same-origin tab verified the persisted empty journal, disabled Export/Clear buttons and preserved English preference. Confirmed-clear path now passed; user5173 history untouched and synthetic JSON backup retained.
- Standard PNG artifact: tab-only WebP+PNG blocking yielded visible English unavailable card with preserved identity. Screenshot inspected. Removed blocking/cache override and reloaded; actual responsive major-2-320.webp loaded successfully. Standard and lightweight artifact dual-failure states are now both browser checked (lightweight also390px bilingual in prior pass).
- Browser session ended; isolated5176 server stopped. No live AI, credentials, deployment or push. Full 78 JPEG close-up comparison, Safari/Firefox/iOS hardware, complete assistive-technology testing, real storage-quota browser injection and public-network performance remain outside verified scope.


## Additional JPEG comparison and Safari smoke check (2026-11-12)

- Compression review: 78 paired overview images actually inspected; 4 larger critical-detail samples inspected. See JPEG_FALLBACK_QA.md for exact scope and residual manual review. No compression-specific blocker observed; not a historical accuracy certification.
- Safari native browser, isolated localhost:5176 lightweight build: home/card back loaded, three-card draw and each reveal passed; reversed King of Wands, reversed Wheel, upright Two of Pentacles displayed. Switching to English retained the exact three cards/orientations. Journal reopen restored these same results. True-model consent remained off; no AI request made.
- Safari screenshot showed rendered card faces and layout, but native screenshot was small/scaled: do not claim precise pixel-level Safari layout validation. Safari narrow viewport, reduced-motion, failure injection and full regression remain untested. Firefox was not installed; no installation performed.
- Closed only the added Safari QA tab; preserved the one synthetic QA history record in isolated Safari origin. Stopped temporary 5176 preview. User 5173 data, keys, and existing preview were not touched.
- No implementation change in this pass; prior 51-test/build result remains applicable, not rerun solely for these documentation additions.
