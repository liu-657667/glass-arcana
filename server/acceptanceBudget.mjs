export const MAX_BYTES=6000, FRAMING_RESERVE=2000, MAX_REQUESTS=10, RESERVATION_USD=.0018;
// UTF-8 bytes bound text tokens conservatively; complete JSON is counted, plus 2000
// reserved framing tokens. Plain text only, <=13 messages, no tools/images/files.
export function guardedTransport({transport,persist,ledger}){
 return async(url,options)=>{
  const b=JSON.parse(options.body);const bytes=Buffer.byteLength(options.body,'utf8');
  if(url!=='https://api.openai.com/v1/responses'||b.model!=='gpt-6-luna'||b.service_tier!=='default'||b.reasoning?.effort!=='none'||b.max_output_tokens!==2000||b.store!==false||b.tools||b.input.length>13)throw Error('acceptance_configuration');
  if(bytes>MAX_BYTES)throw Error('acceptance_input_limit');
  if(ledger.requests.length>=MAX_REQUESTS||(ledger.requests.length+1)*RESERVATION_USD>.10)throw Error('acceptance_budget');
  const row={number:ledger.requests.length+1,requestBytes:bytes,inputTokenUpperBound:bytes+FRAMING_RESERVE,reservedUSD:RESERVATION_USD,state:'reserved'};ledger.requests.push(row);persist();
  try{row.state='sent';persist();const response=await transport(url,options);row.httpStatus=response.status;row.state='response_headers';persist();return response;}catch{row.state='transport_failed_or_cancelled';persist();throw Error('transport_failed');}
 };
}
