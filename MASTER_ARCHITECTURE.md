# Bible Webs — Master Architecture & Implementation Brief

## 1. Project Identity

- Project name: Bible Webs
- Product type: Responsive web application based on the Bible.
- Primary concept: Scripture discovery connected to user mood, with curated Scripture recommendations rather than random selection across the entire Bible.
- Planned core features:
  - Home
  - About
  - Bible Explorer
  - Daily Verse
  - Moods
  - Mood Detail
  - Search
  - Login / Register
  - Profile
  - Journal
  - New Journal
  - Journal Detail

## 2. Current Technical Baseline

Do not replace the current foundation without an explicit project decision.

- Framework: Next.js 16.3.1
- Router: App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Linting: ESLint
- Bundler/dev server: Turbopack
- Runtime: Node.js 26.5.0
- Package manager: npm 12.0.2
- Version control: Git
- Repository: GitHub
- Local development: Windows
- Project path: `D:\Projectsible-webs`
- Import alias: `@/*`
- Source directory: `src/`
- Planned backend/auth/database: Supabase
- Planned deployment: Vercel

## 3. Non-Negotiable Product Principles

### 3.1 Mood Scripture is curated, not pure random

The system must not select an arbitrary verse from the entire Bible merely because a user selected a mood.

Flow:

1. User selects a mood.
2. The application identifies Scripture candidates associated with that mood/theme.
3. Candidates are filtered/relevant to the requested mood.
4. A controlled or semi-random selection may occur inside that relevant candidate pool.

Randomness is allowed only after relevance has been established.

### 3.2 Color is visual language, not theology

Mood may use color as a visual representation.

Color must not be presented as having intrinsic theological meaning.

### 3.3 Scripture, Context, and Reflection are separate layers

The product should distinguish:

- Scripture — the actual Bible content from an authorized/licensed source.
- Context — factual/contextual information about the passage.
- Reflection — application-oriented or reflective material.

AI must not be presented as an authoritative source of biblical interpretation.

### 3.4 Bible content must be authorized

Do not scrape, download, or redistribute full Bible text without a valid basis for doing so.

The eventual Bible Explorer and Scripture features must use a source/API/licence that permits the intended application use.

TB1/TB2 must not be treated as public-domain text.

### 3.5 Journal data is private

Journal data must be isolated by authenticated user.

User A must never be able to read or modify User B's journal entries.

The planned enforcement mechanism is Supabase authentication plus PostgreSQL Row Level Security.

### 3.6 Daily Verse is deterministic by date

Daily Verse should be determined by date.

Refreshing the page must not randomly change the Daily Verse for the same date.

It should not require manually editing the verse every day.

## 4. Planned Architecture

Initial architecture:

- Next.js application
- Supabase Auth
- Supabase PostgreSQL
- Supabase Row Level Security
- Authorized/licensed Bible source
- Next.js server/client boundaries as appropriate

No separate Express server, MongoDB, Docker, Nginx, or local PostgreSQL setup is required for the initial architecture.

## 5. Planned Domain Model

The following is the conceptual model, not yet a finalized database schema.

### Scripture

Potential conceptual metadata:

- book
- chapter
- verse
- translation
- text/reference from authorized source
- mood associations
- themes
- context
- meaning/reflection
- related verses

Do not implement fields that require decisions not yet established without documenting the decision first.

### Mood

A mood should represent a meaningful user-facing discovery category.

A mood can have:

- name
- visual treatment/color
- associated themes
- associated Scripture candidates

The exact final mood taxonomy is not yet finalized.

### Journal

Conceptual requirements:

- authenticated owner
- title/content
- timestamps
- optional Scripture reference
- CRUD operations
- strict user isolation through RLS

Exact schema is not yet finalized.

### Daily Verse

Conceptual requirements:

- deterministic date-based selection
- authorized Scripture source
- stable result for a given date

Exact selection algorithm is not yet finalized.

## 6. UX / Design System Status

The product direction is:

- modern Bible experience
- Scripture discovery through mood
- color-connected mood system
- responsive web experience
- motion as part of the design system

Not yet finalized:

- final color palette
- typography
- logo
- final visual references
- final component library
- final spacing scale
- final motion specifications

Do not invent these as established project decisions.

Previously mentioned design resources:

- `@motion-design-skill-main(1).zip`
- `@ui-ux-pro-max-skill-main.zip`

Their actual contents have not been verified in the current project context. Do not claim to follow specific rules from them until they are available and read.

## 7. Implementation Order

Follow this sequence unless a new explicit project decision changes it:

1. Secure Git baseline.
2. Audit project agent instructions.
3. Establish this master architecture/implementation brief.
4. Verify relevant local Next.js documentation before writing Next.js code.
5. Verify/read any available design skills before applying their rules.
6. Finalize design system.
7. Establish reusable UI primitives/components.
8. Implement application shell/navigation.
9. Implement Home.
10. Implement Mood discovery and Mood Detail.
11. Implement Scripture/Bible Explorer and Search using an authorized source.
12. Implement Daily Verse.
13. Implement authentication.
14. Implement Profile.
15. Implement Journal and Journal CRUD.
16. Configure Supabase RLS.
17. Implement responsive/accessibility requirements.
18. Test and QA.
19. Configure Vercel.
20. Deploy only after verification.

## 8. Coding Rules

- Preserve Next.js App Router.
- Preserve TypeScript.
- Preserve Tailwind CSS.
- Preserve ESLint.
- Preserve `@/*` import alias.
- Prefer clear, maintainable component boundaries.
- Avoid unnecessary dependencies.
- Do not add backend infrastructure that duplicates Supabase/Next.js responsibilities.
- Do not hard-code secrets.
- Do not place secrets in client-side code.
- Keep user-private data behind authentication and database authorization.
- Do not claim an integration is complete until it has been verified.
- Do not implement unavailable/licence-uncertain Bible content as if it were authorized.
- When a project decision is unknown, mark it as unknown instead of silently inventing one.

## 9. AI Usage Rules

AI may assist with:

- planning
- coding
- UI generation
- search/recommendation logic
- contextual presentation
- reflection-oriented content where appropriate

AI must not be presented as:

- the authoritative source of Scripture
- an official biblical translation
- an authoritative theological interpreter

The product UI should preserve the distinction between source Scripture and generated/supporting material.

## 10. Current Known Unknowns

These remain open and must be resolved before the corresponding implementation:

- final color palette
- typography
- logo
- visual reference
- final mood taxonomy
- final database schema
- authorized/licensed Bible API/source
- exact Bible API licensing terms for the intended use
- Supabase project configuration
- authentication flow details
- Daily Verse selection algorithm
- final production domain
- Vercel configuration
- actual contents of the two referenced design-skill ZIP files

## 11. Repository Safety

Current repository baseline has already been committed and pushed.

Do not:

- create a replacement repository
- change the established architecture without reason
- deploy production before the application is tested
- remove the existing agent instruction files without a project reason
- add secrets to Git
- bypass Bible licensing constraints

## 12. Definition of Done for the Initial Product

The first production-ready version should have:

- responsive UI
- working navigation
- mood-based Scripture discovery using relevance + controlled selection
- Bible Explorer/Search using an authorized source
- deterministic Daily Verse
- authentication
- private Journal CRUD
- Supabase RLS protecting journal data
- clear separation of Scripture, Context, and Reflection
- accessible interaction patterns
- tested core flows
- verified production deployment

## 13. Decision Discipline

When implementing a feature:

1. Check whether the decision already exists in this document or project files.
2. If it exists, follow it.
3. If it does not exist and the decision materially affects architecture, stop and surface the decision rather than silently inventing it.
4. Keep implementation details reversible where the product decision is still unknown.
5. Update this brief when a major architecture/product decision is explicitly finalized.

## 14. Current Project Status

Baseline status at creation of this brief:

- Next.js project created and running locally.
- Git repository initialized.
- GitHub remote configured.
- Baseline commit completed.
- Baseline pushed to GitHub.
- Working tree was clean after baseline commit.
- `AGENTS.md` contains Next.js agent rules.
- `CLAUDE.md` references `AGENTS.md`.
- Supabase integration is not yet verified.
- Vercel deployment is not yet verified.
- Bible source/API is not yet selected.
- Final UI/design system is not yet finalized.
