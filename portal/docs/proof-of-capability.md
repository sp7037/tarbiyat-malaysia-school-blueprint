---
title: Proof of Capability
description: Evidence-backed Capability Claims alongside recognised academic attainment
---

# Proof of Capability

<p class="present-lede">
  Tarbiyat records what learners can actually demonstrate — with context, provenance,
  verification and human governance — alongside recognised academic credentials.
</p>

<div class="planned-banner">
  <strong>UNDER REVIEW — Proof of Capability architecture drafted; not approved</strong><br/>
  Dual assessment is approved in principle (ADR-0003). ADR-0016 proposes how capability evidence becomes trustworthy.
  GAP-010 is proposed for resolution via ADR-0016 — not closed.
</div>

## Two complementary forms of attainment

| | What it shows |
|---|---|
| **Recognised academic attainment** | Country-recognised curriculum, exams or qualifications as applicable |
| **Proof of Capability** | Verified evidence of what the learner has actually demonstrated |

Prefer: **recognised academic credential + Tarbiyat Proof of Capability**.

Do **not** treat Proof of Capability as a legal “dual credential” unless a competent authority later recognises it.

## The core idea

Proof of Capability is a structured record of **Capability Claims** backed by:

- direct evidence of work
- context (constraints, team, support)
- honest contribution
- verification by accountable humans
- provenance and status over time

**Hard rule:** participation alone is not Proof of Capability.

## Four things that are not the same

1. What a student was **taught**
2. What a student **submitted**
3. What a student can actually **demonstrate**
4. What an external stakeholder found **useful**

## What Proof of Capability is not

- Not a universal capability score
- Not a badge farm or participation wall
- Not a scrapbook or uncurated media dump
- Not a replacement for legally recognised academic credentials
- Not an AI-written biography of the learner
- Not a Competency Graph schema (graph technology remains a separate open gap)

## Trust at a glance

- Team success ≠ every member’s capability
- External praise ≠ automatic certification
- A failed prototype may still be strong evidence of learning
- Unexplained AI output does not earn full credit
- Confidential work can use sanitised verified evidence
- Humans remain accountable for verification decisions

## Illustrative claim (fiction)

::: warning Illustrative — not a real student record
Architecture communication only. No personal data.
:::

| Field | Example |
|---|---|
| **Capability Claim** | Can design and test a simple environmental sensing system under defined constraints |
| **Evidence** | Prototype photos; test log; short oral defence notes |
| **Context** | Partner-informed water-quality Mission; team of three |
| **Contribution** | Sensing circuit + test plan (teammate owned enclosure) |
| **Verification** | Educator + Practitioner |
| **Status** | Consistent (dated) |

## Related architecture

| Artefact | Status |
|---|---|
| [ADR-0003](/decisions/adr-0003) — Formal Recognition Safety Layer / dual assessment | APPROVED |
| [ADR-0016](/decisions/adr-0016) — Proof of Capability / capability evidence | UNDER REVIEW |
| Competency Graph specification | OPEN — [GAP-009](/gaps#gap-009) |

Blueprint area: [Competency & Assessment](/areas/competency-assessment)
