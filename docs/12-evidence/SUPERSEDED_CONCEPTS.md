# Superseded Concepts Register

| Field | Value |
|---|---|
| Document ID | `EVD-004` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Last reviewed | `2026-09-13` |
| Country scope | `UNIVERSAL` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003`; `ADR-0001`; `ADR-0002`; `ADR-0003`; `CLAIMS_REGISTER.md` |
| Source documents | Historical materials under `references/`; human ratification (2026-09-13) |

## Purpose

Prevent historical source concepts from being accidentally restored as current architecture.

- Historical source documents under `references/` are **not** modified or deleted.
- Phrases listed here may appear in historical sources and in this register when identified as superseded.
- They must **not** re-enter APPROVED Core documents as current design direction.

## Entries

| ID | Historical direction | Historical source(s), where known | Current treatment | Superseding ADR | Notes |
|---|---|---|---|---|---|
| SUP-001 | “NO exams” | `references/conceptual-evolution/Overview-New_Model.docx`; related early ideation | Superseded — not current Core direction | ADR-0003 | See also CLM-006 |
| SUP-002 | Abolish traditional examinations | Oman v3 lineage (`references/oman/Tarbiyat_Oman_v3.docx` and related) | Superseded — not current Core direction | ADR-0003 | See also CLM-002 |
| SUP-003 | Competency Graph (or portfolio / Proof of Capability) replacing statutory examinations | Implied in abolition-oriented historical drafts; risk in later capability marketing | Superseded — capability layer is parallel/additional only; not a replacement; no legal equivalence claimed | ADR-0003 | Dual-layer model in FND-003 §5 and §8 |
| SUP-004 | Lab-only / no direct teaching | Early conceptual-evolution drafts | Superseded — Lab-First, not Lab-Only | ADR-0002 | Direct teaching retained where pedagogically appropriate |
| SUP-005 | Classroom abolition extremes | Early ideation (“no classrooms”) | Superseded — Knowledge Studios / seminar / briefing spaces retained | ADR-0002 | Classrooms are not the exclusive centre; they are not abolished |
| SUP-006 | Boarding as a universal Tarbiyat mandate | Oman v4 (“100% full boarding”); echoed in some proposals | Superseded as Core mandate — residential/day/hybrid are country/project implementation decisions | ADR-0001 | Malaysia residential choice remains open (GAP-005) |
| SUP-007 | Sovereign / on-premise data centre as a universal Tarbiyat mandate | Oman materials; echoed in Malaysia Concept Note proposal language | Superseded as automatic Core mandate — Core requires lawful privacy-conscious governance only | ADR-0001 | Malaysia data architecture remains open (GAP-006) |

## Rules for agents and editors

1. Before restoring any idea from `references/`, check this register.
2. If a proposed change would revive a SUP-* entry, it requires a new ADR that explicitly supersedes the relevant APPROVED ADR and updates this register.
3. Do not delete or rewrite historical source files to remove superseded phrases.
