---
title: Architecture Blueprint
description: Entry to the Tarbiyat architecture and governance record
---

# Architecture Blueprint

<p class="present-lede">
  The Blueprint is the evolving architecture and governance record for Tarbiyat /
  World's New School. It is where decisions, gaps, evidence and progress are kept with status discipline.
</p>

::: tip Presentation vs Blueprint
External presentation pages explain the school model in accessible language.
This Blueprint layer holds the controlled documentation used for architecture review and governance.
Source Markdown in the repository remains authoritative.
:::

## How to use this layer

1. Start from **approved** Foundation documents and ADRs when you need settled Core law.
2. Treat **UNDER REVIEW** ADRs as proposed architecture — useful, not final.
3. Use the **Gap Register** for what is still open; do not invent closures.
4. Use **Progress** and **Roadmap** for documentation status, not marketing milestones.

## Core systems

<div class="blueprint-grid">

<a class="blueprint-card" href="/foundation/">
  <h3>Foundation</h3>
  <p>Concept Constitution and companion governing documents.</p>
</a>

<a class="blueprint-card" href="/decisions/">
  <h3>Decisions / ADRs</h3>
  <p>Architecture Decision Records with explicit status.</p>
</a>

<a class="blueprint-card" href="/gaps">
  <h3>Gap Register</h3>
  <p>Open questions and proposed resolutions — not silent closures.</p>
</a>

<a class="blueprint-card" href="/progress">
  <h3>Progress</h3>
  <p>Approved, under review, pending and deferred work — plus workstream board.</p>
</a>

<a class="blueprint-card" href="/roadmap">
  <h3>Roadmap</h3>
  <p>Architecture dependency view derived from repository evidence.</p>
</a>

<a class="blueprint-card" href="/evidence/evidence-register">
  <h3>Evidence</h3>
  <p>Evidence and claims registers; research gaps; superseded concepts.</p>
</a>

<a class="blueprint-card" href="/master-index">
  <h3>Master Index</h3>
  <p>Canonical map of sections and document status.</p>
</a>

<a class="blueprint-card" href="/changelog">
  <h3>Changelog</h3>
  <p>Iteration history of the documentation repository.</p>
</a>

<a class="blueprint-card" href="/project-rules">
  <h3>Project Rules</h3>
  <p>Authority hierarchy, writing discipline and change rules.</p>
</a>

</div>

## Architecture area landings

Deeper area pages (still presentation of repository state, not new decisions):

- [Student Journey](/areas/student-journey)
- [Six Worlds & Pathways](/areas/six-worlds)
- [Missions & Production](/areas/missions)
- [People & Culture](/areas/people-and-culture)
- [Competency & Assessment](/areas/competency-assessment)
- [Formal Recognition](/areas/formal-recognition)
- [Country profiles](/country/)

## Confidentiality model

Access control for private Blueprint hosting must use **HTTPS** with **server-side** authentication (Basic Auth via Caddy/nginx, or Cloudflare Access / equivalent). Do not rely on browser-side JavaScript password gates.

Presentation routes and Blueprint routes are separated by path so a future public presentation-only publish can omit Blueprint content without introducing a second frontend.

## Return to presentation

[Home](/) · [School Model](/model) · [Malaysia](/malaysia)
