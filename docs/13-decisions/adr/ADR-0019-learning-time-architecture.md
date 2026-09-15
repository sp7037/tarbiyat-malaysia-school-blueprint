# ADR-0019 — Learning-Time Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0019` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-15` |
| Approved | `2026-09-15` |
| Deciders | Human architectural review (approval hygiene checkpoint) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; developmental/pathway context `ADR-0004`–`ADR-0006` UNDER REVIEW; mission context `ADR-0007` UNDER REVIEW; Worlds/exposure context `ADR-0011` / `ADR-0017` UNDER REVIEW; pathway preparation `ADR-0018` UNDER REVIEW; faculty/capacity context `ADR-0015` UNDER REVIEW with `PEO-004` / `PEO-005` DRAFT companions (not treated as approved); PoC evidence context `ADR-0016` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-016 (primary); related GAP-003, GAP-019, GAP-032, GAP-034, GAP-045; opens GAP-048 |
| Source documents | `FND-003` §§4–6; ADR-0002 open question on stage proportions; ADR-0003 Consequences (exam crowding risk); Government + Investor Presentation Readiness Stress Test (2026-09-15) identifying GAP-016 as cross-cutting blocker |

---

## Title

Learning-Time Architecture — Missions, Knowledge Studios, Formal Recognition and Anti-Double-Workload Design

## Status

`APPROVED`

## Context

ADR-0002 (APPROVED) adopts Lab-First, Mission-Based learning with retained direct teaching, Knowledge Studios, progressive intensity and **no fixed Core mission/laboratory percentage**. ADR-0003 (APPROVED) retains the Formal Recognition Layer and explicitly warns that examination preparation may crowd out missions unless timetabling is solved (`GAP-016`).

`GAP-016` tracked the missing Core learning-time constraints for missions vs Knowledge Studios vs exam preparation — principles by stage expressing protected dimensions, **not** a single Core percentage. This ADR supplies those constraints.

Without Core learning-time architecture:

- Missions collapse into occasional project days or enrichment;
- Knowledge Studios silently restore a conventional classroom-centred day;
- Formal Recognition / exam preparation crowds out the Learning Engine;
- Missions are stacked on top of a full conventional timetable (**double workload**);
- Six Worlds are implemented as six additional compulsory subjects;
- Production replaces necessary conceptual/disciplinary teaching — or the reverse false binary returns;
- fixed universal percentages are mistaken for Core doctrine;
- under-resourced campuses claim Mission intensity they cannot safely staff;
- timetable design ignores Mentor / Practitioner capacity constraints (ADR-0015 / PEO-004 / PEO-005 context).

The Government + Investor Presentation Readiness Stress Test (2026-09-15) repeatedly surfaced GAP-016 as the blocker for ordinary-Tuesday description, Six Worlds overload fears, exam coexistence, parent workload concerns and staffing realism.

**ID pre-flight:** `ADR_INDEX.md` reserves ADR-0008–0010 and ADR-0012–0013 for other topics. ADR-0001–0007, 0011, 0014–0018 already have bodies. **No reserved ADR ID exists for GAP-016.** **No renumbering conflict.** This body uses the next free ID **ADR-0019**.

**Dependency note:** This ADR treats FND-003 and ADR-0001–0003 as approved law. It uses ADR-0004–0007, 0011, 0015–0018 and PEO-004/005 only as **under-review / DRAFT context**. Those artefacts remain `UNDER REVIEW` or `DRAFT` and are **not** treated as approved. If any is materially revised before approval, this ADR must be re-checked.

This ADR remains Core / country-neutral. It does **not** invent weekly hours, percentages, age bands, Year maps, staffing ratios, Malaysian exam calendars, subject lists, period lengths, bell schedules or campus clocks.

## Decision

Tarbiyat Core adopts a **Learning-Time Architecture** that defines how learning effort is organised so the school can be genuinely Lab-First and Mission-Based while retaining Formal Recognition and disciplinary depth **without double workload**.

1. Learning time is organised as **Learning-Time Modes**, not as an automatic list of additional timetable subjects.
2. The programme is a **single integrated learner week**, not Mission work stacked on a full conventional subject timetable.
3. **Mission Mode** and related production environments are the **primary organising logic** of the Tarbiyat Learning Engine over a meaningful programme window (see Primary Organising Logic Test).
4. **Knowledge Studio Mode** remains essential for theory, critique, briefing, systematic foundations and Formal Recognition preparation — and must **not** become the exclusive centre of school life.
5. Formal Recognition / examination preparation is a **legitimate protected function**, normally hosted inside Knowledge Studio and Mission-linked practice — not a third parallel school day.
6. Six Worlds exposure is scheduled through Missions, rotations, studios and formation experiences — **not** as six compulsory World subjects.
7. Mentoring, reflection, documentation and capability-evidence work are primarily **embedded** in Mission and Studio cycles, with explicit protected dialogue time where stage intensity requires it.
8. Physical, character and civic formation are expressed as **protected dimensions** (Exploration Floor context), not necessarily as separate branded subjects.
9. Learning-time intensity **changes by developmental stage** (Explore → Produce) without Core fixed percentages.
10. Timetable intensity is **capacity-coupled**: a campus may not claim Mission intensity it cannot staff safely (PEO-004 / PEO-005 context).
11. Core defines **constraints, relationships and authenticity tests**; country profiles and campuses design clocks; numeric planning ranges remain **evidence-dependent after pilots** (`GAP-048`).

**Resolution of GAP-016:** this ADR supplies Core learning-time modes, integration rules, anti-double-workload mechanism, stage postures, Six Worlds scheduling logic, Recognition Season rules, authenticity tests and scenario tests. Campus clocks, hours and percentages remain deferred under `GAP-048` (Open).

---

## Learning-Time Modes

A **Learning-Time Mode** is a way of organising learner effort and adult attention. Modes may occupy dedicated blocks, rotate, or be **embedded** inside other modes. Modes are **not** automatically separate subjects on a timetable.

| Mode | Purpose | Typical hosts | Default relationship |
|---|---|---|---|
| **Mission Mode** | Investigation, design, production, critique, iteration toward inspectable outcomes | Mission Labs, workshops, studios, field, simulation, community environments | Primary organising logic of the Learning Engine |
| **Knowledge Studio Mode** | Briefing, seminar, focused theory, language/mathematics practice, critique, systematic foundations | Knowledge Studios / seminar spaces | Essential support; not exclusive centre of school life |
| **Recognition Preparation Mode** | Work specifically required for Formal Recognition Layer success | Usually inside Knowledge Studios; may use Mission-linked practice where legitimate | Protected function; not a third parallel day |
| **Mentoring / Pathway Dialogue Mode** | Longitudinal guidance, reflection on preference/evidence, stage/pathway conversation | Mentor sessions, advisory blocks, embedded Mission debriefs | Explicit at high-guidance transitions; otherwise often embedded |
| **Reflection / Documentation / Evidence Mode** | Capture of process, Contribution Records, capability traces, defence preparation | Embedded in Mission production cycle; selective Studio defence sessions | Default **embedded**; avoid duplicate “portfolio homework factory” |
| **Formation Mode** | Physical development, ethics/civic responsibility, cultural grounding, wellbeing | Physical programmes, civic experiences, assemblies with substance, Mission ethics moments | Protected dimensions; may be dedicated or embedded |
| **Independent / Collaborative Practice Mode** | Deliberate practice, rehearsal, reading, team coordination without new formal teaching | Studio, lab, library, supervised open sessions | Supports Mission and Recognition; not unstructured free time by default |

### What modes are not

- Modes are not six (or seven) new examinable subjects.
- Modes are not a mandate that every mode appears as a labelled period every day.
- Modes do not abolish disciplines; disciplines travel through Mission tool-use **and** Studio foundations.

---

## Component relationships

### Missions / Mission Labs

Missions organise **substantial** learning effort around real or realistically scoped problems with a production cycle (ADR-0002). Mission Mode is where Lab-First identity is lived. Mission work may legitimately exercise mathematics, sciences, languages, design, ethics and other disciplines **as tools**, without pretending every discipline is fully taught only inside Missions.

### Knowledge Studios

Knowledge Studios replace the idea of the classroom as the **sole** centre of school life. They remain essential for:

- conceptual teaching that Missions alone would distort;
- languages and mathematics deliberate practice;
- critique seminars;
- briefing before Mission phases;
- Formal Recognition preparation.

### Disciplinary foundations / explicit instruction

Disciplines increasingly function as knowledge tools for missions **while** systematic subject learning is preserved where required for coherence and Formal Recognition (ADR-0002 §8). Integration is preferred when it deepens Mission work; **focused instruction is required** when a concept cannot be responsibly learned only by incidental Mission encounter (see Integration Rules).

### Formal Recognition / examination preparation

Where the country requires statutory or recognised assessment, preparation time is **architecturally legitimate** (ADR-0003). It must be designed **inside** the single programme — typically as Recognition Preparation within Knowledge Studio Mode — not as Missions plus a full conventional exam school.

### Six Worlds exposure

Worlds are capability/mission domains (ADR-0011 context), not subject lists. Discover All-Six entitlement (ADR-0017 context) is satisfied across a stage window through Missions and related experiences — **not** by adding six World courses.

### Mentoring / pathway dialogue

Human-guided pathway conversation (FND-003; ADR-0015 / ADR-0018 context) needs real adult time. High-guidance transitions (especially Discover→Choose) require protected dialogue capacity; routine mentoring may be embedded in Mission critique and reflection.

### Reflection / documentation / Capability evidence

Documentation and evidence capture are part of the production cycle (ADR-0002) and PoC architecture (ADR-0016 context). Default: **embed** in Mission Mode. Do not create a second evening workload of “portfolio for its own sake” that duplicates Mission documentation.

### Physical, character and civic formation

These remain integral (FND-003 §2, §10) and map to Exploration Floor protected dimensions (ADR-0006 context). They may appear as dedicated Formation Mode blocks or as embedded Mission/Studio experiences — country content stays in Country Profile.

### Independent / collaborative work

Legitimate practice and team coordination support Mission and Recognition goals. Unsupervised “free periods” that replace teaching, mentoring or safe production are not a Core substitute for Learning-Time Modes.

---

## Integrated Programme Principle (anti-double-workload)

### Definition

Tarbiyat designs **one coherent learner programme**. Mission Mode is not an extracurricular add-on stacked atop an unmodified conventional subject timetable.

**Double workload** means learners (and staff) are expected to complete:

1. a full conventional classroom/exam school day **and**
2. substantial Mission / production obligations as additional load,

without redesigning the base programme.

That pattern is **architecturally rejected**.

### Mechanism

| Rule | Effect |
|---|---|
| **Single Programme Rule** | Weekly design starts from Learning-Time Modes serving both Learning Engine and Formal Recognition — not two full programmes glued together |
| **Substitution Rule** | When Mission Mode carries legitimate disciplinary practice, corresponding Studio drill for the **same** learning goal should reduce or re-sequence — not automatically duplicate |
| **Non-Elimination Rule** | Substitution never eliminates Formal Recognition obligations or protected Exploration Floor dimensions |
| **Evidence Embedding Rule** | Capability documentation is primarily Mission-cycle work, not a third homework system |
| **Season Rule** | Temporary Recognition intensification is allowed; permanent dual-full-load is not |

### Parent / learner workload test

If a typical week requires Mission production **plus** unchanged full conventional homework **plus** separate portfolio homework for the same outcomes, the timetable has likely failed the Integrated Programme Principle.

---

## Primary Organising Logic Test (anti-project-day)

Over a **meaningful programme window** appropriate to stage (term, cycle or equivalent — length is implementation, not Core hours), the Learning Engine must satisfy:

1. **Mission Continuity** — learners engage in sustained Mission / production sequences, not only isolated “project days,” clubs or end-of-term displays.
2. **Production seriousness** — work aims at inspectable outcomes and critique/iteration, not demonstration theatre alone (ADR-0002).
3. **Studio as support** — Knowledge Studios brief, deepen and prepare; they do not monopolise the lived centre of school.
4. **Recognition coexistence** — Formal Recognition needs are met **inside** the single programme, without abolishing Mission Mode as the Learning Engine’s organising logic.
5. **Capacity honesty** — declared Mission intensity is staffable under capacity principles (PEO-004 / PEO-005 context).

Failing this test means the campus may run projects, STEM clubs or enrichment — but should not claim full Tarbiyat Lab-First identity for that window.

**Core does not set a percentage threshold** for “how much Mission time is enough.” Authenticity is tested by the above properties, stage posture (below) and capacity honesty — not by inventing a universal clock share.

---

## Knowledge Studio and Recognition safeguards

### Anti-classroom-capture

Knowledge Studios must not silently expand until they recreate a conventional subject-and-period school with Missions as decoration.

**Studio Dominance Warning:** If Mission Mode is regularly cancelled to protect Studio routine (outside defined Recognition Seasons), the programme is drifting toward rejected Alternative 1 of ADR-0002 (classroom-first + enrichment labs).

### Recognition Season Rule

Country examination calendars may create **Recognition Seasons** — bounded periods of heightened Recognition Preparation Mode.

During a Recognition Season:

- Recognition Preparation intensity may temporarily increase;
- Mission Mode may narrow in scope, shorten cycles, or shift toward Mission-linked practice that still serves recognition-relevant skills;
- Mission Mode must **not** be abolished as a permanent state;
- after the season, programme design must restore stage-appropriate Mission primacy for the Learning Engine.

Permanent “exam-prep first, missions optional” is rejected (ADR-0002 Alternative 4).

### Exam-crowding stop-test

If Formal Recognition preparation becomes the exclusive organising logic of ordinary weeks outside defined Recognition Seasons, the Learning Engine has been crowded out — a known ADR-0003 risk. Programme redesign is required.

---

## Discipline Integration Rules

### When integration should happen

A discipline may be taught/practised primarily through Mission Mode when:

- the Mission genuinely requires that disciplinary knowledge or skill;
- adult design ensures conceptual coherence (not accidental mention);
- safety and developmental fit allow authentic practice;
- Formal Recognition mapping (country) can still be satisfied across the wider programme.

### When integration must NOT replace focused instruction

Focused Knowledge Studio (or equivalent) instruction remains necessary when:

- a foundational concept is a prerequisite that Mission trial-and-error would make unsafe, unjust or incoherent;
- deliberate practice (e.g. literacy, numeracy, language accuracy) requires spaced rehearsal beyond Mission episodes;
- Formal Recognition specifications require systematic coverage not reasonably carried by available Missions;
- ethical, safeguarding or regulated content needs explicit teaching before practice.

**Artificial integration** — forcing unrelated content into a Mission solely to “cover” a syllabus checkbox — is rejected. Better: honest Studio teaching, then Mission tool-use.

---

## Six Worlds scheduling logic

| Requirement | Scheduling implication |
|---|---|
| All-Six meaningful exposure in Discover (ADR-0017 context) | Plan coverage **across the Discover stage**, not necessarily equal weekly hours or six simultaneous courses |
| Worlds ≠ subjects | Do not create six compulsory World subjects or six World exams as Core |
| Equal dignity | Avoid prestige capture where only Engineering/Health get real Lab time |
| Cross-World Missions | One Mission may serve multiple Worlds only where learner work is substantively World-relevant (GAP-047 context) |
| Resource-constrained campuses | Use feasible Missions, rotations, field, simulation and community contexts — reduce concurrency, not authenticity theatre |

Six Worlds overload is prevented by **entitlement-across-stage**, not by adding six periods.

---

## Stage learning-time postures

Intensity changes across Explore → Discover → Choose → Deepen → Produce. **Core sets no hours or percentages.** Stage meanings use ADR-0004–0006 context only (still UNDER REVIEW).

| Dominant stage | Mission Mode posture | Knowledge Studio / Recognition posture | Six Worlds / breadth | Mentoring / evidence |
|---|---|---|---|---|
| **Explore** | Short, highly guided Missions; breadth over depth | Strong foundations; Studios carry much systematic learning | Broad sampling; not All-Six entitlement completion yet | Light guidance; reflection embedded |
| **Discover** | Structured Missions / rotations supporting All-Six exposure | Studios support foundations + Mission briefing; Recognition as required by country stage | All-Six entitlement across stage (ADR-0017 context) | Rising guidance toward pathway sense-making |
| **Choose** | Missions support provisional concentration without lock-in | Studios balance concentration support + Exploration Floor | Breadth remains strong; no exclusive streaming | **High** pathway dialogue intensity |
| **Deepen** | Longer, deeper Missions; rising authenticity/complexity | Studios deepen Major/Minor tools + Recognition | Exploration Floor protected dimensions continue | Mentoring sustains mobility/bridging awareness |
| **Produce** | Advanced production may dominate substantial effort | Studios/Recognition remain non-optional; may seasonalise | Breadth never zero; formation continues | Evidence/defence intensity rises; mentoring protects wellbeing |

**Produce-stage test (time):** advanced production may not abolish Knowledge Studio foundations, Formal Recognition obligations, mentoring capacity or Exploration Floor dimensions.

---

## Capacity-Coupled Intensity

Learning-time design must respect faculty capacity principles (ADR-0015; PEO-004 Mission capacity; PEO-005 Mentor caseload — DRAFT context, not approved):

1. Declared Mission concurrency and risk level must fit authorised, current, available adults.
2. Mentoring blocks at Discover→Choose must be staffable as meaningful dialogue, not nominal assignment.
3. Resource-constrained campuses **reduce Mission concurrency, risk or simultaneity** rather than fake Tarbiyat intensity.
4. Timetable authors must not schedule Mission Mode that systematically forces unsafe double-supervision or caseload breach.

Core still sets **no staffing ratios**.

---

## Decision classification

| Class | What belongs here | Examples |
|---|---|---|
| **A. Core invariant** | Modes; Integrated Programme Principle; Primary Organising Logic Test; anti-double-workload; anti-project-day; anti-classroom-capture; Recognition Season Rule; Integration/Separation rules; Six Worlds ≠ six subjects; capacity-coupled intensity; no fixed Core % | This ADR |
| **B. Country Profile decision** | Exam boards, recognition calendars, language/subject mandates, cultural formation content, regulated instructional minutes if any | `docs/10-malaysia/` after research |
| **C. Developmental / stage-specific design** | Stage postures; which modes are embedded vs explicit at each stage; Discover exposure packaging | ADR-0004–0006 / 0017 / 0018 context + this ADR postures |
| **D. Campus / pilot timetable decision** | Bell times, period length, weekly grid, which days host Labs vs Studios | Local timetable; non-normative examples only |
| **E. Evidence-dependent numeric range** | Planning ranges for Mission vs Studio share by stage after pilots | `GAP-048` — not Core doctrine |

---

## Non-normative illustrative day patterns

The following are **NON-NORMATIVE EXAMPLES** only. They are **not** Core clocks, not approved percentages, and not Malaysia (or any country) timetables. They exist solely to show that an ordinary day can be described **after** Learning-Time Architecture exists.

### Example A — Explore / early Discover (illustrative)

Morning Knowledge Studio foundations (literacy/numeracy/language) → mid-day short Mission Lab investigation with briefing and make/test → short reflection/documentation embedded in Mission close → Formation (physical or civic) → light independent practice. Mentoring incidental or small-group.

### Example B — Choose / Deepen (illustrative)

Mission Lab block (extended production / critique with Practitioner+Educator team) → Knowledge Studio seminar deepening tools required by the Mission and/or Recognition → Mentor pathway dialogue (scheduled) → Formation or collaborative practice. Recognition Preparation appears as Studio segment, not a second school.

### Example C — Produce with Recognition Season nearby (illustrative)

Focused Recognition Preparation Studio block → Mission Mode narrowed to recognition-compatible practice or short production sprint → documentation/defence prep embedded → mentoring/wellbeing check. After season ends, Mission primacy restores per stage posture.

---

## Scenario tests

| ID | Scenario | Result | Rationale |
|---|---|---|---|
| **A** | One “Innovation Friday” project day; Mon–Thu conventional periods only | **Fails** Primary Organising Logic / Mission Continuity | Project-day enrichment, not Lab-First Engine |
| **B** | Full conventional timetable + after-school Missions mandatory | **Prohibited** as Tarbiyat design | Double workload; violates Integrated Programme Principle |
| **C** | Mathematics taught in Studio deliberate practice **and** used as Mission tool without duplicating the same homework twice | **Acceptable** | Integration + foundations; Substitution Rule |
| **D** | Exam season: temporary increase in Recognition Preparation; Missions narrowed but not abolished | **Acceptable** | Recognition Season Rule |
| **E** | Exam season becomes permanent year-round; Missions optional clubs | **Prohibited** as Tarbiyat identity | ADR-0002 Alternative 4 restored |
| **F** | Six periods labelled World 1–6 every week | **Prohibited** as Core pattern | Six Worlds ≠ six subjects |
| **G** | Discover covers All-Six via rotating Missions across the stage, unequal weekly hours | **Acceptable** | ADR-0017 entitlement-across-stage |
| **H** | Mission forces unrelated literature unit “for coverage” | **Prohibited** (artificial integration) | Use honest Studio teaching instead |
| **I** | Safety-critical lab skill taught in Studio before Mission tool use | **Acceptable / required** | Integration must not replace necessary focused instruction |
| **J** | Small campus runs fewer concurrent Missions, lower risk, staggered Labs | **Acceptable** | Capacity-coupled; quality > fake intensity |
| **K** | Campus claims high Mission intensity with one overloaded Lead across many R2 rooms | **Not operable** | Breaks capacity coupling (PEO-004 context) |
| **L** | Portfolio homework duplicates Mission documentation already done in Lab | **Requires redesign** | Evidence Embedding Rule; parent workload test |
| **M** | Languages retain substantial Studio practice while Missions use communication for briefs/defences | **Acceptable** | Foundations + tool-use coexistence |
| **N** | Deepen learner “opts out” of civic/physical formation because production is intense | **Prohibited** | Exploration Floor / Produce-stage test |
| **O** | Ordinary Tuesday can be narrated using Modes without claiming universal hours | **Acceptable** | Purpose of non-normative examples |

Result vocabulary: **acceptable** · **prohibited** · **fails** · **requires redesign** · **not operable**.

---

## Stress-test answers (architecture)

| Challenge | Architectural answer |
|---|---|
| “Is this just PBL?” | No. Mission Mode requires production cycle, authenticity governance (ADR-0007 context), dual recognition and anti-theatre tests — not display projects alone (ADR-0002 Alternative 3 rejected). |
| “When do students learn mathematics?” | In Knowledge Studio deliberate practice **and** as Mission tool-use where Missions require it; not maths-abolition; not maths-only-by-osmosis. |
| “When do they prepare for examinations?” | Recognition Preparation Mode, normally inside Studios; intensifies in Recognition Seasons; remains inside the single programme. |
| “Do Missions create extra homework?” | Not by design. Mission documentation is embedded; double homework for the same outcome fails the Integrated Programme Principle. |
| “Are Six Worlds six more subjects?” | No. Entitlement across Discover via Missions/experiences; equal-time six-course model rejected. |
| “Can a small campus run this?” | Yes at lower concurrency/risk/stagger — not by faking intensity. |
| “Examination-heavy periods?” | Recognition Season Rule; temporary narrowing allowed; permanent capture prohibited. |
| “Can one Mission integrate several disciplines?” | Yes when substantive and coherent; tagging without substance rejected. |
| “When should integration NOT happen?” | Safety/prerequisite/deliberate-practice/recognition-coverage cases requiring focused Studio instruction; no artificial integration. |
| “How much Mission time is enough?” | Pass Primary Organising Logic Test + stage posture + capacity honesty — **not** a Core percentage. |

---

## Core vs implementation boundary

| Core (this ADR) | Country / campus implementation |
|---|---|
| Learning-Time Modes and relationships | Bell schedules, period lengths, weekly grids |
| Integrated Programme / anti-double-workload rules | Local homework policies consistent with rules |
| Primary Organising Logic Test | Self-assessment against test; inspector narratives |
| Recognition Season Rule | Mapping to national exam calendars |
| Stage postures (qualitative) | Stage package exemplars; hours after pilot evidence |
| Six Worlds ≠ six subjects | Local course catalogues must not smuggle six World subjects as Core |
| Capacity-coupled intensity | Local staffing plans; no invented Core ratios |
| Non-normative day examples | Must not be copied as mandatory clocks |

---

## Rationale

- Answers ADR-0002 open question on proportions **without** inventing fixed Core percentages.
- Addresses ADR-0003 exam-crowding risk with Recognition Season + Integrated Programme rules.
- Makes ordinary-Tuesday description possible as **illustrative mode narrative**, not universal timetable.
- Protects Lab-First identity against project-day and classroom-capture collapse modes.
- Aligns Six Worlds scheduling with ADR-0017 anti-six-subject stance.
- Couples timetable ambition to faculty capacity principles without approving PEO statuses or inventing ratios.
- Preserves Core vs Country separation (ADR-0001).

## Consequences

### Positive

- Shared language for learning-time design across sections 01, 02, 04, 05, 06, 08.
- Clear anti-double-workload and anti-project-day mechanisms for government/parent presentation.
- Stage-progressive intensity without false universal clocks.
- Explicit permission for focused disciplinary teaching where integration would be artificial or unsafe.

### Risks / costs

- Without later stage-package exemplars (`GAP-048`), campuses may still struggle to draft first timetables.
- Weak governance may relabel conventional days as “Mission Mode.”
- Recognition Seasons may be abused to recreate permanent exam-first schooling.
- Dependencies on still under-review stage/Worlds/Mission/faculty ADRs.

### Follow-on work

- `GAP-016` closed by this APPROVED ADR; campus clocks / numeric ranges remain `GAP-048` (Open).
- `GAP-048` — stage learning-time package exemplars and evidence-dependent planning ranges after pilots.
- Further `docs/01-learning-architecture/` exemplars after pilot evidence (do not elevate pilot numbers to Core %).
- Country profiles map Recognition Seasons to real calendars after research (no invention).
- Re-check alignment when ADR-0004–0007 / 0011 / 0015–0018 are revised or approved.

## Alternatives Considered

1. **Fixed Core percentages by stage** (e.g. historical 40/60 blends) — Rejected: premature; conflicts with ADR-0002 progressive intensity; mistakable as doctrine (ADR-0003 also rejected numeric Core split).
2. **Classroom-first + Mission enrichment** — Rejected: ADR-0002 Alternative 1; fails Primary Organising Logic Test.
3. **Mission-only / abolish Studios and exam prep** — Rejected: Lab-only extreme; conflicts with ADR-0002/0003.
4. **Two parallel full programmes (conventional + Missions)** — Rejected: double workload.
5. **Six World subjects + national subjects** — Rejected: overload; conflicts with ADR-0011/0017 context.
6. **Defer all learning-time rules until pilot data** — Rejected: leaves presentation and design without constraints; GAP-016 stays an unmanaged blocker.
7. **Learning-Time Modes + Integrated Programme + authenticity tests + stage postures + deferred numerics** — **Selected**.

## Country-Specific Implications

Country / project profiles may later:

- map Formal Recognition requirements into Studio/Recognition Preparation design with citations;
- define Recognition Seasons against local exam calendars;
- express Exploration Floor dimensions through local subjects/programmes;
- design campus clocks that obey Core constraints.

**Core must not embed Malaysian period structures, SPM/other board hour assumptions, or boarding rhythm as universal Learning-Time law.**

## Open Questions / Deferred

1. Evidence-dependent numeric planning ranges by stage after pilots (`GAP-048`).
2. Stage-package exemplars for programme designers (`GAP-048`).
3. Age bands / Year maps (`GAP-003` / country profiles).
4. Exact Mission authenticity gates by stage (`GAP-018` / ADR-0007).
5. Exploration Floor protected-dimension packaging detail (`GAP-019` / ADR-0006) — this ADR supplies time-expression rules, not dimension inventory changes.
6. Staffing numeric ranges (`GAP-032` / `GAP-034`) — capacity coupling only.
7. Homework policy templates — implementation, consistent with Integrated Programme Principle.

## Explicit Non-Claims

This ADR does **not**:

- treat ADR-0004–0007, 0011, 0014–0018 or PEO-001–005 as approved;
- set weekly hours, percentages, bell times or staffing ratios;
- invent Malaysian (or any country) timetables or exam rules;
- claim that non-normative day examples are required clocks;
- claim government endorsement or completed regulatory approval;
- assert that every day must look like a Mission Lab day;
- abolish Knowledge Studios, textbooks, direct teaching or examinations;
- close `GAP-048` or invent pilot planning ranges as Core doctrine.

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (§§4–6)
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0004–0007, ADR-0011, ADR-0015–0018 (UNDER REVIEW — context only)
- `PEO-004`, `PEO-005` (DRAFT — capacity context only)
- `docs/01-learning-architecture/LEARNING_TIME_ARCHITECTURE.md` (DRAFT companion overview)
- `GAP_REGISTER.md` — GAP-016, GAP-048

---

## Document control

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-15 | Initial UNDER REVIEW draft — proposed resolution of GAP-016; opens GAP-048 |
| 1.0.0 | 2026-09-15 | APPROVED after human-approval hygiene checks (Substitution Rule; Recognition Season Rule; Primary Organising Logic Test; Produce-stage preservation); closes GAP-016; GAP-048 remains Open |
