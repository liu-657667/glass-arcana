# RWS Major Arcana: text-audit sidecar

## Scope

2026-11-12: 22/22 Major Arcana entries checked against the named Part II and Part III sections of Waite's *The Pictorial Key to the Tarot*, in the Wikisource 1922-edition transcription. This is a selective editorial summary, not a complete translation, an academic critical edition, or independent proof of the author's historical or religious claims.

No finished artwork or early colour plate was inspected in this batch. All `earlyPlateVisual` states remain `pending`; fully audited count is **0**. Minor Arcana are not included here. Batch 01 separately contains Cups Eight, so the cumulative source-text coverage is **23/78**, not 26/78 (three Major entries overlap) and not 78/78.

## Files and automatic validation

- `rws-major-text-22.json`: join by existing `Card.id`; supplies 22 entries plus the 78-ID manifest.
- `validation-major.json`: executed assertions and content SHA256.
- `major-data.txt`, `build_major.py`: editable source and repeatable generation/validation.

Tests verify valid JSON; 22 distinct sequential Major IDs; 78 unique manifest IDs; VIII Strength / XI Justice; nonempty Chinese/English required fields; resolvable source IDs; no image incorrectly marked reviewed. These tests do **not** establish translation accuracy or factual validity. The bilingual prose was manually drafted and compared for scope in this pass.

## Safe integration

Do not replace the whole existing 78-card collection with these 22 entries. Merge by ID; retain the previous Cups Eight entry and all unaudited Minor entries with their pending labels. Do not let `not_in_this_batch` overwrite a previously verified field. Keep the historical panel separate from ordinary original-reflection prompts. Historical divination uses selected examples only: it is not a complete dictionary and must not be used as diagnostic, financial, legal or disaster prediction.

Source text is religious/esoteric testimony. A source being old does not make it empirically true. Our modern prompts are newly drafted project text, not purported Waite quotations or a claim that all modern readers agree. Reversal prompts are alternatives for reflection, not a simple good/bad inversion. Original historical gendered personal assignments and medical labels are not applied to users.

## New audit findings

- Chariot: the text explicitly describes a drawn sword. This must be preserved as a text/plate discrepancy to investigate, not used to automatically add a sword to the new artwork.
- Strength: the text's comparison of its overhead symbol names the Hierophant. Treat that wording as an unresolved textual issue; do not use it as a reason to alter another card's symbol.
- Hermit: Waite stresses attainment and a guiding light, and rejects isolationist readings. Modern solitude prompts remain clearly labelled modern.
- Lovers: the original treatment concerns Eden and human love; reducing it to choice alone loses the primary context.
- Star: Part III includes adverse meanings alongside a hopeful alternative. We preserve the disagreement instead of presenting hope as the sole historical answer.
- Sun: the historical reversal is similar but reduced, not automatically disaster.
- World and Justice: Part II partly refers to earlier traditional descriptions rather than independently enumerating all visible motifs. Those image details are not certified by this pass.
- Death: no visible weapon. Both transformation and mortality occur in the author's discussion; neither a literal death prediction nor a claim that death is absent from the original is appropriate.

## Provenance and rights

Primary references:
- https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_2 (§2, each named Major card)
- https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_3 (§3, each numbered Major card)
- https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot (1922 title page and rights notice checked in batch 01)

Author: A. E. Waite. Original deck illustrator: Pamela Colman Smith. This batch includes no image assets, third-party contemporary translation or modern commercial deck text. Earlier primary-work public-domain review does not constitute worldwide image clearance. Each actual artwork/scan and edition still needs its own provenance record. No new image-license verification is claimed.

Use the project's chosen original-prose license only after owner/project review. MIT/CC0 permit commercial reuse; the user's preference to avoid commercial dependencies and features is not itself a noncommercial licensing clause.

## Next work

55 remaining Minor entries need source-text review, with numeric suit-object counts and courts separated. The 22 Major plates and all finished art still need visual checking. Do not promote any text-audit status to a finished-art approval.
