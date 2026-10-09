'use client';

import React from 'react';
import {
  BirthdayCakeDoodle,
  TeddyBearDoodle,
  BunnyDoodle,
  CherriesDoodle,
  VintageCameraDoodle,
  DiscoBallDoodle,
  ButterflyDoodle,
  DaisyDoodle,
  FlowerSprigDoodle,
  CrescentMoonDoodle,
  StarClusterDoodle,
  HanddrawnHeartDoodle,
  PushPinDoodle,
  UnderlineSwooshDoodle,
} from './HandDrawnDoodles';

// ==========================================
// HANDWRITTEN STICKER BADGES & ANNOTATIONS
// ==========================================

export function HandwrittenStickyNote({
  text,
  rotation = -3,
  color = '#FFFBEB',
  textColor = '#332924',
  fontFamily = 'var(--font-marker)',
  pin = true,
  className = '',
  style = {},
}: {
  text: string;
  rotation?: number;
  color?: string;
  textColor?: string;
  fontFamily?: string;
  pin?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`handwritten-sticky-note ${className}`}
      style={{
        display: 'inline-block',
        backgroundColor: color,
        color: textColor,
        fontFamily,
        padding: '10px 16px',
        borderRadius: '3px',
        boxShadow: '0 4px 15px rgba(45, 30, 20, 0.08), 0 1px 3px rgba(45, 30, 20, 0.04)',
        transform: `rotate(${rotation}deg)`,
        position: 'relative',
        fontSize: '1.15rem',
        lineHeight: 1.25,
        border: '1px solid rgba(0,0,0,0.04)',
        userSelect: 'none',
        ...style,
      }}
    >
      {pin && (
        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
          <PushPinDoodle size={20} />
        </div>
      )}
      {text}
    </div>
  );
}

// Torn Paper Banner
export function TornPaperBanner({
  text,
  subtext,
  backgroundColor = '#F5D0C5',
  textColor = '#4A2A22',
  rotation = 1,
  className = '',
  style = {},
}: {
  text: string;
  subtext?: string;
  backgroundColor?: string;
  textColor?: string;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`torn-paper-banner ${className}`}
      style={{
        backgroundColor,
        color: textColor,
        padding: '16px 28px',
        textAlign: 'center',
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 8px 25px rgba(50, 30, 20, 0.08)',
        position: 'relative',
        borderRadius: '4px',
        borderTop: '2px dashed rgba(255, 255, 255, 0.6)',
        borderBottom: '2px dashed rgba(0, 0, 0, 0.08)',
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-hand)',
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        {text}
      </div>
      {subtext && (
        <div
          style={{
            fontFamily: 'var(--font-doodle)',
            fontSize: '1.05rem',
            opacity: 0.85,
            marginTop: '4px',
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
}

// Frost Tape (Scotch tape effect)
export function FrostedTape({
  width = '90px',
  rotation = 3,
  top = '-8px',
  left = '50%',
  style = {},
}: {
  width?: string;
  rotation?: number;
  top?: string;
  left?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        transform: `translateX(-50%) rotate(${rotation}deg)`,
        width,
        height: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(1px)',
        borderLeft: '1px dashed rgba(180, 180, 180, 0.4)',
        borderRight: '1px dashed rgba(180, 180, 180, 0.4)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
        zIndex: 10,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}

// Lined Notepad Card for "Things I Love About You"
export function LinedNotepadCard({
  title = 'Things I love about you',
  items,
  badgeColor = '#FAD2E1',
  style = {},
}: {
  title?: string;
  items: string[];
  badgeColor?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFDF9',
        borderRadius: '6px',
        padding: '28px 24px 20px 24px',
        boxShadow: '0 10px 30px rgba(50, 30, 25, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)',
        position: 'relative',
        maxWidth: '460px',
        margin: '0 auto',
        border: '1px solid rgba(220, 205, 195, 0.5)',
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #EFE4DC 32px)',
        backgroundPosition: '0 40px',
        ...style,
      }}
    >
      {/* Tape on top */}
      <FrostedTape width="100px" top="-12px" rotation={-1.5} />

      {/* Header Pill */}
      <div style={{ textAlign: 'center', marginBottom: '22px' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: badgeColor,
            color: '#3B2329',
            fontFamily: 'var(--font-marker)',
            fontSize: '1.25rem',
            padding: '5px 18px',
            borderRadius: '999px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </span>
      </div>

      {/* List items with heart bullets */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-doodle)',
              fontSize: '1.25rem',
              color: '#342B28',
              lineHeight: 1.2,
            }}
          >
            <HanddrawnHeartDoodle size={18} color="#F472B6" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Pastel Pills for "Things I Love About You" (Cute & Cozy style)
export function PastelPillsGroup({
  title = 'Things I love about you',
  items,
  style = {},
}: {
  title?: string;
  items: string[];
  style?: React.CSSProperties;
}) {
  const pillPastels = [
    { bg: '#FEE2E2', border: '#FECACA', text: '#991B1B' },
    { bg: '#FEF3C7', border: '#FDE68A', text: '#92400E' },
    { bg: '#DCFCE7', border: '#BBF7D0', text: '#166534' },
    { bg: '#E0E7FF', border: '#C7D2FE', text: '#3730A3' },
    { bg: '#FCE7F3', border: '#FBCFE8', text: '#9D174D' },
  ];

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', ...style }}>
      <p
        style={{
          fontFamily: 'var(--font-marker)',
          fontSize: '1.4rem',
          color: '#5C3843',
          marginBottom: '16px',
        }}
      >
        {title}
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
        }}
      >
        {items.map((item, idx) => {
          const color = pillPastels[idx % pillPastels.length];
          return (
            <div
              key={idx}
              style={{
                backgroundColor: color.bg,
                border: `1.5px solid ${color.border}`,
                color: color.text,
                fontFamily: 'var(--font-doodle)',
                fontSize: '1.15rem',
                padding: '8px 22px',
                borderRadius: '999px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.04)',
                transform: `rotate(${((idx % 3) - 1) * 1.5}deg)`,
                transition: 'transform 0.2s ease',
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export everything for seamless imports
export {
  BirthdayCakeDoodle,
  TeddyBearDoodle,
  BunnyDoodle,
  CherriesDoodle,
  VintageCameraDoodle,
  DiscoBallDoodle,
  ButterflyDoodle,
  DaisyDoodle,
  FlowerSprigDoodle,
  CrescentMoonDoodle,
  StarClusterDoodle,
  HanddrawnHeartDoodle,
  PushPinDoodle,
  UnderlineSwooshDoodle,
};
