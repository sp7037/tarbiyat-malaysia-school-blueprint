# ADR-0017 — Discover Meaningful Exposure Package Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0017` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-14` |
| Approved | `2026-09-17` |
| Deciders | Human architectural review (Integrated Developmental Architecture review) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0011` APPROVED; `ADR-0004`–`ADR-0006` APPROVED; `ADR-0016` APPROVED; mission context `ADR-0007` UNDER REVIEW; faculty context `ADR-0015` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-045 (Closed by this ADR); related GAP-008 (Closed by ADR-0011), GAP-009 Open, GAP-046 (Closed by ADR-0018), GAP-047 Open; developmental context GAP-003 / 004 / 019 Closed |
| Source documents | `FND-003` §§4, 7, 10; ADR-0011 Discover exposure obligation; ADR-0004 Discover stage meaning; Architecture brief for GAP-045 (2026-09-14); Integrated Human Review (2026-09-17) |
---

## Title

Discover Meaningful Exposure Package Architecture

## Status

`APPROVED`

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-14 | Initial UNDER REVIEW draft |
| 1.0.0 | 2026-09-17 | APPROVED after Integrated Developmental Architecture human review; closes GAP-045; companion approvals ADR-0011 / 0018 |

## Context

The Concept Constitution (`FND-003`, APPROVED) requires exploration before strong specialisation and names six broad professional/learning worlds. ADR-0011 (`APPROVED`) states that **Discover** requires **meaningful exposure across all Six Worlds** — more than assemblies, career talks or worksheets — and opened `GAP-045` for the operational package.

Without Core Discover exposure architecture:

- “exposure” collapses into career days, videos, posters or incidental mention;
- Schools may invent six compulsory World subjects, equal-time rotations or early vocational streams;
- Engineering/Health may receive serious Labs while Creative/Society receive token awareness;
- one Mission may be over-tagged to all Worlds without substantive learner work;
- Discover traces may be mistaken for Proof of Capability Claims (ADR-0016 APPROVED);
- pathway algorithms or prestige culture may lock learner identity before informed agency exists;
- Competency Graph work (`GAP-009`) may invent exposure scoring without educational semantics.

**ID pre-flight:** `ADR_INDEX.md` reserves ADR-0008–0010 and ADR-0012–0013 for other topics. ADR-0011 / 0014–0016 already have bodies. **No reserved ADR ID exists for Discover exposure.** **No renumbering conflict.** This body uses the next free ID **ADR-0017**.

**Dependency note:** This ADR treats FND-003, ADR-0001–0006, ADR-0011 and ADR-0016 as approved law. It uses ADR-0007 and ADR-0015 only as **under-review context**. Those ADRs remain `UNDER REVIEW` and are **not** treated as approved.

This ADR remains Core / country-neutral. It does **not** define ages, year maps, Discover duration, hours per World, term structure, subject timetables, teacher ratios, laboratory specifications, grading scales, numerical exposure scores, Major/Minor catalogues, Competency Graph schemas, software systems, Malaysian curriculum equivalence or pathway-selection algorithms.

## Decision

Tarbiyat Core adopts a **Discover Meaningful Exposure Package** architecture so that every learner reaches the end of Discover having had **enough substantive experience across all Six Worlds** to support later concentration decisions with **informed agency** — without converting Worlds into six subjects, equal-time rotations, vocational streams, career labels or a rigid timetable.

1. **Meaningful exposure** is defined by the **Meaningful Exposure Test** (Context; Active Engagement; World-Relevant Practice; Reflection / Interpretation; Trace / Evidence).
2. Passive awareness alone is normally insufficient.
3. Every learner is entitled to meaningful exposure across **all Six Worlds** during Discover (**All-Six-Worlds Entitlement**).
4. Entitlement does **not** mean equal clock time, six separate courses, six exams, six teachers, six sequential rotations or six independent projects.
5. Coverage applies **across the Discover stage**, not necessarily simultaneously or in equal proportions.
6. A **Discover Exposure Package** is the learner’s **cumulative** Discover experience (not a fixed course catalogue).
7. A single authentic experience may contribute to more than one World **only** where the learner performs substantively World-relevant work in each claimed World; significance detail remains `GAP-047`.
8. **Developmental stage ≠ Capability Depth.** Discover guarantees substantive engagement across Worlds; it does **not** guarantee equal capability depth across them.
9. Meaningful exposure normally goes beyond purely passive **Encounter** and includes inquiry/action — without turning the Capability Depth Ladder into scores or thresholds.
10. Discover must not create early identity lock-in (“engineering student”, “not creative”, “future doctor”).
11. Transition toward **Choose** supports **better-informed provisional concentration**, not permanent career selection and not a rigid pass/fail gate.
12. Discover prepares learners to later consider concentration, combinations, interdisciplinary pathways and Major + Minor — pathway-preparation architecture in ADR-0018 (`APPROVED`; `GAP-046` Closed).
13. **Discover Exposure Evidence** ≠ **Proof of Capability**. Traces show genuine participation; they are not automatic Capability Claims (ADR-0016 APPROVED).
14. Competency Graph semantics may later reference exposure concepts; Graph technology remains `GAP-009`.
15. Exposure interpretation is **human-governed**; AI/data may assist discovery but must not deterministically assign pathways.
16. Equal architectural dignity applies to all Six Worlds; resource-constrained settings must still enable meaningful exposure.
17. Existing Health, civic and ethical safeguards carry forward (no unlicensed clinical practice; no partisan indoctrination; age-appropriate safety/ethics).

**Resolution of GAP-045:** this ADR supplies Core definitions of meaningful exposure, the Discover Exposure Package, All-Six-Worlds entitlement, cross-World counting rules, depth relationship, agency/Choose boundary, evidence/PoC boundary and scenario tests. Operating schedules, counts and Graph schemas remain deferred. GAP-009 and GAP-047 remain open. GAP-046 is Closed by companion ADR-0018.

---

## Definition of Meaningful Exposure

**Meaningful exposure** is a learner’s substantive, World-situated experience of a domain’s characteristic ways of thinking and doing — sufficient to inform later preference and concentration decisions — evidenced by active participation and a lightweight participation trace.

It is **not**:

- hearing about a World;
- watching alone;
- reading a brochure;
- attending an assembly or career fair;
- seeing a themed poster;
- incidental mention inside another project;
- automatic vocational training or professional licensing.

### Meaningful Exposure Test (Core)

An experience normally counts as meaningful exposure to a World only when **all five** of the following are present to a developmentally appropriate degree:

| Dimension | Requirement |
|---|---|
| **1. Context** | The learner encounters a real question, phenomenon, problem, system, craft or human need situated meaningfully within that World. |
| **2. Active Engagement** | The learner does something intellectually or practically substantive (investigate, observe, model, make, test, analyse, design, interpret, create, debate, evaluate, communicate, or otherwise participate). Passive listening alone is normally insufficient. |
| **3. World-Relevant Practice** | The learner experiences something characteristic of how people reason, investigate, create or act within that World — without professional licensing or premature vocational training. |
| **4. Reflection / Interpretation** | The learner makes sense of the experience (what was noticed, tried, evidenced, difficult, interesting or connected). Exact prompt wording is not Core-prescribed. |
| **5. Trace / Evidence** | The experience produces a lightweight participation trace (artefact, observation, explanation, model, reflection, investigation record, critique, performance, presentation, etc.). This is **exposure evidence**, not automatic proof of mastery. |

These five dimensions form the Core **Meaningful Exposure Test**. They are architectural properties, not rubrics, scores or hour quotas.

### Active vs passive

| Pattern | Architectural treatment |
|---|---|
| Guest lecture / assembly / video / brochure / career fair alone | Normally **does not** satisfy meaningful exposure |
| Demonstration or brief mention alone | Normally **does not** satisfy |
| Awareness activities as part of a longer sequence | May **contribute** to a sequence, but do not automatically complete the Test |
| Investigation, making, modelling, analysis, design, creative production, fieldwork, simulation, dialogue with interpretation and a trace | May satisfy when all five Test dimensions are met |

Meaningful exposure must remain possible through local contexts, low-cost materials, digital tools, field observation, community resources, simulations, discussion, making, investigation and creative work. Expensive laboratories are **not** required for every World exposure.

---

## Discover Exposure Package

A **Discover Exposure Package** is the **cumulative record and lived programme of a learner’s Discover-stage experiences** that together satisfy the All-Six-Worlds Entitlement.

It is **not**:

- a fixed national course catalogue;
- six compulsory World subjects;
- a second credential;
- a badge system;
- a database schema;
- a psychometric profile;
- a PoC Profile substitute.

### Architectural dimensions (non-exhaustive, non-numeric)

The Package is understood through dimensions such as:

| Dimension | Role |
|---|---|
| **World coverage** | All six Worlds reached at meaningful-exposure standard |
| **Active participation** | Experiences pass Active Engagement / World-Relevant Practice |
| **Diversity of contexts** | Exposure may arise via Labs, Missions, inquiries, making, investigation, fieldwork, creative production, dialogue, simulation, community context, etc. |
| **Cross-World integration** | Authentic multi-World experiences are allowed under the Cross-World Rule |
| **Reflection** | Learners interpret experience; adults help without assigning identity |
| **Evidence / traces** | Lightweight participation traces accumulate |
| **Learner interest signals** | Emerging preferences may be noticed; they are not pathway lock-in |
| **Adult observation / support** | Human guidance broadens opportunity and interprets evidence |

Core does **not** prescribe exact counts, hours, sequences or simultaneous coverage.

---

## All-Six-Worlds Entitlement

Meaningful exposure across **all six** Constitution-named Worlds is a **learner entitlement** during Discover:

1. Engineering & Intelligent Systems  
2. Health & Life Sciences  
3. Enterprise & Economics  
4. Earth, Energy & Built Environment  
5. Creative, Media & Human Communication  
6. Society, Leadership & Public Systems  

### Required

- Every learner reaches end-of-Discover with meaningful exposure (Test-passing) in each of the six Worlds.
- Each World receives equal architectural dignity and intellectual seriousness.
- Exposure may be uneven in clock time provided each World still meets the Meaningful Exposure Test.

### Explicitly not required

- Equal instructional hours across Worlds
- One subject per World
- One course per World
- Six sequential rotations
- Six exams
- Six dedicated teachers
- Six independent projects
- Simultaneous coverage of all Worlds at all times
- Identical capability depth in every World

The obligation applies **across the Discover stage**, not as a weekly or term-by-term quota.

---

## Cross-World Experiences

A Mission, Lab or other experience may legitimately provide meaningful exposure to **more than one** World.

**Cross-World Rule:**

> Cross-World experiences may satisfy exposure in more than one World only where the learner performs substantively World-relevant work in each claimed World.

Rules:

- Merely mentioning a World does **not** count.
- Tag inflation is forbidden: loose thematic association ≠ meaningful exposure.
- Primary/secondary World classification and numerical significance thresholds belong to **`GAP-047`** — this ADR does not duplicate them.
- Designers should identify claimed Worlds against actual learner work, not marketing labels.

Illustrative (not automatic credits): a local water-pollution Mission might engage Earth, Health and Society — and Engineering or Creative **only if** the learner’s actual work includes substantive World-relevant practice in those domains.

---

## Capability Depth Relationship

ADR-0011 proposes the Capability Depth Ladder:

`Encounter → Inquire → Apply → Integrate → Advance → Contribute`

**Preserve:** Developmental Stage ≠ Capability Depth.

### Depth rule for Discover exposure

> Discover guarantees substantive engagement across all Worlds but does **not** guarantee equal capability depth across them.

Further:

- Meaningful exposure normally goes **beyond purely passive Encounter**.
- It normally includes **inquiry and/or action** (Inquire; early Apply samples are permitted).
- The ladder is **not** converted into assessment thresholds, scores, level requirements or equal-depth mandates.
- A learner may go deeper in one World while still only meeting meaningful-exposure substance in others — and still satisfy the entitlement.

---

## Learner Agency and No Early Lock-In

Discover helps the learner form interests; it does **not** assign identity.

Forbidden Discover identity practices include labelling a learner as:

- “engineering student” / “arts student” / “business student”
- “weak in science” / “not creative”
- “future doctor” / other premature profession labels

Allowed:

- strong early interest without pathway lock-in;
- changing preferences;
- multiple or cross-World interests;
- genuine uncertainty;
- later discovery after Discover.

A learner who finishes Discover **without a single dominant preferred World is not unsuccessful**.

Preferred language (stage-appropriate):

> “currently exploring…” / “showing interest in…” / “considering provisional concentration in…”

Not:

> “Engineering child” / “Creative child” / locked career identity

---

## Relationship to Choose

Discover should make possible, before transition into **Choose**:

- substantive exposure across all Six Worlds;
- enough reflection to recognise emerging interests (including plural or unclear interests);
- evidence of participation (exposure traces);
- some understanding of different forms of work and thinking across Worlds;
- opportunity to identify possible concentrations;
- permission to remain exploratory.

**Transition meaning:** better-informed **provisional concentration**, not permanent career selection.

**Not created by this ADR:**

- a rigid pass/fail Discover gate;
- psychometric cut-offs;
- algorithm-assigned pathways;
- requirement of one preferred World.

Human guidance remains mandatory for pathway interpretation (ADR-0004 / FND-003 algorithmic-control principle).

---

## Relationship to Major + Minor

Discover prepares learners to later consider:

- concentration within one World;
- combinations across Worlds;
- interdisciplinary pathways;
- Major + Minor structures;
- changing or bridging pathways.

This ADR does **not** design Major/Minor catalogues, entry ages or load rules. Discover→Choose pathway-preparation architecture is in **ADR-0018** (`APPROVED`; `GAP-046` Closed). Formal Major/Minor entry timing is APPROVED in ADR-0004/0005. Fine within-World pathway catalogues remain deferred.

---

## Evidence / PoC Boundary

| Concept | Meaning |
|---|---|
| **Discover Exposure Evidence** | Lightweight traces that the learner genuinely participated, investigated, created, reflected, etc. |
| **Proof of Capability / Capability Claim** | Structured, evidence-backed demonstration of capability governed by ADR-0016 (`APPROVED`) |

**Boundary rules:**

1. Not every Discover activity becomes a Capability Claim.
2. Exposure Package records are **not** a second credential, badge farm or universal score.
3. Exposure traces may later **support** stronger evidence, but do **not** automatically certify capability.
4. **Proof ≠ Participation** (ADR-0016) remains intact: completing meaningful exposure ≠ proving mastery.
5. PoC verification, moderation and presentation remain ADR-0016 / GAP-038–044 territory.

---

## Competency Graph Boundary

This ADR prepares **semantic boundaries only**. Possible later Graph concepts may include learner, World, exposure, activity, evidence, interest signal, capability and Mission.

This ADR does **not** define:

- node IDs, schemas, tables, JSON, graph databases, APIs;
- scoring algorithms or recommendation engines.

**`GAP-009` remains open and responsible** for Competency Graph architecture. Closing GAP-045 does not close GAP-009.

---

## Human Guidance

Meaningful exposure remains **human-governed**.

Adults may:

- observe engagement;
- challenge narrow assumptions;
- broaden opportunity across overlooked Worlds;
- discuss interests;
- identify overlooked strengths;
- help learners interpret evidence;
- suggest next experiences.

Adults must **not** prematurely assign a child’s identity or future profession.

AI/data systems may eventually assist discovery, organisation or suggestion for human review. They must **not** become deterministic pathway selectors in this ADR (aligns with FND-003 and ADR-0004/0016 non-algorithmic pathway rules).

---

## Equity and Equal Dignity

Discover must not become a prestige hierarchy:

- Engineering/Health as “serious” and Creative/Society as “soft”;
- Enterprise as startups-only entrepreneurship;
- Earth as awareness-only environmentalism.

Each World must expose learners to real disciplinary/professional modes of thinking and doing with intellectual seriousness.

Access to meaningful exposure should not depend primarily on:

- family networks;
- expensive equipment;
- private internships;
- parental profession;
- socioeconomic advantage.

Funding mechanisms are out of scope here; architecture requires that low-cost, local and community-anchored designs remain first-class paths to meaningful exposure.

---

## Safety and Ethical Constraints

Carry forward existing World safety boundaries (ADR-0011 context):

| Domain | Constraint |
|---|---|
| **Health & Life Sciences** | Investigation and health reasoning allowed; **no unlicensed clinical practice** |
| **Society, Leadership & Public Systems** | Civic/institutional reasoning without partisan indoctrination |
| **All Worlds** | Age/developmental appropriateness; safety; ethics; responsible use of tools/data |

This ADR does not expand into legal/regulatory implementation or country safeguarding law.

---

## Decision Questions (answered)

| # | Question | Answer |
|---|---|---|
| 1 | What is meaningful exposure? | Substantive World-situated experience meeting the five-part Meaningful Exposure Test |
| 2 | What distinguishes it from awareness? | Context + active engagement + World-relevant practice + reflection + participation trace |
| 3 | Must every learner receive all-Six exposure? | Yes — All-Six-Worlds Entitlement during Discover |
| 4 | Does that mean equal time? | No |
| 5 | Must exposure be six separate courses? | No |
| 6 | Can one Mission count toward multiple Worlds? | Yes |
| 7 | When? | Only where the learner performs substantively World-relevant work in each claimed World (`GAP-047` for tagging significance) |
| 8 | Is passive observation enough? | Normally no |
| 9 | Is every exposure piece PoC evidence? | No |
| 10 | Same capability depth in every World? | No |
| 11 | Can a learner remain undecided? | Yes — not failure |
| 12 | Who governs pathway interpretation? | Accountable humans with learner participation; AI may assist but not determine |
| 13 | What is deferred? | Ages, hours, counts, schedules, Graph schemas, Major/Minor catalogues, significance numerics (`GAP-047`), pathway-preparation detail now drafted in ADR-0018 (`GAP-046` — not closed), country mapping |

---

## Scenario Tests

| ID | Scenario | Architectural result |
|---|---|---|
| **A** | Early engineering obsession; wants only Engineering | Interest preserved; All-Six Entitlement still requires meaningful exposure in the other five Worlds |
| **B** | 30-minute doctor talk alone | Normally **fails** Health meaningful exposure |
| **C** | Pollution Mission: investigate water, biological impact, filtration model, stakeholder case | May count for Earth / Health / Society (and Engineering or Creative) **only where** learner work is substantively World-relevant; no automatic tag inflation |
| **D** | Short film + audience/distribution/value model | Creative and Enterprise both may count with equal dignity if Test met in each |
| **E** | Resource-constrained school without sophisticated Labs | Meaningful exposure still required and possible via local/low-cost/digital/field/community designs |
| **F** | Watches several architecture documentaries | Awareness alone **insufficient** unless embedded in substantive activity meeting the Test |
| **G** | End of Discover; interested in several Worlds; cannot choose one | **Not failure**; Choose may remain exploratory / plural |
| **H** | Repeatedly combines Earth + Society + Creative | Supported; no forced single-World identity |
| **I** | Meaningful biology investigation in Discover | Exposure evidence **yes**; automatic PoC Capability Claim **no** |
| **J** | Far more Creative time than Engineering, but both meaningful | Allowed; equal clock time not required |
| **K** | Career fair with one professional per World | Attendance alone **does not** satisfy all-six exposure |
| **L** | Health Mission proposing clinical procedures on patients | **Rejected** — outside Discover exposure; unlicensed clinical practice forbidden |
| **M** | App “about climate” claiming five Worlds | Overclaiming rejected; count only Worlds with substantive learner engagement |
| **N** | Serious Labs for Engineering/Health; Creative/Society get occasional awareness only | **Fails** equal-dignity All-Six Entitlement |

---

## Consequences

### Positive

- Operational meaning for “meaningful exposure” without timetable micromanagement.
- Protection against tokenism, prestige hierarchy and early identity lock-in.
- Clear Cross-World counting without duplicating `GAP-047`.
- Clean boundary between Discover traces and PoC Claims.
- Implementation feasible across unequal resource settings.

### Risks / costs

- Without later significance thresholds (`GAP-047`), designers may still over-tag Missions.
- Without pathway-preparation rules (`GAP-046`), Discover→Major/Minor translation may still drift — proposed architecture now drafted in ADR-0018 (`UNDER REVIEW`; not closed).
- Human review load for interpreting exposure packages if schools over-document.
- Dependency on still under-review ADR-0011 / 0004–0007 / 0015 / 0016 coherence.

### Follow-on work

- Human review of this ADR; close GAP-045 only if APPROVED.
- Mission World-tagging significance thresholds (`GAP-047`).
- Discover→Choose pathway preparation — ADR-0018 (`UNDER REVIEW`; proposed resolution of `GAP-046` — not closed).
- Competency Graph specification (`GAP-009`) using exposure semantics carefully.
- Optional later population of `docs/03-worlds-and-pathways/` and `docs/02-student-journey/` after review direction is clear.

## Alternatives Considered

1. **Six compulsory World subjects / courses** — Rejected: recreates subject streaming; contradicts ADR-0011 Worlds ≠ subjects.
2. **Equal-time six rotations as Core law** — Rejected: clock equality ≠ substance; over-constrains local design.
3. **Career-day / awareness-only Discover** — Rejected: tokenism; fails informed agency.
4. **Exposure = PoC Claims** — Rejected: Proof ≠ Participation; over-credentials Discover.
5. **Psychometric / algorithmic pathway assignment** — Rejected: conflicts with FND-003 / ADR-0004.
6. **Cumulative Discover Exposure Package + Meaningful Exposure Test + All-Six Entitlement** — **Selected**.

## Country-Specific Implications

Country / project profiles may later:

- localise examples, partner contexts and low-cost designs;
- express Discover coverage in stage timetables without inventing Core hour quotas;
- map exposure language to national skills vocabulary **without** deleting Worlds or converting them into six vocational streams.

**Core must not embed Malaysian Year maps or exam-board subject grids into Discover exposure architecture.**

## Open Questions / Deferred

1. Exact counts, hours or sequencing patterns for Discover experiences (not Core-fixed here).
2. Mission World-tagging significance thresholds (`GAP-047`).
3. Within/across-World pathway naming before Deepen — pathway preparation proposed in ADR-0018 (`UNDER REVIEW`; `GAP-046` — not closed); fine catalogues remain deferred.
4. How Discover exposure nodes relate inside the Competency Graph (`GAP-009`).
5. How Exploration Floor breadth dimensions (ADR-0006 context) interact with end-of-Discover World coverage without fixed Core percentages (`GAP-016` / `GAP-019`).
6. Discover duration and age/Year mapping (`GAP-003` and country profiles).

## Explicit Non-Claims

This ADR does **not**:

- close GAP-009 or GAP-047;
- define ages, grade/year mappings or Discover duration;
- prescribe number of experiences, hours per World or term structure;
- mandate subject timetables, teacher ratios or laboratory specifications;
- create grading scales, numerical exposure scores, interest scores or psychometric cut-offs;
- create a Major/Minor catalogue;
- design Competency Graph schemas or software;
- claim Malaysian curriculum equivalence or accreditation treatment;
- authorise AI or any single adult to determine a learner’s pathway;
- treat ADR-0007 or ADR-0015 as approved;
- establish a prestige hierarchy among Worlds.

## Related documents

- `FND-003` Concept Constitution §§4, 7, 10
- ADR-0001, ADR-0002, ADR-0003, ADR-0004–0006, ADR-0011, ADR-0016 (APPROVED)
- ADR-0018 (`APPROVED` — Discover→Choose pathway preparation; GAP-046 Closed)
- ADR-0007, ADR-0015 (`UNDER REVIEW` — context only)
- `GAP_REGISTER.md` — GAP-045 Closed; GAP-046 Closed via ADR-0018; GAP-009 / 047 remain open
- `docs/03-worlds-and-pathways/SECTION_README.md`
- `docs/02-student-journey/SECTION_README.md`
- `docs/05-assessment/SECTION_README.md` — exposure vs PoC boundary
