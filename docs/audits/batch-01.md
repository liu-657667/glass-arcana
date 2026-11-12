# RWS knowledge audit · batch 01

Checked 2026-11-12. Independent merge proposal; does not modify the application or the user's Mac.

## Coverage and integration

- 78 stable application IDs inventoried; 4 primary-text entries checked: major-0, major-2, major-13, cups-8.
- 0 entries fully audited against early colour plates and finished project artwork; 74 primary-text entries remain pending.
- `rws-audit-batch-01.json` is a sidecar joined by existing `Card.id`. Missing IDs must retain `待逐牌核校`, not inherit this batch's status.
- Historical summaries are selective, not critical editions or complete translations. Modern bilingual prompts are newly drafted project prose, not translations of Waite and not purported consensus meanings.
- Show historical material in a separate expandable study panel; use only the modern reflection layer for ordinary readings. Do not silently convert history into predictions.
- Do not collapse `primaryText`, `earlyPlateVisual`, and `artwork` into one `verified` badge. A text-checked record may still contain pending image details.
- `count` in the existing Card model is useful for the numeric suit cards only. Court-card artwork can contain ornamental suit motifs, so a universal exact-one rule is unsuitable. Aces-to-ten should get dedicated suit-object counting tests.

## Important findings

1. The linked Wikisource text displays a **1922** title page. State this edition explicitly, rather than presenting it as a direct scan of a 1910 edition.
2. High Priestess: the text confirms B/J and black/white columns but its enumeration does not establish left/right placement. Inspect the actual early plate before certifying sides or letters.
3. Death: a visible scythe contradicts Waite's explicit weaponless rider description. The source discusses transformation as well as mortality; saying that death never occurs in the original meanings would also be inaccurate. The app must not predict real death or diagnose health from this card.
4. Eight of Cups: Waite acknowledges contradictory readings. His historical reversal is joyful, so modern prompts about hesitating to leave must not be labelled his original reversed meaning.
5. Fool: modern new-beginning language and Waite's older divinatory list are not identical. We preserve the distinction rather than manufacturing one canonical answer.
6. No automatic suit/element/astrology correspondences have been added. Such correspondences need their own named source and school.
7. The future card back is not a 79th card. Its 180-degree symmetry is a design requirement, not an attributed historical meaning.

## Source and licensing review

Sources accessed directly:
- https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot (title page and rights notice)
- https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_2 (named card sections)
- https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_3 (§2 Cups Eight and §3 Major Arcana)
- https://commons.wikimedia.org/wiki/File:Cups08.jpg (edition, history, rights notice)

The primary book's own rights notice identifies US public-domain status and life-term jurisdictions; it is not a worldwide warranty. The text is by A. E. Waite and illustrations by Pamela Colman Smith. Preserve both attributions. Do not infer rights to a recent Chinese translation, recolouring, restored deck or publisher branding from the age of the original work.

The Cups08 file page labels the current scan Pam-A (1910), Public Domain Mark; its upload history explicitly distinguishes the earlier deck from a modified 1971 version. This verifies the cited file's provenance statement, not all images on Commons. The page has potentially confusing author/copyright-holder dates, so do not export its life-plus-80 phrasing as a universal legal conclusion. Record the actual source/version for every asset ultimately distributed.

No third-party modern meanings dataset, modern Chinese translation, image binary or web-page editorial prose has been copied into this batch. New short reflections can follow the project's existing original-prose license after owner review; source attribution remains useful even where not legally mandatory. A CC0 or MIT license permits commercial reuse: avoiding commercial dependencies/features is different from imposing a noncommercial legal restriction. Do not label the project both MIT/CC0 and legally noncommercial.

## Next batch

Inspect early plates for these four samples and compare their finished illustrations; then audit the remaining Major Arcana in short batches, followed by numeric minors and courts. Preserve unresolved source disagreements rather than resolving them by invention.
