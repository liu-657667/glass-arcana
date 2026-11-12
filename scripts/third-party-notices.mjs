import fs from 'node:fs';
import path from 'node:path';

const virtualOwners=new Map([
 ['\0vite/modulepreload-polyfill.js','vite'],
 ['\0plugin-vue:export-helper','@vitejs/plugin-vue'],
]);
export function virtualOwner(id){
 if(!id.startsWith('\0'))return null;
 const owner=virtualOwners.get(id);
 if(!owner)throw Error(`Unreviewed rendered virtual module: ${JSON.stringify(id)}`);
 return owner;
}
// Inspect the actual Rollup output, not package.json's entire dependency tree.
export function thirdPartyNotices(){
 return {name:'glass-arcana-third-party-notices',generateBundle(_options,bundle){
  const packages=new Map();
  for(const chunk of Object.values(bundle)){
   if(chunk.type!=='chunk')continue;
   for(const [id,info] of Object.entries(chunk.modules)){
    if(info.renderedLength===0)continue;
    const owner=virtualOwner(id);
    if(!owner&&!id.includes('/node_modules/'))continue;
    let dir=owner?path.resolve('node_modules',owner):path.dirname(id.split('?')[0]);
    while(dir!==path.dirname(dir)&&!fs.existsSync(path.join(dir,'package.json')))dir=path.dirname(dir);
    const meta=JSON.parse(fs.readFileSync(path.join(dir,'package.json'),'utf8'));
    const key=`${meta.name}@${meta.version}`;
    if(!packages.has(key))packages.set(key,{dir,meta,modules:[]});
    packages.get(key).modules.push(owner?`virtual:${id.slice(1)}`:path.relative(dir,id));
   }
  }
  let notice='# Third-party notices — production browser bundle\n\nGenerated from non-empty rendered dependency modules in the current Vite/Rollup build. Full upstream license and NOTICE files are preserved below and separately in licenses/. These terms are not replaced by the project license. Project artwork and study-note licensing is separate.\n';
  for(const file of ['LICENSE','CONTENT-LICENSE.md','ARTWORK-NOTICE.md','licenses/CC-BY-4.0.txt']){
   this.emitFile({type:'asset',fileName:file,source:fs.readFileSync(file,'utf8')});
  }
  const inventory=[];
  for(const [key,{dir,meta,modules}] of [...packages].sort()){
   const files=fs.readdirSync(dir).filter(n=>/^(licen[cs]e|copying|notice)([.-].*)?$/i.test(n)&&fs.statSync(path.join(dir,n)).isFile());
   if(!files.some(n=>/^(licen[cs]e|copying)/i.test(n)))throw Error(`Missing upstream license for bundled ${key}`);
   notice+=`\n## ${key}\n\nDeclared license: ${meta.license??'not declared'}\nSource: ${typeof meta.repository==='object'?meta.repository.url:meta.repository??'see package metadata'}\nRendered modules: ${modules.sort().join(', ')}\n`;
   const emitted=[];
   for(const name of files){const text=fs.readFileSync(path.join(dir,name),'utf8');const fileName=`licenses/${key.replaceAll('/','__')}/${name}`;this.emitFile({type:'asset',fileName,source:text});emitted.push(fileName);notice+=`\n### ${name}\n\n${text}\n`;}
   inventory.push({name:meta.name,version:meta.version,license:meta.license,modules:modules.sort(),files:emitted});
  }
  this.emitFile({type:'asset',fileName:'THIRD_PARTY_NOTICES.md',source:notice});
  this.emitFile({type:'asset',fileName:'licenses/bundled-dependencies.json',source:JSON.stringify(inventory,null,2)+'\n'});
  // Source distributions carry the identical notice, without absolute host paths.
  fs.writeFileSync('THIRD_PARTY_NOTICES.md',notice);
  const lock=JSON.parse(fs.readFileSync('package-lock.json','utf8'));
  const rows=Object.entries(lock.packages).filter(([p])=>p).map(([p,m])=>({path:p,version:m.version,declaredLicense:m.license??'UNDECLARED — REVIEW REQUIRED',dev:!!m.dev,optional:!!m.optional}));
  fs.writeFileSync('docs/DEPENDENCY_INVENTORY.json',JSON.stringify({scope:'Lockfile metadata including build/test/type-only/transitive dependencies. Not all are bundled. Not a substitute for upstream full texts when redistributing these packages. node_modules is excluded from source delivery.',packages:rows},null,2)+'\n');
 }};
}
