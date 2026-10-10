'use client';

import React from 'react';

export function HeroCollage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        minHeight: '260px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
    >
      {/* Background Pressed Daisy SVG Flower (Behind Polaroids) */}
      <svg
        width="110"
        height="110"
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: '-15px',
          left: '70px',
          zIndex: 1,
          opacity: 0.85,
          pointerEvents: 'none',
        }}
      >
        <g stroke="#8B7D72" strokeWidth="1" fill="#FFFDF9">
          {/* Stem & Leaves */}
          <path d="M 50 50 Q 42 75 35 100" stroke="#7A8B72" strokeWidth="2.5" fill="none" />
          <path d="M 46 68 Q 30 62 38 52 C 43 56 46 64 46 68" fill="#8B9F82" stroke="#7A8B72" />
          {/* Flower Petals */}
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(120 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(150 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(180 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(210 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(240 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(270 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(300 50 50)" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(330 50 50)" />
          {/* Yellow Center Pistil */}
          <circle cx="50" cy="50" r="10" fill="#E8B854" stroke="#C49632" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Little Bee Doodle */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '35px',
          fontSize: '1.25rem',
          transform: 'rotate(-15deg)',
          zIndex: 4,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))',
        }}
        title="Buzzy memories"
      >
        🐝
      </div>

      {/* Little Sparkle Star 1 */}
      <span
        style={{
          position: 'absolute',
          top: '25px',
          right: '280px',
          color: '#81746D',
          fontSize: '1rem',
          zIndex: 4,
          opacity: 0.7,
        }}
      >
        ✦
      </span>

      {/* Top Polaroid (Couple / Friends Smiling) */}
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '120px',
          backgroundColor: '#FFFFFF',
          padding: '8px 8px 24px 8px',
          borderRadius: '4px',
          boxShadow: '0 8px 24px rgba(40, 30, 25, 0.12), 0 2px 6px rgba(40, 30, 25, 0.06)',
          transform: 'rotate(-4deg)',
          zIndex: 2,
          width: '120px',
          transition: 'transform 0.2s ease',
        }}
      >
        <div style={{ width: '104px', height: '100px', overflow: 'hidden', backgroundColor: '#F3EFEA' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80"
            alt="Memories"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Middle/Bottom Polaroid (Woman in Sunglasses smiling) */}
      <div
        style={{
          position: 'absolute',
          top: '28px',
          left: '190px',
          backgroundColor: '#FFFFFF',
          padding: '8px 8px 24px 8px',
          borderRadius: '4px',
          boxShadow: '0 10px 28px rgba(40, 30, 25, 0.14), 0 2px 6px rgba(40, 30, 25, 0.08)',
          transform: 'rotate(4deg)',
          zIndex: 3,
          width: '125px',
          transition: 'transform 0.2s ease',
        }}
      >
        <div style={{ width: '109px', height: '105px', overflow: 'hidden', backgroundColor: '#F3EFEA' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            alt="Golden hour smile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Small Paper Note: "Different designs. Same beautiful feelings. ♡" */}
      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '105px',
          backgroundColor: '#FFFDF9',
          border: '1px solid #EADBD3',
          padding: '12px 14px 10px 14px',
          borderRadius: '4px',
          boxShadow: '0 6px 18px rgba(40, 30, 25, 0.08)',
          transform: 'rotate(-2deg)',
          zIndex: 5,
          maxWidth: '135px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1rem',
            lineHeight: 1.25,
            color: '#544D47',
            margin: 0,
          }}
        >
          Different designs.
          <br />
          Same beautiful
          <br />
          feelings.
        </p>
        <span
          style={{
            display: 'inline-block',
            color: '#F28F91',
            fontSize: '1rem',
            marginTop: '3px',
          }}
        >
          ♡
        </span>
      </div>

      {/* Little Doodle Coral Heart beside Note */}
      <span
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '280px',
          color: '#F28F91',
          fontSize: '1.2rem',
          transform: 'rotate(15deg)',
          zIndex: 4,
          opacity: 0.9,
        }}
      >
        ♡
      </span>

      {/* Far Right: Torn Blush Paper Panel */}
      <div
        style={{
          position: 'absolute',
          right: '25px',
          top: '20px',
          backgroundColor: '#F5DCD5',
          padding: '24px 22px',
          borderRadius: '3px',
          boxShadow: '0 8px 24px rgba(40, 30, 25, 0.08)',
          transform: 'rotate(2deg)',
          zIndex: 3,
          maxWidth: '225px',
          borderLeft: '2px dashed rgba(242, 143, 145, 0.5)',
          backgroundImage:
            'radial-gradient(rgba(242, 143, 145, 0.15) 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      >
        {/* Torn top edge effect simulation */}
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.25rem',
            lineHeight: 1.35,
            color: '#4A3E39',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Turn your memories into
          <br />
          a little corner of the internet
          <br />
          that feels just like them ♡
        </p>
      </div>

      {/* Far Right Botanical Wild Rose Branch SVG */}
      <svg
        width="90"
        height="160"
        viewBox="0 0 90 160"
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          zIndex: 2,
          pointerEvents: 'none',
          opacity: 0.9,
        }}
      >
        <g stroke="#7A8B72" strokeWidth="1.8" fill="none">
          <path d="M 45 150 Q 55 90 70 20" />
          {/* Leaf pairs */}
          <path d="M 52 110 Q 68 105 75 95 C 68 90 55 100 52 110" fill="#8B9F82" />
          <path d="M 49 110 Q 32 105 25 95 C 32 90 45 100 49 110" fill="#8B9F82" />
          <path d="M 58 70 Q 75 65 82 55 C 75 50 62 60 58 70" fill="#8B9F82" />
          <path d="M 56 70 Q 38 65 30 55 C 38 50 50 60 56 70" fill="#8B9F82" />
          {/* Flower buds */}
          <circle cx="70" cy="20" r="7" fill="#E8B854" stroke="#D4A745" strokeWidth="1" />
          <circle cx="28" cy="40" r="5" fill="#F28F91" stroke="#E0797B" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
