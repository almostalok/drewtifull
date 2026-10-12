'use client';

import React from 'react';
import { HeroCollage } from './HeroCollage';

export function CatalogueHero() {
  return (
    <section
      style={{
        backgroundColor: 'transparent',
        padding: '18px 44px 10px 44px',
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        minHeight: '160px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Column: Typography */}
      <div
        style={{
          flex: '0 0 auto',
          maxWidth: '540px',
          zIndex: 2,
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--ink-muted)',
            textTransform: 'uppercase',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>TEMPLATES</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: 'var(--accent-terracotta)', fontWeight: 600 }}>BIRTHDAY</span>
        </div>

        {/* Big Editorial Headline in Non-AI Serif */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.95rem, 2.7vw, 2.65rem)',
            fontWeight: 400,
            color: 'var(--ink-primary)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            margin: '0 0 8px 0',
            display: 'inline-flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span>A birthday, a little more beautiful.</span>
          <span
            style={{
              color: 'var(--accent-terracotta)',
              fontFamily: 'var(--font-hand)',
              fontSize: '2.1rem',
              display: 'inline-block',
              transform: 'translateY(1px) rotate(6deg)',
              fontWeight: 400,
            }}
          >
            ♡
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '0.96rem',
            color: 'var(--ink-secondary)',
            margin: 0,
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Pick a feeling. Bring your memories. We’ll take care of the rest.
        </p>
      </div>

      {/* Right Column: Stationery & Scrapbook Collage */}
      <div
        className="hide-on-tablet-portrait"
        style={{
          flex: '1 1 540px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '160px',
          position: 'relative',
        }}
      >
        <HeroCollage />
      </div>
    </section>
  );
}
