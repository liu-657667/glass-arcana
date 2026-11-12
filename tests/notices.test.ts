import {test} from 'node:test';
import assert from 'node:assert/strict';
// @ts-expect-error Build-only JavaScript module.
import {virtualOwner} from '../scripts/third-party-notices.mjs';
test('rendered virtual runtime helpers map to their actual upstream packages',()=>{
 assert.equal(virtualOwner('\0vite/modulepreload-polyfill.js'),'vite');
 assert.equal(virtualOwner('\0plugin-vue:export-helper'),'@vitejs/plugin-vue');
 assert.equal(virtualOwner('/src/App.vue'),null);
});
test('unknown nonempty virtual modules fail closed rather than silently losing notices',()=>{
 assert.throws(()=>virtualOwner('\0new-helper'),/Unreviewed rendered virtual module/);
});
