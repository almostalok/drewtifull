'use client';

import React from 'react';
import { FilmStripSectionData, TemplateTheme } from '@/lib/templates/types';

interface FilmStripSectionProps {
  data: FilmStripSectionData;
  theme: TemplateTheme;
}

export function FilmStripSection({ data, theme }: FilmStripSectionProps) {
  return (
    <section
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        {data.title && (
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
        )}
        {data.subtitle && (
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: theme.accent,
            }}
          >
            {data.subtitle}
          </p>
        )}
      </div>

      {/* Film Strip Container */}
      <div
        style={{
          backgroundColor: '#121110',
          padding: '24px 16px',
          borderRadius: '8px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          overflowX: 'auto',
        }}
      >
        {/* Top Sprocket Perforations */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '16px',
            padding: '0 8px',
          }}
        >
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '12px',
                height: '8px',
                backgroundColor: '#090808',
                borderRadius: '1.5px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Frames Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {data.frames.map((frame, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#191716',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '12px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.72rem',
                  fontFamily: 'monospace',
                  color: '#D4AF37',
                  marginBottom: '8px',
                }}
              >
                <span>{frame.frameNumber || `EXP 0${index + 1}`}</span>
                <span>{frame.timestamp || '24 FPS'}</span>
              </div>

              <div
                style={{
                  width: '100%',
                  height: '240px',
                  backgroundColor: '#0A0A09',
                  overflow: 'hidden',
                  borderRadius: '2px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={frame.url}
                  alt={frame.caption || 'Film exposure'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'contrast(1.05) brightness(0.96)',
                  }}
                />
              </div>

              {frame.caption && (
                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.25rem',
                    color: '#E8DFD5',
                    textAlign: 'center',
                    marginTop: '10px',
                  }}
                >
                  {frame.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Sprocket Perforations */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '12px',
            marginTop: '16px',
            padding: '0 8px',
          }}
        >
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '12px',
                height: '8px',
                backgroundColor: '#090808',
                borderRadius: '1.5px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
