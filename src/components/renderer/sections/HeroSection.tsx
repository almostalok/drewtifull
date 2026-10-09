'use client';

import React from 'react';
import { HeroSectionData, TemplateTheme } from '@/lib/templates/types';
import { WashiTape } from '@/components/ui/WashiTape';
import {
  BirthdayCakeDoodle,
  TeddyBearDoodle,
  BunnyDoodle,
  CherriesDoodle,
  VintageCameraDoodle,
  DiscoBallDoodle,
  ButterflyDoodle,
  DaisyDoodle,
  FlowerSprigDoodle,
  CrescentMoonDoodle,
  StarClusterDoodle,
  PushPinDoodle,
  UnderlineSwooshDoodle,
  FilmSprocketStrip,
  ScribbleArrowDoodle,
} from '@/components/ui/HandDrawnDoodles';
import {
  HandwrittenStickyNote,
  FrostedTape,
} from '@/components/ui/HandDrawnStickers';
import { Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  data: HeroSectionData;
  theme: TemplateTheme;
  recipientName?: string;
  creatorName?: string;
}

export function HeroSection({
  data,
  theme,
  recipientName,
  creatorName: _creatorName,
}: HeroSectionProps) {
  const isDark = theme.dark;
  const layout = data.layout || 'editorial-split';
  const displayName = recipientName || data.cursiveName || 'Aanchal';

  // ========================================================
  // 1. SOFT GARDEN (Floral, pastel, elegant)
  // ========================================================
  if (layout === 'soft-garden') {
    return (
      <section
        style={{
          padding: '4.5rem 1.5rem 3.5rem 1.5rem',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: theme.background,
        }}
      >
        <div style={{ maxWidth: '1060px', margin: '0 auto', position: 'relative' }}>
          {/* Header row: Nav/brand feel */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(201, 122, 110, 0.15)',
              paddingBottom: '12px',
              marginBottom: '2.5rem',
              fontSize: '0.88rem',
              color: '#8A7A74',
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.6rem', color: '#B85D50', fontWeight: 600 }}>
              drewtifull
            </span>
            <div style={{ display: 'flex', gap: '18px', fontSize: '0.85rem' }}>
              <span>home</span>
              <span>·</span>
              <span>memories</span>
              <span>·</span>
              <span>letter</span>
              <span>·</span>
              <span>gallery ♫</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Typography & Romantic Notes */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <h1
                  style={{
                    fontFamily: theme.fontFamilySerif,
                    fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                    color: theme.foreground,
                    lineHeight: 1.05,
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {data.title || 'Happy Birthday,'}
                </h1>
                <div
                  style={{
                    fontFamily: 'var(--font-cursive)',
                    fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)',
                    color: '#C97A6E',
                    lineHeight: 1,
                    marginTop: '4px',
                    marginLeft: '8px',
                  }}
                >
                  {displayName} ♡
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  color: '#6E5D57',
                  lineHeight: 1.6,
                  maxWidth: '440px',
                  marginTop: '1.25rem',
                  marginBottom: '1.75rem',
                }}
              >
                {data.subtitle || 'Another year around the sun, and the world feels brighter with you in it.'}
              </p>

              {/* Scroll Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-doodle)',
                    fontSize: '1.15rem',
                    color: '#C97A6E',
                    backgroundColor: '#F9EBE8',
                    border: '1px solid rgba(201, 122, 110, 0.3)',
                    padding: '6px 18px',
                    borderRadius: '999px',
                  }}
                >
                  scroll to explore ↓
                </div>
                {data.dateText && (
                  <span style={{ fontSize: '0.85rem', color: '#9E8C85', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {data.dateText}
                  </span>
                )}
              </div>

              {/* Handwritten Note underneath */}
              <div
                style={{
                  marginTop: '2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-cursive)',
                  fontSize: '1.6rem',
                  color: '#9E4E3B',
                }}
              >
                <span>you make life so beautiful ♡</span>
              </div>
            </div>

            {/* Right Column: Hero Photo Framed with Botanical Flowers */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              {/* Botanical Pressed Flower Doodles framing the photo */}
              <div style={{ position: 'absolute', top: '-25px', right: '15px', zIndex: 10 }}>
                <DaisyDoodle size={65} />
              </div>
              <div style={{ position: 'absolute', bottom: '-20px', left: '-15px', zIndex: 10 }}>
                <FlowerSprigDoodle size={75} />
              </div>

              {/* Taped Photo Card */}
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  backgroundColor: '#FFFFFF',
                  padding: '14px 14px 22px 14px',
                  borderRadius: '6px',
                  boxShadow: '0 18px 45px rgba(180, 120, 110, 0.15), 0 3px 10px rgba(0,0,0,0.04)',
                  maxWidth: '430px',
                  width: '100%',
                }}
              >
                <WashiTape color="rose" rotation={-2} width="110px" style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)' }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '460px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 2. FILM DIARY (Cinematic, film, grainy, dark)
  // ========================================================
  if (layout === 'film-diary') {
    return (
      <section
        style={{
          padding: '4rem 1.5rem',
          backgroundColor: '#100F0E',
          color: '#F4ECE1',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', gap: '20px' }}>
          {/* Left Vertical 35mm Film Sprocket Strip */}
          <div style={{ display: 'none', position: 'relative' }} className="show-on-desktop">
            <FilmSprocketStrip height="560px" />
          </div>

          <div style={{ flex: 1 }}>
            {/* Header / Timestamp Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '10px',
                marginBottom: '2rem',
                fontSize: '0.8rem',
                color: '#8A827A',
                fontFamily: 'monospace',
                letterSpacing: '0.12em',
              }}
            >
              <span style={{ color: '#E8A348' }}>● 35MM KODAK PORTRA 400</span>
              <span style={{ color: '#E8863A', backgroundColor: 'rgba(232, 134, 58, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                {data.dateText || 'OCT 06 2026'}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <h1
                  style={{
                    fontFamily: 'var(--font-cursive)',
                    fontSize: 'clamp(3.4rem, 6.5vw, 5.5rem)',
                    color: '#FFF8F0',
                    lineHeight: 1.05,
                    marginBottom: '0.8rem',
                    textShadow: '0 2px 14px rgba(255,255,255,0.2)',
                  }}
                >
                  Happy Birthday {displayName} ♡
                </h1>

                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.6rem',
                    color: '#D4AF37',
                    marginBottom: '1.5rem',
                    lineHeight: 1.3,
                  }}
                >
                  {data.subtitle || 'another trip around the sun with you.'}
                </p>

                <div
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: '#181615',
                    padding: '16px 20px',
                    borderRadius: '6px',
                    display: 'inline-block',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: '#D4AF37' }}>
                    memories on film · 2024 — 2026
                  </div>
                  <div style={{ fontFamily: 'var(--font-hand)', fontSize: '1.15rem', color: '#C8BEB5', marginTop: '4px' }}>
                    and many more frames to come... Happy Birthday ♡
                  </div>
                </div>
              </div>

              {/* Film Negative Framed Photo */}
              <div style={{ position: 'relative', textAlign: 'center' }}>
                <div
                  style={{
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px 12px 24px 12px',
                    backgroundColor: '#0A0908',
                    borderRadius: '4px',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.1)',
                    maxWidth: '420px',
                    margin: '0 auto',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    <span>KODAK SAFETY FILM</span>
                    <span>EXP 01</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={data.heroPhoto || 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80'}
                    alt={displayName}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '440px',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'contrast(1.05) saturate(1.05)',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '10px',
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: '#E8A348',
                    }}
                  >
                    <span>16A</span>
                    <span>OCT 06 2026</span>
                    <span>17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 3. SCRAPBOOK (Playful, doodle, nostalgic, craft paper)
  // ========================================================
  if (layout === 'scrapbook' || layout === 'scrapbook-header') {
    return (
      <section
        style={{
          padding: '4.5rem 1.5rem 4rem 1.5rem',
          backgroundColor: '#FAF5ED',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          {/* Top Sticky Notes */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <HandwrittenStickyNote
              text="she make everyday feel special ♡"
              color="#FDE8E8"
              textColor="#7F1D1D"
              rotation={-3}
            />
            <HandwrittenStickyNote
              text="same silly you always ♡"
              color="#FEF3C7"
              textColor="#78350F"
              rotation={2.5}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h1
                  style={{
                    fontFamily: theme.fontFamilySerif,
                    fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                    color: '#241E1B',
                    lineHeight: 1.1,
                    fontWeight: 600,
                  }}
                >
                  Happy Birthday {displayName}!
                </h1>
                <UnderlineSwooshDoodle width="90%" color="#F472B6" style={{ marginTop: '-4px' }} />
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-marker)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  color: '#B95B3B',
                  marginTop: '1.25rem',
                  lineHeight: 1.4,
                }}
              >
                {data.subtitle || 'A little collection of my favorite memories with the sweetest human.'}
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <ScribbleArrowDoodle width={65} height={35} color="#B95B3B" direction="down-right" />
                <span style={{ fontFamily: 'var(--font-cursive)', fontSize: '1.5rem', color: '#8A4A38' }}>
                  A little collection of my favorite memories
                </span>
              </div>
            </div>

            {/* Framed Photo with Camera Sticker and Washi Tape */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '20px', zIndex: 12 }}>
                <PushPinDoodle size={30} color="#EA580C" />
              </div>
              <div style={{ position: 'absolute', bottom: '-22px', right: '-10px', zIndex: 12 }}>
                <VintageCameraDoodle size={95} />
              </div>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px 16px 36px 16px',
                  borderRadius: '3px',
                  boxShadow: '0 15px 35px rgba(50, 30, 20, 0.12)',
                  display: 'inline-block',
                  maxWidth: '380px',
                  width: '100%',
                  transform: 'rotate(-1.5deg)',
                }}
              >
                <WashiTape color="sage" rotation={2} width="90px" style={{ top: '-10px', left: '40px' }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80'}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{ marginTop: '12px', textAlign: 'center', fontFamily: 'var(--font-marker)', fontSize: '1.25rem', color: '#2B2523' }}>
                  {displayName} ♡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 4. MINIMAL EDITORIAL (Clean, aesthetic, high-contrast serif)
  // ========================================================
  if (layout === 'minimal-editorial') {
    return (
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          backgroundColor: '#FBF9F5',
          color: '#1C1917',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: theme.fontFamilySerif,
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  lineHeight: 1.04,
                  fontWeight: 400,
                  letterSpacing: '-0.025em',
                  color: '#1A1816',
                }}
              >
                Happy Birthday,<br />
                {displayName}.
              </h1>
            </div>

            <div style={{ maxWidth: '280px', textAlign: 'right', marginTop: '10px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  color: '#78716C',
                  marginBottom: '10px',
                }}
              >
                Another year, more you, more everything to be grateful for.
              </p>
              <span style={{ fontSize: '0.85rem', color: '#9E4E3B', letterSpacing: '0.05em' }}>
                scroll ↓
              </span>
            </div>
          </div>

          {/* Large Editorial Portrait */}
          {data.heroPhoto && (
            <div style={{ position: 'relative', textAlign: 'center', marginBottom: '3.5rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  maxWidth: '720px',
                  width: '100%',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '520px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          )}

          {/* Poetic Center Quote in Serif Italics */}
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem auto' }}>
            <p
              style={{
                fontFamily: theme.fontFamilySerif,
                fontStyle: 'italic',
                fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
                color: '#292524',
                lineHeight: 1.4,
              }}
            >
              “Some people make the world feel softer, just by being in it.”
            </p>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 5. CUTE & COZY (Playful, cute, pastel with cake & teddy)
  // ========================================================
  if (layout === 'cute-cozy') {
    return (
      <section
        style={{
          padding: '4.5rem 1.5rem 3.5rem 1.5rem',
          backgroundColor: '#FCEAEB',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          {/* Top cute stickers: cake, bunny, sticky notes */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BirthdayCakeDoodle size={75} />
              <HandwrittenStickyNote text="you're so special ♡" color="#FFF1F2" textColor="#BE185D" rotation={-2} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <HandwrittenStickyNote text="same silly you always ♡" color="#FFFBEB" textColor="#92400E" rotation={3} />
              <CherriesDoodle size={55} />
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-cursive)',
                  fontSize: 'clamp(3.4rem, 7vw, 5.6rem)',
                  color: '#DB2777',
                  lineHeight: 1.05,
                  textShadow: '0 2px 12px rgba(219, 39, 119, 0.15)',
                  marginBottom: '1rem',
                }}
              >
                Happy Birthday {displayName} ♡
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-marker)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  color: '#9D174D',
                  marginBottom: '1.5rem',
                  lineHeight: 1.3,
                }}
              >
                {data.subtitle || 'little moments, big happiness ♡'}
              </p>

              {/* Cute Bunny and Teddy Stickers sitting together */}
              <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-end', marginTop: '1.5rem' }}>
                <TeddyBearDoodle size={95} />
                <BunnyDoodle size={85} />
              </div>
            </div>

            {/* Framed Photo with Rounded Soft Corners and Hearts */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '16px 16px 28px 16px',
                  borderRadius: '16px',
                  boxShadow: '0 16px 36px rgba(220, 100, 140, 0.18)',
                  display: 'inline-block',
                  maxWidth: '390px',
                  width: '100%',
                  border: '2px dashed #FBCFE8',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto || 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80'}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '420px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    marginTop: '12px',
                    fontFamily: 'var(--font-cursive)',
                    fontSize: '1.6rem',
                    color: '#DB2777',
                  }}
                >
                  sweetest human alive ♡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 6. VINTAGE NEWSPAPER (Retro, monochrome, newsprint)
  // ========================================================
  if (layout === 'vintage-newspaper') {
    return (
      <section
        style={{
          padding: '4.5rem 1.5rem 4rem 1.5rem',
          backgroundColor: '#F4EFE6',
          color: '#1C1A18',
          position: 'relative',
          borderBottom: '3px double #1C1A18',
        }}
      >
        <div style={{ maxWidth: '1020px', margin: '0 auto' }}>
          {/* Newspaper Masthead */}
          <div style={{ textAlign: 'center', borderBottom: '3px solid #1C1A18', paddingBottom: '10px', marginBottom: '8px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-typewriter)',
                fontSize: 'clamp(2.4rem, 6vw, 4.6rem)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1,
                color: '#1C1A18',
              }}
            >
              HAPPY BIRTHDAY {displayName.toUpperCase()}.
            </h1>
          </div>

          {/* Issue bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid #1C1A18',
              padding: '6px 4px',
              marginBottom: '1.75rem',
              fontFamily: 'var(--font-typewriter)',
              fontSize: '0.82rem',
              letterSpacing: '0.05em',
            }}
          >
            <span>VOL. 26 · NO. 10</span>
            <span>SPECIAL BIRTHDAY EDITION</span>
            <span>OCTOBER 06, 2026</span>
          </div>

          {/* Banner Subheader */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div
              style={{
                fontFamily: theme.fontFamilySerif,
                fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                lineHeight: 1.15,
                color: '#1C1A18',
              }}
            >
              ANOTHER YEAR OF YOU, AND THE WORLD KEEPS WINNING
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'flex-start',
            }}
          >
            {/* News column */}
            <div style={{ borderRight: '1px solid rgba(28, 26, 24, 0.2)', paddingRight: '20px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  borderBottom: '1px solid #1C1A18',
                  paddingBottom: '4px',
                }}
              >
                A STORY OF BEAUTIFUL HUMAN
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-typewriter)',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                  color: '#383430',
                }}
              >
                {data.subtitle ||
                  'Reports from all around confirm that another incredible year has been completed. The recipient continues to radiate kindness, unmatched humor, and breathtaking grace.'}
              </p>
              <div style={{ marginTop: '1.5rem', fontFamily: 'var(--font-cursive)', fontSize: '1.8rem', color: '#1C1A18' }}>
                Signed with love ♡
              </div>
            </div>

            {/* B&W / Sepia Photo taped down */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <FrostedTape width="100px" top="-10px" rotation={-1.5} />
              <div
                style={{
                  backgroundColor: '#EBE5D9',
                  padding: '12px',
                  border: '1px solid #1C1A18',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  display: 'inline-block',
                  maxWidth: '420px',
                  width: '100%',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'grayscale(100%) contrast(1.15)',
                  }}
                />
                <div style={{ marginTop: '8px', fontSize: '0.8rem', fontFamily: 'var(--font-typewriter)', color: '#555' }}>
                  Fig. 1 — The honoree captured during golden hour.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 7. DREAMY NIGHT (Dark, stars, celestial, dreamy)
  // ========================================================
  if (layout === 'dreamy-night') {
    return (
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          backgroundColor: '#0B0E17',
          color: '#E8ECF5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.25rem' }}>
                <CrescentMoonDoodle size={75} />
                <StarClusterDoodle size={50} color="#FACC15" />
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-cursive)',
                  fontSize: 'clamp(3.4rem, 6.5vw, 5.5rem)',
                  color: '#FEF08A',
                  lineHeight: 1.05,
                  textShadow: '0 0 20px rgba(254, 240, 138, 0.4)',
                  marginBottom: '1rem',
                }}
              >
                Happy Birthday, {displayName} ♡
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.6rem',
                  color: '#93C5FD',
                  lineHeight: 1.35,
                  marginBottom: '1.5rem',
                }}
              >
                {data.subtitle || 'same dreams, more sunsets, more you.'}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#FACC15',
                  backgroundColor: 'rgba(250, 204, 21, 0.1)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: '1px solid rgba(250, 204, 21, 0.3)',
                }}
              >
                <Sparkles size={14} /> written in the starlight · 2026
              </div>
            </div>

            {/* Glowing Golden Night Frame */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  backgroundColor: '#131926',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid rgba(250, 204, 21, 0.35)',
                  boxShadow: '0 0 45px rgba(250, 204, 21, 0.2), 0 20px 40px rgba(0,0,0,0.8)',
                  maxWidth: '430px',
                  width: '100%',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto || 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80'}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 8. POLAROID WALL (Warm collage, cork/linen, pins & notes)
  // ========================================================
  if (layout === 'polaroid-wall') {
    return (
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          backgroundColor: '#F4EDE2',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-cursive)',
                fontSize: 'clamp(3.2rem, 6.5vw, 5.4rem)',
                color: '#292524',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              Happy Birthday {displayName}! ♡
            </h1>
            <p style={{ fontFamily: 'var(--font-marker)', fontSize: '1.4rem', color: '#B45309' }}>
              {data.subtitle || 'good people · good memories · always ♡'}
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-18px', zIndex: 12 }}>
              <PushPinDoodle size={32} color="#D97706" />
            </div>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                padding: '14px 14px 34px 14px',
                borderRadius: '2px',
                boxShadow: '0 15px 35px rgba(50, 30, 20, 0.12)',
                maxWidth: '420px',
                width: '100%',
                transform: 'rotate(-1.5deg)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.heroPhoto || 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80'}
                alt={displayName}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '440px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div style={{ marginTop: '14px', textAlign: 'center', fontFamily: 'var(--font-marker)', fontSize: '1.3rem', color: '#1C1917' }}>
                more of this, always ♡
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 9. PINK Y2K (Trendy, bubbly, disco ball, butterflies)
  // ========================================================
  if (layout === 'pink-y2k') {
    return (
      <section
        style={{
          padding: '4.5rem 1.5rem 3.5rem 1.5rem',
          backgroundColor: '#FFF0F5',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          {/* Top row: Disco Ball and Butterfly */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <DiscoBallDoodle size={95} />
            <ButterflyDoodle size={85} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-y2k)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                  lineHeight: 1.1,
                  color: '#FF1493',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  filter: 'drop-shadow(2px 3px 0px #FFB6C1) drop-shadow(4px 6px 0px rgba(199, 21, 133, 0.4))',
                }}
              >
                HAPPY BIRTHDAY {displayName.toUpperCase()}
              </h1>

              <div style={{ marginBottom: '1.5rem' }}>
                <HandwrittenStickyNote
                  text="part of chaos, cause you some happiness ♡"
                  color="#FDF2F8"
                  textColor="#BE185D"
                  rotation={-2}
                  fontFamily="var(--font-doodle)"
                />
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-doodle)',
                  fontSize: '1.35rem',
                  color: '#9D174D',
                  lineHeight: 1.4,
                }}
              >
                {data.subtitle || 'some chaos, some memories, pure happiness ♡'}
              </p>
            </div>

            {/* Photo with Y2K Holographic Border */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  backgroundColor: '#FFFFFF',
                  padding: '14px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 45px rgba(255, 105, 180, 0.35)',
                  border: '3px solid #FF69B4',
                  maxWidth: '400px',
                  width: '100%',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80'}
                  alt={displayName}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '430px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // 10. BOOK / LETTER STYLE (Literary, timeless open book spread)
  // ========================================================
  if (layout === 'book-spread') {
    return (
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          backgroundColor: '#F6EFE2',
          color: '#2B2520',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            backgroundColor: '#FCFAF5',
            borderRadius: '6px',
            boxShadow: '0 20px 50px rgba(50, 40, 30, 0.15)',
            border: '1px solid rgba(150, 114, 59, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Book Spine Crease in Center */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '2px',
              backgroundColor: 'rgba(0,0,0,0.06)',
              boxShadow: '0 0 16px rgba(0,0,0,0.1)',
              display: 'none',
            }}
            className="show-on-desktop"
          />

          {/* Left Page: Chapter Index */}
          <div style={{ padding: '3.5rem 2.5rem' }}>
            <div style={{ fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#96723B', marginBottom: '1.25rem' }}>
              CHAPTER I · THE BIRTHDAY
            </div>

            <h1
              style={{
                fontFamily: theme.fontFamilySerif,
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                lineHeight: 1.1,
                color: '#2B2520',
                marginBottom: '1rem',
              }}
            >
              Happy Birthday,<br />
              {displayName}.
            </h1>

            <p
              style={{
                fontFamily: theme.fontFamilySerif,
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: '#73655A',
                marginBottom: '2rem',
                lineHeight: 1.5,
              }}
            >
              A few chapters of a beautiful year.
            </p>

            {/* Table of Contents */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: '#4A3E35' }}>
              <div>01 — The Beginning</div>
              <div>02 — Little Moments</div>
              <div>03 — Big Memories</div>
              <div>04 — Things I Love About You</div>
              <div>05 — Here’s to More</div>
            </div>
          </div>

          {/* Right Page: Framed Portrait */}
          <div style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F4EB' }}>
            <div
              style={{
                border: '1px solid rgba(150, 114, 59, 0.25)',
                padding: '12px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
                maxWidth: '380px',
                width: '100%',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.heroPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'}
                alt={displayName}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '440px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ========================================================
  // FALLBACK / EXISTING LAYOUTS (centered, celestial, editorial-split)
  // ========================================================
  if (layout === 'centered') {
    return (
      <section
        style={{
          padding: '6rem 1.5rem 4rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {data.badgeText && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: theme.accent,
                marginBottom: '1rem',
                backgroundColor: theme.accentSoft,
                padding: '4px 14px',
                borderRadius: '999px',
              }}
            >
              <Heart size={14} /> {data.badgeText}
            </div>
          )}

          <h1
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              color: theme.foreground,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              color: theme.accent,
              marginBottom: '2rem',
              lineHeight: 1.3,
            }}
          >
            {data.subtitle}
          </p>

          {data.heroPhoto && (
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '680px',
                width: '100%',
                margin: '1rem auto 0 auto',
              }}
            >
              <WashiTape
                color="rose"
                rotation={-1.5}
                width="110px"
                style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)' }}
              />
              <div
                style={{
                  backgroundColor: theme.cardBackground,
                  padding: '14px',
                  borderRadius: '6px',
                  boxShadow: '0 15px 40px rgba(30, 20, 15, 0.12)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto}
                  alt={data.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    borderRadius: '3px',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          )}

          {data.dateText && (
            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '0.88rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(40,30,25,0.6)',
              }}
            >
              {data.dateText}
            </p>
          )}
        </div>
      </section>
    );
  }

  // Default: editorial-split
  return (
    <section
      style={{
        padding: '5rem 1.5rem 4rem 1.5rem',
        maxWidth: '1160px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}
      >
        <div>
          {data.badgeText && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: theme.accent,
                backgroundColor: theme.accentSoft,
                padding: '4px 14px',
                borderRadius: '999px',
                marginBottom: '1.5rem',
              }}
            >
              <Heart size={14} /> {data.badgeText}
            </div>
          )}

          <h1
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              color: theme.foreground,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
              color: theme.accent,
              marginBottom: '1.5rem',
              lineHeight: 1.3,
            }}
          >
            {data.subtitle}
          </p>

          {data.dateText && (
            <p
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(40,30,25,0.5)',
              }}
            >
              {data.dateText}
            </p>
          )}
        </div>

        {data.heroPhoto && (
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <WashiTape
              color="rose"
              rotation={2.5}
              width="100px"
              style={{ top: '-10px', right: '30px' }}
            />
            <div
              style={{
                backgroundColor: theme.cardBackground,
                padding: '14px',
                borderRadius: '4px',
                boxShadow: '0 16px 36px rgba(35, 25, 20, 0.1)',
                display: 'inline-block',
                width: '100%',
                maxWidth: '460px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.heroPhoto}
                alt={data.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
