export const starter={
  question:'Should Northstar launch a four-day workweek pilot?',
  context:'Leadership needs a defensible recommendation before the Q3 planning meeting.',
  evidence:[
    {id:'e1',title:'Six-month support-team trial',source:'Internal operations review · May 2026',quality:.9,relevance:.95,stance:'supports',note:'Tickets resolved per hour rose 11%; voluntary attrition fell.'},
    {id:'e2',title:'Enterprise customer coverage interviews',source:'Customer success synthesis · June 2026',quality:.76,relevance:.88,stance:'challenges',note:'Three of twelve accounts expect named Friday coverage.'},
    {id:'e3',title:'Recruiting funnel analysis',source:'People analytics · Q1–Q2 2026',quality:.84,relevance:.8,stance:'supports',note:'Flexible-work language increased qualified applicants by 18%.'},
    {id:'e4',title:'Peak incident retrospective',source:'Engineering incident #4821',quality:.93,relevance:.7,stance:'challenges',note:'Friday staffing delayed escalation by 23 minutes.'},
    {id:'e5',title:'Rotating coverage cost model',source:'Finance scenario model · v3',quality:.72,relevance:.9,stance:'supports',note:'A rotating on-call layer costs 1.7% of projected productivity gain.'}
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
