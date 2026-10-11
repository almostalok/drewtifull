'use client';

import React from 'react';

export function HeroCollage() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        height: '160px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        userSelect: 'none',
      }}
    >
      {/* 1. Background Pressed Daisy Flower */}
      <svg
        width="95"
        height="95"
        viewBox="0 0 100 100"
        style={{
          position: 'absolute',
          top: '-6px',
          left: '40px',
          zIndex: 1,
          opacity: 0.9,
          pointerEvents: 'none',
        }}
      >
        <g stroke="#8B7D72" strokeWidth="1" fill="#FFFDF9">
          <path d="M 50 50 Q 42 75 35 100" stroke="#7A8B72" strokeWidth="2.5" fill="none" />
          <path d="M 46 68 Q 30 62 38 52 C 43 56 46 64 46 68" fill="#8B9F82" stroke="#7A8B72" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(0 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(30 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(60 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(90 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(120 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(150 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(180 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(210 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(240 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(270 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(300 50 50)" fill="#FFF8F0" />
          <ellipse cx="50" cy="22" rx="7" ry="16" transform="rotate(330 50 50)" fill="#FFF8F0" />
          <circle cx="50" cy="50" r="10" fill="#E8B854" stroke="#C49632" strokeWidth="1.5" />
        </g>
      </svg>

      {/* 2. Doodle Bee */}
      <div
        style={{
          position: 'absolute',
          top: '26px',
          left: '10px',
          fontSize: '1.25rem',
          transform: 'rotate(-12deg)',
          zIndex: 4,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))',
          pointerEvents: 'none',
        }}
      >
        🐝
      </div>

      {/* 3. Tilted Polaroid 1 (Couple / Friends with sparklers) */}
      <div
        style={{
          position: 'absolute',
          top: '4px',
          left: '100px',
          backgroundColor: '#FFFFFF',
          padding: '6px 6px 18px 6px',
          borderRadius: '3px',
          boxShadow: '0 6px 18px rgba(40, 30, 25, 0.12), 0 2px 5px rgba(40, 30, 25, 0.06)',
          transform: 'rotate(-4deg)',
          zIndex: 2,
          width: '104px',
          transition: 'transform 0.2s ease',
        }}
      >
        <div style={{ width: '92px', height: '82px', overflow: 'hidden', backgroundColor: '#F3EFEA' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero_polaroid_couple.png"
            alt="Friends"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* 4. Tilted Polaroid 2 (Brunette smiling in golden hour sunset) */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '175px',
          backgroundColor: '#FFFFFF',
          padding: '6px 6px 20px 6px',
          borderRadius: '3px',
          boxShadow: '0 8px 22px rgba(40, 30, 25, 0.14), 0 2px 6px rgba(40, 30, 25, 0.08)',
          transform: 'rotate(3.5deg)',
          zIndex: 3,
          width: '108px',
          transition: 'transform 0.2s ease',
        }}
      >
        <div style={{ width: '96px', height: '86px', overflow: 'hidden', backgroundColor: '#F3EFEA' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero_polaroid_girl.png"
            alt="Golden hour smile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* 5. Tilted Paper Note: "Different designs. Same beautiful feelings. ♡" */}
      <div
        style={{
          position: 'absolute',
          top: '52px',
          left: '80px',
          backgroundColor: '#FFFDF9',
          border: '1px solid #EADBD3',
          padding: '8px 12px 7px 12px',
          borderRadius: '3px',
          boxShadow: '0 6px 16px rgba(40, 30, 25, 0.08)',
          transform: 'rotate(-2deg)',
          zIndex: 5,
          maxWidth: '135px',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '0.98rem',
            lineHeight: 1.25,
            color: '#4A3E39',
            margin: 0,
            whiteSpace: 'nowrap',
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
            fontSize: '0.92rem',
            marginTop: '1px',
          }}
        >
          ♡
        </span>
      </div>

      {/* 6. Sparkle Star Doodle */}
      <span
        style={{
          position: 'absolute',
          top: '20px',
          left: '295px',
          color: '#81746D',
          fontSize: '1.15rem',
          zIndex: 4,
          opacity: 0.8,
          pointerEvents: 'none',
        }}
      >
        ✦
      </span>

      {/* 7. Coral Heart Doodle */}
      <span
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '300px',
          color: '#F28F91',
          fontSize: '1.35rem',
          transform: 'rotate(12deg)',
          zIndex: 4,
          opacity: 0.9,
          pointerEvents: 'none',
        }}
      >
        ♡
      </span>

      {/* 8. Blush Torn-Paper Note with genuine texture & handwriting */}
      <div
        style={{
          position: 'absolute',
          right: '25px',
          top: '10px',
          backgroundColor: '#F5DCD5',
          padding: '20px 22px 18px 22px',
          borderRadius: '4px',
          boxShadow: '0 8px 24px rgba(40, 30, 25, 0.09)',
          transform: 'rotate(2deg)',
          zIndex: 3,
          maxWidth: '240px',
          border: '1px solid rgba(242, 143, 145, 0.35)',
          backgroundImage:
            'radial-gradient(rgba(242, 143, 145, 0.2) 1px, transparent 0)',
          backgroundSize: '16px 16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.25rem',
            lineHeight: 1.35,
            color: '#4A3E39',
            textAlign: 'center',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          Turn your memories into
          <br />
          a little corner of the internet
          <br />
          that feels just like them ♡
        </p>
      </div>

      {/* 9. Botanical Dried Wild Flower Branch SVG */}
      <svg
        width="80"
        height="150"
        viewBox="0 0 80 150"
        style={{
          position: 'absolute',
          top: '-4px',
          right: '-12px',
          zIndex: 2,
          pointerEvents: 'none',
          opacity: 0.92,
        }}
      >
        <g stroke="#7A8B72" strokeWidth="1.8" fill="none">
          <path d="M 40 145 Q 50 85 65 15" />
          <path d="M 47 105 Q 62 100 68 90 C 62 85 50 95 47 105" fill="#8B9F82" />
          <path d="M 44 105 Q 28 100 22 90 C 28 85 40 95 44 105" fill="#8B9F82" />
          <path d="M 52 68 Q 68 62 74 52 C 68 48 55 58 52 68" fill="#8B9F82" />
          <path d="M 50 68 Q 34 62 27 52 C 34 48 45 58 50 68" fill="#8B9F82" />
          <circle cx="65" cy="15" r="6" fill="#F4EDE4" stroke="#7A8B72" strokeWidth="1.2" />
          <circle cx="25" cy="35" r="4.5" fill="#F4EDE4" stroke="#7A8B72" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}
