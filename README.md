# Proofweaver

**Make decisions you can defend.** Proofweaver is a local-first evidence workbench that connects sources to claims, exposes weak assumptions, compares options, and exports a concise decision brief.

## Why it exists

Teams rarely lack information; they lack a visible chain between information and action. Important decisions get buried in decks and chat threads, counterevidence disappears, and confidence becomes a matter of presentation. Proofweaver makes the reasoning inspectable.

## Run it

```bash
npm install
npm run dev
```

Open the displayed local URL. The included scenario is fully interactive and requires no account, API key, or backend. Use `npm test` for the reasoning-engine tests and `npm run build` for a production bundle.

## What to test

1. Select claims in the middle column and inspect their supporting and challenging evidence.
2. Follow the weak-point callout to the riskiest assumption.
3. Compare ranked options under **Options**.
4. Open **Decision brief** and export it as a text artifact.
5. Search the evidence set or reset the demo.

## Built with Codex and GPT-5.6

Codex was the primary engineering and product-design collaborator for this project. Starting from the hackathon rules and a clean repository, we used it to:

- translate the judging rubric into product constraints: instant testability, a coherent end-to-end experience, meaningful technical behavior, and explicit impact;
- choose and pressure-test the product concept, information architecture, visual system, and demonstration scenario;
- implement the weighted evidence engine, responsive React interface, local persistence, export flow, fixtures, and unit tests;
- continuously run the build and test suite, inspect the rendered product, and refine defects and presentation quality.

The entrant retained the key product decisions: build a focused decision tool instead of a generic AI wrapper, make the reasoning visible rather than magical, require zero credentials for judging, and ship a realistic scenario rather than an empty canvas. GPT-5.6 and Codex accelerated the path from those decisions to a polished, tested implementation.

## New work and provenance

This repository was created from an empty Git repository during the OpenAI Build Week submission period. All product code, design, fixtures, tests, and documentation are new hackathon work. The submitted `/feedback` Codex Session ID and dated Git history provide the corresponding build record.

## Architecture

- React + Vite client application
- deterministic weighted-evidence scoring in `src/engine.js`
- localStorage persistence; no user data leaves the browser
- text brief export using browser-native Blob APIs
- Vitest unit tests for scoring, weighting, and weak-point discovery

## License

MIT
