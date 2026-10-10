'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { CatalogueTemplateItem } from './types';
import { TemplatePreviewRenderer } from './TemplatePreviews';

interface TemplateCardProps {
  template: CatalogueTemplateItem;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenPreview: (template: CatalogueTemplateItem) => void;
}

export function TemplateCard({
  template,
  isFavorited,
  onToggleFavorite,
  onOpenPreview,
}: TemplateCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#FFFCF9',
        border: '1px solid #EADBD3',
        borderRadius: '18px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(41, 35, 33, 0.04)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(41, 35, 33, 0.09)';
        e.currentTarget.style.borderColor = '#DBCAC0';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(41, 35, 33, 0.04)';
        e.currentTarget.style.borderColor = '#EADBD3';
      }}
    >
      {/* 1. Large Visual Template Preview Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 4.5',
          backgroundColor: '#F5ECE5',
          borderBottom: '1px solid #EADBD3',
          cursor: 'pointer',
        }}
        onClick={() => onOpenPreview(template)}
      >
        <TemplatePreviewRenderer templateId={template.id} />

        {/* 2. Floating Favorite Heart Button (Top Right) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(template.id);
          }}
          aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(234, 219, 211, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(41, 35, 33, 0.1)',
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
            size={16}
            color={isFavorited ? '#F28F91' : '#81746D'}
            fill={isFavorited ? '#F28F91' : 'none'}
            strokeWidth={isFavorited ? 2.5 : 1.8}
          />
        </button>
      </div>

      {/* Card Body: Info and Actions */}
      <div
        style={{
          padding: '16px 16px 18px 16px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        {/* Title & Description */}
        <div>
          {/* 3. Template Number and Name */}
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.02rem',
              fontWeight: 600,
              color: '#292321',
              margin: '0 0 4px 0',
              letterSpacing: '-0.01em',
            }}
          >
            {template.fullName}
          </h3>

          {/* 4. One-line Description */}
          <p
            style={{
              fontSize: '0.8rem',
              color: '#81746D',
              margin: '0 0 10px 0',
              lineHeight: 1.35,
            }}
          >
            {template.description}
          </p>

          {/* 5. Small Style Tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            {template.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.72rem',
                  color: '#6E615A',
                  backgroundColor: '#F8EEE6',
                  border: '1px solid #EADBD3',
                  borderRadius: '999px',
                  padding: '2px 9px',
                  fontWeight: 400,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Preview & Use this template */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: 'auto',
            paddingTop: '6px',
          }}
        >
          {/* 6. Secondary "Preview" Button */}
          <button
            type="button"
            onClick={() => onOpenPreview(template)}
            style={{
              flex: '0 0 auto',
              backgroundColor: '#FFFFFF',
              color: '#292321',
              border: '1px solid #EADBD3',
              borderRadius: '999px',
              padding: '7px 14px',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F8EEE6';
              e.currentTarget.style.borderColor = '#DBCAC0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#EADBD3';
            }}
          >
            Preview
          </button>

          {/* 7. Primary "Use this template →" Button */}
          <Link
            href={`/create?template=${template.id}&occasion=${template.occasion}`}
            style={{
              flex: 1,
              backgroundColor: '#292321',
              color: '#FFF8F2',
              borderRadius: '999px',
              padding: '7px 14px',
              fontSize: '0.8rem',
              fontWeight: 500,
              textDecoration: 'none',
              textAlign: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              transition: 'background-color 0.15s ease, transform 0.15s ease',
              boxShadow: '0 2px 6px rgba(41, 35, 33, 0.15)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4A3E39';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#292321';
            }}
          >
            <span>Use this template →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
