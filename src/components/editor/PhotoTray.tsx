'use client';

import React, { useRef, useState } from 'react';
import { PhotoItem } from '@/lib/templates/types';
import { UploadCloud, Trash2, Star, Sparkles, Image as ImageIcon } from 'lucide-react';

interface PhotoTrayProps {
  photos: PhotoItem[];
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

export function PhotoTray({ photos, onChange, onSetHero }: PhotoTrayProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const resultUrl = e.target?.result as string;
        const newPhoto: PhotoItem = {
          id: `photo_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
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
    });
  };

  const handlePresetAdd = (preset: { url: string; caption: string }) => {
    const newPhoto: PhotoItem = {
      id: `photo_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
          accept="image/*"
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
          Bring your memories.
        </h4>
        <p style={{ fontSize: '0.82rem', color: '#8A8077', maxWidth: '280px', margin: '0 auto' }}>
          Drop your favorite photos here or tap to select from device. We will automatically arrange them.
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(60, 45, 35, 0.1)',
                  borderRadius: '8px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    backgroundColor: '#F3EFEA',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.url}
                    alt={photo.caption || 'Memory'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <input
                    type="text"
                    value={photo.caption || ''}
                    placeholder="Add a handwritten caption..."
                    onChange={(e) => handleCaptionChange(photo.id, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '4px 8px',
                      border: '1px solid rgba(60, 45, 35, 0.12)',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-hand)',
                      color: '#2A2421',
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => onSetHero(photo.url)}
                  title="Make this the Hero cover photo"
                  style={{
                    color: photo.isHero ? '#B9863B' : '#B5ACA4',
                    padding: '6px',
                  }}
                >
                  <Star size={16} fill={photo.isHero ? '#B9863B' : 'none'} />
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(photo.id)}
                  title="Remove this photo"
                  style={{ color: '#B5ACA4', padding: '6px' }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
