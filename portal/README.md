# Tarbiyat Architecture Portal

Dual-purpose VitePress site for Tarbiyat / World's New School:

1. **Presentation** — accessible explanation of the school model for external stakeholders  
2. **Blueprint** — detailed architecture / governance documentation (ADRs, gaps, evidence, progress)

**Authoritative source:** Markdown documents at the repository root and under `docs/`. This portal is a presentation and navigation layer only. It does not approve ADRs, close gaps, or change educational architecture.

## Information architecture

**Presentation routes:** `/`, `/model`, `/student-journey`, `/six-worlds`, `/missions`, `/proof-of-capability`, `/people-learning`, `/malaysia`

**Blueprint entry:** `/blueprint/` → Foundation, Decisions, Gaps, Progress, Roadmap, Evidence, Master Index, Changelog, Project Rules

Path separation supports a future public presentation-only publish without a second frontend.

## Run locally

```bash
cd portal
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
cd portal
npm install
npm run build
```

Static output is written to `portal/docs/.vitepress/dist/`.

Preview the production build:

```bash
cd portal
npm run preview
```

## How content is derived

On every `dev` / `build`, `npm run prepare:content` scans the repository and generates pages under `portal/docs/_generated/` from:

- ADR body files in `docs/13-decisions/adr/`
- Foundation and evidence Markdown
- `GAP_REGISTER.md`, `MASTER_INDEX.md`, `CHANGELOG.md`, `PROJECT_RULES.md`

Do not edit `_generated/` by hand — it is overwritten.

Presentation pages under `portal/docs/` (homepage, model, journey, etc.) are edited directly. They must summarise repository architecture without inventing claims.

## Add a new ADR

1. Create the ADR Markdown file under `docs/13-decisions/adr/` using the repository template (e.g. `ADR-0006-....md`).
2. Update `docs/13-decisions/ADR_INDEX.md`, `MASTER_INDEX.md`, and `GAP_REGISTER.md` as required by project rules.
3. Restart or re-run the portal (`npm run dev` or `npm run build`).

The prepare script discovers `ADR-NNNN-*.md` automatically and:

- generates the ADR page with status chrome and Previous / Index / Next navigation
- adds the ADR to the Decisions sidebar and nav dropdown
- includes it in the ADR index table

No manual HTML page is required.

## Update navigation

- **New ADR:** automatic (see above).
- **New Foundation / register / operational standard document:** add an entry to the `includes` list in `portal/scripts/prepare-content.mjs` and, if needed, a sidebar item in `portal/docs/.vitepress/config.mts`. Examples: `MIS-001` → `/areas/mission-partner-governance`; `MIS-002` → `/areas/institution-in-residence`.
- **New architecture area landing:** add a Markdown file under `portal/docs/areas/` and a Blueprint sidebar link in `config.mts`.
- **New presentation page:** add Markdown under `portal/docs/` and update primary `nav` / presentation sidebar in `config.mts`.

There is **no** separate Operational Standards index yet; Mission standards are discoverable from [Missions & Production](/areas/missions) and related Blueprint sidebar entries until a dedicated index is justified.

## Search

Local full-text search is enabled via VitePress (`themeConfig.search.provider = 'local'`).

## Production build output

```bash
cd portal
npm install
npm run build
```

Static site root (serve this directory):

`portal/docs/.vitepress/dist/`

Generated Markdown under `portal/docs/_generated/` is build-time only and is gitignored.

## Deploy: password-protected HTTPS (server-side auth)

Do **not** use client-side JavaScript password gates. They are trivial to bypass and do not protect static assets.

### Preconditions

1. Confirm the GitHub repository is **private** before treating the hosted site as confidential. If the repo is public, source Markdown is already public regardless of site auth.
2. Prefer HTTPS everywhere (TLS termination at the reverse proxy or platform).
3. Keep Basic Auth credentials / htpasswd files **off** the documentation repository (use host secrets / env / separate ops store).

### Build artefact to publish

Publish only the contents of `portal/docs/.vitepress/dist/` (not the whole repo, not `node_modules`).

### Option A — nginx + HTTPS + HTTP Basic Auth

1. Create a password file on the server (not in git):

```bash
# install apache2-utils (Debian/Ubuntu) or httpd-tools (RHEL) if needed
sudo htpasswd -c /etc/nginx/.htpasswd_tarbiyat_portal reviewer1
```

2. Example site config (adjust paths and certificates):

```nginx
server {
    listen 443 ssl http2;
    server_name architecture.example.com;

    ssl_certificate     /etc/letsencrypt/live/architecture.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/architecture.example.com/privkey.pem;

    root /var/www/tarbiyat-portal;
    index index.html;

    auth_basic           "Tarbiyat Architecture Portal";
    auth_basic_user_file /etc/nginx/.htpasswd_tarbiyat_portal;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

3. Sync build output:

```bash
rsync -av --delete portal/docs/.vitepress/dist/ user@host:/var/www/tarbiyat-portal/
```

### Option B — Caddy + HTTPS + Basic Auth

Caddy can obtain certificates automatically. Put the hashed password in the Caddyfile or an env file — not in this repo.

```caddy
architecture.example.com {
    root * /var/www/tarbiyat-portal
    encode gzip
    basic_auth {
        reviewer1 JDJhJDEwJ...   # output of: caddy hash-password
    }
    try_files {path} {path}.html {path}/ =404
    file_server
}
```

### Option C — Cloudflare Access / identity proxy

Place the static site behind Cloudflare Access (or equivalent IdP gate) so authentication happens at the edge before HTML/JS/CSS is served. Still do not rely on in-page password scripts.

### What not to do

- No “enter password” forms implemented only in browser JavaScript
- No embedding passwords in `index.html`, Vite env files committed to git, or public Gists
- No committing `.htpasswd`, TLS private keys, or deploy tokens to this repository

### Future public presentation-only build

Presentation routes are path-separated from Blueprint routes (`/blueprint/`, `/foundation/`, `/decisions/`, `/gaps`, `/progress`, etc.). A later publish pipeline may include only presentation paths for a public site while keeping Blueprint private — still one VitePress codebase.
