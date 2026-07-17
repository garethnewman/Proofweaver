export const clamp=(n,min=0,max=100)=>Math.min(max,Math.max(min,n));
export function scoreClaim(claim,evidence){
  const linked=evidence.filter(e=>claim.evidence.includes(e.id));
  if(!linked.length)return {score:0,confidence:'Unproven',coverage:0};
  const signed=linked.reduce((sum,e)=>sum+(e.stance==='supports'?1:-1)*e.quality*e.relevance,0);
  const weight=linked.reduce((sum,e)=>sum+e.quality*e.relevance,0)||1;
  const coverage=clamp(linked.length*24);
  const score=clamp(Math.round(50+50*signed/weight));
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
