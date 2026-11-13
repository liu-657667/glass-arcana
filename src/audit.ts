import basic from './auditBasic78.json';import type {Locale} from './i18n';
export const batch=basic;
export const auditFor=(id:string)=>batch.cards.find(c=>c.id===id);
export const auditLang=(locale:Locale)=>locale==='en'?'en':'zh-CN';
export function reviewLabel(id:string,locale:Locale){return auditFor(id)?(locale==='en'?'Basic text: first pass · full image review incomplete':'基础原典文本首轮 · 图像全面审校未完成'):(locale==='en'?'Pending card-by-card review':'待逐牌核校');}
export function modernPrompt(id:string,reversed:boolean,locale:Locale){const entry=auditFor(id);return entry?.modern[reversed?'reversedPrompt':'uprightPrompt'][auditLang(locale)];}

export function modernReversalNote(id:string,reversed:boolean,locale:Locale){return reversed?(auditFor(id)?.modern.reversalNote[auditLang(locale)]??''):'';}
