import React from 'react';

interface WashiTapeProps {
  color?: 'rose' | 'sage' | 'gold' | 'neutral';
  rotation?: number;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function WashiTape({
  color = 'neutral',
  rotation = -2,
  width = '100px',
  className = '',
  style = {},
}: WashiTapeProps) {
  const colorMap = {
    rose: 'rgba(244, 212, 205, 0.88)',
    sage: 'rgba(215, 228, 217, 0.88)',
    gold: 'rgba(246, 235, 204, 0.88)',
    neutral: 'rgba(235, 226, 215, 0.88)',
  };

  const borderPattern = {
    rose: 'rgba(215, 175, 166, 0.4)',
    sage: 'rgba(180, 200, 185, 0.4)',
    gold: 'rgba(215, 198, 155, 0.4)',
    neutral: 'rgba(205, 195, 180, 0.4)',
  };

  return (
    <div
      className={`washi-tape-strip ${className}`}
      style={{
        width,
        height: '22px',
        backgroundColor: colorMap[color],
        borderLeft: `2px dashed ${borderPattern[color]}`,
        borderRight: `2px dashed ${borderPattern[color]}`,
        boxShadow: '0 1px 3px rgba(30, 20, 15, 0.08)',
        transform: `rotate(${rotation}deg)`,
        position: 'absolute',
        zIndex: 10,
        pointerEvents: 'none',
        opacity: 0.95,
        ...style,
      }}
    />
  );
}
