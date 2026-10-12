'use client';

import React, { useState, useEffect, use } from 'react';
import { Project } from '@/lib/templates/types';
import { getPublishedProjectBySlug } from '@/lib/storage';
import { TEMPLATES } from '@/lib/templates';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import Link from 'next/link';

export default function PublishedGiftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const [project, setProject] = useState<Project | null>(() => getPublishedProjectBySlug(resolvedParams.slug) ?? null);
  const [loading, setLoading] = useState<boolean>(!project);

  useEffect(() => {
    let isMounted = true;
    async function fetchPublished() {
      try {
        const res = await fetch(`/api/published/${resolvedParams.slug}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.project) {
            setProject(data.project);
          }
        }
      } catch (err) {
        console.error('Error fetching published gift:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    if (!project) {
      fetchPublished();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [resolvedParams.slug, project]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-canvas)',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '40px 48px',
            maxWidth: '460px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(200, 101, 82, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-terracotta)',
              fontSize: '1.4rem',
            }}
          >
            ♡
          </div>
          <div
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.6rem',
              color: 'var(--ink-primary)',
              lineHeight: 1.3,
            }}
          >
            opening a little corner of the internet...
          </div>
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.35rem',
              color: 'var(--accent-terracotta)',
            }}
          >
            made with love on drewtifull ♡
          </p>
        </div>
      </div>
    );
  }

  if (!project || project.status !== 'published') {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-canvas)',
          padding: '30px',
          textAlign: 'center',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '44px 40px',
            maxWidth: '460px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '3rem', marginBottom: '12px' }}>💌</span>
          <h1
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '2.2rem',
              color: 'var(--ink-primary)',
              marginBottom: '8px',
              fontWeight: 600,
            }}
          >
            A quiet mystery.
          </h1>
          <p style={{ color: 'var(--ink-secondary)', maxWidth: '380px', marginBottom: '24px', lineHeight: 1.5 }}>
            We could not find this exact digital gift. It might have been moved or unpublished by its creator.
          </p>
          <Link
            href="/"
            className="glass-cta"
            style={{
              padding: '12px 28px',
              fontSize: '0.94rem',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Explore Drewtifull ♡
          </Link>
        </div>
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
