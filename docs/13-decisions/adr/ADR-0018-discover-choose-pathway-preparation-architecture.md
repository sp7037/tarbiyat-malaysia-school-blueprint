# ADR-0018 — Discover → Choose Pathway Preparation Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0018` |
| Version | `0.1.0` |
| Status | `UNDER REVIEW` |
| Date | `2026-09-14` |
| Deciders | Human lead (TBD) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; Discover exposure context `ADR-0017` UNDER REVIEW; Worlds context `ADR-0011` UNDER REVIEW; developmental/pathway context `ADR-0004`–`ADR-0006` UNDER REVIEW; PoC context `ADR-0016` UNDER REVIEW; faculty context `ADR-0015` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-046 (primary); related GAP-009, GAP-045, GAP-047; developmental context GAP-003, GAP-004, GAP-019, GAP-020 |
| Source documents | `FND-003` §§4, 7, 10; ADR-0017 Choose boundary; ADR-0011 provisional concentration; ADR-0004 pathway discovery; Architecture brief for GAP-046 (2026-09-14) |

---

## Title

Discover → Choose Pathway Preparation Architecture

## Status

`UNDER REVIEW` — not APPROVED.

## Context

The Concept Constitution (`FND-003`, APPROVED) requires exploration before strong specialisation, longitudinal pathway discovery under human oversight, and forbids premature permanent career labelling of young children. No automated system may independently assign, restrict or permanently determine a learner’s educational pathway.

ADR-0017 (`UNDER REVIEW`) defines the Discover Meaningful Exposure Package and All-Six-Worlds Entitlement, and states that transition toward **Choose** supports better-informed **provisional concentration** — not permanent career selection and not a rigid pass/fail gate. Detailed pathway-preparation rules were left to **`GAP-046`**.

Without Core Discover→Choose pathway-preparation architecture:

- Choose collapses into early streaming, career selection or prestige-driven tracking;
- undecided or cross-World learners are treated as failures;
- interest, exposure traces, capability evidence and PoC Claims are collapsed into one score or gate;
- AI recommendations or family preference independently assign pathways;
- Discover exposure is mistaken for pathway readiness or Proof of Capability;
- unequal enrichment, tutoring and networks quietly distort direction;
- Creative/Civic/Enterprise directions are ranked below Engineering/Health;
- unsafe or unlicensed “professional practice” is treated as pathway ambition.

**ID pre-flight:** `ADR_INDEX.md` reserves ADR-0008–0010 and ADR-0012–0013 for other topics. ADR-0011 / 0014–0017 already have bodies. **No reserved ADR ID exists for Discover→Choose pathway preparation.** **No renumbering conflict.** This body uses the next free ID **ADR-0018**.

**Dependency note:** This ADR treats FND-003 and ADR-0001–0003 as approved law. It uses ADR-0017’s Discover Exposure Package / Choose boundary, ADR-0011’s Six Worlds and provisional concentration language, ADR-0004–0006 stage/mobility language, ADR-0016 PoC language and ADR-0015 faculty language only as **under-review context**. Those ADRs remain `UNDER REVIEW` and are **not** treated as approved. If any is materially revised before approval, this ADR must be re-checked.

This ADR remains Core / country-neutral. It does **not** define ages, grades/years, Discover duration, experience counts, percentages, interest or readiness scores, algorithmic weighting, psychometrics, pathway catalogues, Major/Minor load rules, scheduling, staffing ratios, infrastructure specifications, Competency Graph schemas, Mission-tag significance numerics, national curriculum equivalence, Malaysian accreditation mapping, admissions criteria or funding models.

### Scope clarification for GAP-046

GAP-046 was opened (via ADR-0011) for within/across-World pathway design rules that prevent hidden streaming. ADR-0017 deferred Discover→Choose pathway translation to the same gap. This ADR resolves the **pathway-preparation / anti-streaming transition architecture** at Discover→Choose. **Detailed within-World pathway naming catalogues and Deepen Major/Minor programme catalogues remain deferred** (see Deferred; related to GAP-004 / later design) and are **not** invented here.

---

## Decision

Tarbiyat Core adopts a **Discover → Choose Pathway Preparation Architecture** so that, after meaningful Six Worlds exposure, learners move into Choose through a **guided developmental transition** that supports **informed but provisional concentration** — without early career locking, forced single-World identity, pass/fail career gates, or algorithmic assignment.

1. **Informed choice, not early specialisation.** Discover creates lived experience for better next-step choices; Choose remains exploratory enough to permit change.
2. **Provisional concentration.** Learners may concentrate more heavily in one or more Worlds/directions without declaring permanent identity, profession or career.
3. **No forced single World.** One strong direction, several interests, genuine undecidedness and cross-World combinations are all architecturally legitimate; none is automatic failure.
4. **Multiple inputs, no single score.** Guidance may consider interest, exposure history, reflection, demonstrated capability/evidence where available, persistence/engagement patterns, educator/advisor observations, aspirations, emerging strengths and contextual constraints/opportunities — without reducing them to one readiness or employability score.
5. **Interest ≠ capability.** Strong interest does not prove capability; high capability does not force a pathway.
6. **Exposure ≠ pathway readiness.** Completing Discover meaningful exposure in a World does not automatically mean readiness for deeper concentration there.
7. **PoC boundary.** ADR-0016 Proof of Capability evidence may inform guidance where appropriate; PoC is **not** a prerequisite for every Choose decision.
8. **Human-governed decision.** AI/software may organise evidence, surface patterns, show options, identify missing exposure and support reflection; it must **not** autonomously assign pathways or permanently label learners.
9. **Learner voice with educational guidance.** Meaningful learner agency appropriate to developmental maturity; family/guardian dialogue where appropriate; educator/advisor guidance; school accountability — avoiding both total institutional assignment and unguided consumer-style choice.
10. **Reversibility.** Choose-stage concentration remains changeable: try, reconsider, broaden, change direction, maintain cross-World combinations.
11. **Breadth floor continuity.** Greater concentration must not abandon broad human development or Six Worlds architecture; equal-time requirements are not imposed.
12. **Equity.** Pathway emergence must not be distorted mainly by wealth, private tutoring, social networks, prestige bias, unequal lab access, gender/class stereotypes or algorithmic historical bias.
13. **Equal dignity.** Academic, creative, civic, health, enterprise and technological directions must not form a prestige hierarchy.
14. **Safety / ethics.** Pathway preparation must not permit unsafe or unlicensed professional practice.
15. Transition produces a conceptual **Provisional Concentration Plan** (see below) — not a credential, ranking, admission certificate, permanent profile label, psychometric classification or second Proof of Capability.
16. Entering Choose is a **guided developmental transition**, not a career pass/fail gate.
17. Competency Graph technology remains **`GAP-009`**. Mission tagging significance remains **`GAP-047`**. Discover exposure detail remains **`GAP-045` / ADR-0017**.

**Proposed resolution of GAP-046:** this ADR supplies Core Discover→Choose pathway-preparation architecture, readiness meaning, multi-input guidance rules, agency/governance, reversibility, breadth continuity, equity/dignity/safety, scenario tests and Core vs implementation boundary. Fine pathway catalogues and Major/Minor programme design remain deferred. GAP-046 is **not closed** until this ADR is APPROVED.

---

## Architectural Principles (adopted)

| # | Principle | Adoption |
|---|---|---|
| 1 | Informed choice, not early specialisation | **Adopted** |
| 2 | Provisional concentration | **Adopted** |
| 3 | No forced single World | **Adopted** |
| 4 | Multiple inputs without one score | **Adopted** |
| 5 | Interest ≠ capability | **Adopted** |
| 6 | Exposure ≠ pathway readiness | **Adopted** |
| 7 | PoC informs; not universal Choose prerequisite | **Adopted** |
| 8 | Human-governed; AI assist only | **Adopted** |
| 9 | Learner voice + educational guidance | **Adopted** |
| 10 | Reversibility of Choose concentration | **Adopted** |
| 11 | Breadth floor without equal-time mandate | **Adopted** |
| 12 | Equity against enrichment/prestige distortion | **Adopted** |
| 13 | Equal dignity of Worlds / directions | **Adopted** |
| 14 | Safety / ethics / no unlicensed practice | **Adopted** |
| 15 | Provisional Concentration Plan as transition artefact | **Adopted** (term and purpose only) |

No principle above is rejected. Numeric cut-offs, psychometric instruments and algorithmic assignment models remain **rejected** as Core pathway-determination mechanisms.

---

## Definitions

| Term | Meaning |
|---|---|
| **Pathway preparation** | Educational process that helps a learner interpret Discover experience and form provisional next-step intentions for Choose — not career selection. |
| **Provisional concentration** | Increased time and depth in one or more selected Worlds/directions during Choose, without formal Major/Minor and without permanent identity (aligns ADR-0004 / 0005 / 0011 context). |
| **Guided developmental transition** | Human-governed movement from Discover-dominant to Choose-dominant programme emphasis, based on exposure completion (or bridging), reflection and dialogue — not a career pass/fail exam. |
| **Provisional Concentration Plan** | Conceptual transition artefact recording exposure summary, interest/reflection signals, optional capability signals, provisional directions (including undecided/plural) and guidance notes — revisable; not a credential. |
| **Pathway guidance** | Human-accountable advice that organises multiple inputs and supports learner agency; recommendations inform, they do not unilaterally assign. |
| **Career decision** | Permanent occupational identity or employment destination. **Not** made by Tarbiyat on behalf of a school-aged learner (ADR-0004). |

---

## A. What “ready to enter Choose” means

Architecturally, a learner is **ready to enter Choose** when:

1. **All-Six-Worlds meaningful exposure** has been completed (ADR-0017 Meaningful Exposure Test / Entitlement), **or** equivalent bridging for late entrants / incomplete packages has been planned under human governance;
2. The learner has participated in **guided reflection** on Discover experience appropriate to developmental maturity;
3. Adults accountable for pathway guidance have reviewed the Discover Exposure Package / traces with the learner (and family/guardian where developmentally appropriate);
4. Safeguarding, wellbeing and Formal Recognition Layer feasibility continue to support the next stage’s demands (ADR-0003).

“Ready to enter Choose” does **not** mean:

- the learner has selected one World;
- the learner has PoC Capability Claims;
- the learner has an interest score above a threshold;
- an AI system has recommended a pathway;
- parents have chosen a profession;
- the learner is ready for formal Major/Minor (that remains Deepen — ADR-0005 context).

---

## B. Pass/fail readiness gate?

**Rejected as Core architecture:** a career-style pass/fail gate that promotes or fails learners into Choose based on marks, psychometrics, PoC density or AI scores.

**Adopted:** a **guided developmental transition**.

| Situation | Architectural treatment |
|---|---|
| Exposure entitlement complete + reflection dialogue held | Transition to Choose-dominant emphasis **acceptable** |
| Exposure incomplete | **Requires support / bridging** — complete or plan missing World exposure; do not career-fail the learner |
| Learner undecided | **Acceptable** — may enter Choose exploratory / plural |
| Safety or safeguarding concern | **Deferred or constrained** for affected activities; transition of stage may still proceed where otherwise ready |
| Formal Recognition conflict | Stage design must preserve recognition feasibility (ADR-0003); not used as a silent streaming tool |

Incomplete Discover exposure is an **educational support obligation**, not a personal failure label.

---

## C–D. Undecided and cross-World learners

| Question | Answer |
|---|---|
| Can a learner enter Choose while undecided? | **Yes.** Undecided after meaningful Six Worlds exposure is **not failure**. |
| Can a learner pursue two or more cross-World directions? | **Yes.** Provisional concentration may be singular, plural or interdisciplinary. |

Forced single-World selection at Choose entry is **prohibited**.

---

## E. Preference conflicts — principles only

When learner preference conflicts with demonstrated evidence, teacher advice, family preference or available school resources, Core applies:

1. **Learner voice** has meaningful weight appropriate to developmental maturity; pathway identity is not unilaterally assigned against the learner without dialogue.
2. **Evidence informs; it does not compel.** High capability elsewhere does not force that pathway; weak early evidence does not permanently bar interest-led exploration with support.
3. **Educator/advisor guidance** must challenge unsafe, prestige-only or resource-blind choices — and must also challenge premature narrowing.
4. **Family/guardian preference** informs where developmentally appropriate; it does **not alone** determine pathway (FND-003; ADR-0004).
5. **School resources** may constrain what depth can be offered **locally**; they must not permanently brand the learner or erase legitimate interest. Use bridging, partnerships, simulation, remote/partner access or deferred deeper work where feasible (`GAP-020` for mobility detail).
6. No single party — learner, family, teacher, mentor, AI or algorithm — independently determines the pathway.

Detailed dispute procedures are **out of scope** (implementation).

---

## F–G. What prevents premature locking and unguided choice?

### Premature career locking — prevented by

- Provisional (not permanent) concentration language;
- Explicit reversibility and mobility expectations;
- No formal Major/Minor at Choose (ADR-0005 context);
- Prohibition on permanent profession labels for children;
- Multi-input guidance without single-score gates;
- Breadth floor continuity during Choose.

### Completely unguided choice — prevented by

- Mandatory meaningful Discover exposure before informed Choose transition;
- Required reflection and human pathway dialogue;
- Educator/advisor duty to surface missing exposure, stereotypes, safety issues and option ranges;
- School accountability for equal-dignity opportunity across Worlds;
- Rejection of “whatever the market/parent wants” as sole rule.

---

## H–I. What survives from Discover; participation vs guidance-informing signals

| Survives into Choose | Role |
|---|---|
| Discover Exposure Package / World coverage status | Shows entitlement fulfilment and gaps |
| Participation traces (Exposure Evidence) | Show genuine experience; may support later stronger evidence |
| Learner reflections and interest signals | Inform provisional direction; revisable |
| Educator/advisor observations | Inform guidance; not sole decree |
| Persistence / engagement patterns over time | Longitudinal signal; not one-off tests |
| Formal Recognition progress (where applicable) | Continues under ADR-0003; not a World prestige score |
| PoC Capability Claims **if already formed** | Optional informing evidence; not required for every Choose decision |

| Normally remains participation / formative only | Must not become |
|---|---|
| One-off attendance, assembly, career fair | Pathway proof |
| Interest declared once | Permanent label |
| Early weak performance | Permanent deficit career ban |
| Family enrichment purchases | Automatic pathway entitlement or superiority |

**Participation trace ≠ pathway readiness ≠ Capability Claim.**

---

## J. Relationship map

| Concept | Role at Discover→Choose |
|---|---|
| **Meaningful Exposure Package** (ADR-0017) | Ensures lived breadth; prerequisite context for informed transition |
| **Capability Depth** (ADR-0011 ladder) | Describes how deep work has gone in a domain; stage ≠ depth |
| **PoC Capability Claims** (ADR-0016) | Evidence-backed demonstrations where available; optional guidance input |
| **Pathway interest** | Emerging preference / attraction; provisional |
| **Pathway preparation** (this ADR) | Process of interpreting exposure + signals toward provisional next steps |
| **Provisional concentration** | Choose-stage increase of depth/time without Major/Minor lock-in |

These must **not** be collapsed into one score, badge or automatic gate.

---

## Multiple-input guidance model

Pathway guidance **may** consider (non-exhaustive; unweighted at Core):

1. Learner interest and stated aspirations  
2. Meaningful exposure history across Worlds  
3. Learner reflection  
4. Demonstrated capability / evidence where available  
5. Persistence and engagement patterns  
6. Teacher / advisor / mentor observations  
7. Emerging strengths  
8. Contextual constraints and opportunities (local offerings, safeguarding, recognition feasibility)

### Boundaries

- No Core interest score, readiness score or algorithmic weighting.
- No psychometric classification as pathway law.
- No prestige ranking of Worlds.
- Outside enrichment may be noted as context; it must not dominate institutional judgment of readiness or dignity.
- AI may organise and suggest for human review; AI must not assign, restrict or permanently determine pathway (FND-003).

---

## Human roles (architecture only)

| Role | Responsibility |
|---|---|
| **Learner** | Meaningful agency: express interests, reflect, participate in dialogue, try/reconsider directions appropriate to maturity |
| **Family / guardian** | Dialogue and support where developmentally appropriate; informs — does not alone determine |
| **Educator / advisor / mentor** | Interpret evidence, broaden overlooked options, challenge unsafe or stereotype-driven choices, support reflection; do not unilaterally assign identity |
| **School** | Ensure All-Six exposure opportunity, equal dignity, safeguarding, recognition coexistence and accountable governance of pathway advice |

Staffing ratios are **not** specified here (ADR-0015 / related gaps).

---

## Provisional Concentration Plan (transition artefact)

### Decision

Discover→Choose should produce a conceptual **Provisional Concentration Plan**.

### Purpose

Organise Discover experience, reflection and provisional next-step intentions so Choose can begin with **informed agency** — and remain revisable.

### Conceptual contents (architecture-level)

| Element | Intent |
|---|---|
| Exposure summary | Which Worlds met meaningful exposure; any gaps / bridging notes |
| Interest & aspiration signals | Including plural, cross-World or undecided |
| Reflection notes | Learner sense-making (lightweight) |
| Capability signals | Optional: demonstrated evidence / PoC claims where they exist — clearly marked as non-mandatory |
| Persistence / engagement notes | Longitudinal patterns if available |
| Educator/advisor observations | Guidance, not decree |
| Provisional direction(s) | One, several, undecided, or cross-World combination |
| Breadth obligations | Reminder that Exploration Floor / protected breadth continues |
| Reversibility note | Plan is provisional and changeable |
| Constraints / opportunities | Local offering limits, safeguarding, recognition coexistence — without branding the learner |

### Explicitly must not become

- a credential or certificate of admission;
- a ranking or employability score;
- a permanent profile label (“Engineering student”);
- a psychometric classification;
- a second Proof of Capability Profile;
- an algorithmic assignment record treated as destiny.

Terminology note: “Learner Direction Profile” and “Pathway Exploration Plan” were considered. **Provisional Concentration Plan** is preferred because it matches existing provisional-concentration language and signals revisability. Local presentation names may vary if meaning is preserved.

---

## Reversibility rules (Choose)

Choose-stage concentration must remain changeable. Architectural expectations:

| Move | Expectation |
|---|---|
| Trying a direction | Allowed; treated as learning, not lock-in |
| Reconsidering | Expected for many learners |
| Broadening again | Allowed; Exploration Floor / continued World contact supports this |
| Changing direction | Allowed with proportionate support; bridging detail via `GAP-020` / ADR-0006 context |
| Maintaining cross-World combinations | Allowed and valued equally with single-direction concentration |

No Core numeric deadlines for “final” Choose identity. Progressive commitment hardens later (Deepen Major/Minor) under separate architecture — still reasonably reversible with bridging.

---

## Breadth and Six Worlds continuity during Choose

Choosing greater concentration must **not** mean abandoning:

- protected human-development dimensions (ADR-0006 Exploration Floor context);
- intellectual seriousness toward Worlds outside the provisional focus;
- Formal Recognition foundations where required (ADR-0003).

**Adopted breadth principle for Choose:**

> Concentration may increase; breadth never becomes zero; equal clock time across all Six Worlds is **not** required during Choose.

Continuing contact beyond the provisional focus may occur through Missions, Knowledge Studios, interdisciplinary work, civic/physical/cultural formation and selective World experiences — without inventing timetable percentages (`GAP-016` / `GAP-019`).

---

## Equity, dignity and safety

### Equity

Pathway emergence must not be distorted mainly by:

- family wealth;
- private tutoring;
- social networks;
- prestige bias;
- unequal access to laboratories/equipment;
- gender/class stereotypes;
- algorithmic historical bias.

Architecture requires that low-cost, local and community-anchored designs remain first-class paths to depth opportunity, consistent with ADR-0017 resource-feasible exposure.

### Equal dignity

Academic, creative, civic, health, enterprise, earth/built and technological directions share equal architectural dignity. No World is “more real.”

### Safety / ethics

- No unlicensed clinical practice or unsafe professional activity as “pathway preparation.”
- Age/developmental appropriateness, lab/field safety and ethical constraints bind all directions.
- Civic formation without partisan indoctrination (ADR-0011 Society boundary).

---

## Decision questions (answered)

| # | Question | Answer |
|---|---|---|
| A | Ready to enter Choose? | Meaningful Six Worlds exposure (or bridging) + guided reflection/dialogue + safeguarding/recognition feasibility — not career selection |
| B | Pass/fail gate? | No — guided developmental transition |
| C | Enter while undecided? | Yes |
| D | Cross-World directions? | Yes |
| E | Preference conflicts? | Multi-party dialogue; no single-party determination; evidence informs; family informs; resources constrain offerings not identity |
| F | Prevent premature locking? | Provisional language, reversibility, no Major/Minor at Choose, no permanent labels, multi-input guidance |
| G | Prevent unguided choice? | Exposure entitlement, reflection, human guidance duties, school accountability |
| H | What survives from Discover? | Exposure package, traces, reflections, observations, optional capability/PoC signals, recognition progress |
| I | Trace vs guidance signal? | Traces prove participation; only longitudinal multi-source signals may inform guidance; neither auto-assigns pathway |
| J | Exposure / depth / PoC / interest / preparation / concentration? | Related layers; not collapsed (see Relationship map) |
| K | Core vs implementation? | Principles and artefact purpose are Core; ages, catalogues, scores, schedules, staffing and country mapping are implementation / later gaps |

---

## Scenario Tests

| ID | Scenario | Architectural result | Rationale |
|---|---|---|---|
| **A** | Strong preference for Engineering/Technology; limited demonstrated capability there | **Acceptable with support** | Interest may guide provisional concentration; capability gaps addressed through Choose depth and bridging — interest ≠ automatic mastery, but interest is not banned |
| **B** | Exceptional maths/science capability; wants Creative/Cultural direction | **Acceptable** | High capability must not force STEM pathway; Creative direction has equal dignity |
| **C** | Genuinely undecided after meaningful Six Worlds exposure | **Acceptable** | Undecided ≠ failure; exploratory Choose permitted |
| **D** | Wants Health because parents insist on becoming a doctor | **Requires support** (challenge forced career framing) | Family informs; cannot alone determine; no premature “future doctor” label; Health exploration may continue without clinical/professional lock-in |
| **E** | Strong interests spanning Technology + Creative + Enterprise | **Acceptable** | Cross-World provisional concentration supported |
| **F** | Resource-poor school; no sophisticated Labs during Discover | **Acceptable** if meaningful exposure still met via feasible designs | Expensive labs not required for exposure or legitimate provisional interest (ADR-0017) |
| **G** | Changes preferred direction several times | **Acceptable** | Reversibility is design requirement, not failure |
| **H** | AI recommends one pathway; learner and advisor disagree | **Acceptable to decline AI** | AI must not assign; human governance + learner voice prevail |
| **I** | Highest PoC evidence in one World; strongest interest in another | **Acceptable** | PoC informs; does not compel; interest may guide provisional try with honest capability dialogue |
| **J** | Sufficient meaningful exposure; very few formal Capability Claims | **Acceptable** | PoC not prerequisite for every Choose decision |
| **K** | Family purchases extensive outside enrichment in one World | **Requires equity-aware support** | Enrichment is context, not automatic pathway entitlement or superiority over peers |
| **L** | Wants a socially lower-prestige pathway in local culture | **Acceptable** | Equal dignity; school must not steer solely by prestige |
| **M** | Seeks unsafe / unlicensed professional activity before appropriate age/licensing | **Prohibited** (as practice); lawful educational alternatives may be offered | Safety/ethics override ambition framing |
| **N** | School lacks the learner’s preferred later pathway locally | **Deferred / requires support** | Local constraint ≠ identity ban; use partnerships, simulation, bridging, remote access or later mobility (`GAP-020`) where feasible |

Result vocabulary used above: **acceptable** · **requires support** · **prohibited** · **deferred**. No scenario uses a career pass/fail “fail the learner” outcome.

---

## Core vs implementation boundary

| Core (this ADR) | Country / school implementation |
|---|---|
| Guided developmental transition meaning | Ages, Years, calendars |
| Provisional concentration rules | Timetables, hours, staffing |
| Multi-input guidance principles (unweighted) | Local advisory workflows and forms |
| Provisional Concentration Plan purpose/contents (conceptual) | Templates, digital systems, UI |
| Human/AI boundary | Software products |
| Equity, dignity, safety principles | Local enrichment policy detail; safeguarding law |
| Reversibility expectations | Bridging curricula detail (`GAP-020`) |
| Formal Recognition coexistence | Exact boards/exams (ADR-0003 / country profile) |

Country profiles must not silently restore early irreversible streaming, prestige hierarchies or algorithmic pathway assignment.

---

## Rationale

- Completes the Discover→Choose bridge left open by ADR-0017 / GAP-046 without inventing ages or catalogues.
- Protects FND-003 exploration-before-specialisation and anti-algorithmic pathway rules.
- Aligns with ADR-0004 pathway discovery sequence and ADR-0005 provisional concentration at Choose.
- Keeps ADR-0016 PoC informative but non-mandatory for every Choose decision.
- Prevents both premature career locking and unguided consumer choice.
- Preserves Six Worlds equal dignity and equity against enrichment distortion.

## Consequences

### Positive

- Operational meaning for “informed provisional concentration.”
- Clear treatment of undecided and cross-World learners.
- Clean boundaries among exposure, interest, capability depth and PoC.
- Explicit AI/human and family/learner governance rules.
- Scenario-tested anti-streaming, equity and safety positions.

### Risks / costs

- Without later bridging detail (`GAP-020`), reversibility may remain paper-thin in Deepen.
- Without Exploration Floor timetable expression (`GAP-016`/`GAP-019`), Choose breadth may erode under production pressure.
- Schools may over-document the Provisional Concentration Plan into a de facto credential if governance is weak.
- Dependency on still under-review ADR-0017 / 0011 / 0004–0006 / 0016 coherence.

### Follow-on work

- Human review of this ADR; close GAP-046 only if APPROVED.
- Preserve GAP-045 (ADR-0017), GAP-047, GAP-009 open as applicable.
- Detailed within-World / Major-Minor pathway catalogues remain deferred (GAP-004 / later design) — not invented here.
- Optional later population of `docs/02-student-journey/` and `docs/03-worlds-and-pathways/` after review direction is clear.

## Alternatives Considered

1. **Pass/fail career readiness gate** — Rejected: recreates streaming; conflicts with FND-003 and ADR-0017.
2. **Algorithmic / psychometric pathway assignment** — Rejected: conflicts with FND-003.
3. **Forced single-World Choose declaration** — Rejected: harms undecided and cross-World learners; premature locking.
4. **PoC-mandatory Choose entry** — Rejected: Proof ≠ Participation; over-credentials Discover; conflicts with ADR-0016 / 0017 boundaries.
5. **Parent- or school-only assignment** — Rejected: violates learner participation and multi-party governance.
6. **Unguided free choice without educational dialogue** — Rejected: abandons guidance duties and equity protection.
7. **Guided developmental transition + Provisional Concentration Plan + multi-input human governance** — **Selected**.

## Country-Specific Implications

Country / project profiles may later:

- localise advisory practices and family-dialogue norms;
- express Choose offerings in local stage structures without inventing Core scores;
- map provisional concentration language to national skills vocabulary **without** converting Choose into vocational streaming.

**Core must not embed Malaysian Year maps, admissions cut-offs or prestige hierarchies into pathway preparation.**

## Open Questions / Deferred

1. Exact ages, grades/years and Discover duration (`GAP-003` / country profiles).
2. Formal Major/Minor catalogues, load and naming fineness (GAP-004 / later design; not closed by this ADR).
3. Interest/readiness scores, algorithmic weights and psychometrics — **not adopted as Core**.
4. Mission World-tagging significance numerics (`GAP-047`).
5. Competency Graph schemas linking orientation artefacts (`GAP-009`).
6. Bridging curricula detail when changing concentration (`GAP-020`).
7. Exploration Floor timetable expression during Choose (`GAP-016` / `GAP-019`).
8. Staffing ratios and advisory caseloads (not Core here).

## Explicit Non-Claims

This ADR does **not**:

- approve itself;
- close GAP-046 before human approval;
- close GAP-009, GAP-045, GAP-047 or unrelated gaps;
- define ages, grade/year mappings or Discover duration;
- prescribe experience counts, percentages, interest scores or readiness scores;
- create pathway catalogues or Major/Minor implementation rules;
- design Competency Graph schemas or software;
- claim Malaysian curriculum equivalence, accreditation or admissions treatment;
- authorise AI or any single adult to determine a learner’s pathway;
- treat under-review ADRs as approved;
- establish a prestige hierarchy among Worlds;
- convert the Provisional Concentration Plan into a credential or second PoC.

## Related documents

- `FND-003` Concept Constitution §§4, 7, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0017 (`UNDER REVIEW` — Discover Meaningful Exposure Package; Choose boundary)
- ADR-0011 (`UNDER REVIEW` — Six Worlds; provisional concentration)
- ADR-0004–0006, ADR-0015–0016 (`UNDER REVIEW` — context only)
- `GAP_REGISTER.md` — GAP-046 proposed resolution via this ADR; GAP-009 / 045 / 047 remain open as applicable
- `docs/02-student-journey/SECTION_README.md`
- `docs/03-worlds-and-pathways/SECTION_README.md`
