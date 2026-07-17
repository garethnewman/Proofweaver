# Devpost submission kit

## Project name

Proofweaver

## Tagline

Make decisions you can defend.

## Track

Work and Productivity

## One-line pitch

Proofweaver turns scattered evidence into an inspectable chain from source to claim to decision—so teams can find weak assumptions before they become expensive mistakes.

## Description

Important decisions are often made from a collage of documents, dashboards, interviews, and opinions. The final slide may look confident, but the reasoning underneath is invisible. Proofweaver gives teams a shared evidence workbench.

Every source has quality, relevance, and a stance. Sources connect to explicit claims; claims connect to candidate options. A deterministic scoring engine weighs support and counterevidence, surfaces the weakest assumption, ranks the available paths, and turns the result into a concise decision brief with a measurable guardrail.

The included scenario asks whether a company should run a four-day-workweek pilot. In under a minute, a judge can inspect evidence, challenge individual claims, compare options, identify the incident-response gap, and export the resulting recommendation. The app is local-first and works without an account, API key, backend, or setup beyond `npm install`.

Proofweaver is deliberately not a black-box answer generator. It makes uncertainty visible and keeps humans responsible for the decision. That creates a credible foundation for strategy, policy, procurement, hiring, product bets, and other choices where being able to explain *why* matters as much as the answer.

## How we built it

We began with a clean repository during Build Week. Codex and GPT-5.6 served as the product, design, and engineering collaborator: translating the judging rubric into constraints, pressure-testing the concept, implementing the evidence engine and responsive interface, writing tests and realistic fixtures, and driving build and rendered-browser QA.

The human entrant made the defining calls: focus on decision quality rather than generic chat, keep scoring deterministic and inspectable, make the demo instant and credential-free, and use a realistic scenario with conflicting evidence. The repository README documents the collaboration and provenance in detail, and the submitted Codex Session ID contains the core build thread.

## Accomplishments

- A complete, coherent product experience rather than a static proof of concept
- A tested scoring engine that accounts for evidence quality, relevance, stance, claim weight, and option feasibility
- Instant judge testing with realistic data and no credentials
- Responsive interaction design, local persistence, evidence search, claim inspection, option comparison, and brief export
- An explicit evidence-gap workflow that avoids false certainty

## What’s next

The next version will ingest source documents, preserve citations down to source passages, support team review and dissent, and use GPT-5.6 to propose claims and find contradictions while keeping the deterministic evidence graph as the auditable system of record.

## Testing instructions

1. Run `npm install && npm run dev` and open the displayed URL.
2. Select each claim in the middle column to inspect supporting and challenging evidence.
3. Choose **Review weak point** to jump to the riskiest claim.
4. Open **Options** to compare the ranked paths.
5. Open **Decision brief** and export the recommendation.
6. Run `npm test` and `npm run build` to verify the engine and production bundle.

## Three-minute demo script

**0:00–0:20 — Hook**  
“The most expensive sentence in business is: ‘the deck looked convincing.’ Proofweaver makes the reasoning behind a decision inspectable.” Show the overview and question.

**0:20–0:55 — Evidence map**  
Point out the three columns. Explain that evidence carries quality, relevance, and a support/challenge stance; claims aggregate those signals; options are ranked from the resulting case.

**0:55–1:25 — Stress test**  
Select the customer-coverage claim, then the incident-risk claim. Show the linked counterevidence and the evidence-gap callout. Explain that Proofweaver rewards surfacing uncertainty instead of hiding it.

**1:25–1:50 — Decision**  
Open Options. Show why the contained pilot beats both doing nothing and unmanaged individual flexibility. Emphasize the explicit feasibility adjustment and stop conditions.

**1:50–2:15 — Brief**  
Open Decision brief. Read the recommendation and guardrail, then export it. The reasoning is now useful outside the app.

**2:15–2:45 — Codex collaboration**  
Show the README and repository history. Explain that Codex and GPT-5.6 took the project from empty repository to concept, engine, interface, tests, visual QA, and submission package in the core project thread.

**2:45–3:00 — Close**  
“Proofweaver doesn’t make decisions for people. It makes sure people can defend—and improve—the decisions they make.”

## Submission placeholders

- Public YouTube demo URL: `TODO`
- Repository URL: `TODO`
- Live demo URL: `TODO` (recommended: deploy the `dist` build)
- `/feedback` Codex Session ID: `TODO` (submit the core build thread)
