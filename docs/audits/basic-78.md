# RWS bilingual knowledge sidecar: 78 basic named-card sections

## What is done

All 78 cards now have source-based **basic-text editorial summaries** and original Chinese/English reflective prompts:
- 22 Major cards: Waite, *The Pictorial Key to the Tarot*, Wikisource's 1922 edition transcription, Part II §2 and Part III §3.
- 56 Minor cards: same edition, Part III §2, all four suits Ace through King.

The second scope does **not** include §4's additional meanings, §5's recurrence/combination rules, or all spread methods. This is not a complete translation or critical edition. A valid description is “78 basic card sections text-reviewed”; not “the full 78-card system completely verified.”

Image status: **0 early plates visually certified, 0 final artworks approved, 0 all-dimensions-complete cards.** Do not upgrade those badges based on text review.

## Deliverables

- `rws-basic-text-78.json`: one consolidated sidecar using existing application IDs. No duplicate Cups Eight or overlapping Major records.
- `validation-basic-78.json`: successful automatic structure report and JSON SHA256.
- This README and `README-major.md`: integration, scope and findings.

Automatic checks: 78 exact unique IDs; 22 Major plus 14 per suit; Chinese and English fields populated; source references valid; no complete-translation claims; image states pending; overall statuses partial; explicit per-card review scope. They cannot establish semantic or translation accuracy. Prose has received source-based editorial review, not independent academic certification.

## Integration contract

Join by `Card.id`; this is content, not an app replacement. The `modern` layer is original project reflection, never passed off as the historical author's words. The `historical` layer belongs in an optional study panel and must retain selective-summary labels. Old medical, legal, gendered, mortality and accusation language is historical documentation, not a basis to diagnose or predict a user's circumstances. Modern reversals invite a different reflective question; they are neither uniformly bad luck nor automatic opposite meanings.

Keep `review.primaryText`, `earlyPlateVisual`, `artwork`, and `overall` separate. `primaryText: checked` means the stated limited section was compared, not that every statement in the book or picture is certified. Don't use the 78 records as evidence that all artwork symbols have been counted.

## Important differences retained, not silently harmonized

- Cups Ace: the text says **four streams**; common plate descriptions often say five. Record this as a text/plate discrepancy and inspect the actual early edition before using it as an art constraint.
- Cups Two: §2 does not supply a separate reversed list. The record explicitly leaves that historical value absent. Its modern reversed prompt is original, not an invented historical quotation.
- Cups Eight: opposite historical readings are acknowledged, and the reversal includes joy and feasting.
- Wands Four: the reversal remains broadly positive in the source. Wands Three's reversal includes the end of trouble. Don't force a good/bad template.
- Wands Two and Ten: Waite acknowledges incompatible or multiple readings. The dataset preserves this ambiguity.
- Swords Seven: the source includes plans, attempts, hope and possible failure, not just deception.
- Swords Ten: the source says it does not particularly indicate violent death; reversed success is qualified as impermanent. No death predictions belong in the app.
- Pentacles Five and Seven: alternative historical readings resist a single modern slogan.
- Courts: original physical descriptions and rigid gendered identifications are not reused as instructions to identify real people. Court roles can be reflective viewpoints without assuming the user's gender or a partner's intent.
- Chariot and Strength retain textual ambiguities described in `README-major.md`. World/Justice image details referred elsewhere are not silently certified.

## Sources and rights

https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_2
https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot/Part_3
https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot

Author: A. E. Waite. Original deck illustrations: Pamela Colman Smith. Each record gives a named-card locator and source ID. The text is historical/esoteric testimony, not scientific evidence that divination predicts outcomes.

No image binary or contemporary third-party translation is distributed here. Prior source-work public-domain findings are not a worldwide warranty or blanket clearance for modern decks, scans, recolourings, translations or typography. This batch makes no new image-license claims. Original project prose should follow the project's selected license after review. MIT/CC0 permit commercial reuse; avoiding paid services, memberships and ads is a product choice, not a noncommercial legal restriction.

## Work still required

1. Visually compare early identified plates with each record, distinguishing text/plate discrepancies from mistakes.
2. Check all produced art, including characters, actual suit-object counts, text, orientation and strict 180-degree card-back symmetry.
3. Review §4 and other historical sections if presenting a fuller historical reference, preserving contradictory alternatives.
4. Native-language editorial pass and accessibility checks in the live bilingual app.
5. AI chat must receive actual drawn IDs, orientation, spread position and the correctly labelled content layer. Never imply historical claims or generated answers are certain predictions.
