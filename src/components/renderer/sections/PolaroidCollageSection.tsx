'use client';

import React from 'react';
import { PolaroidCollageSectionData, TemplateTheme } from '@/lib/templates/types';
import { PolaroidFrame } from '@/components/ui/PolaroidFrame';

interface PolaroidCollageSectionProps {
  data: PolaroidCollageSectionData;
  theme: TemplateTheme;
}

export function PolaroidCollageSection({
  data,
  theme,
}: PolaroidCollageSectionProps) {
  const isDark = theme.dark;

  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      {data.title && (
        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            color: theme.foreground,
            marginBottom: '0.5rem',
            fontWeight: 400,
          }}
        >
          {data.title}
        </h2>
      )}

      {data.subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.45rem',
            color: theme.accent,
            marginBottom: '3.5rem',
          }}
        >
          {data.subtitle}
        </p>
      )}

      {/* Polaroid Grid / Collage */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {data.polaroids.map((polaroid, index) => {
          // Dynamic rotation pattern if not explicitly defined
          const rotation =
            polaroid.rotation !== undefined
              ? polaroid.rotation
              : index % 3 === 0
              ? -2.5
              : index % 3 === 1
              ? 3.2
              : -1.2;

          return (
            <div key={index} style={{ margin: '0.5rem' }}>
              <PolaroidFrame
                url={polaroid.url}
                caption={polaroid.caption}
                date={polaroid.date}
                rotation={rotation}
                washiColor={polaroid.washiColor || 'rose'}
                aspect="portrait"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
