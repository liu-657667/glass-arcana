# JPEG fallback comparison / JPEG 备用图压缩验收

Date: 2026-11-12. Scope is compression fidelity, NOT historical or artistic accuracy. The original 78-pair measurements below describe the earlier artwork build, not the subsequently replaced three faces.

## Earlier build: method and result
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

## Revised three-card delivery review — 2026-11-12

After replacement, an independent review checked the revised Wheel of Fortune, Ace of Cups and Two of Wands PNGs against their 320/640/1024px WebP and JPEG fallback outputs, and verified hashes. These three revised delivery sets passed the scoped comparison; this is not a new approval of all 78 cards or a legal-clearance certificate. The Two of Wands emblem is small at 320px: inspect at larger resolution for its detailed crossed rose/lily design. No claim is made that every small glyph is readable in a thumbnail.

The Wheel passed as an original RWS adaptation, not a stroke-for-stroke reproduction; the spoke extension above Mercury remains absent. Ace of Cups and Two of Wands passed targeted symbol corrections, not complete historical or rights review. See `src/artReview.json` for retained limitations. The earlier RMSE table remains historical evidence and has not been recomputed for this revision.

Current original SHA-256:
- `major-10`: `5bbaf3cd1f8d5684633433aac8a7ff23714254b0a162a90ebaf3e15cc4d8d91e`
- `cups-1`: `9f3b4bee3bb21f9306cb04a150134f239a447cab1b20bd556da75583ed550609`
- `wands-2`: `b1fd511cbbb61d5268bc9d4387e545b81e5d2375a300b8d77c10b93388f1680c`

## Additional count corrections — targeted delivery review passed
The Lovers (twelve flame clusters), Star (five land channels), and Moon (fifteen drops) were replaced after targeted independent PNG count review. Their regenerated delivery sets subsequently passed independent manifest/hash checks and actual visual comparison: three PNGs, nine WebPs and three JPEGs. Lovers flames are small at 320px; use 640px or larger to count them. This is a scoped six-card revision record across the two batches, not proof of full historical fidelity for the whole deck. Retained differences: uniform flames/clothed figures; small round pools at the five channel ends; three rows of ordinary drops rather than yod glyphs, and moon-ray counts not fully checked. The Empress is unchanged: her twelve-star floating arc is not twelve stars mounted on a crown. See current bilingual artReview and pendingChecks.

## Whole-deck scope and remaining historical comparison gaps

The earlier actual visual inspection covered all 78 project images. That overview must not be confused with exhaustive source-plate comparison: evidence for historical plate comparisons remains incomplete, including 19 numbered Minor cards and three Court cards, among other recorded gaps. The targeted six-card corrections and delivery checks do not fill those unrelated gaps. Retain candidate/adaptation labels and source-specific pending checks; no claim is made that all 78 cards match every historical detail, or that visual review clears legal rights.
