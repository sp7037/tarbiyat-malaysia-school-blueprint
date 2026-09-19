# Mission Risk and Safeguarding Classification

| Field | Value |
|---|---|
| Document ID | `MIS-003` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-15` |
| Approved | `2026-09-19` |
| Last reviewed | `2026-09-19` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001`–`ADR-0003` APPROVED; `ADR-0004`–`ADR-0007` APPROVED; `ADR-0011` APPROVED; `ADR-0014` APPROVED; `ADR-0015` APPROVED; `ADR-0016` APPROVED; `ADR-0019` APPROVED; `ADR-0020` APPROVED; companion packs `MIS-001` / `MIS-002` / `MIS-TPL-001` DRAFT (do not close GAP-022 / 023 / 031); `PEO-001`–`005` DRAFT; `POC-001` DRAFT; `IMP-001` DRAFT; country overlays `MY-002` / `MY-003` DRAFT |
| Related gaps | Closes GAP-024; related GAP-022 (`MIS-001` DRAFT); GAP-023 (`MIS-002` DRAFT); GAP-031 (templates DRAFT); country legal overlays remain Country Profile work |
| Source documents | ADR-0007 safeguarding, data classes, Deployment Boundary; MIS-001 partner non-bypass; MIS-002 I-in-R non-bypass; GAP-024 resolution brief (2026-09-14); Phase 2 Mission Risk / Safeguarding human review (2026-09-19) |

> **Authority note:** This is an **APPROVED Core operating standard**. It operationalises Mission risk, safeguarding, stop-work and proportional controls implied by APPROVED ADR-0007 (and related APPROVED ADRs). It does **not** redefine Core architecture, invent Malaysian safeguarding statutes, set universal ratios/scores/age thresholds, or approve companion MIS/PEO/POC/MY/IMP documents. Country profiles supply statutory safety, clinical, privacy, screening and incident-reporting rules.

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-14 | Initial DRAFT |
| 0.1.1 | 2026-09-15 | Editorial alignment with MIS-001 / MIS-002 / templates |
| 0.1.1 | 2026-09-19 | Entered Phase 2 human review (constitutes `UNDER REVIEW` stage under `PROJECT_RULES` §6 — no separate intermediate commit required when human review proceeds immediately to decision) |
| 1.0.0 | 2026-09-19 | APPROVED after Phase 2 human review; closes GAP-024; dependency hygiene to APPROVED ADRs; operating hygiene for pre-Mission review, authority map, stop-work / restart, safeguarding disclosure, capacity coupling, external-adult / off-site clarity; MIS-001/002/TPL and country overlays remain open |

---

## 1. Purpose

Enable authentic Tarbiyat Missions, Campus Live Workflows, partner Missions, deployment pathways and Institution / Industry-in-Residence participation **without** treating every Mission as equally risky and **without** allowing “real-world authenticity” to bypass safeguarding.

An operator should be able to answer:

- What risks are present?
- How serious are they?
- What controls are required?
- Who must approve?
- Can learners participate?
- Must work stay in simulation?
- May it move toward real-world use / deployment?
- When must it stop?
- When may it restart?

**Goal:** enable safe authentic work. **Not** eliminate all risk. **Unmanaged or inappropriate risk** is unacceptable.

This document resolves **GAP-024** as Core Mission risk / safeguarding operating architecture. It is **not** a country SOP pack, PPE catalogue, or legal incident-reporting code.

---

## 2. Core / operating boundary

MIS-003 **implements** APPROVED Core. It does **not** create a second constitution.

Already APPROVED Core principles this standard operationalises include:

- authenticity never overrides safety (ADR-0007);
- school retains educational and stop-work authority (ADR-0007 / ADR-0015);
- professional expertise ≠ unrestricted educational or safeguarding authority (ADR-0015);
- external environments remain governed learning environments (ADR-0007 / ADR-0020);
- human safeguarding judgment cannot be delegated to AI (ADR-0015 / ADR-0016);
- Creator Rights and PoC integrity remain separate from safety permission (ADR-0014 / ADR-0016).

MIS-003 supplies **operating mechanisms**: domains, R-levels, pre-Mission review, authority map, controls, stop-work, restart, incident/near-miss learning, and compatibility rules.

---

## 3. Core principle — proportional safeguarding

Risk governance is:

- **proportional** — low-risk educational work must not carry high-risk bureaucracy;
- **developmentally appropriate**;
- **activity-specific** where practical;
- **capacity-coupled** — facilities/partners do not substitute for authorised people (§12);
- **revisable** when Mission conditions change;
- **Education-First** — safeguarding intensity never decreases solely because authenticity rises (ADR-0007).

Risk classification applies to a **Mission, activity, work package or deployment mode** — **not** to learner identity. It is **not** a learner score, prestige label or mathematical precision claim.

**Anti-theatre / anti-paperwork:**

| Failure | Rejected posture |
|---|---|
| Failure 1 | “Authenticity means real-world work, so accept professional risk.” |
| Failure 2 | “Safeguarding means every simple Mission requires impossible bureaucracy.” |

Match controls to activity, environment, learner readiness, authorised people and consequence — not paperwork for its own sake.

---

## 4. Risk domains

| ID | Domain | Illustrative concerns |
|---|---|---|
| **A** | Physical safety | Tools, machinery, fabrication, construction, fieldwork, transport, energy systems |
| **B** | Biological / health | Biological materials, public health, clinical environments, medical devices, samples, infection |
| **C** | Chemical | Chemicals, fumes, lab substances, waste |
| **D** | Electrical / mechanical | Powered equipment, robotics, high voltage, moving systems |
| **E** | Digital / cyber | Live systems, security testing, credentials, networks, production software |
| **F** | Privacy / data | Learner data, health data, partner confidential data, personal information, sensitive records |
| **G** | Psychological / emotional / social | Trauma-related topics, distressing content, conflict, vulnerable communities, peer pressure |
| **H** | Financial | Real money, investment, customer funds, purchasing, trading, learner ventures |
| **I** | Legal / regulatory / reputational | Licensing, professional restrictions, minors, public deployment, contracts, regulated sectors, institutional representation |
| **J** | Public / media | Publishing, public claims, media, photography/video, community conflict |
| **K** | Political / civic | Public policy work, campaigning boundary, partisan exposure, ideological pressure |
| **L** | Field / community / off-site / travel | Off-campus work, partner premises, public contact, travel, location risk |
| **M** | Commercial / exploitation | Production quotas, partner dependency, free labour, customer delivery pressure |
| **N** | IP / confidentiality | Unpublished inventions, trade secrets, publication limits, ownership disputes |
| **O** | Safeguarding / access | External adults, messaging, supervision, one-to-one access, photography/media, direct contact, transport |

Not every Mission carries every domain. Classify what is **present and material**. Country law fills concrete definitions; Core names domains only.

---

## 5. Classification levels (R0–R4)

R-levels are **qualitative operational categories**, not fake mathematical scores or universal numeric thresholds.

| Level | Name | Meaning | Typical operator posture |
|---|---|---|---|
| **R0** | Minimal / ordinary educational risk | Routine classroom, Knowledge Studio or low-hazard studio work | Standard supervision; light documentation |
| **R1** | Controlled educational risk | Recognisable hazards managed by ordinary school controls | Documented controls; competent adult present |
| **R2** | Elevated / specialist-supervised | Specialist competence, restricted equipment/data, or external interaction | Specialist sign-off; stronger controls; may limit stage/access |
| **R3** | High / restricted real-world participation | Significant regulated, public, financial, clinical-adjacent, cyber-live or exploitation risk | Formal review; narrow participation; simulation preferred where safer |
| **R4** | Prohibited as framed | Unlawful, unlicensed, exploitative or unmanaged hazard for learners | Do not proceed; redesign, simulate, or reject |

Where multiple domains apply, use the **highest applicable activity-level** classification (not a prestige average).

### Activity posture labels

| Posture | Meaning |
|---|---|
| **Permitted** | Ordinary educational work under standard supervision |
| **Permitted with controls** | Proceed only with documented proportional controls |
| **Specialist-authority required** | Named technical / safeguarding / licensed competence required before access |
| **Restricted** | Narrow participation; heightened review; often simulation preferred |
| **Prohibited as framed** | Do not proceed in current form; redesign, simulate or reject |

Country law may impose additional prohibitions beyond Core R4 examples.

---

## 6. Authenticity ≠ risk

Authenticity levels (ADR-0007 A–F) and risk levels (R0–R4) are **separate axes**.

| Example | Authenticity | Risk |
|---|---|---|
| Real community survey with anonymised responses | May be high | Often R1–R2 (privacy/field) |
| Simulated clinical procedure | May be moderate | Still may be R2+ (health/ethics) |
| Real software deployment with learner data | May be high | Often R3 (privacy/cyber/legal) |

High authenticity does **not** automatically mean high risk. High risk does **not** mean better learning. Higher authenticity does **not** grant permission for higher danger.

Safety controls may **modify, substitute, restrict, supervise, suspend or stop** a Mission without violating Tarbiyat Core.

---

## 7. Activity-level classification

Do **not** classify an entire Mission only by its most dramatic label when practical.

A Mission may contain:

- low-risk research (R0–R1);
- moderate lab work (R1–R2);
- restricted deployment (R3);
- prohibited clinical acts (R4) that must be removed.

Classify at the **work-package / activity** level where hazards differ materially. Record the Mission’s overall ceiling as the highest active package.

---

## 8. Pre-Mission risk review (proportionate)

Before learner participation, apply a **proportionate** review. Not every Mission needs the same bureaucracy.

| Review element | When typically needed |
|---|---|
| Mission purpose / educationalisation | All significant Missions |
| Learner stage / readiness / support needs | All; intensity scales with hazard |
| Activity / work package hazards | All |
| Location / environment (campus, partner, field, online) | All off-ordinary settings; all elevated risk |
| Equipment / materials | When tools, chemicals, power, bio, cyber-live used |
| External adults / roles / access | When partners, guests, I-in-R, visitors present |
| Professional / workplace context | Partner premises; regulated settings |
| Data / confidentiality / images / AI-cloud tools | When personal, partner, sensitive or public media involved |
| Transport / off-site / travel | Off-campus activity |
| Required technical / safeguarding authority | Typically R2+ |
| Emergency / stop-work readiness | Elevated risk; all off-site |
| Prohibited / restricted activity screen | Always for R2+; always for clinical / live-cyber / exploitation flags |

R0–R1 ordinary educational work may use a **light screen** (often inside `MIS-FRM-001` for partner Missions, or ordinary school supervision records). Elevated risk typically expands to `MIS-FRM-003`.

---

## 9. Control types

Proportional controls (illustrative, not exhaustive):

| Control type | Examples |
|---|---|
| Supervision | Continuous adult presence; dual supervision; partner supervised contact |
| Specialist competence | Technical/Lab Professional; Practitioner; safeguarding lead; licensed specialist |
| PPE / environment | Protective equipment; facility class; ventilation (implementation detail) |
| Equipment restrictions | Tool locks; power limits; no solo use |
| Data controls | Minimisation; anonymisation; class limits (ADR-0007 / MIS-001); no casual PoC flow of safeguarding data |
| Consent / assent | Age-appropriate information; guardian involvement where required — **not** a waiver of school duty |
| Partner controls | MIS-001 brief; interaction limits; no unsupervised access |
| Stage / competence gates | Developmental fit; induction; supervised practice (§11) |
| Simulation substitution | Replace live/hazardous element with realistic simulation |
| Sandbox / isolation | Test systems; synthetic data; network isolation |
| Deployment restrictions | Cap at educational prototype / internal use (§17) |
| Communication / media review | Public claims, media, identifiable persons, photography |
| Financial limits | Simulated money; capped supervised transactions |
| Emergency / stop-work | Immediate pause authority (§10) |
| Capacity check | Authorised people / supervision / response capacity present (§12) |

---

## 10. Stop-work authority

Designated competent adults (typically Technical/Lab Professional, Safeguarding function, Mission Lead, Educator, Practitioner as authorised, or school leadership) **must** be able to pause or stop learner work **immediately** when, for example:

- safety conditions change;
- supervision fails;
- equipment becomes unsafe;
- authorised technical support is absent for elevated work;
- partner acts outside scope or boundaries are breached;
- confidentiality / data boundary is breached;
- safeguarding concern emerges;
- learner distress becomes material;
- Mission scope changes materially without re-review.

**Operating rules:**

1. Stopping unsafe work is **not** learner failure and must not lower educational standing (§27).
2. Stop-work must be **usable in practice** — no marketing, sponsor, investor, event-schedule or sunk-cost approval is required to stop.
3. External partners do **not** hold unilateral stop-or-continue authority over school safeguarding.
4. Technical expertise does **not** override safeguarding stop-work.
5. AI outputs do **not** override human stop-work (§30).

Aligns with ADR-0015 separation of technical safety vs mentoring preference / commercial pressure.

---

## 11. Restart after stop

A stopped Mission does **not** restart merely because:

- a deadline exists;
- a sponsor expects output;
- money was spent;
- a public event is scheduled;
- parents previously consented;
- authenticity ambitions remain high.

**Restart requires** proportionate review that the reason for stopping has been sufficiently controlled or redesigned, and that authorised adults confirm readiness to resume (or decide to substitute, simulate, pivot or end).

Record material stop / incident / restart decisions in operational records (`MIS-FRM-006-C` when used; otherwise linked incident notes + updated risk record).

---

## 12. Capacity coupling

Apply APPROVED ADR-0015.

A Mission **cannot** proceed merely because a room, equipment or partner exists if adequate:

- authorised people;
- supervision;
- technical authority (where required);
- safeguarding capability;
- response / stop-work capacity;

are absent.

**No universal Mission∶staff or supervision ratios are set here.** Capacity judgment is human and proportional; detailed loading mechanisms remain `PEO-004` / `PEO-005` DRAFT (`GAP-032` / `GAP-034`).

---

## 13. Authority map

Functional roles (not a fixed org chart):

| Function | Typical contribution |
|---|---|
| **Educator** | Developmental / educational fit; learning design; Formal Recognition coexistence |
| **Mission Lead** | Coordinates classification against brief; day-to-day Mission coordination |
| **Practitioner** | Domain hazard insight; scoped practice authority — not automatic safeguarding lead |
| **Technical / Lab Professional** | Equipment / environment technical-safety authority where relevant |
| **Safeguarding function** | Child protection / access / disclosure escalation |
| **Principal / institutional escalation** | R3+ / disputed / launch-critical / partner-termination decisions |
| **Partner personnel** | Inform technical/domain risk; **never** unilaterally approve school safety or override stop-work |
| **Learner** | Age-appropriate responsibility for following safety instructions — **never** carries institutional safeguarding duty |

External partners inform; they do **not** unilaterally approve. Prestige, funding or professional licence does **not** confer school safeguarding authority.

---

## 14. Competence before access

For elevated-risk activities (typically R2+), learners may need proportional prerequisites such as:

- safety induction;
- tool competence demonstration;
- supervised practice;
- knowledge check;
- Practitioner / Technical sign-off.

**Not** a universal badge farm. Competence evidence scales with actual hazard. Where country/professional law requires licences, those override Tarbiyat internal status.

---

## 15. Stage, maturity and learner readiness

Controls consider developmental stage (Explore→Produce — ADR-0004–0006 APPROVED), preparation, competence, supervision, prior experience and individual support needs — **not** crude birthday-only rules, prestige restriction or deterministic learner risk scores.

The **same activity** may be appropriate for one learner/stage and inappropriate for another.

A Produce-stage learner may still face R4 prohibitions (e.g. unlicensed clinical acts). A Discover learner may do authentic R0–R1 work.

---

## 16. Partner Missions (MIS-001)

Partner-sourced Missions **must not bypass** this classification.

- Partner expertise informs technical risk; it does **not** replace school governance.
- Partner urgency does **not** lower controls.
- Partner briefs must record risk-screen outcome (MIS-001 DRAFT).
- Partner premises are **not** automatically safe learning environments (§19).

Detailed partner operating standard remains `MIS-001` DRAFT (`GAP-022` — not closed).

---

## 17. Institution / Industry-in-Residence (MIS-002)

Trusted I-in-R status does **not** grant blanket approval. Each Mission / work package still requires appropriate risk review. Repeated good performance may streamline **implementation** checklists; it must **not** eliminate Core controls.

Detailed I-in-R operating standard remains `MIS-002` DRAFT (`GAP-023` — not closed).

---

## 18. External adults

External adults are governed by **role and access**, not expertise or prestige.

Expertise / fame / funding does **not** automatically permit:

- unsupervised learner access;
- one-to-one access;
- access to unrelated learner records;
- unrestricted messaging (including WhatsApp / social DMs);
- transport of learners;
- photography / filming;
- data collection;
- off-site contact outside approved Mission scope.

Connects to People / partner standards (`PEO-001`, `MIS-001`, `MIS-FRM-002` / `007`) without approving those DRAFT documents.

---

## 19. Off-site / partner environments

Missions may occur in company, university, laboratory, workshop, hospital/clinical-adjacent, community, field, public venue or online external environments.

**School remains responsible** for determining whether the learning environment is appropriate under this standard. Partner premises ≠ automatic safe environment. Externalisation of facilities (ADR-0020) must **not** externalise governance.

Off-site / travel require proportional supervision, planning, emergency contact and stop-work readiness. Numeric travel SOPs are implementation / country detail.

---

## 20. Campus Live Workflow

Real workflow (specs, practitioners, users) may be allowed when risk is controlled (ADR-0007 guardrails).

**Commercial / exploitation domain (M)** treats as risk factors:

- production quotas;
- deadline / customer pressure;
- commercial dependency on learner output;
- fatigue / workload;
- repetitive low-learning work.

Real workflow ≠ free labour.

---

## 21. Equipment / technical work

Safeguards apply proportionally to tools, machinery, electrical systems, heat/fire, chemicals, biological materials, digital/cyber environments and specialist equipment — **without inventing technical regulations**.

Where competence or licensing is required, **country / professional law overrides** Tarbiyat internal authorisation status. Technical safety authority is independent of mentor preference or commercial deadline (ADR-0015).

---

## 22. Deployment relationship

As work moves along ADR-0007 Deployment Boundary, risk review generally intensifies — **proportionally**, not automatically:

educational prototype → validated output → internal use → supervised real-world use → public deployment → commercial deployment

A low-risk public creative output may need fewer controls than a high-risk internal cyber/data system. Escalation of deployment mode is a **re-review trigger** (§26).

---

## 23. Health / clinical boundary

**Typically R4 / prohibited as framed** for learners:

- unlicensed clinical practice;
- diagnosis or treatment;
- invasive procedures;
- handling identifiable clinical records without lawful controls (Highly Restricted — ADR-0007).

**Safer alternatives:** simulation; lawful observation where permitted; public-health research; non-clinical investigation; design/research work.

---

## 24. Cyber / digital boundary

Prefer:

- sandbox / test systems;
- synthetic or anonymised data;
- permission-based security testing on authorised systems only;
- restricted credentials;
- no unauthorised access to third-party live systems.

**Unauthorised offensive testing against live external systems is R4.** This standard does **not** provide offensive cyber instructions.

---

## 25. Financial / enterprise boundary

| Pattern | Typical posture |
|---|---|
| Simulated money / models | R0–R1 |
| Limited supervised real transactions (e.g. school event) | R1–R2 |
| Learner Micro-Venture finances | R2–R3; ADR-0014 / MIS-001 |
| External investor / customer funds | R3+; escalation |
| Inappropriate learner liability | Prohibited |

No learner should bear inappropriate financial liability.

---

## 26. Public / community / media boundary

Surveys, interviews, publication, media, photography and advocacy-adjacent topics require proportional controls for consent, privacy, representation, political neutrality (MIS-001), vulnerable groups and accuracy. Partisan campaigning remains prohibited as Mission design.

Risk/safeguarding may legitimately restrict publication, photography, public demo, technical-detail release or commercial deployment (ADR-0014 compatibility). Creator recognition should remain where possible.

---

## 27. Data / privacy / confidentiality

Align with ADR-0007 / ADR-0014 / ADR-0016 / MIS-001 — **do not invent a conflicting taxonomy**:

| Class | Risk implication |
|---|---|
| Open | Usually lower privacy risk |
| Educational Internal | School-governed sharing only |
| Partner Restricted | Elevate controls; limit learner exposure |
| Highly Restricted | Typically incompatible with learner access unless lawfully reduced |

Mission risk review must consider learner personal data, partner confidential information, sensitive evidence, images/video, external systems, AI/cloud tools and publication.

**Safeguarding-sensitive data must not flow casually into PoC.** Confidential partner source data need not appear in PoC; sanitised verified evidence may be used (ADR-0014 / ADR-0016). Learners cannot automatically publish confidential material. Confidentiality cannot erase truthful learner contribution.

---

## 28. Assessment and Proof of Capability

Learners must **not** receive lower educational standing merely because:

- a high-risk activity is restricted;
- deployment is refused;
- a partner cancels access;
- safety requires simulation instead.

Safe alternatives may yield valid capability evidence. ADR-0016: Capability Claims must not depend on unsafe evidence collection. Safety pressure must not encourage staged fake evidence, unsafe attempts merely for capability proof, or repetition of dangerous activity only to verify a claim.

---

## 29. Safeguarding disclosure during a Mission

If a learner discloses a safeguarding concern during Mission work:

1. Protect immediate safety.
2. Do **not** investigate beyond appropriate role.
3. Escalate through the designated safeguarding authority.
4. Preserve confidentiality appropriately among those who need to know.
5. Do **not** promise secrecy that cannot lawfully be kept.
6. Pause or redesign Mission activity as needed.

Country mandatory-reporting duties are **Country Profile** work — not invented here.

---

## 30. AI / software boundary

AI/software **may** assist with checklists, risk prompts, scheduling, documentation and pattern detection.

AI/software **must not** autonomously:

- approve elevated risk;
- permit prohibited work;
- decide safeguarding concerns;
- waive supervision;
- close incidents;
- overrule human stop-work;
- authorise deployment.

---

## 31. Re-review triggers

Reclassify when material change occurs, including:

- new partner or I-in-R role change;
- unexpected off-site move;
- real customer / public deployment begins;
- confidential or Highly Restricted data enters;
- equipment or environment changes;
- learner role expands;
- money or external investment appears;
- scope creep beyond approved brief;
- near miss or incident;
- capacity / supervision failure.

---

## 32. Incident and near miss

Principle-level flow:

1. Immediate protection of learners.  
2. Stop-work as needed.  
3. First response / contain the issue.  
4. Safeguarding escalation where relevant.  
5. Notify authorised adults / guardians as appropriate.  
6. Preserve evidence where safe and lawful.  
7. Document appropriately.  
8. Escalate to external authorities **where country law requires** (Country Profile).  
9. Review controls before any restart (§11).

Near misses, unsafe conditions, repeated minor issues, partner behaviour problems, equipment failures and supervision weaknesses are **learning signals** — improvement must not wait for injury.

Detailed statutory reporting is country law.

---

## 33. Partner failure

If a partner:

- ignores supervision rules;
- requests direct student contact outside approved channels;
- changes activity at the last minute without re-review;
- introduces unsafe equipment;
- pressures a learner;
- requests confidential information beyond approved class;
- refuses school stop-work;

the school retains authority to **restrict, remove learners, suspend or terminate** partner participation. Academic continuity for learners must be protected (simulate / pivot / substitute) without punishing learners for partner failure.

---

## 34. Consent and responsibility

Consent/assent and guardian involvement matter. The school **cannot** transfer safeguarding responsibility to children or families through forms.

**No:** “parent signed, so unsafe activity is allowed.”  
**No:** “sponsor paid, so stop-work is delayed.”

---

## 35. Risk register concept (not a database schema)

Minimum conceptual record for a Mission / work package:

| Field | Purpose |
|---|---|
| Mission / activity ID | What is classified |
| Risk domains present | §4 |
| Classification (R0–R4) | §5 |
| Required controls | §9 |
| Responsible adult / function | §13 |
| Capacity note | §12 |
| Restrictions / substitutions | Simulation, stage limits, etc. |
| Residual risk note | After controls |
| Approval / review status | Who decided |
| Stop-work holders | §10 |
| Re-review triggers | §31 |
| Deployment boundary cap | §22 |
| Incident / near-miss / restart refs | If any |

Operational templates under `MIS-TPL-001` DRAFT (`GAP-031` — not closed):

- `MIS-FRM-001` — basic partner / risk screen hooks  
- `MIS-FRM-003` — Expanded Mission Risk Record (typically R2+)  
- `MIS-FRM-006` — Deployment / Suspension / Exit / Stop-Work–Incident–Restart  

Schema/software deferred.

---

## 36. Scenario tests

| ID | Scenario | Class / posture | Controls (summary) | Reason |
|---|---|---|---|---|
| **A** | Discover learners build cardboard bridge models | R0 / Permitted | Ordinary supervision | Minimal physical hazard |
| **B** | Choose learners use soldering irons under supervision | R1 / Permitted with controls | Supervision; induction; PPE as required | Managed thermal/electrical hazard |
| **C** | Deepen learners operate laser cutters | R2 / Specialist-authority required | Technical competence; facility controls; no solo use | Elevated equipment hazard |
| **D** | Produce learners deploy school attendance app with student data | R3 / Restricted | Data minimisation; privacy review; deployment cap | Live learner data / legal / cyber |
| **E** | Health learners want to draw blood samples | R4 / Prohibited as framed | Redesign to simulation / non-clinical | Unlicensed clinical / biohazard |
| **F** | Public-health learners survey community nutrition | R1–R2 / Permitted with controls | Consent; anonymisation; field supervision | Authentic but manageable privacy/field risk |
| **G** | Students conduct authorised penetration testing in a sandbox | R2 / Permitted with controls | Sandbox only; authorised scope; specialist supervision | Cyber learning without live third-party harm |
| **H** | Students test security against external live website without permission | R4 / Prohibited | Refuse; redirect to sandbox | Unauthorised access / legal / cyber |
| **I** | Enterprise learners sell small product at supervised school event | R1–R2 / Permitted with controls | Financial limits; supervision | Limited real transactions |
| **J** | Learner venture receives outside investor money | R3 / Requires escalation | ADR-0014 investment safeguards; conflict review | Financial / legal / minors |
| **K** | Students manufacture 200 units for external customer | R3–R4 / Prohibited as framed | Reject quotas / free labour | Commercial exploitation |
| **L** | Students interview vulnerable community members | R2–R3 / Restricted | Ethics; consent; safeguarding; psychological controls | Vulnerability / privacy / field |
| **M** | Creative learners publish documentary with identifiable minors | R2–R3 / Restricted | Consent; media review; privacy; possible anonymisation | Public / safeguarding / privacy |
| **N** | Earth Mission conducts river sampling | R1–R2 / Permitted with controls | Field plan; supervision; PPE as needed | Field / physical / chemical |
| **O** | Government partner supplies confidential dataset | R3–R4 / Restricted / often reject raw | Reduce class or refuse Highly Restricted | Data / legal |
| **P** | Mission starts R0–R1 then moves to public deployment | Re-review | Deployment Boundary re-screen | Material change trigger |
| **Q** | Practitioner tells learner to use equipment outside approved scope | **STOP-WORK** | Immediate pause; technical authority; re-brief or redesign | Scope breach / equipment safety |
| **R** | Sponsor insists event continue despite safety concern | **STOP-WORK** / **PROHIBITED** pressure | School stop-work; no sponsor override | Commercial pressure ≠ safety |
| **S** | Learner privately discloses a safeguarding concern | **REQUIRES ESCALATION** | Protect; escalate safeguarding; do not over-investigate | Safeguarding disclosure |
| **T** | Mission moves unexpectedly off-site | **REQUIRES ESCALATION** / possible **STOP-WORK** | Re-review location / supervision / emergency readiness | Material change |
| **U** | Partner adult requests direct WhatsApp contact with learner | **PROHIBITED** as framed (unless separately approved channel) | Refuse; route via school-approved channels | External-adult access |
| **V** | External lab says its own safety policy is sufficient | **REQUIRES ESCALATION** | School remains responsible; partner policy informs, does not replace | Governance non-externalisation |
| **W** | Learner wants higher-risk task only to prove capability | **PROHIBITED** as framed / redesign | Alternative evidence methods; no unsafe PoC attempts | PoC ≠ unsafe proof |
| **X** | AI risk assistant labels activity “safe”; Educator disagrees | Educator prevails | AI advisory only | AI non-authority |
| **Y** | Qualified professional lacks child-safeguarding preparation | **RESTRICTED** until prepared | Onboarding / access limits; no unsupervised access | Expertise ≠ safeguarding authority |
| **Z** | Parent consented but school judges activity unsafe | School judgment prevails | Do not proceed | Consent ≠ waiver |
| **AA** | Near miss with no injury | Record + review controls | Learn before injury | Near-miss learning |
| **AB** | Partner refuses school safety condition | **STOP-WORK** / terminate or redesign | School may restrict/remove/suspend/terminate | Partner failure |

---

## 37. Core vs country vs implementation

| Layer | Includes |
|---|---|
| **Core (this standard)** | Domains; R0–R4 qualitative levels; authenticity≠risk; activity-level; pre-Mission review; authority map; controls types; stop-work; restart; capacity coupling; non-bypass (partner/I-in-R); external-adult principles; off-site governance; re-review; incident/near-miss principles; assessment/PoC boundary; Creator Rights compatibility; AI non-authority; scenarios |
| **Country** | Safety law; labour; clinical rules; privacy; licensing; mandatory incident reporting; background/vetting; building/fire; transport/off-site statutes; professional regulation |
| **Implementation** | Exact PPE; named approvers; forms; room/equipment limits; numeric ages; tool certifications; emergency numbers; local checklists; dry-run evidence |

### Country-Legal Dependency List (Malaysia / any country — not invented here)

MIS-003 **cannot finalise** without Country Profile / counsel mapping of, at least:

1. Mandatory safeguarding / child-protection reporting duties  
2. Staff / visitor screening and vetting requirements  
3. Workplace health & safety duties applicable to school category  
4. Minors / child-employment / hazardous-work restrictions for Mission production  
5. Building, fire, occupancy and lab safety clearances  
6. Professional regulation boundaries (clinical, engineering, counselling, etc.)  
7. Data protection / privacy / image-consent rules  
8. Transport / off-site excursion requirements  
9. Incident notification duties to authorities  
10. Teacher registration / lawful teaching authority overlays interacting with Mission staffing  

These remain Country Profile / `MY-002` / `MY-003` / counsel work — **not** invented in this standard.

---

## 38. Pilot commissioning requirements (IMP-001 context)

Before Pilot Go, MIS-003 expects the school to be able to demonstrate (IMP-001 DRAFT Gate E context — **IMP-001 not approved**):

- Mission risk-review method adopted (this standard);
- named safeguarding authority;
- external-adult access controls;
- usable stop-work process;
- incident / near-miss process;
- off-site controls for any planned off-campus work;
- emergency / escalation readiness;
- minimum records capability (`MIS-FRM-001` / `003` / `006` as applicable — templates remain DRAFT);
- dry-run evidence that stop-work and risk review actually function.

High-authenticity / high-risk Mission classes may be excluded from the pilot envelope.

---

## 39. Related documents

- ADR-0007 (APPROVED) — Mission Ecosystem; Education-First; Deployment Boundary; data classes  
- ADR-0014 (APPROVED) — Creator Rights; confidentiality; sanitised evidence  
- ADR-0015 (APPROVED) — Faculty / Technical safety authority; safeguarding functions; capacity coupling  
- ADR-0016 (APPROVED) — PoC; unsafe evidence prohibition  
- ADR-0020 (APPROVED) — Campus / external facilities remain governed  
- MIS-001 / MIS-002 (DRAFT) — partner / I-in-R ops (`GAP-022` / `023` — not closed)  
- MIS-TPL-001 / MIS-FRM-* (DRAFT) — templates (`GAP-031` — not closed)  
- IMP-001 (DRAFT) — pilot commissioning (`GAP-051` — not closed)  
- `GAP_REGISTER.md` — GAP-024 Closed by this standard  

---

## 40. Explicit non-claims

This standard does **not**:

- redefine APPROVED Core ADRs or FND-003;
- approve `MIS-001`, `MIS-002`, `MIS-TPL-001`, `PEO-*`, `POC-*`, `MY-*` or `IMP-001`;
- invent Malaysian (or other) safety / safeguarding / privacy statutes;
- set universal numeric age, hour, ratio, emergency-time or risk-score tables;
- provide offensive cyber methods;
- require unsafe deployment for educational validity;
- authorise learners as licensed professionals;
- design risk-register software;
- close GAP-022, GAP-023 or GAP-031.
