import {cards} from './cards';
export const spreads={one:['此刻的关注'],three:['当前处境','值得留意','可尝试的行动']} as const;
export type Spread=keyof typeof spreads;
export interface Draw {id:string;reversed:boolean;position:string;}
export interface Reading {version:1;id:string;createdAt:string;question:string;spread:Spread;draws:Draw[];}
// Rejection sampling avoids modulo bias. Never use Math.random for live draws.
export function secureInt(max:number):number {if(!Number.isSafeInteger(max)||max<1||max>0x100000000)throw Error('Invalid bound'); const limit=Math.floor(0x100000000/max)*max;const a=new Uint32Array(1);do {crypto.getRandomValues(a);}while(a[0]>=limit);return a[0]%max;}
export function draw(spread:Spread,reversals:boolean,rng:(max:number)=>number=secureInt):Draw[]{
 if(!Object.hasOwn(spreads,spread))throw Error('Unknown spread');const pool=cards.map(c=>c.id);
 const next=(max:number)=>{const n=rng(max);if(!Number.isInteger(n)||n<0||n>=max)throw Error('Invalid random source');return n;};
 return spreads[spread].map(position=>{const i=next(pool.length);return {id:pool.splice(i,1)[0],reversed:reversals&&next(2)===1,position};});
}
export const storageKey='glass-arcana:history:v1';
export function parseHistory(raw:string|null):Reading[]{try{const list:unknown=JSON.parse(raw||'[]');if(!Array.isArray(list))return [];return list.filter((x):x is Reading=>!!x&&x.version===1&&typeof x.id==='string'&&typeof x.createdAt==='string'&&!isNaN(Date.parse(x.createdAt))&&typeof x.question==='string'&&x.question.length<=500&&Object.hasOwn(spreads,x.spread)&&Array.isArray(x.draws)&&x.draws.length===spreads[x.spread as Spread].length&&new Set(x.draws.map((d:Draw)=>d.id)).size===x.draws.length&&x.draws.every((d:Draw,i:number)=>d&&cards.some(c=>c.id===d.id)&&typeof d.reversed==='boolean'&&d.position===spreads[x.spread as Spread][i])).slice(0,50);}catch{return [];}}
export function interpretation(d:Draw):string{const c=cards.find(c=>c.id===d.id)!;return `${d.position} · ${c.theme}。${d.reversed?'逆位在本项目中作为反思视角：留意这个主题的受阻、过度或内在表现，不等于坏事。':'正位在本项目中作为反思视角：观察这个主题在生活中如何出现，不保证某个结果。'} ${c.prompt}`;}
