# Mission Risk and Safeguarding Classification

| Field | Value |
|---|---|
| Document ID | `MIS-003` |
| Version | `0.1.1` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-15` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001`–`ADR-0003` APPROVED; `ADR-0007` v0.1.1 UNDER REVIEW; `ADR-0014` / `ADR-0015` / `ADR-0016` UNDER REVIEW; `MIS-001` / `MIS-002` DRAFT |
| Related gaps | GAP-024 (this document); GAP-022 (`MIS-001`); GAP-023 (`MIS-002`); GAP-031 (templates); GAP-016 (workload) |
| Source documents | ADR-0007 safeguarding, data classes, Deployment Boundary; MIS-001 partner non-bypass; MIS-002 I-in-R non-bypass; GAP-024 resolution brief (2026-09-14) |

> **Authority note:** This standard **operationalises** Mission safeguarding and risk classification implied by ADR-0007 and the handoffs in MIS-001 / MIS-002. Those ADRs remain **`UNDER REVIEW`** and are **not** treated as approved law. Approved baseline: FND-003 and ADR-0001–0003. Country profiles supply statutory safety, clinical, privacy and incident-reporting rules.

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

**Goal:** enable safe authentic work. **Not** eliminate all risk. **Unmanaged or inappropriate risk** is unacceptable.

This document proposes resolution of **GAP-024**. It is **not** a country SOP pack, PPE catalogue, or legal incident-reporting code.

---

## 2. Core principle — proportional safeguarding

Risk governance is:

- **proportional** — low-risk educational work must not carry high-risk bureaucracy;
- **developmentally appropriate**;
- **activity-specific** where practical;
- **revisable** when Mission conditions change;
- **Education-First** — safeguarding intensity never decreases solely because authenticity rises (ADR-0007).

Risk classification applies to a **Mission, activity, work package or deployment mode** — **not** to learner identity. It is **not** a learner score or prestige label.

---

## 3. Risk domains

| ID | Domain | Illustrative concerns |
|---|---|---|
| **A** | Physical safety | Tools, machinery, fabrication, construction, fieldwork, transport, energy systems |
| **B** | Biological / health | Biological materials, public health, clinical environments, medical devices, samples, infection |
| **C** | Chemical | Chemicals, fumes, lab substances, waste |
| **D** | Electrical / mechanical | Powered equipment, robotics, high voltage, moving systems |
| **E** | Digital / cyber | Live systems, security testing, credentials, networks, production software |
| **F** | Privacy / data | Learner data, health data, partner confidential data, personal information, sensitive records |
| **G** | Psychological / emotional | Trauma-related topics, distressing content, conflict, vulnerable communities |
| **H** | Financial | Real money, investment, customer funds, purchasing, trading, learner ventures |
| **I** | Legal / regulatory | Licensing, professional restrictions, minors, public deployment, contracts, regulated sectors |
| **J** | Public / reputational | Publishing, public claims, institutional representation, media, community conflict |
| **K** | Political / civic | Public policy work, campaigning boundary, partisan exposure, ideological pressure |
| **L** | Field / community | Off-campus work, public contact, travel, location risk |
| **M** | Commercial / exploitation | Production quotas, partner dependency, free labour, customer delivery pressure |
| **N** | IP / confidentiality | Unpublished inventions, trade secrets, publication limits, ownership disputes |
| **O** | Safeguarding / access | External adults, messaging, supervision, photography/media, direct contact |

Country law fills concrete definitions; Core names domains only.

---

## 4. Classification levels

| Level | Name | Meaning | Typical operator posture |
|---|---|---|---|
| **R0** | Minimal / ordinary educational risk | Routine classroom, Knowledge Studio or low-hazard studio work | Standard supervision; light documentation |
| **R1** | Controlled educational risk | Recognisable hazards managed by ordinary school controls | Documented controls; competent adult present |
| **R2** | Elevated / specialist-supervised | Specialist competence, restricted equipment/data, or external interaction | Specialist sign-off; stronger controls; may limit stage/access |
| **R3** | High / restricted real-world participation | Significant regulated, public, financial, clinical-adjacent, cyber-live or exploitation risk | Formal review; narrow participation; simulation preferred where safer |
| **R4** | Prohibited as framed | Unlawful, unlicensed, exploitative or unmanaged hazard for learners | Do not proceed; redesign, simulate, or reject |

Where multiple domains apply, use the **highest applicable activity-level** classification (not a prestige average).

---

## 5. Authenticity ≠ risk

Authenticity levels (ADR-0007 A–F) and risk levels (R0–R4) are **separate axes**.

| Example | Authenticity | Risk |
|---|---|---|
| Real community survey with anonymised responses | May be high | Often R1–R2 (privacy/field) |
| Simulated clinical procedure | May be moderate | Still may be R2+ (health/ethics) |
| Real software deployment with learner data | May be high | Often R3 (privacy/cyber/legal) |

High authenticity does **not** automatically mean high risk. High risk does **not** mean better learning.

---

## 6. Activity-level classification

Do **not** classify an entire Mission only by its most dramatic label when practical.

A Mission may contain:

- low-risk research (R0–R1);
- moderate lab work (R1–R2);
- restricted deployment (R3);
- prohibited clinical acts (R4) that must be removed.

Classify at the **work-package / activity** level where hazards differ materially. Record the Mission’s overall ceiling as the highest active package.

---

## 7. Control types

Proportional controls (illustrative, not exhaustive):

| Control type | Examples |
|---|---|
| Supervision | Continuous adult presence; dual supervision; partner supervised contact |
| Specialist competence | Technical/Lab Professional; Practitioner; safeguarding lead; licensed specialist |
| PPE / environment | Protective equipment; facility class; ventilation (implementation detail) |
| Equipment restrictions | Tool locks; power limits; no solo use |
| Data controls | Minimisation; anonymisation; class limits (ADR-0007 / MIS-001) |
| Consent / assent | Age-appropriate information; guardian involvement where required — **not** a waiver of school duty |
| Partner controls | MIS-001 brief; interaction limits; no unsupervised access |
| Stage / competence gates | Developmental fit; induction; supervised practice (§10–11) |
| Simulation substitution | Replace live/hazardous element with realistic simulation |
| Sandbox / isolation | Test systems; synthetic data; network isolation |
| Deployment restrictions | Cap at educational prototype / internal use (§15) |
| Communication review | Public claims, media, identifiable persons |
| Financial limits | Simulated money; capped supervised transactions |
| Emergency / stop-work | Immediate pause authority (§8) |

---

## 8. Stop-work authority

Designated competent adults (typically Technical/Lab Professional, Safeguarding function, Mission Lead, Educator or Practitioner as authorised) **must** be able to pause learner work immediately when:

- safety conditions change;
- supervision fails;
- equipment becomes unsafe;
- partner boundaries are breached;
- data exposure occurs;
- Mission scope changes materially;
- learner wellbeing is threatened.

**Stopping unsafe work is not learner failure** and must not lower educational standing (§25). Aligns with ADR-0015 separation of technical safety vs mentoring preference.

External partners do **not** hold unilateral stop-or-continue authority over school safeguarding.

---

## 9. Stage and maturity

Controls consider developmental stage (Explore→Produce — ADR-0004 context UNDER REVIEW), competence and supervision — **not** crude birthday-only rules or prestige restriction.

A Produce-stage learner may still face R4 prohibitions (e.g. unlicensed clinical acts). A Discover learner may do authentic R0–R1 work.

---

## 10. Competence before access

For elevated-risk activities (typically R2+), learners may need proportional prerequisites such as:

- safety induction;
- tool competence demonstration;
- supervised practice;
- knowledge check;
- Practitioner / Technical sign-off.

**Not** a universal badge farm. Competence evidence scales with actual hazard.

---

## 11. Partner Missions (MIS-001)

Partner-sourced Missions **must not bypass** this classification.

- Partner expertise informs technical risk; it does **not** replace school governance.
- Partner urgency does **not** lower controls.
- Partner briefs must record risk-screen outcome (MIS-001).

---

## 12. Institution / Industry-in-Residence (MIS-002)

Trusted I-in-R status does **not** grant blanket approval. Each Mission / work package still requires appropriate risk review. Repeated good performance may streamline **implementation** checklists; it must **not** eliminate Core controls.

---

## 13. Campus Live Workflow

Real workflow (specs, practitioners, users) may be allowed when risk is controlled (ADR-0007 guardrails).

**Commercial / exploitation domain (M)** treats as risk factors:

- production quotas;
- deadline / customer pressure;
- commercial dependency on learner output;
- fatigue / workload;
- repetitive low-learning work.

Real workflow ≠ free labour.

---

## 14. Deployment relationship

As work moves along ADR-0007 Deployment Boundary, risk review generally intensifies — **proportionally**, not automatically:

educational prototype → validated output → internal use → supervised real-world use → public deployment → commercial deployment

A low-risk public creative output may need fewer controls than a high-risk internal cyber/data system. Escalation of deployment mode is a **re-review trigger** (§22).

---

## 15. Health / clinical boundary

**Typically R4 / prohibited as framed** for learners:

- unlicensed clinical practice;
- diagnosis or treatment;
- invasive procedures;
- handling identifiable clinical records without lawful controls (Highly Restricted — ADR-0007).

**Safer alternatives:** simulation; lawful observation where permitted; public-health research; non-clinical investigation; design/research work.

---

## 16. Cyber / digital boundary

Prefer:

- sandbox / test systems;
- synthetic or anonymised data;
- permission-based security testing on authorised systems only;
- restricted credentials;
- no unauthorised access to third-party live systems.

**Unauthorised offensive testing against live external systems is R4.** This standard does **not** provide offensive cyber instructions.

---

## 17. Financial / enterprise boundary

| Pattern | Typical posture |
|---|---|
| Simulated money / models | R0–R1 |
| Limited supervised real transactions (e.g. school event) | R1–R2 |
| Learner Micro-Venture finances | R2–R3; ADR-0014 / MIS-001 |
| External investor / customer funds | R3+; escalation |
| Inappropriate learner liability | Prohibited |

No learner should bear inappropriate financial liability.

---

## 18. Public / community boundary

Surveys, interviews, publication, media and advocacy-adjacent topics require proportional controls for consent, privacy, representation, political neutrality (MIS-001), vulnerable groups and accuracy. Partisan campaigning remains prohibited as Mission design.

---

## 19. Fieldwork

Travel, remote locations, weather/environment, public interaction, emergency contact and external facilities require proportional supervision and planning. Numeric travel SOPs are implementation / country detail.

---

## 20. Data relationship

Align with ADR-0007 / MIS-001 classes — **do not invent a conflicting taxonomy**:

| Class | Risk implication |
|---|---|
| Open | Usually lower privacy risk |
| Educational Internal | School-governed sharing only |
| Partner Restricted | Elevate controls; limit learner exposure |
| Highly Restricted | Typically incompatible with learner access unless lawfully reduced |

Sensitivity of data often drives privacy/legal classification upward even when physical risk is low.

---

## 21. Re-review triggers

Reclassify when material change occurs, including:

- new partner or I-in-R role change;
- real customer / public deployment begins;
- confidential or Highly Restricted data enters;
- equipment or environment changes;
- learner role expands;
- money or external investment appears;
- scope creep beyond approved brief;
- near miss or incident.

---

## 22. Incident and near miss (principle-level)

1. Stop work as needed.  
2. Protect learners.  
3. Contain the issue.  
4. Escalate to authorised adults.  
5. Document appropriately.  
6. Review controls.  
7. Decide whether to resume, redesign or end.

Near misses are learning signals, not secrets. Detailed statutory reporting is country law.

---

## 23. Consent and responsibility

Consent/assent and guardian involvement matter. The school **cannot** transfer safeguarding responsibility to children or families through forms.

**No:** “parent signed, so unsafe activity is allowed.”

---

## 24. Assessment and Proof of Capability

Learners must **not** receive lower educational standing merely because:

- a high-risk activity is restricted;
- deployment is refused;
- a partner cancels access;
- safety requires simulation instead.

Safe alternatives may yield valid capability evidence. ADR-0016: Capability Claims must not depend on unsafe evidence collection. Real-world evidence can strengthen claims; unsafe deployment is **not** required for PoC.

---

## 25. Risk register concept (not a database schema)

Minimum conceptual record for a Mission / work package:

| Field | Purpose |
|---|---|
| Mission / activity ID | What is classified |
| Risk domains present | §3 |
| Classification (R0–R4) | §4 |
| Required controls | §7 |
| Responsible adult / function | §26 |
| Restrictions / substitutions | Simulation, stage limits, etc. |
| Residual risk note | After controls |
| Approval / review status | Who decided |
| Re-review triggers | §21 |
| Deployment boundary cap | §14 |
| Incident / near-miss refs | If any |

Operational template: `MIS-FRM-003` (Expanded Mission Risk Record) under `MIS-TPL-001` — proposed GAP-031 resolution (not closed). Schema/software deferred.

---

## 26. Who decides?

Functional roles (not a fixed org chart):

| Function | Typical contribution |
|---|---|
| Mission Lead | Coordinates classification against brief |
| Educator | Developmental / educational fit |
| Practitioner | Domain hazard insight |
| Technical / Lab Professional | Equipment / environment safety authority |
| Safeguarding function | Child protection / access |
| School governance | Escalation for R3+ / disputed cases |
| Country-required specialist | Where law mandates |

External partners inform; they do **not** unilaterally approve. **AI must not autonomously approve** high-risk learner activity (§27).

---

## 27. AI / software boundary

AI/software **may** surface risks, suggest checklists, flag missing controls and organise records.

AI/software **must not** autonomously approve, downgrade risk, override safeguarding or authorise deployment.

---

## 28. Scenario tests

| ID | Scenario | Class | Posture | Controls (summary) | Reason |
|---|---|---|---|---|---|
| **A** | Discover learners build cardboard bridge models | R0 | Allowed | Ordinary supervision | Minimal physical hazard |
| **B** | Choose learners use soldering irons under supervision | R1 | Controlled | Supervision; induction; PPE as required | Managed thermal/electrical hazard |
| **C** | Deepen learners operate laser cutters | R2 | Controlled / specialist | Technical competence; facility controls; no solo use | Elevated equipment hazard |
| **D** | Produce learners deploy school attendance app with student data | R3 | Restricted | Data minimisation; privacy review; deployment cap; no Highly Restricted creep | Live learner data / legal / cyber |
| **E** | Health learners want to draw blood samples | R4 | Prohibited as framed | Redesign to simulation / non-clinical | Unlicensed clinical / biohazard |
| **F** | Public-health learners survey community nutrition | R1–R2 | Controlled | Consent; anonymisation; field supervision; neutrality | Authentic but manageable privacy/field risk |
| **G** | Students conduct authorised penetration testing in a sandbox | R2 | Controlled | Sandbox only; authorised scope; specialist supervision | Cyber learning without live third-party harm |
| **H** | Students test security against external live website without permission | R4 | Prohibited | Refuse; redirect to sandbox | Unauthorised access / legal / cyber |
| **I** | Enterprise learners sell small product at supervised school event | R1–R2 | Controlled | Financial limits; supervision; Consumer fairness | Limited real transactions |
| **J** | Learner venture receives outside investor money | R3 | Restricted / escalate | ADR-0014 investment safeguards; conflict review | Financial / legal / minors |
| **K** | Students manufacture 200 units for external customer | R3–R4 | Prohibited as framed (exploitation) | Reject quotas / free labour; educationalise or refuse | Commercial exploitation domain |
| **L** | Students interview vulnerable community members | R2–R3 | Restricted | Ethics; consent; safeguarding; psychological controls | Vulnerability / privacy / field |
| **M** | Creative learners publish documentary with identifiable minors | R2–R3 | Restricted | Consent; media review; privacy; possible anonymisation | Public / safeguarding / privacy |
| **N** | Earth Mission conducts river sampling | R1–R2 | Controlled | Field plan; supervision; environmental/chemical PPE as needed | Field / physical / chemical |
| **O** | Government partner supplies confidential dataset | R3–R4 | Restricted / often reject raw | Reduce class or refuse Highly Restricted | Data / legal |
| **P** | Mission starts R0–R1 then moves to public deployment | Re-review | Escalate controls | Deployment Boundary re-screen | Material change trigger |

---

## 29. Core vs country vs implementation

| Layer | Includes |
|---|---|
| **Core** | Domains; R0–R4; authenticity≠risk; activity-level; controls types; stop-work; non-bypass (partner/I-in-R); re-review; assessment/PoC boundary; AI non-authority; scenarios |
| **Country** | Safety law; labour; clinical rules; privacy; licensing; mandatory incident reporting; background checks |
| **Implementation** | Exact PPE; named approvers; forms; room/equipment limits; numeric ages; tool certifications; emergency numbers; local checklists |

---

## 30. Related documents

- ADR-0007 — safeguarding, data classes, Deployment Boundary (UNDER REVIEW)
- MIS-001 — partner governance; risk screen on briefs
- MIS-002 — I-in-R does not bypass Mission risk
- ADR-0015 — Technical/Lab Professional safety authority; safeguarding functions
- ADR-0016 — PoC / unsafe evidence
- `GAP_REGISTER.md` — GAP-024

---

## 31. Explicit non-claims

This standard does **not**:

- approve ADR-0007 or close GAP-024;
- invent Malaysian (or other) safety statutes;
- set universal numeric age or hour tables;
- provide offensive cyber methods;
- require unsafe deployment for educational validity;
- authorise learners as licensed professionals;
- design risk-register software.
