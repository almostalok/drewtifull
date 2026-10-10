'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { TEMPLATES } from '@/lib/templates';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import { Project } from '@/lib/templates/types';
import { ArrowLeft, ArrowRight, Smartphone, Tablet, Monitor, Sparkles } from 'lucide-react';

export default function TemplateDetailPreviewPage({
  params,
}: {
  params: Promise<{ occasion: string; templateId: string }>;
}) {
  const resolvedParams = use(params);
  const [viewportMode, setViewportMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const template =
    TEMPLATES.find((t) => t.id === resolvedParams.templateId) || TEMPLATES[0];

  // Synthesize a live preview project using template defaults
  const sampleProject: Project = {
    id: `preview_${template.id}`,
    slug: `preview-${template.id}`,
    templateId: template.id,
    occasion: template.occasion,
    recipientName: 'Aanchal',
    relationship: 'Someone Special',
    date: 'October 2026',
    status: 'draft',
    views: 1,
    sections: template.defaultSections,
    photos: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: template.theme.background, position: 'relative' }}>
      {/* Floating Top Control Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(60, 45, 35, 0.1)',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/templates"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#8A8077',
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> Back to Library
          </Link>

          <div style={{ height: '20px', width: '1px', backgroundColor: 'rgba(60, 45, 35, 0.12)' }} />

          <div>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#2A2421',
                fontWeight: 500,
                marginRight: '8px',
              }}
            >
              {template.name}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1rem',
                color: '#C97A6E',
              }}
            >
              preview
            </span>
          </div>
        </div>

        {/* Viewport controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FAF7F2',
            border: '1px solid rgba(60, 45, 35, 0.1)',
            borderRadius: '999px',
            padding: '3px',
          }}
        >
          <button
            type="button"
            onClick={() => setViewportMode('mobile')}
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'mobile' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'mobile' ? '#2A2421' : '#8A8077',
              boxShadow: viewportMode === 'mobile' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
            }}
          >
            <Smartphone size={14} /> Mobile
          </button>
          <button
            type="button"
            onClick={() => setViewportMode('tablet')}
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'tablet' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'tablet' ? '#2A2421' : '#8A8077',
              boxShadow: viewportMode === 'tablet' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
            }}
          >
            <Tablet size={14} /> Tablet
          </button>
          <button
            type="button"
            onClick={() => setViewportMode('desktop')}
            style={{
              padding: '6px 12px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'desktop' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'desktop' ? '#2A2421' : '#8A8077',
              boxShadow: viewportMode === 'desktop' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
            }}
          >
            <Monitor size={14} /> Desktop
          </button>
        </div>

        {/* Primary CTA */}
        <Link
          href={`/create?template=${template.id}&occasion=${template.occasion}`}
          style={{
            backgroundColor: '#C97A6E',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '8px 20px',
            fontSize: '0.88rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 8px rgba(201, 122, 110, 0.35)',
          }}
        >
          Use This Template <ArrowRight size={14} />
        </Link>
      </header>

      {/* Live Rendered Canvas */}
      <main style={{ padding: viewportMode === 'desktop' ? '0' : '40px 16px' }}>
        <TemplateRenderer
          project={sampleProject}
          template={template}
          isEditorPreview={viewportMode !== 'desktop'}
          viewportMode={viewportMode}
          isPublishedView={false}
        />
      </main>
    </div>
  );
}
