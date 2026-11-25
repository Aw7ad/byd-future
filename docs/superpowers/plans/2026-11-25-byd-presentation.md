# BYD Future of Mobility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete seven-section BYD management presentation website in Next.js, with working animations, navigation, diagrams, charts and cited content.

**Architecture:** One App Router page composes seven section components. All editorial content lives in `lib/content.ts`; shell components own navigation, intro, scroll reveal and counters; each section owns its own interactive visualization. Styling is Tailwind v4 plus CSS custom properties in `app/globals.css`.

**Tech Stack:** Next.js 16.4.6, React 19.3.1, TypeScript, Tailwind CSS 4.3.5, Framer Motion 14.14.0, Recharts 3.11.1, Lucide React 1.79.0.

**Spec:** `docs/superpowers/specs/2026-11-25-byd-presentation-design.md` and `C:\Users\mouta\Downloads\BYD_futuristic_website_prompt.md`.

## Global Constraints

- Work only inside `byd-future-of-mobility/`; never edit the parent PAP tutorial.
- Brand red `#E60012`; dark-first palette; alternating dark/white sections.
- All company facts carry a year and a source link; all project KPI targets are labelled illustrative and defined once in `lib/content.ts`.
- The org chart must be labelled "proposed project structure", not BYD's official structure.
- `prefers-reduced-motion` disables the intro, parallax, counters and entrance animation.
- Semantic HTML, visible focus rings, keyboard-operable buttons, no horizontal overflow at 320px.
- Images are real BYD assets stored locally with attribution recorded in `public/images/ATTRIBUTION.md`.

## Review Focus

- **Reduced motion:** no intro overlay, no animated counters, no parallax; content still fully visible — verify with `prefers-reduced-motion: reduce` emulation in the browser.
- **320px viewport:** nav, SWOT grid, org chart and KPI cards do not overflow — verify at 320px and 768px.
- **Keyboard use:** every interactive card/node/button can be focused and activated with Enter/Space — verify by tabbing through all sections.
- **Fact integrity:** no invented official BYD figures and no unlabelled sample targets — verify every number in `lib/content.ts` has either a `source` or the `illustrative: true` flag.
- **Broken assets:** logo and vehicle photos load locally — verify `next build` plus a browser check with no failed image requests.

---

### Task 1: Scaffold the Next.js app and design system

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `next-env.d.ts`
- Create: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- Create: `.gitignore`

**Interfaces:**
- Produces: runnable app at `http://localhost:3000`; `cn(...classes)` helper exported from `lib/utils.ts`; global CSS custom properties `--byd-red`, `--ink`, `--panel`, `--line`, `--muted`.

- [ ] **Step 1: Write package.json with the pinned versions from the header**

```json
{
  "scripts": { "dev": "next dev", "build": "next build", "start": "next start", "lint": "eslint ." },
  "dependencies": {
    "next": "16.4.6", "react": "19.3.1", "react-dom": "19.3.1",
    "framer-motion": "14.14.0", "recharts": "3.11.1", "lucide-react": "1.79.0"
  },
  "devDependencies": {
    "typescript": "^5", "@types/node": "^22", "@types/react": "^19",
    "@types/react-dom": "^19", "tailwindcss": "4.3.5", "@tailwindcss/postcss": "4.3.5"
  }
}
```

- [ ] **Step 2: Run `npm install`**

Expected: clean install, no peer-dependency errors.

- [ ] **Step 3: Add config files and `lib/utils.ts`**

`next.config.ts` exports a plain `NextConfig`; `tsconfig.json` uses the Next.js defaults with `"paths": {"@/*": ["./*"]}`; `postcss.config.mjs` registers `@tailwindcss/postcss`; `lib/utils.ts` exports `cn` joining truthy strings.

- [ ] **Step 4: Write `app/globals.css`**

Use `@import "tailwindcss";`, define the CSS custom properties listed in Interfaces, base body styles (dark background, geometric sans, antialiasing), `.section-shell` max-width container, `.eyebrow`, `.display`, `.prose-copy`, `.panel`, `.hairline`, `.glow-red` utility classes, `@media (prefers-reduced-motion: reduce)` disabling animations/transitions, and focus-visible outlines.

- [ ] **Step 5: Write minimal `app/layout.tsx` and `app/page.tsx`**

Layout loads `next/font/google` Manrope and Space Grotesk as CSS variables, sets metadata title/description and `<html lang="en">`. Page renders a single placeholder `<main>` with the text "BYD presentation shell ready".

- [ ] **Step 6: Verify**

Run `npm run build`; expected: successful build with the placeholder page. Run `npm run dev` and confirm the page renders at localhost:3000.

- [ ] **Step 7: Commit**

`git init` in the project folder (the parent is not a repo), then commit the scaffold.

---

### Task 2: Content model and source citations

**Files:**
- Create: `lib/content.ts`
- Create: `public/images/ATTRIBUTION.md`

**Interfaces:**
- Consumes: nothing.
- Produces: typed exports `sections` (id, label, number), `hero`, `intro`, `stats`, `project`, `planning`, `organizing`, `directing`, `control`, `conclusion`, `sources`; types `Resource`, `SwotItem`, `Department`, `DriveStep`, `Kpi`, `Source`.

- [ ] **Step 1: Define the types and section list**

`sections` is an ordered array of exactly seven entries with ids `home`, `project`, `planning`, `organizing`, `directing`, `control`, `conclusion`; labels `Home`, `Project`, `Planning`, `Organizing`, `Directing`, `Control`, `Conclusion`; numbers `00`–`06`.

- [ ] **Step 2: Fill all editorial content verbatim from the spec**

Use the spec's objectives, resource categories, SWOT items, strategic actions, org structure and DRIVE definitions. `organizing.disclaimer` must state that the chart is a proposed project structure, not BYD's official org chart.

- [ ] **Step 3: Add sourced figures and clearly marked illustrative targets**

`stats` entries: 1995 founding, 4,602,436 NEVs sold (2025), RMB 63.4bn R&D (2025), >1,000,000 exports (2025), >120,000 engineers (2025), Fortune Global 500 #91 (2025). Every entry has `year`, `value`, `label`, `sourceId`. `control.kpis` entries carry `target`, `unit`, `definition`, and `illustrative: true`.

- [ ] **Step 4: Populate `sources` and image attribution**

Sources: BYD 2025 Annual Report (`https://static.cninfo.com.cn/finalpage/2026-03-27/1225046995.PDF`), BYD 2025 Sustainability Report (`https://www.bydglobal.com/material/__CN/group-official-website/file/cn/esg/2025-BYD-Sustainability-Report-EN.pdf`), BYD official newsroom (`https://www.bydglobal.com/en/`), CnEVPost 2025 results (`https://cnevpost.com/2026/03/27/byd-2025-full-year-results/`). `ATTRIBUTION.md` lists the Commons files and CC BY-SA 4.0 credits used in Task 7.

- [ ] **Step 5: Verify**

Run `npx tsc --noEmit`; expected: no errors. Grep `lib/content.ts` and confirm every numeric stat has a `sourceId` and every KPI has `illustrative: true`.

- [ ] **Step 6: Commit**

---

### Task 3: Presentation shell, navigation and motion primitives

**Files:**
- Create: `components/shell/Navbar.tsx`, `ProgressRail.tsx`, `SlideControls.tsx`, `IntroSequence.tsx`, `SectionHeading.tsx`, `Reveal.tsx`, `CountUp.tsx`, `ActiveSectionProvider.tsx`
- Modify: `app/layout.tsx`, `app/page.tsx`

**Interfaces:**
- Consumes: `sections` from Task 2; `cn` from Task 1.
- Produces: `useActiveSection()` returning `{ activeId, goTo(id) }`; `<Reveal delay?: number>`; `<CountUp to: number>`; `<SectionHeading number label title lede?>`.

- [ ] **Step 1: Implement `ActiveSectionProvider`**

Client component using `IntersectionObserver` over the seven section ids, exposing active id and `goTo(id)` that calls `scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth'})`. `useActiveSection()` throws outside the provider.

- [ ] **Step 2: Implement `Reveal` and `CountUp`**

`Reveal` uses Framer Motion `whileInView` with `once: true`, `y: 24`, `opacity: 0→1`, and renders plain children when reduced motion is preferred. `CountUp` animates from 0 to `to` over 1.4s only when in view and only when motion is allowed; otherwise shows the formatted final value immediately.

- [ ] **Step 3: Implement `Navbar`, `ProgressRail` and `SlideControls`**

Navbar: fixed transparent-to-solid bar, logo slot, seven links, active indicator, mobile hamburger panel closing on selection/Escape. ProgressRail: fixed vertical list of seven dots with current label. SlideControls: fixed bottom-right previous/next buttons with disabled ends; ArrowLeft/ArrowRight handled only when focus is outside inputs/buttons.

- [ ] **Step 4: Implement `IntroSequence` and `SectionHeading`**

Intro: full-screen black overlay, BYD logo with red glow, animated energy-line SVG, title/subtitle reveal, skip on click/Escape, once per session via `sessionStorage`, instant no-op under reduced motion. SectionHeading: eyebrow `NN / LABEL — TITLE`, display title, optional lede, red rule.

- [ ] **Step 5: Wire into layout/page and verify**

Provider wraps the shell; page renders intro + navbar + progress rail + controls + seven empty `<section id=...>` placeholders with headings. Run `npm run build`, then in the browser confirm nav clicks scroll, active indicator updates, intro can be skipped, and reduced-motion skips intro.

- [ ] **Step 6: Commit**

---

### Task 4: Home, Project and Planning sections

**Files:**
- Create: `components/sections/HomeSection.tsx`, `ProjectSection.tsx`, `PlanningSection.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `hero`, `intro`, `stats`, `project`, `planning` from Task 2; `Reveal`, `CountUp`, `SectionHeading` from Task 3.
- Produces: no new shared APIs.

- [ ] **Step 1: Build `HomeSection`**

Cinematic full-viewport hero with a local BYD vehicle image, dark overlay, parallax on the image (disabled for reduced motion), logo, headline "THE FUTURE IS ELECTRIC.", mission subtitle, "EXPLORE THE PROJECT" button calling `goTo('project')`; below it an introduction block (1995, Shenzhen, EV/battery/renewables, international presence) and a stats row built with `CountUp` and year/source labels.

- [ ] **Step 2: Build `ProjectSection`**

White section with heading `01 / PROJECT — DEFINING THE VISION`, project definition paragraph, five objective chips, and four interactive resource cards (Human, Financial, Material, Technological) using Lucide icons; clicking/keyboard-activating a card expands its item list.

- [ ] **Step 3: Build `PlanningSection`**

Dark section with heading `02 / PLANNING — ANALYZING THE FUTURE`; four visually distinct SWOT quadrants (S red, W grey, O white, T dark-red) each listing its items; SO strategy rationale block, five strategic actions, and a five-milestone roadmap animated in sequence on scroll.

- [ ] **Step 4: Verify**

Run `npm run build`; in the browser at 320px/768px/1440px confirm sections render, cards expand by keyboard, counters animate, and no horizontal scrollbar appears.

- [ ] **Step 5: Commit**

---

### Task 5: Organizing and Directing sections

**Files:**
- Create: `components/sections/OrganizingSection.tsx`, `DirectingSection.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `organizing`, `directing` from Task 2; `Reveal`, `SectionHeading` from Task 3.
- Produces: no new shared APIs.

- [ ] **Step 1: Build `OrganizingSection`**

White section, heading `03 / ORGANIZING — BUILDING THE STRUCTURE`, prominent "proposed project structure" disclaimer. Render the director node, five department buttons and their sub-teams with animated SVG connecting lines; selecting a department reveals its responsibilities in a detail panel. Layout collapses to a vertical list on mobile.

- [ ] **Step 2: Build `DirectingSection`**

Dark section, heading `04 / DIRECTING — LEADING INNOVATION`; THE DRIVE METHOD as five lettered buttons in a row, each revealing its principle text and application to the expansion project; supporting blocks for leadership approach, communication cadence, motivation, decision-making and conflict management.

- [ ] **Step 3: Verify**

`npm run build`; browser check: every department and DRIVE step is tabbable, Enter/Space updates the detail panel, connectors animate once, and mobile has no overflow.

- [ ] **Step 4: Commit**

---

### Task 6: Control and Conclusion sections

**Files:**
- Create: `components/sections/ControlSection.tsx`, `ConclusionSection.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `control`, `conclusion` from Task 2; `Reveal`, `SectionHeading` from Task 3.
- Produces: no new shared APIs.

- [ ] **Step 1: Build `ControlSection`**

White section, heading `05 / CONTROL — MEASURING PERFORMANCE`; weekly/monthly/quarterly control periods with animated timeline; seven KPI cards showing definition, illustrative target badge and progress bars; one Recharts bar or radar chart fed from `control.kpis`; explanatory paragraph on detecting deviations and taking corrective action.

- [ ] **Step 2: Build `ConclusionSection`**

Cinematic dark closing section with a local BYD vehicle image, five function summary lines showing how they connect, final line "BUILD YOUR DREAMS. DRIVE THE FUTURE.", and a sources/credits footer built from `sources`.

- [ ] **Step 3: Verify**

`npm run build`; browser check: chart renders without console errors, KPI targets display the illustrative label, source links open, and final animation respects reduced motion.

- [ ] **Step 4: Commit**

---

### Task 7: Assets, accessibility and final verification

**Files:**
- Modify: `public/images/ATTRIBUTION.md`, `app/globals.css`, `app/layout.tsx`
- Create: `README.md`

**Interfaces:**
- Consumes: all sections.
- Produces: complete site ready to run with `npm run dev`.

- [ ] **Step 1: Download authentic assets into `public/images/`**

Download `BYD_Auto_2022_logo.svg` from Wikimedia Commons, a BYD Seal hero photo, a BYD Atto 3 closing photo and one showroom/exhibition photo; keep files under ~600KB each by using Commons 1920px thumbnails. Record exact author, licence and source page URL in `ATTRIBUTION.md`.

- [ ] **Step 2: Wire assets into sections and ensure credits render**

Use `next/image` with local paths, explicit alt text, and widths; add attribution links in the footer.

- [ ] **Step 3: Accessibility and responsive pass**

Check visible focus, contrast, alt text, heading order, mobile menu Escape handling, reduced motion, and 320px overflow. Fix anything found.

- [ ] **Step 4: Final verification**

Run `npm run build` and `npm run lint`; start the server with `npm run dev`; load the page in a browser at desktop and mobile sizes and confirm all seven sections, animations, charts and navigation work with no console errors or failed requests.

- [ ] **Step 5: Write README and commit**

README documents run commands, content-editing location, asset credits and the illustrative-data policy. Commit the finished site.
