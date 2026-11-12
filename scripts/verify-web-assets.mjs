import fs from 'node:fs';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';
const manifest=JSON.parse(fs.readFileSync('.staging/web-assets-manifest.json','utf8'));
assert.equal(Object.keys(manifest).length,78);
const hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const bundle=fs.readdirSync('dist-web/assets').filter(n=>n.endsWith('.js')).map(n=>fs.readFileSync(`dist-web/assets/${n}`,'utf8')).join('');
for(const [id,row] of Object.entries(manifest)){
 assert.equal(hash(`public/art/${id}.png`),row.originalSha256);
 assert.equal(hash(`dist-web/art/${id}.jpg`),row.fallbackSha256);
 assert.ok(bundle.includes(`/art/${id}.jpg`));
 for(const width of [320,640,1024])assert.equal(hash(`dist-web/art/derived/${id}-${width}.webp`),hash(`public/art/derived/${id}-${width}.webp`));
}
assert.ok(!/\/art\/[a-z]+-\d+\.png/.test(bundle));
assert.equal(fs.readdirSync('dist-web/art').filter(n=>n.endsWith('.png')).length,0);
assert.equal(hash('public/art/card-back.svg'),hash('dist-web/art/card-back.svg'));
console.log('Verified 78 original hashes, 78 JPEG fallbacks, 234 unchanged WebP derivatives and vector back.');
