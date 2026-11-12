# JPEG fallback comparison / JPEG 备用图压缩验收

Date: 2026-11-12. Scope is compression fidelity, NOT historical or artistic accuracy.

## Method and result
- All 78 PNG originals were independently resized using the same 1024×1536 maximum / white-alpha handling as the JPEG converter, without overwriting originals. All reference/JPEG pairs decoded and have matching 1024×1536 dimensions.
- Viewed all 78 pairs in 13 side-by-side sheets at approximately 180×270 per image. No visible card-identity swap, framing loss, new/missing large suit objects, or significant color shift was observed at this overview scale. This is not a claim of 78 full-resolution symbol audits.
- Viewed larger paired crops of High Priestess (TORA/scroll/cross), Ace of Cups (dove/wafer/streams), Two of Wands (stone/rod fittings, high-error case), and Ten of Swords (blade/body boundaries). JPEG texture is modestly softer but these visible features retain their original shape. No compression-specific blocker found in these samples.
- PNG and JPEG retain the same unresolved source issues: Wheel typography, faint Ace of Cups wafer mark / missing W, and Two of Wands fine emblem questions are content-audit issues, not repaired or introduced by JPEG encoding.
- Small glyphs, dense overlapping staffs/swords, decorative marks and 78 full-size/detail comparisons still warrant human review. Counting large objects in overview does not establish canonical RWS fidelity. Original PNGs remain the archival reference; no image was replaced by these QA crops.

## Objective supporting evidence
Normalized RGB RMSE is a pixel-error indicator, NOT a readability score or a universal acceptance threshold.
All 78 pairs: min 0.0136409, median 0.0203941, max 0.0227134. Highest error: Two of Wands (0.0227134).

Per-card measurements: `JPEG_FALLBACK_METRICS.json`. Temporary side-by-side sheets/crops remain in ignored `.staging/jpeg-qa/` and are not release assets. No SSIM claim is made; the installed metric output was not treated as a validated similarity score.

## Additional full-image sampling
- Seven of Cups: viewed 1024×1536 JPEG; seven distinct cup vessels and their major contents remain legible (head, illuminated draped figure, serpent, castle, jewels, wreath, dragon). Whether the draped figure faithfully matches the intended historical plate is a separate open content judgement.
- Five of Wands: viewed 1024×1536 JPEG; five figures and five intersecting staffs are distinguishable. Dense crossings require larger view; thumbnail counting alone should not be used as final symbol approval.
