# 琉璃秘典 · Glass Arcana

个人免费学习项目，完整 Rider–Waite–Smith 78 张身份结构，中英双语，哥特彩绘玻璃候选图。无会员、广告或遥测。**v0.1.0 正式源码发布：原创改编塔罗学习与反思工具，不是最终成品牌组或全面核校的知识库。** 发行状态以仓库标签 / Release 为准；不包含公网 AI 服务部署。当前验收和重新实现范围见 `docs/REIMPLEMENTATION_STATUS.md`。

## 运行 / Run

使用已实测 Node **24.22.1**（`.nvmrc`）；兼容范围 `>=24.22.1 <25`。不改变其他项目或全局默认。

```sh
nvm install
nvm use
npm ci
npm run dev
# 在另一终端，按需启动仅本机模拟服务：
npm run reflection:mock
# 完整离线测试（前端、服务、provider、费用边界）及构建：
npm run check
```

Open the localhost URL printed by Vite. The optional mock runs at `127.0.0.1:8787`, never reads a key and is not AI. `npm test` includes all unit and server tests; `npm run build` typechecks and builds `dist/`. No website has been deployed. Static hosting alone does not provide a model backend.

## 离线浏览器回归 / Offline browser regression

`npm run test:browser` 使用 Playwright Chromium。若使用本机已安装 Chrome，可运行 `PLAYWRIGHT_CHANNEL=chrome npm run test:browser`；自选浏览器可设置 `PLAYWRIGHT_EXECUTABLE_PATH`。默认浏览器二进制须提前安装，脚本不会自动下载或安装浏览器。

测试自行启动随机端口的 `127.0.0.1` Vite 服务和全新浏览器上下文，不读取个人浏览器资料；合成记录与截图仅写入被 Git 忽略的 `test-results/browser/`。非测试页面来源请求全部拒绝（包括本机模型服务），不调用真实 API。测试结束或断言失败后关闭测试浏览器和服务。覆盖翻牌、历史恢复、中英搜索、弹窗退出、禁用逆位、窄屏溢出、导出及清空取消/确认；不替代人工牌图终审或 Safari/Firefox/真实手机验收。

The runner owns an ephemeral loopback server and a clean browser context. It blocks other network origins, never calls model services, and saves only synthetic artifacts under ignored `test-results/browser/`. It does not download browsers. Use an installed Playwright Chromium, `PLAYWRIGHT_CHANNEL=chrome`, or an explicit executable path. Automated assertions do not constitute final artwork or cross-browser approval.

## 功能与隐私 / Features & privacy

- 78 张牌库、双语搜索、来源；单牌/三牌抽取，Web Crypto 无重复抽签，可禁用逆位。
- 首页牌背，抽签后逐张点击或键盘翻开；一次确定位置和正逆位，不因翻面、语言或打开历史重新抽签。支持减弱动态。
- 历史最多 50 条，JSON 导出、确认后清除。问题与历史在当前浏览器 localStorage，不加密，无同步；不要输入敏感内容。
- 牌义区分原典摘要与原创现代反思，只供文化学习，不预测事件或代替专业意见。

Bilingual interface, 78 identities and study notes, single/three-card fixed spreads, per-card reveal, optional reversals and browser-local history. Your own question is not translated. History is unencrypted and readable by others using the same browser. Switching language preserves cards but resets temporary chat. No personal history is automatically uploaded.

## 当前知识与图像状态 / Current content status

`src/auditBasic78.json`: **78 基础原典条目首轮文本核对，0 张全面审校完成**。额外释义、组合规则及早期图版全面审查仍待完成；不是完整翻译或历史信念的事实证明。4/23 张仅为早期里程碑，不是当前数量。原典为 A. E. Waite，链接转录展示 1922 年版，原作 1910；早期图像署名 Pamela Colman Smith。参见 `SOURCES.md`、`docs/audits/basic-78.md`。

`public/art/`: **78 张生成候选正面及 1 张原创 SVG 牌背候选**，不是 74 张占位。女祭司 B/J/TORA 与卷轴遮挡专项复核通过，仍非最终成品批准；命运轮文字与炼金符号专项复核通过，作为原创改编保留顶部水星上方延伸辐条缺失等限制。其余改编限制见 `src/artReview.json`（例如宝剑骑士马腿裁切、星币十排列）。最终逐张图像与权利审查未完成。

78 basic historical sections have first-pass text review only. All faces remain generated candidates, not a certified final deck. Wheel symbol review passed as an adaptation, with the upper spoke extension above Mercury missing; High Priestess passed targeted symbol review only. Historical summaries and modern reflections are separate. Earlier audit documents are milestone evidence, not the current release status.

### 图片加载 / Image delivery

原 PNG 保留；`scripts/derive-art.py` 使用免费 libwebp `cwebp` 生成 320/640/1024px WebP；此次六张修订图在云端使用 ImageMagick/libwebp method 6 按同尺寸和质量级别重建，编码器记录在 manifest。图库懒加载，衍生图失败回退 PNG；不裁切符号。78 原图共 296,988,947 bytes，三个尺寸分别共 6,934,812 / 26,725,180 / 67,848,150 bytes。当前 `dist` 约 **380.6 MiB（逻辑字节）**，公开部署前须评估存储和传输，不能据本机测试宣称公网性能通过。衍生图沿用原图候选/许可状态。

## 可选对话 / Optional conversation

默认运行仅为明确标注的离线 mock，面板默认关闭。服务端 OpenAI Responses 适配器已经实现，**当前真实服务关闭**，前端无密钥。真实面板需单独启用受控服务及逐轮明确同意；没有自动重试、模型回退或自动充值。

2026-11-12 曾完成合成数据真实验收：5 次请求，中英与浏览器追问；结束后关闭真实服务。该历史验收不是持续启用授权。详见 `docs/AI_LIVE_ACCEPTANCE.md`。后续需重新确认模型、数据范围、费用和安全凭据配置；不把 key 放进前端、`VITE_*`、localStorage 或 Git。

Live Responses support exists but is disabled by default. Five authorized synthetic requests were previously tested, then the live service stopped. The mock is not a real model. Future live use requires a separately configured, bounded server and explicit consent; credentials must stay server-side. No key setup or live request is needed for `npm run check`.

消息统一最多 2000 个 UTF-16 单元；超过此长度的模型输出明确标注截短，页面显示与追问携带内容相同。不会悄悄丢弃牌阵或用户消息来凑预算。完整请求另受保守 UTF-8 体积上限约束；即使单条合法，多轮总量过大仍拒绝发送。

## 项目贡献 / Project contributions

本项目由 [liu-657667](https://github.com/liu-657667) 发起并持续指导，负责产品方向、需求取舍与发布决定。OpenAI 的 AI 工具参与了方案讨论、设计、代码开发、测试、文档及候选牌图生成；后续维护也有 Codex 参与。具体完成范围以提交记录和审校报告为准，AI 生成结果仍需核验，不意味着 OpenAI 官方背书，也不把所有工作归为单一工具完成。

Initiated and directed by [liu-657667](https://github.com/liu-657667), who sets product direction, priorities and release decisions. OpenAI AI tools assisted with planning, design, implementation, testing, documentation and candidate artwork generation; Codex also participates in subsequent maintenance. Commit history and review reports define the actual scope. AI outputs require verification; this is not an OpenAI-endorsed project or a claim that one tool did all the work.

贡献说明不是版权归属保证。许可仅涵盖实际持有的可授权权利；AI 牌图不保证独占或无侵权风险，详见下方许可与牌图说明。 / These credits do not establish copyright ownership. Licenses cover only rights actually held and licensable; generated artwork is not guaranteed exclusive or non-infringing. See the licensing and artwork notices below.

## 许可与致谢 / Licensing & acknowledgments

代码现有 MIT 文件见 `LICENSE`。**原创文案和图标采用 CC BY 4.0，牌图权利单独说明**；完整许可随附 `licenses/CC-BY-4.0.txt`；`CONTENT-LICENSE.md` 保留既有 CC0 权利边界，`ARTWORK-NOTICE.md` 记录 78 张 AI 正面牌图及衍生图 CC BY 4.0（仅实际可授权权利），原创 SVG 牌背已另获确认，同样采用 CC BY 4.0，不将候选图自动归入文案许可。所有者重点是本项目合规使用，不要求禁止第三方商用；本项目免费无广告的产品定位不是禁止商业复用的许可限制。依赖/第三方资料各有许可，不宣称所有历史版本全球公版。

感谢 [Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu) 提供完整体系、知识溯源与可选对话体验的灵感；当前未复制其代码、图像或文案，不表示合作或继承其许可证。

Inspired by ziwei-doushu's complete-system approach, provenance and optional conversation. No code, artwork or prose from it is included; no endorsement or license inheritance is implied. Code is MIT; original prose and icons are CC BY 4.0, with valid prior CC0 rights preserved. The 78 AI faces and derivatives are CC BY 4.0 only to the extent actually held rights can be licensed; no exclusivity or guaranteed copyright is claimed. The owner separately approved CC BY 4.0 for the original vector card back. See ARTWORK-NOTICE.md.

## 发布边界 / Release gate

阅读 `docs/RELEASE_FUNCTIONAL_QA.md` 与 `docs/RELEASE_CHECKLIST.md`。当前为 v0.1.0 正式源码版，未部署网站或公网多用户 AI 服务。Chrome 已完成记录中的功能检查；Safari 验收范围以对应日期报告为准，不以早期冒烟记录代表所有后续检查。Firefox 与真实 iPhone 测试按所有者要求暂缓，不能宣称已通过。完整读屏、公网性能、全部牌面历史细节和权利审查均未完成。命运轮符号专项复核已通过，仍保留原创改编差异。初始源码采用白名单导出并检查常见凭据模式，不能据此保证不存在任何潜在秘密；后续提交仍需独立检查。

### 第三方运行时代码 / Bundled third-party code
构建根据实际 Rollup 非空输出模块生成 `THIRD_PARTY_NOTICES.md`，并将上游完整 LICENSE/NOTICE 原样放入 `dist/licenses/`，构建结束自动逐字核验，不改变第三方条款。当前渲染代码包含 Vue 3.5.45 的 runtime-dom/runtime-core/reactivity/shared，以及 Vite 7.3.8 modulepreload 与 @vitejs/plugin-vue 6.0.10 export-helper 虚拟模块；未知非空虚拟模块会阻止构建，须先核查来源；Vue 顶层入口自身无保留代码，但其运行时包的完整 MIT 署名均随附。发布 dist 时不得遗漏通知目录。

`docs/DEPENDENCY_INVENTORY.json` separately records all lockfile build/test/type/transitive dependency license declarations, including non-MIT declarations. It is metadata, not a replacement for their full license texts. Source delivery excludes node_modules; if tools, binaries or dependencies are redistributed later, include their own complete licenses and NOTICE requirements. Generated production notices cover only rendered browser code, not artwork or external documentation.

### 独立轻量交付试构建 / Independent lightweight build
`npm run build:web` requires local ImageMagick `magick` and Python3. It keeps all original PNGs, stages JPEG fallbacks separately and produces `dist-web/` with unchanged responsive WebP variants. Original hashes and every output path are verified. Normal `npm run build` and the dev preview still use original PNG fallback. This cloud build measures 196,671,314 logical bytes for dist-web and 399,099,804 for normal dist. Encoder versions can affect JPEG sizes. The earlier 78-pair overview applies to its recorded build; three revised images have since been integrated and regenerated. Current hashes and paths pass verification. Independent comparison of the three revised PNG/WebP/JPEG sets passed; the Two of Wands emblem is small at 320px and needs a larger view. The additional Lovers/Star/Moon count-correction delivery sets also passed independent PNG/9-WebP/3-JPEG visual and manifest checks. Lovers flames are small at 320px; count at 640px or larger. This is not a new full-78 or full-resolution historical review (docs/JPEG_FALLBACK_QA.md). No deployment is performed. Both artifacts carry full licensing notices.

Whole-deck scope: all 78 images now have first-pass symbol/count/composition comparison records (22 Major and 56 Minor cards; see `docs/audits/*-20261113.md`). The earlier 19 numbered Minor / three Court comparison gaps are historical milestones, not the current basic-review count. Ace of Swords v2 and Judgement v3 supersede their older image findings; see `docs/audits/two-candidate-adoption-20261113.md`. Exhaustive micro-symbol, edition, anatomy and rights clearance remains incomplete; zero cards are certified fully audited. See `docs/FINAL_RELEASE_AUDIT_20261113.md` for the current source-release checklist.
