# 08 — People and Governance

| Field | Value |
|---|---|
| Document ID | `SEC-08` |
| Version | `0.4.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-15` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | PROJECT_RULES.md, MASTER_INDEX.md; ADR-0015 UNDER REVIEW; `PEO-001` / `PEO-002` / `PEO-003` DRAFT |
| Source documents | User brief (2026-09-13); GAP-033 / GAP-035 / GAP-036 resolutions (2026-09-15) |

## Purpose

Role typology and governance patterns (non-country). Core faculty architecture is drafted in ADR-0015 (`UNDER REVIEW`). **Practitioner authorisation** is in `PEO-001`. **Practitioner currency / re-authorisation** is in `PEO-002`. **Faculty and practitioner development** is in `PEO-003`.

## Controlled documents

| ID | Path | Status | Notes |
|---|---|---|---|
| PEO-001 | `PRACTITIONER_AUTHORISATION_AND_ONBOARDING.md` | DRAFT | Practitioner Authorisation and Onboarding — proposed GAP-033 resolution (not closed) |
| PEO-002 | `PRACTITIONER_CURRENCY_AND_REAUTHORISATION.md` | DRAFT | Practitioner Currency and Re-authorisation — proposed GAP-035 resolution (not closed) |
| PEO-003 | `FACULTY_AND_PRACTITIONER_DEVELOPMENT.md` | DRAFT | Faculty and Practitioner Development — proposed GAP-036 resolution (not closed) |
| PEO-FRM-001 | `templates/PEO-FRM-001-faculty-practitioner-development-plan.md` | DRAFT | Lightweight development plan / record (not a MIS form) |

## Related Mission templates

| ID | Path | Notes |
|---|---|---|
| MIS-FRM-002 | `docs/06-missions-and-production/templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md` | Onboarding acknowledgement |
| MIS-FRM-007 | `docs/06-missions-and-production/templates/MIS-FRM-007-practitioner-authorisation-record.md` | Scoped authorisation record |
| MIS-FRM-008 | `docs/06-missions-and-production/templates/MIS-FRM-008-practitioner-currency-review.md` | Currency / re-authorisation review |

## Architecture dependency

ADR-0015 (UNDER REVIEW) → `PEO-001` (who is authorised) ↔ `PEO-003` (how capability is developed) ↔ `PEO-002` (remains current). Records: `MIS-FRM-002` / `007` / `008` + `PEO-FRM-001`. These interact; they are **not** a one-way promotion ladder. Country registration remains `GAP-037`; ratios `GAP-032`; Mentor caseloads `GAP-034`.

## Planned child documents (not yet created)

- Overview aligning to ADR-0015 (after human review direction)
- Safeguarding & residential house-staff operating standards (country/project where applicable)
- Open questions linked to `GAP_REGISTER.md` (GAP-032, 034, 037)
