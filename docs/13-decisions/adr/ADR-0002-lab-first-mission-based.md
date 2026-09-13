# ADR-0002 — Lab-First and Mission-Based Learning Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0002` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-13` |
| Approved | `2026-09-13` |
| Deciders | Human architectural review |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` Concept Constitution; ADR-0001; ADR-0003 |
| Related gaps / claims | GAP-003, GAP-008, GAP-016; CLM-006 |
| Source documents | Architecture brief (2026-09-13); early ideation in `references/conceptual-evolution/` (superseded where conflicting); human ratification (2026-09-13) |

---

## Title

Lab-First and Mission-Based Learning Architecture (with retained direct teaching)

## Status

`APPROVED`

## Context

Conventional schooling typically organises the day around subjects, periods and classrooms, with laboratories used as supplementary spaces for demonstration or confirmation practicals.

Tarbiyat’s founding direction is different: the educational experience should be progressively organised around missions and production environments. Historical drafts sometimes overstated this as the abolition of classrooms, textbooks or direct teaching. That overstatement is pedagogically unsafe and conflicts with examination compatibility (ADR-0003).

A precise decision is required: what “Lab-First” means, what counts as a “lab”, how missions structure production, and what forms of direct teaching are deliberately retained.

## Decision

Tarbiyat adopts a **Lab-First, Mission-Based** learning architecture as the primary organising logic of the Tarbiyat Learning Engine, with the following clarifications:

1. **Lab-First, not Lab-Only.** Direct instruction, books, theory, reading, languages, mathematics practice, seminars and examination preparation remain wherever pedagogically appropriate.
2. **Progressive intensity.** The intensity of Lab-First and Mission-Based learning is progressive and age-appropriate. Core architecture does not prescribe one fixed mission/laboratory percentage for every age or stage.
3. **“Lab” is a family of production and investigation environments**, not only a scientific laboratory. It may include mission studios, fabrication workshops, health/life-science environments, enterprise studios, media studios, field environments, design studios, simulation environments, research spaces and community project environments.
4. **Missions** organise substantial learning effort around investigation and production related to real or realistically scoped problems.
5. **Production** means the creation of an inspectable, discussable or demonstrable outcome of serious student work. It need not be a physical manufactured object. Examples may include, without becoming exhaustive: artefact, prototype, system, experiment, dataset, research finding, analysis, software, design, performance, documentary, business model, policy proposal, service or community intervention.
6. **Production cycle (normative where age, safety and project type permit):**  
   Investigate → Design → Build/Create → Test → Fail/Learn → Improve → Document → Present  
   Later stages may include Deploy → IP protection → venture/licensing/technology transfer/social implementation under supervision and law. Not every mission must reach later stages.
7. **Productive failure** means responsible experimentation from which evidence, reflection and improvement arise. Negligence, unsafe conduct, academic dishonesty or persistent non-engagement are not classified as productive failure.
8. **Curriculum disciplines** increasingly function as knowledge tools required to accomplish missions, while systematic subject learning is preserved where required for coherence and for the Formal Recognition Layer.
9. **Knowledge Studios / seminar / briefing spaces** replace the idea of the classroom as the sole centre of school life; they remain essential for theory, critique and preparation.

Detailed timetables, staff models, lab inventories, age bands and percentage allocations are deferred to later Core sections and country/project profiles. This ADR does not set age bands or percentages.

## Rationale

- Distinguishes Tarbiyat from “STEM add-on” schooling without denying the necessity of teaching.
- Prevents false binaries (mission vs theory; lab vs book) that damage both learning and recognition compliance.
- Gives a shared production language for later mission design and assessment evidence.
- Corrects earlier ideation that implied no classrooms/no teaching, which is neither Core direction nor compatible with ADR-0003.
- Avoids a one-size percentage that would mis-fit early exploration stages and later production stages.

## Consequences

**Positive**

- Clear pedagogical identity for subsequent architecture sections (`docs/01`, `docs/06`).
- Room for languages, mathematics and exam preparation without apologising for them.
- Broad lab and production definitions support six learning worlds, not only engineering labs.

**Risks / costs**

- Requires sophisticated timetabling so mission work and systematic subject learning cohere (`GAP-016`).
- Risk of “mission theatre” (activity without knowledge depth) if tool-use of disciplines is poorly designed.
- Staff development needed for coaching, safety and critique—not only content delivery.

**Follow-on work**

- Learning architecture specification (`docs/01-learning-architecture/`).
- Missions and production standards (`docs/06-missions-and-production/`).
- Age-appropriate mission complexity (depends on GAP-003); timetable proportions (GAP-016).

## Alternatives Considered

1. **Classroom-first + enrichment labs** — conventional structure with better labs. Rejected: does not realise the intended architecture.
2. **Lab-only / no direct teaching** — abolish timetabled teaching and textbooks. Rejected: pedagogically incomplete; conflicts with recognition layer; contradicts founding clarification.
3. **Project-based learning without production cycle** — projects as display events. Rejected: insufficient discipline around investigate–improve–document standards.
4. **Exam-prep first, missions optional** — missions as extracurricular. Rejected: relegates the Learning Engine to the margin.
5. **Fixed Core percentage for lab/mission time at all ages** — Rejected: intensity must be progressive and age-appropriate.

## Country-Specific Implications

- Core defines the architecture; countries map local curriculum subjects into Knowledge Studios and mission tool-use without inventing unlawful deviations from recognised requirements.
- Malaysia’s subject lists, language requirements and lab safety regulations belong in `docs/10-malaysia/` and must be researched with citations—not asserted here.
- Residential versus day operation may affect daily mission rhythm but does not change the Lab-First principle itself (see ADR-0001).

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (§4, §6)
- `docs/12-evidence/SUPERSEDED_CONCEPTS.md`
- ADR-0001, ADR-0003
- Future: `docs/01-learning-architecture/`, `docs/06-missions-and-production/`

## Open Questions

1. What proportions of the student week should be mission/lab production versus Knowledge Studio / exam preparation at each progression stage? (`GAP-016` — not answered here)
2. How are multi-week missions scheduled against fixed examination calendars in a given country?
3. What safety competency gates are required before independent workshop use at each age band?
4. When is simulated mission work acceptable versus requiring external stakeholders? (`GAP-018`)

## Explicit non-claims

This ADR does not claim that all learning occurs in labs, that textbooks are banned, that any specific equipment list is mandatory, that any fixed lab/mission percentage applies at every age, or that any country’s inspectorate has endorsed the model.
