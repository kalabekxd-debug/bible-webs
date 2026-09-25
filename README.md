# Sela

**Berhenti sejenak. Kembali kepada Tuhan.**

Sela is an independent digital experience that helps people find Bible passages relevant to the question, condition, or feeling they bring.

It is not an official church, denomination, foundation, religious organization, or Bible institution website.

## Stack
- Next.js 16.3.1
- React 19.2.8
- TypeScript
- Tailwind CSS 4
- Static curated data
- Vercel

## Development
```bash
npm install
npm run dev
```

## Bible ingestion
AYT is intended to be ingested separately from the deployed runtime:

```bash
npm run ingest:bible
```

The deployed application does not call the AYT API for user requests. The generated verse dataset is stored under `src/data/bible/verses.json`.

Production use remains subject to the project's licensing due diligence and written confirmation with YLSA.

## Product constraints
No authentication, backend, database, admin dashboard, payment, analytics, or runtime AI.

See `MASTER_ARCHITECTURE.md` and the final Sela PRD for the complete product specification.
