export type ArtLoadState='responsive'|'fallback'|'unavailable';
export function nextArtLoadState(state:ArtLoadState):ArtLoadState{return state==='responsive'?'fallback':'unavailable';}
export function artFailureMessage(locale:'zh'|'en'){return locale==='zh'?'图片暂时无法加载，牌面与解读不受影响。':'Image unavailable. Your card and reading are unchanged.';}
