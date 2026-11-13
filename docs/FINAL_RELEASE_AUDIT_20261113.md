# Final source-release audit / 源码发布前核查

Date: 2026-11-13. Source baseline: `29bd8ca2f96e6442a6657fe0312b71c009e0d1df` on `qa/acceptance-followup-20261113`. This report and documentation corrections are a separate QA backup, not approval to merge, tag, deploy or publish v0.1.0.

## Verified in this pass

- Node 24.22.1 matches `.nvmrc` and the package engine. Existing installed dependencies from the cloud QA checkout were reused; a clean `npm ci` was **not** repeated in this pass.
- `npm run check`: 59 offline tests (37 application + 22 server/provider), TypeScript, normal production build passed. No real API request or key was needed.
- `npm run build:web`: passed; all 78 original hashes, 234 WebP derivatives, 78 JPEG fallbacks and the original vector back verified.
- Both builds retain full notices for all six rendered third-party runtime packages. The verifier compares upstream license texts, not just SPDX names.
- All 106 lockfile dependency entries match the separate dependency inventory, including versions and declared licenses: 99 MIT, 4 Apache-2.0, 1 ISC, 1 BSD-2-Clause, 1 BSD-3-Clause. This is metadata validation, not redistribution permission for arbitrary tool binaries; source delivery excludes node_modules.
- Reviewed MIT code / CC BY 4.0 original content, icons and vector back / limited-to-held-rights CC BY 4.0 AI artwork notices. Prior valid CC0 rights are expressly preserved. Third-party terms remain separate. ziwei-doushu inspiration and Waite/Smith sources are acknowledged without claiming upstream code reuse or global public-domain clearance.
- 422 baseline tracked files contain no tracked `.env`, node_modules, build output, test state, ZIP, private key or credential files. Common OpenAI/GitHub token and private-key-header pattern scan found no matches in tracked text.
- Available **shallow** history contains seven commits; scanned 117 reachable text blobs smaller than 2 MB with those patterns, zero matches. This is not full remote-history secret scanning, binary inspection or proof of absence of all secrets. No credentials were printed.
- Corrected stale README/SOURCES comparison-gap language and distinguished later regenerated artwork from the lost, unrecovered 16-file working tree.

## What the evidence means

All 78 cards have basic symbol/count/composition review records: 22 Major and 56 Minor. Ace of Swords v2 and Judgement v3 supersede the earlier findings for their old images, with originals retained as backups. Historic reports remain evidence for their recorded hashes, not current defects. **Zero cards are certified exhaustively audited**: micro-symbols, historical editions, anatomy and final rights clearance remain limited. This is a clearly labelled original adaptation for study/reflection, not a facsimile, a verified prediction system or a certified historical edition.

Chrome browser evidence is in `BROWSER_REGRESSION_20261113.md` and `audits/two-candidate-adoption-20261113.md`, including both new cards at actual 320/390px viewports and the full-page screenshot limitation. No new browser execution is claimed by this documentation/license pass. Safari evidence must be reported separately for its actual revision and scope. Firefox and real iPhone tests are **deferred at the owner's request**, not passed and not an automatic blocker for the agreed limited scope.

## Remaining release decisions and limits

- Do not publish or update main without the owner's explicit release confirmation. A QA push is not a release.
- A local, source-only study-tool release can retain disclosed adapted-candidate artwork and selective knowledge summaries. Do not relabel every historical/review `pending` flag as complete merely to remove a warning.
- Public AI hosting remains out of scope: live service is off; deployment requires authentication, abuse/rate/cost controls, privacy review and separate model/data/cost approval. Static hosting provides no model backend.
- Real screen-reader coverage, exhaustive content/artwork/rightsholder clearance and public-network performance are not established. No legal non-infringement guarantee is made.
- Actual build sizes in this cloud pass: normal `dist` 398,444,040 logical bytes; `dist-web` 196,420,780 logical bytes. These are measured local artifacts, not a network-performance result. Keep license directories when packaging; remeasure after subsequent changes.
- Before an actual release, repeat applicable checks on the final combined commit, verify the staged/source package and remote SHA, and report remote CI separately. This pass does not certify a final combined branch or remote CI.
