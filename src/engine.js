export const clamp=(n,min=0,max=100)=>Math.min(max,Math.max(min,n));
export function scoreClaim(claim,evidence){
  const linked=evidence.filter(e=>claim.evidence.includes(e.id));
  if(!linked.length)return {score:0,confidence:'Unproven',coverage:0};
  const signed=linked.reduce((sum,e)=>sum+(e.stance==='supports'?1:-1)*e.quality*e.relevance,0);
  const coverage=clamp(linked.length*24);
  // Divide by the theoretical maximum evidence weight so weak sources cannot
  // produce a perfect score merely because every linked item points one way.
  const score=clamp(Math.round(50+50*signed/linked.length));
  const confidence=coverage>70?'High':coverage>38?'Medium':'Low';
  return {score,confidence,coverage};
}
export function decisionScore(option,claims,evidence){
  const used=claims.filter(c=>option.claims.includes(c.id));
  if(!used.length)return 0;
  const evidenceScore=used.reduce((s,c)=>s+scoreClaim(c,evidence).score*c.weight,0)/used.reduce((s,c)=>s+c.weight,0);
  return clamp(Math.round(evidenceScore*(option.feasibility??1)));
}
export function weakestClaim(claims,evidence){return [...claims].sort((a,b)=>scoreClaim(a,evidence).score-scoreClaim(b,evidence).score)[0]}
export function readinessReport(data){
 const gates=[
  {id:'sources',label:'At least three evidence sources',pass:data.evidence.length>=3},
  {id:'counter',label:'Counterevidence is represented',pass:data.evidence.some(e=>e.stance==='challenges')},
  {id:'links',label:'Every claim has linked evidence',pass:data.claims.length>0&&data.claims.every(c=>c.evidence.length>0)},
  {id:'owner',label:'A decision owner is accountable',pass:Boolean(data.owner?.trim())},
  {id:'review',label:'An outcome review date is set',pass:Boolean(data.reviewDate)},
  {id:'guardrail',label:'A measurable guardrail is defined',pass:Boolean(data.guardrail?.trim())}
 ];
 return{gates,score:Math.round(gates.filter(g=>g.pass).length/gates.length*100),ready:gates.every(g=>g.pass)};
}
