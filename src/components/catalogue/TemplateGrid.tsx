'use client';

import React from 'react';
import { CatalogueTemplateItem } from './types';
import { TemplateCard } from './TemplateCard';

interface TemplateGridProps {
  templates: CatalogueTemplateItem[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenPreview: (template: CatalogueTemplateItem) => void;
  onResetFilters: () => void;
}

export function TemplateGrid({
  templates,
  favorites,
  onToggleFavorite,
  onOpenPreview,
  onResetFilters,
}: TemplateGridProps) {
  if (templates.length === 0) {
    return (
      <div
        style={{
          maxWidth: '1440px',
          margin: '32px auto 60px auto',
          padding: '48px 24px',
          textAlign: 'center',
          backgroundColor: '#FFFDF9',
          border: '1px dashed #EADBD3',
          borderRadius: '20px',
        }}
      >
        <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '10px' }}>🌸</span>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.3rem',
            color: '#292321',
            margin: '0 0 6px 0',
          }}
        >
          No matching templates found
        </h3>
        <p style={{ color: '#81746D', fontSize: '0.88rem', maxWidth: '400px', margin: '0 auto 18px auto' }}>
          We could not find any templates matching your search and filter criteria. Try clearing your search query or selecting All Templates.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          style={{
            backgroundColor: '#292321',
            color: '#FFF8F2',
            borderRadius: '999px',
            padding: '9px 20px',
            fontSize: '0.84rem',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Reset all filters
        </button>
      </div>
    );
  }

  return (
    <section
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0 44px 32px 44px',
        width: '100%',
      }}
    >
      <div
        className="template-catalogue-grid"
        style={{
          width: '100%',
        }}
      >
        {templates.map((tpl) => (
          <TemplateCard
            key={tpl.id}
            template={tpl}
            isFavorited={favorites.includes(tpl.id)}
            onToggleFavorite={onToggleFavorite}
            onOpenPreview={onOpenPreview}
          />
        ))}
      </div>
    </section>
  );
}
