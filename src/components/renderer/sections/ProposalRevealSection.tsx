'use client';

import React, { useState } from 'react';
import { ProposalRevealSectionData, TemplateTheme } from '@/lib/templates/types';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

interface ProposalRevealSectionProps {
  data: ProposalRevealSectionData;
  theme: TemplateTheme;
}

export function ProposalRevealSection({
  data,
  theme,
}: ProposalRevealSectionProps) {
  const [answered, setAnswered] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleYesClick = () => {
    setAnswered(true);

    // Multi-shot heart confetti explosion
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#E25B6C', '#F3A7B2', '#D4AF37', '#FFF5EA'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <section
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '840px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '3.5rem' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-hand)',
            fontSize: '1.3rem',
            color: theme.accent,
            marginBottom: '0.5rem',
          }}
        >
          <Sparkles size={16} /> a moment in time
        </span>
        <h2
          style={{
            fontFamily: theme.fontFamilySerif,
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            color: theme.foreground,
            fontWeight: 400,
          }}
        >
          {data.introTitle}
        </h2>
      </div>

      {/* Memory progression cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          marginBottom: '4.5rem',
        }}
      >
        {data.memories.map((mem, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: theme.cardBackground,
              border: theme.borderStyle,
              borderRadius: '12px',
              padding: '28px 24px',
              boxShadow: '0 8px 30px rgba(35, 25, 20, 0.05)',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.2rem',
                color: theme.accent,
                display: 'block',
                marginBottom: '8px',
              }}
            >
              chapter 0{idx + 1}
            </span>
            <p
              style={{
                fontFamily: theme.fontFamilySerif,
                fontSize: 'clamp(1.2rem, 2.4vw, 1.5rem)',
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: theme.foreground,
              }}
            >
              “{mem.text}”
            </p>
          </div>
        ))}
      </div>

      {/* The Suspense & Big Question Box */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '2px solid rgba(184, 134, 58, 0.35)',
          borderRadius: '16px',
          padding: 'clamp(2.5rem, 6vw, 4.5rem) 2rem',
          boxShadow: '0 20px 60px rgba(184, 134, 58, 0.15)',
          position: 'relative',
        }}
      >
        {!revealed && !answered ? (
          <div>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#FAF3E5',
                color: '#B8863A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                animation: 'pulseGlow 2s infinite',
              }}
            >
              <Heart size={28} fill="#B8863A" />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.7rem',
                color: '#B8863A',
                marginBottom: '1rem',
              }}
            >
              {data.suspenseText}
            </p>

            <button
              onClick={() => setRevealed(true)}
              style={{
                backgroundColor: '#2A2421',
                color: '#FAF5ED',
                padding: '14px 32px',
                borderRadius: '999px',
                fontSize: '1rem',
                fontWeight: 500,
                marginTop: '1rem',
                boxShadow: '0 4px 14px rgba(42, 36, 33, 0.25)',
                transition: 'transform 0.2s ease',
              }}
            >
              Take a breath & reveal ♡
            </button>
          </div>
        ) : !answered ? (
          <div className="animate-fade-in">
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.4rem',
                color: '#8A8077',
                marginBottom: '1rem',
              }}
            >
              with my whole heart and all my tomorrows...
            </p>

            <h3
              style={{
                fontFamily: theme.fontFamilySerif,
                fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                color: '#2A2421',
                lineHeight: 1.1,
                marginBottom: '2.5rem',
                fontWeight: 500,
              }}
            >
              {data.questionText}
            </h3>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <button
                onClick={handleYesClick}
                style={{
                  backgroundColor: '#C97A6E',
                  color: '#FFFFFF',
                  padding: '18px 48px',
                  borderRadius: '999px',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 25px rgba(201, 122, 110, 0.45)',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
              >
                <Heart size={20} fill="#FFFFFF" /> YES! A million times yes ♡
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>
              💍✨
            </span>

            <h3
              style={{
                fontFamily: theme.fontFamilySerif,
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: '#2A2421',
                marginBottom: '1rem',
              }}
            >
              {data.celebrationTitle}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.75rem',
                color: '#B8863A',
                lineHeight: 1.4,
              }}
            >
              {data.celebrationMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
