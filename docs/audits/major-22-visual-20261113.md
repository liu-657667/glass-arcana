# 大牌图像重新审校 / Major Arcana visual re-review — 2026-11-13

## 范围与方法

这是对已提交 `57b0b376` 图像的新审校，不是恢复遗失候选或对22张早期图审查旧结论的照抄。78张原图及衍生图不在本次修改范围。22张大牌PNG已逐一计算SHA-256并与 `src/artReview.json` 比对一致。

以下审校仅观察可见构图与指定符号；来源页文字、实际参考像素和当前像素必须分开。现代彩绘玻璃改编允许构图/衣着差异，但不因此证明所有符号已正确。不能以缩略图看不清判定“没有”，不能以题材相近判定逐笔复制。

## 参考与许可边界

- [Commons RWS分类](https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck)：原作与现代重新上色的版权状态不同，不能将分类里的所有文件视为同一许可。
- [Fool具体文件页](https://commons.wikimedia.org/wiki/File:RWS_Tarot_00_Fool.jpg)：标注Pam-A、1910、Pamela Colman Smith及公版标识。文件页版权模板提及Waite死亡年1942，而画家为1878–1951；不能不加区分地把这个模板日期套用于所有权利和地区。
- [Commons PD-Art再使用说明](https://commons.wikimedia.org/wiki/Commons:Reuse_of_PD-Art_photographs)：Commons托管政策不是全球无权利风险证明，各司法辖区规则不同。本次不将参考扫描件复制进发行包。
- [CC BY 4.0官方摘要](https://creativecommons.org/licenses/by/4.0/)：允许商业复用，须适当署名、附许可并注明修改；公版部分无需重新遵守该许可，许可无担保。现有 `ARTWORK-NOTICE.md` 的“仅实际持有且可授权权利”边界保留。
- 项目当前图像在仓库中声明为OpenAI生成的原创改编候选，而非现代商业牌组扫描；本轮核对文件/哈希与这些记录一致，不宣称重新取得完整生成日志或法律清权证明。

## 状态

以下记录只对应本轮明确检查范围。此文件本身不将UI中的pending升级为passed。任何需改变图案、人物、数量或象征的建议应先单独报告，再确定是否制作新候选。

## major-0–10：实际双图比对

逐张查看项目640px WebP与Commons参考JPEG。本图为原创改编候选，非完整终审。参考文件页均标Pam-A/1910/Smith及公版标识；扫描历史可能变化，不把某次扫描颜色当唯一标准。

| ID | 本图可见 | 相对参考的差异与不确定性 |
|---|---|---|
|0 愚者|白花、肩杖包袱、白狗、崖缘、仰头人物、日轮|人物转向、手势、包袱和狗重新构图，新增城堡河谷；包袱细纹未终审。|
|1 魔术师|举杖/指地、∞、杯剑杖币、红白花、腰蛇|仰视替代参考正面低视，额带不明确；蛇头可见但咬尾闭环未确认。|
|2 女祭司|B/J、胸十字、TORA、部分遮卷轴、石榴棕榈幕、月冠/月牙|月牙扩大居中而非参考偏右被衣摆覆盖；帷幕与冠重新设计。|
|3 皇后|12颗星、权杖、石榴裙、金星心盾、麦田与水林|星群悬于冠上方成弧，并非原图围冠结构；权杖换侧，新增水果篮和瀑布。|
|4 皇帝|四羊首座、红袍、铠甲腿、ankh杖、球、山|新增胸鹰和日轮；球杖及坐姿改编。|
|5 教皇|三层冠、三横杖、祝福手、二柱二侍从、交叉钥匙、玫瑰百合服饰|白须光环、服饰钥匙方向和比例重新设计；手指关节未高分辨率终审。|
|6 恋人|天使、男女、蛇果树、火树、中山|人物着衣、姿态目光及翼色发饰改编；火焰未可靠逐数，不宣称12火焰通过。|
|7 战车|黑左白右狮身像、星篷、月肩、杖、翼盘、无可见缰绳|参考胸方块变为星形，翼盘下红色形状变为纹章盾；不可称全符号原样保留。|
|8 力量|触狮口、∞、花冠环、白衣|参考站立女人及狮改为跪坐女人与伏卧狮。|
|9 隐者|灰袍、六角星灯、杖、雪峰|直杖改弯头木杖，灯扩大，新增山脉。|
|10 命运轮|TARO位置、四希伯来字形、八向结构、有翼持书生物、蛇/Anubis/持剑狮身像|狮身像增加翼；水星上方延伸辐条缺失，姿势剑向/字形笔势改编；希伯来书法未终审。|

## major-11–21：首轮记录（14–21已由下方补充对照更新）

11–13实际查看参考JPEG；14–21参考文件页可读但参考图片请求403，未绕过限制，当时不能声称完整22张参考像素比对已完成；随后通过独立Sacred Texts公开原典扫描补足，见末尾。

| ID | 状态 | 本图可见 | 差异/待核 |
|---|---|---|---|
|11 正义|双图比对|右手剑、左手双盘秤、双柱红袍紫幕白鞋|冠袍柱式背景重新设计，比例细部未终审。|
|12 倒吊人|双图比对|单踝活树悬挂、弯腿、背手、蓝衣红裤、头光|参考弯腿在画面左，本图在右，腿姿镜像；新增山河城堡与花草。|
|13 死神|双图比对|白马甲骷髅、黑旗白花、倒地王者、成人儿童教士、两塔太阳|白花图案简化，成人儿童合掌仰望替代原女性回避姿态；参考水面船未在本图看到。|
|14 节制|仅本图|红翼、额日、胸方内三角、两杯水、一脚陆一脚水、远山冠路径花|手脚方向与水流路径尚未比对参考像素。|
|15 恶魔|仅本图|倒五角星、羊首蝠翼、下指火炬、二角尾人物、垂腰链圈|衣着与松链可见；尾端形制、与原图链圈一致性待核。|
|16 高塔|仅本图|雷击、飞冠、二坠人、金滴与碎石火焰|未完成位置编号逐滴计数，不沿用旧22滴结论作为本轮通过。|
|17 星星|仅本图|1大7小八角星、两罐水、陆地5道流向末端、树鸟、着衣人物|鸟种、足与水面、位置关系未对照。|
|18 月亮|仅本图|两塔犬狼路径池中甲壳类、月面、3行各5金滴共15|普通泪滴是否应保留早期yod笔势待核；动物与月面方向未完整认证。|
|19 太阳|仅本图|面孔太阳、红旗、着衣骑白马儿童、墙、4向日葵|衣着鞍具缰绳、花位旗杆方向待核。|
|20 审判|仅本图|吹号天使、红十字旗、3着衣人物、3石棺、水雪山|远景人物是否遗漏、棺材质天使方向待核，不称人数完整。|
|21 世界|仅本图|椭圆叶环红带、着衣双杖人物、四角人鹰牛狮|裙装姿势腿头向、生物翅膀尚未对照参考。|

## 后续处理原则

可确认的构图差异先公开记录，不自动当成必须重绘的bug。优先评估：战车符号替换、皇后星冠布局、魔术师蛇带闭合不确定、倒吊人镜像腿姿、死神旗花/人物姿态、命运轮额外双翼。是否改图会影响原创设计，需单独决策。剩余8张参考像素比对现已补足；全分辨率微小符号和整套权利终审仍待完成。UI审查状态未提升。

## 固定本次检查对象与参考页

以下PNG哈希从本地原图重新计算；视觉查看的是相同牌种的640px派生图。参考页链接并不等于已看参考像素，具体范围以上表为准。

| ID | 原PNG SHA256 | 参考文件页 |
|---|---|---|
|0|`84faa579cbaa71ad3e0dc963395958767df8771e96f310ce9881879e3c8bca9d`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_00_Fool.jpg)|
|1|`3e5224c7668f970703a99412c1b0e187c05bdeff322c515b2e0aadb4f012988c`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_01_Magician.jpg)|
|2|`8d4dc49ee68d21fcf7b537cd28e134da37a39401c27c52261695b7be83364363`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_02_High_Priestess.jpg)|
|3|`5e92bd19af1cb168c0d325da9f91b015f4346260b0711beb86ed7b249187b37d`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_03_Empress.jpg)|
|4|`00ac4ea6ba2f17c97b13d5a9b7e3e14542e35b7cd2ce407bacca46fc595d3825`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_04_Emperor.jpg)|
|5|`426d749d988716964ebadaf2f289a4f1ec4428e083f1a51e5f6b74295bd41abe`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_05_Hierophant.jpg)|
|6|`383894c9cdd7601569bb25ee9c8815207ba70e33f718f566107c623db340d708`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_06_Lovers.jpg)|
|7|`3f262aa08b11c0df5742aa6b0493d80236d23d26ad20181e1f32983bfc453295`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_07_Chariot.jpg)|
|8|`dbc11c91d33ae3772b882354285acf89d142d597e599e213d562470eedd07765`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_08_Strength.jpg)|
|9|`787d86e06d2c4275ea1c2d331160a7cbf688f870d0b30f9801c223a8ec3dfe36`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_09_Hermit.jpg)|
|10|`5bbaf3cd1f8d5684633433aac8a7ff23714254b0a162a90ebaf3e15cc4d8d91e`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_10_Wheel_of_Fortune.jpg)|
|11|`dc77693dd53c58bf5328cb3dec7c99ce818bf78843fd368bceb0ed2ceb02e3ae`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_11_Justice.jpg)|
|12|`9ff0e12bc2bda1f8f3e09ce4fbc5c1cc5dd62a34dec29252502082eb66aefff0`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_12_Hanged_Man.jpg)|
|13|`d34039d97b820c48bca95dafaa94918ebeb2161504578be585f86b42ef21d945`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_13_Death.jpg)|
|14|`9863e3e5012b02f74d66acd2fff21625cd870133f4bc168f3bcc774d99b48f49`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_14_Temperance.jpg)|
|15|`181d7d3426f15eb45f0c4dc3ce0edd1516dfb912a7ad8dc5ef99802c5f08506b`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_15_Devil.jpg)|
|16|`7f9701b98e835a2c41f9931e68dbfdd345b4b3412b90c9fd68d4f3b452d3e88f`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_16_Tower.jpg)|
|17|`305e485d0e73e1573892db1c7296a9e9a58fd371b864aea066d85e71363d6d5b`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_17_Star.jpg)|
|18|`6bacf8d8f1b68c72e4639878139bc47c4cb2e1eb0bfd91f414809067c4eeb547`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_18_Moon.jpg)|
|19|`24f1e250fa7b15e2984aa5540112a226300e9e5426a1c08ce94a73c0d2254ffb`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_19_Sun.jpg)|
|20|`2b211d1200c79d73f6e61649abb2920c5340025c64a869753d75dd3a018f4e04`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_20_Judgement.jpg)|
|21|`c358eddefa5fffed7cb0050533d9ef2be336e8abdb32e181d5a42874f28f3b44`|[Commons](https://commons.wikimedia.org/wiki/File:RWS_Tarot_21_World.jpg)|

## 补充：14–21与1911原典数字扫描的实际像素对照

8张参考JPG和本项目相应640px WebP均逐张实际查看，不再仅本图检查。未绕过Commons的403；改用独立公开来源。

[原典标题/版权页](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/start-reading)注明London W.Rider [1911]、A.E.Waite著、Pamela Colman Smith绘，J.B.Hare于2000/2003扫描校对，并说明文字及插图在美国公版。这不是现代上色版或全球权利保证。章节内Click to enlarge链接指向下表JPG；约300px宽，只适合核心构图对照，不适合微小字形终审。参考只留作临时研究，不入仓、不打包。

|牌|比对后明确观察|仍未确认/设计判断|
|---|---|---|
|14 节制|翼/额日/胸方三角/双杯/水陆脚保留；本图高杯左低杯右，参考相反，水陆脚、道路冠花亦换侧|左右构图改编；胸前细字不作合格结论。|
|15 恶魔|羊角蝠翼倒五星火炬链圈保留；人物性别左右对调、增加衣装；参考女性葡萄簇尾端变单圆果|葡萄变单果为明确符号差异，是否改图需设计决定。|
|16 高塔|雷击飞冠燃塔两坠人保留；不规则yod样黄点改为规则火滴并混有砖石|本轮未完成可靠火滴计数，不标22滴通过，不把碎石火焰计入。|
|17 星星|1大7小星、双壶树鸟水陆保留；裸身低头改衣着仰望，池水树鸟左右对调；本图可辨5分流|低分辨率参考不作细分流数量终审。|
|18 月亮|双塔犬狼道路甲壳动物保留；月面参考朝左本图朝右；本图15滴呈5×3|参考黄点散布且为弯曲yod样形，非规则泪滴；数量可数不等于布局形态原样。|
|19 太阳|面孔太阳白马孩童红旗墙和4向日葵保留；裸童改着衣，马头近正面朝下改侧身朝右|服装姿态构图改编。|
|20 审判|天使号角十字旗复起者棺山水保留；参考前景3人+远景3人共6，本图仅3人3棺|省略远景3人为明确内容简化，不能宣称人数与原典一致，补回须设计决定。|
|21 世界|椭圆环上下红结双杖四角四象位置保留；裸身飘带改紫色全裙并增装饰|位置未见明显错置，但人体衣装装饰为改编，非微细节终审。|

### 补充参考文件与SHA-256

- 14: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xiv-temperance) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar14.jpg) · SHA256 `f5650fb52cb3e4a378b48c9c93edbd94b7b1101ee37c1ae2075b6299cb72d4a1`
- 15: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xv-the-devil) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar15.jpg) · SHA256 `f3616bdd45c1fbf4dd7cc5fccaf4ab1925ab694f0ccfadb07bdc6dd19a2b9bde`
- 16: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xvi-the-tower) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar16.jpg) · SHA256 `0e5b2ad2b19834838c4ffb5d3dd2d743f20f6d64d9bf62938ffa708befeca49f`
- 17: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xvii-the-star) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar17.jpg) · SHA256 `3116d36712383964d61cad7b5531a7621642654c8e29feb21c09efca0dc16cb6`
- 18: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xviii-the-moon) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar18.jpg) · SHA256 `131535eb0e07b1627ba638d38d4c6edcea72faefce071c0d2a22b1579103ec19`
- 19: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xix-the-sun) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar19.jpg) · SHA256 `e4548dffccafaa5a30685c9fef6e891b37bec97ac60368b1ecf9662a47a2ac44`
- 20: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xx-the-last-judgement) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar20.jpg) · SHA256 `2b15b96595eb072908dd8ada7fface0819117c34c0d967bc2c656b5efbbb62ce`
- 21: [章节](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot/xxi-the-world) · [参考图](https://scrape.sacred-texts.com/tarot/pkt/img/ar21.jpg) · SHA256 `1aeb2387a01c86bf24ad4c9552bd60773286b28e464b0eb5e4c1033cab2ddc77`

结论：22张均有专项参考像素对照记录，但不是全部符号、历史版次和法律清权终审。所有现有候选及pending状态保留，没有重绘。
