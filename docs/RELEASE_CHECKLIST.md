# Release / push checklist · 发布前清单

This is a release gate, not a declaration of complete acceptance. Current evidence: `RELEASE_FUNCTIONAL_QA.md`, `AI_LIVE_ACCEPTANCE.md` and per-batch audits. Earlier 4/23 text and 4/74 image counts are historical milestones only.

## Offline verification / 离线验证
- [ ] `nvm use`: Node 24.22.1; install from lock with `npm ci`, without changing global defaults.
- [ ] `npm run check`: frontend tests + all server/provider/budget tests + typecheck/build pass.
- [ ] Desktop/390px Chinese/English draw, per-card reveal, upright/reversed, keyboard/focus/reduced motion, history restore, search and source modal.
- [ ] Independent test origin only; preserve user history. Test export/clear/storage quota and concurrent tabs separately before claiming coverage.
- [ ] Mock success, cancellation, errors, no false fallback; live service remains disabled. Real API not used by tests.
- [ ] Long reply 2000/2001 boundary and follow-up validation; complete input byte budget still blocks oversize before send.
- [ ] 78 originals + 234 derivatives load; derivative-to-PNG fallback. Both-image-failure UI passed in isolated Chrome; Safari smoke passed. Full cross-browser/assistive-technology testing remains incomplete; Firefox excluded by owner, do not install.

## Content / 内容
- [ ] 78 identities, Strength VIII / Justice XI. 78 basic historical sections first-pass only; additional meanings, combinations and early plates pending; zero fully audited cards.
- [ ] 78 generated faces and one SVG back remain candidates, not placeholders or final approvals. Wheel symbols targeted-review passed with documented adaptation limits; Priestess targeted review only; retain all adapted-candidate limitations.
- [ ] Historical source locators and Waite/Smith attribution distinct from modern reflection; no invented quotations.
- [ ] Owner approved MIT code and CC BY 4.0 original prose/icons; preserve valid prior CC0 rights and check distribution history. 78 AI faces and derivatives approved CC BY 4.0 only for actually held licensable rights; no exclusivity/copyright guarantee. Owner separately approved original SVG card back under CC BY 4.0; visual review limits still apply.
- [ ] Verify image provenance/rights and third-party licenses. Free/noncommercial product intent is not a no-commercial-use license.

## Privacy, packaging and publication / 隐私与发布
- [ ] Inspect staged tracked files and any commit history before publishing. Initial source was prepared from a clean allowlist; pattern scanning is not a guarantee against every possible secret.
- [ ] Inspect explicit source allowlist, `.gitignore`, and package contents; exclude keys, `.env`, `.local`, `.audit-import`, `.backups`, history, logs, browser states, node_modules and private runners.
- [ ] Responsive images implemented; standard `dist` ~402 MB logical / 424 MiB disk, independent `dist-web` ~199 MB logical. Assess hosting/storage/public-network costs and performance; original files must not be deleted without permission.
- [ ] For any source ZIP, use the explicit allowlist and verify SHA-256. The owner approved creating public liu-657667/glass-arcana from the prepared local checkout; future pushes remain subject to scope and review.
- [ ] Repository visibility, release rights and deployment explicitly approved before publication; no telemetry or live API enabled silently.
- [ ] Previous five-request synthetic live acceptance is recorded, not permission to run again. Future model/consent/cost/key setup separately authorized.
- [ ] README and current notices agree on passed/failed/not run. Do not equate offline tests or local Chrome with complete release approval.

- [ ] Production artifacts retain project LICENSE/CONTENT-LICENSE/ARTWORK-NOTICE, `THIRD_PARTY_NOTICES.md` and every file in `licenses/`; build verifier compares full upstream texts verbatim. Do not upload only index.html/assets and omit notices.
- [ ] Review lockfile-wide `docs/DEPENDENCY_INVENTORY.json` separately for development/build/test dependencies; no assumption all are MIT. If redistributing any tool/binary/node_modules, package its full upstream licenses/NOTICE separately.
