'use client';

import React, { useState } from 'react';
import { WashiTape } from './WashiTape';

interface PolaroidFrameProps {
  url: string;
  caption?: string;
  date?: string;
  rotation?: number;
  washiColor?: 'rose' | 'sage' | 'gold' | 'neutral';
  aspect?: 'portrait' | 'landscape' | 'square';
  className?: string;
  onClick?: () => void;
}

export function PolaroidFrame({
  url,
  caption,
  date,
  rotation = 0,
  washiColor = 'rose',
  aspect = 'portrait',
  className = '',
  onClick,
}: PolaroidFrameProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const aspectHeights = {
    portrait: '320px',
    landscape: '220px',
    square: '260px',
  };

  return (
    <div
      onClick={onClick}
      className={`polaroid-container ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        display: 'inline-block',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease',
      }}
    >
      {/* Washi Tape on top edge */}
      <WashiTape
        color={washiColor}
        rotation={rotation > 0 ? -1 : 2}
        width="80px"
        style={{
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div
        style={{
          backgroundColor: '#FFFFFF',
          padding: '12px 12px 28px 12px',
          boxShadow: '0 8px 24px rgba(35, 25, 20, 0.12), 0 2px 6px rgba(35, 25, 20, 0.05)',
          borderRadius: '2px',
          width: '100%',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        {/* Photo Container */}
        <div
          style={{
            width: '100%',
            height: aspectHeights[aspect] || '280px',
            backgroundColor: '#F3EFEA',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Subtle placeholder while loading */}
          {!imageLoaded && !hasError && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#EBE4DB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                color: '#8C827A',
                fontFamily: 'var(--font-hand)',
              }}
            >
              remembering...
            </div>
          )}

          {/* Actual image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hasError ? 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80' : url}
            alt={caption || 'Memory photograph'}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setHasError(true);
              setImageLoaded(true);
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.4s ease',
            }}
          />
        </div>

        {/* Polaroid Footer */}
        {(caption || date) && (
          <div
            style={{
              marginTop: '12px',
              textAlign: 'center',
            }}
          >
            {caption && (
              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.25rem',
                  color: '#2A2421',
                  lineHeight: '1.2',
                }}
              >
                {caption}
              </p>
            )}
            {date && (
              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '0.95rem',
                  color: '#8A8077',
                  marginTop: '2px',
                }}
              >
                {date}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
