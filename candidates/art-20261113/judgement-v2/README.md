# Judgement v2 study / 审判新候选（未安装）

Status: preserved for comparison, **not installed, not final approval, not a release**.

## Artifact integrity

- File: `glass-arcana-judgement-candidate-20261113.png`
- PNG, 1024 × 1536 pixels (2:3), 4,146,278 bytes.
- SHA-256: `4e6424f1105d4dc0df059a9ee90301110089559f197ddd4677fdb90a7b9a358f`
- Source: newly generated ChatGPT image, delivered to the owner as a ZIP and re-supplied in an extracted folder on 2026-11-13. The original delivery note is retained separately. No old lost image was recovered.

## Actual full-resolution visual inspection

The supplied PNG was decoded and viewed, rather than inferred from its prompt. Exactly six human resurrection figures below the angel are distinguishable: three large foreground figures and three smaller distant figures. Six separate open coffins are visible. The foreground central figure is childlike, back-facing; the distant middle figure appears adult rather than clearly childlike. Raised arms, a winged angel blowing a trumpet, a white flag bearing a red cross, mountains and water are present. The Gothic stained-glass visual treatment and gold border are retained. The image includes `XX` and `JUDGEMENT` lettering.

本次确认补足了原安装图缺少的远景三人和三棺；不把人数通过等同于全部人物、历史构图或手部细节终审。人物着衣、棺在绿地、花卉装饰等是改编。远景中间人物未清楚呈现儿童特征。尚未制作或审查 320/640px 衍生图，也未把候选接入浏览器；不能宣称小屏可读性通过。

## Reference and remaining gates

Existing historical pixel-comparison evidence is in `docs/audits/major-22-visual-20261113.md` (1911 reference, Judgement). That earlier comparison established six human figures in the reference versus three in the installed art. This pass inspected the new candidate, not a fresh historical reference scan, and does not certify an exact facsimile. Check historical figure roles, anatomy, lettering and small-size readability before any production replacement.

The installed originals, JPEG/WebP derivatives, manifests and runtime card selection remain untouched. Candidate files live outside `public/` and are not part of the production card bundle.

## Rights

AI-generated original adaptation, not a bundled historical scan. Follow the project's `ARTWORK-NOTICE.md`: any CC BY 4.0 grant is limited to rights actually held and licensable, not a guarantee of exclusive copyright, historical fidelity or worldwide clearance. This inspection is not a legal clearance certification.

## Import verification

Node 24.22.1: `npm run check` passed (37 unit + 22 server tests, type check, production build and complete runtime-license notices). `git diff --check` passed. No tracked files under `public/` or `src/` changed; the owner’s separate original checkout remained clean on main. These are offline regression checks, not browser or paid API acceptance.

## Follow-up: derivative and browser inspection

320 × 480 and 640 × 960 WebP derivatives were generated non-destructively with ImageMagick, quality 90; their hashes and byte sizes are in `derivatives.json`. Both were decoded successfully and loaded in a dedicated local Chrome preview. DOM image checks confirmed complete=true, expected natural dimensions and displayed widths 320/640. Screenshots of the 320 image and scrolled 640 image were actually inspected. Six figures/coffins, trumpet, red cross on white flag, XX and JUDGEMENT remain readable at 320px; facial/hand microdetails do not become certified by this pass. At 640px the distant middle figure remains adult-looking, not clearly a child. No new rendering blocker was observed.

This supersedes the earlier untested-derivative statement above, but does NOT certify full application integration, Safari, phone viewport behavior or historical identity. Preview page: `preview.html`; serve this folder locally to inspect. The temporary localhost-only server and dedicated browser tab were closed after checking. Requests for both derivatives and HTML returned HTTP 200; the preview's absent favicon returned an unrelated 404. All production art remains unchanged.
