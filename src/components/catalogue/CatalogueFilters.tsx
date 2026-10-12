'use client';

import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  tag: string; // Used to match against template tags / aesthetic
}

export const CATALOGUE_FILTERS: FilterOption[] = [
  { id: 'all', label: 'All Templates', tag: 'all' },
  { id: 'floral', label: 'Floral', tag: 'Floral' },
  { id: 'cinematic', label: 'Cinematic', tag: 'Cinematic' },
  { id: 'scrapbook', label: 'Scrapbook', tag: 'Scrapbook' },
  { id: 'minimal', label: 'Minimal', tag: 'Minimal' },
  { id: 'cute', label: 'Cute', tag: 'Cute' },
  { id: 'vintage', label: 'Vintage', tag: 'Vintage' },
  { id: 'celestial', label: 'Celestial', tag: 'Celestial' },
  { id: 'polaroid', label: 'Polaroid', tag: 'Polaroid' },
  { id: 'y2k', label: 'Y2K', tag: 'Y2K' },
  { id: 'literary', label: 'Literary', tag: 'Literary' },
];

interface CatalogueFiltersProps {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export function CatalogueFilters({ activeFilter, onFilterChange }: CatalogueFiltersProps) {
  return (
    <div
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '2px 44px 10px 44px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          minWidth: 'max-content',
          padding: '4px 2px',
        }}
      >
        {CATALOGUE_FILTERS.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onFilterChange(f.id)}
              className={`glass-pill ${isActive ? 'active' : ''}`}
              style={{
                padding: '6px 18px',
                fontSize: '0.84rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#FFFFFF' : 'var(--ink-secondary)',
                background: isActive
                  ? 'linear-gradient(135deg, #DE745D 0%, #BA5540 100%)'
                  : undefined,
                boxShadow: isActive
                  ? 'inset 2px 2px 4px rgba(0,0,0,0.25), inset -2px -2px 4px rgba(255,255,255,0.25), 0 2px 8px rgba(200, 101, 82, 0.3)'
                  : undefined,
                borderColor: isActive ? 'rgba(255, 255, 255, 0.4)' : undefined,
                whiteSpace: 'nowrap',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
