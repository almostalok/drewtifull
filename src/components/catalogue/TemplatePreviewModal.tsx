'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { CatalogueTemplateItem } from './types';

interface TemplatePreviewModalProps {
  template: CatalogueTemplateItem | null;
  onClose: () => void;
}

const THUMBNAIL_MAP: Record<string, string> = {
  'soft-garden': '/templates/soft_garden.jpg',
  'film-diary': '/templates/film_diary.jpg',
  'scrapbook-birthday': '/templates/scrapbook_birthday.jpg',
  'minimal-editorial': '/templates/minimal_editorial.jpg',
  'cute-and-cozy': '/templates/cute_cozy.jpg',
  'vintage-newspaper': '/templates/vintage_newspaper.jpg',
  'dreamy-night': '/templates/dreamy_night.jpg',
  'polaroid-wall': '/templates/polaroid_wall.jpg',
  'pink-y2k': '/templates/pink_y2k.jpg',
  'book-letter': '/templates/book_letter.jpg',
};

export function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (template) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [template, onClose]);

  if (!template) return null;

  const imgSrc =
    THUMBNAIL_MAP[template.id] ||
    `/templates/${template.id.replace(/-/g, '_')}.jpg`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(37, 32, 29, 0.48)',
        backdropFilter: 'blur(16px) saturate(140%)',
        WebkitBackdropFilter: 'blur(16px) saturate(140%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.22s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-modal"
        style={{
          maxWidth: '540px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '92vh',
          animation: 'scaleUp 0.24s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '18px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.45)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: 'var(--ink-primary)',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {template.fullName}
              </h2>
              <span
                className="glass-badge"
                style={{
                  fontSize: '0.74rem',
                  color: 'var(--accent-terracotta)',
                  padding: '3px 10px',
                  fontWeight: 600,
                }}
              >
                Birthday
              </span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.84rem', color: 'var(--ink-muted)' }}>
              {template.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="glass-icon-btn"
            style={{
              width: '34px',
              height: '34px',
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Preview Body */}
        <div
          style={{
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            background: 'rgba(240, 234, 226, 0.35)',
          }}
        >
          {/* Card preview image in crisp large view with soft depth */}
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '184 / 170',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--neumo-shadow-card)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              backgroundColor: '#FFFFFF',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={template.fullName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Tags list with Frosted Glass Badges */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {template.tags.map((t) => (
              <span
                key={t}
                className="glass-badge"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--ink-secondary)',
                  padding: '4px 12px',
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <Link
            href={`/templates/birthday/${template.id}`}
            className="glass-pill"
            style={{
              padding: '8px 18px',
              fontSize: '0.86rem',
              textDecoration: 'none',
            }}
          >
            <span>Live demo</span>
            <ExternalLink size={13} />
          </Link>

          <Link
            href={`/create?template=${template.id}&occasion=${template.occasion}`}
            className="glass-cta"
            style={{
              padding: '10px 24px',
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            <span>Use this template</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
