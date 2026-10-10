'use client';

import React from 'react';
import { HeroCollage } from './HeroCollage';

export function CatalogueHero() {
  return (
    <section
      style={{
        backgroundColor: '#FFF8F2',
        padding: '24px 36px 12px 36px',
        maxWidth: '1560px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '32px',
        position: 'relative',
      }}
    >
      {/* Left Column: Typography */}
      <div
        style={{
          flex: '1 1 480px',
          maxWidth: '650px',
          paddingTop: '8px',
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            fontSize: '0.78rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: '#81746D',
            textTransform: 'uppercase',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>TEMPLATES</span>
          <span style={{ opacity: 0.6 }}>/</span>
          <span style={{ color: '#544D47' }}>BIRTHDAY</span>
        </div>

        {/* Big Editorial Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
            fontWeight: 400,
            color: '#292321',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
            display: 'inline-flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span>A birthday, a little more beautiful.</span>
          <span
            style={{
              color: '#F28F91',
              fontFamily: 'var(--font-hand)',
              fontSize: '2.4rem',
              display: 'inline-block',
              transform: 'translateY(2px) rotate(6deg)',
            }}
          >
            ♡
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.02rem',
            color: '#81746D',
            margin: 0,
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Pick a feeling. Bring your memories. We’ll take care of the rest.
        </p>
      </div>

      {/* Right Column: Stationery & Polaroid Collage */}
      <div
        style={{
          flex: '1 1 540px',
          display: 'flex',
          justifyContent: 'flex-end',
          minHeight: '220px',
        }}
      >
        <HeroCollage />
      </div>
    </section>
  );
}
