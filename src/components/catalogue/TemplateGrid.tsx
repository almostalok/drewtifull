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
          maxWidth: '1560px',
          margin: '40px auto 80px auto',
          padding: '60px 24px',
          textAlign: 'center',
          backgroundColor: '#FFFDF9',
          border: '1px dashed #EADBD3',
          borderRadius: '24px',
        }}
      >
        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>🌸</span>
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.4rem',
            color: '#292321',
            margin: '0 0 8px 0',
          }}
        >
          No matching templates found
        </h3>
        <p style={{ color: '#81746D', fontSize: '0.92rem', maxWidth: '420px', margin: '0 auto 20px auto' }}>
          We could not find any templates matching your search and filter criteria. Try clearing your search query or selecting All Templates.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          style={{
            backgroundColor: '#292321',
            color: '#FFF8F2',
            borderRadius: '999px',
            padding: '10px 22px',
            fontSize: '0.86rem',
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
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '0 36px 64px 36px',
      }}
    >
      <div
        className="template-catalogue-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
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
