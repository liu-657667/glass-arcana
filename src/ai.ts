import type {Reading} from './engine';
import type {Locale} from './i18n';
export const aiStatus='NOT CONFIGURED';
export interface AIContext {schemaVersion:1;locale:Locale;question:string;cards:readonly {id:string;reversed:boolean;position:string}[];purpose:'cultural-reflection';}
export interface AIMessage {role:'user'|'assistant';text:string;}
/** Future implementation must keep credentials server-side and require explicit data-sharing consent.
 * Real AI remains unconfigured. The separate opt-in loopback demo is not a model.
 */
export interface AIProvider {readonly name:string;reply(context:AIContext,messages:readonly AIMessage[],signal:AbortSignal):Promise<string>;}
export function buildAIContext(reading:Reading,locale:Locale):AIContext{return Object.freeze({schemaVersion:1 as const,locale,question:reading.question,cards:Object.freeze(reading.draws.map(d=>Object.freeze({...d}))),purpose:'cultural-reflection' as const});}
export function getAIProvider():AIProvider|null{return null;}
