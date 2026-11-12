import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-expect-error Build-only local JS plugin, not browser code.
import {thirdPartyNotices} from './scripts/third-party-notices.mjs';
export default defineConfig(({mode})=>({
 publicDir:mode==='web-lite'?'.staging/web-public':'public',
 build:{outDir:mode==='web-lite'?'dist-web':'dist'},
 plugins:[vue(),...(mode==='web-lite'?[{name:'lightweight-fallback-paths',transform(code:string,id:string){if(id.endsWith('/src/art.ts'))return code.replace(/\/art\/([a-z]+-\d+)\.png/g,'/art/$1.jpg');}}]:[]),thirdPartyNotices()]
}));
