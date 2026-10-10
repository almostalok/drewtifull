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
        maxWidth: '1560px',
        margin: '0 auto',
        padding: '16px 36px 24px 36px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          minWidth: 'max-content',
        }}
      >
        {CATALOGUE_FILTERS.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onFilterChange(f.id)}
              style={{
                borderRadius: '999px',
                padding: '8px 18px',
                fontSize: '0.86rem',
                fontWeight: isActive ? 500 : 400,
                color: isActive ? '#FFF8F2' : '#4A3E39',
                backgroundColor: isActive ? '#292321' : '#FFF8F2',
                border: isActive ? '1px solid #292321' : '1px solid #EADBD3',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isActive
                  ? '0 2px 8px rgba(41, 35, 33, 0.2)'
                  : '0 1px 3px rgba(41, 35, 33, 0.03)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#F5ECE5';
                  e.currentTarget.style.borderColor = '#DBCAC0';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#FFF8F2';
                  e.currentTarget.style.borderColor = '#EADBD3';
                }
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
