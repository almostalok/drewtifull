'use client';

import React from 'react';
import { EndingSectionData, TemplateTheme } from '@/lib/templates/types';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface EndingSectionProps {
  data: EndingSectionData;
  theme: TemplateTheme;
  isPublishedView?: boolean;
}

export function EndingSection({
  data,
  theme,
  isPublishedView = false,
}: EndingSectionProps) {
  const isDark = theme.dark;

  return (
    <footer
      style={{
        padding: '6rem 1.5rem 5rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {/* Soft Heart Divider */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: theme.accentSoft,
            color: theme.accent,
            marginBottom: '1.75rem',
          }}
        >
          <Heart size={20} fill={theme.accent} />
        </div>

        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: theme.foreground,
            fontWeight: 400,
            lineHeight: 1.25,
            marginBottom: '1rem',
          }}
        >
          {data.message}
        </h2>

        {data.subtext && (
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.6rem',
              color: theme.accent,
              marginBottom: '3rem',
            }}
          >
            {data.subtext}
          </p>
        )}

        {/* Subtle Drewtifull watermark & link */}
        {data.showDrewtifullBranding && (
          <div
            style={{
              borderTop: isDark
                ? '1px solid rgba(255,255,255,0.08)'
                : '1px solid rgba(60, 45, 35, 0.08)',
              paddingTop: '2.5rem',
              marginTop: '1.5rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(40,30,25,0.6)',
                marginBottom: '8px',
              }}
            >
              made with love on drewtifull
            </p>

            <Link
              href="/"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: theme.accent,
                transition: 'opacity 0.2s ease',
              }}
            >
              make something beautiful for someone you love →
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
}
