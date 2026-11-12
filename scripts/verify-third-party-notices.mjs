import fs from 'node:fs';
import assert from 'node:assert/strict';
const output=process.argv[2]||'dist';
const inventory=JSON.parse(fs.readFileSync(`${output}/licenses/bundled-dependencies.json`,'utf8'));
assert.ok(inventory.length>0,'No runtime dependency inventory');
const notice=fs.readFileSync(`${output}/THIRD_PARTY_NOTICES.md`,'utf8');
assert.equal(notice,fs.readFileSync('THIRD_PARTY_NOTICES.md','utf8'));
for(const pkg of inventory){
 const root=`node_modules/${pkg.name}`;
 assert.equal(JSON.parse(fs.readFileSync(`${root}/package.json`,'utf8')).version,pkg.version);
 for(const file of pkg.files){const source=fs.readFileSync(`${root}/${file.split('/').at(-1)}`,'utf8');assert.equal(fs.readFileSync(`${output}/${file}`,'utf8'),source);assert.ok(notice.includes(source));}
}
console.log(`Verified complete upstream notices for ${inventory.length} rendered runtime packages.`);

for(const file of ['LICENSE','CONTENT-LICENSE.md','ARTWORK-NOTICE.md','licenses/CC-BY-4.0.txt'])assert.equal(fs.readFileSync(`${output}/${file}`,'utf8'),fs.readFileSync(file,'utf8'));
