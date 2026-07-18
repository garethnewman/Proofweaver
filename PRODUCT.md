# Proofweaver: commercial product thesis

## Category

Proofweaver is a **decision governance system**, not a generic AI research assistant. It creates an auditable record of consequential decisions: the evidence considered, counterevidence preserved, assumptions made, accountable owner, chosen guardrails, and scheduled outcome review.

## Ideal customer profile

Start with 100–2,000-person companies where decisions cross functions but formal governance is too expensive:

- product and engineering leadership making roadmap or architecture bets;
- operations teams changing staffing, vendors, or service processes;
- procurement and security teams evaluating material vendors;
- people teams piloting policy changes;
- strategy and finance teams preparing investment recommendations.

The economic buyer is a COO, Chief of Staff, VP Operations, or transformation leader. The daily champion is the person who currently assembles decision memos by hand.

## Pain and wedge

The initial wedge is the high-friction decision memo. A team uploads its existing notes and gets an inspectable first draft in minutes. The retention loop is not more generation—it is the **outcome review**: Proofweaver reminds the owner when the review date arrives, captures what happened, and improves the organization's future decision calibration.

## Defensibility

The moat is an organization-specific decision graph and outcome dataset:

1. Which evidence types proved predictive?
2. Which assumptions repeatedly failed?
3. Where did confidence and outcomes diverge?
4. Which teams or decision classes need stronger review gates?

Generic models can draft a memo. They cannot recreate a customer's longitudinal record of decisions and outcomes.

## Packaging and pricing hypothesis

- **Team — £199/month:** 10 users, 50 active decision records, exports, reminders.
- **Business — £799/month:** unlimited viewers, approval workflows, SSO, retention controls, analytics.
- **Enterprise — £20k–£60k/year:** private deployment options, SCIM, audit API, legal/security review, custom retention.

One plausible £1M ARR mix is 80 Business customers at £9,588 ARR plus 8 Enterprise customers at £30k ARR: approximately £1.0M ARR. This is a target model, not a forecast.

## Required production architecture

The hackathon build intentionally proves the decision workflow. A sellable service additionally requires:

- tenant-aware authentication and organization membership;
- encrypted database storage with row-level tenant isolation;
- object storage for source documents and configurable deletion;
- background analysis jobs with idempotency, retries, and cost budgets;
- immutable evidence and approval audit events;
- invitation, role, approval, and dissent workflows;
- scheduled outcome-review notifications;
- billing, plan entitlements, and usage metering;
- SSO/SCIM and regional data controls for larger buyers;
- model evaluations for citation fidelity, contradiction recall, and calibration.

## North-star metric

**Reviewed decisions with a recorded outcome per active organization per month.**

This measures recurring governance value rather than raw AI generations.
