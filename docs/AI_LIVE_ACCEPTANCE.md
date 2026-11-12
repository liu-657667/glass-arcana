# Controlled OpenAI acceptance — 2026-11-12

**Passed backend live chain and controlled browser real-chat acceptance.** The normal page remains explicitly offline mock. The temporary real-provider server was closed after the run. No key copied, deleted, printed or bundled. No user history transmitted.

## Authorized scope and enforcement
- gpt-6-luna, Standard (`service_tier: default`), reasoning `none`.
- Maximum 10 sends, one concurrent, no retries, tools or model fallback; USD 0.10 ceiling.
- Whole serialized request (including instructions, current audited card notes, all conversation turns and role fields) capped at 6000 UTF-8 bytes plus 2000 framing-token reserve, giving <=8000 conservative input-token bound. Text only; no images/files/tools. Output cap2000.
- Each attempted send first persisted a full USD0.0018 reservation. Failed/cancelled sends retain reservation. Existing acceptance ledger prevents accidental rerun and counter reset.
- Official model source: https://developers.openai.com/api/docs/models/gpt-6-luna (checked 2026-11-12): inputUSD0.10/M, outputUSD0.50/M. No cached-input discount assumed. Estimate is not an invoice.

## Observed results
Three actual calls, all HTTP200 and completed with returned model gpt-6-luna and tier default:

| Synthetic check | Input tokens | Output tokens | Whole JSON bytes | Conservative input bound |
|---|---:|---:|---:|---:|
| Chinese one-card reflection |273|190|1447|3447|
| Chinese follow-up, same fixed card |492|69|2302|4302|
| English reflection |260|125|1482|3482|

The secure test draw produced upright Five of Wands at the focus position. All replies retained that card/position and offered non-predictive practical reflection about a gentle walk. Chinese follow-up stayed on the same card; English response clearly distinguished historical association from modern reflection. The first Chinese response unnecessarily mentions historical reversed meaning while acknowledging the actual card is upright: minor wording-quality follow-up, not a card-state mutation.

Total known usage:1025 input /384 output. List-price estimateUSD0.0002945. Full reservationsUSD0.0054. No extra live requests for error injection/cancellation: these are covered offline with fake transport, including input rejection, fixed model/tier, consent, auth/rate errors, timeout/abort, budget exhaustion and preserved reservations on failure.

## Recovery and remaining work
Normal Vite preview and offline mock remain available. No real backend remains listening from acceptance. Existing user journal was never used. The private local ledger contains only synthetic outputs, usage and reservation metadata, no credentials; it is excluded by `.gitignore`.

The frontend now includes a separately consented real-acceptance section, tested in the isolated localhost origin. It is off by default; after acceptance the real backend was stopped and mock-only server restored, so that section cannot incur further API cost. Real usage requires a new bounded activation, not silently restarting the acceptance script. Key revocation remains the user's choice.

## Browser continuation (same approved budget)
Two further live calls from actual Chrome UI: three-card English explanation (440 input/158 output), then same-card follow-up (624 input/45 output). Both HTTP200 completed, model gpt-6-luna/default. Fixed synthetic history only: Ace of Wands reversed, Nine of Pentacles upright, Queen of Wands upright. All positions/orientations retained. Browser consent off by default, separate mock/live labels, language change clears chat and resets consent. After live shutdown, a credential-free fake service verified Cancel returns to editable state without late answer, and failure shows explicit no-fallback/no-retry error. Mobile390×844 real-chat form/error screenshot inspected. Consent unchecked and viewport reset afterward. Fake service stopped; original mock-only server restored.

**Final total:5 live requests,2089 input tokens,587 output tokens; estimatedUSD0.0005024; full reservedUSD0.009.** Maximum full-payload conservative bound5246 tokens, below8000; output maximum2000 enforced. No automatic recharge, no retries, no private history sent. Final automated coverage:15 app +9 reflection +10 provider/budget tests, build pass. API key unchanged and remains outside project; normal preview remains available.
