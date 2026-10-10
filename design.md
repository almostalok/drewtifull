# Drewtifull Design System & Reference Catalogue Specifications

> **“Make something beautiful for someone you love.”**  
> *Pinterest-Inspired Template Discovery & Editorial Stationery Catalogue*

---

## 1. Reference Visual Source of Truth

The visual target is defined by the Drewtifull Pinterest-inspired template discovery catalogue reference:
- **Layout Style**: Wide desktop editorial banner with tactile paper collage, followed by a horizontal category filter row, and a **5-column × 2-row** template catalogue grid.
- **Visual Personality**: Warm ivory/paper surfaces, soft botanical illustrations (chamomile blossoms & wild rose stems), delicate coral hearts and accents, torn-edge stationery tape panels, Polaroid drop shadows, and refined serif typography paired with clean sans-serif controls and heartfelt handwritten scripts.

---

## 2. Color Tokens (Reference Palette)

```css
:root {
  /* Surfaces */
  --bg-ivory: #FFF8F2;         /* Main catalogue page background */
  --bg-cream: #F8EEE6;         /* Soft paper tone */
  --bg-blush: #F5DCD5;         /* Torn paper note accent */
  --bg-card: #FFFCF9;          /* Catalogue card surface */
  --bg-card-inner: #FAF4EE;    /* Inset preview backing */
  
  /* Inks */
  --ink-charcoal: #292321;     /* Primary headlines, active pills, black CTA buttons */
  --ink-muted: #81746D;        /* Breadcrumbs, subtitles, card descriptions, tags */
  --ink-faint: #B5A8A0;        /* Subtle dividers & borders */
  
  /* Romantic Accents */
  --accent-coral: #F28F91;     /* Active underline bar, heart doodles, coral stickers */
  --accent-coral-soft: #FDECEB;/* Tag background, hover highlights */
  --accent-gold: #D4AF37;      /* Film stamps, star map accents */
  
  /* Borders & Shadows */
  --border-pale: #EADBD3;      /* Card borders, inactive filter pill borders */
  --shadow-card: 0 4px 18px rgba(41, 35, 33, 0.04);
  --shadow-card-hover: 0 10px 30px rgba(41, 35, 33, 0.08);
  --shadow-polaroid: 0 6px 20px rgba(35, 25, 20, 0.12);
  --shadow-floating: 0 12px 36px rgba(40, 30, 25, 0.09);
}
```

---

## 3. Typography Hierarchy

- **Editorial Serif**: *Playfair Display* & *Cormorant Garamond* for large headlines ("A birthday, a little more beautiful.", template titles).
- **Interface Sans-Serif**: *Plus Jakarta Sans* for navigation links, search inputs, tags, and button controls.
- **Handwritten & Script**: *Caveat*, *Sacramento*, and *Patrick Hand* for paper notes, doodles, and template signature previews.

---

## 4. The 10 Birthday Template Specifications (Matching Reference Grid)

| # | Template ID | Name | Description | Tags | Visual Language |
| :- | :--- | :--- | :--- | :--- | :--- |
| 01 | `soft-garden` | 01. Soft Garden | Floral, pastel, elegant and romantic. | Floral, Pastel, Elegant | Cream bg, pressed daisies, cursive pink script, sunny smiling portrait. |
| 02 | `film-diary` | 02. Film Diary | Cinematic, grainy, nostalgic. | Cinematic, Film, Nostalgic | 35mm film borders, sprocket holes, mirror selfie, golden timestamp OCT 06 2026. |
| 03 | `scrapbook-birthday` | 03. Scrapbook Birthday | Playful, doodle-filled and personal. | Scrapbook, Playful, Nostalgic | Washi tape, polaroid scraps, puppy & teddy stickers, doodles. |
| 04 | `minimal-editorial` | 04. Minimal Editorial | Clean, sophisticated and emotional. | Minimal, Editorial, Timeless | Alabaster whitespace, editorial serif, wide sunset sky portrait, italic pull-quote. |
| 05 | `cute-and-cozy` | 05. Cute & Cozy | Playful, cute, warm and adorable. | Cute, Pastel, Whimsical | Pastel pink, birthday cake illustration, cozy sweater portrait, bubble font. |
| 06 | `vintage-newspaper` | 06. Vintage Newspaper | Retro, journalistic and nostalgic. | Vintage, Monochrome, Editorial | Aged newsprint, masthead banner, bold headline, monochrome column layout. |
| 07 | `dreamy-night` | 07. Dreamy Night | Celestial, atmospheric and dreamy. | Celestial, Dark, Dreamy | Midnight navy sky, crescent moon doodle, glowing candlelit & starry photos. |
| 08 | `polaroid-wall` | 08. Polaroid Wall | Warm, photographic and casual. | Polaroid, Collage, Warm | Cork & linen wall, tilted polaroids pinned with tape, handwritten notes. |
| 09 | `pink-y2k` | 09. Pink Y2K | Bold, colourful and nostalgic. | Y2K, Pink, Bold | Hot pink, disco ball graphic, chrome 3D bubble font, butterfly stickers. |
| 10 | `book-letter` | 10. Book / Letter Style | Literary, intimate and timeless. | Literary, Book, Timeless | Two-page antique hardcover book spread, table of contents, sunny window portrait. |

---

## 5. Hero Collage Composition

The right side of the hero section is assembled from tactile stationery elements:
1. **Top Polaroid**: Rotated `-3°`, featuring smiling outdoor couple/friends portrait.
2. **Bottom Polaroid**: Rotated `+4°`, portrait of girl with dark sunglasses looking back in golden hour.
3. **Cream Note**: Rotated `-2°` paper card reading:
   *"Different designs. Same beautiful feelings. ♡"*
4. **Bee & Star Doodles**: Hand-drawn vector bee (`🐝`) and stars (`✦`, `✧`).
5. **Chamomile Flowers**: Botanical daisies with cream petals and warm yellow centers.
6. **Blush Torn-Paper Panel**: Jagged torn paper texture (`#F5DCD5`) reading:
   *"Turn your memories into a little corner of the internet that feels just like them ♡"*.
7. **Wild Rose Branch**: Delicate botanical stem extending down the right margin.

---

## 6. Grid Proportions & Responsiveness

- **Wide Desktop (> 1280px)**: 5 columns, 2 rows of 5 cards, centered with max width 1440px.
- **Laptop / Tablet Landscape (1024px - 1280px)**: 4 columns.
- **Tablet Portrait (768px - 1023px)**: 3 columns, hero collage simplified into a compact stack.
- **Mobile (360px - 767px)**: 1 or 2 columns, horizontally scrollable filter pill bar, touch-friendly 44px tap targets.
