# DREWTIFULL

> **Make something beautiful for someone you love.**  
> *Turn your memories into a little corner of the internet.*

---

## What is Drewtifull?

**Drewtifull** is a personalized digital-gift and occasion microsite platform designed to feel like:  
**Pinterest × digital scrapbook × editorial web design × romantic internet × premium creative studio.**

It is built for intimacy, warmth, and handmade memories—avoiding generic SaaS dashboards, sterile card generators, and cookie-cutter website builders. Users select a template, personalize the story, upload photos, preview across viewports, publish to a unique URL, and share a keepsake link with someone special.

---

## ✨ Features & Architecture

### 1. 10 Bespoke Birthday Templates
Individually art-directed with distinct color palettes, typography, responsive layouts, photo arrangements, and decorative language:
- **01 — Soft Garden (`soft-garden`)**: Cream & sage botanical backgrounds, pressed wildflowers, wax seal stationery letter, polaroid collage.
- **02 — Film Diary (`film-diary`)**: 35mm grain, deep charcoal palette, vintage timestamps, contact sheet film strips, memory timeline, and intimate letters.
- **03 — Scrapbook Birthday (`scrapbook-birthday`)**: Layered paper, washi tape, doodle arrows, sticker ephemera, inside jokes, and memory collage.
- **04 — Minimal Editorial (`minimal-editorial`)**: Alabaster whitespace, high-contrast serif typography, poetic pull quotes, and timeless quiet luxury.
- **05 — Cute & Cozy (`cute-and-cozy`)**: Warm pastel peach & pink, teddy bear & cherry doodles, sweet wishes note, and soft rounded compositions.
- **06 — Vintage Newspaper (`vintage-newspaper`)**: Aged newsprint masthead, front-page headline banners, custom issue date, timeline chronicles, and editorial dispatches.
- **07 — Dreamy Night (`dreamy-night`)**: Velvet midnight sky, glowing constellations, celestial star map with photo star nodes, and golden script.
- **08 — Polaroid Wall (`polaroid-wall`)**: Linen & cork neutral, tilted polaroids with handwritten captions, washi tape pins, and captioned memories.
- **09 — Pink Y2K (`pink-y2k`)**: Hot pink, glossy magenta, 3D extruded bubble typography, sparkle disco badges, and "Reasons You're Iconic".
- **10 — Book / Letter Style (`book-letter`)**: Antique deckled paper, two-page book spread, chapter headings, Roman numerals, and literary dedication.

### 2. Information Architecture & Routes
- `/` — Editorial marketing homepage with live interactive gift simulator and featured collections
- `/templates` — Full template library with search and dual filters (Occasion + Aesthetic)
- `/templates/[occasion]` — Occasion-specific gallery (Birthday, Anniversary, Proposal, Friendship, etc.)
- `/templates/[occasion]/[templateId]` — Interactive template preview with device viewport switcher
- `/create` — 3-step creation wizard (Occasion → Template → Personalize)
- `/editor/[id]` — 3-panel visual editor (Words, Photos, Story Sections, Aesthetic), viewport switcher, undo/redo, real-time autosave
- `/preview/[projectId]` — Fullscreen private project preview
- `/p/[slug]` — Published public microsite with SSR data fetching, Open Graph social tags, and ambient soundtrack player
- `/dashboard` — Studio dashboard with project cards, draft/published status, duplication, and quick sharing
- `/dashboard/projects/[projectId]` — Project management, custom slug editor, availability checker, and analytics
- `/login` & `/signup` — Creator authentication and guest session support
- `/settings` — Creator profile, privacy settings, and search engine indexability defaults
- `/privacy` & `/terms` — Privacy guarantee and terms of service

### 3. Server Architecture & Persistence
- **Dual Persistence Architecture**: High-performance local JSON repository (`.data/projects.json`) for zero-config offline and development use, and Prisma ORM with PostgreSQL for production deployments.
- **Object Storage**: Cloudflare R2 / S3-compatible image upload interface with local fallback.
- **Validation**: Strict schema validation powered by Zod for projects, assets, and slugs.
- **Collision-Safe Slugs**: Collision avoidance and uniqueness guarantees on publishing.

---

## 🛠 Tech Stack

- **Framework**: Next.js App Router (Turbopack, React 19, TypeScript)
- **Styling**: Vanilla CSS tokens with paper grain and tactile ephemera (`globals.css`)
- **Typography**: Google Fonts via `next/font/google` (*Cormorant Garamond*, *Playfair Display*, *Plus Jakarta Sans*, *Caveat*, *DynaPuff*, *Special Elite*)
- **Database / ORM**: PostgreSQL with Prisma ORM (`prisma/schema.prisma`) + local repository engine
- **Validation**: Zod
- **Testing**: Vitest with unit, integration, and E2E lifecycle test suites
- **Icons**: `lucide-react`
- **Effects**: `canvas-confetti`, `qrcode`

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Run automated test suite
npm test

# 4. Run TypeScript check
npx tsc --noEmit

# 5. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Documentation
- [Design System & Tokens](design.md)
- [REST API Specifications](docs/api.md)
- [Implementation Checklist](docs/checklist.md)
- [Environment Variables](.env.example)
