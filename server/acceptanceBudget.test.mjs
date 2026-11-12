import {test} from 'node:test';import assert from 'node:assert/strict';import {guardedTransport} from './acceptanceBudget.mjs';
const payload=()=>({model:'gpt-6-luna',service_tier:'default',reasoning:{effort:'none'},max_output_tokens:2000,store:false,input:[{role:'user',content:'synthetic'}]});
test('complete payload plus framing bounded; no send on oversize',async()=>{let sent=0;const ledger={requests:[]};const f=guardedTransport({transport:async()=>{sent++;return new Response('{}');},persist(){},ledger});const b=payload();b.instructions='x'.repeat(6001);await assert.rejects(f('https://api.openai.com/v1/responses',{body:JSON.stringify(b)}),/input_limit/);assert.equal(sent,0);assert.equal(ledger.requests.length,0);});
test('failures reserve full cost and eleventh send is refused',async()=>{let sent=0;const ledger={requests:[]};const f=guardedTransport({transport:async()=>{sent++;throw Error('synthetic');},persist(){},ledger});for(let i=0;i<10;i++)await assert.rejects(f('https://api.openai.com/v1/responses',{body:JSON.stringify(payload())}));await assert.rejects(f('https://api.openai.com/v1/responses',{body:JSON.stringify(payload())}),/budget/);assert.equal(sent,10);assert.equal(ledger.requests.reduce((s,r)=>s+r.reservedUSD,0).toFixed(3),'0.018');});
test('alternate model/tier/tools rejected',async()=>{const f=guardedTransport({transport:async()=>{throw Error('must not send');},persist(){},ledger:{requests:[]}});for(const patch of [{model:'other'},{service_tier:'priority'},{tools:[{}]}])await assert.rejects(f('https://api.openai.com/v1/responses',{body:JSON.stringify({...payload(),...patch})}),/configuration/);});
test('exact full-payload byte boundary allows 6000 and rejects 6001 including multi-byte text',async()=>{
 for(const target of [6000,6001]){
  let sent=0;const ledger={requests:[]};const b=payload();b.input.push({role:'assistant',content:'界'.repeat(100)},{role:'user',content:'follow-up'});b.instructions='';
  b.instructions='x'.repeat(target-Buffer.byteLength(JSON.stringify(b)));const body=JSON.stringify(b);assert.equal(Buffer.byteLength(body),target);
  const transport=guardedTransport({transport:async()=>{sent++;return new Response('{}');},persist(){},ledger});
  if(target===6000){await transport('https://api.openai.com/v1/responses',{body});assert.equal(sent,1);assert.equal(ledger.requests[0].inputTokenUpperBound,8000);}else{await assert.rejects(transport('https://api.openai.com/v1/responses',{body}),/input_limit/);assert.equal(sent,0);assert.equal(ledger.requests.length,0);}
 }
});
