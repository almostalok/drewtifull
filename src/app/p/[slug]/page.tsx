import React from 'react';
import { getPublishedProjectBySlug } from '@/lib/server/repository';
import { TEMPLATES } from '@/lib/templates';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import { ClientPublishedFallback } from '@/components/renderer/ClientPublishedFallback';

export default async function PublishedGiftPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPublishedProjectBySlug(slug);

  if (!project || project.status !== 'published') {
    return <ClientPublishedFallback slug={slug} />;
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
