'use client';

import React, { useState } from 'react';
import { StarMapSectionData, TemplateTheme } from '@/lib/templates/types';
import { Sparkles } from 'lucide-react';

interface StarMapSectionProps {
  data: StarMapSectionData;
  theme: TemplateTheme;
}

export function StarMapSection({ data, theme }: StarMapSectionProps) {
  const [activeStar, setActiveStar] = useState<number | null>(0);

  return (
    <section
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1080px',
        margin: '0 auto',
        textAlign: 'center',
        color: '#E8ECF5',
      }}
    >
      <div style={{ marginBottom: '3rem' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            color: '#F3D27E',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}
        >
          <Sparkles size={14} /> {data.coordinatesText || 'Orbiting in Harmony'}
        </span>
        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            marginBottom: '0.5rem',
          }}
        >
          {data.title}
        </h2>
        {data.subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.45rem',
              color: '#F3D27E',
            }}
          >
            {data.subtitle}
          </p>
        )}
      </div>

      {/* Celestial Sky Canvas with Star Nodes */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '440px',
          backgroundColor: '#0A0E17',
          border: '1px solid rgba(243, 210, 126, 0.25)',
          borderRadius: '16px',
          overflow: 'hidden',
          padding: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Background Ambient Stars */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: `${(i * 19) % 95}%`,
              left: `${(i * 31) % 95}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              opacity: (i % 5) * 0.2 + 0.3,
            }}
          />
        ))}

        {/* Constellation lines between stars */}
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <line
            x1="22%"
            y1="35%"
            x2="50%"
            y2="20%"
            stroke="rgba(243, 210, 126, 0.3)"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
          <line
            x1="50%"
            y1="20%"
            x2="78%"
            y2="48%"
            stroke="rgba(243, 210, 126, 0.3)"
            strokeDasharray="4 4"
            strokeWidth="1.5"
          />
        </svg>

        {/* Interactive Photo Star Nodes */}
        {data.photosAsStars.map((star, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStar(idx)}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
              zIndex: 10,
              textAlign: 'center',
            }}
          >
            {/* Glowing Ring */}
            <div
              style={{
                width: activeStar === idx ? '84px' : '64px',
                height: activeStar === idx ? '84px' : '64px',
                borderRadius: '50%',
                border: activeStar === idx ? '2px solid #F3D27E' : '1.5px solid rgba(243, 210, 126, 0.4)',
                boxShadow:
                  activeStar === idx
                    ? '0 0 24px rgba(243, 210, 126, 0.6)'
                    : '0 0 10px rgba(243, 210, 126, 0.2)',
                overflow: 'hidden',
                margin: '0 auto',
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                backgroundColor: '#161D2B',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={star.url}
                alt={star.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <span
              style={{
                display: 'inline-block',
                marginTop: '8px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.15rem',
                color: activeStar === idx ? '#F3D27E' : '#B5C0D4',
                whiteSpace: 'nowrap',
              }}
            >
              ★ {star.label}
            </span>
          </div>
        ))}

        {/* Star Quote at bottom of canvas */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '600px',
            width: '90%',
          }}
        >
          <p
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.85)',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            “{data.starQuote}”
          </p>
        </div>
      </div>
    </section>
  );
}
