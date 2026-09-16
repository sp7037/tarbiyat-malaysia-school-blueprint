# Proof of Capability Operating Templates

| Field | Value |
|---|---|
| Document ID | `POC-TPL-001` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-16` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `POC-001` DRAFT; `ADR-0016` APPROVED |
| Related gaps | GAP-038–044 (proposed via POC-001 pack — not closed) |

> **Operational educational records — not legal credentials, contracts or software schemas.**  
> Governing architecture is `ADR-0016` (`APPROVED`). Forms remain `DRAFT`. Completing a form does **not** self-certify capability.

---

## Design principle

| Prefer | Avoid |
|---|---|
| One Claim Record with embedded evidence/provenance | Separate form for every ADR-0016 noun |
| Conditional Defence / Challenge only when triggered | Panels and appeals for ordinary developmental work |
| Link to MIS-FRM-005-C when Mission already recorded contribution | Duplicate IP ownership fields |
| Selective significant claims | Claim-per-lesson paperwork |

---

## Pack structure

| ID | Template | Classification | Path |
|---|---|---|---|
| **POC-FRM-001** | Capability Claim Record (includes evidence + provenance) | **CORE RECORD** for Meaningful / Significant / Externally visible claims | [`templates/POC-FRM-001-capability-claim-record.md`](templates/POC-FRM-001-capability-claim-record.md) |
| **POC-FRM-002** | Contribution Record | **CONDITIONAL** — substantial collaborative / AI-material / contested authorship | [`templates/POC-FRM-002-contribution-record.md`](templates/POC-FRM-002-contribution-record.md) |
| **POC-FRM-003** | Verification Record | **CORE RECORD** when a claim is verified | [`templates/POC-FRM-003-verification-record.md`](templates/POC-FRM-003-verification-record.md) |
| **POC-FRM-004** | Capability Defence Record | **CONDITIONAL** — significant / high-stakes / independence / AI / team risk | [`templates/POC-FRM-004-capability-defence-record.md`](templates/POC-FRM-004-capability-defence-record.md) |
| **POC-FRM-005** | Claim Challenge / Correction Record | **CONDITIONAL** — when challenge or material correction raised | [`templates/POC-FRM-005-claim-challenge-correction-record.md`](templates/POC-FRM-005-claim-challenge-correction-record.md) |

---

## Minimum operating path

1. Curate selective claim → **POC-FRM-001**
2. If collaborative / material AI → **POC-FRM-002** (or link MIS-FRM-005-C)
3. Verify proportionally → **POC-FRM-003**
4. If significant → **POC-FRM-004** as required by `POC-001`
5. If disputed → **POC-FRM-005**

Ordinary Mission learning may produce reusable artefacts **without** opening a Claim Record.
