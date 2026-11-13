# Ace of Swords v2 / 宝剑一修正候选

Status: isolated candidate, not installed in production, not a release.

## Provenance and integrity

Newly generated on 2026-11-13 with the built-in image generator using the existing `public/art/swords-1.png` as an edit reference. This is a new output, not recovery of the earlier display-only candidate. The generator returned a real saved PNG, which was copied normally; no base64 terminal transport or denied import workaround was used.

- Original SHA-256: `3768b732d26ab498839af61649667f26e243fe17a2f334c342765ae626b506af`.
- Candidate: `ace-of-swords-v2.png`.
- Candidate SHA-256: `bc71d13ae479931da2cdbc1ef2fa1326ac743c37ac0d42338ca7b9703f969e0b`.
- Dimensions: 1024 × 1536 pixels, PNG.

## Visual review

The generated full-resolution image was actually viewed. Six distinct gold yod-shaped marks are visible: three left and three right of the sword. They do not overlap the sword, hand or branches. The viewer's left branch has broad leaves and visible olive fruits; the viewer's right has long narrow palm leaflets. The original single upright sword through a gold crown, hand emerging from the left cloud, purple mountains and Gothic stained-glass border remain recognisable.

已补足六枚金色 yod，并修正为观者左橄榄、右棕榈；原生产牌图保持不变。这是现代改编，不代表历史原版逐像素复刻，也不代表手部、全部微细节或整套牌终审通过。尚未制作小尺寸衍生图、接入应用或进行此候选的浏览器验收。

## Generation specification

Precise-object edit of the existing Ace of Swords. Preserve 2:3 portrait composition, gold Gothic frame, vivid blue textured glass, single upright sword through the crown, left cloud hand and purple mountains. Swap hanging branches to viewer-left olive with broad leaves and fruit, viewer-right narrow-leaf palm. Add exactly six separate small gold Hebrew yod-shaped flame marks, three on either side of the sword, countable and unobscured. Keep all other visual invariants, no text, no extra sword, no extra floating marks, no montage.

## Remaining gates

Inspect 320/640 derivatives and isolated browser presentation before production installation. Keep this candidate outside `public/`; no runtime manifests or production references changed. Follow `ARTWORK-NOTICE.md`: license grants cover only rights actually held and licensable; no exclusive AI-copyright or worldwide-clearance guarantee.

## Follow-up validation on Mac

The actual PNG was transferred through the supported Library helper in a git bundle (SHA-256 `027dad7db6aaac9fd3b98395b5eb963ab4358bcdac7eaba673b5fc357f4a0709`), verified by Git and imported after fast-forwarding the QA branch to its required base `d77c73f`. No concurrent commits were discarded.

The original PNG was visually inspected again. New 320 × 480 and 640 × 960 WebP derivatives (ImageMagick, quality 90; hashes in `derivatives.json`) were loaded in a dedicated Mac Chrome preview. Both images reported complete=true and the correct natural/display dimensions; HTML and both assets returned HTTP 200. Actual screenshots at both display sizes show three separate gold yods per side, olive fruit/broad leaves on viewer-left and narrow palm leaflets on viewer-right. The six marks remain countable at 320px; the lowest marks sit close to the gold guard but remain separated by dark outlines. One sword, crown and cloud hand, mountains and Gothic border remain recognizable.

This supersedes the earlier untested-derivative statement, not the limits on historical exactness or full microdetail review. The candidate is still outside production; no application integration, Safari or phone-viewport certification is claimed. The local preview server and dedicated tab were closed after validation.

`npm run check` passed: 37 unit + 22 server tests, type check, production build and complete runtime-license checks. No API was used. Original `public/art/swords-1.png` and runtime manifests remain unchanged.

Later QA decision: adopted in QA runtime after original/candidate and 320px review. See `docs/audits/two-candidate-adoption-20261113.md`. This supersedes earlier not-installed status, not release status.
