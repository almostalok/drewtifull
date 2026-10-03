# DREWTIFULL

> **Make something beautiful for someone you love.**  
> *Turn your memories into a little corner of the internet.*

---

## What is Drewtifull?

**Drewtifull** is a personalized digital-gift platform designed to feel like:  
**Pinterest × digital scrapbook × editorial web design × romantic internet × premium creative studio.**

It is built for intimacy, warmth, and handmade memories—avoiding generic SaaS dashboards, sterile card generators, and cookie-cutter website builders.

---

## ✨ Core Features

1. **Editorial Landing Page & Showcase**:
   - Emotional hero statement with warm off-white and cream paper palette.
   - Scrapbook-style polaroid compositions with washi tape accents.
   - Occasion selector: *Birthday, Anniversary, Proposal, Friendship, Graduation, Farewell, Just Because, Something Else*.
   - **Template Explorer** with dual filters (Occasions + Aesthetics: *Soft, Cute, Minimal, Cinematic, Scrapbook, Editorial, Romantic, Vintage, Dark Sky*).
   - Interactive live gift simulator switching between real gifts.

2. **12 Handcrafted Template Concepts**:
   - **01 — Soft Garden**: Flowers, handwritten notes, and soft morning sunlight.
   - **02 — Film Diary**: 35mm grain, vintage timestamps, and cinematic nostalgia.
   - **03 — Scrapbook Birthday**: Washi tape, polaroid scraps, stickers, and inside jokes.
   - **04 — Digital Love Letter**: Quiet editorial poetry, generous whitespace, and intimate letters.
   - **05 — Our Story**: An interactive romantic journey from the day we met until today.
   - **06 — Before I Ask**: A cinematic proposal progression with heart-confetti celebration.
   - **07 — Our Little Universe**: Midnight skies, stardust coordinates, and celestial photo star nodes.
   - **08 — My Favorite Human**: Memes, chaos, inside jokes, and unwavering loyalty.
   - **09 — Just Because**: No anniversary, no holiday. Simply because I love you today.
   - **10 — Cute & Cozy**: Warm sweaters, hot cocoa, doodle hearts, and soft memories.
   - **11 — Memory Journal**: Linen covers, pressed petals, and honest handwritten reflections.
   - **12 — Farewell Memories**: Miles apart but never distant. Celebrating the memories we keep.

3. **Creation Flow**:
   - 3-step intuitive wizard: Choose Occasion → Pick a Feeling (Template) → Personalize (Recipient name, relationship, message) → Instant Studio.

4. **Studio & Live Editor**:
   - **Real-Time Synchronous Renderer**: Same engine powers the editor preview and the published gift.
   - **Responsive Viewport Switcher**: Instantly preview desktop, tablet (768px), or mobile phone (390px) layouts.
   - **Photo Tray**: Drag-and-drop file upload, quick aesthetic preset photos, handwritten captions, and "Set as Hero" selection.
   - **Story Sections Manager**: Reorder (`↑`/`↓`), customize, and add new sections (*Stationery Letter, Polaroid Collage, 35mm Film Strip, Timeline, Reasons I Love You, Favorite Things, Proposal Reveal, Star Map, Quote*).
   - **Style Atmosphere**: Custom color palettes and typography pairings.
   - **AI Writing Assistant**: Non-destructive helper with 6 emotional modes (*Make it sweeter, More romantic, Make it funnier, More poetic, Make it shorter, More personal*).

5. **Ambient Soundtrack Player**:
   - Discreet floating badge on published gifts.
   - Curated acoustic, lofi, waltz, and starlight music box tracks with volume controls.

6. **Publishing & Sharing**:
   - One-click publishing: "Send it into the world ♡".
   - Celebratory canvas confetti explosion.
   - Permanent shareable URL (`/p/[slug]`).
   - One-click copy link, WhatsApp share, and native Web Share API.
   - **Printable Keepsake QR Card Modal**: Generates high-res QR codes for physical greeting cards, gifts, and letters.

7. **My Drewtifulls Studio Dashboard**:
   - Visual project gallery with status tags (*Published* / *Draft*).
   - Edit, preview in new tab, duplicate, share, print QR card, and delete actions.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19, TypeScript)
- **Styling**: Vanilla CSS tokens with bespoke paper grain, washi tape, and polaroid effects (`globals.css`)
- **Typography**: Google Fonts via `next/font/google` (*Cormorant Garamond*, *Playfair Display*, *Plus Jakarta Sans*, *Caveat*)
- **Icons**: `lucide-react`
- **Celebration Effects**: `canvas-confetti`
- **QR Code Generation**: `qrcode`

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
