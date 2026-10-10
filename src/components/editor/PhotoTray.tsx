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
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    caption: 'warmest golden hour glow',
  },
  {
    title: 'Coffee Date',
    url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    caption: 'morning talks & flat whites',
  },
  {
    title: 'Laughing Together',
    url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    caption: 'uncontrollable laughter',
  },
  {
    title: 'Flower Field',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
    caption: 'walking in the blooms',
  },
  {
    title: 'Film Candid',
    url: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80',
    caption: 'unfiltered memory',
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

      {/* Large Drop Zone */}
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
            ? '2px dashed #C97A6E'
            : '2px dashed rgba(60, 45, 35, 0.2)',
          backgroundColor: isDragging ? '#FDF4F2' : '#FFFFFF',
          borderRadius: '14px',
          padding: '28px 18px',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
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
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#F9EBE8',
            color: '#C97A6E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto',
          }}
        >
          <UploadCloud size={24} />
        </div>

        <h4
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            color: '#2A2421',
            fontWeight: 500,
            marginBottom: '4px',
          }}
        >
          {isUploading ? 'Uploading to memory vault...' : 'Bring your memories.'}
        </h4>
        <p style={{ fontSize: '0.82rem', color: '#8A8077', maxWidth: '280px', margin: '0 auto' }}>
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
            color: '#8A8077',
            marginBottom: '8px',
          }}
        >
          <Sparkles size={14} color="#C97A6E" />
          <span>Quick aesthetic presets for testing:</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {PRESET_MEMORIES.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handlePresetAdd(preset)}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(60, 45, 35, 0.12)',
                borderRadius: '999px',
                padding: '4px 10px',
                fontSize: '0.78rem',
                color: '#4A423B',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
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
              color: '#8A8077',
              marginBottom: '10px',
            }}
          >
            Photos in this gift ({photos.length})
          </h5>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(60, 45, 35, 0.1)',
                  borderRadius: '10px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: '#F3EFEA',
                      position: 'relative',
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
                          backgroundColor: '#B9863B',
                          color: '#FFFFFF',
                          fontSize: '0.6rem',
                          textAlign: 'center',
                          padding: '1px 0',
                          fontWeight: 600,
                        }}
                      >
                        HERO
                      </span>
                    )}
                  </div>

                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      value={photo.caption || ''}
                      placeholder="Add a handwritten caption..."
                      onChange={(e) => handleCaptionChange(photo.id, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 10px',
                        border: '1px solid rgba(60, 45, 35, 0.12)',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-hand)',
                        color: '#2A2421',
                        backgroundColor: '#FAF7F2',
                      }}
                    />
                  </div>

                  {/* Actions: Move Up, Move Down, Set Hero, Delete */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => handleMove(idx, 'up')}
                      title="Move Up"
                      style={{
                        color: idx === 0 ? '#D6D0CA' : '#544D47',
                        padding: '4px',
                        border: 'none',
                        background: 'transparent',
                        cursor: idx === 0 ? 'default' : 'pointer',
                      }}
                    >
                      <ArrowUp size={14} />
                    </button>
                    <button
                      type="button"
                      disabled={idx === photos.length - 1}
                      onClick={() => handleMove(idx, 'down')}
                      title="Move Down"
                      style={{
                        color: idx === photos.length - 1 ? '#D6D0CA' : '#544D47',
                        padding: '4px',
                        border: 'none',
                        background: 'transparent',
                        cursor: idx === photos.length - 1 ? 'default' : 'pointer',
                      }}
                    >
                      <ArrowDown size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onSetHero(photo.url)}
                      title="Set as Hero cover photo"
                      style={{
                        color: photo.isHero ? '#B9863B' : '#B5ACA4',
                        padding: '4px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <Star size={16} fill={photo.isHero ? '#B9863B' : 'none'} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(photo.id)}
                      title="Remove this photo"
                      style={{
                        color: '#B5ACA4',
                        padding: '4px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Aspect ratio control */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#8A8077' }}>
                  <span>Ratio:</span>
                  {(['portrait', 'landscape', 'square'] as const).map((asp) => (
                    <button
                      key={asp}
                      type="button"
                      onClick={() => handleAspectChange(photo.id, asp)}
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid',
                        borderColor: (photo.aspect || 'portrait') === asp ? '#2A2421' : 'rgba(60, 45, 35, 0.12)',
                        backgroundColor: (photo.aspect || 'portrait') === asp ? '#2A2421' : '#FFFFFF',
                        color: (photo.aspect || 'portrait') === asp ? '#FFFFFF' : '#6E655E',
                        fontSize: '0.72rem',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                      }}
                    >
                      {asp}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
