'use client';

import React from 'react';
import { TimelineSectionData, TemplateTheme } from '@/lib/templates/types';
import { Heart } from 'lucide-react';

interface TimelineSectionProps {
  data: TimelineSectionData;
  theme: TemplateTheme;
}

export function TimelineSection({ data, theme }: TimelineSectionProps) {
  const isDark = theme.dark;

  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '880px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        {data.title && (
          <h2
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              color: theme.foreground,
              fontWeight: 400,
              marginBottom: '0.5rem',
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
            }}
          >
            {data.subtitle}
          </p>
        )}
      </div>

      {/* Timeline track */}
      <div
        style={{
          position: 'relative',
          paddingLeft: '32px',
          borderLeft: `2px dashed ${theme.accentSoft}`,
          marginLeft: '16px',
        }}
      >
        {data.events.map((event, idx) => (
          <div
            key={idx}
            style={{
              position: 'relative',
              marginBottom: '3.5rem',
            }}
          >
            {/* Timeline node marker */}
            <div
              style={{
                position: 'absolute',
                left: '-43px',
                top: '4px',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: theme.cardBackground,
                border: `2px solid ${theme.accent}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.accent,
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: theme.accent,
                }}
              />
            </div>

            {/* Event Content */}
            <div
              style={{
                backgroundColor: theme.cardBackground,
                border: theme.borderStyle,
                borderRadius: '8px',
                padding: '24px',
                boxShadow: '0 6px 20px rgba(35, 25, 20, 0.05)',
              }}
            >
              <div
                style={{
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: theme.accent,
                  fontFamily: 'monospace',
                  marginBottom: '6px',
                }}
              >
                {event.date}
              </div>

              <h3
                style={{
                  fontFamily: theme.fontFamilySerif,
                  fontSize: '1.6rem',
                  color: theme.foreground,
                  fontWeight: 500,
                  marginBottom: '10px',
                }}
              >
                {event.title}
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  color: isDark ? '#D9D0C7' : '#5A524B',
                  marginBottom: event.image ? '16px' : '0',
                }}
              >
                {event.description}
              </p>

              {event.image && (
                <div
                  style={{
                    overflow: 'hidden',
                    borderRadius: '4px',
                    maxHeight: '280px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '280px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
