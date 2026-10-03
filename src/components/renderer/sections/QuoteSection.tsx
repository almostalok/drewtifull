'use client';

import React from 'react';
import { QuoteSectionData, TemplateTheme } from '@/lib/templates/types';

interface QuoteSectionProps {
  data: QuoteSectionData;
  theme: TemplateTheme;
}

export function QuoteSection({ data, theme }: QuoteSectionProps) {
  const isDark = theme.dark;

  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '820px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontFamily: theme.fontFamilySerif,
          fontSize: '4.5rem',
          lineHeight: 0.8,
          color: theme.accent,
          opacity: 0.6,
          marginBottom: '1rem',
        }}
      >
        “
      </div>

      <blockquote
        style={{
          fontFamily: theme.fontFamilySerif,
          fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
          fontStyle: 'italic',
          lineHeight: 1.45,
          color: theme.foreground,
          marginBottom: '1.5rem',
          fontWeight: 400,
        }}
      >
        {data.quoteText}
      </blockquote>

      {data.author && (
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.45rem',
            color: theme.accent,
            marginBottom: '0.4rem',
          }}
        >
          — {data.author}
        </p>
      )}

      {data.subtext && (
        <p
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.06em',
            color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(40,30,25,0.45)',
          }}
        >
          {data.subtext}
        </p>
      )}
    </section>
  );
}
