# 08 — People and Governance

| Field | Value |
|---|---|
| Document ID | `SEC-08` |
| Version | `0.5.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-15` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | PROJECT_RULES.md, MASTER_INDEX.md; ADR-0015 UNDER REVIEW; `PEO-001`–`PEO-004` DRAFT |
| Source documents | User brief (2026-09-13); GAP-032 / 033 / 035 / 036 resolutions (2026-09-15) |

## Purpose

Role typology and governance patterns (non-country). Core faculty architecture is drafted in ADR-0015 (`UNDER REVIEW`). **Practitioner authorisation** is in `PEO-001`. **Currency** is in `PEO-002`. **Development** is in `PEO-003`. **Mission Team loading / staffing capacity** is in `PEO-004`.

## Controlled documents

| ID | Path | Status | Notes |
|---|---|---|---|
| PEO-001 | `PRACTITIONER_AUTHORISATION_AND_ONBOARDING.md` | DRAFT | Practitioner Authorisation and Onboarding — proposed GAP-033 resolution (not closed) |
| PEO-002 | `PRACTITIONER_CURRENCY_AND_REAUTHORISATION.md` | DRAFT | Practitioner Currency and Re-authorisation — proposed GAP-035 resolution (not closed) |
| PEO-003 | `FACULTY_AND_PRACTITIONER_DEVELOPMENT.md` | DRAFT | Faculty and Practitioner Development — proposed GAP-036 resolution (not closed) |
| PEO-004 | `MISSION_TEAM_LOADING_AND_STAFFING_CAPACITY.md` | DRAFT | Mission Team Loading and Staffing Capacity — proposed GAP-032 resolution (not closed) |
| PEO-FRM-001 | `templates/PEO-FRM-001-faculty-practitioner-development-plan.md` | DRAFT | Lightweight development plan / record |
| PEO-FRM-002 | `templates/PEO-FRM-002-mission-team-capacity-check.md` | DRAFT | Mission Team Capacity Check |

## Related Mission templates

| ID | Path | Notes |
|---|---|---|
| MIS-FRM-002 | `docs/06-missions-and-production/templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md` | Onboarding acknowledgement |
| MIS-FRM-007 | `docs/06-missions-and-production/templates/MIS-FRM-007-practitioner-authorisation-record.md` | Scoped authorisation record |
| MIS-FRM-008 | `docs/06-missions-and-production/templates/MIS-FRM-008-practitioner-currency-review.md` | Currency / re-authorisation review |

## Architecture dependency

```
PEO-001 Authorisation  ↔  PEO-002 Currency  ↔  PEO-003 Development
                         ↓
              PEO-004 Mission Team Capacity
```

These interact; they are **not** a promotion ladder. **Staff count ≠ Mission capacity.** Mentor caseloads remain `GAP-034`; country registration / statutory ratios `GAP-037`.

## Planned child documents (not yet created)

- Overview aligning to ADR-0015 (after human review direction)
- Safeguarding & residential house-staff operating standards (country/project where applicable)
- Open questions linked to `GAP_REGISTER.md` (GAP-034, 037)
