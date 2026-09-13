# ADR-0003 — Formal Examination and Recognition Safety Layer

| Field | Value |
|---|---|
| Document ID | `ADR-0003` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-13` |
| Approved | `2026-09-13` |
| Deciders | Human architectural review |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` Concept Constitution; ADR-0001; ADR-0002 |
| Related gaps / claims | GAP-002, GAP-009, GAP-010; CLM-002, CLM-005, CLM-006, CLM-007 |
| Source documents | Architecture brief (2026-09-13); Malaysia Concept Note (exams as safety net — proposal language); Oman v3 and early 180° drafts (exam-abolition language — superseded); human ratification (2026-09-13) |

---

## Title

Formal Examination and Recognition Safety Layer, with Parallel Tarbiyat Capability Assessment

## Status

`APPROVED`

## Context

Historical Tarbiyat-related drafts contain conflicting examination positions:

- Early conceptual drafts and some Oman text argue for abolishing traditional examinations or “NO exams”.
- Later blending ideation and the Malaysia Concept Note retain national examinations as an academic safety net alongside capability evidence.
- The current founding brief requires compatibility with applicable statutory or recognised curriculum, assessment and credentialing requirements, and dual-layer architecture.

Without an explicit decision, later authors may revive abolition language, or conversely reduce Tarbiyat capability assessment to marketing claims without substance.

A further risk is presenting Tarbiyat portfolios or competency graphs as if they replace statutory credentials—an unlawful or harmful outcome for students if untrue in the country of implementation.

## Decision

Tarbiyat adopts the following dual assessment architecture:

### 1. Formal Recognition Layer (statutory / recognised)

Where the country of implementation requires applicable statutory or recognised curriculum, assessment and credentialing requirements, those requirements **remain in place**. Tarbiyat Core design must remain compatible with that layer. Exact boards, subjects and regulations are defined only in the Country Implementation Profile after authoritative research.

**Tarbiyat does not abolish applicable statutory or recognised examinations where they are required.**

Historic source statements advocating abolition of examinations are **superseded** (see `docs/12-evidence/SUPERSEDED_CONCEPTS.md`).

### 2. Tarbiyat Capability Layer (parallel, additional)

In parallel, Tarbiyat maintains a longitudinal capability record that may include:

- mission portfolio  
- Competency Graph  
- Proof of Capability Profile  
- Major / Minor pathway evidence  
- research/prototype, teamwork, communication, ethical/responsibility and industry/community exposure evidence  

This layer evidences what students can investigate, design, build, improve and present. It is **additional** to formal recognition. It must not be described as replacing statutory or recognised requirements, and is **not claimed to be legally equivalent** to them.

### 3. Completion / exit-stage intent

At major completion or exit stages, students should possess:

1. applicable formally recognised academic evidence required locally; and  
2. a Tarbiyat longitudinal capability record,

subject to country/project rules and the student’s pathway stage.

### 4. Integrity rule

Neither layer may be falsely marketed as eliminating the other. Claims about recognition by universities, employers or ministries require evidence and country-profile confirmation.

## Rationale

- Protects student mobility and compliance where formal credentials are socially and legally consequential.
- Preserves Tarbiyat’s distinctive emphasis on demonstrated capability without creating a false choice between exams and missions.
- Resolves a documented historical contradiction in source materials for current architecture work.
- Keeps board/curriculum selection out of Core, preventing Malaysia (or any country) hard-coding.
- Uses completion/exit-stage language so the dual intent applies beyond a single “graduation” ceremony model.

## Consequences

**Positive**

- Clear instruction to all later sections: design for compatibility, not abolition.
- Enables parallel investment in Competency Graph / portfolio systems without legal overclaim.
- Supports ministry-facing communication that is precise rather than utopian.

**Risks / costs**

- Dual demands on student time; poor design could create overload.
- Risk that examination preparation crowds out missions unless ADR-0002 timetabling is solved (`GAP-016`).
- Risk that capability records become decorative unless schemas and moderation are later specified (GAP-009, GAP-010).

**Follow-on work**

- Malaysia exam/curriculum mapping (`GAP-002`) under `docs/10-malaysia/` with citations only.
- Core assessment specification (`docs/05-assessment/`).
- Claims Register: CLM-002 and related abolition claims marked Retired against this APPROVED ADR.

## Alternatives Considered

1. **Abolish formal examinations** — rely only on portfolios/competency graphs. Rejected: conflicts with founding brief; harms recognition safety; unsupported as lawful universal design.
2. **Exams only** — treat missions as enrichment. Rejected: collapses the Tarbiyat Learning Engine.
3. **Fixed global exam board in Core** (e.g. hard-code one international board). Rejected: violates ADR-0001; ignores country sovereignty over recognition.
4. **Numeric split mandated in Core** (e.g. 40% board / 60% missions from historical blending draft). Rejected for now: may be a later country/project or timetable decision; not elevated without evidence and ADR (CLM-007 remains unverified proposal).
5. **Claim legal equivalence** of Proof of Capability to statutory credentials. Rejected: unsupported and potentially harmful.

## Country-Specific Implications

| Topic | Core | Country profile |
|---|---|---|
| Applicable statutory/recognised requirements | Must remain compatible where required | Confirm local legal reality with citations |
| Which board/curriculum/credentialing | Not decided in Core | Malaysia (and others): research and map (`GAP-002`) |
| Exam preparation time | Must be accommodated in Learning Engine design | Local calendar and subject rules |
| Recognition of Proof of Capability by universities/employers | Permitted as aspiration only; no legal equivalence claimed | Requires local evidence; no invented endorsements |

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (§5, §8)
- `docs/12-evidence/SUPERSEDED_CONCEPTS.md`
- ADR-0001, ADR-0002
- `docs/12-evidence/CLAIMS_REGISTER.md` (CLM-002, CLM-005, CLM-006, CLM-007)
- Future: `docs/04-curriculum-and-recognition/`, `docs/05-assessment/`, `docs/10-malaysia/`

## Open Questions

1. Which Malaysian (or other) recognition frameworks are candidate safety layers? (GAP-002 — research required; no invention.)
2. How will mission evidence be moderated for integrity and comparability?
3. Will any country seek formal recognition of the Proof of Capability Profile by external authorities, and under what process?
4. What support model applies when capability evidence is strong but statutory assessment performance is weak (TBD)?

## Explicit non-claims

This ADR does not assert that any ministry has approved Tarbiyat, that any board has agreed alternative assessment substitutions, that portfolios are legally equivalent to examinations, or that examination abolition is feasible or desirable in any named country.
