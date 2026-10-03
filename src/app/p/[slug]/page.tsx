'use client';

import React, { useEffect, useState, use } from 'react';
import { Project } from '@/lib/templates/types';
import { getPublishedProjectBySlug } from '@/lib/storage';
import { TEMPLATES } from '@/lib/templates';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import { Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

export default function PublishedGiftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = getPublishedProjectBySlug(resolvedParams.slug);
    if (found) {
      setProject(found);
    }
    setLoading(false);
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF7F2',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: '#2A2421',
            marginBottom: '8px',
          }}
        >
          opening a little corner of the internet...
        </div>
        <p
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1.4rem',
            color: '#C97A6E',
          }}
        >
          made with love on drewtifull ♡
        </p>
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
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>💌</span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            color: '#2A2421',
            marginBottom: '8px',
          }}
        >
          A quiet mystery.
        </h1>
        <p style={{ color: '#6E655E', maxWidth: '420px', marginBottom: '24px' }}>
          We could not find this exact digital gift. It might have been moved or unpublished by its creator.
        </p>
        <Link
          href="/"
          style={{
            backgroundColor: '#2A2421',
            color: '#FFFFFF',
            padding: '12px 28px',
            borderRadius: '999px',
            fontSize: '0.92rem',
          }}
        >
          Explore Drewtifull ♡
        </Link>
      </div>
    );
  }

  const template =
    TEMPLATES.find((t) => t.id === project.templateId) || TEMPLATES[0];

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: project.themeOverride?.background || template.theme.background,
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <TemplateRenderer
        project={project}
        template={template}
        isEditorPreview={false}
        isPublishedView={true}
      />
    </main>
  );
}
