# Devpost submission kit

## Project name

Proofweaver

## Tagline

Make decisions you can defend.

## Category

Work and Productivity

## Elevator pitch

Turns scattered research into transparent, evidence-backed decisions by extracting claims, exposing contradictions, and showing exactly why each recommendation was made.

## About the project

### Inspiration

Important decisions rarely fail because teams have no information. They fail because the reasoning is scattered across reports, spreadsheets, interviews, and conversations. By the time a recommendation reaches a decision-maker, the evidence behind it is often invisible.

We built **Proofweaver** to make that reasoning inspectable. It connects evidence to claims, claims to possible actions, and actions to a clear recommendation—while preserving counterevidence and uncertainty.

### What it does

Proofweaver lets a user paste or upload source material and describe a decision. GPT-5.6 extracts short verbatim excerpts, falsifiable claims, contradictions, decision options, an evidence gap, and an outcome guardrail. Users can inspect every link, add evidence the model missed, assign an accountable owner and outcome-review date, pass explicit readiness gates, compare options, and export an audit-ready evidence ledger.

Instead of presenting an unexplained AI answer, Proofweaver separates model interpretation from deterministic ranking. Every score can be traced back to visible evidence.

### How we built it

We created Proofweaver with **Codex and GPT-5.6** as our primary product-design and engineering collaborator. Starting with an empty repository, Codex helped pressure-test the concept, design the product, implement the React experience and scoring engine, integrate the GPT-5.6 Responses API with strict structured output, write tests, run browser QA, create artwork, and prepare the submission.

The human entrant made the defining product calls: focus on decision quality rather than generic chat, require verbatim evidence, keep ranking deterministic, expose uncertainty, preserve human correction, and make the complete review path testable without credentials.

### Challenges

The largest challenge was balancing simplicity with intellectual honesty. A decision tool can create false confidence by reducing a complicated question to one number. We addressed that by preserving counterevidence, separating confidence from score, highlighting the weakest claim, making evidence gaps visible, and adding measurable guardrails.

Another challenge was making AI analysis auditable. The structured prompt prohibits invented facts and requires each evidence excerpt to be copied from the submitted material. Server-side validation rejects any excerpt that cannot be found in the source. The interface keeps those excerpts and their AI/human provenance visible throughout review.

### What we learned

We learned that AI is most valuable in consequential reasoning when it improves the structure and visibility of human judgment—not when it merely produces an authoritative answer. We also learned that uncertainty can be a feature: showing what is missing tells a team what to investigate next.

### What's next

Next we will add native PDF extraction, passage-level source navigation, collaborative dissent and approval, and outcome tracking that compares decisions with what actually happened.

## Built with

Codex, GPT-5.6, OpenAI Responses API, Structured Outputs, React, Vite, JavaScript, Vitest, Lucide React, HTML5, CSS3, LocalStorage, Vercel Functions, Human-in-the-Loop, Explainable AI

## Testing instructions

1. Run `npm install`.
2. Copy `.env.example` to `.env.local`, set `OPENAI_API_KEY`, and run `npm run dev`.
3. Select **New decision**, enter a question and source material, and analyze it.
4. Inspect claims and their linked supporting and challenging excerpts.
5. Add missed evidence manually to demonstrate human correction.
6. Compare options and export the decision brief.
7. Without credentials, choose **Explore demo instead** for the full downstream review path.

## Two-minute demo script

**0:00–0:15 — Hook**
“The most expensive sentence in business is: ‘the deck looked convincing.’ Proofweaver makes the reasoning behind a decision inspectable.”

**0:15–0:40 — Real analysis**
Select **New decision**, show the question and source material, then run GPT-5.6 analysis. Explain that the key stays server-side and the response follows a strict schema.

**0:40–1:10 — Evidence map**
Show verbatim excerpts flowing into claims and options. Select a claim to show both support and counterevidence. Follow **Inspect weak point** to the missing evidence.

**1:10–1:30 — Human control**
Add a counterexample manually. Explain that GPT-5.6 interprets the material while transparent code performs the final ranking.

**1:30–1:50 — Decision**
Open **Options**, then **Decision brief**. Show the recommendation, evidence gap, measurable guardrail, and export.

**1:50–2:00 — Close**
“Proofweaver doesn't make decisions for people. It helps people defend—and improve—the decisions they make.”

## Submission links

- Repository: https://github.com/garethnewman/Proofweaver
- Live demo: `TODO`
- Public YouTube video: `TODO`
- Codex Session ID: `019f71f9-3606-7603-b0bd-2a61c42e0649`
