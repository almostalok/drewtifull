'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { MusicTrack } from '@/lib/templates/types';

interface AudioPlayerProps {
  track?: MusicTrack | null;
  autoPlayPrompt?: boolean;
  className?: string;
  floating?: boolean;
}

export function AudioPlayer({
  track,
  autoPlayPrompt = false,
  className = '',
  floating = false,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!floating);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.warn('Audio playback was prevented:', e);
          setIsPlaying(false);
        });
    }
  };

  if (!track || !track.url) return null;

  return (
    <div
      className={`audio-player-wrapper ${className}`}
      style={
        floating
          ? {
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 900,
            }
          : {}
      }
    >
      <audio
        ref={audioRef}
        src={track.url}
        loop
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {floating ? (
        <div
          className="glass-panel"
          style={{
            borderRadius: '999px',
            boxShadow: 'var(--neumo-shadow-card), 0 12px 36px rgba(45, 36, 28, 0.12)',
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            border: '1px solid rgba(255, 255, 255, 0.85)',
          }}
        >
          <button
            onClick={togglePlay}
            className="glass-cta"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              cursor: 'pointer',
            }}
            title={isPlaying ? 'Pause music' : 'Play background melody'}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
          </button>

          <div
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
                fontSize: '0.96rem',
                fontWeight: 600,
                color: 'var(--ink-primary)',
                lineHeight: 1.15,
              }}
            >
              {track.title}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '0.9rem',
                color: 'var(--ink-secondary)',
              }}
            >
              {isPlaying ? '♫ playing quietly...' : '♫ tap to play soundtrack'}
            </p>
          </div>

          {/* Equalizer animation when playing */}
          {isPlaying && (
            <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '14px', marginLeft: '6px' }}>
              <div style={{ width: '3px', height: '100%', backgroundColor: 'var(--accent-terracotta)', borderRadius: '2px', animation: 'pulse 1.2s ease-in-out infinite' }} />
              <div style={{ width: '3px', height: '60%', backgroundColor: 'var(--accent-terracotta)', borderRadius: '2px', animation: 'pulse 0.8s ease-in-out infinite alternate' }} />
              <div style={{ width: '3px', height: '80%', backgroundColor: 'var(--accent-terracotta)', borderRadius: '2px', animation: 'pulse 1s ease-in-out infinite' }} />
            </div>
          )}
        </div>
      ) : (
        /* Inline Editor Player */
        <div
          className="glass-card"
          style={{
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={togglePlay}
              className="glass-cta"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
            </button>
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
                  fontWeight: 600,
                  fontSize: '0.94rem',
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
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{
                color: 'var(--ink-secondary)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                setIsMuted(false);
              }}
              style={{ width: '70px', accentColor: 'var(--accent-terracotta)', cursor: 'pointer' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
