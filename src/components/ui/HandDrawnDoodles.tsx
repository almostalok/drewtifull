'use client';

import React from 'react';

// ==========================================
// 1. CUTE BIRTHDAY CAKE DOODLE
// ==========================================
export function BirthdayCakeDoodle({
  size = 120,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 140 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', filter: 'drop-shadow(0 4px 12px rgba(230, 140, 160, 0.25))', ...style }}
    >
      {/* Plate / Stand */}
      <ellipse cx="70" cy="138" rx="52" ry="9" fill="#F8D7E0" stroke="#4A3B39" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 138 L56 148 C56 150 84 150 84 148 L80 138" fill="#F3BAC8" stroke="#4A3B39" strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="70" cy="149" rx="20" ry="4" fill="#ECA2B5" stroke="#4A3B39" strokeWidth="2" />

      {/* Bottom Cake Tier */}
      <path
        d="M26 100 C26 95 35 90 70 90 C105 90 114 95 114 100 L114 128 C114 135 95 138 70 138 C45 138 26 135 26 128 Z"
        fill="#CDE9F6"
        stroke="#4A3B39"
        strokeWidth="2.5"
      />
      {/* Frosting Drips on Bottom Tier */}
      <path
        d="M26 102 C32 110 38 102 44 112 C50 102 56 114 64 104 C72 114 80 104 88 112 C96 104 104 112 114 102 L114 96 C114 96 100 92 70 92 C40 92 26 96 26 96 Z"
        fill="#FFF9F5"
        stroke="#4A3B39"
        strokeWidth="2"
      />

      {/* Sprinkles on Bottom Tier */}
      <circle cx="42" cy="118" r="2" fill="#F6A3B6" />
      <circle cx="60" cy="122" r="2" fill="#FAD02C" />
      <circle cx="78" cy="119" r="2" fill="#78C694" />
      <circle cx="96" cy="121" r="2" fill="#F6A3B6" />
      <path d="M50 114 L54 116" stroke="#E26D82" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 125 L73 122" stroke="#4E9FDF" strokeWidth="2" strokeLinecap="round" />
      <path d="M88 114 L91 117" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" />

      {/* Top Cake Tier */}
      <path
        d="M38 68 C38 64 48 60 70 60 C92 60 102 64 102 68 L102 92 C102 96 88 99 70 99 C52 99 38 96 38 92 Z"
        fill="#FFE5EC"
        stroke="#4A3B39"
        strokeWidth="2.5"
      />
      {/* Frosting Cream on Top Tier */}
      <path
        d="M38 72 C44 78 50 72 56 80 C62 72 68 81 74 73 C80 81 86 72 92 80 C97 73 100 76 102 72 L102 67 C95 62 85 61 70 61 C55 61 45 62 38 67 Z"
        fill="#FFFFFF"
        stroke="#4A3B39"
        strokeWidth="2"
      />
      {/* Decorative Swirl dollops */}
      <path d="M42 63 C42 60 48 58 50 62" stroke="#F6A3B6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M68 62 C68 58 74 58 74 62" stroke="#F6A3B6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M90 63 C90 60 96 58 98 62" stroke="#F6A3B6" strokeWidth="2.5" strokeLinecap="round" />

      {/* Candles */}
      {/* Left Candle */}
      <rect x="49" y="36" width="6" height="24" rx="2" fill="#BEE3F8" stroke="#4A3B39" strokeWidth="2" />
      <path d="M49 42 L55 45" stroke="#3182CE" strokeWidth="1.5" />
      <path d="M49 49 L55 52" stroke="#3182CE" strokeWidth="1.5" />
      {/* Left Wick & Flame */}
      <path d="M52 36 L52 31" stroke="#4A3B39" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M52 31 C50 27 50 22 52 18 C54 22 54 27 52 31 Z" fill="#FAD02C" stroke="#E2841A" strokeWidth="1.5" />
      <circle cx="52" cy="25" r="2" fill="#FFF" />

      {/* Center Candle */}
      <rect x="67" y="30" width="6" height="30" rx="2" fill="#FED7D7" stroke="#4A3B39" strokeWidth="2" />
      <path d="M67 38 L73 41" stroke="#E53E3E" strokeWidth="1.5" />
      <path d="M67 46 L73 49" stroke="#E53E3E" strokeWidth="1.5" />
      <path d="M67 53 L73 56" stroke="#E53E3E" strokeWidth="1.5" />
      {/* Center Wick & Flame */}
      <path d="M70 30 L70 24" stroke="#4A3B39" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M70 24 C67 19 67 12 70 8 C73 12 73 19 70 24 Z" fill="#FAD02C" stroke="#E2841A" strokeWidth="1.5" />
      <circle cx="70" cy="16" r="2.5" fill="#FFF" />

      {/* Right Candle */}
      <rect x="85" y="36" width="6" height="24" rx="2" fill="#C6F6D5" stroke="#4A3B39" strokeWidth="2" />
      <path d="M85 42 L91 45" stroke="#38A169" strokeWidth="1.5" />
      <path d="M85 49 L91 52" stroke="#38A169" strokeWidth="1.5" />
      {/* Right Wick & Flame */}
      <path d="M88 36 L88 31" stroke="#4A3B39" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M88 31 C86 27 86 22 88 18 C90 22 90 27 88 31 Z" fill="#FAD02C" stroke="#E2841A" strokeWidth="1.5" />
      <circle cx="88" cy="25" r="2" fill="#FFF" />

      {/* Sparkle Stars floating */}
      <path d="M22 45 L24 49 L28 50 L24 52 L22 56 L20 52 L16 50 L20 49 Z" fill="#FAD02C" stroke="#D69E2E" strokeWidth="1" />
      <path d="M118 42 L120 45 L123 46 L120 48 L118 51 L116 48 L113 46 L116 45 Z" fill="#FAD02C" stroke="#D69E2E" strokeWidth="1" />
    </svg>
  );
}

// ==========================================
// 2. CUTE PLUSH TEDDY BEAR DOODLE
// ==========================================
export function TeddyBearDoodle({
  size = 110,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.15}
      viewBox="0 0 120 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 4px 10px rgba(180, 110, 60, 0.2))', ...style }}
    >
      {/* Ears */}
      <circle cx="32" cy="30" r="14" fill="#D69E64" stroke="#4A3222" strokeWidth="2.5" />
      <circle cx="32" cy="30" r="8" fill="#F4C7A3" stroke="#4A3222" strokeWidth="1.5" />
      <circle cx="88" cy="30" r="14" fill="#D69E64" stroke="#4A3222" strokeWidth="2.5" />
      <circle cx="88" cy="30" r="8" fill="#F4C7A3" stroke="#4A3222" strokeWidth="1.5" />

      {/* Head */}
      <ellipse cx="60" cy="50" rx="36" ry="30" fill="#E2AC75" stroke="#4A3222" strokeWidth="2.5" />

      {/* Snout */}
      <ellipse cx="60" cy="56" rx="15" ry="11" fill="#FDE1C8" stroke="#4A3222" strokeWidth="2" />
      <path d="M55 52 C55 50 65 50 65 52 C65 56 60 58 60 58 C60 58 55 56 55 52 Z" fill="#4A3222" />
      <path d="M60 58 L60 63" stroke="#4A3222" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 62 C57 65 63 65 65 62" stroke="#4A3222" strokeWidth="2" strokeLinecap="round" />

      {/* Eyes & Blushing Cheeks */}
      <circle cx="46" cy="46" r="3.5" fill="#3A2518" />
      <circle cx="47" cy="44.5" r="1.2" fill="#FFFFFF" />
      <circle cx="74" cy="46" r="3.5" fill="#3A2518" />
      <circle cx="75" cy="44.5" r="1.2" fill="#FFFFFF" />
      <ellipse cx="40" cy="55" rx="5" ry="3" fill="#F6A5B6" opacity="0.75" />
      <ellipse cx="80" cy="55" rx="5" ry="3" fill="#F6A5B6" opacity="0.75" />

      {/* Body */}
      <path
        d="M38 74 C34 90 32 110 40 120 C48 126 72 126 80 120 C88 110 86 90 82 74 Z"
        fill="#D69E64"
        stroke="#4A3222"
        strokeWidth="2.5"
      />
      {/* Tummy */}
      <ellipse cx="60" cy="98" rx="16" ry="14" fill="#FCE3CC" stroke="#4A3222" strokeWidth="1.5" />

      {/* Paws / Feet */}
      <ellipse cx="32" cy="120" rx="12" ry="10" fill="#D69E64" stroke="#4A3222" strokeWidth="2.5" transform="rotate(-15 32 120)" />
      <circle cx="32" cy="120" r="5" fill="#F4C7A3" />
      <ellipse cx="88" cy="120" rx="12" ry="10" fill="#D69E64" stroke="#4A3222" strokeWidth="2.5" transform="rotate(15 88 120)" />
      <circle cx="88" cy="120" r="5" fill="#F4C7A3" />

      {/* Arms */}
      <path d="M34 76 C24 82 22 94 30 100 C34 100 38 94 40 86 Z" fill="#D69E64" stroke="#4A3222" strokeWidth="2.5" />
      <path d="M86 76 C96 82 98 94 90 100 C86 100 82 94 80 86 Z" fill="#D69E64" stroke="#4A3222" strokeWidth="2.5" />

      {/* Cute Bow Tie */}
      <path d="M50 72 L60 76 L50 80 Z" fill="#F8A5C2" stroke="#4A3222" strokeWidth="2" strokeLinejoin="round" />
      <path d="M70 72 L60 76 L70 80 Z" fill="#F8A5C2" stroke="#4A3222" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="60" cy="76" r="4" fill="#F472B6" stroke="#4A3222" strokeWidth="1.8" />
    </svg>
  );
}

// ==========================================
// 3. CUTE BUNNY RABBIT DOODLE
// ==========================================
export function BunnyDoodle({
  size = 100,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 110 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 4px 10px rgba(230, 160, 180, 0.2))', ...style }}
    >
      {/* Floppy Left Ear */}
      <path
        d="M40 42 C30 20 18 10 14 22 C10 34 26 46 36 50 Z"
        fill="#FFF7FA"
        stroke="#4A393E"
        strokeWidth="2.5"
      />
      <path d="M34 40 C27 26 21 20 18 26 C15 32 25 42 32 44 Z" fill="#FBCFE8" />

      {/* Floppy Right Ear */}
      <path
        d="M70 42 C80 20 92 10 96 22 C100 34 84 46 74 50 Z"
        fill="#FFF7FA"
        stroke="#4A393E"
        strokeWidth="2.5"
      />
      <path d="M76 40 C83 26 89 20 92 26 C95 32 85 42 78 44 Z" fill="#FBCFE8" />

      {/* Party Hat */}
      <path d="M48 38 L55 12 L62 38 Z" fill="#93C5FD" stroke="#4A393E" strokeWidth="2" strokeLinejoin="round" />
      <path d="M50 30 L59 34" stroke="#FDE047" strokeWidth="2" />
      <path d="M52 22 L57 25" stroke="#F472B6" strokeWidth="2" />
      <circle cx="55" cy="11" r="3.5" fill="#F472B6" stroke="#4A393E" strokeWidth="1.5" />

      {/* Bunny Head */}
      <ellipse cx="55" cy="62" rx="30" ry="26" fill="#FFF7FA" stroke="#4A393E" strokeWidth="2.5" />

      {/* Eyes & Nose */}
      <circle cx="44" cy="60" r="3" fill="#3D2930" />
      <circle cx="45" cy="59" r="1" fill="#FFF" />
      <circle cx="66" cy="60" r="3" fill="#3D2930" />
      <circle cx="67" cy="59" r="1" fill="#FFF" />
      <path d="M53 66 C53 64 57 64 57 66 C57 68 55 69 55 69 Z" fill="#F472B6" />
      <path d="M52 70 C53 72 57 72 58 70" stroke="#4A393E" strokeWidth="1.8" strokeLinecap="round" />

      {/* Rosy Cheeks */}
      <ellipse cx="38" cy="66" rx="5" ry="3" fill="#F472B6" opacity="0.6" />
      <ellipse cx="72" cy="66" rx="5" ry="3" fill="#F472B6" opacity="0.6" />

      {/* Body */}
      <path
        d="M36 84 C32 98 32 116 40 122 C48 126 62 126 70 122 C78 116 78 98 74 84 Z"
        fill="#FFF7FA"
        stroke="#4A393E"
        strokeWidth="2.5"
      />

      {/* Little Paws holding a Gift or Heart */}
      <path
        d="M55 92 C51 86 43 89 45 96 C48 102 55 106 55 106 C55 106 62 102 65 96 C67 89 59 86 55 92 Z"
        fill="#F43F5E"
        stroke="#4A393E"
        strokeWidth="2"
      />
      <circle cx="44" cy="94" r="5" fill="#FFF7FA" stroke="#4A393E" strokeWidth="1.8" />
      <circle cx="66" cy="94" r="5" fill="#FFF7FA" stroke="#4A393E" strokeWidth="1.8" />

      {/* Feet */}
      <ellipse cx="38" cy="122" rx="10" ry="6" fill="#FFF7FA" stroke="#4A393E" strokeWidth="2.2" />
      <ellipse cx="72" cy="122" rx="10" ry="6" fill="#FFF7FA" stroke="#4A393E" strokeWidth="2.2" />
    </svg>
  );
}

// ==========================================
// 4. CHERRIES DOODLE
// ==========================================
export function CherriesDoodle({
  size = 75,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 4px 8px rgba(220, 40, 70, 0.25))', ...style }}
    >
      {/* Green Leaf */}
      <path
        d="M52 24 C62 12 76 16 78 26 C68 34 54 30 52 24 Z"
        fill="#86EFAC"
        stroke="#2E623B"
        strokeWidth="2"
      />
      <path d="M54 24 C64 22 72 23 76 25" stroke="#2E623B" strokeWidth="1.5" />

      {/* Curved Stems */}
      <path
        d="M50 25 C42 36 32 50 28 60"
        stroke="#427A4E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M50 25 C54 38 58 50 62 62"
        stroke="#427A4E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="24" r="2.5" fill="#2E623B" />

      {/* Left Cherry */}
      <ellipse cx="28" cy="66" rx="15" ry="14" fill="#E11D48" stroke="#381017" strokeWidth="2.5" />
      <path d="M22 58 C25 55 30 55 32 58" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

      {/* Right Cherry */}
      <ellipse cx="64" cy="68" rx="16" ry="15" fill="#BE123C" stroke="#381017" strokeWidth="2.5" />
      <path d="M57 60 C61 56 67 56 70 60" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

// ==========================================
// 5. VINTAGE 35MM CAMERA DOODLE
// ==========================================
export function VintageCameraDoodle({
  size = 110,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 4px 10px rgba(40, 30, 25, 0.2))', ...style }}
    >
      {/* Shutter Button & Dial */}
      <rect x="22" y="10" width="12" height="6" rx="2" fill="#CBD5E1" stroke="#2B2625" strokeWidth="2" />
      <rect x="86" y="10" width="10" height="6" rx="2" fill="#CBD5E1" stroke="#2B2625" strokeWidth="2" />
      <path d="M48 16 L54 8 L66 8 L72 16 Z" fill="#E2E8F0" stroke="#2B2625" strokeWidth="2" strokeLinejoin="round" />

      {/* Camera Body */}
      <rect x="10" y="16" width="100" height="66" rx="8" fill="#F8FAFC" stroke="#2B2625" strokeWidth="2.5" />
      {/* Leatherette middle strip */}
      <rect x="10" y="32" width="100" height="38" fill="#334155" stroke="#2B2625" strokeWidth="2" />

      {/* Flash / Viewfinder Window */}
      <rect x="20" y="22" width="14" height="8" rx="2" fill="#FDE047" stroke="#2B2625" strokeWidth="1.8" />
      <circle cx="94" cy="26" r="4" fill="#94A3B8" stroke="#2B2625" strokeWidth="1.8" />

      {/* Center Lens */}
      <circle cx="60" cy="51" r="23" fill="#1E293B" stroke="#2B2625" strokeWidth="2.5" />
      <circle cx="60" cy="51" r="17" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
      <circle cx="60" cy="51" r="10" fill="#38BDF8" opacity="0.4" />
      <path d="M52 44 C56 40 64 40 68 44" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75" />

      {/* Little Flower in corner */}
      <circle cx="20" cy="72" r="2.5" fill="#FBBF24" />
      <circle cx="17" cy="70" r="2" fill="#FFF" />
      <circle cx="23" cy="70" r="2" fill="#FFF" />
      <circle cx="20" cy="67" r="2" fill="#FFF" />
    </svg>
  );
}

// ==========================================
// 6. Y2K DISCO BALL DOODLE
// ==========================================
export function DiscoBallDoodle({
  size = 100,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 6px 16px rgba(244, 114, 182, 0.4))', ...style }}
    >
      {/* Chain */}
      <line x1="50" y1="0" x2="50" y2="28" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="3 3" />
      <ellipse cx="50" cy="28" rx="6" ry="3" fill="#F472B6" stroke="#2B2625" strokeWidth="1.5" />

      {/* Mirrored Sphere */}
      <circle cx="50" cy="70" r="42" fill="#FDF2F8" stroke="#2B2625" strokeWidth="2.5" />

      {/* Mirror Facets Grid */}
      {/* Horizontal latitude lines */}
      <path d="M12 55 C24 60 76 60 88 55" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M8 70 C20 76 80 76 92 70" stroke="#CBD5E1" strokeWidth="1.8" />
      <path d="M12 85 C24 90 76 90 88 85" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M22 98 C34 102 66 102 78 98" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M22 42 C34 46 66 46 78 42" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Vertical facet lines */}
      <path d="M50 28 L50 112" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M35 32 C30 55 30 85 35 108" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M65 32 C70 55 70 85 65 108" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M22 42 C16 60 16 80 22 98" stroke="#CBD5E1" strokeWidth="1.5" />
      <path d="M78 42 C84 60 84 80 78 98" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* Holographic pink/silver shaded tiles */}
      <rect x="42" y="60" width="7" height="9" fill="#F472B6" opacity="0.75" />
      <rect x="52" y="71" width="8" height="9" fill="#A855F7" opacity="0.65" />
      <rect x="34" y="71" width="7" height="9" fill="#38BDF8" opacity="0.6" />
      <rect x="58" y="55" width="7" height="8" fill="#FDE047" opacity="0.7" />
      <rect x="44" y="80" width="8" height="8" fill="#F472B6" opacity="0.6" />

      {/* Sparkle Starburst Flares */}
      <path d="M24 38 L27 44 L33 46 L27 48 L24 54 L22 48 L16 46 L22 44 Z" fill="#FFF" stroke="#F472B6" strokeWidth="1" />
      <path d="M78 82 L81 87 L87 89 L81 91 L78 96 L76 91 L70 89 L76 87 Z" fill="#FFF" stroke="#38BDF8" strokeWidth="1" />
      <path d="M74 46 L76 50 L81 51 L76 52 L74 56 L72 52 L68 51 L72 50 Z" fill="#FFF" stroke="#FDE047" strokeWidth="0.8" />
    </svg>
  );
}

// ==========================================
// 7. Y2K HOLOGRAPHIC BUTTERFLY DOODLE
// ==========================================
export function ButterflyDoodle({
  size = 80,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 100 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 4px 12px rgba(232, 121, 249, 0.3))', ...style }}
    >
      {/* Antennae */}
      <path d="M48 24 C44 14 36 10 32 14" stroke="#4A303A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="14" r="2" fill="#F472B6" />
      <path d="M52 24 C56 14 64 10 68 14" stroke="#4A303A" strokeWidth="2" strokeLinecap="round" />
      <circle cx="68" cy="14" r="2" fill="#F472B6" />

      {/* Left Upper Wing */}
      <path
        d="M48 34 C36 12 12 16 8 38 C6 50 26 56 46 44 Z"
        fill="#F5D0FE"
        stroke="#4A303A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="32" r="5" fill="#F472B6" opacity="0.8" />
      <circle cx="24" cy="32" r="2" fill="#FFF" />

      {/* Left Lower Wing */}
      <path
        d="M46 44 C26 50 16 68 30 76 C42 82 48 64 48 48 Z"
        fill="#DDD6FE"
        stroke="#4A303A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="64" r="3.5" fill="#38BDF8" opacity="0.8" />

      {/* Right Upper Wing */}
      <path
        d="M52 34 C64 12 88 16 92 38 C94 50 74 56 54 44 Z"
        fill="#F5D0FE"
        stroke="#4A303A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="76" cy="32" r="5" fill="#F472B6" opacity="0.8" />
      <circle cx="76" cy="32" r="2" fill="#FFF" />

      {/* Right Lower Wing */}
      <path
        d="M54 44 C74 50 84 68 70 76 C58 82 52 64 52 48 Z"
        fill="#DDD6FE"
        stroke="#4A303A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="68" cy="64" r="3.5" fill="#38BDF8" opacity="0.8" />

      {/* Butterfly Body */}
      <ellipse cx="50" cy="44" rx="4" ry="18" fill="#4A303A" stroke="#FCE7F3" strokeWidth="1" />
    </svg>
  );
}

// ==========================================
// 8. BOTANICAL DAISY & WILDFLOWER DOODLES
// ==========================================
export function DaisyDoodle({
  size = 50,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', ...style }}
    >
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="15"
          rx="5.5"
          ry="11"
          fill="#FFFDF9"
          stroke="#52433D"
          strokeWidth="1.8"
          transform={`rotate(${angle} 30 30)`}
        />
      ))}
      {/* Center Yellow Disc */}
      <circle cx="30" cy="30" r="9" fill="#FACC15" stroke="#52433D" strokeWidth="2" />
      <circle cx="28" cy="28" r="1.5" fill="#FFF" />
      <circle cx="32" cy="32" r="1" fill="#CA8A04" />
    </svg>
  );
}

export function FlowerSprigDoodle({
  size = 70,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 60 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', ...style }}
    >
      {/* Stem */}
      <path d="M26 74 C28 55 30 36 32 12" stroke="#4D7C0F" strokeWidth="2.2" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M28 54 C20 50 14 54 12 60 C20 62 26 58 28 54 Z" fill="#86EFAC" stroke="#3F6212" strokeWidth="1.6" />
      <path d="M30 42 C38 38 46 40 48 46 C42 49 34 46 30 42 Z" fill="#86EFAC" stroke="#3F6212" strokeWidth="1.6" />
      {/* Petals */}
      <circle cx="32" cy="12" r="5" fill="#F472B6" stroke="#4A2832" strokeWidth="1.5" />
      <circle cx="24" cy="18" r="4.5" fill="#FBCFE8" stroke="#4A2832" strokeWidth="1.5" />
      <circle cx="39" cy="18" r="4.5" fill="#FBCFE8" stroke="#4A2832" strokeWidth="1.5" />
      <circle cx="32" cy="24" r="4.5" fill="#F472B6" stroke="#4A2832" strokeWidth="1.5" />
      <circle cx="32" cy="18" r="3" fill="#FACC15" />
    </svg>
  );
}

// ==========================================
// 9. DREAMY NIGHT CRESCENT MOON & STARS
// ==========================================
export function CrescentMoonDoodle({
  size = 90,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 90 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(0 4px 14px rgba(250, 204, 21, 0.35))', ...style }}
    >
      {/* Moon Crescent */}
      <path
        d="M58 8 C30 8 16 34 22 62 C26 78 40 88 56 88 C44 82 36 68 36 50 C36 30 46 16 58 8 Z"
        fill="#FEF08A"
        stroke="#854D0E"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Serene Closed Sleeping Eye */}
      <path d="M28 46 C30 49 35 49 37 46" stroke="#713F12" strokeWidth="2" strokeLinecap="round" />
      {/* Blushing Cheek */}
      <ellipse cx="32" cy="53" rx="4" ry="2.5" fill="#F87171" opacity="0.75" />
      {/* Little Smile */}
      <path d="M36 56 C37 58 40 58 41 56" stroke="#713F12" strokeWidth="1.8" strokeLinecap="round" />

      {/* Cloud at the base */}
      <path
        d="M18 82 C14 82 10 86 12 90 C14 94 20 94 24 93 C26 96 32 96 36 94 C40 96 48 95 50 91 C52 86 48 82 44 82 C42 78 34 78 30 80 C26 78 20 78 18 82 Z"
        fill="#FFFFFF"
        stroke="#475569"
        strokeWidth="1.8"
      />

      {/* Twinkling star */}
      <path d="M68 28 L70 33 L75 35 L70 37 L68 42 L66 37 L61 35 L66 33 Z" fill="#FACC15" stroke="#A16207" strokeWidth="1" />
      <circle cx="78" cy="18" r="2" fill="#FDE047" />
    </svg>
  );
}

export function StarClusterDoodle({
  size = 60,
  color = '#FACC15',
  className = '',
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', ...style }}
    >
      {/* Large 8-point star */}
      <path
        d="M26 6 L28 18 L40 20 L28 22 L26 34 L24 22 L12 20 L24 18 Z"
        fill={color}
        stroke="#78350F"
        strokeWidth="1.2"
      />
      {/* Diagonal bursts */}
      <line x1="20" y1="14" x2="32" y2="26" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="26" x2="32" y2="14" stroke={color} strokeWidth="1.5" />

      {/* Smaller star */}
      <path d="M46 36 L48 42 L54 44 L48 46 L46 52 L44 46 L38 44 L44 42 Z" fill={color} stroke="#78350F" strokeWidth="1" />
      {/* Tiny sparkles */}
      <circle cx="16" cy="46" r="2" fill={color} />
      <circle cx="48" cy="14" r="1.5" fill={color} />
    </svg>
  );
}

// ==========================================
// 10. HANDDRAWN HEARTS, ARROWS & NOTES
// ==========================================
export function HanddrawnHeartDoodle({
  size = 28,
  color = '#F43F5E',
  className = '',
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
    >
      <path
        d="M16 26 C12 22 5 17 5 11 C5 7 8 4 12 4 C14.5 4 15.5 5.5 16 6.5 C16.5 5.5 17.5 4 20 4 C24 4 27 7 27 11 C27 17 20 22 16 26 Z"
        fill={color}
        stroke="#3B1822"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Cute shine highlight */}
      <path d="M8 9 C9 7 11 7 12 8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ScribbleArrowDoodle({
  width = 70,
  height = 40,
  color = '#B95B3B',
  direction = 'down-right',
  className = '',
  style = {},
}: {
  width?: number;
  height?: number;
  color?: string;
  direction?: 'down-right' | 'down-left' | 'up-right' | 'up-left';
  className?: string;
  style?: React.CSSProperties;
}) {
  const transform =
    direction === 'down-left'
      ? 'scaleX(-1)'
      : direction === 'up-right'
      ? 'scaleY(-1)'
      : direction === 'up-left'
      ? 'scale(-1, -1)'
      : 'none';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', transform, ...style }}
    >
      <path
        d="M6 10 C22 4 45 6 56 26"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M48 24 L57 27 L56 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UnderlineSwooshDoodle({
  width = 160,
  color = '#F472B6',
  className = '',
  style = {},
}: {
  width?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={width}
      height="18"
      viewBox="0 0 160 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'block', margin: '0 auto', ...style }}
    >
      <path
        d="M3 10 C35 15 95 16 155 5 C115 11 55 12 15 14"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ==========================================
// 11. REALISTIC BRASS PUSHPIN
// ==========================================
export function PushPinDoodle({
  size = 28,
  color = '#D97706',
  className = '',
  style = {},
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`handdrawn-doodle ${className}`}
      style={{ display: 'inline-block', filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))', ...style }}
    >
      {/* Needle point */}
      <line x1="16" y1="20" x2="22" y2="28" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pin Head */}
      <ellipse cx="14" cy="14" rx="8" ry="6" fill={color} stroke="#451A03" strokeWidth="1.8" />
      <ellipse cx="12" cy="13" rx="4" ry="2.5" fill="#FEF08A" opacity="0.6" />
      <ellipse cx="14" cy="18" rx="6" ry="3" fill="#B45309" stroke="#451A03" strokeWidth="1.5" />
    </svg>
  );
}

// ==========================================
// 12. 35MM FILM SPROCKETS BORDER
// ==========================================
export function FilmSprocketStrip({
  height = '100%',
  className = '',
  style = {},
}: {
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`film-sprocket-vertical ${className}`}
      style={{
        width: '32px',
        height,
        backgroundColor: '#0D0C0B',
        borderRight: '1px solid #222',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '12px 0',
        userSelect: 'none',
        ...style,
      }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          style={{
            width: '16px',
            height: '11px',
            backgroundColor: '#262422',
            borderRadius: '2px',
            border: '1px solid rgba(255,255,255,0.08)',
            margin: '8px 0',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
          }}
        />
      ))}
    </div>
  );
}
