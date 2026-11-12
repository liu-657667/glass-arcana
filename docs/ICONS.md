# Glass Arcana 原创界面图标

24 个 SVG，24×24 网格，统一 1.6 px 圆端描边，`currentColor`。哥特风格只保留在牌形的尖拱轮廓中，避免小尺寸复杂彩玻细节与泛用 AI 星光装饰。大阿卡纳 diamond 标志仅用于分类，不作通用 AI 标志。

## 使用
- 将 `ArcanaIcon.vue`、`icons.json` 同放在项目组件目录，TypeScript 开启 resolveJsonModule（Vite Vue 项目通常已配置）。
- `<ArcanaIcon name="language" :size="20" />`。按钮有可见文字时图标默认 aria-hidden；仅图标按钮必须设置 button aria-label，建议同时 title。
- 独立语义图标用组件 title 属性，例如 `<ArcanaIcon name="upright" title="正位" />`。title 取当前语言，不在组件硬编码。
- SVG 独立文件默认装饰性。不要将本包 SVG 用作无名称的独立操作。
- 所有触摸目标至少 44×44 px，键盘焦点必须清晰。正逆位不能只靠箭头或颜色表示，保留文字。
- 推荐控制尺寸 20 或 24 px；16 px 仅作辅助。密集 book / pentacle 适宜 24 px。
- 颜色继承正文 #242321；次要文字 #625E57；唯一强调 #693744。不要所有 icon 都加独立圆形底座，不用满屏蓝色。
- 语言切换显示 `中文 / EN`，不能只依赖地球。`export` 表示导出/分享，若实际操作下载文件，请保留“导出记录”文字。
- `preview.html` 是完全离线的图标与按钮展示，无外部脚本、字体或请求。

## 文件清单
language, shuffle, draw, cards, library, history, search, back, close, export, rotation, upright, reversed, chat, send, book, check, chevron-down, arrow-right, cup, wand, sword, pentacle, major。

## 来源及许可
本包全部为本项目新绘制的简单几何 SVG，没有导入 Apple SF Symbols、商业图标、第三方字体或付费资源。项目所有者现已批准原创图标采用 CC BY 4.0，完整许可与署名约定见 CONTENT-LICENSE.md 和 licenses/CC-BY-4.0.txt；组件代码仍为 MIT。参考 Apple 的内容优先与克制原则，不复制其图标素材或品牌标志。

## 验证
脚本逐一解析全部 SVG XML；24 个文件名与 JSON 条目一致；无外链、脚本、位图、字体依赖。preview.html 展示 16/24/32 三种尺寸。Vue 集成与实际页面全流程需由主项目 worker 验收，本包不宣称完成浏览器全流程或 AI API 验证。

云端 Chromium 启动被沙箱阻止，PNG 渲染工具缺少 rsvg-convert；未宣称已进行最终页面目视验收。附 contact-sheet.svg 供浏览器直接检查。
