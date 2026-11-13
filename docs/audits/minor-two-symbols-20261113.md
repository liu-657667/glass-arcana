# Two-card symbol audit — 2026-11-13

Scope: original-resolution installed PNGs visually compared with the two linked historical reference images. This is not a whole-deck approval, exact facsimile claim, browser pass, or legal clearance. No art was replaced. Both remain `adapted_candidate`.

## Evidence

Reference edition context: Sacred Texts presents Waite/Smith, London W. Rider [1911], scanned by J. B. Hare. Its US public-domain statement is not a worldwide legal guarantee. References were downloaded only into temporary review storage, not distributed with this project.

- Ace chapter: https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/ace-of-swords
- Linked reference pixels: https://scrape.sacred-texts.com/tarot/pkt/img/swac.jpg
- Reference SHA-256: `e4d65c06dd370f55158d821f44eb357f815a3cca3e7971eb88d2c1e20052de9b`
- Installed `public/art/swords-1.png`: `3768b732d26ab498839af61649667f26e243fe17a2f334c342765ae626b506af`
- Nine chapter: https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/nine-of-pentacles
- Linked reference pixels: https://scrape.sacred-texts.com/tarot/pkt/img/pe09.jpg
- Reference SHA-256: `deed19860a75e2063de58a7ffb3b6fc02b061328662b3506c2baf2a14dfecd6b`
- Installed `public/art/pentacles-9.png`: `e1e67c4eb53da9b8f98c924468c7ca6765936b26e87e501187737aeacf3d5ccb`

## Ace of Swords — correction warranted

The reference visibly has six separated gold yod-like marks, three on either side of the blade above the hilt. The installed image lacks those six marks. It preserves the single sword, cloud-hand, crown and mountains. The reference hanging olive branch is viewer-left and palm viewer-right; the installed design reverses those sides. These are design discrepancies, not runtime defects.

Next candidate specification: retain the original stained-glass style, single sword/cloud-hand/crown, mountains and border; add exactly six distinct gold yod-like marks, three per side above the hilt, separated from crown ornament and glass seams; place olive viewer-left and palm viewer-right. Check those counts and positions at original/640 resolution and report 320px readability rather than assuming it. Never replace the installed asset before an actual saved candidate and independent review exist.

## Nine of Pentacles — hood exists; clarity remains unresolved

The installed image visibly contains nine pentacles (six viewer-left, three viewer-right), a robed figure, wrist-perched bird, grape vines, estate and snail. The red head covering is present. A prominent black circular eye-area feature could read as an exposed eye/opening; do not assert that no hood exists. The low-resolution historical image visibly has a red hood, but does not justify a pixel-exact anatomical assertion about the eye.

Next optional clarification specification: change only the bird hood to an unambiguously closed falconry hood covering the eye, keeping the beak unobstructed, anatomy natural, all nine pentacles, figure, snail and original style intact. This clarifies the intended symbol, not a claim that the current bird lacks a hood. Inspect new original and derivatives before acceptance.

## Persistence gate

No new image was generated or imported in this pass. The built-in generator available here returns image data/display and an optional hint, without a destination-path parameter. The documented default generated-images location contained no recent persisted file when checked. Available Library create/prepare tools accept an existing local file, not a substitute for the missing generated artifact. No supported saved artifact for the earlier displayed Judgement candidate was established. Prior rejected image-import attempts were not retried, split, or routed through a workaround; no paid API/CLI fallback was used. Consequently these specifications are NOT completed artwork.
