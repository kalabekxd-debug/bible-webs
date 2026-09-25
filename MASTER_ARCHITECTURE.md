# Sela — Master Architecture

> Supersedes the older Bible Webs implementation brief. This document follows the final Sela PRD.

## 1. Product identity
Sela is an independent digital experience that helps someone find Bible passages relevant to the question, condition, or feeling they bring.

Core journey:
**Keadaan → Firman → Refleksi → Langkah**

Sela is not an official church, denomination, foundation, religious organization, Bible institution, mental-health app, therapy app, community platform, or AI spiritual advisor.

## 2. Technical baseline
- Next.js 16.3.1, App Router
- React 19.2.8
- TypeScript
- Tailwind CSS 4
- GitHub
- Vercel hosting
- Server Components by default
- Client Components only for real interaction
- Static/curated data
- No backend, database, authentication, accounts, admin dashboard, payment, or runtime AI

## 3. Content/data architecture
- `src/data/bible.ts`: 66-book metadata and chapter counts
- `src/data/bible/verses.json`: generated static AYT verse data
- `src/data/moods.ts`: locked 12 mood taxonomy with curated references, reflection prompts, and next actions
- `src/lib/bible.ts`: static Bible lookup helpers
- `src/lib/search.ts`: local search over curated mood/topic/reference metadata
- `scripts/ingest-ayt.mjs`: manual/CI ingestion from the AYT REST API; never called by the deployed site at runtime

## 4. Scripture source
AYT (Alkitab Yang Terbuka), © Yayasan Lembaga SABDA (YLSA).

The intended ingestion path is the AYT REST API at build/ingestion time with `source=sela.com`. The production launch remains subject to the project's required written confirmation with YLSA.

Sela must remain non-commercial while relying on an NC-licensed AYT use basis.

## 5. Search
Search is intentionally local/static.

Input such as “aku takut masa depan” is handled through:
- curated keywords
- tags
- mood mapping
- curated references
- static verse index when populated

No live AYT search endpoint and no semantic/AI runtime search is used.

## 6. Routes
Primary routes:
`/`, `/moods`, `/moods/[mood]`, `/read`, `/read/[book]`, `/read/[book]/[chapter]`, `/search`, `/daily`, `/random`, `/reflection`, `/about`, `/how-it-works`, `/contact`

Legal:
`/privacy`, `/terms`, `/disclaimer`, `/copyright`, `/accessibility`

The legacy `/bible` routes redirect to `/read` equivalents.

## 7. Design system
Visual direction:
- calm
- modern
- minimal
- editorial
- readable
- reflective
- trustworthy
- intentional

P0 uses semantic CSS tokens so dark mode can be added later without redesign.

Required tokens:
`--background`, `--foreground`, `--surface`, `--surface-muted`, `--border`, `--primary`, `--primary-foreground`, `--muted`, `--accent`.

Dark mode is P1, not P0.

## 8. Privacy and tracking
MVP does not use analytics or third-party tracking.

LocalStorage is limited to lightweight, non-sensitive preferences when a feature actually needs it. No password, credential, secret, or sensitive personal data is stored there.

## 9. Content quality rules
Reflection and next-action content is manually curated.

Never:
- claim an ayat is the certain answer from God for a particular person
- present AI as biblical authority
- diagnose a user
- promise a specific spiritual outcome
- use manipulative or sensational religious copy
- replace professional help

The Scripture layer, contextual information, and reflective/application layer remain distinct.

## 10. Current implementation status
Implemented on branch `feat/sela-prd-v1`:
- Sela brand shell and metadata
- reusable header/footer
- 12 mood categories
- mood detail flow
- 66-book Scripture explorer
- chapter routing/reader
- local search
- legal/trust pages
- 404 handling
- sitemap/robots/manifest
- AYT ingestion script
- semantic design tokens
- legacy Bible route redirects

Still pre-production:
- run/verify AYT ingestion
- populate the final static verse dataset
- populate the real email and Instagram contact channels
- complete naming check in PDKI
- obtain written AYT license confirmation
- run production build and responsive/accessibility QA
- production Vercel deployment

## 11. Do not reintroduce
Do not reintroduce the old Bible Webs scope:
- login/register
- Supabase
- profile
- journal/database
- backend API
- runtime AI features
- analytics
- payment
- admin dashboard
unless the product decision explicitly changes.
