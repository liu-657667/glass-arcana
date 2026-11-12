import {test} from 'node:test';import assert from 'node:assert/strict';
import {saveReading,clearSavedHistory,exportSavedHistory} from '../src/historyStore';import {parseHistory,draw,storageKey,type Reading} from '../src/engine';
const record:Reading={version:1,id:'synthetic',createdAt:'2026-11-12T00:00:00Z',question:'Synthetic',spread:'one',draws:draw('one',false,()=>0)};
test('quota failure preserves in-memory new draw and stored older record; export remains recoverable',()=>{
 const old={...record,id:'older'};const raw=JSON.stringify([old]);const store={getItem:()=>raw,setItem(){throw new DOMException('Synthetic quota','QuotaExceededError');},removeItem(){}};
 const result=saveReading(record,[old],()=>store);assert.equal(result.saved,false);assert.deepEqual(result.records,[record,old]);assert.equal(store.getItem(),raw);assert.deepEqual(parseHistory(exportSavedHistory(result.records)),result.records);
});
test('unavailable storage does not lose current records or prevent drawing',()=>{const result=saveReading(record,[],()=>{throw new Error('denied');});assert.equal(result.saved,false);assert.deepEqual(result.records,[record]);});
test('clear succeeds for only the history key and failure reports false',()=>{
 let removed='';assert.equal(clearSavedHistory(()=>({getItem:()=>null,setItem(){},removeItem(k){removed=k;}})),true);assert.equal(removed,storageKey);
 assert.equal(clearSavedHistory(()=>{throw Error('denied');}),false);
});
test('stored latest records merge and export has exact fixed positions and orientation',()=>{
 let raw=JSON.stringify([{...record,id:'other-tab'}]);const result=saveReading(record,[],()=>({getItem:()=>raw,setItem(_k,v){raw=v;},removeItem(){}}));assert.equal(result.saved,true);assert.equal(result.records.length,2);assert.deepEqual(JSON.parse(exportSavedHistory(result.records)),JSON.parse(raw));
});
