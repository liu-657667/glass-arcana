# 验证报告

## Node 版本约定
- `.nvmrc`：24.22.1，与本次实测 `node --version` 一致。
- package.json / package-lock.json 的 engines.node：`>=24.22.1 <25`。
- Vite 与 @vitejs/plugin-vue 的要求为 `^20.19.0 || >=22.12.0`，所选版本满足。
- 本次版本配置修改后再次运行全部单元测试与生产构建。

## 通过
- 5 项 Node 单元测试：78 身份唯一性、22/56 分组与 RWS 序号；可注入随机源的确定性结果与固定牌位；500 轮抽牌无重复；非法随机输入拒绝；历史恢复、损坏与长度上限。
- `vue-tsc --noEmit` 类型检查。
- Vite 生产构建。

## 未完成 / 明确限制
- 浏览器功能与视觉验收未完成。Playwright Chromium 在本云端因 socket 权限终止；已尝试审批执行仍受相同限制。另尝试平台提供的云端浏览器，localhost 预览被浏览器安全策略拒绝，未绕过。没有操作用户 Mac。
- `tests/browser.mjs` 留有浏览器回归脚本，但不把它记为通过；可在具备 Chromium 的受支持环境运行，默认 /usr/bin/chromium，需按系统调整路径。
- 所有 78 张最终插图未装入，当前是明确标记的几何占位。
- 数据身份齐全，但各卡的来源、符号细节及历史正逆位解释未完成逐条原典核校。当前中文是原创反思摘要，不是完整权威知识库。
- 尚未对各种浏览器、辅助技术、存储额度耗尽、跨标签操作作完整验收。

没有 API 调用、收费、发布、远程仓库创建或用户电脑改动。

## 后续 Mac 本地验收与双语更新（2026-11-12）

- 在本地 Node 24.22.1 运行。Node 全局默认保持 v24.22.2，没有更改。
- 8 项单元测试全部通过，新增 78 张英文数据 ID/字段完整性、UI 翻译覆盖、AI 未配置与不可变上下文测试；类型检查与生产构建通过。
- 本地 Chrome 实际验收：桌面与 390×844 手机界面；英文首页、牌库检索、女祭司详情、来源页；历史打开与中英切换后牌名/方向/牌位保持对应；AI 面板明确未配置，发送与输入禁用。
- 之前单张/三张、正逆位、刷新恢复已在同一 Mac Chrome 通过。新双语验收复用了已有验收记录，没有新增、删除或修改抽牌历史；用户问题保持原文，不自动翻译。
- 现有 engine.ts 与 cards.ts SHA-256 在本次改动前后保持一致。当前源码修改前备份在 .backups/pre-i18n/。
- 没有外部 API、密钥、付费调用或部署。新功能只完成可选 AI 接口与未配置 UI，不是真实 AI 对话。原典逐条核校与正式牌图仍未完成。
- 本地预览 http://127.0.0.1:5173/ 最终 HTTP 200。仅回环监听。

## Mac integration verification · 2026-11-12
- Node 24.22.1: app 10 tests, local reflection server 6 tests, TypeScript/Vite build passed.
- Audit batch hash verified; 4 selective primary-text checks / 74 pending; all early plates and artwork pending.
- Gothic stained-glass redesign inspected in local Chrome desktop and 390×844 mobile, Chinese/English.
- Existing labelled sample history opened without redrawing; English and Chinese loopback mock replies displayed, explicitly non-AI. Language switch clears conversation; disabling clears demo. Three existing records unchanged after verification.
- Temporary viewport restored. No real provider/key/network API test; no claim of live AI, formal artwork or completed 78-card knowledge audit. Cancellation is implemented; very fast mock completion prevented deterministic visual in-flight cancellation verification.


## Consolidated basic-text integration
78 distinct named-card sections merged by stable ID. Source ZIP SHA256 c7a00ecf1e802cacc90f74c05aa7b719f3f9d8f2dd49073bf5f52c4fbbec2512 verified. Swords preserve explicit checked_section2 scope. Additional meanings and all image/final-art review remain pending. Node24.22.1: 10 application tests + 9 server tests + build passed; no key/API or user-history writes.


## Restrained reading-table redesign
Removed competing gradients, glows, decorative arches, repeated coloured tiles and marketing eyebrows. Candidate artwork is now the visual focus; homepage presents question/spread/action, gallery and dated history retain distinct forms. Local Chrome: desktop1440 and mobile390 inspected, bilingual navigation/search/history rendering and Escape modal close verified; candidate images verified loaded (lazy-load placeholders are transient). No history draws/deletes during this pass. Temporary viewport restored. 11 app tests and build passed; final-art approval and real model remain out of scope.

## Screenshot-driven colour and edge correction
Inspected the user's supplied screenshot and the original Fool PNG: black corner wedges were baked into the rectangular source image outside the rounded gold frame, not a card-layout background leak. Applied a display-only rounded inset mask to candidate-image boxes, retaining original bytes and full symbol composition; inspected desktop1440, mobile390 modal and small homepage card. Gold frame, dog, rose, sun and cliff remain visible; outside corner wedges no longer form a black rectangle. Sapphire base, emerald selected-spread surface and brighter warm gold replace the grey cast without restoring gradients/glow stacks. 11 tests/build passed. No user history or API modifications.

## 2026-11-12 isolated-origin no-key flow audit

Real Chrome on `http://localhost:5173` was used as an independent origin from the user's `http://127.0.0.1:5173` journal. The localhost journal was visibly empty before testing. One explicitly labelled synthetic reading (`【独立验收】如何安排一次散步？`) was created there; no existing user history was edited, cleared, or overwritten.

Verified through visible UI: three-card secure draw, unique cards and fixed positions, original reflection text, local journal reopen and refresh persistence, English switch retaining the same cards and clearing transient mock chat, mock off by default, successful explicitly labelled loopback mock response, failure message under test-tab-only offline emulation, pending-state Cancel returning to editable state, and 390 × 844 journal/reading screenshots. Network emulation and viewport override were restored. No real provider or credentials were used. Existing dev/mock servers remain available.

Automated checks: 11 application tests, 9 server tests and TypeScript/Vite production build pass on Node 24.22.1.

Remaining polish: optional AI eyebrow is English-only; mock response exposes stable card IDs rather than human card names; some upright reflection paragraphs repeat reversal caveats; card artwork and symbols still use placeholders outside the four candidates. No claim of real AI acceptance, full illustration review, or final product readiness. Icon redesign is being handled separately. Export download and destructive journal clearing were not exercised in this pass.

## Original icon integration and copy follow-up
Imported Library icon bundle SHA256 95083e5a29d9e809f2837a8e66b02a89b8bc9241159c75f063720a93828d5eac. Reviewed 24 static original SVG shapes; provenance and pending unified license recorded in docs/ICONS.md. Language, navigation, shuffle, new reading, export, close and chat/send controls retain visible bilingual text and decorative aria-hidden SVGs. Real Chrome screenshots inspected at 1440×1000 and 390×844; no navigation overflow. Chinese AI state eyebrow, human-readable mock card names and upright reflection without reversed caveat verified on existing localhost synthetic reading. No user journal changed, no real API. 15 application and 9 server tests pass; production build passes. Mock service restarted to load card names.

## Major candidate batch integration
Archive SHA256 a92d19943a4e6a0a159cdc855d8bf8b32cfbd2732ed490897c5bd44c14f8c21a verified; every included file hash verified against supplied audit. Installed 15 additional candidates (9 core-composition-only checked, 6 adapted) alongside original four: 19 visible candidates, 59 placeholders. Empress, Wheel, Devil and Tower excluded from public assets, with bilingual revision labels. High Priestess existing typography warning remains. No finished-art approval claimed. Original PNGs unchanged; Library audit source preserved in docs/audits/major-art-batch.md.
Real Chrome: 18 Major thumbnails decode at naturalWidth1024, desktop1440×1000 gallery visually inspected after load; 390×844 English Lovers detail displays full image and explicit adapted/not-final note without overflow. Viewport restored. Initial large PNG loading is visible before decode; responsive optimized derivatives are a remaining performance improvement, not a failed or missing asset. 15 application tests and build pass. No user history or provider/key changes.

## Minor candidate integration (2026-11-12)
Four authorized Library ZIP hashes and all 55 per-image manifest hashes matched. Imported 13 Cups (existing Cups Eight retained), 14 Wands, 14 Swords and 14 Pentacles. Total 74 candidates; Empress, Wheel, Devil and Tower remain revision placeholders. All new images conservatively labelled adapted candidates, not final approval; Swords Knight far hind-leg crop, Pentacles Ten two-column layout, Wands Eight gold caps explicitly noted. No user history or key changed; no true API calls.
Desktop Chrome Cups gallery and 390×844 Pentacles Ten modal visually inspected, including readable limitation text and full card; English navigation/filter/candidate labels verified. Original PNGs retained without resizing/cropping: public/art totals 272 MiB, so cold loading is noticeably progressive and optimized delivery remains a release task (not a production performance pass). Tests and TypeScript/Vite build pass.

## Responsive derivative acceptance
74 original SHA256 values preserved; 222 WebP derivatives generated locally with existing cwebp. Desktop real Chrome Cups gallery loaded 320px sources (currentSrc checked), visually compared to previous PNG gallery; cup counts/composition remain distinguishable. 390×844 Ace of Cups dialog inspected: dove, cup, streams and lilies visible, candidate warning unchanged, no horizontal overflow. Original PNG fallback is implemented; unsupported format/error branch not fault-injected in this pass. No API requests or history changes. This supersedes the earlier no-derivatives limitation, but comprehensive slow-network and high-DPR measurements remain future release QA.

## Four revised Major candidates integrated
Authorized four-card Library ZIP SHA256 7965fd119be4879c9cc330e4f89cbf0142afd7f428308b1ab4e2ca64264f77d2 and each image hash verified. Empress/Devil/Tower are revised candidates; Wheel is explicitly a base pending letters/alchemical-symbol typography, not complete. Earlier rejected files were not reused as approved artwork. New original PNGs retained; 12 derivatives generated before UI map updated. All 78 candidate identities present (including unfinished Wheel); no placeholder currently required. Desktop Major gallery screenshot and 390×844 Wheel dialog inspected, pending typography visible, 17 tests and build passed. No user history/key/API changes.

## User-reported single-card regression / reveal interaction
Both supplied screenshots were materialized and inspected. Root cause of narrow result: `.draw-grid.single` inherited three columns inside a 340px container. Explicit one-column rule fixes it. Real Chrome on isolated localhost:5174 (not user history origin) measured 340px article width and inspected desktop/390px screenshots. Homepage now shows a provisional geometric card back, per latest user request, not fixed Fool. One random draw is persisted at begin; cards initially show backs without names/images/orientations/interpretations in DOM. Clicking or Enter reveals one fixed card with 400ms perspective motion; reduced-motion disables it. Focus transfers to revealed button. History re-open restores the same Nine of Wands upright, no new draw; three-card test revealed only first while other two stayed concealed. AI remains inaccessible until cards revealed, and true service still off. No real user history read/changed; isolated QA origin contains two synthetic records.
Remaining: final illustrated card back not designed; full screen-reader audit and OS-level reduced-motion simulation not performed (CSS guard tested). Wheel typography, Priestess symbols, final-art rights/visual review and broad network/device QA remain incomplete. Prior real API acceptance is complete but services are intentionally disabled; no new API request in this change.

## Symmetric SVG back integration
Card-back Library SHA256 ac00807bf84e8401b3f58ee9b9c5c5be686987340245bf05bc0b3c270e325b92 verified; no scripts or external references. Exact upper-half artwork plus 180-degree rotation gives structural orientation symmetry. Homepage and all unrevealed cards now use this same 7KB SVG candidate, without changing any draw logic. Real Chrome screenshots: desktop homepage/three backs, mobile390px single back. Enter and Space reveal verified with focus transferred to resulting face. Tab-scoped reduced-motion emulation actually tested: computed animationName=none; restored afterward. Normal animation/click tested; history restored same Two of Pentacles upright. Isolated localhost:5174 only; user5173 history and keys unchanged, true AI not enabled. 20 app tests and production build passed. Full external assistive-technology testing and final art/license approval still pending.

## Priestess P1 selective integration
Package SHA fdbd750969a6ff03cd680132671503ae468b353e802f75a99f2b11a466ddffd1 and Priestess PNG SHA8d4dc49ee68d21fcf7b537cd28e134da37a39401c27c52261695b7be83364363 matched. Original and three derivatives backed up privately; updated derivatives generated. Real browser gallery and detail screenshot verified visible B/J/TORA and partial scroll coverage, candidate status retained. Wheel in same ZIP deliberately NOT imported, pending typography status unchanged. Twenty tests and production build pass. No history, API or key access.

## Equal front/back and bottom finish (user screenshot)
User screenshot inspected: front previously combined a smaller285px image and labels within an oversized pale button; back image330px. Replaced with one stable220×330px face button (same DOM node), full-size original/derivative inside, captions and interpretation separately below. Finish action occupies its own row at bottom after reading/chat sections, not header. Real isolated5174 Chrome: three backs each220×330 and three reversed fronts each220×330, desktop screenshot inspected. Mobile390px single upright front/back both220×330, screenshot inspected. Space/Enter retain focus, reduced-motion emulation computed none and restored. User history and true API untouched. Images stay in original aspect ratio, no new cropping.
