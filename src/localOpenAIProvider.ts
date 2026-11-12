import type {AIProvider} from './ai';
/** Only use after explicit current-reading sharing consent. No credentials enter this module. */
export function localOpenAIProvider(consent:boolean):AIProvider {
 if(!consent)throw Error('OpenAI sharing consent required');
 return {name:'OpenAI (server-side)',async reply(context,messages,signal){
  const r=await fetch('http://127.0.0.1:8787/api/openai-reflection',{method:'POST',credentials:'omit',cache:'no-store',redirect:'error',headers:{'Content-Type':'application/json','X-Glass-Arcana':'reflection-v1'},body:JSON.stringify({context,messages,consent:'send-current-reading-to-openai'}),signal:AbortSignal.any([signal,AbortSignal.timeout(25000)])});
  if(!r.ok)throw Error('OpenAI response unavailable');const d=await r.json();if(d.mode!=='openai'||typeof d.text!=='string'||d.text.length>8000)throw Error('Invalid response');return d.text;
 }};
}
