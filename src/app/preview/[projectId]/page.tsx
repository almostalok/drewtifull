'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { Project } from '@/lib/templates/types';
import { getProjectById } from '@/lib/storage';
import { TEMPLATES } from '@/lib/templates';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import { ArrowLeft, Heart, Smartphone, Tablet, Monitor } from 'lucide-react';

export default function PrivatePreviewPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(() => getProjectById(resolvedParams.projectId) ?? null);
  const [viewportMode, setViewportMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [loading, setLoading] = useState(!project);

  useEffect(() => {
    if (!project) {
      fetch(`/api/projects/${resolvedParams.projectId}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.project) setProject(data.project);
        })
        .finally(() => setLoading(false));
    }
  }, [resolvedParams.projectId, project]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF7F2',
          fontFamily: 'var(--font-serif)',
          fontSize: '1.5rem',
          color: '#2A2421',
        }}
      >
        opening private preview...
      </div>
    );
  }

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF7F2',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '12px' }}>
          Project not found
        </h2>
        <Link
          href="/dashboard"
          style={{
            backgroundColor: '#2A2421',
            color: '#FFFFFF',
            padding: '10px 24px',
            borderRadius: '999px',
            textDecoration: 'none',
          }}
        >
          Return to My Studio
        </Link>
      </div>
    );
  }

  const template =
    TEMPLATES.find((t) => t.id === project.templateId) || TEMPLATES[0];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: project.themeOverride?.background || template.theme.background }}>
      {/* Top Preview Control Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(60, 45, 35, 0.1)',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href={`/editor/${project.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#8A8077',
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> Back to Editor
          </Link>

          <span
            style={{
              backgroundColor: '#FAF0E6',
              color: '#B95B3B',
              padding: '3px 10px',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Private Preview
          </span>
        </div>

        {/* Viewport controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FAF7F2',
            border: '1px solid rgba(60, 45, 35, 0.1)',
            borderRadius: '999px',
            padding: '2px',
          }}
        >
          <button
            type="button"
            onClick={() => setViewportMode('mobile')}
            style={{
              padding: '5px 10px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'mobile' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'mobile' ? '#2A2421' : '#8A8077',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
            }}
          >
            <Smartphone size={13} /> Mobile
          </button>
          <button
            type="button"
            onClick={() => setViewportMode('tablet')}
            style={{
              padding: '5px 10px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'tablet' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'tablet' ? '#2A2421' : '#8A8077',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
            }}
          >
            <Tablet size={13} /> Tablet
          </button>
          <button
            type="button"
            onClick={() => setViewportMode('desktop')}
            style={{
              padding: '5px 10px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'desktop' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'desktop' ? '#2A2421' : '#8A8077',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
            }}
          >
            <Monitor size={13} /> Desktop
          </button>
        </div>

        <Link
          href={`/editor/${project.id}`}
          style={{
            backgroundColor: '#C97A6E',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '7px 18px',
            fontSize: '0.85rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Heart size={14} fill="#FFFFFF" /> Edit & Publish
        </Link>
      </header>

      {/* Rendered Template */}
      <main style={{ padding: viewportMode === 'desktop' ? '0' : '36px 16px' }}>
        <TemplateRenderer
          project={project}
          template={template}
          isEditorPreview={viewportMode !== 'desktop'}
          viewportMode={viewportMode}
          isPublishedView={false}
        />
      </main>
    </div>
  );
}
