import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {cards} from '../src/cards';
import {auditFor} from '../src/audit';
import {matchesCardSearch} from '../src/cardSearch';
import {translate} from '../src/i18n';
import review from '../src/artReview.json';

test('search finds every currently displayed bilingual theme, symbol and prompt',()=>{
 for(const card of cards){const a=auditFor(card.id)!;for(const fields of [a.modern.theme,a.iconography.textChecked,a.modern.uprightPrompt])for(const text of Object.values(fields))assert(matchesCardSearch(card,text),card.id+': '+text);assert(matchesCardSearch(card,'  '+card.english.toUpperCase()+'  '));}
 assert(!matchesCardSearch(cards[0],'not-a-card-xyzzzz'));
});
test('every candidate has honest review metadata matching the current original hash',()=>{
 assert.deepEqual(Object.keys(review).sort(),cards.map(c=>c.id).sort());
 for(const card of cards){const r=review[card.id as keyof typeof review];assert(r.noteZh&&r.noteEn);assert.equal(r.sha256,createHash('sha256').update(readFileSync(`public/art/${card.id}.png`)).digest('hex'));}
 for(const id of ['major-0','major-13','cups-8'] as const){assert.equal(review[id].status,'candidate');assert.match(review[id].noteEn,/not a new visual or rights review/);}
});
test('About declares opt-in paid AI and current content license in both languages',()=>{
 const app=readFileSync('src/App.vue','utf8');assert(!app.includes('中文摘要 CC0'));assert(!app.includes('也没有付费 API'));assert(!app.includes('后续牌背必须'));
 for(const match of app.matchAll(/t\("([^"\n]+)"\)/g)){if(!/CC BY|基础功能无需 API|当前原创 SVG/.test(match[1]))continue;const english=translate(match[1],'en');assert.notEqual(english,match[1]);if(match[1].includes('CC BY'))assert.match(english,/Earlier valid CC0 grants remain effective/);assert(!english.includes('no paid API'));}
});

test('card details expose source-specific pending checks without claiming exact art reproduction',()=>{
 const app=readFileSync('src/App.vue','utf8');assert.match(app,/iconography.pendingChecks/);assert.match(app,/check\[auditLang\(locale\)\]/);assert.match(app,/not an exact reproduction/);assert.match(app,/不代表本项目牌面逐项复刻/);
 for(const card of cards){for(const item of auditFor(card.id)!.iconography.pendingChecks){assert(item.en.trim());assert(item['zh-CN'].trim());}}
});
