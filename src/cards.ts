/** Original project Chinese study notes. Not quotations or a critical edition. */
export interface Card {id:string;name:string;english:string;arcana:'major'|'minor';suit:string;rank:number;symbol:string;theme:string;prompt:string;count:number|null;source:string;review:'待逐牌核校';}
const major = [
['愚者','The Fool','临崖旅人、白犬、白玫瑰、行囊','启程与未知','什么值得尝试，什么风险需要先看清？'],
['魔术师','The Magician','一手向天一手向地，桌上四种花色器物','行动与资源','我已经拥有的资源有哪些？'],
['女祭司','The High Priestess','黑白 B/J 柱、月冠、卷轴、石榴帷幕','静观与隐而未明','有哪些信息还需要等待或核实？'],
['皇后','The Empress','星冠、麦田、金星盾牌','滋养与创造','我能如何照顾正在成长的事物？'],
['皇帝','The Emperor','公羊石座、权杖、山峦','秩序与边界','什么边界能让我更安稳？'],
['教皇','The Hierophant','三重冠、交叉钥匙、两位侍者','传统与学习','哪些规则对我仍然有用？'],
['恋人','The Lovers','两个人物、天使、两棵树','价值与选择','这个选择与我的价值观一致吗？'],
['战车','The Chariot','黑白斯芬克斯、星幕、战车','方向与协调','我需要协调哪两股不同的力量？'],
['力量','Strength','女子温和抚狮、无限符号','耐心与勇气','怎样用温和而坚定的方式回应？'],
['隐者','The Hermit','星灯、手杖、山巅','独处与辨认','安静下来后，我真正需要什么？'],
['命运之轮','Wheel of Fortune','轮、斯芬克斯、四角翼兽','变化与周期','变化中有哪些是我能影响的？'],
['正义','Justice','天平、直立宝剑、双柱','公平与责任','我是否充分考虑了事实与后果？'],
['倒吊人','The Hanged Man','单足悬挂、交叉腿、光环','暂停与换位','换一个角度会看见什么？'],
['死神','Death','白马骷髅骑士、黑旗白玫瑰、远方日出','结束与转变','有什么旧模式可以告别？'],
['节制','Temperance','天使双杯流动，一足在水一足在地','调和与节奏','我可以如何调整自己的节奏？'],
['恶魔','The Devil','有角形象、松垂的锁链、火炬','依附与选择','哪些习惯正在限制我的选择？'],
['高塔','The Tower','雷击塔、落冠、坠落人物','冲击与重建','什么假设需要重新检验？'],
['星星','The Star','一大七小星、双水罐、池水与土地','希望与恢复','什么能帮助我慢慢恢复？'],
['月亮','The Moon','双塔、犬狼、甲壳生物、曲径','不确定与想象','我能怎样区分感受和已知事实？'],
['太阳','The Sun','太阳、白马、孩童、向日葵','清晰与活力','什么让我感到真实而有活力？'],
['审判','Judgement','吹号天使、旗帜、起身人物','回顾与回应','回顾经历后，我愿意如何回应？'],
['世界','The World','花环、中央人物、四角象征','整合与完成','这一阶段我学到了什么？']
];
const suitData = [
{key:'wands',cn:'权杖',en:'Wands',symbols:['云中手持发芽权杖','城墙上的人、地球与两根杖','远望船只的人与三根杖','四杖花环与庆典','五人各持一杖','骑马者、桂冠与六杖','高处一人抵御六杖','八根飞行权杖，无人物','负伤守望者与九杖','搬运十根权杖的人','观察权杖的青年','持杖骑士与跃马','权杖、向日葵与黑猫','王座、权杖、狮与蝾螈纹样'],themes:['灵感','规划','拓展','庆祝','竞争','认可','立场','进展','坚持','负担','探索','热情','自信','引领']},
{key:'cups',cn:'圣杯',en:'Cups',symbols:['云中手托杯、鸽子与流水','两人举杯、双蛇杖与翼狮','三人举杯共庆','树下人、三个杯与递来的第四杯','三倒两立的五杯与黑衣人','庭院孩童与六只花杯','云中七杯与不同幻象','五下三上的八杯、离去旅人、山水与月','坐着的人与弧形排列的九杯','彩虹十杯与家庭','杯中鱼与青年','持杯骑士与温和马匹','华丽有盖杯与水边王座','海上王座、杯与权杖'],themes:['感受','联结','友谊','停顿','失落','回忆','想象','离开','满足','归属','好奇','邀约','共情','情绪平衡']},
{key:'swords',cn:'宝剑',en:'Swords',symbols:['云中手持冠剑','蒙眼者交叉双剑','三剑穿心与雨云','卧像、三悬剑与一横剑','持剑者、地上剑与离去的人','渡船、乘客与六剑','携走五剑、留下两剑的人','蒙眼被缚的人与八剑','床上掩面者与九横剑','倒地者、十剑与曙光','警觉持剑的青年','疾驰举剑骑士','举剑王后与伸出的手','端坐持剑的国王'],themes:['澄清','两难','痛楚','休息','冲突代价','过渡','策略','限制','忧虑','结束','求证','果断','辨别','判断']},
{key:'pentacles',cn:'星币',en:'Pentacles',symbols:['云中手托星币与花园','无限环中双币与海浪','工匠与两位观察者、三币','头顶一币、胸前一币、脚下两币','雪中行人与窗上五币','持天平施予者、两位受助者与六币','园丁观察七币','工匠制作八币','葡萄园、人物、鸟与九币','家庭、老人、犬与十币','凝视星币的青年','静立马匹与持币骑士','花园中的持币王后','葡萄、公牛纹样与持币国王'],themes:['机会','平衡','合作','守持','匮乏','互助','评估','练习','自主','传承','学习','勤勉','照料','稳健']}
];
const ranks=['王牌','二','三','四','五','六','七','八','九','十','侍从','骑士','王后','国王'];
const enRanks=['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'];
export const sources = [
{id:'waite',title:'A. E. Waite · The Pictorial Key to the Tarot',url:'https://en.wikisource.org/wiki/The_Pictorial_Key_to_the_Tarot',note:'1910 年原作；链接为 1922 年版的 Wikisource 转录，用作核校入口，并非本项目的完整译本。'},
{id:'images',title:'Pamela Colman Smith · 早期 RWS 图像',url:'https://commons.wikimedia.org/wiki/Category:Rider-Waite_tarot_deck',note:'核对早期图像版本和单个文件的许可；不把现代重绘、配色或译文视作公版。'}
];
export const cards:Card[] = [
...major.map((m,rank):Card=>({id:`major-${rank}`,name:m[0],english:m[1],arcana:'major',suit:'大阿卡纳',rank,symbol:m[2],theme:m[3],prompt:m[4],count:null,source:'waite',review:'待逐牌核校'})),
...suitData.flatMap(s=>ranks.map((r,i):Card=>({id:`${s.key}-${i+1}`,name:s.cn+r,english:`${enRanks[i]} of ${s.en}`,arcana:'minor',suit:s.cn,rank:i+1,symbol:s.symbols[i],theme:s.themes[i],prompt:`关于「${s.themes[i]}」，我目前的真实经验是什么？下一步能做什么小事？`,count:i<10?i+1:1,source:'waite',review:'待逐牌核校'})))
];
