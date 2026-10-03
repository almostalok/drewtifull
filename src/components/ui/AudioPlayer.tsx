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
          style={{
            backgroundColor: 'rgba(253, 251, 247, 0.94)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(60, 45, 35, 0.12)',
            borderRadius: '999px',
            boxShadow: '0 8px 30px rgba(35, 25, 20, 0.12)',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease',
          }}
        >
          <button
            onClick={togglePlay}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#C97A6E',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              boxShadow: '0 2px 8px rgba(201, 122, 110, 0.4)',
              transition: 'transform 0.2s ease',
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
                fontFamily: 'var(--font-serif)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#2A2421',
                lineHeight: 1.1,
              }}
            >
              {track.title}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '0.85rem',
                color: '#8A8077',
              }}
            >
              {isPlaying ? '♫ playing quietly...' : '♫ tap to play soundtrack'}
            </p>
          </div>

          {/* Equalizer animation when playing */}
          {isPlaying && (
            <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '14px', marginLeft: '4px' }}>
              <div style={{ width: '3px', height: '100%', backgroundColor: '#C97A6E', borderRadius: '1px', animation: 'pulseGlow 1.2s ease-in-out infinite' }} />
              <div style={{ width: '3px', height: '60%', backgroundColor: '#C97A6E', borderRadius: '1px', animation: 'pulseGlow 0.8s ease-in-out infinite alternate' }} />
              <div style={{ width: '3px', height: '80%', backgroundColor: '#C97A6E', borderRadius: '1px', animation: 'pulseGlow 1s ease-in-out infinite' }} />
            </div>
          )}
        </div>
      ) : (
        /* Inline Editor Player */
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(60, 45, 35, 0.1)',
            borderRadius: '12px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={togglePlay}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#2A2421',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
            </button>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.92rem', color: '#2A2421' }}>{track.title}</p>
              <p style={{ fontSize: '0.8rem', color: '#8A8077' }}>
                {track.artist} · {track.genre}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{ color: '#8A8077' }}
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
              style={{ width: '70px', accentColor: '#C97A6E' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
