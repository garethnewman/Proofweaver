export const starter={
  question:'Should Northstar launch a four-day workweek pilot?',
  context:'Leadership needs a defensible recommendation before the Q3 planning meeting.',
  owner:'Alex Morgan',
  reviewDate:'2026-10-16',
  createdAt:'2026-07-17T20:00:00.000Z',
  summary:'A contained pilot is promising if Northstar protects customer coverage and treats incident response as an explicit stop condition.',
  gap:'Add weekend and Friday incident-volume data to test whether rotating coverage is sufficient.',
  guardrail:'Pause the pilot if median Friday escalation time exceeds the current threshold in two consecutive reporting periods.',
  sourceText:'Internal operations review (May 2026): Tickets resolved per hour rose 11% during the six-month support-team trial; voluntary attrition fell.\n\nCustomer success synthesis (June 2026): Three of twelve enterprise accounts expect named Friday coverage.\n\nPeople analytics (Q1-Q2 2026): Flexible-work language increased qualified applicants by 18%.\n\nEngineering incident #4821: Reduced Friday staffing delayed escalation by 23 minutes.\n\nFinance scenario model v3: A rotating on-call layer costs 1.7% of projected productivity gain.',
  evidence:[
    {id:'e1',title:'Six-month support-team trial',source:'Internal operations review · May 2026',quality:.9,relevance:.95,stance:'supports',provenance:'demo',note:'Tickets resolved per hour rose 11%; voluntary attrition fell.'},
    {id:'e2',title:'Enterprise customer coverage interviews',source:'Customer success synthesis · June 2026',quality:.76,relevance:.88,stance:'challenges',provenance:'demo',note:'Three of twelve accounts expect named Friday coverage.'},
    {id:'e3',title:'Recruiting funnel analysis',source:'People analytics · Q1–Q2 2026',quality:.84,relevance:.8,stance:'supports',provenance:'demo',note:'Flexible-work language increased qualified applicants by 18%.'},
    {id:'e4',title:'Peak incident retrospective',source:'Engineering incident #4821',quality:.93,relevance:.7,stance:'challenges',provenance:'demo',note:'Friday staffing delayed escalation by 23 minutes.'},
    {id:'e5',title:'Rotating coverage cost model',source:'Finance scenario model · v3',quality:.72,relevance:.9,stance:'supports',provenance:'demo',note:'A rotating on-call layer costs 1.7% of projected productivity gain.'}
  ],
  claims:[
    {id:'c1',text:'A pilot will improve focus and retention without reducing output.',weight:1,evidence:['e1','e3']},
    {id:'c2',text:'Customer coverage can be preserved with a rotating Friday crew.',weight:1.2,evidence:['e2','e5']},
    {id:'c3',text:'Operational risk remains within the current incident tolerance.',weight:1.1,evidence:['e4','e5']}
  ],
  options:[
    {id:'o1',name:'Run a 12-week pilot',desc:'Two teams, rotating Friday coverage, explicit stop conditions.',claims:['c1','c2','c3'],feasibility:1.16},
    {id:'o2',name:'Keep the current schedule',desc:'Revisit after the next engagement survey.',claims:['c3'],feasibility:.92},
    {id:'o3',name:'Offer individual flexibility',desc:'Manager-approved compressed weeks, no coordinated pilot.',claims:['c1','c2'],feasibility:.88}
  ]
};

export function hydrateAnalysis(raw,question,context,sourceText,metadata={}){
 const evidence=raw.evidence.map((e,i)=>({...e,id:`e${Date.now()}${i}`,note:e.excerpt,provenance:'ai'}));
 const claims=raw.claims.map((c,i)=>({id:`c${Date.now()}${i}`,text:c.text,weight:c.weight,evidence:c.evidenceIndexes.map(x=>evidence[x]?.id).filter(Boolean)}));
 const options=raw.options.map((o,i)=>({id:`o${Date.now()}${i}`,name:o.name,desc:o.description,claims:o.claimIndexes.map(x=>claims[x]?.id).filter(Boolean),feasibility:o.feasibility}));
 return{question,context,sourceText,owner:metadata.owner||'',reviewDate:metadata.reviewDate||'',createdAt:new Date().toISOString(),summary:raw.summary,gap:raw.gap,guardrail:raw.guardrail,evidence,claims,options};
}
