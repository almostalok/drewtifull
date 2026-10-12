'use client';

import React from 'react';
import { Project, TemplateTheme, MusicTrack } from '@/lib/templates/types';
import { CURATED_MUSIC_TRACKS } from '@/lib/musicTracks';
import { AudioPlayer } from '@/components/ui/AudioPlayer';
import { Music, Palette, Check } from 'lucide-react';

interface StyleTabProps {
  project: Project;
  currentTheme: TemplateTheme;
  onChangeTheme: (themeOverride: Partial<TemplateTheme>) => void;
  onChangeMusic: (track: MusicTrack | null) => void;
}

const COLOR_PALETTES: Array<{
  name: string;
  id: string;
  theme: Partial<TemplateTheme>;
  previewColors: string[];
}> = [
  {
    name: 'Warm Cream & Rose',
    id: 'cream-rose',
    previewColors: ['#FAF7F2', '#C97A6E', '#2A2421'],
    theme: {
      background: '#FAF7F2',
      foreground: '#2A2421',
      accent: '#C97A6E',
      accentSoft: '#F9EBE8',
      paperTone: '#FDFBF7',
      cardBackground: '#FFFFFF',
      dark: false,
    },
  },
  {
    name: '35mm Film Grain',
    id: 'film-noir',
    previewColors: ['#161413', '#D4AF37', '#F4ECE1'],
    theme: {
      background: '#161413',
      foreground: '#F4ECE1',
      accent: '#D4AF37',
      accentSoft: '#2B2620',
      paperTone: '#221F1D',
      cardBackground: '#1C1A18',
      dark: true,
    },
  },
  {
    name: 'Linen & Terracotta',
    id: 'linen-terracotta',
    previewColors: ['#FAF5ED', '#B95B3B', '#231E1B'],
    theme: {
      background: '#FAF5ED',
      foreground: '#231E1B',
      accent: '#B95B3B',
      accentSoft: '#F6E5DE',
      paperTone: '#FFFFFF',
      cardBackground: '#FFFFFF',
      dark: false,
    },
  },
  {
    name: 'Celestial Midnight',
    id: 'midnight-stars',
    previewColors: ['#0D111A', '#F3D27E', '#E8ECF5'],
    theme: {
      background: '#0D111A',
      foreground: '#E8ECF5',
      accent: '#F3D27E',
      accentSoft: '#1F2738',
      paperTone: '#131926',
      cardBackground: '#131926',
      dark: true,
    },
  },
  {
    name: 'Sage Garden',
    id: 'sage-garden',
    previewColors: ['#FAF6EE', '#6E8774', '#262220'],
    theme: {
      background: '#FAF6EE',
      foreground: '#262220',
      accent: '#6E8774',
      accentSoft: '#E8F0EA',
      paperTone: '#FFFFFF',
      cardBackground: '#FFFFFF',
      dark: false,
    },
  },
];

export function StyleTab({
  project,
  currentTheme,
  onChangeTheme,
  onChangeMusic,
}: StyleTabProps) {
  const currentMusicId = project.musicTrack?.id;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Palette Selector */}
      <div>
        <h5
          style={{
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--ink-secondary)',
            marginBottom: '12px',
            fontWeight: 600,
          }}
        >
          Color Atmosphere
        </h5>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
          {COLOR_PALETTES.map((palette) => {
            const isSelected =
              currentTheme.background === palette.theme.background &&
              currentTheme.accent === palette.theme.accent;

            return (
              <button
                key={palette.id}
                type="button"
                onClick={() => onChangeTheme(palette.theme)}
                className="glass-card"
                style={{
                  border: isSelected
                    ? '2px solid var(--accent-terracotta)'
                    : undefined,
                  boxShadow: isSelected ? 'var(--neumo-shadow-card), 0 0 0 1px var(--accent-terracotta)' : undefined,
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {palette.previewColors.map((col, idx) => (
                      <span
                        key={idx}
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: col,
                          border: '1.5px solid rgba(255,255,255,0.8)',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.12)',
                          display: 'inline-block',
                        }}
                      />
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
                      fontSize: '1.02rem',
                      fontWeight: 600,
                      color: 'var(--ink-primary)',
                    }}
                  >
                    {palette.name}
                  </span>
                </div>

                {isSelected && (
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(200, 101, 82, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={16} color="var(--accent-terracotta)" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Music Selector */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '10px',
          }}
        >
          <Music size={15} color="var(--accent-terracotta)" />
          <h5
            style={{
              fontSize: '0.82rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--ink-secondary)',
              fontWeight: 600,
            }}
          >
            Background Soundtrack
          </h5>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', marginBottom: '14px' }}>
          When they open your gift, a discreet music badge allows them to play this ambient melody.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {CURATED_MUSIC_TRACKS.map((track) => {
            const isSelected = currentMusicId === track.id;

            return (
              <div
                key={track.id}
                className="glass-card"
                style={{
                  border: isSelected
                    ? '1.5px solid var(--accent-terracotta)'
                    : undefined,
                  boxShadow: isSelected ? 'var(--neumo-shadow-card)' : undefined,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <div
                  onClick={() => onChangeMusic(track)}
                  style={{ cursor: 'pointer', flex: 1 }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      color: 'var(--ink-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {track.title}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ink-secondary)' }}>
                    {track.artist} · {track.genre}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onChangeMusic(isSelected ? null : track)}
                  className={isSelected ? 'glass-cta' : 'glass-pill'}
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {isSelected ? 'Active ♡' : 'Select'}
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => onChangeMusic(null)}
            style={{
              padding: '10px',
              fontSize: '0.82rem',
              color: 'var(--ink-secondary)',
              textAlign: 'center',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              textDecoration: 'underline',
            }}
          >
            No background music
          </button>
        </div>

        {/* Current Track Inline Player */}
        {project.musicTrack && (
          <div style={{ marginTop: '14px' }}>
            <AudioPlayer track={project.musicTrack} floating={false} />
          </div>
        )}
      </div>
    </div>
  );
}
