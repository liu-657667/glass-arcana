# Glass Arcana offline reflection bridge

This add-on is an **offline mock**, not a working AI integration. No SDK, external requests, API keys, billing, accounts or subscriptions. Core tarot remains usable without this service. Node 24.22.1; no dependencies.

## Run / test

```sh
node server/reflection.mjs
node --test server/reflection.test.mjs
```

Defaults to `127.0.0.1:8787`. `GLASS_REFLECTION_PORT` can change the local port (update client URL too). Frontend origins are explicitly `http://127.0.0.1:5173` and `http://localhost:5173`; a different dev port requires an explicit local allowlist change. No public bind/deployment mode.

## Integration

Copy `server/` into the project and `client/localMockProvider.ts` into `src/`. Add scripts `reflection:mock: node server/reflection.mjs` and `test:reflection: node --test server/reflection.test.mjs`. Keep `getAIProvider()` null by default; expose this provider only through an explicit **Offline demo / 离线演示，非 AI** switch. Disabling the switch must cancel in-flight requests. Never label this as a successful real AI test.

Compatible with existing AIContext schemaVersion 1, purpose `cultural-reflection`, locale zh/en, question, cards and AIMessage `text`. Supports current 1-card and 3-card spreads only. Existing Chinese stored positions are accepted and normalized to stable `focus` or `situation/attention/action` IDs without mutating input. English aliases are exact and documented in source; prefer stable IDs on future clients. Card IDs are the current `major-0..21` and four suits `1..14`. It rejects duplicate cards, invented cards, invalid order/positions, system role, invalid role alternation and excess text. It does not re-draw, reinterpret reversals as upright, or import unrelated history.

Before changing a reading/language, cancel the active request and clear its conversation. Send only that reading's messages. Context snapshots must stay frozen. Render returned text with Vue interpolation/textContent, never v-html, Markdown raw HTML or executable links. Show errors generically and allow cancellation/retry without adding duplicate chat messages.

## Privacy/security and unfinished work

Strict loopback Host + Origin checks, JSON/custom-header requirement, no credentials/CORS wildcard, request limit 32 KiB, 10-second client timeout, generic errors and no body/header/history logs. Local host processes and malicious browser extensions are outside this threat model. A webpage on the trusted dev origin is trusted. Do not expose port publicly. No output moderation claim: mock emits fixed plain text, not user content.

**Real provider intentionally absent** until the user creates/authorizes a new key at acceptance. A future implementation needs server-only ignored secrets, explicit provider/model and cost limit, timeout/abort, output-length limits and safe errors. Never use VITE_* for a key, browser storage, query strings, logs or committed config. Never automatically enable billing/recharge. User questions/current cards/chat will leave the device only after clear opt-in naming the chosen provider; no background upload. Stop at that boundary now.

Future prompt must ground all card/spread facts in server-validated context; treat user messages as untrusted content, not system instructions. Distinguish historical card notes from original modern reflection and unfinished review. Do not claim divination establishes facts, death, illness or other people's thoughts. Mock provides no actual semantic interpretation, streaming, model selection or hosted deployment. Those are not tested or implemented.

Reference: https://github.com/Renhuai123/ziwei-doushu supplies useful product inspiration, not permission to copy its closed commercial AI service. This patch does not copy its prompts or claim feature parity.

## Validation record / pre-push

Node v24.22.1: 6 tests passed, including actual local HTTP, forbidden Origin, raw hostile Host (DNS rebinding), JSON/header checks, limits, bilingual mock labeling and immutable normalized context. Browser integration is NOT yet tested; real provider tests NOT run. No Mac files changed.

Before cloud GitHub push: rerun app build/tests and this suite; verify mobile/browser cancel/change-reading/history persistence; archive source plus lockfile, README and .nvmrc only; exclude secrets/history/logs/dependencies/build. Inspect archive listing and staged diff; confirm destination repository/visibility and licenses. Transfer checked archive to cloud; do not push from Mac. Keep production provider disabled until live acceptance.

## Follow-up verification (2026-11-12)

Recovered the original ZIP through Library after the cloud workspace reset. Added tests only; implementation and client are unchanged. **9/9 tests now pass**, including three-card normalization, alternating follow-up messages, rejection of non-loopback configured origins, preflight, missing Origin, and repeated independent requests. Existing app integrations should copy only the updated `server/reflection.test.mjs` and this documentation; do not overwrite their modified client/server integration.

## Provider-neutral integration acceptance boundary

The app contract stays `reply(context, messages, AbortSignal): Promise<string>`. A future non-mock adapter must be a separately enabled implementation, never silently replace the mock. Its error must not be converted into a fake successful interpretation. UI should distinguish unconfigured, offline demo, connecting, successful real response, cancelled, timeout, provider rejection and rate-limit states. New reading/language must invalidate an older response even if cancellation arrives late. Keep any credentials entirely outside this contract.

Minimum remaining sequence after user returns: confirm provider and newly created credential through the secure workflow; set a small explicit real-test budget with no recharge; implement and test that provider after its credential gate; review exactly what question/current reading/messages leave the device; perform a synthetic-question live request; verify cancellation, timeout, cost and absence of secrets in frontend build/logs; then obtain acceptance. None of those real-provider steps is complete. This package intentionally does not supply executable OpenAI API code, manual secret setup or a promise that a key alone makes AI ready.
