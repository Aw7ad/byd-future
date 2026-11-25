# BYD — Future of Mobility

An interactive academic management presentation built with Next.js. It applies the five management functions — Project, Planning, Organizing, Directing and Control — to one coherent BYD international expansion project.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build: `npm run build && npm start`. Type check: `npm run lint`.

## Where to edit content

All editorial content, company figures, sources and illustrative KPI targets live in `lib/content.ts`. Sections consume that file, so updating a figure or target requires a single edit.

## Important data notes

- Company figures are sourced and carry their year and a source link in the UI (BYD 2025 Annual Report, BYD 2025 Sustainability Report, BYD newsroom).
- The KPI target and current values are **illustrative sample data**, explicitly labelled in the Control section and flagged with `illustrative: true` in the content file. They are not official BYD targets.
- The organizational chart is a **proposed project structure** for this case study, not BYD's official internal chart.

## Images

Authentic BYD logo and vehicle photography are stored in `public/images/`. Author, licence and source page are recorded in `public/images/ATTRIBUTION.md`.

## Accessibility

Keyboard navigation, visible focus states, semantic landmarks, responsive layouts from 320px upward, and `prefers-reduced-motion` support are built in. The intro animation plays once per session and can be skipped with Escape.
