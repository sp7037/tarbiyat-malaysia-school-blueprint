# Project Rules — Tarbiyat Documentation Repository

| Field | Value |
|---|---|
| Document ID | `ROOT-RULES` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-13` |
| Country scope | `UNIVERSAL` (applies to all work in this repository) |
| Owner / reviewer | Project Documentation Architect / Human lead (TBD) |
| Dependencies | `README.md`, `MASTER_INDEX.md`, `docs/13-decisions/` |
| Source documents | User brief (2026-09-13) |

## 1. Purpose of these rules

These rules bind human contributors and AI agents working in this repository. They protect founding educational principles, preserve decision history, and prevent contamination of the universal Core model with unverified country-specific claims.

## 2. Mandatory agent behaviour

Before changing any concept, model element, claim or implementation detail, AI agents **must**:

1. Inspect relevant existing documents listed in `MASTER_INDEX.md` and any linked sources under `references/`.
2. Preserve approved architectural decisions in `docs/13-decisions/` unless a new ADR explicitly supersedes them.
3. Distinguish clearly between:
   - **Source facts** (found in primary source documents or cited authoritative external sources)
   - **Proposals** (recommended designs not yet approved)
   - **Assumptions** (working hypotheses pending evidence or decision)
4. Never invent regulatory, legal, ministry, licensing, curriculum-board or government-support facts.
5. Cite authoritative sources for every external factual claim (statute, ministry guidance, exam board rule, market statistic, comparative education claim).
6. Explicitly record contradictions in the relevant document and, where systemic, in `GAP_REGISTER.md` or a dedicated contradiction note under `docs/12-evidence/`.
7. Update `MASTER_INDEX.md` and `CHANGELOG.md` when adding, renaming, approving or superseding substantive documents.
8. Avoid unnecessary duplication; prefer linking to a single source of truth.
9. Use clear professional human language. Avoid generic AI marketing language, hype, and unsubstantiated superlatives.
10. Never silently alter the project's founding educational principles (see §4).

## 3. Core vs country profile separation

| Layer | Contains | Must not contain |
|---|---|---|
| **Tarbiyat Core Educational Model** | Universal pedagogy, learning architecture, pathway logic, assessment philosophy, mission/production model, people roles (generic), campus typology (generic) | Malaysia-only statutes; Oman ministries; country-specific partner lists; country-only boarding/security mandates unless elevated by ADR |
| **Malaysia Implementation Profile** | Malaysian curriculum/exam mapping, regulatory pathway, cultural adaptation, industry/government interface, site/legal options | Rewrites of Core principles that quietly change the universal model |

Oman (and other country) materials under `references/` are **reference/source documents only**. Do **not** automatically copy assumptions such as:

- sovereign data-centre / data-localisation mandates
- full boarding / 24-hour residential requirements
- Oman-specific ministries or Vision 2040 framing
- Omanization targets
- Oman-specific security architecture
- named Oman corporate partners (PDO, OQ, Omantel, Asyad, etc.)

…unless later explicitly approved for Malaysia via ADR and recorded under `docs/10-malaysia/`.

## 4. Founding educational principles (do not silently alter)

The following are current founding principles from the project brief. Changes require an ADR and human approval:

- Lab-First Learning
- Mission-Based Learning
- Practical production rather than demonstration-only practicals
- Curriculum theory used as a tool for accomplishing missions
- National/board examination compatibility (recognition and academic safety layer)
- Progression: Explore → Discover → Choose → Deepen → Produce
- Broad exposure before specialisation
- No premature permanent career labelling of young children
- Interest and capability discovery through longitudinal evidence
- Major + Minor pathways at suitable ages (ages TBD by research/decision)
- Six broad professional/learning worlds (see glossary)
- Competency Graph
- Proof of Capability Profile
- Student portfolio
- Real government/community/industry missions
- Industry-in-Residence
- Student intellectual property pathways
- Mission-to-Market and supervised micro-venture possibilities
- Character, ethics, physical development and national identity
- Theory and direct teaching retained where pedagogically required
- Classrooms redefined primarily as Knowledge Studios / Seminar / Briefing spaces

## 5. Claims, evidence and language discipline

- Record assertive marketing or uniqueness claims in `CLAIMS_REGISTER.md`.
- Record supporting or contradicting evidence in `EVIDENCE_REGISTER.md`.
- Do not claim “world first”, “never done before”, government approval, or partnership existence without evidence IDs.
- Prefer precise, testable wording over inspirational prose in governing documents.

## 6. Document lifecycle

1. Create or edit as `DRAFT`.
2. Move to `UNDER REVIEW` when ready for human decision.
3. Human marks `APPROVED` (or returns to `DRAFT`).
4. When replaced, mark old document `SUPERSEDED` and link to successor.

Every substantive document should carry metadata: Document ID, Version, Status, Last reviewed, Dependencies, Source documents, Country scope, Owner/reviewer.

## 7. Repository hygiene

- Do not delete or overwrite original source documents under `references/`.
- Do not rename original source filenames; if a clearer alias is needed, add an index entry.
- Do not commit secrets, credentials or private personal data.
- Do not commit until a human explicitly requests a commit.
- Working text extracts under `references/working-text-extracts/` are **non-authoritative**; originals remain authoritative.

## 8. Conflict resolution order

When documents conflict, apply this order unless an ADR says otherwise:

1. Approved ADRs
2. Approved Core constitution / design principles
3. Approved Malaysia profile documents (for Malaysia-only matters)
4. Latest dated DRAFT under active review
5. Historical country proposals under `references/` (source only)
