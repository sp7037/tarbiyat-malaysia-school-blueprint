# Tarbiyat Malaysia — Lab-First Mission School & College

| Field | Value |
|---|---|
| Document ID | `ROOT-README` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-13` |
| Country scope | `CORE` + `MALAYSIA` (repository purpose) |
| Owner / reviewer | Project Documentation Architect / Human lead (TBD) |
| Dependencies | `PROJECT_RULES.md`, `MASTER_INDEX.md` |
| Source documents | User brief (2026-09-13); `references/malaysia/` |

## Purpose

This repository is the version-controlled intellectual, academic, operational and implementation blueprint for **Tarbiyat**: a Lab-First, Mission-Based school and college model, initially intended for Malaysia.

It is managed with the same discipline as a professional software architecture repository: indexed documents, decision records, evidence registers, changelogs, and clear separation of universal model IP from country implementation.

## Architectural separation (mandatory)

1. **Tarbiyat Core Educational Model** — universal intellectual/academic architecture and project IP.
2. **Malaysia Implementation Profile** — Malaysia-specific curriculum, regulatory, cultural, industry, government and implementation requirements.

Do not contaminate the Core with Malaysia-specific rules. Do not treat Oman materials as automatic Malaysia defaults.

## Current iteration focus

Iteration 0 establishes repository structure, governance, indexing and skeletons only. It does **not** deliver the complete educational blueprint.

## Documentation portal

A browser-readable presentation layer lives in [`portal/`](portal/). Source Markdown remains authoritative.

```bash
cd portal
npm install
npm run dev
```

See [`portal/README.md`](portal/README.md) for build instructions and how new ADRs appear in the site.

## Quick navigation

| Start here | Path |
|---|---|
| Documentation portal | [`portal/`](portal/) |
| Agent / contributor rules | [`PROJECT_RULES.md`](PROJECT_RULES.md) |
| Full document map | [`MASTER_INDEX.md`](MASTER_INDEX.md) |
| Change history | [`CHANGELOG.md`](CHANGELOG.md) |
| Open information gaps | [`GAP_REGISTER.md`](GAP_REGISTER.md) |
| Foundation skeletons | [`docs/00-foundation/`](docs/00-foundation/) |
| Decision records | [`docs/13-decisions/`](docs/13-decisions/) |
| Source / reference materials | [`references/`](references/) |
| Generated outputs | [`outputs/`](outputs/) |

## Status legend

| Status | Meaning |
|---|---|
| `DRAFT` | Work in progress; not approved |
| `UNDER REVIEW` | Submitted for human review |
| `APPROVED` | Accepted as current governing text |
| `SUPERSEDED` | Replaced by a newer document or version |

## Non-goals for this repository (until explicitly approved)

- Inventing Malaysian legal/regulatory requirements
- Claiming government support, approvals or partnerships that do not exist
- Inventing evidence or “world first” claims without recorded evidence
- Silently importing Oman-specific assumptions into the Malaysia profile

## Next recommended task

See completion note in `CHANGELOG.md` and the Iteration 0 report: populate `docs/00-foundation/CONCEPT_CONSTITUTION.md` from approved principles, with explicit Core vs Malaysia tagging.
