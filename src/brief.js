import{scoreClaim}from'./engine';
export function buildDecisionBrief(data,ranked,readiness){
 const top=ranked[0],owner=data.owner||'Unassigned',review=data.reviewDate||'Not scheduled';
 return `PROOFWEAVER DECISION RECORD

QUESTION
${data.question}

ACCOUNTABILITY
Decision owner: ${owner}
Outcome review: ${review}
Readiness: ${readiness.score}%

RECOMMENDATION
${top.name} — ${top.score}/100
${top.desc}

EXECUTIVE SUMMARY
${data.summary}

RATIONALE
${data.claims.map(c=>`• ${c.text} (${scoreClaim(c,data.evidence).score}/100)`).join('\n')}

EVIDENCE GAP
${data.gap}

GUARDRAIL
${data.guardrail}

EVIDENCE LEDGER
${data.evidence.map((e,i)=>`${i+1}. [${(e.provenance||'unknown').toUpperCase()} · ${e.stance.toUpperCase()}] ${e.title}\n   Source: ${e.source}\n   “${e.note}”\n   Quality ${Math.round(e.quality*100)} · Relevance ${Math.round(e.relevance*100)}`).join('\n\n')}

READINESS GATES
${readiness.gates.map(g=>`${g.pass?'✓':'○'} ${g.label}`).join('\n')}
`;
}
