# ADR-0020 — Campus and Facilities Functional Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0020` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-16` |
| Approved | `2026-09-16` |
| Deciders | Human architectural review (approval hygiene checkpoint) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0019` APPROVED; developmental/pathway context `ADR-0004`–`0006` UNDER REVIEW; mission/authenticity context `ADR-0007` UNDER REVIEW; Worlds/exposure context `ADR-0011` / `ADR-0017` UNDER REVIEW; faculty/capacity context `ADR-0015` UNDER REVIEW with `PEO-001`–`PEO-005` DRAFT; risk context `MIS-003` DRAFT; partner/I-in-R context `MIS-001` / `MIS-002` DRAFT (not treated as approved) |
| Related gaps / claims | GAP-049 (primary); related GAP-005 (residential), GAP-016 (Closed), GAP-032 / GAP-034 (capacity), GAP-048 (learning-time exemplars); opens GAP-050 |
| Source documents | `FND-003` §§4–6, 10; ADR-0002 lab-family definition; ADR-0019 Learning-Time Modes; Government + Investor Presentation Readiness Stress Test (2026-09-15) identifying Facilities as RED |

---

## Title

Campus and Facilities Functional Architecture — Essential Environments, Shared Capability, External Access and Anti-Theatre Design

## Status

`APPROVED`

## Context

Approved Core architecture defines Tarbiyat as **Lab-First, Mission-Based** schooling with Knowledge Studios retained (ADR-0002), Formal Recognition coexistence (ADR-0003), and Learning-Time Modes inside a single integrated programme (ADR-0019). Under-review Mission, Worlds and faculty architecture imply production environments, mentoring spaces, partner access and capacity-coupled intensity.

`docs/09-campus-blueprint/` previously contained only a section shell. No Core document answered what physical environment is **essential for a Tarbiyat pilot** versus what may be shared, external, phased or country-dependent.

The Government + Investor Presentation Readiness Stress Test (2026-09-15) classified **Facilities** as **RED**: the repository could not confidently answer capital essentiality, adaptation of existing buildings, rural/resource-constrained operation, or what must exist before launch — without inventing building schedules or costs.

Without Core facilities architecture:

- investors and ministries hear “Lab-First” as “six expensive specialist laboratories”;
- pilots wait for flagship campuses that the model does not require;
- equipment is purchased without authorised practitioners or learning purpose (**theatre**);
- partner-branded rooms purchase educational control;
- learning-time modes collide because spaces cannot host Mission ↔ Knowledge Studio movement;
- facilities silently demand more specialist staff than PEO capacity permits;
- boarding/residential assumptions contaminate Core (forbidden by ADR-0001 / SUP-006).

**ID pre-flight:** ADR-0001–0007, 0011, 0014–0019 have bodies. ADR-0008–0010 and 0012–0013 remain reserved/proposed for other topics. **Next free body ID is ADR-0020.** No renumbering conflict. **No existing GAP covered functional campus architecture**; this ADR opens **GAP-049** (primary) and **GAP-050** (phased inventories / pilot schedules — numeric deferred).

**Dependency note:** FND-003 and ADR-0001–0003 / 0019 are approved law. ADR-0004–0007, 0011, 0015–0018 and MIS/PEO artefacts are **under-review / DRAFT context only** and are **not** treated as approved. If any is materially revised before approval, this ADR must be re-checked.

This ADR remains Core / country-neutral. It does **not** invent land area, square metres, room counts, construction costs, laboratory statutory dimensions, fire/building-code requirements, Malaysian ministry specifications, student capacity, boarding mandates or equipment catalogues.

## Decision

Tarbiyat Core adopts a **Campus and Facilities Functional Architecture** that defines the **kinds of environments** required for Lab-First, Mission-Based schooling — and the rules for sharing, externalising, phasing and rejecting theatre — **without** prescribing a building plan.

1. A Tarbiyat **campus** is a **governed system of learning environments**, not a requirement to own every professional facility.
2. Environments are defined by **educational function**, not by World brand or tour aesthetics.
3. Facility functions are classified **Essential / Shared / External / Expandable / Country-dependent**.
4. **Six Worlds does not require six specialist departments or six dedicated laboratories.**
5. Facility intensity is **capacity-coupled**: spaces and equipment may not outrun authorised, current, available adults (PEO-004 / PEO-005 context).
6. Facility design must support ADR-0019 Learning-Time Modes without chronic room conflict as the default operating assumption.
7. Authenticity and risk (ADR-0007 / MIS-003 context) govern **controls**, not automatic capital escalation.
8. **Anti-theatre rules** forbid facilities that exist mainly for display, branding or control capture.
9. Residential/boarding environments are **country/project choices** (ADR-0001 / GAP-005), not Core essentials.
10. Core defines a **Minimum Viable Tarbiyat Campus** functionally; numeric inventories and phased capital programmes remain evidence-dependent (`GAP-050`).

**Resolution of GAP-049:** this ADR supplies facility families, classification rules, Six Worlds / Mission / learning-time / people / safeguarding tests, MVC definition, anti-theatre rules and stress-test answers. Numeric campus schedules remain deferred under `GAP-050` (Open).

---

## Campus definition

**Campus (Core):** the set of physical, hybrid and governed external environments through which Tarbiyat Learning-Time Modes, Missions, mentoring, formation and Formal Recognition preparation can operate safely and educationally.

Campus **includes**:

- on-site spaces the school controls;
- temporary / mobile setups;
- digital and simulation environments;
- **governed external** workplaces, labs, field sites, cultural/civic institutions and partner facilities accessed under Mission Partner / I-in-R rules (MIS-001 / MIS-002 context).

Campus **does not require**:

- duplicating every professional facility inside the school;
- one dedicated room per World;
- boarding/residential plant as a Core condition of being Tarbiyat;
- flagship capital before a pilot can begin.

---

## Facility families

Environments are grouped by **function**. One physical room may serve multiple families if controls allow.

### 1. Knowledge environments

| Function | Role |
|---|---|
| Knowledge Studios | Briefing, seminar, focused theory, deliberate practice, Formal Recognition preparation |
| Seminar / discussion spaces | Critique, defence rehearsal, small-group dialogue |
| Quiet / independent learning | Reading, practice, documentation without Mission noise |

### 2. Mission environments

| Function | Role |
|---|---|
| Flexible Mission Labs | Primary multi-mode investigation / design / production hosts |
| Making / fabrication | Physical making with tool controls |
| Science / investigation | Wet/dry investigation with hazard controls |
| Digital / computing / AI | Software, data, modelling, simulation (with privacy controls) |
| Creative / media / design | Media, design, performance preparation |
| Food / agriculture / environment | Growing, food systems, outdoor/ecological practice where lawful |
| Civic / social / human systems | Community, civic, organisational and human-systems Missions |

**Rule:** these are **capability types**, not a mandatory room schedule. Several may share one adaptable lab or be accessed externally.

### 3. People / development environments

| Function | Role |
|---|---|
| Mentoring | Longitudinal Mentor dialogue (private enough for trust; not clinical by default) |
| Pathway dialogue | Discover→Choose / stage-transition conversations |
| Critique / defence | Capability Defence, public critique, presentation |
| Practitioner preparation | Adult prep, co-planning, currency practice |
| Staff collaboration | Educator–Practitioner–Mentor / Mission Team coordination |

### 4. Production / support environments

| Function | Role |
|---|---|
| Storage | Materials, works-in-progress, evidence artefacts |
| Tools / materials | Controlled tool libraries and consumables |
| Charging / IT | Device power, network access points appropriate to privacy rules |
| Preparation | Adult setup before learner entry |
| Documentation / display | Evidence boards, galleries, demo walls — **educational**, not marketing theatre |
| Logistics | Movement of materials between spaces / off-site |

### 5. Safeguarding / control environments

| Function | Role |
|---|---|
| Controlled-access zones | Elevated-risk equipment, chemicals, restricted data |
| External partner / visitor interface | Reception, briefing, badged access — partners do not roam freely |
| Supervision sightlines | Layout supports adult visibility where risk requires |
| Secure storage | Hazardous materials, keys, sensitive physical artefacts |
| Sensitive-data work | Spaces/processes for restricted digital work (`GAP-006` country detail) |
| First aid / incident response interfaces | Interface to campus emergency response (country SOP detail) |

### 6. Formation / wellbeing environments

| Function | Role |
|---|---|
| Physical development | Sport / movement programmes as protected formation dimensions |
| Recreation | Recovery and social play appropriate to day/residential model |
| Reflection | Quiet reflection without clinical framing |
| Social / community interaction | Assemblies with substance, community gathering |

### 7. External learning environments

| Function | Role |
|---|---|
| Community | Local civic and neighbourhood settings |
| Workplace | Partner workplaces under MIS controls |
| University / research facility | Governed research/lab access |
| Industry | Production/design environments under Education-First rules |
| Field / ecological sites | Outdoor investigation with field plans |
| Cultural / civic institutions | Museums, galleries, public institutions |

**External environments are first-class campus architecture**, not optional enrichment, when accessed under educational governance.

---

## Essential / Shared / External / Expandable / Country classification

Every facility function is classified. Classifications must not be artificially luxurious.

| Class | Meaning |
|---|---|
| **A. Essential at launch** | Required for the Tarbiyat educational engine to operate at all for the intended pilot stage mix |
| **B. Shared / multi-purpose** | One adaptable environment may support several modes/Worlds/capability types |
| **C. External / networked** | Capability may be accessed through governed partners rather than replicated on site |
| **D. Expandable later** | Valuable as programme maturity, pathways and capacity grow |
| **E. Country / regulation dependent** | Required by local curriculum, statutory safety, recognition or residential rules — not Core identity |

### Core classification (functional)

| Function | Class | Notes |
|---|---|---|
| Knowledge Studio capability | **A** (+ **B**) | Essential; may share adaptable teaching spaces |
| Flexible Mission Lab capability | **A** (+ **B**) | Essential; may be few multi-mode spaces |
| Mentoring / pathway dialogue capability | **A** (+ **B**) | Essential function; may use quiet rooms shared with other uses when privacy allows |
| Critique / defence capability | **A** (+ **B**) | Can share seminar / studio spaces |
| Basic production support (storage, prep, tool control) | **A** | Scale to concurrent Missions — not prestige fit-out |
| Safeguarding / visitor interface basics | **A** | Badging, supervised access, stop-work authority — not a luxury atrium |
| Formation / physical development access | **A** or **C** | Essential as protected dimension; may use shared/community facilities |
| Making / fabrication | **B** / **C** / **D** | Shared or external until pathway depth requires more |
| Science / investigation | **B** / **C** / **D** / **E** | Shared adaptable wet/dry zones; statutory lab rules = **E** |
| Digital / computing / AI | **B** (+ **E** privacy) | Often shared; sensitive-data zones as risk requires |
| Creative / media / design | **B** / **C** / **D** | Shared or partner studios |
| Food / agriculture / environment | **B** / **C** / **D** / **E** | Often external/field; food-safety rules = **E** |
| Civic / social / human systems | **C** (+ **B**) | Community settings primary; campus seminar secondary |
| Campus Live Workflow units | **D** | Permitted (ADR-0007 context); not mandatory at launch |
| Residential / boarding plant | **E** | GAP-005; not Core essential |
| Specialist World-branded departments | **Rejected as Core mandate** | See Anti-theatre |

**Launch essentials are functions, not room counts.**

---

## Six Worlds facility logic

Meaningful exposure across all Six Worlds (ADR-0011 / ADR-0017 context) **must not** be implemented as six expensive specialist departments.

| Mechanism | How Worlds are served without tokenism |
|---|---|
| Shared flexible Mission Labs | Rotating Mission briefs and mobile equipment kits |
| Temporary setup | Time-bounded configuration of the same space for different Worlds |
| External / partner facilities | Governed access for deeper World practice |
| Field / community settings | Earth, Society, Enterprise, Creative encounters off-site |
| Digital / simulation | Safe Level B authenticity without owning industrial plant |
| Cross-World Missions | One Mission exercises multiple Worlds in one environment |
| Display / documentation | Evidence of practice — not lobby museums substituting for work |

**Tokenism test:** a World visit that fails Meaningful Exposure (Context; Active Engagement; World-Relevant Practice; Reflection; Trace — ADR-0017 context) is **not** cured by a branded room.

**Equal dignity:** no World may be architecturally demoted to corridor display while others receive flagship labs as prestige hierarchy.

---

## Mission authenticity and risk implications

Authenticity levels A–F (ADR-0007 context) and risk levels R0–R4 (MIS-003 context) are **separate axes**. Facilities follow **controls**, not marketing authenticity labels.

| Typical pattern | Facility implication (conceptual) |
|---|---|
| Low-risk desk / digital / community (often R0–R1; Levels A–C) | Knowledge Studio + flexible lab + community access; minimal controlled zones |
| Wet / science investigation (often R1–R2) | Shared investigation zone or external lab; induction; PPE; controlled storage |
| Fabrication / tools (often R1–R2+) | Authorised-use zone; technical authority present; no solo elevated tools |
| Food / agriculture (R1–R2+; **E** rules possible) | Hygienic prep or field site; food-safety / environmental rules country-dependent |
| External fieldwork (R1–R3) | Field plan; supervision ratios as campus policy/law; transport interfaces |
| Professional / partner environments (Levels D–F; R2–R3+) | Visitor/partner interface; Education-First; school retains stop-work; no partner educational control via room branding |
| R4 / prohibited as framed | Do not build or buy facilities to enable prohibited learner acts; redesign / simulate |

**High authenticity does not mandate high capital.** Level F work may occur in partner facilities under controls; Level A work may fully occupy on-site flexible labs.

---

## Learning-time compatibility (ADR-0019)

Physical architecture must support Learning-Time Modes:

| Mode | Facility support rule |
|---|---|
| Mission Mode | Flexible Mission environments available as primary hosts over meaningful windows |
| Knowledge Studio Mode | Dedicated or convertible Studio capability — not abolished by lab fit-out |
| Recognition Preparation | Hosted inside Studios / Mission-linked practice; no third campus typology required |
| Mentoring / Pathway Dialogue | Bookable quiet settings; privacy without implying clinic |
| Reflection / Documentation / Evidence | Embedded worksurfaces / digital capture; avoid separate “portfolio factory” wing as Core mandate |
| Formation | Physical/recreation access without displacing Mission/Studio essentials |
| Independent / Collaborative Practice | Supervised open sessions in Studio/lab when capacity allows |

**Design failure:** a campus plan that makes Mission ↔ Knowledge Studio movement chronically impossible (constant room conflict as the only operating mode) is **architecturally defective**, regardless of capital spend.

**Recognition Seasons:** temporary intensification of Studio use is legitimate; permanently converting all Mission Labs into exam classrooms fails ADR-0019.

---

## People / capacity compatibility

Facilities must not silently require more specialist staff than Mission Team / Mentor capacity permits (PEO-004 / PEO-005 context).

| Risk | Facility response |
|---|---|
| Simultaneous elevated-risk Missions | Limit concurrent authorised-use zones; schedule specialist access |
| Equipment without authorised practitioners | Do not open the zone; store or loan externally |
| Poor visibility | Prefer layouts with supervision sightlines for elevated risk |
| Partner crowding | Interface zones; badged access; no free roaming |
| Technical authority bottleneck | Shared tools + scheduled sessions rather than many unsupervised rooms |
| Mentor load | Quiet mentoring spaces do not require clinical suites |

**Capacity-coupled facility rule:** declared facility intensity ≤ staffable intensity. Under-resourced campuses reduce concurrent Missions and deepen external scheduling rather than opening unsafe rooms.

---

## Safeguarding and partner-access architecture

| Principle | Facility expression |
|---|---|
| School retains educational control | Partner rooms cannot buy curriculum, assessment or pathway authority |
| External adults are governed | Visitor interface, screening as country/campus policy, supervised learner contact |
| Controlled-access zones | Elevated tools/data behind authorisation, not open circulation |
| Stop-work authority | Educators / technical authority can halt activity regardless of partner pressure |
| Sensitive data | Separate handling for restricted digital work (country detail `GAP-006`) |
| Display hygiene | Public galleries must not expose hazardous processes or sensitive learner data |

I-in-R presence may be physical, hybrid or digital (ADR-0007 / MIS-002 context). Physical embedding **increases** safeguarding and interface requirements; it does **not** grant automatic faculty or free facility control.

---

## Explore → Produce facility progression

Facility demand **intensifies and specialises** with stage emphasis (ADR-0004 context). No age bands invented here.

| Stage emphasis | Facility posture |
|---|---|
| **Explore** | Maximum flexibility; safe making/inquiry; broad formation; low concurrent specialism |
| **Discover** | Shared labs + external/community/digital exposure across Worlds; temporary setups |
| **Choose** | More scheduled specialist access; still shared; no premature World-department build-out |
| **Deepen** | Deeper pathway tools — on-site **or** external; Exploration Floor spaces remain available |
| **Produce** | Highest authenticity/risk controls; partner/research facilities legitimate; Campus Live Workflow optional |

Younger/earlier stages need **flexibility and breadth**; later stages need **deeper specialist access**, not necessarily more branded rooms.

---

## Minimum Viable Tarbiyat Campus (MVC)

A **Minimum Viable Tarbiyat Campus** is the smallest functional environment system that can run the Tarbiyat educational engine for a defined pilot stage mix **without** theatre capital.

### Functional MVC (Core)

A Tarbiyat pilot campus is viable when it provides:

1. **a small number of highly flexible Knowledge Studio / Mission environments** that can convert between briefing, investigation, production and critique;
2. **safe specialist capability access** — on-site shared zones and/or scheduled external facilities — matched to authorised adults;
3. **mentoring, pathway dialogue and critique settings** with adequate privacy and booking discipline;
4. **basic production support** (storage, preparation, controlled tools/materials);
5. **safeguarding / visitor-control basics** and supervision arrangements for any elevated-risk work;
6. **formation / physical-development access** (on-site or shared/community);
7. **a governed external learning network** for Worlds and authenticity that on-site spaces cannot yet host.

This description is **functional**. It does **not** specify room numbers, floor areas or budgets.

### What MVC is not

- a flagship innovation centre;
- six World laboratories;
- mandatory boarding;
- technology showroom;
- partner-branded wing that captures educational control.

---

## Resource-constrained / adaptive campus test

Authenticity is preserved under constraint by:

| Lever | Effect |
|---|---|
| Fewer concurrent Missions | Protects safety and adult attention |
| Shared multi-mode spaces | Avoids World-department sprawl |
| External / networked facilities | Depth without ownership |
| Scheduled specialist access | Matches PEO capacity |
| Progressive equipment acquisition | Buy only for authorised, purposeful use |
| Temporary setup / mobile kits | World exposure without permanent rooms |
| Simulation where R3–R4 live work is unsafe/unlawful | Authenticity without prohibited risk |

**Existing school buildings can be adapted** when they can host flexible Studio/Mission conversion, basic controls and external network access. Adaptation quality is a campus design choice — Core does not invent retrofit specs.

**Rural / resource-constrained schools** can operate Tarbiyat if they accept capacity-coupled intensity and use community/field/partner access honestly — not if they claim flagship Mission intensity without staff or controls.

---

## Anti-theatre rules

Core **rejects** as architectural success criteria:

1. expensive “innovation labs” used mainly for tours;
2. one dedicated room for every World as a prestige mandate;
3. equipment purchased without authorised, current practitioners and learning purpose;
4. Mission Labs that become ordinary classrooms permanently;
5. unsafe public display of hazardous activity;
6. buying technology before learning purpose and safeguarding controls;
7. partner-branded rooms that purchase educational control;
8. Lobby museums that substitute for Meaningful Exposure;
9. Capital claims that outrun staffing capacity;
10. Treating boarding luxury or sovereign IT plant as proof of Tarbiyat identity (ADR-0001).

---

## Core vs Country vs Campus matrix

| Decision | Class |
|---|---|
| Lab-family environments; Knowledge Studios; campus includes governed external access; no six-lab mandate; MVC functional definition; anti-theatre; capacity-coupled facilities; learning-time spatial compatibility | **A. Core functional requirement** |
| Statutory laboratory dimensions; fire/building codes; food-safety licensing; residential licensing; ministry lab schedules; teacher/facility ratios if any | **B. Country regulatory requirement** |
| Stage-mix of concurrent specialisms; Discover exposure venues; Produce partner depth | **C. Stage/programme requirement** |
| Exact room conversion patterns; which capabilities are on-site vs networked; furniture systems; timetable rooming | **D. Campus capacity/design choice** |
| Square metres, room counts, capital budgets, equipment lists, student headcount plant | **E. Pilot/evidence-dependent numeric decision** (`GAP-050`) |

---

## Stress-test answers

| Question | Core answer |
|---|---|
| Do we need six laboratories? | **No.** Six Worlds ≠ six labs. Shared, temporary, external, digital and cross-World designs are valid. |
| How expensive must the campus be? | Core does **not** set cost. Expense follows stage mix, risk controls and capacity — not prestige. No invented numbers. |
| Can an existing school building be adapted? | **Yes**, if it can host flexible Knowledge/Mission environments, basic controls and external network access. |
| Can rural / resource-constrained schools operate Tarbiyat? | **Yes**, under capacity-coupled intensity with shared/external access — not by claiming unstaffable flagship labs. |
| What absolutely must exist before launch? | Functional MVC: flexible Knowledge/Mission capability; mentoring/critique; basic support & safeguarding controls; formation access; governed external network for missing depth. |
| What can be accessed outside campus? | Specialist fabrication, advanced science, industry, university/research, field/ecological, cultural/civic, some formation facilities — under MIS governance. |
| How do children safely move between classroom, lab and professional environment? | Treat Knowledge Studio ↔ Mission Lab as designed conversion/movement; professional/partner sites via visitor interface, supervision, risk class controls and stop-work authority. |
| What prevents expensive facilities becoming marketing theatre? | Anti-theatre rules; capacity coupling; authorised-use only; Education-First partner rules; Meaningful Exposure test. |
| What facilities distinguish Tarbiyat from a conventional school? | Mission/production environments as primary hosts; Knowledge Studios not sole centre; governed external authenticity; mentoring/critique as designed functions — not classroom-only + occasional lab demo. |
| Can a pilot start before the flagship campus exists? | **Yes.** Pilots should start from MVC + external network, not wait for theatre capital. |

---

## Consequences

**Positive**

- Facilities RED stress-test area becomes answerable at architecture level.
- Pilots can start without flagship campuses.
- Six Worlds exposure decoupled from capital mythology.
- Learning-time and people capacity constraints extend into space design.

**Risks / costs**

- Operators may under-build and call deprivation “MVC” while claiming unstaffable intensity — capacity coupling must be enforced.
- External dependence requires partner governance maturity (MIS-001/002 context).
- Country building codes still bind (`GAP-001` / country profiles).

**Follow-on work**

- `CAM-001` overview companion under `docs/09-campus-blueprint/` (DRAFT navigation companion; ADR-0020 prevails).
- `GAP-050` phased inventories / pilot schedules without elevating numbers to Core.
- Country overlays (MY building/lab safety) with citations — not invented here.
- Align residential facility standards only if GAP-005 chooses residential.

## Alternatives considered

1. **Flagship-first campus** — build all specialist Worlds before teaching. Rejected: theatre risk; blocks pilots; invents capital doctrine.
2. **Classroom-first + enrichment labs** — Rejected: contradicts ADR-0002.
3. **One room per World as Core mandate** — Rejected: costly; tokenism; false equal-time architecture.
4. **Defer all facilities talk to country architects** — Rejected: leaves Facilities RED; Core needs functional constraints.
5. **Board campus as Core essential** — Rejected: ADR-0001 / SUP-006.

## Explicit non-claims

This ADR does **not**:

- invent land area, m², room counts, costs, student capacity or equipment SKUs;
- invent Malaysian/other building, fire, lab or boarding regulations;
- require Campus Live Workflow units;
- require residential plant;
- treat MIS/PEO/ADR under-review artefacts as approved law;
- close `GAP-050` or invent pilot facility inventories as Core doctrine;
- replace country licensing (`GAP-001`) or learning-time numeric exemplars (`GAP-048`).

## Related documents

- `docs/09-campus-blueprint/CAMPUS_AND_FACILITIES_FUNCTIONAL_ARCHITECTURE.md` (`CAM-001`)
- ADR-0001, ADR-0002, ADR-0003, ADR-0019 (APPROVED)
- ADR-0007, ADR-0011, ADR-0015, ADR-0017 (UNDER REVIEW — context)
- MIS-001 / MIS-002 / MIS-003; PEO-001–005 (DRAFT — context)
- `GAP_REGISTER.md` — GAP-049, GAP-050

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-16 | Initial UNDER REVIEW draft; proposes GAP-049; opens GAP-050 |
| 1.0.0 | 2026-09-16 | APPROVED after human-approval hygiene checks (external capability governance; existing-building adaptation conditions; resource-constrained levers; specialist external controls; MVC as functional not cheap-campus; country-law supremacy); closes GAP-049; GAP-050 remains Open |
