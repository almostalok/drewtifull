'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { CatalogueHeader } from '@/components/catalogue/CatalogueHeader';
import { CatalogueHero } from '@/components/catalogue/CatalogueHero';
import { CatalogueFilters } from '@/components/catalogue/CatalogueFilters';
import { TemplateGrid } from '@/components/catalogue/TemplateGrid';
import { TemplatePreviewModal } from '@/components/catalogue/TemplatePreviewModal';
import { CatalogueFooter } from '@/components/catalogue/CatalogueFooter';
import { CATALOGUE_TEMPLATES, CatalogueTemplateItem } from '@/components/catalogue/types';

export default function TemplatesCataloguePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [previewTemplate, setPreviewTemplate] = useState<CatalogueTemplateItem | null>(null);

  // Load favorites from local storage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('drewtifull_favorites');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // Ignore storage errors in privacy mode
    }
  }, []);

  // Toggle favorite status and persist to localStorage
  const handleToggleFavorite = (templateId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(templateId);
      const updated = exists ? prev.filter((id) => id !== templateId) : [...prev, templateId];
      try {
        localStorage.setItem('drewtifull_favorites', JSON.stringify(updated));
      } catch {
        // Ignore storage errors
      }
      return updated;
    });
  };

  // Reset filters & search
  const handleResetFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
  };

  // Filter & Search computation
  const filteredTemplates = useMemo(() => {
    return CATALOGUE_TEMPLATES.filter((tpl) => {
      // 1. Filter match
      const matchesFilter =
        activeFilter === 'all' ||
        tpl.filterCategory.toLowerCase() === activeFilter.toLowerCase() ||
        tpl.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase());

      // 2. Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        tpl.name.toLowerCase().includes(query) ||
        tpl.fullName.toLowerCase().includes(query) ||
        tpl.description.toLowerCase().includes(query) ||
        tpl.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        tpl.occasion.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#FFF8F2',
        color: '#292321',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* 1. Slim Top Navigation Bar matching reference */}
      <CatalogueHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Editorial Hero Section & Stationery Collage */}
      <main style={{ flex: 1 }}>
        <CatalogueHero />

        {/* 3. Horizontal Filter Pills Row */}
        <CatalogueFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* 4. 5-Column Template Catalogue Grid */}
        <TemplateGrid
          templates={filteredTemplates}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          onOpenPreview={setPreviewTemplate}
          onResetFilters={handleResetFilters}
        />
      </main>

      {/* 5. Lightbox Modal Preview Dialog */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />

      {/* 6. Warm Editorial Footer */}
      <CatalogueFooter />
    </div>
  );
}
