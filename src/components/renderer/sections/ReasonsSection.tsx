'use client';

import React from 'react';
import { ReasonsSectionData, TemplateTheme } from '@/lib/templates/types';
import { LinedNotepadCard, PastelPillsGroup } from '@/components/ui/HandDrawnStickers';

interface ReasonsSectionProps {
  data: ReasonsSectionData;
  theme: TemplateTheme;
}

export function ReasonsSection({ data, theme }: ReasonsSectionProps) {
  const isDark = theme.dark;
  const isThingsILove = data.title.toLowerCase().includes('things') || data.title.toLowerCase().includes('love');
  const isPastelPillsStyle = theme.background.toLowerCase().includes('fce') || theme.background.toLowerCase().includes('fff0f5');

  // If this is "Things I love about you" in Cute & Cozy pastel style:
  if (isThingsILove && isPastelPillsStyle) {
    const listItems = data.items.map((it) => it.title || it.text);
    return (
      <section style={{ padding: '4.5rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <PastelPillsGroup title={data.title} items={listItems} />
      </section>
    );
  }

  // If this is "Things I love about you" in Soft Garden / Scrapbook lined notebook card style:
  if (isThingsILove) {
    const listItems = data.items.map((it) => it.title || it.text);
    return (
      <section style={{ padding: '4.5rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <LinedNotepadCard
          title={data.title}
          items={listItems}
          badgeColor={theme.accentSoft || '#F9EBE8'}
        />
      </section>
    );
  }

  // Standard numbered card grid style (e.g., 3 Reasons Why...)
  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1080px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            color: theme.foreground,
            fontWeight: 400,
            marginBottom: '0.4rem',
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.45rem',
              color: theme.accent,
            }}
          >
            {data.subtitle}
          </p>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {data.items.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: theme.cardBackground,
              border: theme.borderStyle,
              borderRadius: '8px',
              padding: '28px 24px',
              boxShadow: '0 8px 24px rgba(35, 25, 20, 0.05)',
              position: 'relative',
              transition: 'transform 0.25s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  fontFamily: theme.fontFamilySerif,
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: theme.accent,
                  lineHeight: 1,
                }}
              >
                0{item.number}
              </span>

              {item.doodle && (
                <span style={{ fontSize: '1.6rem' }}>{item.doodle}</span>
              )}
            </div>

            <h3
              style={{
                fontFamily: theme.fontFamilySerif,
                fontSize: '1.4rem',
                color: theme.foreground,
                fontWeight: 600,
                marginBottom: '10px',
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.65,
                color: isDark ? '#D9D0C7' : '#5A524B',
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
