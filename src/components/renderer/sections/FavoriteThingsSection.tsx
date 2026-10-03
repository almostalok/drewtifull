'use client';

import React from 'react';
import { FavoriteThingsSectionData, TemplateTheme } from '@/lib/templates/types';
import { Heart } from 'lucide-react';

interface FavoriteThingsSectionProps {
  data: FavoriteThingsSectionData;
  theme: TemplateTheme;
}

export function FavoriteThingsSection({
  data,
  theme,
}: FavoriteThingsSectionProps) {
  const isDark = theme.dark;

  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '860px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {data.items.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: theme.cardBackground,
              border: theme.borderStyle,
              borderRadius: '8px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 4px 16px rgba(35, 25, 20, 0.04)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: theme.fontFamilySerif,
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: theme.accent,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Heart size={14} fill={theme.accent} /> {item.category}
              </span>

              {item.note && (
                <span
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.1rem',
                    color: isDark ? '#A89E95' : '#8A8077',
                  }}
                >
                  {item.note}
                </span>
              )}
            </div>

            <p
              style={{
                fontSize: '1rem',
                color: isDark ? '#D9D0C7' : '#453E38',
                lineHeight: 1.6,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
