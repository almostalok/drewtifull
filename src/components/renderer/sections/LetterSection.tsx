'use client';

import React, { useState } from 'react';
import { LetterSectionData, TemplateTheme } from '@/lib/templates/types';
import { WashiTape } from '@/components/ui/WashiTape';
import { Mail, Sparkles } from 'lucide-react';

interface LetterSectionProps {
  data: LetterSectionData;
  theme: TemplateTheme;
}

export function LetterSection({ data, theme }: LetterSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
  const isDark = theme.dark;

  return (
    <section
      style={{
        padding: '4rem 1.5rem 5rem 1.5rem',
        maxWidth: '820px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <WashiTape
        color="rose"
        rotation={-1.8}
        width="120px"
        style={{ top: '3.2rem', left: '50%', transform: 'translateX(-50%)' }}
      />

      <div
        style={{
          backgroundColor: isDark ? '#1C1917' : '#FFFFFF',
          border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(60, 45, 35, 0.08)',
          borderRadius: '4px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxShadow: isDark
            ? '0 15px 40px rgba(0,0,0,0.6)'
            : '0 12px 36px rgba(35, 25, 20, 0.07)',
          position: 'relative',
        }}
      >
        {/* Decorative Wax Seal if enabled */}
        {data.waxSeal && (
          <div
            style={{
              position: 'absolute',
              top: '-20px',
              right: '30px',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: '#A83B3B',
              boxShadow: '0 4px 12px rgba(168, 59, 59, 0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F4D4CD',
              fontSize: '18px',
              fontWeight: 'bold',
              fontFamily: 'serif',
            }}
            title="Wax Seal with Love"
          >
            ♡
          </div>
        )}

        {/* Greeting */}
        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: theme.foreground,
            marginBottom: '1.75rem',
            fontWeight: 400,
            fontStyle: 'italic',
          }}
        >
          {data.greeting}
        </h2>

        {/* Letter Body Paragraphs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {data.paragraphs.map((para, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.85,
                color: isDark ? '#E5DDD5' : '#453E38',
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Closing & Handwritten Signature */}
        <div style={{ marginTop: '2.5rem', textAlign: 'left' }}>
          {data.closing && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: isDark ? '#B3A89F' : '#6E655E',
                marginBottom: '0.4rem',
              }}
            >
              {data.closing}
            </p>
          )}

          {data.handwrittenSignature && (
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                color: theme.accent,
                lineHeight: 1.1,
              }}
            >
              {data.handwrittenSignature}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
