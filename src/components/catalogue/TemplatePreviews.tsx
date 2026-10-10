'use client';

import React from 'react';

/**
 * High-fidelity miniature renders of the 10 Birthday templates
 * precisely recreating the preview cards in the reference image.
 */

export function PreviewSoftGarden() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFDF9',
        position: 'relative',
        overflow: 'hidden',
        padding: '16px 14px 12px 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Decorative Pressed Flowers / Wildflowers */}
      <svg
        width="65"
        height="65"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', top: '-10px', left: '-10px', opacity: 0.85, pointerEvents: 'none' }}
      >
        <circle cx="20" cy="20" r="14" fill="#F8C8B8" opacity="0.6" />
        <circle cx="45" cy="15" r="9" fill="#F5B29D" opacity="0.7" />
        <path d="M 20 20 Q 40 45 60 70" stroke="#8A9A80" strokeWidth="2" fill="none" />
        <ellipse cx="38" cy="36" rx="5" ry="12" transform="rotate(-35 38 36)" fill="#A0B596" />
      </svg>

      <svg
        width="55"
        height="55"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', bottom: '10px', right: '5px', opacity: 0.85, pointerEvents: 'none' }}
      >
        <circle cx="70" cy="70" r="12" fill="#F2A599" opacity="0.7" />
        <path d="M 70 70 Q 50 50 35 30" stroke="#8A9A80" strokeWidth="2" fill="none" />
      </svg>

      {/* Header section */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'left', paddingLeft: '4px' }}>
        <h4
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.95rem',
            color: '#2A2421',
            margin: '0 0 2px 0',
            lineHeight: 1.15,
            fontWeight: 500,
          }}
        >
          Happy
          <br />
          Birthday,
          <br />
          <span style={{ fontFamily: 'var(--font-hand)', color: '#D97375', fontSize: '1.15rem' }}>
            Aanchal ♡
          </span>
        </h4>
        <p
          style={{
            fontSize: '0.55rem',
            color: '#81746D',
            margin: '4px 0 0 0',
            maxWidth: '120px',
            lineHeight: 1.25,
          }}
        >
          Another year around the sun, and the world feels brighter with you in it.
        </p>
      </div>

      {/* Main Portrait with floral accent */}
      <div
        style={{
          position: 'absolute',
          top: '18px',
          right: '12px',
          width: '80px',
          height: '100px',
          borderRadius: '40px 40px 4px 4px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          border: '2px solid #FFFFFF',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
          alt="Aanchal"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom Mini Photos Collage */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '6px',
          marginTop: 'auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: '54px',
            height: '62px',
            backgroundColor: '#FFFFFF',
            padding: '3px 3px 12px 3px',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transform: 'rotate(-3deg)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80"
            alt="Moments"
            style={{ width: '100%', height: '46px', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            width: '52px',
            height: '58px',
            backgroundColor: '#FFFFFF',
            padding: '3px 3px 10px 3px',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transform: 'rotate(2deg)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
            alt="Moments"
            style={{ width: '100%', height: '44px', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            flex: 1,
            textAlign: 'right',
            paddingRight: '2px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '0.62rem',
              color: '#81746D',
              display: 'block',
              lineHeight: 1.2,
            }}
          >
            a few favourite moments
            <br />
            <span style={{ color: '#D97375' }}>you make life beautiful ♡</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function PreviewFilmDiary() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#12100E',
        position: 'relative',
        overflow: 'hidden',
        padding: '14px 12px 10px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* 35mm Sprocket Holes Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
          paddingBottom: '4px',
          marginBottom: '6px',
        }}
      >
        <span style={{ fontSize: '0.5rem', color: '#D4AF37', fontFamily: 'monospace' }}>KODAK 400</span>
        <div style={{ display: 'flex', gap: '5px' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '4px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '1px',
              }}
            />
          ))}
        </div>
        <span style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>EXP 24</span>
      </div>

      {/* Main Top Content */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.1rem',
              color: '#FFFFFF',
              margin: '0 0 4px 0',
              lineHeight: 1.15,
            }}
          >
            Happy
            <br />
            Birthday
            <br />
            Aanchal
          </h4>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '0.52rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.65)',
              display: 'block',
              maxWidth: '90px',
              lineHeight: 1.3,
            }}
          >
            ANOTHER TRIP AROUND THE SUN WITH YOU.
          </span>
        </div>

        {/* Polaroid/Film Frame */}
        <div
          style={{
            width: '85px',
            height: '95px',
            backgroundColor: '#000000',
            border: '2px solid rgba(255,255,255,0.25)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
            alt="Film Frame"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.1) brightness(0.95)' }}
          />
          {/* Amber Timestamp */}
          <span
            style={{
              position: 'absolute',
              bottom: '4px',
              right: '4px',
              fontFamily: 'monospace',
              fontSize: '0.5rem',
              color: '#FF9E2C',
              fontWeight: 700,
              textShadow: '0 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            OCT 06 2026
          </span>
        </div>
      </div>

      {/* Bottom Horizontal Film Strip */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          backgroundColor: '#050505',
          padding: '5px',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '3px',
          marginTop: '6px',
        }}
      >
        <div style={{ flex: 1, height: '48px', overflow: 'hidden', borderRadius: '1px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
            alt="Sunset"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: 1, height: '48px', overflow: 'hidden', borderRadius: '1px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
            alt="Candid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export function PreviewScrapbook() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F4EC',
        position: 'relative',
        overflow: 'hidden',
        padding: '14px 12px 10px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Torn Paper Top Tape */}
      <div
        style={{
          position: 'absolute',
          top: '-4px',
          left: '35%',
          width: '50px',
          height: '14px',
          backgroundColor: 'rgba(235, 180, 160, 0.65)',
          transform: 'rotate(-4deg)',
          zIndex: 4,
        }}
      />

      {/* Top Left Title with Doodles */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h4
          style={{
            fontFamily: 'var(--font-marker)',
            fontSize: '1rem',
            color: '#382D28',
            margin: '0',
            lineHeight: 1.15,
          }}
        >
          Happy
          <br />
          Birthday
          <br />
          Aanchal! ✦
        </h4>
        <span
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '0.62rem',
            color: '#B95B3B',
            display: 'block',
            marginTop: '4px',
          }}
        >
          same silly you always ♡
        </span>
      </div>

      {/* Top Right Polaroid 1 */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '74px',
          height: '84px',
          backgroundColor: '#FFFFFF',
          padding: '4px 4px 14px 4px',
          borderRadius: '2px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
          transform: 'rotate(5deg)',
          zIndex: 3,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          alt="Smile"
          style={{ width: '100%', height: '62px', objectFit: 'cover' }}
        />
      </div>

      {/* Middle Photo - Happy smile */}
      <div
        style={{
          position: 'absolute',
          top: '65px',
          left: '42px',
          width: '84px',
          height: '66px',
          backgroundColor: '#FFFFFF',
          padding: '4px',
          borderRadius: '3px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transform: 'rotate(-3deg)',
          zIndex: 2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80"
          alt="Happy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Right Pet Photo sticker */}
      <div
        style={{
          position: 'absolute',
          top: '78px',
          right: '8px',
          width: '46px',
          height: '46px',
          backgroundColor: '#FFFFFF',
          padding: '3px',
          borderRadius: '2px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
          transform: 'rotate(7deg)',
          zIndex: 4,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80"
          alt="Dog"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom Scrapbook Note */}
      <div
        style={{
          marginTop: 'auto',
          backgroundColor: '#FFFDF9',
          border: '1px dashed #DBC7BA',
          padding: '6px 8px',
          borderRadius: '4px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '0.65rem',
            color: '#4A3E39',
          }}
        >
          A little collection of my favourite memories ♡
        </span>
      </div>
    </div>
  );
}

export function PreviewMinimalEditorial() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F7F3EE',
        position: 'relative',
        overflow: 'hidden',
        padding: '16px 14px 14px 14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Top Editorial Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h4
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            color: '#1C1917',
            margin: 0,
            lineHeight: 1.15,
            fontWeight: 400,
            letterSpacing: '-0.02em',
          }}
        >
          Happy
          <br />
          Birthday,
          <br />
          Aanchal.
        </h4>
        <span
          style={{
            fontSize: '0.52rem',
            color: '#78716C',
            maxWidth: '85px',
            lineHeight: 1.35,
            textAlign: 'right',
            fontFamily: 'var(--font-body)',
          }}
        >
          Another year,
          <br />
          more you,
          <br />
          more everything
          <br />
          to be grateful for.
        </span>
      </div>

      {/* Prominent Editorial Center Photograph */}
      <div
        style={{
          width: '100%',
          height: '84px',
          overflow: 'hidden',
          borderRadius: '2px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          margin: '8px 0',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
          alt="Golden glow"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom Editorial Quote */}
      <div
        style={{
          borderTop: '1px solid #E7E0D8',
          paddingTop: '6px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '0.62rem',
            color: '#44403C',
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          “Some people make the world feel softer, just by being in it.”
        </p>
      </div>
    </div>
  );
}

export function PreviewCuteCozy() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FDEFF2',
        position: 'relative',
        overflow: 'hidden',
        padding: '14px 12px 12px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Top Left Birthday Cake Doodles & Teddy Bear */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.2rem' }}>🎂</span>
        <span style={{ fontSize: '1.25rem' }}>🧸</span>
      </div>

      {/* Playful Headline */}
      <div style={{ textAlign: 'center', margin: '2px 0' }}>
        <h4
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.25rem',
            color: '#E15579',
            margin: 0,
            lineHeight: 1.15,
            fontWeight: 700,
          }}
        >
          Happy
          <br />
          Birthday
          <br />
          Aanchal ♡
        </h4>
      </div>

      {/* Middle Portrait in Pink Warmth */}
      <div
        style={{
          width: '90px',
          height: '80px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto',
          border: '3px solid #FFFFFF',
          boxShadow: '0 4px 12px rgba(225, 85, 121, 0.15)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
          alt="Cute & Cozy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Floating Cute Badges */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          left: '10px',
          backgroundColor: '#FFFDF5',
          border: '1px solid #FFE4A0',
          borderRadius: '999px',
          padding: '2px 6px',
          fontSize: '0.48rem',
          color: '#8A6A1E',
          transform: 'rotate(-8deg)',
        }}
      >
        some silly you ♡
      </div>

      <div
        style={{
          position: 'absolute',
          top: '82px',
          right: '8px',
          backgroundColor: '#EFF8FF',
          border: '1px solid #BFDBFE',
          borderRadius: '999px',
          padding: '2px 6px',
          fontSize: '0.48rem',
          color: '#1E40AF',
          transform: 'rotate(6deg)',
        }}
      >
        you're so special ♡
      </div>

      {/* Bottom text */}
      <div style={{ textAlign: 'center', marginTop: '2px' }}>
        <span
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '0.68rem',
            color: '#B93E60',
          }}
        >
          little moments, big happiness ♡
        </span>
      </div>
    </div>
  );
}

export function PreviewVintageNewspaper() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F3EFE7',
        position: 'relative',
        overflow: 'hidden',
        padding: '12px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
        border: '1px solid #D6CEBE',
      }}
    >
      {/* Newspaper Top Masthead */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid #1C1917',
            paddingBottom: '2px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.65rem', fontWeight: 700, color: '#1C1917' }}>
            drewtifull
          </span>
          <span style={{ fontSize: '0.45rem', color: '#57534E', fontFamily: 'monospace' }}>
            SPECIAL EDITION · OCT 2026
          </span>
        </div>

        {/* Big Bold Headline */}
        <h4
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.92rem',
            fontWeight: 800,
            color: '#1C1917',
            textAlign: 'center',
            margin: '4px 0 2px 0',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
          }}
        >
          HAPPY BIRTHDAY AANCHAL.
        </h4>
        <div
          style={{
            borderTop: '1px solid #1C1917',
            borderBottom: '1px solid #1C1917',
            padding: '2px 0',
            textAlign: 'center',
            fontSize: '0.45rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: '#292524',
          }}
        >
          ANOTHER YEAR OF YOU, AND THE WORLD KEEPS WINNING
        </div>
      </div>

      {/* Two Column Newspaper Layout */}
      <div style={{ display: 'flex', gap: '6px', margin: '4px 0' }}>
        {/* Left Column: B&W Photo */}
        <div
          style={{
            width: '65px',
            height: '75px',
            backgroundColor: '#1C1917',
            overflow: 'hidden',
            border: '1px solid #1C1917',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
            alt="Newspaper subject"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }}
          />
        </div>

        {/* Right Column: News Articles */}
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '0.52rem', fontWeight: 800, display: 'block', color: '#1C1917', lineHeight: 1.2 }}>
            A STORY OF A BEAUTIFUL HUMAN
          </span>
          <p
            style={{
              fontSize: '0.42rem',
              color: '#44403C',
              margin: '3px 0 0 0',
              lineHeight: 1.25,
              textAlign: 'justify',
              fontFamily: 'serif',
            }}
          >
            Reports confirm another year of extraordinary kindness, infectious laughter, and effortless brilliance.
          </p>
        </div>
      </div>

      {/* Bottom Rules & Article Snippet */}
      <div
        style={{
          borderTop: '1px solid #1C1917',
          paddingTop: '3px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.42rem',
          color: '#57534E',
        }}
      >
        <span>PAGE 01 — THE CHRONICLE</span>
        <span>PRICELESS</span>
      </div>
    </div>
  );
}

export function PreviewDreamyNight() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0E1726',
        position: 'relative',
        overflow: 'hidden',
        padding: '14px 12px 12px 12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Twinkling Constellation Stars & Crescent Moon */}
      <span
        style={{
          position: 'absolute',
          top: '18px',
          left: '12px',
          fontSize: '1.25rem',
          color: '#FEF08A',
          filter: 'drop-shadow(0 0 6px rgba(254,240,138,0.5))',
        }}
      >
        🌙
      </span>
      <span style={{ position: 'absolute', top: '16px', right: '35px', color: '#FEF08A', fontSize: '0.7rem' }}>✦</span>
      <span style={{ position: 'absolute', top: '45px', left: '42px', color: '#93C5FD', fontSize: '0.6rem' }}>★</span>
      <span style={{ position: 'absolute', bottom: '65px', right: '15px', color: '#FEF08A', fontSize: '0.65rem' }}>✧</span>

      {/* Celestial Title */}
      <div style={{ textAlign: 'center', marginTop: '4px' }}>
        <h4
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.15rem',
            color: '#FFFFFF',
            margin: 0,
            lineHeight: 1.15,
            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          Happy Birthday,
          <br />
          Aanchal ♡
        </h4>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.52rem',
            color: '#93C5FD',
            letterSpacing: '0.04em',
            display: 'block',
            marginTop: '3px',
          }}
        >
          same dreams, more sunsets, more you.
        </span>
      </div>

      {/* Main Night Sky Center Photo */}
      <div
        style={{
          width: '90px',
          height: '75px',
          borderRadius: '4px',
          overflow: 'hidden',
          margin: '0 auto',
          border: '1px solid rgba(254, 240, 138, 0.4)',
          boxShadow: '0 0 16px rgba(254, 240, 138, 0.15)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
          alt="Night starlight"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom Star Quote */}
      <div
        style={{
          borderTop: '1px solid rgba(147, 197, 253, 0.2)',
          paddingTop: '6px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: '0.58rem',
            color: '#E2E8F0',
          }}
        >
          “orbiting your warmth always”
        </span>
      </div>
    </div>
  );
}

export function PreviewPolaroidWall() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F3ECE2',
        position: 'relative',
        overflow: 'hidden',
        padding: '12px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Top Header Card */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <h4
          style={{
            fontFamily: 'var(--font-marker)',
            fontSize: '0.95rem',
            color: '#292524',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Happy Birthday
          <br />
          Aanchal! ♡
        </h4>
      </div>

      {/* Polaroid Tilted Trio */}
      <div
        style={{
          position: 'relative',
          height: '105px',
          margin: '2px 0',
        }}
      >
        {/* Polaroid 1 (Left, Tilted) */}
        <div
          style={{
            position: 'absolute',
            left: '4px',
            top: '6px',
            width: '65px',
            backgroundColor: '#FFFFFF',
            padding: '3px 3px 12px 3px',
            borderRadius: '2px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transform: 'rotate(-6deg)',
            zIndex: 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80"
            alt="Left"
            style={{ width: '100%', height: '54px', objectFit: 'cover' }}
          />
        </div>

        {/* Polaroid 2 (Center-Right, Overlapping) */}
        <div
          style={{
            position: 'absolute',
            right: '8px',
            top: '12px',
            width: '72px',
            backgroundColor: '#FFFFFF',
            padding: '4px 4px 14px 4px',
            borderRadius: '2px',
            boxShadow: '0 6px 14px rgba(0,0,0,0.12)',
            transform: 'rotate(4deg)',
            zIndex: 3,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
            alt="Right"
            style={{ width: '100%', height: '60px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Bottom Sticky Label */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2D5C7',
          padding: '4px 8px',
          borderRadius: '2px',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          transform: 'rotate(-1deg)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '0.62rem',
            color: '#57534E',
          }}
        >
          good people · good memories · always. ♡
        </span>
      </div>
    </div>
  );
}

export function PreviewPinkY2K() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFEBF3',
        position: 'relative',
        overflow: 'hidden',
        padding: '12px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}
    >
      {/* Disco Ball & Butterfly */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.3rem', filter: 'drop-shadow(0 2px 4px rgba(255,20,147,0.3))' }}>🪩</span>
        <span style={{ fontSize: '1.2rem' }}>🦋</span>
      </div>

      {/* Y2K Bubble Chrome Heading */}
      <div style={{ textAlign: 'center', margin: '2px 0' }}>
        <h4
          style={{
            fontFamily: 'var(--font-y2k)',
            fontSize: '1rem',
            fontWeight: 900,
            color: '#FF1493',
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: '0.04em',
            textShadow: '1px 1px 0 #FFF, 2px 2px 0 #FF69B4',
          }}
        >
          HAPPY
          <br />
          BIRTHDAY
          <br />
          AANCHAL ♡
        </h4>
      </div>

      {/* Cyber/Heart Polaroid Collage */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', margin: '2px 0' }}>
        <div
          style={{
            width: '56px',
            height: '62px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #FF69B4',
            borderRadius: '6px',
            overflow: 'hidden',
            transform: 'rotate(-4deg)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
            alt="Y2K photo 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            width: '56px',
            height: '62px',
            backgroundColor: '#FFFFFF',
            border: '2px solid #FF1493',
            borderRadius: '6px',
            overflow: 'hidden',
            transform: 'rotate(5deg)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
            alt="Y2K photo 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Sticker Text Bottom */}
      <div
        style={{
          backgroundColor: '#FF1493',
          color: '#FFFFFF',
          borderRadius: '999px',
          padding: '3px 8px',
          textAlign: 'center',
          fontSize: '0.52rem',
          fontWeight: 700,
          boxShadow: '0 2px 6px rgba(255,20,147,0.3)',
        }}
      >
        same chaos · same you · same happiness ♡
      </div>
    </div>
  );
}

export function PreviewBookLetter() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FCFAF6',
        position: 'relative',
        overflow: 'hidden',
        padding: '12px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none',
        border: '1px solid #EBE4D8',
      }}
    >
      {/* Book Spread Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #EAE3D6',
          paddingBottom: '3px',
          fontSize: '0.45rem',
          color: '#78716C',
          letterSpacing: '0.06em',
        }}
      >
        <span>drewtifull</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span>home</span>
          <span>memories</span>
          <span>chapters</span>
        </div>
      </div>

      {/* Two Page Book Spread */}
      <div style={{ display: 'flex', gap: '8px', flex: 1, alignItems: 'center', padding: '4px 0' }}>
        {/* Left Page: Chapter Index */}
        <div style={{ flex: 1, borderRight: '1px solid #EAE3D6', paddingRight: '6px' }}>
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.72rem',
              color: '#292524',
              margin: '0 0 2px 0',
              fontWeight: 500,
            }}
          >
            Happy Birthday,
            <br />
            Aanchal.
          </h4>
          <span style={{ fontSize: '0.42rem', color: '#78716C', display: 'block', marginBottom: '4px' }}>
            A few chapters of a beautiful year.
          </span>

          <div style={{ fontSize: '0.4rem', color: '#57534E', lineHeight: 1.35, fontFamily: 'serif' }}>
            <div>01 — The Beginning</div>
            <div>02 — Little Moments</div>
            <div>03 — Big Memories</div>
            <div>04 — Things I Love</div>
          </div>
        </div>

        {/* Right Page: Photographic Keepsake */}
        <div style={{ width: '60px', height: '82px', overflow: 'hidden', borderRadius: '1px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
            alt="Keepsake portrait"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Book Bottom Page Number */}
      <div
        style={{
          borderTop: '1px solid #EAE3D6',
          paddingTop: '3px',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.42rem',
          color: '#A8A29E',
        }}
      >
        <span>CHAPTER 01</span>
        <span>PAGE 24</span>
      </div>
    </div>
  );
}

export function TemplatePreviewRenderer({ templateId }: { templateId: string }) {
  switch (templateId) {
    case 'soft-garden':
      return <PreviewSoftGarden />;
    case 'film-diary':
      return <PreviewFilmDiary />;
    case 'scrapbook-birthday':
      return <PreviewScrapbook />;
    case 'minimal-editorial':
      return <PreviewMinimalEditorial />;
    case 'cute-and-cozy':
      return <PreviewCuteCozy />;
    case 'vintage-newspaper':
      return <PreviewVintageNewspaper />;
    case 'dreamy-night':
      return <PreviewDreamyNight />;
    case 'polaroid-wall':
      return <PreviewPolaroidWall />;
    case 'pink-y2k':
      return <PreviewPinkY2K />;
    case 'book-letter':
      return <PreviewBookLetter />;
    default:
      return <PreviewSoftGarden />;
  }
}
