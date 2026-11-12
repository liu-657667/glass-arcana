import {test} from 'node:test';import assert from 'node:assert/strict';import http from 'node:http';import {createOpenAIProvider} from './openaiProvider.mjs';import {createReflectionServer} from './reflection.mjs';
const input=()=>({context:{schemaVersion:1,locale:'zh',purpose:'cultural-reflection',question:'Synthetic walk question',cards:[{id:'major-0',reversed:false,position:'focus'}]},messages:[{role:'user',text:'A practical reflection?'}]});
const output={status:'completed',output:[{type:'message',role:'assistant',content:[{type:'output_text',text:'离线测试响应，不是真实 AI'}]}]};
const fake=async()=>new Response(JSON.stringify(output));
const make=(opts={})=>createOpenAIProvider({enabled:true,apiKey:'TEST-NOT-A-KEY',model:'test-model',fetchImpl:fake,...opts});
test('default gate blocks; no credentials loaded',()=>{assert.throws(()=>createOpenAIProvider(),/not_configured/);});
test('real loopback fake HTTP verifies Responses shape and fixed endpoint without external request',async()=>{
 let seen;const s=http.createServer(async(req,res)=>{let raw='';for await(const c of req)raw+=c;seen={body:JSON.parse(raw),auth:req.headers.authorization};res.end(JSON.stringify(output));});await new Promise(r=>s.listen(0,'127.0.0.1',r));try{const p=make({fetchImpl:async(url,options)=>{assert.equal(url,'https://api.openai.com/v1/responses');return fetch(`http://127.0.0.1:${s.address().port}`,options);}});assert.match(await p.reply(input()),/离线测试/);assert.equal(seen.body.store,false);assert.equal(seen.body.max_output_tokens,600);assert.equal(seen.auth,'Bearer TEST-NOT-A-KEY');assert.match(seen.body.input[0].content,/愚者/);await assert.rejects(p.reply(input()),/request_limit/);}finally{await new Promise(r=>s.close(r));}});
test('invalid cards rejected before transport',async()=>{let calls=0;const p=make({fetchImpl:async()=>{calls++;return fake();}});const b=input();b.context.cards[0].id='unknown';await assert.rejects(p.reply(b),/invalid_request/);assert.equal(calls,0);});
test('provider failures never expose response body or fake success',async()=>{for(const status of [401,429,500]){const p=make({fetchImpl:async()=>new Response('secret provider diagnostic',{status})});await assert.rejects(p.reply(input()),e=>!e.message.includes('secret')&&e.message.startsWith('provider_'));}});
test('incomplete and overlong output rejected',async()=>{for(const r of [{...output,status:'incomplete'},{status:'completed',output:[]},{status:'completed',output:[{type:'message',role:'assistant',content:[{type:'output_text',text:'x'.repeat(8001)}]}]}])await assert.rejects(make({fetchImpl:async()=>new Response(JSON.stringify(r))}).reply(input()));});
test('cancellation and timeout abort transport',async()=>{const pending=async(_url,{signal})=>new Promise((_,reject)=>{signal.addEventListener('abort',()=>reject(signal.reason),{once:true});});const p=make({fetchImpl:pending});const ac=new AbortController();const promise=p.reply(input(),ac.signal);ac.abort();await assert.rejects(promise,/cancelled/);const keep=setTimeout(()=>{},200);try{await assert.rejects(make({fetchImpl:pending,timeoutMs:10}).reply(input()),/provider_timeout/);}finally{clearTimeout(keep);}});
test('local route requires explicit consent and remains disabled by default',async()=>{for(const enabled of [false,true]){let calls=0;const s=createReflectionServer({provider:enabled?{reply:async()=>{calls++;return 'FAKE';}}:null});await new Promise(r=>s.listen(0,'127.0.0.1',r));try{const url=`http://127.0.0.1:${s.address().port}/api/openai-reflection`;const req=b=>fetch(url,{method:'POST',headers:{Origin:'http://localhost:5173','Content-Type':'application/json','X-Glass-Arcana':'reflection-v1'},body:JSON.stringify(b)});assert.equal((await req(input())).status,enabled?403:503);assert.equal(calls,0);const r=await req({...input(),consent:'send-current-reading-to-openai'});assert.equal(r.status,enabled?200:503);assert.equal(calls,enabled?1:0);}finally{await new Promise(r=>s.close(r));}}});
test('2000/2001/8000 character replies round-trip into follow-up without changing reading',async()=>{
 for(const length of [2000,2001,8000])for(const locale of ['zh','en']){
  const b=input();b.context.locale=locale;let calls=0;
  const p=make({maxRequests:2,fetchImpl:async()=>{calls++;return new Response(JSON.stringify({status:'completed',output:[{type:'message',role:'assistant',content:[{type:'output_text',text:'x'.repeat(length)}]}]}));}});
  const answer=await p.reply(b);assert.ok(answer.length<=2000);if(length===2000)assert.equal(answer,'x'.repeat(length));else assert.match(answer,/截短|shortened/);
  const before=JSON.stringify(b.context);b.messages.push({role:'assistant',text:answer},{role:'user',text:'Follow up'});await p.reply(b);assert.equal(calls,2);assert.equal(JSON.stringify(b.context),before);
 }
});
test('long multi-turn text remains subject to complete input byte budget before sending',async()=>{
 const {guardedTransport}=await import('./acceptanceBudget.mjs');let calls=0;const ledger={requests:[]};
 const p=make({model:'gpt-6-luna',maxOutputTokens:2000,fetchImpl:guardedTransport({ledger,persist(){},transport:async()=>{calls++;return fake();}})});
 const b=input();b.messages.push({role:'assistant',text:'界'.repeat(2000)},{role:'user',text:'Follow up'});
 await assert.rejects(p.reply(b));assert.equal(calls,0);assert.equal(ledger.requests.length,0);
});
