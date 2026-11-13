# Reimplementation record / 重新实现说明

Date: 2026-11-13. Base: `57b0b376b039e9f1e3a43d5c364b92589c868666`.

This is a new, limited reimplementation from verified task outcomes, NOT recovery of the lost 16-file working tree. Neither its bytes nor its complete diff are available. No release, push or deployment is authorized by this document.

## Reimplemented

- README identifies a v0.1.0 source release candidate, distinguishes actual tags/Releases and excludes hosted AI deployment.
- Footer says `STUDY TOOL · 0.1.0`, without claiming publication or full content certification.
- Current QA overview separates this baseline's new browser evidence from retained historical results and points to committed manifests and reproducible commands.
- A regression test preserves candidate/publication boundaries and these documentation links.

## Explicitly not recovered or certified

- Ace of Swords and Nine of Pentacles revised PNGs, six derived WebP files and two JPEG fallbacks mentioned by the earlier worker are unavailable here. Existing committed artwork and matching hashes remain untouched. Do not mark the six yod marks or the bird hood as newly reviewed on these existing images.
- Any additional early-plate visual review of 22 Major Arcana is not transferred from a prose summary. Existing per-card pending flags remain intact until the actual reference images, edition and each comparison can be verified again.
- The missing candidate's full 16-file list, exact audit edits and freeze manifest are unavailable. A historic hash cannot reconstruct files or validate this new work.
- Whole-deck final visual/rights review, mobile/accessibility and public hosting/performance remain separate gates. No broad copyright/non-infringement guarantee is made.

## Verification

Run `npm run check` and `npm run build:web` from this tree with Node 24.22.1. Record current results rather than relabelling old results as new. Browser evidence in `RELEASE_FUNCTIONAL_QA.md` applies to baseline features; later changes here are footer wording and documentation only.

Current reimplementation result: 58/58 offline tests passed (36 application + 22 server). Typecheck, standard build, web-lite build and both complete-runtime-notice checks passed. Asset verifier confirmed 78 original hashes, 78 JPEG fallbacks, 234 unchanged WebP derivatives and the vector back. No original image or audit metadata was changed.

Post-commit verification: source commit `585640247e97788542d8b5c58bb8c4a18c6fb9e2` was pushed to the independent `qa/reimplementation-20261113` branch and read back from the remote. Main remained `57b0b376b039e9f1e3a43d5c364b92589c868666`. GitHub Actions run listing for this branch returned no runs; do not claim remote CI passed. Built standard preview was checked in isolated Chrome: both Chinese and English home pages expose `STUDY TOOL · 0.1.0`, card back and form render normally. Only the added tab and preview were closed. No release/deployment or real API calls.

## Later work, not recovery of the missing tree

The sections above describe the original limited reimplementation checkpoint, not the latest QA artwork. Subsequent `qa/acceptance-followup-20261113` commits added fresh 22-Major/56-Minor first-pass comparisons and newly generated Ace of Swords v2 / Judgement v3, with retained backups and current manifests. These are new work, not recovery of the missing 16-file diff or the missing Nine of Pentacles revision. Current verification and boundaries: `FINAL_RELEASE_AUDIT_20261113.md`.
