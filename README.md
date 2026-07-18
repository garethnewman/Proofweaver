# Proofweaver

> **Make decisions you can defend.**

Proofweaver turns reports, notes, research, and interviews into an auditable evidence map. GPT-5.6 extracts verbatim evidence, competing claims, contradictions, and decision options; a deterministic scoring engine then makes the recommendation transparent and reproducible.

![Proofweaver hero](assets/proofweaver-hero.png)

## Why it exists

Teams rarely lack information. They lack a visible chain between information and action. Important decisions get buried in decks and chat threads, counterevidence disappears, and confidence becomes a matter of presentation. Proofweaver makes the reasoning inspectable without pretending that AI should make the final decision.

## What works

- Paste source material or upload TXT, Markdown, CSV, and JSON files
- Analyze sources with GPT-5.6 through the Responses API and strict structured outputs
- Preserve short, verbatim evidence excerpts instead of invented citations
- Map supporting and challenging evidence to falsifiable claims
- Surface the weakest assumption and missing evidence
- Add human-supplied evidence and counterexamples after analysis
- Distinguish GPT-5.6-extracted, human-added, and demo evidence provenance
- Compare options with a transparent deterministic score
- Require an accountable owner, outcome-review date, counterevidence, and guardrail before a decision is fully ready
- Export an audit-ready decision record with its complete evidence ledger
- Save the workspace locally and preserve the review state
- Explore a complete one-click demo without an API key

## Run locally

Requirements: Node.js 20+ and, for live analysis, an OpenAI API key with GPT-5.6 access.

```bash
npm install
copy .env.example .env.local
# Edit .env.local and set OPENAI_API_KEY
npm run dev
```

Open `http://localhost:5173`. The key is read only by the local server and is never sent to browser storage. Without a key, choose **Explore demo instead**.

### Verification

```bash
npm test
npm run build
```

## Judge testing path

1. Select **New decision**.
2. Enter a decision question and paste or upload source material.
3. Select **Analyze with GPT-5.6**.
4. Inspect claims and their linked supporting or challenging excerpts.
5. Follow **Inspect weak point** to the riskiest assumption.
6. Add evidence manually to demonstrate human correction.
7. Check the readiness gates, compare ranked options, and export the evidence ledger.

If live credentials are unavailable, select **Explore demo instead**; every downstream review, scoring, editing, and export feature remains testable.

## How it works

The browser sends the decision question and source text to the server-side `/api/analyze` route. GPT-5.6 returns strict structured JSON containing evidence, claims, options, an evidence gap, and a guardrail. The prompt requires evidence excerpts to be verbatim and prohibits unsupported facts.

The model does **interpretation**; deterministic code does **ranking**. Evidence is weighted by quality, relevance, and whether it supports or challenges a claim. Linked evidence produces a claim score; claim importance and option feasibility produce the final option score. Every input remains visible in the interface.

## Built with Codex and GPT-5.6

Codex with GPT-5.6 was the primary product-design and engineering collaborator from the first line of code. It helped:

- translate the judging rubric into product constraints;
- choose and pressure-test the concept;
- design the product experience and visual system;
- implement the React interface and deterministic scoring engine;
- integrate the GPT-5.6 Responses API with strict structured output;
- build a server-side credential boundary, demo fallback, and human review flow;
- write tests, run production builds, and conduct rendered browser QA;
- create the project artwork and submission package.

The entrant retained the defining product decisions: focus on decision quality rather than generic chat, require verbatim source evidence, keep ranking deterministic, make uncertainty prominent, preserve human correction, and provide a credential-free judge path.

Core build session:

```text
019f71f9-3606-7603-b0bd-2a61c42e0649
```

## Architecture

```text
React client
  ├─ local workspace persistence
  ├─ evidence/claim/option review
  └─ deterministic scoring + brief export
          │
          ▼
Server-side /api/analyze
          │
          ▼
OpenAI Responses API · GPT-5.6 · strict JSON schema
```

- `src/main.jsx` — interactive product workflow
- `src/engine.js` — deterministic scoring
- `src/brief.js` — audit-ready decision record generation
- `src/data.js` — demo fixture and API-result hydration
- `api/analyze.js` — GPT-5.6 structured-analysis endpoint
- `vite.config.js` — local server middleware

## Privacy and limitations

- The API key stays server-side.
- New analysis sends supplied source text to the OpenAI API.
- Workspaces are stored in localStorage on that device.
- Scores structure judgment; they are not objective truth.
- Users should verify excerpts and adjust model-generated assessments.

## Deployment

The repository follows Vercel's `/api` function convention. Configure `OPENAI_API_KEY` as a server-side environment variable. Never expose it through a `VITE_`-prefixed variable.

The commercial product thesis, ICP, pricing hypothesis, retention loop, defensibility, and production architecture boundary are documented in [PRODUCT.md](PRODUCT.md).

## License

MIT
