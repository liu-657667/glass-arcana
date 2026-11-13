# Offline browser regression maintenance · 2026-11-13

Baseline: `3dc040e80b704308341238cf4c744275286263bb` (candidate branch, not a release).

The former `tests/browser.mjs` assumed Linux `/usr/bin/chromium`, an already-running port 5173 server, obsolete `.face strong` titles and removed close/new-reading labels. It did not reveal cards before reading their names. This could fail on macOS or test the wrong local server.

The replacement starts its own Vite server on an ephemeral loopback port and uses a fresh nonpersistent Playwright browser context. Requests outside that server origin are blocked, including model backends. It uses installed Playwright Chromium by default; an explicit channel/executable is supported. Cleanup runs after success or failure. Only synthetic data and screenshots are saved under ignored `test-results/browser/`.

## Verified on this revision

- Node 24.22.1, installed Google Chrome via `PLAYWRIGHT_CHANNEL=chrome`.
- 37 frontend/unit tests and 22 server/provider offline tests passed (59 total).
- Type checking, production build and full notices for 6 rendered runtime packages passed.
- `npm run test:browser` passed twice: concealed three-card draw, reveal and unique identities; saved identities/orientations restored after reload; Chinese/English and uppercase/no-result searches; Escape closes the modal and returns focus; single-card draw with reversals off; default-disabled demo/live panels; 390px and 320px reading layout without horizontal overflow; synthetic JSON export; cancellation and confirmation of clearing synthetic history; persisted empty history after reload; no page errors or requests to other origins.
- `git diff --check` passed.

The default bundled Chromium launch was not available locally (installed package expected browser build 1254). No browser was installed; the explicitly selected installed Chrome channel passed instead. The runner does not install browsers automatically.

## Limits

This is automated functional coverage, not an image-pixel review or all-viewports visual sign-off. No real API calls, Safari, Firefox, actual mobile device, screen reader or public performance tests were run. Artwork and rights approval remain pending as recorded elsewhere. No main merge, formal release, deployment or personal browsing-state change was performed.
