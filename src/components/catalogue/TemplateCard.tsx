'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { CatalogueTemplateItem } from './types';

interface TemplateCardProps {
  template: CatalogueTemplateItem;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenPreview: (template: CatalogueTemplateItem) => void;
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

export function TemplateCard({
  template,
  isFavorited,
  onToggleFavorite,
  onOpenPreview,
}: TemplateCardProps) {
  const imgSrc =
    THUMBNAIL_MAP[template.id] ||
    `/templates/${template.id.replace(/-/g, '_')}.jpg`;

  return (
    <article
      className="glass-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* 1. Large Visual Template Preview Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '184 / 170',
          backgroundColor: 'rgba(235, 227, 218, 0.45)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.65)',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        onClick={() => onOpenPreview(template)}
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
            transition: 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
          loading="eager"
        />

        {/* 2. Floating Tactile Favorite Heart Button in Neumo-Glass Cushion */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(template.id);
          }}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          className="glass-icon-btn"
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 10,
            width: '30px',
            height: '30px',
            boxShadow: '0 3px 10px rgba(165, 150, 136, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
          }}
        >
          <Heart
            size={14}
            color={isFavorited ? 'var(--accent-terracotta)' : 'var(--ink-secondary)'}
            fill={isFavorited ? 'var(--accent-terracotta)' : 'none'}
            strokeWidth={isFavorited ? 2.5 : 1.6}
          />
        </button>
      </div>

      {/* Card Body: Info and Actions */}
      <div
        style={{
          padding: '10px 12px 12px 12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <div>
          {/* 3. Template Number and Name in Non-AI Editorial Serif */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.98rem',
              fontWeight: 600,
              color: 'var(--ink-primary)',
              margin: '0 0 3px 0',
              letterSpacing: '-0.01em',
              lineHeight: 1.25,
            }}
          >
            {template.fullName}
          </h3>

          {/* 4. One-line Description */}
          <p
            style={{
              fontSize: '0.74rem',
              color: 'var(--ink-muted)',
              margin: '0 0 6px 0',
              lineHeight: 1.3,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={template.description}
          >
            {template.description}
          </p>

          {/* 5. Small Style Tags with Frosted Glass Badge */}
          <div
            style={{
              display: 'flex',
              gap: '4px',
              flexWrap: 'wrap',
              marginBottom: '10px',
            }}
          >
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="glass-badge"
                style={{
                  fontSize: '0.67rem',
                  color: 'var(--ink-secondary)',
                  padding: '2px 8px',
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Action Buttons: Preview & Use this template */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: 'auto',
          }}
        >
          {/* Secondary "Preview" Button */}
          <button
            type="button"
            onClick={() => onOpenPreview(template)}
            className="glass-pill"
            style={{
              flex: '1 1 0',
              padding: '6px 0',
              fontSize: '0.75rem',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Preview
          </button>

          {/* Primary "Use this template →" Button in Terracotta Glass CTA */}
          <Link
            href={`/create?template=${template.id}&occasion=${template.occasion}`}
            className="glass-cta"
            style={{
              flex: '1.45 1 0',
              padding: '6px 0',
              fontSize: '0.75rem',
              textDecoration: 'none',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <span>Use template</span>
            <span style={{ fontSize: '0.84rem' }}>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
