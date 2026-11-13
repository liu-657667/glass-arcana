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
