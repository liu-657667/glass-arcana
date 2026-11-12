import http from 'node:http';
import cardNames from './cardNames.json' with {type:'json'};
import { pathToFileURL } from 'node:url';
const ids = new Set([...Array.from({length:22},(_,i)=>`major-${i}`),...['wands','cups','swords','pentacles'].flatMap(s=>Array.from({length:14},(_,i)=>`${s}-${i+1}`))]);
const positions = {1:[['focus','此刻的关注','Current focus']],3:[['situation','当前处境','Current situation'],['attention','值得留意','What to notice'],['action','可尝试的行动','A possible action']]};
export const MAX_MESSAGE_CHARS=2000;
export function validate(body) {
  const c=body?.context,m=body?.messages;
  if(!c||c.schemaVersion!==1||!['zh','en'].includes(c.locale)||c.purpose!=='cultural-reflection'||typeof c.question!=='string'||c.question.length>500||!Array.isArray(c.cards)||!positions[c.cards.length]||!Array.isArray(m)||m.length<1||m.length>12)throw Error('invalid_request');
  const cards=c.cards.map((d,i)=>{
    if(!d||!ids.has(d.id)||typeof d.reversed!=='boolean'||!positions[c.cards.length][i].includes(d.position))throw Error('invalid_request');
    return {id:d.id,reversed:d.reversed,position:positions[c.cards.length][i][0]};
  });
  if(new Set(cards.map(d=>d.id)).size!==cards.length)throw Error('invalid_request');
  const messages=m.map((v,i)=>{if(!v||v.role!==(i%2?'assistant':'user')||typeof v.text!=='string'||!v.text.trim()||v.text.length>MAX_MESSAGE_CHARS)throw Error('invalid_request');return {role:v.role,text:v.text};});
  if(messages.at(-1).role!=='user')throw Error('invalid_request');
  return {context:{schemaVersion:1,locale:c.locale,purpose:c.purpose,question:c.question,cards},messages};
}
// Deliberately deterministic, not a language model or personalised reading.
export function mockReply({context:c}) {
  const labels=c.cards.map(d=>`${cardNames[d.id][c.locale]} (${c.locale==='zh'?(d.reversed?'逆位':'正位'):(d.reversed?'reversed':'upright')})`).join(', ');
  return c.locale==='zh'?`【离线演示，非 AI 解读】当前牌面：${labels}。这是界面联调示例，不会推断你的问题或预测事件。请结合现实信息思考：哪些感受值得记录？下一步可以核实什么？牌义资料仍在逐牌核校。`:`[Offline demo, not an AI reading] Current cards: ${labels}. This is an interface test, not an interpretation of your question or a prediction. Reflect on what you feel and what you can verify next. Card knowledge is still being reviewed.`;
}
export function createReflectionServer({provider=null,origins=['http://127.0.0.1:5173','http://localhost:5173']}={}) {
  if(origins.some(o=>!/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(o)))throw Error('Only loopback origins are supported');
  const allowed=new Set(origins);
  const server=http.createServer(async(req,res)=>{
    const origin=req.headers.origin;
    const send=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...(allowed.has(origin)?{'Access-Control-Allow-Origin':origin,Vary:'Origin'}:{})});res.end(JSON.stringify(data));};
    const port=server.address()?.port;
    if(![`127.0.0.1:${port}`,`localhost:${port}`].includes(req.headers.host)||!allowed.has(origin))return send(403,{error:'forbidden'});
    if(!['/api/reflection','/api/openai-reflection'].includes(req.url))return send(404,{error:'not_found'});
    if(req.method==='OPTIONS'){res.writeHead(204,{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST','Access-Control-Allow-Headers':'Content-Type, X-Glass-Arcana','Vary':'Origin'});return res.end();}
    if(req.method!=='POST')return send(405,{error:'method_not_allowed'});
    if(req.headers['content-type']!=='application/json'||req.headers['x-glass-arcana']!=='reflection-v1')return send(415,{error:'unsupported_request'});
    // No prompts, histories or headers are logged or persisted.
    let bytes=0,chunks=[];
    try {
      for await(const chunk of req){bytes+=chunk.length;if(bytes>32768){send(413,{error:'request_too_large'});req.resume();return;}chunks.push(chunk);}
      const body=JSON.parse(Buffer.concat(chunks).toString('utf8'));
      const input=validate(body);
      if(req.url==='/api/openai-reflection'){
        if(!provider)return send(503,{error:'provider_not_configured'});
        if(body.consent!=='send-current-reading-to-openai')return send(403,{error:'consent_required'});
        const abort=new AbortController();const onClose=()=>{if(!res.writableEnded)abort.abort();};res.on('close',onClose);
        try{const text=await provider.reply(input,abort.signal);if(!res.destroyed)send(200,{mode:'openai',text});}
        catch{if(!res.destroyed)send(502,{error:'provider_failed'});}finally{res.off('close',onClose);}
      }else send(200,{mode:'mock',text:mockReply(input)});
    }catch{if(!res.headersSent)send(400,{error:'invalid_request'});}
  });
  server.requestTimeout=10000;server.headersTimeout=10000;server.maxHeadersCount=30;
  return server;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const port=Number(process.env.GLASS_REFLECTION_PORT||8787);
  if(!Number.isInteger(port)||port<1024||port>65535)throw Error('Invalid local port');
  createReflectionServer().listen(port,'127.0.0.1',()=>console.log(`Offline mock only: http://127.0.0.1:${port}`));
}
