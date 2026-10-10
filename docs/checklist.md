# Drewtifull Production Implementation Checklist

## Phase 1 — Foundation & Architecture
- [x] Audit existing repository, routes, and components
- [x] Eliminate TypeScript build errors and linter issues
- [x] Configure Prisma PostgreSQL schema (`prisma/schema.prisma`)
- [x] Document environment configuration (`.env.example`)
- [x] Document design tokens & typography (`design.md`)
- [x] Document REST API contracts (`docs/api.md`)
- [x] Create server persistence layer with disk & database fallback (`src/lib/server/repository.ts`)
- [x] Implement content validation with Zod (`src/lib/validation.ts`)

## Phase 2 — Templates & Discovery
- [x] Audit 10 Birthday Templates against Master Prompt specifications
- [x] Provide full rich content, bespoke layouts, and typography for:
  - [x] 01 — Soft Garden (`soft-garden`)
  - [x] 02 — Film Diary (`film-diary`)
  - [x] 03 — Scrapbook Birthday (`scrapbook-birthday`)
  - [x] 04 — Minimal Editorial (`minimal-editorial`)
  - [x] 05 — Cute & Cozy (`cute-and-cozy`)
  - [x] 06 — Vintage Newspaper (`vintage-newspaper`)
  - [x] 07 — Dreamy Night (`dreamy-night`)
  - [x] 08 — Polaroid Wall (`polaroid-wall`)
  - [x] 09 — Pink Y2K (`pink-y2k`)
  - [x] 10 — Book / Letter Style (`book-letter`)
- [x] Build `/templates` all-templates gallery
- [x] Build `/templates/[occasion]` occasion gallery
- [x] Build `/templates/[occasion]/[templateId]` live preview page

## Phase 3 — Routes & Navigation
- [x] Marketing Homepage (`/`) with real links and interactive simulator
- [x] Create Flow (`/create`) with 3-step wizard and instant project creation
- [x] Visual Editor (`/editor/[id]`) with responsive viewports, undo/redo, and autosave
- [x] Private Project Preview (`/preview/[id]`)
- [x] Public Microsite (`/p/[slug]`) with SSR, OpenGraph tags, audio player
- [x] Studio Dashboard (`/dashboard`) with project management
- [x] Project Details Page (`/dashboard/projects/[projectId]`)
- [x] Auth Pages (`/login`, `/signup`)
- [x] Settings Page (`/settings`)
- [x] Legal Pages (`/privacy`, `/terms`)

## Phase 4 — Backend APIs & Persistence
- [x] `GET /api/projects`
- [x] `POST /api/projects`
- [x] `GET /api/projects/[id]`
- [x] `PATCH /api/projects/[id]`
- [x] `DELETE /api/projects/[id]`
- [x] `POST /api/projects/[id]/duplicate`
- [x] `POST /api/projects/[id]/publish`
- [x] `POST /api/projects/[id]/unpublish`
- [x] `POST /api/projects/[id]/assets/upload`
- [x] `GET /api/published/[slug]`
- [x] `GET /api/slugs/[slug]/availability`
- [x] `GET /api/templates`

## Phase 5 — Editor & UX Capabilities
- [x] Autosave with debounce and live saving/saved status
- [x] Undo & Redo history state stack
- [x] Drag-and-drop photo upload with validation
- [x] Section manager: add, remove, and reorder sections
- [x] Ambient soundtrack player with volume control
- [x] Printable Keepsake QR card modal
- [x] WhatsApp, social, and Web Share dialogs
- [x] Canvas confetti celebration on publish

## Phase 6 — Verification & Quality Assurance
- [x] Automated unit and integration tests
- [x] TypeScript verification (`npx tsc --noEmit`)
- [x] Next.js production build (`npm run build`)
- [x] Interactive browser journey verification
