// Structural match for the app's existing AIProvider. No credentials or provider URLs.
type Context={schemaVersion:1;locale:'zh'|'en';question:string;cards:readonly {id:string;reversed:boolean;position:string}[];purpose:'cultural-reflection'};
type Message={role:'user'|'assistant';text:string};
export const localMockProvider={
  name:'Offline mock / 离线演示（非 AI）',
  async reply(context:Context,messages:readonly Message[],signal:AbortSignal):Promise<string>{
    const response=await fetch('http://127.0.0.1:8787/api/reflection',{
      method:'POST',credentials:'omit',cache:'no-store',redirect:'error',
      headers:{'Content-Type':'application/json','X-Glass-Arcana':'reflection-v1'},
      body:JSON.stringify({context,messages}),signal:AbortSignal.any([signal,AbortSignal.timeout(10000)])
    });
    if(!response.ok)throw Error(`Local reflection request failed (${response.status})`);
    const data:unknown=await response.json();
    if(!data||typeof data!=='object'||!('mode' in data)||data.mode!=='mock'||!('text' in data)||typeof data.text!=='string'||data.text.length>8000)throw Error('Invalid local response');
    return data.text;
  }
};
