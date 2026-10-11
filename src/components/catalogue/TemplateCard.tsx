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
      style={{
        backgroundColor: '#FFFCF9',
        border: '1px solid #EADBD3',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 6px rgba(41, 35, 33, 0.04)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(41, 35, 33, 0.09)';
        e.currentTarget.style.borderColor = '#DBCAC0';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(41, 35, 33, 0.04)';
        e.currentTarget.style.borderColor = '#EADBD3';
      }}
    >
      {/* 1. Large Visual Template Preview Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '184 / 170',
          backgroundColor: '#F5ECE5',
          borderBottom: '1px solid #EADBD3',
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
            transition: 'transform 0.3s ease',
          }}
          loading="eager"
        />

        {/* 2. Floating Favorite Heart Button precisely aligned with reference badge */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(template.id);
          }}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          style={{
            position: 'absolute',
            top: '7px',
            right: '7px',
            zIndex: 10,
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(234, 219, 211, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(41, 35, 33, 0.12)',
            transition: 'transform 0.15s ease, background-color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <Heart
            size={13}
            color={isFavorited ? '#F28F91' : '#292321'}
            fill={isFavorited ? '#F28F91' : 'none'}
            strokeWidth={isFavorited ? 2.5 : 1.6}
          />
        </button>
      </div>

      {/* Card Body: Info and Actions */}
      <div
        style={{
          padding: '8px 10px 10px 10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <div>
          {/* 3. Template Number and Name */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: '#292321',
              margin: '0 0 2px 0',
              letterSpacing: '-0.01em',
              lineHeight: 1.25,
            }}
          >
            {template.fullName}
          </h3>

          {/* 4. One-line Description */}
          <p
            style={{
              fontSize: '0.72rem',
              color: '#81746D',
              margin: '0 0 5px 0',
              lineHeight: 1.25,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            title={template.description}
          >
            {template.description}
          </p>

          {/* 5. Small Style Tags */}
          <div
            style={{
              display: 'flex',
              gap: '4px',
              flexWrap: 'wrap',
              marginBottom: '8px',
            }}
          >
            {template.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.66rem',
                  backgroundColor: '#F8EEE6',
                  color: '#544D47',
                  padding: '1px 6px',
                  borderRadius: '999px',
                  fontWeight: 400,
                  lineHeight: 1.35,
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
            gap: '6px',
            marginTop: 'auto',
          }}
        >
          {/* Secondary "Preview" Button */}
          <button
            type="button"
            onClick={() => onOpenPreview(template)}
            style={{
              flex: '1 1 0',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EADBD3',
              borderRadius: '999px',
              padding: '5px 0',
              fontSize: '0.74rem',
              fontWeight: 500,
              color: '#292321',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F8EEE6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            Preview
          </button>

          {/* Primary "Use this template →" Button */}
          <Link
            href={`/create?template=${template.id}&occasion=${template.occasion}`}
            style={{
              flex: '1.45 1 0',
              backgroundColor: '#292321',
              border: '1px solid #292321',
              borderRadius: '999px',
              padding: '5px 0',
              fontSize: '0.74rem',
              fontWeight: 500,
              color: '#FFF8F2',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3px',
              transition: 'background-color 0.15s ease, transform 0.15s ease',
              boxShadow: '0 2px 6px rgba(41, 35, 33, 0.12)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4A3E39';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#292321';
            }}
          >
            <span>Use this template</span>
            <span style={{ fontSize: '0.84rem' }}>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
