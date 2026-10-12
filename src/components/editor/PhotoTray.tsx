'use client';

import React, { useRef, useState } from 'react';
import { PhotoItem } from '@/lib/templates/types';
import { UploadCloud, Trash2, Star, Sparkles, ArrowUp, ArrowDown, Crop, AlertCircle } from 'lucide-react';

function createPhotoId() {
  return `photo_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
}

interface PhotoTrayProps {
  photos: PhotoItem[];
  projectId?: string;
  onChange: (photos: PhotoItem[]) => void;
  onSetHero: (url: string) => void;
}

const PRESET_MEMORIES: Array<{ title: string; url: string; caption: string }> = [
  {
    title: 'Golden Hour Smile',
    url: '/memories/hero_portrait.jpg',
    caption: 'warmest golden hour glow',
  },
  {
    title: 'Coffee Date',
    url: '/memories/cozy_coffee.jpg',
    caption: 'morning talks & flat whites',
  },
  {
    title: 'Laughing Together',
    url: '/memories/friendship_picnic.jpg',
    caption: 'uncontrollable laughter',
  },
  {
    title: 'Flower Field',
    url: '/memories/wildflowers_note.jpg',
    caption: 'walking in the blooms',
  },
  {
    title: 'Film Candid',
    url: '/memories/anniversary_laugh.jpg',
    caption: 'unfiltered memory',
  },
  {
    title: 'Sunset Beach',
    url: '/memories/golden_beach.jpg',
    caption: 'golden hour ocean waves',
  },
  {
    title: 'Birthday Celebration',
    url: '/memories/birthday_cake.jpg',
    caption: 'birthday wish & candle glow',
  },
];

export function PhotoTray({ photos, projectId, onChange, onSetHero }: PhotoTrayProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploadError(null);

    const fileList = Array.from(files);

    for (const file of fileList) {
      if (!file.type.startsWith('image/')) {
        setUploadError('Only image files (JPG, PNG, WebP) are supported.');
        continue;
      }

      if (file.size > 10 * 1024 * 1024) {
        setUploadError(`"${file.name}" exceeds the 10MB limit.`);
        continue;
      }

      // If projectId exists, attempt real server upload
      if (projectId) {
        setIsUploading(true);
        try {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('caption', file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));

          const res = await fetch(`/api/projects/${projectId}/assets/upload`, {
            method: 'POST',
            body: formData,
          });

          if (res.ok) {
            const data = await res.json();
            const newPhoto: PhotoItem = {
              id: data.asset.id || createPhotoId(),
              url: data.asset.url,
              caption: data.asset.caption,
              aspect: 'portrait',
              isHero: photos.length === 0,
            };
            const updated = [...photos, newPhoto];
            onChange(updated);
            if (photos.length === 0) onSetHero(data.asset.url);
            setIsUploading(false);
            continue;
          }
        } catch {
          // Fall back to client data URL
        }
        setIsUploading(false);
      }

      // Local FileReader fallback
      const reader = new FileReader();
      reader.onload = (e) => {
        const resultUrl = e.target?.result as string;
        const newPhoto: PhotoItem = {
          id: createPhotoId(),
          url: resultUrl,
          caption: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          aspect: 'portrait',
          isHero: photos.length === 0,
        };

        const updated = [...photos, newPhoto];
        onChange(updated);
        if (photos.length === 0) {
          onSetHero(resultUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePresetAdd = (preset: { url: string; caption: string }) => {
    const newPhoto: PhotoItem = {
      id: createPhotoId(),
      url: preset.url,
      caption: preset.caption,
      aspect: 'portrait',
      isHero: photos.length === 0,
    };
    const updated = [...photos, newPhoto];
    onChange(updated);
    if (photos.length === 0) {
      onSetHero(preset.url);
    }
  };

  const handleDelete = (id: string) => {
    const updated = photos.filter((p) => p.id !== id);
    onChange(updated);
  };

  const handleCaptionChange = (id: string, newCaption: string) => {
    const updated = photos.map((p) =>
      p.id === id ? { ...p, caption: newCaption } : p
    );
    onChange(updated);
  };

  const handleAspectChange = (id: string, aspect: 'portrait' | 'landscape' | 'square') => {
    const updated = photos.map((p) =>
      p.id === id ? { ...p, aspect } : p
    );
    onChange(updated);
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= photos.length) return;
    const reordered = [...photos];
    const [moved] = reordered.splice(index, 1);
    reordered.splice(targetIndex, 0, moved);
    onChange(reordered);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Upload Error Banner */}
      {uploadError && (
        <div
          style={{
            backgroundColor: '#FDECEB',
            color: '#B94B3B',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <AlertCircle size={16} />
          <span>{uploadError}</span>
        </div>
      )}

      {/* Large Drop Zone: Tactile Neumorphic Inset Cushion */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => fileInputRef.current?.click()}
        style={{
          border: isDragging
            ? '2px dashed var(--accent-terracotta)'
            : '2px dashed rgba(200, 101, 82, 0.35)',
          backgroundColor: isDragging ? 'rgba(200, 101, 82, 0.08)' : 'rgba(255, 255, 255, 0.65)',
          boxShadow: 'var(--neumo-shadow-inset)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '30px 20px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          style={{ display: 'none' }}
          onChange={(e) => handleFiles(e.target.files)}
        />

        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            backgroundColor: 'rgba(200, 101, 82, 0.12)',
            color: 'var(--accent-terracotta)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: '0 4px 12px rgba(200, 101, 82, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
          }}
        >
          <UploadCloud size={26} />
        </div>

        <h4
          style={{
            fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
            fontSize: '1.25rem',
            color: 'var(--ink-primary)',
            fontWeight: 500,
            marginBottom: '4px',
          }}
        >
          {isUploading ? 'Uploading to memory vault...' : 'Bring your memories.'}
        </h4>
        <p style={{ fontSize: '0.82rem', color: 'var(--ink-secondary)', maxWidth: '280px', margin: '0 auto' }}>
          Drop photos here or tap to pick from device (max 10MB each).
        </p>
      </div>

      {/* Preset Inspiration Chips */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            color: 'var(--ink-secondary)',
            marginBottom: '10px',
          }}
        >
          <Sparkles size={14} color="var(--accent-terracotta)" />
          <span>Quick aesthetic presets for testing:</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {PRESET_MEMORIES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetAdd(preset)}
              className="glass-pill"
              style={{
                padding: '5px 12px',
                fontSize: '0.78rem',
                color: 'var(--ink-primary)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 500,
              }}
            >
              + {preset.title}
            </button>
          ))}
        </div>
      </div>

      {/* Uploaded Photos Grid */}
      {photos.length > 0 && (
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
            Photos in this gift ({photos.length})
          </h5>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="glass-card"
                style={{
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: 'rgba(235, 227, 218, 0.8)',
                      position: 'relative',
                      boxShadow: 'var(--neumo-shadow-card)',
                      border: '1px solid rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt={photo.caption || 'Memory'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    {photo.isHero && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: 'var(--accent-amber)',
                          color: '#FFFFFF',
                          fontSize: '0.6rem',
                          textAlign: 'center',
                          padding: '1px 0',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                        }}
                      >
                        HERO
                      </span>
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      className="glass-input"
                      value={photo.caption || ''}
                      placeholder="Add a handwritten caption..."
                      onChange={(e) => handleCaptionChange(photo.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        fontSize: '0.92rem',
                        fontFamily: 'var(--font-hand)',
                      }}
                    />
                  </div>

                  {/* Actions: Move Up, Move Down, Set Hero, Delete */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => handleMove(idx, 'up')}
                      title="Move Up"
                      style={{
                        color: idx === 0 ? 'rgba(160, 145, 135, 0.35)' : 'var(--ink-secondary)',
                        padding: '5px',
                        border: 'none',
                        background: 'transparent',
                        cursor: idx === 0 ? 'default' : 'pointer',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      <ArrowUp size={15} />
                    </button>
                    <button
                      type="button"
                      disabled={idx === photos.length - 1}
                      onClick={() => handleMove(idx, 'down')}
                      title="Move Down"
                      style={{
                        color: idx === photos.length - 1 ? 'rgba(160, 145, 135, 0.35)' : 'var(--ink-secondary)',
                        padding: '5px',
                        border: 'none',
                        background: 'transparent',
                        cursor: idx === photos.length - 1 ? 'default' : 'pointer',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      <ArrowDown size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onSetHero(photo.url)}
                      title="Set as Hero cover photo"
                      style={{
                        color: photo.isHero ? 'var(--accent-amber)' : 'rgba(160, 145, 135, 0.6)',
                        padding: '5px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      <Star size={16} fill={photo.isHero ? 'var(--accent-amber)' : 'none'} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(photo.id)}
                      title="Remove this photo"
                      style={{
                        color: 'rgba(160, 145, 135, 0.6)',
                        padding: '5px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Aspect ratio control */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--ink-secondary)' }}>
                  <span style={{ fontWeight: 500 }}>Ratio:</span>
                  {(['portrait', 'landscape', 'square'] as const).map((asp) => {
                    const isSelected = (photo.aspect || 'portrait') === asp;
                    return (
                      <button
                        key={asp}
                        type="button"
                        onClick={() => handleAspectChange(photo.id, asp)}
                        className={isSelected ? '' : 'glass-pill'}
                        style={{
                          padding: '3px 10px',
                          borderRadius: '999px',
                          border: isSelected ? '1px solid rgba(255, 255, 255, 0.9)' : undefined,
                          backgroundColor: isSelected ? 'var(--accent-terracotta)' : undefined,
                          color: isSelected ? '#FFFFFF' : 'var(--ink-secondary)',
                          boxShadow: isSelected ? 'var(--neumo-shadow-cta)' : undefined,
                          fontSize: '0.74rem',
                          fontWeight: isSelected ? 600 : 500,
                          cursor: 'pointer',
                          textTransform: 'capitalize',
                          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        {asp}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
