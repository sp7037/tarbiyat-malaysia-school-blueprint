# ADR-0001 — Core Educational Model vs Country Implementation

| Field | Value |
|---|---|
| Document ID | `ADR-0001` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-13` |
| Approved | `2026-09-13` |
| Deciders | Human architectural review |
| Country scope | `CORE` (defines separation rule for all countries) |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` Concept Constitution; `PROJECT_RULES.md` |
| Related gaps / claims | GAP-005, GAP-006, GAP-007, GAP-012, GAP-014, GAP-017; CLM-003, CLM-004 |
| Source documents | Architecture brief (2026-09-13); `references/oman/` and `references/malaysia/` as historical sources only; human ratification (2026-09-13) |

---

## Title

Core Educational Model versus Country Implementation Profiles

## Status

`APPROVED`

## Context

Tarbiyat has been developed through multiple country-oriented proposals (notably Oman lineage documents and a Malaysia Concept Note) and earlier ideation drafts. Those sources mix universal educational ideas with country-specific assumptions such as:

- full boarding / residential mandates;
- sovereign or on-premise data-centre architectures;
- named ministries, national vision frameworks and corporate partners;
- local ownership and funding models;
- local curriculum and examination authorities.

If those assumptions are copied into the universal Core, later Malaysia (or other) work will inherit constraints that have not been decided for that country, and the Core will cease to be portable project IP.

A second risk is the reverse: writing Malaysia-specific rules into Core documents because Malaysia is the first implementation focus.

## Decision

Tarbiyat documentation and design shall maintain a strict dual architecture:

1. **Tarbiyat Core Educational Model** — country-agnostic intellectual and academic architecture (pedagogy, learning engine, pathway logic, capability assessment philosophy, generic roles and campus typology).
2. **Country Implementation Profile** — country-specific curriculum, examination frameworks, languages, values/national identity content, laws/regulations, accreditation, child protection detail, data requirements, industry/government priorities, residential model and related local constraints.

**Malaysia** is the first current implementation focus and is documented under `docs/10-malaysia/`. Malaysia must not be hard-coded into Core principles.

The following are **not** universal Core requirements merely because they appear in historical proposals:

- boarding / 24-hour residential operation;
- sovereign or on-premise data-centre mandates;
- Oman-specific ministries, partners, Omanization targets or Vision framing;
- any Malaysia-specific statute, board, language policy or government priority.

Country/project implementation profiles may adopt residential models or heightened data-localisation rules **only** as country/project implementation decisions, with cited authority where factual claims are made.

**When an implementation feature is represented as legally or regulatorily required, that claim must be supported by authoritative evidence in the Country Implementation Profile.**

Historical materials under `references/` remain immutable sources. They inform design; they do not automatically become Core or Malaysia policy. Superseded historical directions are recorded in `docs/12-evidence/SUPERSEDED_CONCEPTS.md`.

## Rationale

- Protects portability of Core IP across future implementations.
- Prevents silent importation of Oman assumptions into Malaysia work.
- Makes country compliance research auditable and citable in the correct layer.
- Distinguishes statutory mandates (which require evidence) from legitimate project-level design choices that are not statutes.
- Clarifies conflict resolution: approved Core ADRs/constitution govern universal rules; country/project profiles govern local adaptation without rewriting Core by stealth.

## Consequences

**Positive**

- Clear ownership of content by layer.
- Safer Malaysia drafting without inventing foreign constraints as “Core”.
- Easier future replication to other countries without rewriting pedagogy.

**Risks / costs**

- Contributors must resist convenience copying from polished country proposals.
- Some popular features in historical decks (e.g. mandatory boarding) must be re-justified per country/project.
- Temporary duplication of headings across Core and country docs until profiles mature.

**Follow-on work**

- Keep Malaysia profile skeleton free of invented regulation (`docs/10-malaysia/`).
- Future ADRs for boarding (country/project), data architecture (country/project), and Oman reference hierarchy (GAP-012).
- ADR-0008 / ADR-0009 proposals are largely subsumed at Core level by this decision; Malaysia/project choices remain open.

## Alternatives Considered

1. **Single blended blueprint** — one document set mixing Malaysia rules into “the model”. Rejected: contaminates Core and blocks reuse.
2. **Oman proposal as de facto Core** — adopt latest Oman version as universal standard. Rejected: embeds country mandates and unresolved internal contradictions (scale, exams, boarding).
3. **Core as minimal slogan only** — leave architecture entirely to each country. Rejected: loses coherent project IP and invites incompatible forks.

## Country-Specific Implications

| Country | Implication |
|---|---|
| Malaysia | All MY curriculum, exam boards, languages, identity content, law, accreditation, child protection, data, industry/government priorities and residential model live under `docs/10-malaysia/`. Concept Note proposals remain proposals until ratified. Legal/regulatory claims require authoritative evidence. |
| Oman / others | Historical proposals are references only unless a future country profile is opened and decisions are re-taken deliberately. |

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (§11)
- `PROJECT_RULES.md` (§3)
- `docs/10-malaysia/MALAYSIA_IMPLEMENTATION_PROFILE.md`
- `docs/12-evidence/SUPERSEDED_CONCEPTS.md`
- `references/README.md`
- ADR-0002, ADR-0003

## Open Questions

1. When may a country/project feature be elevated into Core (criteria for “universalisation”)? (`GAP-017`)
2. What governance body ratifies Core versus country/project-profile changes?
3. Canonical Malaysia Concept Note file (GAP-014) still unresolved.
4. Ownership/governance model for a Malaysian campus (GAP-007) remains a Malaysia country/project decision, not a Core rule.

## Explicit non-claims

This ADR does not approve any country’s regulatory pathway, funding model, site, partnership list or data-centre design.
