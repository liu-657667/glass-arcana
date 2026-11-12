# Optional OpenAI acceptance boundary / 可选 OpenAI 验收边界

Implementation exists but is **disabled and not live-tested**. `server/openaiProvider.mjs` implements the Responses API, fixed official HTTPS endpoint, no redirects/tools/SDK, `store:false`, explicit model, output cap, process request-count cap, one concurrent request, cancellation and timeout, bounded response parsing and sanitized errors. `store:false` is not a promise of zero provider retention. Request-count caps are not currency budgets and reset if the process restarts. Aborted requests may still incur provider cost. No automatic retry, recharge or fallback.

`createReflectionServer({provider})` accepts an explicitly supplied server provider, retaining loopback Host/Origin/custom-header validation. `/api/openai-reflection` rejects requests without explicit per-request current-reading consent. Default server remains mock-only. No executable real-provider launcher, key loader, or enabled browser toggle was added before budget acceptance. `src/localOpenAIProvider.ts` is an opt-in contract adapter; it is not selected by the running UI. It carries no credentials.

Only validated current question, fixed cards/positions/orientations, selected bilingual first-pass study notes, and this conversation are eligible for transmission. No complete journal, local files, artwork or credentials enter the frontend payload. Real output is plain text, not trusted HTML. Historical summaries and modern reflections remain distinct.

凭据只做存在性检查，未复制或加载。真实验收还需：确认模型与预算/最多调用数、确认发送模拟问题和当前牌阵至 OpenAI、受控启动服务器密钥加载与浏览器明确同意状态，然后测试一次真实回复、费用、取消/超时。当前页面仍只提供明确标注的离线模拟，不能把它当真实 AI。

Offline command: `npm run test:openai:offline`. Seven tests use fake credentials and injected in-memory/loopback HTTP, never the public API. They cover fixed Responses request shape, validated cards, consent, disabled defaults, rate/auth errors, incomplete/long output, request cap, cancellation and timeout.

API source checked 2026-11-12: https://developers.openai.com/api/reference/resources/responses/methods/create
