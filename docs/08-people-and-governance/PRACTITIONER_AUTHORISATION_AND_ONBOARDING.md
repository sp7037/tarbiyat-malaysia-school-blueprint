# Practitioner Authorisation and Onboarding Standard

| Field | Value |
|---|---|
| Document ID | `PEO-001` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-15` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001`–`ADR-0003` APPROVED; `ADR-0015` UNDER REVIEW; `ADR-0007` / `ADR-0014` / `ADR-0016` UNDER REVIEW; `MIS-001`–`MIS-003` DRAFT; `MIS-TPL-001` / `MIS-FRM-002` DRAFT |
| Related gaps | GAP-033 (this document); GAP-023 (`MIS-002`); GAP-031 (templates); GAP-035 (`PEO-002` currency — companion); GAP-036 (`PEO-003` development — companion); GAP-032 / 034 / 037 (adjacent; not resolved here) |
| Source documents | ADR-0015 Practitioner Onboarding / I-in-R boundary; MIS-002 §10–11; MIS-003 risk/stop-work; GAP-033 resolution brief (2026-09-15) |

> **Authority note:** This standard **operationalises** Practitioner authorisation and onboarding principles in ADR-0015 and the participation ladder in MIS-002. Those ADRs remain **`UNDER REVIEW`** and are **not** treated as approved law. Approved baseline: FND-003 and ADR-0001–0003. Country profiles supply teacher registration, professional licences, background checks and regulated-sector rules (`GAP-037`).

---

## 1. Purpose

Define how Tarbiyat determines what an **external or internal** practitioner (and Technical / Lab Professional where relevant) is **authorised to do** with learners, Missions, laboratories, tools, workflows and deployment.

Central question:

> A person may be highly qualified professionally — but what must Tarbiyat verify before allowing them to advise learners, supervise learners, supervise tools/labs, lead technical Mission work, approve technical readiness, participate regularly, operate as Practitioner-in-Residence, or perform faculty functions?

**Professional seniority alone must not equal educational authority.**

This document proposes resolution of **GAP-033**. It is **not** a staffing-ratio standard (`GAP-032`), currency programme (`GAP-035` — see `PEO-002`), faculty development standard (`GAP-036` — see `PEO-003`), or country registration map (`GAP-037`).

---

## 2. Core principle — function-specific authorisation

**Authorisation is function-specific.**

A person may be:

| Professionally | But not automatically authorised to |
|---|---|
| Excellent engineer | Independently supervise minors |
| Excellent teacher | Operate specialist machinery |
| Experienced mentor | Certify technical competence |
| Company CEO | Hold educational, assessment or pathway authority |

Authorisation depends on:

**competence + role + safeguarding + Mission need + risk level + onboarding + school governance**

— **not** prestige, job title, sponsorship value or I-in-R branding.

---

## 3. Credential ≠ Tarbiyat authorisation

| Layer | Meaning |
|---|---|
| **Professional credential** | Degree, licence, charter, portfolio, employer title — evidence of domain expertise |
| **Safeguarding clearance** | Suitability to work with minors under school + country rules |
| **Tarbiyat educational authorisation** | School-granted, scoped permission to perform defined functions |

Doctor, engineer, designer, researcher, entrepreneur or public servant status may supply legitimate expertise. The school still determines:

- learner-access scope;
- Mission role;
- supervision rights;
- facility / tool permissions;
- educational authority.

Country law may **additionally** control regulated practice (clinical, engineering sign-off, teaching registration). Core does not invent those rules.

---

## 4. Relationship to MIS-002 participation ladder

MIS-002 / ADR-0015 illustrative progression:

`External Expert` → `Mission Partner Professional` → `Practitioner-in-Residence` → `Authorised Faculty Practitioner`

That ladder describes **relationship / embedding status**. This standard defines the **authorisation architecture** behind it.

| Ladder status | Does **not** automatically grant |
|---|---|
| Organisation is I-in-R | Every employee authorised |
| Practitioner-in-Residence title | Unrestricted lab / learner access |
| Authorised Faculty Practitioner | PoC monopoly, pathway authority, or all-tool rights |
| School employment | Competence for every domain or risk level |

**Each practitioner needs appropriate individual authorisation.**

---

## 5. Authorisation bands (permission scope — not prestige)

Smallest useful progression. **Higher band ≠ better person.** Band is **maximum ordinary permission scope** in authorised domains; actual rights are still dimension- and risk-scoped (§6–10).

| Band | Name | Typical relationship map | Ordinary permission posture |
|---|---|---|---|
| **PA-0** | Visitor / Observer | Guest / Speaker; one-off visit | Observe / present under high supervision; minimal learner access |
| **PA-1** | Contributing Expert | Visiting Expert; Mission Contributor | Scoped critique / input; supervised contact; no independent learner supervision |
| **PA-2** | Supervised Mission Practitioner | Mission Partner Professional (early / limited) | Regular Mission contribution; learner interaction **under** designated school adult supervision |
| **PA-3** | Authorised Mission Practitioner | Sustained Mission Partner Professional; often Practitioner-in-Residence | May supervise learners **within** authorised domain + risk ceiling; still no PoC/pathway monopoly |
| **PA-4** | Faculty Practitioner | Authorised Faculty Practitioner (ADR-0015) | Holds Practitioner faculty function with school accountability; may combine Educator/other functions only if separately prepared |

**Technical / Lab Professionals** are authorised on the same competence / safeguarding / risk principles for equipment and environment safety. They are **not** required to hold PA-4 faculty status to exercise technical-safety authority (ADR-0015 Decision B).

---

## 6. Permission dimensions

Authorisation is **not** one universal number if permissions differ. Record dimensions on the Practitioner Authorisation Record (`MIS-FRM-007`):

| ID | Dimension | Notes |
|---|---|---|
| **A** | Learner interaction | None / event / supervised / regular supervised / scoped independent (PA-3+) |
| **B** | Mission technical contribution | Advise / co-design / lead technical work package |
| **C** | Independent learner supervision | Only within band + domain + risk ceiling |
| **D** | Facility access | Purpose-based, time-bounded, revocable |
| **E** | Equipment / tool supervision | Tool-specific where needed (§11) |
| **F** | Elevated-risk activity supervision | Linked to MIS-003 R-ceiling |
| **G** | Mission Lead eligibility | Coordination only; not automatic for externals (ADR-0015) |
| **H** | Assessment input | Critique / observation — **not** sole PoC certification |
| **I** | Deployment technical review | Informs MIS-FRM-006-A; does not unilaterally authorise deployment |
| **J** | Research / data access | Minimum necessary; class-limited (MIS-001) |
| **K** | Practitioner mentoring of other adults | Optional; separate from learner mentoring |
| **L** | Faculty function | Practitioner / Educator / Mentor only if prepared and authorised |

### Automatic non-grants

Unless **separately** authorised under school governance and country law, practitioners do **not** receive:

- final Proof of Capability certification monopoly (ADR-0016);
- pathway assignment / prohibition authority (ADR-0015; FND-003);
- disciplinary authority as default;
- designated safeguarding-lead status;
- Creator Rights final determination monopoly (ADR-0014).

---

## 7. Onboarding requirements

Before **direct or regular** learner engagement, practitioners receive principle-level onboarding covering:

- Tarbiyat model (Lab-First / Mission-Based);
- Education-First;
- Mission architecture and educationalisation;
- safeguarding and learner contact boundaries;
- MIS-003 risk system and stop-work duties;
- data / privacy minimum-necessary rules;
- Creator Rights and Contribution Records;
- assessment limits (feedback ≠ certification);
- political neutrality;
- conflicts of interest;
- incident reporting and escalation channels.

**Completion is recorded on `MIS-FRM-002`.**  
**Scoped authorisation is recorded on `MIS-FRM-007`.**  
Country vetting / background checks remain **COUNTRY / IMPLEMENTATION** (`GAP-037`).

Until suitably prepared and authorised, Practitioners **work with Educators** rather than replace them (ADR-0015).

---

## 8. Domain competence evidence

The school must satisfy itself that competence is appropriate for the authorised functions. Possible evidence (non-mandatory set; proportional):

- recognised qualification;
- professional licence where relevant to the activity;
- portfolio of work;
- documented experience;
- professional reference;
- demonstrated skill;
- supervised observation;
- competency demonstration on tools / procedures.

**Degrees are not universally mandatory.**  
**Self-assertion alone is insufficient for elevated-risk or independent-supervision functions.**

Domain competence is **World- and activity-specific**. Six Worlds parity applies: Creative, Society, Enterprise, Earth and Health practitioners are evaluated with equal seriousness to engineering (ADR-0011 / ADR-0015 context).

Detailed **currency** maintenance: `PEO-002` (`GAP-035` proposed resolution — not closed).

---

## 9. Safeguarding separation

| Track | Question |
|---|---|
| **Technical competence** | Can they do the professional work safely and competently? |
| **Safeguarding clearance** | May they work with minors under school + country rules? |
| **Tarbiyat educational authorisation** | What educational functions may they perform here? |

All three may be required depending on function. **Technical excellence does not replace safeguarding suitability.**

---

## 10. Risk-linked authorisation (MIS-003)

Authorisation includes a **risk ceiling** (R0–R4 activity class — **not** a learner score).

| Rule | Meaning |
|---|---|
| R1 authorisation | Does **not** automatically authorise R3 supervision |
| Higher-risk work | May require specialist competence, equipment-specific authorisation, country licence, and additional school approval |
| R4 / prohibited as framed | Cannot be authorised by form or seniority |

Numeric supervision **ratios** are not set here (`GAP-032`).

---

## 11. Tool / lab authorisation

**Access to a lab does not equal authorisation to supervise every tool in it.**

Equipment-specific authorisation may be required for examples such as soldering, laser cutting, CNC, chemicals, electrical systems, field equipment, biological laboratory work, or media production equipment.

Core states the **principle** only. No equipment catalogue, PPE schedule or certification syllabus is invented here (implementation / country).

Technical / Lab Professionals may hold independent **technical-safety authority** for authorised environments (ADR-0015; MIS-003).

---

## 12. Practitioner-in-Residence

Per MIS-002, Practitioner-in-Residence requires sustained participation plus governance. Under this standard, also require:

- onboarding (`MIS-FRM-002`);
- safeguarding suitability;
- relevant domain competence evidence;
- defined permission scope + risk ceiling (`MIS-FRM-007`);
- periodic / event-triggered review (§17).

**Institution-in-Residence status does not automatically authorise every employee.** New staff from an I-in-R organisation start at an appropriate band after individual onboarding and authorisation (Scenario H).

---

## 13. Authorised Faculty Practitioner (PA-4)

Distinguishes sustained **school faculty function** from Mission-only practitioner contribution.

Additional expectations (principle-level; not teacher-licensing law):

- sustained school role and accountability;
- educational competence / planning participation as relevant;
- assessment literacy (what Practitioners may and may not decide);
- safeguarding maturity;
- learner-development understanding;
- work inside professional learning teams (ADR-0015).

**Core does not invent teacher-registration rules.** Country profiles may require teaching credentials (`GAP-037`).

---

## 14. Mission Lead boundary

Mission Lead is a **coordination function**, not a prestige tier (ADR-0015).

| Mission Lead may | Mission Lead must not automatically |
|---|---|
| Coordinate briefing, reviews, coverage, evidence capture | Hold technical authority over every domain |
| Ensure adult functions are present | Monopolise safeguarding |
| Hold Educator or Practitioner authorisation as base | Monopolise assessment or pathways |
| | Unilaterally decide Creator Rights / IP outcomes |
| | Be an external partner by default |

Complex Missions may need: **Mission Lead + Technical Practitioner + Educator + safeguarding / other specialists**.

If the Mission Lead lacks competence in a work package, another authorised practitioner covers that package (Scenario L).

---

## 15. Assessment input

Authorised practitioners may provide:

- technical observations;
- quality critique;
- professional standards feedback;
- evidence observations for records.

**Authorisation to contribute ≠ sole authority to certify Proof of Capability** (ADR-0016; MIS-001 §8). Multi-stream judgment remains school-governed.

---

## 16. Stop-work authority

An appropriately authorised practitioner (or Technical / Lab Professional) supervising technical work **must** be able to pause unsafe technical activity immediately (MIS-003 §8).

| Stop-work is | Stop-work is not |
|---|---|
| Safety / safeguarding authority | Academic punishment |
| Immediate learner protection | Partner override of school safeguarding |
| Compatible with later redesign / simulation | Evidence that the learner “failed” |

External partners do **not** hold unilateral stop-or-continue authority over school safeguarding.

---

## 17. Period, review and revocation

Authorisation is **scoped, reviewable, revocable**, and may be time-bounded.

### Review triggers

- role or Mission change;
- higher-risk work requested;
- new tools / facilities;
- incident or near miss;
- safeguarding concern;
- competence concern;
- extended absence;
- I-in-R role change;
- commercial pressure / conflict concerns.

No universal Core annual expiry is mandated. Detailed currency evidence, states and review outcomes: **`PEO-002`** (`GAP-035` proposed resolution — not closed). Record: `MIS-FRM-008`.

### Downgrade / suspension options

- restrict permission dimensions;
- require closer supervision (band step-down);
- pause direct learner access;
- suspend specific equipment authorisation;
- remove Mission role;
- terminate authorisation.

**Learners must not be academically harmed** because practitioner authorisation changes; Missions may pivot, simulate or substitute authentic alternatives (MIS-001 §17; MIS-003 §24).

---

## 18. Multi-domain rule

**One practitioner ≠ authorised everywhere.**

Example: PA-3-equivalent in software may remain PA-0/PA-1 for laboratory chemistry until separately authorised.

Permission follows **competence + risk + tool scope**, not general cleverness.

---

## 19. Internal vs external staff

Core authorisation principles apply to:

- external practitioners;
- Practitioners-in-Residence;
- school-employed Technical / Lab Professionals;
- dual-role Educator–Practitioners.

**Employment status ≠ competence authorisation.** Do not create weaker safeguards merely because someone is an employee.

---

## 20. AI / software boundary

| AI / software may | AI / software must not |
|---|---|
| Track authorisations and review dates | Autonomously grant practitioner authority |
| Flag missing onboarding or currency reviews | Waive safeguarding |
| Map competence claims to Mission needs | Certify competence or currency |
| Surface missing risk/tool scopes | Authorise R3+ work or deployment |

---

## 21. Minimum operational record

Scoped authorisation is recorded on:

**`MIS-FRM-007` — Practitioner Authorisation Record**  
(`docs/06-missions-and-production/templates/MIS-FRM-007-practitioner-authorisation-record.md`)

Currency / re-authorisation reviews:

**`MIS-FRM-008` — Practitioner Currency Review** (`PEO-002`)

Conceptual fields (not a database schema): practitioner; organisation; bands/functions; domain competence; learner-access scope; Mission role scope; risk ceiling; tool/facility permissions; assessment contribution; deployment-review role; onboarding completion (`MIS-FRM-002`); safeguarding/country-check reference; currency state pointer; restrictions; reviewer; review triggers/date; status.

---

## 22. Scenario tests

| ID | Scenario | Result | Rationale |
|---|---|---|---|
| **A** | Experienced robotics engineer; no teaching experience | **Permitted with supervision** → typically PA-1/PA-2; work with Educator; onboarding required | Competence ≠ teaching/supervision authority (ADR-0015) |
| **B** | Excellent teacher; no laser-cutter competence | **Restricted** on that tool; pedagogy does not authorise equipment | Tool/lab principle §11 |
| **C** | Hospital doctor helping Health Missions | **Restricted / requires additional authorisation**; clinical acts remain R4/prohibited as framed | Credential ≠ clinical learner practice (MIS-003); non-clinical Mission only |
| **D** | Software security expert supervising sandbox penetration testing | **Permitted with controls** if sandbox-authorised; typically PA-2/PA-3 + risk ceiling ≤ R2 for sandbox | Live unauthorised external testing remains R4 |
| **E** | Startup founder mentoring Enterprise learners | **Permitted with supervision** after onboarding; commercial pressure monitored | Education-First; conflict disclosure; no recruitment pipeline |
| **F** | Media producer weekly with Creative learners | **Permitted with controls**; often PA-2→PA-3 path + FRM-002; media/privacy scopes | Sustained contact needs onboarding + authorisation record |
| **G** | University professor demands unrestricted lab access by seniority | **Prohibited** as framed | Seniority ≠ authorisation; facility access is purpose/role-based |
| **H** | I-in-R sends new employee not onboarded | **Requires additional authorisation**; treat as new practitioner | I-in-R does not inherit authorisation to staff |
| **I** | School-employed technical assistant wants to supervise a new machine | **Requires additional authorisation** (tool-specific) | Employment ≠ all-tool rights |
| **J** | Practitioner authorised for R2 asked to supervise R3 | **Requires additional authorisation** / possible refuse | Risk ceiling not automatically escalated |
| **K** | Excellent technical feedback but commercial pressure on learners | **Restricted / suspended** on learner-facing role until mitigated | Education-First breach; competence does not excuse exploitation |
| **L** | Mission Lead lacks technical competence in one package | **Permitted** as Lead; **requires** another authorised practitioner for that package | Lead = coordination, not universal technical authority |
| **M** | Domain expert; safeguarding concern arises | **Suspended / prohibited** for learner access pending review | Safeguarding track separate from competence |
| **N** | Software-authorised practitioner asked to supervise chemistry | **Requires additional authorisation** or **restricted** | Multi-domain rule §18 |

---

## 23. Core vs country vs implementation

| Layer | Includes |
|---|---|
| **Core** | Function-specific authorisation; credential ≠ authority; safeguarding separation; bands as permission scope; dimensions; risk-linked permissions; tool principle; I-in-R non-inheritance; Mission Lead boundary; assessment non-monopoly; stop-work; review/revocation; multi-domain; internal=external principles; AI non-authority; scenarios |
| **Country** | Professional licences; teacher registration; background checks; regulated-sector practice; labour law; mandatory reporting |
| **Implementation** | Exact qualification lists; named authorisers; validity periods; training modules; badge/access systems; equipment checklists; numeric ratios (evidence-based later) |

---

## 24. Related documents

- ADR-0015 Faculty architecture (UNDER REVIEW)
- ADR-0007 Mission Ecosystem (UNDER REVIEW)
- ADR-0014 Creator Rights (UNDER REVIEW)
- ADR-0016 Proof of Capability (UNDER REVIEW)
- `MIS-001` / `MIS-002` / `MIS-003`
- `MIS-TPL-001`; `MIS-FRM-002`; `MIS-FRM-007`
- `GAP_REGISTER.md` — GAP-033; adjacent GAP-032, 034–037

---

## 25. Explicit non-claims

This standard does **not**:

- approve ADR-0015 or close GAP-033;
- set staffing ratios (`GAP-032`) or Mentor caseloads (`GAP-034`);
- invent practitioner currency programmes (`GAP-035` — see `PEO-002`) or replace faculty development architecture (`GAP-036` — see `PEO-003`);
- invent Malaysian (or other) teacher registration or licence law (`GAP-037`);
- create equipment catalogues or database schemas;
- authorise clinical practice, offensive cyber against live systems, or learner exploitation;
- grant automatic PoC, pathway or disciplinary monopoly to practitioners.
