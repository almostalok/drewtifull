'use client';

import React, { useState, use } from 'react';
import { Project } from '@/lib/templates/types';
import { getProjectById, saveProject, publishProject } from '@/lib/storage';
import { TEMPLATES } from '@/lib/templates';
import { EditorHeader } from '@/components/editor/EditorHeader';
import { ContentTab } from '@/components/editor/ContentTab';
import { PhotoTray } from '@/components/editor/PhotoTray';
import { SectionsTab } from '@/components/editor/SectionsTab';
import { StyleTab } from '@/components/editor/StyleTab';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import { ShareModal } from '@/components/ui/ShareModal';
import { QrCodeModal } from '@/components/ui/QrCodeModal';
import confetti from 'canvas-confetti';
import { Sparkles, Layers, Palette } from 'lucide-react';

export default function EditorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(() => {
    return getProjectById(resolvedParams.id) || getProjectById('proj_aanchal_bday') || null;
  });
  const [activeTab, setActiveTab] = useState<'content' | 'photos' | 'sections' | 'style'>('content');
  const [viewportMode, setViewportMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isSaving, setIsSaving] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF7F2',
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          color: '#2A2421',
        }}
      >
        opening your memories...
      </div>
    );
  }

  const template =
    TEMPLATES.find((t) => t.id === project.templateId) || TEMPLATES[0];

  const updateProject = (updates: Partial<Project>) => {
    setIsSaving(true);
    const updated = {
      ...project,
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    setProject(updated);
    saveProject(updated);
    setTimeout(() => setIsSaving(false), 400);
  };

  const updateSection = (sectionId: string, updatedFields: Record<string, unknown>) => {
    const updatedSections = project.sections.map((sec) =>
      sec.id === sectionId ? { ...sec, ...updatedFields } : sec
    );
    updateProject({ sections: updatedSections });
  };

  const handleSetHeroPhoto = (url: string) => {
    const updatedPhotos = project.photos.map((p) => ({
      ...p,
      isHero: p.url === url,
    }));
    const heroSection = project.sections.find((s) => s.type === 'hero');
    let updatedSections = project.sections;
    if (heroSection) {
      updatedSections = project.sections.map((s) =>
        s.type === 'hero' ? { ...s, heroPhoto: url } : s
      );
    }
    updateProject({ photos: updatedPhotos, sections: updatedSections });
  };

  const handlePublish = () => {
    const published = publishProject(project.id);
    if (published) {
      setProject(published);
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C97A6E', '#F4D4CD', '#D4AF37', '#FAF7F2'],
    });

    setIsShareModalOpen(true);
  };

  const publishedShareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/p/${project.slug}`
      : `https://drewtifull.com/p/${project.slug}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <EditorHeader
        project={project}
        viewportMode={viewportMode}
        onChangeViewport={setViewportMode}
        onPublish={handlePublish}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        isSaving={isSaving}
      />

      {/* Main Workspace: Left Controls + Center Live Preview */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', backgroundColor: '#F3EFEA' }}>
        {/* Left Side: Editorial Creator Controls */}
        <aside
          style={{
            width: '420px',
            maxWidth: '100%',
            backgroundColor: '#FAF7F2',
            borderRight: '1px solid rgba(60, 45, 35, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          {/* Tabs navigation */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderBottom: '1px solid rgba(60, 45, 35, 0.1)',
              backgroundColor: '#FFFFFF',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('content')}
              style={{
                padding: '12px 6px',
                borderBottom: activeTab === 'content' ? '2px solid #C97A6E' : 'none',
                color: activeTab === 'content' ? '#C97A6E' : '#7A726A',
                fontSize: '0.82rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Words
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              style={{
                padding: '12px 6px',
                borderBottom: activeTab === 'photos' ? '2px solid #C97A6E' : 'none',
                color: activeTab === 'photos' ? '#C97A6E' : '#7A726A',
                fontSize: '0.82rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Photos
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('sections')}
              style={{
                padding: '12px 6px',
                borderBottom: activeTab === 'sections' ? '2px solid #C97A6E' : 'none',
                color: activeTab === 'sections' ? '#C97A6E' : '#7A726A',
                fontSize: '0.82rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Story
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('style')}
              style={{
                padding: '12px 6px',
                borderBottom: activeTab === 'style' ? '2px solid #C97A6E' : 'none',
                color: activeTab === 'style' ? '#C97A6E' : '#7A726A',
                fontSize: '0.82rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Aesthetic
            </button>
          </div>

          {/* Active Tab Content Scrollable Area */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 20px' }}>
            {activeTab === 'content' && (
              <ContentTab
                project={project}
                onChange={updateProject}
                onUpdateSection={updateSection}
              />
            )}

            {activeTab === 'photos' && (
              <PhotoTray
                photos={project.photos}
                onChange={(photos) => updateProject({ photos })}
                onSetHero={handleSetHeroPhoto}
              />
            )}

            {activeTab === 'sections' && (
              <SectionsTab
                sections={project.sections}
                onChange={(sections) => updateProject({ sections })}
              />
            )}

            {activeTab === 'style' && (
              <StyleTab
                project={project}
                currentTheme={template.theme}
                onChangeTheme={(themeOverride) => updateProject({ themeOverride })}
                onChangeMusic={(track) => updateProject({ musicTrack: track })}
              />
            )}
          </div>
        </aside>

        {/* Center Canvas: Live Real-time Renderer */}
        <main
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: viewportMode === 'desktop' ? '0' : '40px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth:
                viewportMode === 'mobile'
                  ? '414px'
                  : viewportMode === 'tablet'
                  ? '768px'
                  : '100%',
              transition: 'max-width 0.3s cubic-bezier(0.2, 0, 0, 1)',
            }}
          >
            <TemplateRenderer
              project={project}
              template={template}
              isEditorPreview={true}
              viewportMode={viewportMode}
            />
          </div>
        </main>
      </div>

      {/* Share Modal & QR Code Card */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        url={publishedShareUrl}
        recipientName={project.recipientName}
        occasion={project.occasion}
        onOpenQrCode={() => {
          setIsShareModalOpen(false);
          setIsQrModalOpen(true);
        }}
      />

      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        url={publishedShareUrl}
        recipientName={project.recipientName}
        occasion={project.occasion}
      />
    </div>
  );
}
