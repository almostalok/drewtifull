'use client';

import React from 'react';
import { HeroSectionData, TemplateTheme } from '@/lib/templates/types';
import { WashiTape } from '@/components/ui/WashiTape';
import { Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  data: HeroSectionData;
  theme: TemplateTheme;
  recipientName?: string;
  creatorName?: string;
}

export function HeroSection({
  data,
  theme,
  recipientName,
  creatorName,
}: HeroSectionProps) {
  const isDark = theme.dark;
  const layout = data.layout || 'editorial-split';

  if (layout === 'centered') {
    return (
      <section
        style={{
          padding: '6rem 1.5rem 4rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {data.badgeText && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: theme.accent,
                marginBottom: '1rem',
                backgroundColor: theme.accentSoft,
                padding: '4px 14px',
                borderRadius: '999px',
              }}
            >
              <Heart size={14} /> {data.badgeText}
            </div>
          )}

          <h1
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              color: theme.foreground,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              color: theme.accent,
              marginBottom: '2rem',
              lineHeight: 1.3,
            }}
          >
            {data.subtitle}
          </p>

          {data.heroPhoto && (
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '680px',
                width: '100%',
                margin: '1rem auto 0 auto',
              }}
            >
              <WashiTape
                color="rose"
                rotation={-1.5}
                width="110px"
                style={{ top: '-10px', left: '50%', transform: 'translateX(-50%)' }}
              />
              <div
                style={{
                  backgroundColor: theme.cardBackground,
                  padding: '14px',
                  borderRadius: '6px',
                  boxShadow: '0 15px 40px rgba(30, 20, 15, 0.12)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto}
                  alt={data.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    borderRadius: '3px',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          )}

          {data.dateText && (
            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '0.88rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(40,30,25,0.6)',
              }}
            >
              {data.dateText}
            </p>
          )}
        </div>
      </section>
    );
  }

  if (layout === 'film-cover') {
    return (
      <section
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          maxWidth: '1040px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: '#161413',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '8px',
            padding: '24px 20px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            color: '#F4ECE1',
          }}
        >
          {/* Film Top Sprocket Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
              padding: '0 8px',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '14px',
                  height: '8px',
                  backgroundColor: '#0C0B0A',
                  borderRadius: '2px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  color: '#D4AF37',
                  letterSpacing: '0.12em',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}
              >
                ● {data.dateText || '35mm Film Exposure'}
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: '#FFFFFF',
                }}
              >
                {data.title}
              </h1>

              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.6rem',
                  color: '#D4AF37',
                  marginBottom: '1.5rem',
                }}
              >
                {data.subtitle}
              </p>

              <div
                style={{
                  borderTop: '1px dashed rgba(255, 255, 255, 0.15)',
                  paddingTop: '1rem',
                  fontSize: '0.82rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontFamily: 'monospace',
                }}
              >
                ARCHIVE # {recipientName?.toUpperCase() || 'DREWTIFULL'} // KODAK PORTRA 400
              </div>
            </div>

            {data.heroPhoto && (
              <div
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px',
                  backgroundColor: '#0D0C0B',
                  borderRadius: '4px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto}
                  alt={data.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '2px',
                  }}
                />
              </div>
            )}
          </div>

          {/* Film Bottom Sprocket Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '16px',
              padding: '0 8px',
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                style={{
                  width: '14px',
                  height: '8px',
                  backgroundColor: '#0C0B0A',
                  borderRadius: '2px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (layout === 'celestial') {
    return (
      <section
        style={{
          padding: '6rem 1.5rem 5rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#F3D27E',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} /> {data.dateText || 'Celestial Coordinates'}
          </div>

          <h1
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              color: '#F4ECE1',
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: '1.25rem',
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.8rem',
              color: '#F3D27E',
              marginBottom: '2.5rem',
            }}
          >
            {data.subtitle}
          </p>

          {data.heroPhoto && (
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                maxWidth: '620px',
                width: '100%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(243, 210, 126, 0.4), rgba(40, 60, 100, 0.2))',
                  filter: 'blur(10px)',
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#121824',
                  border: '1px solid rgba(243, 210, 126, 0.3)',
                  borderRadius: '12px',
                  padding: '12px',
                  zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.heroPhoto}
                  alt={data.title}
                  style={{
                    width: '100%',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default: editorial-split
  return (
    <section
      style={{
        padding: '5rem 1.5rem 4rem 1.5rem',
        maxWidth: '1160px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}
      >
        <div>
          {data.badgeText && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: theme.accent,
                backgroundColor: theme.accentSoft,
                padding: '4px 14px',
                borderRadius: '999px',
                marginBottom: '1.5rem',
              }}
            >
              <Heart size={14} /> {data.badgeText}
            </div>
          )}

          <h1
            style={{
              fontFamily: theme.fontFamilySerif,
              fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
              color: theme.foreground,
              lineHeight: 1.08,
              fontWeight: 400,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {data.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
              color: theme.accent,
              marginBottom: '1.5rem',
              lineHeight: 1.3,
            }}
          >
            {data.subtitle}
          </p>

          {data.dateText && (
            <p
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(40,30,25,0.5)',
              }}
            >
              {data.dateText}
            </p>
          )}
        </div>

        {data.heroPhoto && (
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <WashiTape
              color="rose"
              rotation={2.5}
              width="100px"
              style={{ top: '-10px', right: '30px' }}
            />
            <div
              style={{
                backgroundColor: theme.cardBackground,
                padding: '14px',
                borderRadius: '4px',
                boxShadow: '0 16px 36px rgba(35, 25, 20, 0.1)',
                display: 'inline-block',
                width: '100%',
                maxWidth: '460px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.heroPhoto}
                alt={data.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '2px',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
