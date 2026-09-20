# Practitioner Currency and Re-authorisation Standard

| Field | Value |
|---|---|
| Document ID | `PEO-002` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-15` |
| Approved | `2026-09-20` |
| Last reviewed | `2026-09-20` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001`–`ADR-0003` APPROVED; `ADR-0015` APPROVED; `PEO-001` APPROVED; `MIS-002` / `MIS-003` APPROVED; `MIS-FRM-007` APPROVED; companion `MIS-FRM-008` APPROVED with this standard |
| Related gaps | Closes GAP-035; GAP-033 Closed (`PEO-001`); GAP-036 (`PEO-003` development — companion); GAP-032 (`PEO-004` capacity — companion); GAP-034 (`PEO-005` Mentor caseload — companion); GAP-037 (country licences — handoff) |
| Source documents | ADR-0015 Practitioner Currency principles; PEO-001 §§8, 10, 18; MIS-003 incident/re-review; GAP-035 resolution brief (2026-09-15); Phase 2 Practitioner Currency human review (2026-09-20) |

> **Authority note:** This is an **APPROVED Core operating standard**. It operationalises Practitioner currency principles in APPROVED ADR-0015 and the review/revocation hooks in APPROVED `PEO-001`. Exact review intervals, training hours and licence rules are **implementation / country** detail. It does **not** reopen PA bands, org≠person, permission dimensions or initial-authorisation architecture in APPROVED `PEO-001`. Companion `MIS-FRM-008` is APPROVED with this standard. This approval does **not** approve `PEO-003`–`005` or close GAP-032 / 034 / 036 / 037.

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-15 | Initial DRAFT — proposed GAP-035 resolution |
| 0.2.0 | 2026-09-20 | Phase 2 human review (`UNDER REVIEW`): reviewer authority; FRM-007 mutation rule; PA-0/guest exemption; REFRESH REQUIRED stop rules; cross-Mission propagation; elevated-risk evidence categories; no Core numeric cadence; FRM-008 companion alignment |
| 1.0.0 | 2026-09-20 | APPROVED after Phase 2 human review + final corrections: documented review basis (no indefinite CURRENT); FRM-008 required for PA-1–PA-4 formal decisions; currency-state pointer fields; licence/standing reviewer wording; closes GAP-035 with MIS-FRM-008 |

---

## 1. Purpose

`PEO-001` defines **who is authorised** to perform which practitioner functions.

This standard defines how Tarbiyat ensures that authorisation remains **CURRENT** over time.

Central question:

> A practitioner may have been competent and authorised previously — what evidence shows they are still competent, safe and current for the functions they continue to perform?

Prevents:

- permanent lifetime authorisation;
- stale technical competence;
- expired professional licences being ignored;
- outdated safety knowledge;
- inactive practitioners retaining high-risk permissions indefinitely;
- “once authorised, always authorised.”

Without creating unnecessary recurring bureaucracy for every low-risk or episodic contributor.

This document resolves **GAP-035**. It is **not** a faculty development standard (`GAP-036` — see `PEO-003`), Mission Team loading / staffing capacity standard (`GAP-032` — see `PEO-004`), Mentor caseload standard (`GAP-034` — see `PEO-005`), or country registration map (`GAP-037`).

---

## 2. Core principle — authorisation must remain current

**Currency** means sufficient **recent** evidence that a practitioner can safely and competently continue exercising an authorised function.

Currency is:

- function-specific;
- domain-specific;
- risk-sensitive;
- evidence-based;
- proportional;
- trigger-driven (not lifetime by calendar alone).

Currency is **not**:

- seniority;
- reputation;
- job title;
- years since qualification alone;
- automatic because employed;
- automatic because the organisation is I-in-R;
- a prestige ranking;
- a universal Core renewal calendar.

**Authorised once ≠ authorised forever.**

---

## 3. Initial authorisation ≠ currency ≠ re-authorisation

| Concept | Question | Primary record |
|---|---|---|
| **Initial authorisation** | Can this person perform this function? | `PEO-001` + `MIS-FRM-007` (+ `MIS-FRM-002` where required) |
| **Currency** | Is there sufficient recent evidence they should **continue** now? | This standard + `MIS-FRM-008` |
| **Re-authorisation / state change** | Formal continuation, restriction, expansion, restoration or suspension after review | `MIS-FRM-008` always; update `MIS-FRM-007` when permission/scope/state changes (§20) |

Do not collapse these concepts.

---

## 4. No universal Core numeric cadence — but not indefinite currency

Core does **not** invent:

- annual / 6-month / other universal renewal windows;
- CPD hour quotas;
- practice-hour thresholds.

Core defines **review triggers** (§§8–9, §12) and **control principles** in this standard.

**No Core numeric cadence ≠ indefinite unreviewed CURRENT.**

Every **active PA-1–PA-4** authorisation must have a **documented currency-review basis**, consisting of one or both of:

- an implementation- or country-defined review window / date where applicable; and/or
- defined change / risk / event triggers (this standard §§8–9, §12).

Leaving an active PA-1–PA-4 authorisation as CURRENT with **no** documented review basis is **non-compliant**.

Actual statutory or campus cadence numbers belong in **Country Profile / implementation** standards (`GAP-037` for licences; campus ops for local review schedules). Implementation may publish risk-class calendars; those calendars are **not** Core law.

**PA-0 / one-off visitor path** remains exempt from recurring currency review (§10).

---

## 5. Currency evidence (proportional set)

Legitimate evidence may include (non-mandatory; select what fits risk and function):

- recent supervised practice;
- recent Mission participation;
- recent use of relevant tools / processes;
- professional CPD;
- renewed licence / certification where applicable;
- observed competence;
- safety refresh;
- recent portfolio / professional work;
- updated technical knowledge;
- incident-free practice **as supporting evidence only** (not sole proof of currency for elevated risk).

**Not required:** every evidence type for every practitioner.  
**Not required:** simultaneous full-time outside employment (ADR-0015).

### 5.1 Elevated-risk minimum evidence structure

For PA-3 / elevated tool / R2+ supervision / R3 / regulated or clinical-adjacent currency reviews, require **proportionate evidence across these categories** (not universal hours):

| Category | Intent |
|---|---|
| Relevant recent practice / observation | Recent engagement with the affected function, tool or facility |
| Competence for affected function / tool / facility | Demonstrated or observed suitability for the scopes under review |
| Required statutory / professional standing | Where country law requires it — reference only; Core does not invent licence types |
| Incidents / material changes review | Near misses, procedure/tool/regulation changes, role changes |
| Accountable reviewer decision | Named technical / safeguarding / governance owners as applicable (§11) |

Country-law CPD / licence hour rules remain **outside Core** (`GAP-037`).

---

## 6. Risk-sensitive currency

Currency burden rises with permission and risk (MIS-003):

| Posture | Typical currency burden |
|---|---|
| PA-0 / episodic guest / visitor | **No recurring currency cycle** by default (§10); event-specific visitor controls |
| Low-risk advisory / PA-1 occasional contribution | Light-touch confirmation may suffice when a cycle applies |
| Regular PA-2 contribution | Proportionate recent practice or refresh |
| PA-3 / elevated tool or R2 supervision | Stronger recent competence evidence (§5.1) |
| R3 / regulated / clinical-adjacent | Strong evidence + country licence / standing where law requires (§5.1) |
| R4 / prohibited as framed | Cannot be “kept current” — redesign or refuse |

---

## 7. Recency (conceptual)

Recency depends on factors such as:

- risk level;
- rate of technical change in the domain;
- frequency of practice;
- equipment / process changes;
- professional regulatory requirements;
- Mission type;
- time away from practice.

Core defines the **principle**; implementation defines numeric windows.

---

## 8. Inactivity

Extended inactivity is **not misconduct**. Possible responses (proportional):

| Response | When illustrative |
|---|---|
| Continue unchanged | Low-risk, short gap, evidence still sufficient |
| Require refresher | Moderate gap or changed procedures |
| Supervised return | Longer gap or elevated-risk functions |
| Temporarily lower permission / risk ceiling | Protect learners while rebuilding currency |
| Suspend specific tools / risk levels | Tool-specific staleness |
| Full re-authorisation | Long absence from high-risk independent supervision |

---

## 9. Change triggers (without waiting for calendar)

Currency / re-authorisation review should trigger when:

- new equipment is introduced;
- software / platform changes materially;
- safety procedures change;
- regulation changes;
- Mission moves into higher risk;
- practitioner takes a new functional role;
- domain practice advances materially;
- I-in-R named practitioner changes;
- frequency, independence, risk, learner contact or function of a guest escalates beyond event controls (§10).

A person may remain generally authorised but require **activity-specific** refresh for the changed element.

---

## 10. PA-0 / episodic guests

**Default:** PA-0 and other episodic guests / one-off visitors do **not** enter a recurring currency cycle.

Use **event-specific visitor / guest controls** under APPROVED `PEO-001` (guest proportionality). `MIS-FRM-007` / `MIS-FRM-008` are usually **not** required for true one-off presence.

**Escalate** into authorisation + currency controls when frequency, independence, risk, learner contact or function changes (e.g. recurring weekly contribution, unsupervised contact, elevated tools). Escalation follows `PEO-001` then this standard — do not invent a guest “annual renewal.”

---

## 11. Reviewer authority

Currency review roles are separated. A practitioner **must not** be the sole approver of their own currency.

| Role | May do | Must not |
|---|---|---|
| **Mission Lead** | Provide evidence, Mission context and recommendations | Sole-approve own or peer currency as final governance owner; override safeguarding / technical competence decisions outside competence |
| **Technical reviewer** | Assess elevated-risk / tool-specific / facility competence evidence | Waive safeguarding; invent licences; sole-decide person-wide integrity/safeguarding outcomes |
| **Competent verifier of statutory / professional standing** | Confirm licence / registration / regulated-standing status where country law requires it | Invent licence types; sole-decide safeguarding outcomes outside mandate |
| **Safeguarding / designated authority** | Decide safeguarding standing and learner-access restrictions | Certify tool competence they do not hold; required for licence/standing reviews **only when** the cause also concerns safeguarding |
| **Accountable governance owner** | Record final currency **state change** and ensure FRM-007/008 consistency | Be the same person as the sole evidence source for elevated-risk technical clearance |

**Rules:**

- Elevated-risk / tool-specific currency requires an **appropriately competent technical reviewer**.
- Safeguarding standing / issues require the **designated safeguarding authority**.
- Licence / registration / regulated-standing expiry or loss requires **governance owner + competent verifier of statutory/professional standing**; safeguarding participates **only where** the cause also concerns safeguarding.
- Final state change must have a named **accountable governance owner** on `MIS-FRM-008`.
- Mission Lead evidence/recommendation is valuable and expected where Mission-scoped; it is **not** automatic final approval.

---

## 12. Incident-triggered review (MIS-003)

Trigger proportional currency / re-authorisation review after:

- safety incident;
- near miss;
- safeguarding concern;
- competence concern;
- repeated procedural breach;
- inappropriate technical judgment;
- function-related data / IP breach.

**An incident does not automatically prove incompetence.** Review proportionally; outcomes may continue, restrict, refresh, supervise return, suspend or terminate (align `PEO-001` §18).

Learners must not be academically harmed by practitioner currency changes.

---

## 13. Professional licence / registration boundary

Where country law requires medical, engineering, teaching, lab or other professional authority:

- expiry, suspension or loss of standing may restrict corresponding Tarbiyat functions;
- such causes are typically **person-wide** for affected licence-dependent scopes (§19);
- review requires **accountable governance owner** plus a **competent verifier of statutory / professional standing** (§11);
- **safeguarding authority** participates only where the cause also concerns safeguarding;
- Core does **not** invent licence types or CPD hour mandates;
- country profiles / `GAP-037` supply lawful detail.

Tarbiyat educational authorisation cannot override a **required** statutory licence that has lapsed.

---

## 14. Tool / equipment currency

A practitioner may remain current in a **domain** while stale on a **specific tool**.

Examples (illustrative, not a catalogue): laser cutter, CNC, laboratory instrument, electrical testing gear, chemical process, cyber platform.

Allow equipment-specific refresh / re-authorisation without stripping unrelated permissions. Scope effect is usually **Mission- or tool-specific** unless a person-wide cause applies (§19).

---

## 15. Mission Lead currency

Mission Lead currency emphasises:

- Mission governance and Education-First;
- risk escalation literacy (MIS-003);
- coordination and adult coverage;
- documentation / brief discipline;

— **not** being the highest technical expert in every package.

Tool changes may require technical practitioners to refresh while the Mission Lead remains current as coordinator (Scenario N). Mission Leads still cannot sole-approve their own currency (§11).

---

## 16. Institution / Industry-in-Residence

I-in-R organisation status does **not** guarantee practitioner currency.

Each participating practitioner retains individual currency requirements.

If named practitioners leave, replacements must be onboarded (`MIS-FRM-002`), authorised (`MIS-FRM-007`) and current (`MIS-FRM-008`) separately (`PEO-001` Scenario H).

---

## 17. Faculty Practitioner (PA-4)

PA-4 Faculty Practitioners should maintain current:

- domain competence;
- educational understanding;
- safeguarding standing;
- relevant Mission / practice engagement as applicable to their functions;
- assessment literacy where they contribute to judgment streams.

Stopping Mission participation while continuing classroom teaching may keep Educator-related currency while requiring review of Practitioner/Mission scopes (Scenario K).

Core does not invent teacher-licensing law (`GAP-037`).

---

## 18. Currency states (not prestige)

| State | Meaning |
|---|---|
| **CURRENT** | Sufficient recent evidence for authorised scopes under review |
| **CURRENT WITH RESTRICTIONS** | Continues with narrowed tools / risk / learner access |
| **REFRESH REQUIRED** | Specified refresh required before continuing **affected** scopes (§18.1) |
| **SUPERVISED RETURN** | May practise only under designated supervision until cleared |
| **SUSPENDED** | Affected permissions paused pending review or exit |

These are **operating states**, not ranks. Higher risk permission is not “higher prestige.”

### 18.1 REFRESH REQUIRED — stop and continuation rules

`REFRESH REQUIRED` applies to **affected permissions / scopes**, not automatically to the whole practitioner.

| Rule | Requirement |
|---|---|
| Elevated-risk / R3 / specialist-tool activity | **Must stop** until cleared for those affected scopes |
| Lower-risk supervised continuation | May occur **only** when explicitly authorised and documented on `MIS-FRM-008` (and FRM-007 if permission/state changes) |
| Informal workaround ban | Must **never** become an informal path around expired standing, unsafe competence or ignored refresh |

Unaffected scopes may continue if evidence supports CURRENT and no person-wide cause applies (§19).

---

## 19. Cross-Mission propagation

Do **not** propagate every restriction globally.

| Cause type | Propagation |
|---|---|
| Mission-specific deficiency (tool, local procedure, Mission role competence) | Remains **Mission- / scope-specific** where justified |
| Person-wide cause — safeguarding, integrity, required statutory standing / licence, or foundational competence affecting multiple scopes | **Propagates** across all affected Missions / scopes |

Record the propagation judgment on `MIS-FRM-008`. Update `MIS-FRM-007` when authoritative permission/state changes (§20).

---

## 20. Renew / expand / restore and FRM-007 mutation

| Action | Meaning | Rule |
|---|---|---|
| **Renew** | Continue existing permissions with no scope change | Currency evidence for those scopes; **`MIS-FRM-008` required** for PA-1–PA-4 (lightweight OK for low-risk unchanged renewals); update FRM-007 **currency pointer** only (§20.2) — no substantive permission rewrite |
| **Expand** | Add domain / tool / risk / function | Requires **additional authorisation** evidence (`PEO-001`); **must update FRM-007** |
| **Reduce / restrict / suspend** | Narrow or pause permissions | **Must update FRM-007** authoritative state |
| **Restore** | Return previously suspended / lapsed permissions | Review evidence appropriate to risk; **must update FRM-007** |
| **Role / Mission-scope / permission change** | Any change to recorded authorisation dimensions | **Must update FRM-007** |

**Renewal must not silently expand scope.** Avoid duplicate conflicting sources of truth: FRM-008 is the lifecycle review record; FRM-007 remains the authoritative permission snapshot and holds the **currency-state pointer** (§20.2).

### 20.1 FRM-008 recording rule (PA-1–PA-4)

For any **formal currency / re-authorisation decision** concerning **PA-1–PA-4**, `MIS-FRM-008` **must** be the lifecycle record — including when the outcome is simply **CURRENT / renew** with no permission change.

A **lightweight** FRM-008 completion is acceptable for low-risk unchanged renewals.

Only **PA-0 / event-specific visitor controls** may bypass FRM-008 by default (§10).

### 20.2 FRM-007 mutation and currency-state pointer

| Outcome | FRM-008 | FRM-007 |
|---|---|---|
| Routine renew — no permission/scope change | **Required** (PA-1–PA-4); lightweight OK | **No substantive rewrite**; update **currency-state pointer** (§20.2 fields) |
| Expand, reduce, suspend, restore, role change, Mission-scope change, permission change | Required | **Must update** authoritative authorisation state **and** currency-state pointer |
| CURRENT WITH RESTRICTIONS / REFRESH REQUIRED / SUPERVISED RETURN that changes usable permissions | Required | **Must update** (restrictions, ceilings, tool lists, status) **and** currency-state pointer |

Where a routine renewal does not substantively rewrite FRM-007, the authoritative practitioner record / FRM-007 lifecycle pointer **must** identify:

- latest `MIS-FRM-008` reference (ID);
- latest currency decision / state;
- review date;
- next review basis / date / trigger where applicable (§4).

Do not maintain a second conflicting “current” list outside FRM-007’s pointer + FRM-008 history.

---

## 21. Currency review model

A review may inspect:

- current permission scope (`MIS-FRM-007`);
- recent practice;
- CPD / refresh;
- licence / check status reference;
- incidents / near misses;
- Mission feedback;
- safeguarding standing;
- new risks / tools;
- desired scope (renew vs expand);
- Mission-specific vs person-wide effect (§19).

### Possible outcomes

- continue (CURRENT);
- continue with restriction;
- refresher required (affected scopes — §18.1);
- supervised return;
- reduce authorisation;
- suspend;
- expand **after** additional evidence (separate from mere renewal).

---

## 22. Evidence proportionality

Avoid bureaucracy.

A PA-1 guest expert who speaks twice per year should **not** undergo the same currency process as a PA-3 practitioner supervising laser cutters. True PA-0 episodic guests use visitor controls, not recurring currency (§10).

Currency controls must match **actual permission and risk**.

---

## 23. Handoffs

| Gap / doc | This standard does | Leaves to them |
|---|---|---|
| `PEO-001` / GAP-033 | Assumes initial authorisation architecture (APPROVED) | Bands, dimensions, onboarding |
| `PEO-003` / GAP-036 | Defines **what** currency requires; development may generate evidence | **How** Tarbiyat develops people (`PEO-003` / `PEO-FRM-001`); training ≠ auto-CURRENT |
| GAP-037 | Notes licence expiry may restrict functions | Country teacher registration / professional licence mapping |
| `PEO-004` / GAP-032 | Currency state feeds who may be counted as capacity | Mission Team loading / capacity checks; Mentor caseloads → `PEO-005` / GAP-034 |

---

## 24. Operational record

Currency reviews are lifecycle events. For **PA-1–PA-4**, `MIS-FRM-008` is the required lifecycle record for every formal currency / re-authorisation decision — including simple CURRENT / renew (§20.1).

**`MIS-FRM-008` — Practitioner Currency Review**  
`docs/06-missions-and-production/templates/MIS-FRM-008-practitioner-currency-review.md`

`MIS-FRM-007` retains the authoritative permission snapshot and the **currency-state pointer** fields in §20.2. Not a database schema.

This standard and `MIS-FRM-008` form **one operating-control milestone** resolving **GAP-035**.

---

## 25. Scenario tests

| ID | Scenario | Result | Rationale |
|---|---|---|---|
| **A** | Robotics practitioner (PA-1–PA-4) works weekly for two years; formal currency confirmation | **CURRENT / renew** via **FRM-008** (lightweight OK); **no** substantive FRM-007 rewrite — update currency-state pointer only; documented review basis required (§4) | §4 / §6 / §20.1–20.2 |
| **B** | Laser-cutter supervisor unused equipment 18 months | **REFRESH REQUIRED** tool-specific; elevated tool **stops** until cleared; may **supervised return** | §14 / §18.1 |
| **C** | Software practitioner active; platform changed significantly | **Review / REFRESH REQUIRED** for platform | Change trigger §9 |
| **D** | Doctor’s professional registration expires | **Restricted / suspended** licence-dependent scopes; **person-wide**; governance + standing verifier; safeguarding only if also a safeguarding cause | §13 / §11 / §19 |
| **E** | Creative practitioner regular work; no minor contact for one year | **Review** learner-access scopes; practice may stay current | Safeguarding separate; §11 |
| **F** | PA-3 serious safety near miss | **Review required**; possible restriction / supervised return — not automatic incompetence | §12 |
| **G** | Practitioner moves R1 → R3 supervision | **Expand** + §5.1 evidence; **update FRM-007** | Expand ≠ renew; §20 |
| **H** | I-in-R replaces named engineer | **New person** onboard + FRM-007 + currency | Non-inheritance §16 |
| **I** | School-employed practitioner returns after long leave | **Supervised return** / refresh as risk dictates | §8; employment ≠ auto-current |
| **J** | Current in software; wants chemistry access | **Expand** via `PEO-001`; **update FRM-007** | Multi-domain |
| **K** | Faculty Practitioner stops Missions; continues classroom teaching | **Review** Mission/Practitioner scopes; teaching may remain current | Function-specific §17 |
| **L** | Strong CPD; little recent hands-on practice | **Review / refresh**; CPD alone insufficient for elevated tools | §5 / §5.1 |
| **M** | Excellent recent practice; safeguarding status uncertain | **Restrict / suspend** learner access pending clearance; **person-wide** for learner-access | §11 / §19 |
| **N** | Mission Lead excellent coordinator; technical tools change | Lead may remain current as coordinator; technical scopes refresh; Lead ≠ sole self-approver | §15 / §11 |
| **O** | Calendar CURRENT; tool stack fully replaced mid-cycle | **Change-triggered review**; affected tools stop / refresh — calendar does not override | §4 / §9 / §18.1 |
| **P** | Expand requested via FRM-008 “renew” tick only | **Refuse silent expand**; require `PEO-001` evidence + FRM-007 update | §20 |
| **Q** | I-in-R org CURRENT; named engineer replaced yesterday | Org status irrelevant; **new person** authorisation + currency | §16 |
| **R** | Licence expired; FRM-007 still ACTIVE | **Immediate restrict/suspend**; FRM-008 + **update FRM-007**; governance + standing verifier; person-wide for those scopes | §13 / §11 / §19 / §20 |
| **S** | Restricted on Mission A tool; still supervising R3 on Mission B | Mission-A deficiency stays scoped **unless** person-wide cause; R3 on B continues only if evidence supports | §19 |
| **T** | CPD-rich; zero hands-on elevated-tool practice | **REFRESH REQUIRED** / stop elevated tool until observed competence | §5.1 / §18.1 |
| **U** | Near-miss → culture of automatic permanent revocation | **Proportional review**; not automatic permanent revoke | §12 |
| **V** | PA-0 guest twice/year forced into annual bureaucracy | **No recurring cycle / no FRM-008 by default**; visitor controls only | §10 |
| **W** | Faculty Practitioner leaves Missions; classroom continues; Mission scopes never reviewed | **Review required** for Mission/Practitioner scopes | §17 / Scenario K |
| **X** | Currency SUSPENDED → learners academically penalised / Mission cancelled without continuity | **Forbidden outcome**; pivot / simulate / substitute; continuity plan required | §12; MIS-001 / MIS-003 |

---

## 26. Core vs country vs implementation

| Layer | Includes |
|---|---|
| **Core** | Currency requirement; no universal numeric cadence **and** no indefinite unreviewed CURRENT for PA-1–PA-4; documented review basis; FRM-008 recording rule; currency-state pointer; triggers; proportionality; domain/function specificity; risk sensitivity; states; REFRESH stop rules; renew≠expand; FRM-007 mutation rule; reviewer authority (incl. standing verifier); PA-0 guest exemption; cross-Mission propagation; inactivity handling; I-in-R non-inheritance; licence-expiry principle; elevated-risk evidence categories; scenarios |
| **Country** | Licence validity; statutory CPD; registration; background-check refresh |
| **Implementation** | Exact intervals; named role holders; training hours; providers; expiry notifications; HR workflow |

---

## 27. Related documents

- `PEO-001` Practitioner Authorisation and Onboarding (APPROVED; GAP-033 Closed)
- `PEO-003` Faculty and Practitioner Development (DRAFT)
- `PEO-004` Mission Team Loading and Staffing Capacity (DRAFT)
- ADR-0015 Practitioner Currency principles (APPROVED)
- `MIS-002` / `MIS-003` (APPROVED)
- `MIS-FRM-007` (APPROVED) / `MIS-FRM-008` (APPROVED with this standard)
- `GAP_REGISTER.md` — GAP-035 Closed; handoffs GAP-036 / 037 / 032 / 034

---

## 28. Explicit non-claims

This standard does **not**:

- reopen APPROVED `PEO-001` PA bands, org≠person, permission dimensions or initial-authorisation architecture;
- set universal Core expiry months, CPD hour quotas or practice-hour thresholds;
- permit indefinite unreviewed CURRENT status for active PA-1–PA-4 authorisations;
- invent country licences or teacher registration (`GAP-037`);
- replace faculty development architecture (`PEO-003` / GAP-036);
- invent Mission Team capacity architecture (`PEO-004` / GAP-032);
- create equipment catalogues or database schemas;
- treat currency states as prestige ranks;
- allow renewal to silently expand authorisation scope;
- allow a practitioner to be sole approver of their own currency;
- allow REFRESH REQUIRED to become an informal workaround for expired or unsafe competence;
- approve `PEO-003`–`005` or close GAP-032 / 034 / 036 / 037.
