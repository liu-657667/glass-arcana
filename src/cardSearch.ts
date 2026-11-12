import type {Card} from './cards';
import {auditFor} from './audit';
import {cardEnglish} from './cardEnglish';
/** Search the same current themes/symbols/prompts the gallery displays, in both locales. */
export function matchesCardSearch(card:Card, query:string):boolean {
 const a=auditFor(card.id);
 const fields=a?[...Object.values(a.modern.theme),...Object.values(a.iconography.textChecked),...Object.values(a.modern.uprightPrompt)]:[card.theme,card.symbol,card.prompt,...Object.values(cardEnglish[card.id])];
 return [card.name,card.english,...fields].join(' ').toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
}
