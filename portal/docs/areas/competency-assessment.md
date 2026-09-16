---
title: Capability & Assessment — Proof of Capability
description: Human-readable summary of Proof of Capability architecture (ADR-0016 approved)
---

# Proof of Capability

<p class="present-more"><a href="/proof-of-capability">← Stakeholder presentation: Proof of Capability</a></p>

<div class="planned-banner">
  <strong>APPROVED Core architecture; operating pack remains DRAFT</strong><br/>
  Dual assessment is APPROVED in principle (ADR-0003). ADR-0016 APPROVED defines how capability evidence becomes trustworthy (GAP-010 Closed).
  Operating detail drafted as POC-001 / POC-FRM-* (DRAFT) for GAP-038–044 — proposed, not closed.
  Competency Graph schema remains open (GAP-009).
</div>

::: tip Portal notice
Source Markdown documents remain authoritative. This page explains the model in plain language and does **not** duplicate the full ADR.
:::

## Two complementary forms of attainment

| | What it shows |
|---|---|
| **Recognised academic attainment** | Country-recognised curriculum, exams or qualifications as applicable |
| **Proof of Capability** | Verified evidence of what the learner has actually demonstrated |

Prefer: **recognised academic credential + Tarbiyat Proof of Capability**.  
Do **not** treat Proof of Capability as a legal “dual credential” unless a competent authority later recognises it.

## What Proof of Capability is (and is not)

It is a structured record of **Capability Claims** backed by evidence, context, contribution honesty, verification and provenance.

It is **not** a CV, marksheet, scrapbook, participation-badge wall or AI-written biography.

**Hard rule:** participation alone is not Proof of Capability.

## Four things that are not the same

1. What a student was **taught**  
2. What a student **submitted**  
3. What a student can actually **demonstrate**  
4. What an external stakeholder found **useful**

## Illustrative capability card

::: warning Illustrative — not a real student record
Fictional example for architecture communication only. No personal data.
:::

| Field | Example |
|---|---|
| **Capability Claim** | Can design and test a simple environmental sensing system under defined constraints |
| **Direct evidence** | Prototype photos; test log; short oral defence notes |
| **Context** | Partner-informed water-quality Mission; team of three; normal Educator support |
| **Contribution** | Sensing circuit + test plan (Contribution Record); teammate owned enclosure design |
| **Independence** | Mostly independent after briefing |
| **Verification** | Educator + Practitioner (multi-source) |
| **AI assistance** | Used AI for bibliography suggestions; disclosed; learner explained and verified methods |
| **Status** | Consistent (dated) |

## Trust rules in one glance

- Team success ≠ every member’s capability  
- Company praise ≠ automatic certification  
- Failed prototype may still be strong evidence  
- Unexplained AI output does not earn full credit  
- Confidential work can use **sanitised verified evidence**  
- No single universal capability score  
- AI may organise evidence; humans remain accountable  
- Counselling / safeguarding records are **not** in the Profile

## Full decision record

| Artefact | Status | Link |
|---|---|---|
| Proof of Capability / Capability Evidence | APPROVED | [ADR-0016](/decisions/adr-0016) |
| PoC Operating Standard | DRAFT | [POC-001](/areas/poc-operating-standard) |
| PoC Operating Templates | DRAFT | [POC-TPL-001](/areas/poc-operating-templates) |
| Discover Exposure Evidence ≠ PoC Claims | UNDER REVIEW | [ADR-0017](/decisions/adr-0017) |
| Formal Recognition + parallel capability layer | APPROVED | [ADR-0003](/decisions/adr-0003) |
| Faculty multi-stream assessment | UNDER REVIEW | [ADR-0015](/decisions/adr-0015) |
| Contribution Records / sanitised evidence | UNDER REVIEW | [ADR-0014](/decisions/adr-0014) |
| Assessment section | DRAFT | `docs/05-assessment/` |

## Related gaps

- [GAP-010](/gaps#gap-010) — Proof of Capability Profile (Closed — resolved by ADR-0016 APPROVED)
- [GAP-009](/gaps#gap-009) — Competency Graph specification (remains open)
- [GAP-045](/gaps#gap-045) — Discover meaningful-exposure package (proposed resolution via ADR-0017 — not closed)
- [GAP-038](/gaps#gap-038)–[GAP-044](/gaps#gap-044) — PoC ops cluster (POC-001 DRAFT proposed — not closed; GAP-043 research Open)
- [GAP-002](/gaps#gap-002) — Malaysia exam/recognition mapping

See also: [Formal Recognition](/areas/formal-recognition)
