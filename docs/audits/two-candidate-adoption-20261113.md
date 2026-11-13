# Two-candidate comparison and QA adoption — 2026-11-13

Base: QA branch `11442b3`. This is a QA-only change, not a release or a claim that all 78 cards have completed microscopic review.

## Ace of Swords: adopt v2

Actual original PNG and candidate PNG were inspected, followed by the new 320px WebP. The edit retains the original gold Gothic border, blue glass leading, single sword/crown/cloud-emerging hand and purple mountains. Six separate golden yod-like marks are visible (three per side). Olive is now viewer-left, palm viewer-right. At 320px all six marks remain separate and the branches, hand, crown and blade are legible. No title/text was added and no extra sword or hand was observed. The gripped hand retains the source illustration's stylized anatomy; no new obvious limb defect was observed. This is an original RWS-inspired adaptation, not a facsimile or a guarantee of anatomical perfection.

- Old PNG SHA256: `3768b732d26ab498839af61649667f26e243fe17a2f334c342765ae626b506af`
- New PNG SHA256: `bc71d13ae479931da2cdbc1ef2fa1326ac743c37ac0d42338ca7b9703f969e0b`
- Byte-identical old PNG backup: `candidates/art-20261113/ace-of-swords-v1-backup/swords-1.png`
- QA runtime uses new PNG and regenerated 320/640/1024 WebP. `src/artReview.json` and `src/artDerivatives.json` updated. Historical audit snapshots keep their old hashes as historical evidence, not current manifests.
- Targeted WebP regeneration used ImageMagick with libwebp, method 6, qualities 86/90/92. Future full `derive-art.py` may produce different binary hashes; always regenerate its manifest with the actual outputs.

## Judgement: retain v2 as candidate, do not install

Actual old and new PNGs were inspected. Candidate correctly makes six people/coffins visible and retains angel, trumpet, white flag/red cross. Its `XX` and `JUDGEMENT` are correctly spelled, but these new large title panels conflict with this deck's existing text-free artwork treatment and reduce scene area. The rear middle figure looks adult rather than clearly childlike. Existing old art has only three people. Neither image resolves every comparison issue, so do not label Judgement finished or silently exchange one set of defects for another.

Next edit should preserve the old border/text-free visual system, add a clearly separated rear group with child, and keep six people/coffins readable without crowding. This pass did not generate another image or call any live API.

## Validation of this change

- `npm run check`: passed 59 offline tests (37 + 22), TypeScript, production build, and complete notices for 6 rendered runtime packages.
- Verified hashes for all 78 installed PNGs and all 234 WebP derivatives, plus byte-identical v1 backup.
- Browser regression attempted in isolated Chromium with no external requests permitted. Cloud Chromium failed before opening a page: `process_singleton_posix.cc socket() failed: Operation not permitted`. Approved escalation retry had the same failure. Therefore this changed commit has **not** passed browser regression; previous branch browser checks do not cover this replacement. Mac or supported managed-browser regression remains outstanding.

### Subsequent Mac verification

The exact QA commit was transferred through Library in a SHA-256 verified Git bundle into the clean isolated Mac checkout. `npm run check` passed again. Google Chrome then passed the existing full offline regression and a new targeted installed-image check at 320/390px: search by the app's canonical name `宝剑王牌`, open the card dialog, verify decoded image and `swords-1` current source, no page horizontal overflow. Actual 320/390 screenshots were viewed: complete card border and six separate gold marks remain visible. Initial test used the informal `宝剑一` name and correctly returned zero results; the test was corrected to the existing canonical name, not a product behavior change. No live model requests were made. Safari was not rerun for this image-only adoption; real-device/Firefox coverage is not claimed. QA branch only; no release or main update.
