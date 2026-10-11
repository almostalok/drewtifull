'use client';

import React from 'react';
import { HeroCollage } from './HeroCollage';

export function CatalogueHero() {
  return (
    <section
      style={{
        backgroundColor: '#FFF8F2',
        padding: '10px 44px 0px 44px',
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
            fontWeight: 500,
            letterSpacing: '0.12em',
            color: '#81746D',
            textTransform: 'uppercase',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>TEMPLATES</span>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: '#544D47', fontWeight: 600 }}>BIRTHDAY</span>
        </div>

        {/* Big Editorial Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.85rem, 2.6vw, 2.45rem)',
            fontWeight: 400,
            color: '#292321',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 6px 0',
            display: 'inline-flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            gap: '6px',
          }}
        >
          <span>A birthday, a little more beautiful.</span>
          <span
            style={{
              color: '#F28F91',
              fontFamily: 'var(--font-hand)',
              fontSize: '2rem',
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
            fontSize: '0.94rem',
            color: '#81746D',
            margin: 0,
            lineHeight: 1.45,
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
