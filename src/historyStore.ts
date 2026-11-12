import {parseHistory,storageKey,type Reading} from './engine';
type Store=Pick<Storage,'getItem'|'setItem'|'removeItem'>;
export function saveReading(reading:Reading,current:Reading[],getStore:()=>Store){
 let latest=current;try{latest=parseHistory(getStore().getItem(storageKey));}catch{}
 const records=[reading,...latest].slice(0,50);
 try{getStore().setItem(storageKey,JSON.stringify(records));return {records,saved:true};}catch{return {records,saved:false};}
}
export function clearSavedHistory(getStore:()=>Store){try{getStore().removeItem(storageKey);return true;}catch{return false;}}
export function exportSavedHistory(records:Reading[]){return JSON.stringify(records,null,2);}
