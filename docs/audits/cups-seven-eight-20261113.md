# Cups Seven and Eight — scoped visual comparison, 2026-11-13

Actual original PNGs and temporary historical reference JPEGs were viewed. No new art was generated or installed. This is not a full-deck, browser or legal approval. Keep existing statuses: Seven is `adapted_candidate`; Eight is `candidate`. Neither is final.

References: Sacred Texts Waite/Smith [1911] image set. These temporary study copies are not shipped in the repository. Edition context and rights limitations follow `minor-two-symbols-20261113.md`; US public-domain claims are not universal clearance.

## Seven

- Reference: https://scrape.sacred-texts.com/tarot/pkt/img/cu07.jpg
- Reference SHA-256: `ce40573c7daf15082d366820c3622f200312da461093e465d36635b095edd0c1`
- `public/art/cups-7.png`: `046a08adeca1db27b2701cd66b6b5b3c01b492fc94df7de77bea3504963b0d79`
- Count checked: seven cups, arranged three above and four below. Head, central figure, serpent, castle, jewels, wreath and dragon are individually readable. Foreground viewer and clouds preserved.
- Difference: central figure face is visible instead of the reference fully covered figure. Wreath cup lacks the dark skull-like motif on the historical cup. Do not claim every symbol matches.
- Future candidate specification: retain exactly seven cups and contents, border and foreground viewer. Cover the central face with drapery and restore the small skull-like motif on the wreath cup; preserve legibility without exaggerating horror. Inspect saved candidate and derivatives before replacing anything.

## Eight

- Reference: https://scrape.sacred-texts.com/tarot/pkt/img/cu08.jpg
- Reference SHA-256: `4d6523c71daf29600843af7aa2c0c8d3c7a29c42902368fb803c9f40e28e8a40`
- `public/art/cups-8.png`: `0666f0b01e08c948980c0bc69963d87ee1d1aa101493dfcb935dc21b1145ebb1`
- Count checked: eight cups, lower five and upper three, with upper-row gap; departing red-clothed figure carrying staff, mountains and water present.
- Difference: ordinary full moon replaces the reference overlapping circular/crescent lunar motif with face. Do not treat count accuracy as full symbol accuracy.
- Future candidate specification: preserve cup count, gap, departing figure and landscape, change only moon to a clearly readable overlapping lunar motif inspired by the reference, consistent with original stained-glass treatment. No new artwork exists from this pass.

## Integration and remaining work

`79bf804` (major-card audit) is an ancestor of `fdb15b0` (two minor-card audit). The new follow-up branch starts at `fdb15b0`, preserving both without cherry-pick or overwrite. Image persistence remains blocked as documented in the earlier candidate README; no rejected import workaround was attempted.

The legacy `tests/browser.mjs` is not evidence of current browser acceptance: it hardcodes Linux Chromium and obsolete selectors (`.face strong`, old restart/close labels). It was not run or marked passed. Current-interface browser acceptance and screenshot review remain separate gates. No real API was used.

## Offline acceptance performed in this follow-up

Node 24.22.1: 36 unit tests and 22 server tests passed (58 total); TypeScript and normal/web-lite production builds passed. Both artifacts verified complete upstream notices for six rendered runtime packages. Web-lite validation verified 78 original hashes, 78 JPEG fallbacks, 234 unchanged WebP derivatives and vector back. No API request or browser session was part of these checks.

An initial test failed because it required the old “not a new visual or rights review” wording for Cups Eight. Its expectation now checks the actual new scoped count/lunar difference wording and preserves its `candidate` status and “not full-detail approval” limitation. Artwork hashes and other cards’ original protection checks remain unchanged. This is not a visual approval inferred from tests.
