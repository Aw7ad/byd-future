# BYD — Future of Mobility: Design Document

**Date:** 2026-11-25
**Source spec:** `C:\Users\mouta\Downloads\BYD_futuristic_website_prompt.md` (user-supplied, treated as approved design)

## Intent

Build a premium, cinematic presentation website about BYD for an academic management and organizational-studies project. It must explain one coherent strategic project — international expansion of BYD's electric-mobility business — through the five management functions: Project, Planning, Organizing, Directing, Control. First impression: high-end automotive technology showcase; substance: accurate, cited, easy-to-understand management content.

## Goals

- Seven working sections: Home, Project, Planning, Organizing, Directing, Control, Conclusion.
- BYD-inspired identity: brand red `#E60012`, black/charcoal/white, geometric sans-serif, authentic BYD logo and real BYD vehicle photography.
- Purposeful motion: intro sequence, scroll reveals, parallax, counters, timeline, interactive org chart and DRIVE diagram — all smooth, lightweight, and disabled under `prefers-reduced-motion`.
- Presentation UX: fixed navbar with active-section indicator, vertical progress rail, previous/next section controls, smooth scrolling, mobile menu.
- Verified company figures with years and sources; proposed project structure and illustrative KPI targets clearly labelled as such.
- Fully responsive, keyboard-friendly, accessible contrast, semantic HTML.

## Non-goals / Anti-goals

- Not a corporate brochure or an advertisement; the academic explanation comes first.
- No invented BYD statistics, no claim that the proposed org chart is official, no fake logos or unrelated vehicles.
- No build step left broken, no dead sections, no decorative animation that competes with content.
- Do not modify the unrelated PAP tutorial already in the parent directory.

## Constraints

- Stack: **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Recharts + Lucide React** (user-selected on 2026-11-25).
- Code lives in `C:\Users\mouta\Documents\Projet par défaut\byd-future-of-mobility\` so existing work is untouched.
- Brand red `#E60012`; authentic BYD Auto 2022 wordmark from Wikimedia Commons (`File:BYD_Auto_2022_logo.svg`, public domain / trademarked) and CC BY-SA 4.0 BYD vehicle photos with on-page attribution.
- Company figures must carry a year and a source link: BYD 2025 Annual Report, BYD 2025 Sustainability Report, BYD official newsroom. Illustrative project targets must be marked "illustrative" and be easy to change in one data file.

## Approaches considered

1. **Zero-dependency HTML/CSS/JS** — instant to open, smallest footprint; rejected by the user.
2. **React + Vite** — good component model and simpler tooling; rejected in favour of Next.js.
3. **Next.js (chosen)** — component boundaries match the seven sections, App Router gives clean routing/metadata, and it is the stack the user selected.

## Design

### Architecture

- `app/layout.tsx` — metadata, fonts, global shell, ReducedMotion provider.
- `app/page.tsx` — composes the seven section components in order.
- `app/globals.css` — Tailwind layers plus CSS custom properties for the design tokens, keyframes, and print/reduced-motion rules.
- `lib/content.ts` — single source of truth for all academic copy, SWOT items, org structure, DRIVE principles, KPI targets and sources. Every section consumes it; no content is hard-coded in JSX.
- `components/shell/` — `Navbar`, `ProgressRail`, `SlideControls`, `IntroSequence`, `SectionHeading`, `Reveal`, `CountUp`, `Sources`.
- `components/sections/` — one component per section, all client components only where motion/interaction is needed.
- `public/images/` — locally stored Commons assets so the site works offline; `public/images/ATTRIBUTION.md` records author, licence and source URL.

### Visual system

- Dark-first: `#050608` canvas, `#0E1013` panels, hairline `rgba(255,255,255,.09)` borders, white type at 90/70/55% opacity, `#E60012` accents with soft red glow only on key moments.
- Alternating dark/white sections to give the presentation rhythm; red used as a structural marker (section number, active nav dot, timelines), never as body text on white.
- Type: geometric sans (`Manrope`/`Space Grotesk` via `next/font`), tight tracking on display headings, generous line-height on body copy.
- Grid: 12-column max-width 1280px, mobile-first breakpoints, no horizontal overflow at 320px.

### Interaction model

- Intro overlay plays once per session (sessionStorage), skippable by click/key and automatically skipped for reduced-motion users.
- `IntersectionObserver` sets the active section; nav and progress rail reflect it; `slide controls` scroll to previous/next section and support ArrowLeft/ArrowRight when focus is not in a control.
- Resource cards and org nodes are real `<button>`s with keyboard activation; SWOT quadrants, DRIVE steps and KPI cards reveal detail on click/focus.
- Charts (Recharts) use illustrative sample targets from `lib/content.ts`, labelled in the UI; progress bars are animated but respect reduced motion.

### Content model

- Home: mission, 1995 founding, Shenzhen HQ, EV/battery/renewables, international presence.
- Project: definition, five objectives, four resource categories with icons.
- Planning: SWOT quadrants, SO strategy rationale, five strategic actions, animated roadmap.
- Organizing: proposed project structure only — director + five departments + named sub-teams; clicking a department shows responsibilities.
- Directing: DRIVE (Direction, Responsibility, Innovation, Vision & Values, Evaluation), participative + transformational leadership, communication cadence, motivation, decision-making, conflict management, application to the expansion project.
- Control: weekly/monthly/quarterly periods, seven KPIs with definitions, illustrative targets, and a plain-language explanation of corrective action.
- Conclusion: how the five functions connect, closing line "BUILD YOUR DREAMS. DRIVE THE FUTURE.", cinematic vehicle visual.

### Sources to cite on-page

- BYD Company Limited 2025 Annual Report (revenue RMB 803.965bn; 4,602,436 NEVs sold; R&D RMB 63.4bn; >120,000 engineers; >71,000 patent applications; exports >1m).
- BYD 2025 Sustainability Report (4.6m NEVs, R&D 7.89% of revenue).
- BYD official company profile / newsroom (founded 1995, Shenzhen headquarters, Build Your Dreams).
- Wikimedia Commons file pages for each image (author + CC BY-SA 4.0).

## What remains to the builder

- Exact package versions, component filenames and test commands are pinned in the implementation plan.
- Where the spec is silent (e.g. exact KPI target numbers), use the clearly-labelled illustrative values in `lib/content.ts` and say so in the UI.
