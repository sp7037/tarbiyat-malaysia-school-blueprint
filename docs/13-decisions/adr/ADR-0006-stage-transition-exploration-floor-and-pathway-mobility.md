# ADR-0006 — Stage Transition, Exploration Floor and Pathway Mobility Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0006` |
| Version | `0.1.0` |
| Status | `UNDER REVIEW` |
| Date | `2026-09-14` |
| Deciders | Human lead (TBD) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0004` UNDER REVIEW; `ADR-0005` UNDER REVIEW; evidence context `EV-0001` (does not approve this ADR) |
| Related gaps / claims | GAP-008, GAP-016, GAP-018, GAP-019, GAP-020, GAP-021 |
| Source documents | `FND-003` §§4, 7, 10; ADR-0004; ADR-0005; Architecture Iteration 4 brief (2026-09-14) |

---

## Title

Stage Transition, Exploration Floor and Pathway Mobility Architecture

## Status

`UNDER REVIEW` — not APPROVED.

## Context

ADR-0004 (UNDER REVIEW) establishes Explore → Discover → Choose → Deepen → Produce, the Exploration Floor principle, progressive reversibility, Major + Minor in principle, and human-governed pathway discovery.

ADR-0005 (UNDER REVIEW) proposes typical overlapping developmental windows, readiness rather than birthday cut-offs, provisional concentration during Choose, and formal Major + Minor potentially beginning during Deepen. EV-0001 supplies the developmental evidence base for those windows; it does not approve ADR-0004, ADR-0005, or this ADR.

Those decisions leave three operational Core questions open:

1. **How does a learner move between stages?** (`GAP-003`/`GAP-004` timing exists in ADR-0005; transition *process* is still under-specified.)
2. **What does the Exploration Floor protect in practice** without inventing a fixed timetable percentage? (`GAP-019`)
3. **What does reasonable pathway reversibility mean**, and how does bridging work when concentration, Major or Minor changes? (`GAP-020`)

Without answers:

- stages risk becoming conveyor-belt boxes or informal slogans;
- breadth may collapse to zero during Deepen/Produce under production pressure;
- pathway change may either restart education wholesale or ignore prerequisites and recognition obligations;
- AI or single-adult gating may re-enter under “efficiency” language.

**Dependency note:** This ADR assumes ADR-0004’s stage meanings, Exploration Floor principle, Major + Minor preference, and human pathway governance, and ADR-0005’s windows, readiness principle, provisional concentration, and Deepen Major/Minor entry. Both remain `UNDER REVIEW`. If either is materially revised before approval, this ADR must be re-checked. This ADR does **not** silently treat ADR-0004 or ADR-0005 as approved.

This ADR remains Core / country-neutral. It does not map Malaysian Years, invent Malaysian recognition subjects, set timetable percentages, define Competency Graph schemas, or draft Six Worlds competency maps.

## Decision

Tarbiyat Core adopts the following stage-transition, Exploration Floor and pathway-mobility architecture:

1. **Stage transition** uses:  
   **Developmental Window + Readiness Evidence + Student Voice + Human Review**  
   Chronological age alone is not decisive. Hard promotion exams are not the Core transition mechanism.
2. A learner has one **dominant developmental stage** while continuing functions associated with adjacent stages (Dominant Stage and Overlap Principle).
3. The **Exploration Floor** is operationalised as **protected breadth dimensions**, not as a Core fixed weekly timetable percentage (`GAP-019` proposed resolution).
4. Pathway commitment remains **progressively stronger but reasonably reversible** through **Existing Capability Recognition → Gap Identification → Targeted Bridging → Supported Transition → Review** (`GAP-020` proposed resolution).
5. Transition types receive **proportional governance**: temporary exploration and Minor adjustment require less process than late-stage Major change with recognition implications.
6. Valid prior evidence is **portable** where it represents capability independent of a specific pathway; pathway-specific prerequisites still apply for advanced entry.
7. **No algorithm, AI system, test, teacher or parent independently determines** stage transition or pathway assignment (FND-003; ADR-0004; ADR-0005).
8. Pathway mobility **does not override** Formal Recognition Layer prerequisites (ADR-0003); bridging must address recognition catch-up where required.

---

## Dominant Stage and Overlap Principle

### Decision

A learner may have one **dominant developmental stage** while still participating in functions associated with adjacent stages.

This is **Core architecture**, not optional local flavour.

### Meaning

| Dominant stage | Adjacent / continuing functions (illustrative) |
|---|---|
| Explore | Emerging discovery curiosity without World streaming |
| Discover | Continues Explore foundations; early preference signals may appear without commitment |
| Choose | Continues significant Discover exposure; provisional concentration appears; Exploration Floor strong |
| Deepen | Retains Exploration Floor; may begin Produce-style advanced work where readiness supports it |
| Produce | Continues learning and Deepen-depth activities; remains subject to protected human-development and Recognition Layer requirements |

### Rejected model

A conveyor-belt model in which one stage disappears completely when the next starts is **rejected**. Stages are overlapping developmental emphases (ADR-0005), not five isolated boxes.

---

## Transition Architecture

### Core transition rule

Movement between dominant stages is governed by:

**Developmental Window + Readiness Evidence + Student Voice + Human Review**

| Element | Role |
|---|---|
| Developmental Window | Programme planning anchor from ADR-0005; typical range, not birthday law |
| Readiness Evidence | Multi-source developmental and learning evidence informing judgment |
| Student Voice | Meaningful participation appropriate to developmental maturity |
| Human Review | Accountable educators/mentors (and family dialogue where age-appropriate) decide with the learner |

### Explicitly not Core transition mechanisms

- hard promotion exams as the sole or decisive gate;
- chronological age alone;
- single aptitude-test scores;
- algorithmic auto-promotion or auto-denial;
- unilateral parent, teacher or mentor decree.

### Transition evidence (architecture-level; not weighted scores)

Evidence may include, without becoming a numerical scoring model:

- foundational competency sufficiency for the next stage’s demands;
- longitudinal engagement (not a single event);
- independence under appropriate supervision;
- ability to reflect on learning, appropriate to age;
- sustained preference where concentration or pathway is involved;
- prerequisite capability for proposed depth;
- quality of completed missions / work;
- mentor observations;
- student voice;
- wellbeing / maturity;
- safeguarding considerations.

**Rules:**

1. Evidence informs human judgment; it does not auto-promote or auto-deny.
2. No Core numerical weights, readiness points or algorithmic scorecards are adopted here.
3. A learner outside the typical window may transition earlier or later if readiness, safeguarding and recognition coexistence support it (ADR-0005).

---

## Readiness Principle

Readiness is **multi-source judgment**, not a single metric.

1. Programme design uses ADR-0005 typical windows.
2. Individual stage placement and pathway commitment use readiness evidence under human governance.
3. Readiness for **stage transition** and readiness for **pathway depth** may differ: a learner may be ready for Deepen dominant stage while not yet ready for a particular advanced Major prerequisite package.
4. Detailed operational artefacts and procedures remain follow-on work (see Open Questions); Core requires the principle and proportional governance, not a software workflow.

---

## Exploration Floor

### Decision (proposed resolution of GAP-019)

The Exploration Floor is operationalised as **protected breadth dimensions** that must continue for every learner at every stage.

The Core **does not** adopt a fixed universal timetable percentage for the Exploration Floor in this ADR.

Scheduling load, hours and weekly packaging are left to later stage/country design (`GAP-016` and country profiles), provided protected dimensions remain non-zero and coherent.

### What the Exploration Floor must protect

At minimum, every learner continues appropriate development in:

1. **Communication** — oral, written and multimodal communication appropriate to stage.
2. **Literacy, numeracy and academic foundations** required for coherence and Formal Recognition Layer feasibility.
3. **Ethics and civic responsibility.**
4. **Physical development and wellbeing.**
5. **Cultural grounding** (content defined in the Country Implementation Profile; Core requires the dimension).
6. **Interdisciplinary learning** — work that connects domains rather than only deepening a single track.
7. **Exposure beyond the student’s concentration / Major** — continued contact with other Worlds and human-development domains where developmentally appropriate.

### Architectural effect

- Specialisation may increase.
- Breadth never becomes zero.
- Production pressure in Deepen/Produce may not abolish protected dimensions.
- Country profiles may express protected dimensions through subjects, missions, Knowledge Studios, physical programmes or civic formation — without Core inventing country curricula.

---

## Exploration Floor Across Stages

Breadth intensity changes by dominant stage; Core still sets **no hours or percentages**.

| Dominant stage | Breadth posture |
|---|---|
| **Explore** | Breadth dominates. Protected dimensions are the main programme, not residual enrichment. |
| **Discover** | Structured breadth across all Six Worlds dominates; protected dimensions continue as foundations and formation. |
| **Choose** | Breadth remains strong while provisional concentration appears; Exploration Floor prevents exclusive streaming. |
| **Deepen** | Depth increases materially; protected breadth continues as non-optional Core requirement. |
| **Produce** | Advanced production may dominate substantial effort; the learner remains subject to protected human-development dimensions and Recognition Layer requirements. |

**Produce-stage test:** A learner may not “opt out” of communication, civic, physical, cultural or broader learning merely because production intensifies.

---

## Pathway Mobility

### Meaning of reasonable reversibility

A learner changing provisional concentration, Major or Minor should **not**:

- automatically restart their entire education;
- lose all prior valid learning evidence;
- be permanently blocked solely because of an earlier preference or concentration.

Reasonable reversibility also does **not** mean:

- prerequisites do not matter;
- advanced pathways have no entry requirements;
- Formal Recognition Layer requirements can be ignored;
- instant frictionless switching without learning consequences.

Reversibility means the architecture must provide a **designed bridge**, not permanent lock-in and not pretend gaps do not exist.

### Transition types and proportional governance

| Transition type | Example | Typical process intensity |
|---|---|---|
| **Normal developmental transition** | Discover → Choose | Window + readiness + student voice + human review; light-to-moderate |
| **Temporary exploration** | Engineering-concentrated learner samples Enterprise missions without formal pathway change | Low process; mentor awareness; no Major/Minor rename |
| **Major/Minor adjustment** | Major stays Engineering; Minor Creative/Media → Enterprise | Moderate; lighter than full Major change where prerequisites permit |
| **Pathway transition (provisional)** | Engineering provisional concentration → Enterprise provisional concentration | Moderate; bridging as needed; highly reversible |
| **Major change** | Engineering Major → Health & Life Sciences Major | Higher; full bridging + recognition feasibility review |
| **Major ↔ Minor swap** | Where both domains already have sufficient evidence | Moderate; may be lighter than entering an entirely new Major |

**Principle:** Process intensity scales with consequence, prerequisite gap size, safeguarding risk and recognition impact — not with bureaucracy for its own sake.

---

## Bridging Architecture

### Decision (proposed resolution of GAP-020)

Pathway change uses:

**Existing Capability Recognition**  
+  
**Gap Identification**  
+  
**Targeted Bridging**  
+  
**Supported Transition**  
+  
**Review**

| Step | Meaning |
|---|---|
| Existing Capability Recognition | Identify valid prior learning and portable evidence that travels with the learner |
| Gap Identification | Name missing prerequisites honestly (knowledge, skills, recognition subjects, mission experience, safety, portfolio) |
| Targeted Bridging | Design catch-up / transition learning for identified gaps — not whole-programme restart |
| Supported Transition | Mentored entry into the new concentration/Major/Minor while bridging continues where needed |
| Review | Human review with student participation confirms feasibility, wellbeing and recognition coexistence |

### Bridging areas (architecture-level; not curricula)

- prerequisite knowledge;
- technical skills;
- recognition subjects / assessments required by the country profile;
- mission experience relevant to the target pathway;
- safety requirements for labs, workshops or field environments;
- portfolio / evidence gaps.

Do not invent detailed bridging curricula or software schemas in this ADR.

---

## Portable vs Pathway-Specific Capability

### Decision

Valid prior evidence should **travel with the learner**.

### Distinction

| Category | Meaning | Example |
|---|---|---|
| **Portable capability** | Evidence of capability that remains educationally valid across pathways | Communication; mathematical reasoning (general); collaboration; research practice; design thinking; completed interdisciplinary missions; ethics/civic evidence; physical development evidence |
| **Pathway-specific prerequisite** | Capability required for safe or coherent entry into a particular advanced pathway | Advanced mathematics required for a particular Engineering depth track; clinical-safety prerequisites for certain Health pathways; specialist tool competence for advanced media production |

### Rules

1. Changing pathway must not erase portable capability evidence.
2. Pathway-specific prerequisites may still gate **advanced** entry; the response is bridging, not silent waiver or permanent prohibition without review.
3. This distinction will later inform the Competency Graph (`GAP-009`); this ADR does **not** design that graph.

---

## Major/Minor Mobility

Conceptual rules (within ADR-0004/0005 constraints):

1. **Changing Minor** — generally lighter process than changing Major where the new Minor’s prerequisites are modest and Exploration Floor / recognition coexistence remain intact.
2. **Changing Major** — higher process; full bridging architecture; recognition feasibility review mandatory.
3. **Swapping Major and Minor** — permitted where readiness evidence supports both domains; process typically between Minor change and new-Major entry.
4. **Provisional concentration (Choose)** — may be added, changed or removed with relatively light process; must not be treated as formal Major/Minor.
5. **Cross-World combinations** — Major + Minor may sit in different Worlds; interdisciplinary combinations are Core-compatible. Detailed World competency maps remain open (`GAP-008`).
6. Major changes may require more bridging than Minor changes; avoid unnecessary bureaucracy for low-consequence adjustments.

Formal Major + Minor remains inappropriate in Explore, Discover and Choose (ADR-0005).

---

## Student Voice and Human Governance

### Student voice

1. Transition and pathway mobility include **meaningful student participation** appropriate to developmental maturity.
2. Pathway advice may be strong without becoming pathway coercion.
3. Family, mentor and institutional guidance may contribute; none alone decides.
4. Legal consent rules are **out of scope** here; they belong to country/safeguarding implementation.

### Proportional human review

Possible participants (as needed by transition type):

- learner;
- mentor / adviser;
- relevant educators;
- family where age-appropriate;
- specialist / pathway staff when advanced prerequisites or safety are involved.

**Avoid** requiring a large committee for every small adjustment (e.g. temporary exploration or Minor exploration).

**Require** stronger review for late-stage Major change with recognition or safeguarding implications.

### Decision authority principle

No single participant independently determines stage transition or pathway. Accountable human review **with** student participation remains mandatory.

---

## Relationship to Formal Recognition

1. Pathway mobility does **not** override statutory/recognition prerequisites (ADR-0003).
2. If a country’s recognised upper-secondary route requires particular subjects or assessments, a late pathway change may require additional catch-up.
3. The architecture supports **bridging** rather than pretending those requirements do not exist.
4. Country boards, subjects and Years are **not** specified in this ADR (`GAP-002` remains open for Malaysia).

---

## Relationship to Six Worlds

The Six Worlds remain:

1. Engineering & Intelligent Systems  
2. Health & Life Sciences  
3. Enterprise & Economics  
4. Earth, Energy & Built Environment  
5. Creative, Media & Human Communication  
6. Society, Leadership & Public Systems  

ADR-0006 requires that later World architecture support:

- exploration;
- concentration;
- cross-World combinations;
- mobility;
- Major/Minor.

Detailed competency maps remain open (`GAP-008`; proposed ADR-0011). This ADR does not build them.

---

## Algorithmic-Control Boundary

AI / data systems **may**:

- organise evidence;
- identify possible gaps;
- suggest pathway options;
- highlight patterns.

AI / data systems **may not** independently:

- promote a learner to a stage;
- deny transition;
- assign Major/Minor;
- prohibit pathway change.

Accountable human review and student participation remain mandatory. The Core does not require AI to be used (FND-003).

---

## Safeguarding / Wellbeing

1. Safeguarding and wellbeing considerations may delay, condition or reshape a transition or pathway change.
2. Safety prerequisites for labs, workshops, field or external missions bind bridging plans.
3. Pathway mobility must not be used to pressure learners into unsafe advanced environments.
4. Productive failure remains bounded as in FND-003 / ADR-0002.
5. Detailed child-protection procedures belong in country/project implementation profiles.

---

## Scenario tests (design acceptance)

| Scenario | Required outcome | ADR response |
|---|---|---|
| **A.** 12-year-old strongly prefers Engineering after one successful robotics activity | Must not become permanent pathway assignment | Interest/preference only; longitudinal evidence required; Discover/early Choose posture; no formal Major |
| **B.** 14-year-old with sustained Engineering interest for two years wants greater depth | Allow provisional/advanced concentration subject to readiness | Choose provisional concentration or early Deepen readiness review; Exploration Floor continues; not occupational labelling |
| **C.** 15-year-old Engineering concentration discovers strong Enterprise interest | Change direction through targeted bridging | Pathway transition + bridging architecture; prior valid learning retained; no whole-education restart |
| **D.** 16-year-old Engineering Major wants Enterprise as new Minor | Lighter process than full Major change where prerequisites permit | Major/Minor adjustment; proportional governance |
| **E.** 17-year-old Health Major wants Engineering but lacks advanced mathematics prerequisites | Neither simple prohibition nor pretend-no-gap | Gap identification + targeted bridging + recognition feasibility; supported transition if feasible |
| **F.** Produce-stage learner wants to stop all communication, civic, physical and broader learning | Exploration Floor prevents breadth reaching zero | Protected dimensions remain mandatory; production may not abolish them |
| **G.** AI predicts learner should not switch pathways | Human governance and student participation override algorithmic determinism | AI may advise only; cannot prohibit transition |

---

## Rationale

1. ADR-0004/0005 create stages and timing without specifying how movement and breadth survive specialisation pressure.
2. Protected dimensions operationalise Exploration Floor without inventing a false Core percentage (consistent with ADR-0002 progressive intensity and GAP-016 remaining open).
3. Bridging makes reversibility real without denying prerequisites or recognition obligations.
4. Proportional governance prevents both rubber-stamp mobility and committee overload.
5. Portable vs pathway-specific capability prepares Competency Graph work without designing schemas prematurely.
6. Algorithmic-control boundary preserves FND-003 human oversight under mobility pressure.

## Consequences

### Positive

- Gives implementable Core rules for stage movement, breadth protection and pathway change.
- Proposes architectural resolution of GAP-019 and GAP-020 (subject to human approval).
- Constrains country profiles against early lock-in, zero-breadth specialisation and recognition-blind switching.
- Clarifies Dominant Stage / Overlap as Core architecture.

### Risks / costs

- Protected dimensions without later exemplars may be under-specified in practice until stage packages / timetables exist (`GAP-016`).
- Bridging without later procedural design may become either cosmetic or overly bureaucratic.
- Dependency on ADR-0004 and ADR-0005 remaining coherent through their own approvals.
- Misreading “reasonable reversibility” as frictionless switching remains a training/governance risk.

### Follow-on work

- Human review of ADR-0004, ADR-0005 and this ADR.
- Stage/country timetable design expressing protected dimensions without violating Core non-percentage rule (`GAP-016`).
- Six Worlds maps supporting mobility and cross-World Major/Minor (`GAP-008`).
- Competency Graph treatment of portable vs pathway-specific evidence (`GAP-009`).
- Mission authenticity gates (`GAP-018`).
- Operational readiness-review artefacts and proportional governance procedures.
- Malaysia mapping only after Core ratification: stage → MY Year → recognition (`GAP-002`).

## Alternatives Considered

1. **Age-only transitions** — Rejected: conflicts with ADR-0005 readiness principle; harms late bloomers; birthday law false precision.
2. **Examination-only transitions** — Rejected: hard promotion exams as sole gate conflict with Lab-First / capability architecture and dual-layer model; recognition exams remain where required but are not Core stage-promotion machinery.
3. **Unrestricted movement with no prerequisites** — Rejected: unsafe; ignores recognition obligations; hollow depth.
4. **Irreversible pathway assignment** — Rejected: conflicts with FND-003, ADR-0004 reversibility and EV-0001 equity/tracking evidence direction.
5. **Fixed universal timetable percentage for Exploration Floor** — Rejected at Core level: premature; conflicts with progressive intensity (ADR-0002); leaves GAP-016 work still needed.
6. **Protected breadth dimensions without a Core fixed percentage** — **Accepted** as Exploration Floor operationalisation.
7. **Algorithm-driven readiness scoring** — Rejected: conflicts with FND-003 algorithmic-control rule; may be used only as advisory organisation of evidence, never as independent gate.

## Country-Specific Implications

| Topic | Core (this ADR) | Country / Malaysia profile |
|---|---|---|
| Stage transition | Window + readiness + student voice + human review | Local Year ceremonies, enrolment rules, documentation |
| Exploration Floor | Protected dimensions; no Core fixed % | Express dimensions via local subjects, missions, physical/civic programmes; timetable design |
| Bridging | Capability recognition + gaps + targeted bridge | Local recognition catch-up subjects/assessments with citations |
| Pathway names / loads | Major/Minor mobility principles | Terminology, credit/load packaging |
| Consent / safeguarding procedure | Principles only | Legal consent and child-protection detail |
| Malaysian Years / boards | Out of scope | After Core ratification (`GAP-002`) |

Do not invent Malaysian ages, Years, boards or statutory subject lists in this ADR.

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (APPROVED) §§4, 7, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0004 (UNDER REVIEW)
- ADR-0005 (UNDER REVIEW)
- `docs/12-evidence/EV-0001-developmental-stage-boundaries.md` (evidence context; does not approve this ADR)
- Future: `docs/02-student-journey/`, `docs/03-worlds-and-pathways/`, `docs/05-assessment/`, `docs/10-malaysia/`
- `GAP_REGISTER.md`

## Open Questions

1. Operational artefacts and procedures for readiness reviews and proportional governance panels/roles.
2. Stage-package exemplars showing how protected dimensions appear in programme design without Core percentages (`GAP-016`).
3. Minimum Discover exposure package before Deepen Major/Minor (related `GAP-008`; also ADR-0005 open question).
4. How portable vs pathway-specific capability is represented in the Competency Graph (`GAP-009`).
5. Whether some late Major changes become practically infeasible within remaining school time in a given country profile — and how honest counselling is documented without becoming algorithmic prohibition.
6. Mission authenticity interaction with pathway bridging when external stakeholders are involved (`GAP-018`).

## Explicit Non-Claims

This ADR does not:

- approve itself (remains `UNDER REVIEW`);
- treat ADR-0004 or ADR-0005 as approved;
- set Malaysian ages, school Years, boards or regulatory pathways;
- invent Malaysian recognition subjects or catch-up curricula;
- set Exploration Floor or weekly timetable percentages;
- define Competency Graph, Proof of Capability or readiness scoring schemas;
- create detailed Six Worlds competency maps;
- define detailed mission authenticity gates;
- design software workflows or AI scoring models;
- claim bridging always makes every late change feasible within remaining school time;
- authorise AI or any single adult to determine stage or pathway;
- alter APPROVED FND-003 or ADR-0001–0003;
- rewrite ADR-0004 or ADR-0005 bodies.
