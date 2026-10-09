import { Template } from './types';

export const TEMPLATES: Template[] = [
  // ========================================================
  // 01 — SOFT GARDEN (Floral, pastel, elegant)
  // ========================================================
  {
    id: 'soft-garden',
    name: 'Soft Garden',
    tagline: 'Floral, pastel, elegant',
    occasion: 'birthday',
    aesthetic: ['soft', 'romantic', 'cute'],
    description: 'A delicate pastel palette of cream, pressed wildflowers, and handwritten cursive script. Perfect for someone who brings soft warmth into every room.',
    previewImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#FAF7F2',
      foreground: '#2A2421',
      accent: '#C97A6E',
      accentSoft: '#F9EBE8',
      paperTone: '#FDFBF7',
      cardBackground: '#FFFFFF',
      borderStyle: '1px solid rgba(201, 122, 110, 0.2)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'acoustic-sunbeams',
    defaultSections: [
      {
        id: 'sg-hero',
        type: 'hero',
        title: 'Happy Birthday,',
        subtitle: 'Another year around the sun, and the world feels brighter with you in it.',
        dateText: '06 October',
        heroPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'A little corner of love for you',
        audioHint: 'Acoustic Sunbeams',
        layout: 'soft-garden',
        cursiveName: 'Aanchal',
      },
      {
        id: 'sg-polaroids',
        type: 'polaroidCollage',
        title: 'a few favourite moments',
        subtitle: 'you make life so beautiful ♡',
        polaroids: [
          {
            url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
            caption: 'the day we got lost in the garden',
            date: 'May 14',
            rotation: -2.5,
            washiColor: 'rose',
          },
          {
            url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
            caption: 'your brightest golden hour smile',
            date: 'July 22',
            rotation: 2.1,
            washiColor: 'sage',
          },
          {
            url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
            caption: 'coffee talks until midnight',
            date: 'Sept 03',
            rotation: -1.2,
            washiColor: 'gold',
          },
        ],
      },
      {
        id: 'sg-reasons',
        type: 'reasons',
        title: 'Things I love about you',
        subtitle: 'the quiet magic of you',
        items: [
          { number: 1, title: 'your laugh', text: 'The way your whole face crinkles when you laugh really hard.', doodle: '✨' },
          { number: 2, title: 'your kind heart', text: 'You notice people who feel left out and gently invite them in.', doodle: '🌸' },
          { number: 3, title: 'the way you care', text: 'How you always remember how people take their tea.', doodle: '☕' },
          { number: 4, title: 'your random deep talks', text: 'Conversations at 1 AM about the universe and old memories.', doodle: '🌙' },
          { number: 5, title: 'your beautiful mind', text: 'The thoughtful way you perceive art, books, and people.', doodle: '💛' },
        ],
      },
      {
        id: 'sg-letter',
        type: 'letter',
        greeting: 'Dear Aanchal,',
        paragraphs: [
          'I wanted to make something for you that you could keep forever. Not just another card tucked into a drawer, but a quiet space filled with all the little things that make you unforgettable.',
          'Thank you for laughing at my silliest jokes, for listening to me ramble, and for being the kindest, brightest soul in every room you enter.',
          'Here is to another year of late night conversations, sunny walks, and watching you blossom into everything you dream of.'
        ],
        closing: 'All my love, always,',
        handwrittenSignature: 'Yours always ♡',
        waxSeal: true,
        paperStyle: 'lined',
      },
      {
        id: 'sg-ending',
        type: 'ending',
        message: 'Here’s to another year of you ♡',
        subtext: 'You make life so beautiful.',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 02 — FILM DIARY (Cinematic, film, grainy, dark)
  // ========================================================
  {
    id: 'film-diary',
    name: 'Film Diary',
    tagline: 'Cinematic, film, grainy',
    occasion: 'birthday',
    aesthetic: ['cinematic', 'vintage', 'dark'],
    description: 'Analog film negatives, 35mm sprocket strips, warm amber date stamps, and cinematic nostalgia captured frame by frame.',
    previewImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#100F0E',
      foreground: '#F5EFE6',
      accent: '#D4AF37',
      accentSoft: '#2B2620',
      paperTone: '#1A1817',
      cardBackground: '#161413',
      borderStyle: '1px solid rgba(212, 175, 55, 0.25)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
      dark: true,
    },
    defaultMusicTrack: 'lofi-memories',
    defaultSections: [
      {
        id: 'fd-hero',
        type: 'hero',
        title: 'Happy Birthday Aanchal ♡',
        subtitle: 'another trip around the sun with you.',
        dateText: 'OCT 06 2026',
        heroPhoto: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Roll 24 // Kodak Portra',
        layout: 'film-diary',
        cursiveName: 'Aanchal',
      },
      {
        id: 'fd-filmstrip',
        type: 'filmStrip',
        title: 'memories on film',
        subtitle: '2024 — 2026 unspooled frame by frame',
        filmFormat: '35mm',
        frames: [
          {
            url: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80',
            caption: 'candid laugh outside the metro',
            timestamp: '17:42:09',
            frameNumber: 'EXP 01',
          },
          {
            url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
            caption: 'the golden glow before dusk',
            timestamp: '18:15:33',
            frameNumber: 'EXP 02',
          },
          {
            url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
            caption: 'midnight diner fries & talks',
            timestamp: '23:58:12',
            frameNumber: 'EXP 03',
          },
        ],
      },
      {
        id: 'fd-ending',
        type: 'ending',
        message: 'and many more frames to come... Happy Birthday ♡',
        subtext: 'Forever on film.',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 03 — SCRAPBOOK (Playful, doodle, nostalgic)
  // ========================================================
  {
    id: 'scrapbook-birthday',
    name: 'Scrapbook',
    tagline: 'Playful, doodle, nostalgic',
    occasion: 'birthday',
    aesthetic: ['scrapbook', 'playful', 'cute'],
    description: 'Charming paper textures, washi tape, sticky note annotations, camera doodles, and heartfelt handwritten margins.',
    previewImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#FAF5ED',
      foreground: '#231E1B',
      accent: '#B95B3B',
      accentSoft: '#F6E5DE',
      paperTone: '#FFFFFF',
      cardBackground: '#FFFFFF',
      borderStyle: '1px dashed rgba(185, 91, 59, 0.3)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-marker)',
    },
    defaultMusicTrack: 'acoustic-sunbeams',
    defaultSections: [
      {
        id: 'sb-hero',
        type: 'hero',
        title: 'Happy Birthday Aanchal!',
        subtitle: 'A little collection of my favorite memories with you.',
        dateText: 'Special Edition · 2026',
        heroPhoto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Handmade with love ♡',
        layout: 'scrapbook',
        cursiveName: 'Aanchal',
      },
      {
        id: 'sb-polaroids',
        type: 'polaroidCollage',
        title: 'A little collection of my favorite memories',
        subtitle: 'proof of how much fun we have together',
        polaroids: [
          {
            url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
            caption: 'trying not to burst out laughing in public',
            date: 'Spring 2025',
            rotation: -3.5,
            washiColor: 'rose',
          },
          {
            url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
            caption: 'the festival where we danced all night',
            date: 'Summer 2025',
            rotation: 2.8,
            washiColor: 'sage',
          },
          {
            url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
            caption: 'matching sweaters (unplanned!)',
            date: 'Winter 2025',
            rotation: -1.5,
            washiColor: 'gold',
          },
        ],
      },
      {
        id: 'sb-reasons',
        type: 'reasons',
        title: 'Things I love about you',
        subtitle: 'backed by science and personal experience',
        items: [
          { number: 1, title: 'your laugh', text: 'You can cause a 10-minute laughing fit with one eyebrow raise.', doodle: '✨' },
          { number: 2, title: 'your random jokes', text: 'The dumbest memes that make us cry laughing.', doodle: '😂' },
          { number: 3, title: 'your beautiful mind', text: 'How deeply you care about the world and your friends.', doodle: '💛' },
          { number: 4, title: 'the way you care', text: 'Showing up when people need you without even being asked.', doodle: '🌿' },
          { number: 5, title: 'your love for little things', text: 'Finding joy in cute packaging, iced drinks, and pretty clouds.', doodle: '☁️' },
          { number: 6, title: 'how you make everything fun', text: 'Grocery shopping feels like a comedy show with you.', doodle: '🛒' },
          { number: 7, title: 'you, always you ♡', text: 'Never changing for anybody.', doodle: '💖' },
        ],
      },
      {
        id: 'sb-ending',
        type: 'ending',
        message: 'Here’s to more chaos, more memories, more you. Happy Birthday ♡',
        subtext: 'Love you to the moon and back!',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 04 — MINIMAL EDITORIAL (Clean, aesthetic, serif)
  // ========================================================
  {
    id: 'minimal-editorial',
    name: 'Minimal Editorial',
    tagline: 'Clean, aesthetic, serif',
    occasion: 'birthday',
    aesthetic: ['minimal', 'editorial'],
    description: 'Generous whitespace, high-contrast serif typography, poetic quotes, and timeless quiet luxury.',
    previewImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#FBF9F5',
      foreground: '#1F1B18',
      accent: '#9E4E3B',
      accentSoft: '#F6EAE6',
      paperTone: '#FFFDF9',
      cardBackground: '#FFFDF9',
      borderStyle: '1px solid rgba(40, 30, 20, 0.08)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'warm-piano-waltz',
    defaultSections: [
      {
        id: 'me-hero',
        type: 'hero',
        title: 'Happy Birthday,',
        subtitle: 'Another year, more you, more everything to be grateful for.',
        dateText: 'October 2026',
        heroPhoto: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'A quiet celebration',
        layout: 'minimal-editorial',
        cursiveName: 'Aanchal',
      },
      {
        id: 'me-quote',
        type: 'quote',
        quoteText: 'Some people make the world feel softer, just by being in it.',
        author: 'For you',
        subtext: 'Words that remind me of you every day',
      },
      {
        id: 'me-letter',
        type: 'letter',
        greeting: 'A little note...',
        paragraphs: [
          'I just wanted to take a moment to tell you how much you mean to me.',
          'You make ordinary days feel like little adventures. The world is brighter, kinder, and infinitely more beautiful with you in it.'
        ],
        closing: 'With all my admiration,',
        handwrittenSignature: 'Always yours ♡',
        paperStyle: 'plain',
      },
      {
        id: 'me-ending',
        type: 'ending',
        message: 'Happy Birthday to the one who makes life so beautiful ♡',
        subtext: 'Quiet grace, endless love.',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 05 — CUTE & COZY (Playful, cute, pastel)
  // ========================================================
  {
    id: 'cute-and-cozy',
    name: 'Cute & Cozy',
    tagline: 'Playful, cute, pastel',
    occasion: 'birthday',
    aesthetic: ['cute', 'playful', 'soft'],
    description: 'Sweet pastel pink palette, cute birthday cake, teddy bear, bunny doodles, glossy cherries, and soft pill badges.',
    previewImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#FCEAEB',
      foreground: '#2F2622',
      accent: '#DB2777',
      accentSoft: '#FCE7F3',
      paperTone: '#FFF8F5',
      cardBackground: '#FFFFFF',
      borderStyle: '1px dashed rgba(219, 39, 119, 0.25)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'acoustic-sunbeams',
    defaultSections: [
      {
        id: 'cc-hero',
        type: 'hero',
        title: 'Happy Birthday Aanchal ♡',
        subtitle: 'little moments, big happiness ♡',
        dateText: 'A sweet celebration',
        heroPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Cup of warmth 🧁',
        layout: 'cute-cozy',
        cursiveName: 'Aanchal',
      },
      {
        id: 'cc-polaroids',
        type: 'polaroidCollage',
        title: 'little moments, big happiness ♡',
        subtitle: 'snapshots of pure sunshine',
        polaroids: [
          {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
            caption: 'your giggle is my favorite sound',
            date: 'Spring',
            rotation: -2,
            washiColor: 'rose',
          },
          {
            url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
            caption: 'sweaters & strawberry milkshakes',
            date: 'Autumn',
            rotation: 2.5,
            washiColor: 'gold',
          },
        ],
      },
      {
        id: 'cc-reasons',
        type: 'reasons',
        title: 'Things I love about you',
        subtitle: 'the softest things in the universe',
        items: [
          { number: 1, title: 'your laugh', text: 'Lightens any heavy room in 3 seconds.', doodle: '🎀' },
          { number: 2, title: 'your kind heart', text: 'You care so gently about everyone.', doodle: '🧸' },
          { number: 3, title: 'the way you care', text: 'Sending sweet check-ins and cute memes.', doodle: '🍒' },
          { number: 4, title: 'your random deep talks', text: 'Late night cozy talks on the floor.', doodle: '✨' },
          { number: 5, title: 'you, always you ♡', text: 'My absolute favorite person.', doodle: '💖' },
        ],
      },
      {
        id: 'cc-ending',
        type: 'ending',
        message: 'Here’s to another year of you, my favorite human. Happy Birthday ♡',
        subtext: 'Sending the biggest warmest hug!',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 06 — VINTAGE NEWSPAPER (Retro, newspaper, monochrome)
  // ========================================================
  {
    id: 'vintage-newspaper',
    name: 'Vintage Newspaper',
    tagline: 'Retro, newspaper, monochrome',
    occasion: 'birthday',
    aesthetic: ['vintage', 'retro', 'editorial'],
    description: 'Aged newsprint mastheads, bold headline banners, double rules, column reporting, and timeless black & white halftone imagery.',
    previewImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#F4EFE6',
      foreground: '#1C1A18',
      accent: '#8A4A38',
      accentSoft: '#E8E2D5',
      paperTone: '#EDE7DC',
      cardBackground: '#FAF7F0',
      borderStyle: '1px solid #1C1A18',
      fontFamilySerif: 'var(--font-typewriter)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'warm-piano-waltz',
    defaultSections: [
      {
        id: 'vn-hero',
        type: 'hero',
        title: 'HAPPY BIRTHDAY AANCHAL.',
        subtitle: 'ANOTHER YEAR OF YOU, AND THE WORLD KEEPS WINNING',
        dateText: 'OCT 06 2026 · SPECIAL EDITION',
        heroPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'The Celebration Chronicle',
        layout: 'vintage-newspaper',
        cursiveName: 'Aanchal',
      },
      {
        id: 'vn-timeline',
        type: 'timeline',
        title: 'Chronicles of the Year',
        subtitle: 'dispatches from extraordinary moments',
        events: [
          {
            date: 'January 2026',
            title: 'Starting with Ambition',
            description: 'New dreams tackled with courage and that unmistakable determination.',
          },
          {
            date: 'Summer 2026',
            title: 'Unforgettable Journeys',
            description: 'Sun-drenched travels, laughter echoing through alleys, and moments worth preserving.',
          },
          {
            date: 'Today',
            title: 'The Great Celebration',
            description: 'Loved ones gather from near and far to honor the person who makes life brighter.',
          },
        ],
      },
      {
        id: 'vn-ending',
        type: 'ending',
        message: 'ANOTHER YEAR OF YOU, AND THE WORLD KEEPS WINNING ♡',
        subtext: 'Special Birthday Gazette Archive · 2026',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 07 — DREAMY NIGHT (Dark, stars, dreamy)
  // ========================================================
  {
    id: 'dreamy-night',
    name: 'Dreamy Night',
    tagline: 'Dark, stars, dreamy',
    occasion: 'birthday',
    aesthetic: ['dark', 'romantic', 'cinematic'],
    description: 'Velvet midnight sky, sleeping crescent moon doodles, golden starlight script, and glowing candlelit photos.',
    previewImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#0B0E17',
      foreground: '#E8ECF5',
      accent: '#FACC15',
      accentSoft: '#1F2738',
      paperTone: '#131926',
      cardBackground: '#131926',
      borderStyle: '1px solid rgba(250, 204, 21, 0.25)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
      dark: true,
    },
    defaultMusicTrack: 'starlight-musicbox',
    defaultSections: [
      {
        id: 'dn-hero',
        type: 'hero',
        title: 'Happy Birthday, Aanchal ♡',
        subtitle: 'same dreams, more sunsets, more you.',
        dateText: 'Under the Stars · 2026',
        heroPhoto: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Midnight Constellation',
        layout: 'dreamy-night',
        cursiveName: 'Aanchal',
      },
      {
        id: 'dn-quote',
        type: 'quote',
        quoteText: 'Two wandering souls, caught in each other’s gravity.',
        author: 'Written in the stars',
        subtext: 'Happy Birthday to my favorite constellation',
      },
      {
        id: 'dn-ending',
        type: 'ending',
        message: 'same dreams, more sunsets, more you. Happy Birthday ♡',
        subtext: 'Endlessly orbiting your light.',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 08 — POLAROID WALL (Polaroid, collage, warm)
  // ========================================================
  {
    id: 'polaroid-wall',
    name: 'Polaroid Wall',
    tagline: 'Polaroid, collage, warm',
    occasion: 'birthday',
    aesthetic: ['scrapbook', 'vintage', 'playful'],
    description: 'Warm textured cork wall, naturally tilted polaroids, brass pushpins, and Sharpie marker notes written directly on the paper.',
    previewImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#F4EDE2',
      foreground: '#241F1D',
      accent: '#B45309',
      accentSoft: '#F6ECE0',
      paperTone: '#FFFFFF',
      cardBackground: '#FFFFFF',
      borderStyle: '1px solid rgba(180, 83, 9, 0.2)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-marker)',
    },
    defaultMusicTrack: 'acoustic-sunbeams',
    defaultSections: [
      {
        id: 'pw-hero',
        type: 'hero',
        title: 'Happy Birthday Aanchal! ♡',
        subtitle: 'good people · good memories · always ♡',
        dateText: 'Linen & Polaroid Collage',
        heroPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Pinned with love 📌',
        layout: 'polaroid-wall',
        cursiveName: 'Aanchal',
      },
      {
        id: 'pw-polaroids',
        type: 'polaroidCollage',
        title: 'good people, good memories',
        subtitle: 'snapshots pinned forever',
        polaroids: [
          {
            url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
            caption: 'laughing until our stomachs hurt',
            date: 'Summer',
            rotation: -3,
            washiColor: 'gold',
          },
          {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
            caption: 'golden hour perfection',
            date: 'Autumn',
            rotation: 2.2,
            washiColor: 'rose',
          },
        ],
      },
      {
        id: 'pw-ending',
        type: 'ending',
        message: 'more of this, always. Happy Birthday ♡',
        subtext: 'To countless more polaroids together!',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 09 — PINK Y2K (Y2K, trendy, bold)
  // ========================================================
  {
    id: 'pink-y2k',
    name: 'Pink Y2K',
    tagline: 'Y2K, trendy, bold',
    occasion: 'birthday',
    aesthetic: ['y2k', 'playful', 'cute'],
    description: 'Hot pink vibes, 3D extruded bubble typography, sparkling mirrored disco balls, holographic butterflies, and cyber sticker aesthetics.',
    previewImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#FFF0F5',
      foreground: '#831843',
      accent: '#FF1493',
      accentSoft: '#FCE7F3',
      paperTone: '#FFFFFF',
      cardBackground: '#FFFFFF',
      borderStyle: '2px solid #FF69B4',
      fontFamilySerif: 'var(--font-y2k)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-doodle)',
    },
    defaultMusicTrack: 'acoustic-sunbeams',
    defaultSections: [
      {
        id: 'y2k-hero',
        type: 'hero',
        title: 'HAPPY BIRTHDAY AANCHAL',
        subtitle: 'part of chaos, cause you some happiness ♡',
        dateText: 'Y2K ICON EDITION · 2026',
        heroPhoto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Disco Vibe ✨',
        layout: 'pink-y2k',
        cursiveName: 'Aanchal',
      },
      {
        id: 'y2k-reasons',
        type: 'reasons',
        title: 'Things I love about you',
        subtitle: 'certified top tier qualities',
        items: [
          { number: 1, title: 'Unmatched energy', text: 'You bring the sparkle everywhere you go.', doodle: '🪩' },
          { number: 2, title: 'Iconic playlists', text: 'Only the best throwback bangers.', doodle: '💿' },
          { number: 3, title: 'Chaos coordinator', text: 'Turning every plan into an unforgettable memory.', doodle: '💖' },
        ],
      },
      {
        id: 'y2k-ending',
        type: 'ending',
        message: 'part of chaos, cause you some happiness ♡ Happy Birthday!',
        subtext: 'Keep sparkling, superstar!',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // 10 — BOOK / LETTER STYLE (Literary, minimal, timeless)
  // ========================================================
  {
    id: 'book-letter',
    name: 'Book / Letter Style',
    tagline: 'Literary, minimal, timeless',
    occasion: 'birthday',
    aesthetic: ['editorial', 'vintage', 'romantic'],
    description: 'An open two-page hardcover book spread, chapter table of contents, deckled paper pages, and literary warmth.',
    previewImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#F6EFE2',
      foreground: '#2B2520',
      accent: '#96723B',
      accentSoft: '#EFE6D5',
      paperTone: '#FCFAF5',
      cardBackground: '#FFFFFF',
      borderStyle: '1px solid rgba(150, 114, 59, 0.25)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'warm-piano-waltz',
    defaultSections: [
      {
        id: 'bl-hero',
        type: 'hero',
        title: 'Happy Birthday, Aanchal.',
        subtitle: 'A few chapters of a beautiful year.',
        dateText: 'Volume 2026',
        heroPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Chapter I',
        layout: 'book-spread',
        cursiveName: 'Aanchal',
      },
      {
        id: 'bl-letter',
        type: 'letter',
        greeting: 'Dear Aanchal,',
        paragraphs: [
          'If this year was written as a novel, every page with you on it would be the favorite chapter.',
          'Thank you for your warmth, your intellect, and the easy laughter we share between the lines.',
          'Here is to turning the page into the sweetest year yet.'
        ],
        closing: 'Endlessly in your corner,',
        handwrittenSignature: 'Always ♡',
        paperStyle: 'parchment',
      },
      {
        id: 'bl-ending',
        type: 'ending',
        message: 'Here’s to the next chapter of your story ♡',
        subtext: 'Happy Birthday, beautiful soul.',
        showDrewtifullBranding: true,
      },
    ],
  },

  // ========================================================
  // ADDITIONAL OCCASIONS (Anniversary, Proposal, etc.)
  // ========================================================
  {
    id: 'our-story',
    name: 'Our Story',
    tagline: 'An interactive romantic journey from the day we met until today',
    occasion: 'anniversary',
    aesthetic: ['editorial', 'romantic', 'cinematic'],
    description: 'Walk through the chapters of your love story: the first spark, the dates, and where you are headed next.',
    previewImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#F7F3ED',
      foreground: '#24201D',
      accent: '#C46D4E',
      accentSoft: '#F6EBE5',
      paperTone: '#FDFBF7',
      cardBackground: '#FFFFFF',
      borderStyle: '1px solid rgba(196, 109, 78, 0.2)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'warm-piano-waltz',
    defaultSections: [
      {
        id: 'os-hero',
        type: 'hero',
        title: 'Two Years with You',
        subtitle: 'every chapter better than the last',
        dateText: '730 days of us',
        heroPhoto: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Our Timeline',
        layout: 'editorial-split',
      },
      {
        id: 'os-ending',
        type: 'ending',
        message: 'The best chapters of our story are the ones we haven’t written yet.',
        subtext: 'Happy Anniversary, my darling.',
        showDrewtifullBranding: true,
      },
    ],
  },
  {
    id: 'before-i-ask',
    name: 'Before I Ask',
    tagline: 'A cinematic progression culminating in the most important question',
    occasion: 'proposal',
    aesthetic: ['cinematic', 'romantic', 'editorial'],
    description: 'Builds emotional anticipation step by step through memories before presenting the big question.',
    previewImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    theme: {
      background: '#F9F5F0',
      foreground: '#231F1D',
      accent: '#B8863A',
      accentSoft: '#FAF3E5',
      paperTone: '#FFFFFF',
      cardBackground: '#FFFFFF',
      borderStyle: '1px solid rgba(184, 134, 58, 0.25)',
      fontFamilySerif: 'var(--font-serif)',
      fontFamilySans: 'var(--font-body)',
      fontFamilyHand: 'var(--font-cursive)',
    },
    defaultMusicTrack: 'starlight-musicbox',
    defaultSections: [
      {
        id: 'bia-hero',
        type: 'hero',
        title: 'There is something I need to ask you...',
        subtitle: 'take a breath and scroll slowly with me ♡',
        dateText: 'A very special moment',
        heroPhoto: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
        badgeText: 'Listen closely',
        layout: 'centered',
      },
      {
        id: 'bia-ending',
        type: 'ending',
        message: 'Forever and always, from this day forward.',
        subtext: 'Our next chapter starts now ♡',
        showDrewtifullBranding: true,
      },
    ],
  },
];

export function getTemplateById(id: string): Template | undefined {
  return TEMPLATES.find((t) => t.id === id);
}

export function getTemplatesByOccasion(occasion: string): Template[] {
  if (occasion === 'all') return TEMPLATES;
  return TEMPLATES.filter((t) => t.occasion === occasion);
}
