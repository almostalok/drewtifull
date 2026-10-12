'use client';

import React, { useState, useEffect, useCallback, use } from 'react';
import { useRouter } from 'next/navigation';
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
import { Sparkles, Layers, Palette, Edit3, Eye, SlidersHorizontal } from 'lucide-react';

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

  // History stack for Undo and Redo
  const [history, setHistory] = useState<Project[]>(() => (project ? [project] : []));
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const [activeTab, setActiveTab] = useState<'content' | 'photos' | 'sections' | 'style'>('content');
  const [viewportMode, setViewportMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isSaving, setIsSaving] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(true);

  // Fetch project from server if not found in local storage
  useEffect(() => {
    if (!project) {
      fetch(`/api/projects/${resolvedParams.id}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.project) {
            setProject(data.project);
            setHistory([data.project]);
            setHistoryIndex(0);
          }
        })
        .catch(() => {});
    }
  }, [resolvedParams.id, project]);

  // Update project helper with history snapshot
  const updateProject = useCallback(
    (updates: Partial<Project>, recordHistory = true) => {
      if (!project) return;
      setIsSaving(true);
      const updated: Project = {
        ...project,
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      setProject(updated);
      saveProject(updated);

      if (recordHistory) {
        setHistory((prev) => {
          const trimmed = prev.slice(0, historyIndex + 1);
          return [...trimmed, updated];
        });
        setHistoryIndex((prev) => prev + 1);
      }

      setTimeout(() => setIsSaving(false), 500);
    },
    [project, historyIndex]
  );

  // Undo and Redo handlers
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const prevProject = history[historyIndex - 1];
      setHistoryIndex((prev) => prev - 1);
      setProject(prevProject);
      saveProject(prevProject);
    }
  }, [historyIndex, history]);

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextProject = history[historyIndex + 1];
      setHistoryIndex((prev) => prev + 1);
      setProject(nextProject);
      saveProject(nextProject);
    }
  }, [historyIndex, history]);

  // Keyboard shortcut listener for Ctrl+Z and Ctrl+Y
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (
        ((e.ctrlKey || e.metaKey) && e.key === 'y') ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Z')
      ) {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo]);

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-canvas)',
          padding: '24px',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '36px 48px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(200, 101, 82, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-terracotta)',
              fontSize: '1.2rem',
            }}
          >
            ♡
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.35rem',
              color: 'var(--ink-primary)',
              fontWeight: 500,
            }}
          >
            opening your memories...
          </p>
        </div>
      </div>
    );
  }

  const template =
    TEMPLATES.find((t) => t.id === project.templateId) || TEMPLATES[0];

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
      colors: ['#C86552', '#DE745D', '#BA8B42', '#EDE7DF'],
    });

    setIsShareModalOpen(true);
  };

  const publishedShareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/p/${project.slug}`
      : `https://drewtifull.com/p/${project.slug}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--bg-canvas)' }}>
      <EditorHeader
        project={project}
        viewportMode={viewportMode}
        onChangeViewport={setViewportMode}
        onPublish={handlePublish}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        isSaving={isSaving}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onUndo={handleUndo}
        onRedo={handleRedo}
      />

      {/* Main Workspace: Left Controls + Center Live Preview */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Left Side: Editorial Creator Controls */}
        <aside
          className="editor-sidebar"
          style={{
            width: '420px',
            maxWidth: '100%',
            backgroundColor: 'rgba(247, 242, 235, 0.8)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '4px 0 24px rgba(45, 36, 28, 0.04)',
            display: isMobilePanelOpen ? 'flex' : 'none',
            flexDirection: 'column',
            overflow: 'hidden',
            flexShrink: 0,
            zIndex: 20,
          }}
        >
          {/* Tabs navigation: Tactile Neumorphic Inset Track */}
          <div
            style={{
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
              background: 'rgba(235, 227, 218, 0.35)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '4px',
                padding: '3px',
                backgroundColor: 'rgba(224, 215, 203, 0.6)',
                boxShadow: 'var(--neumo-shadow-inset)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.45)',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                style={{
                  padding: '8px 4px',
                  border: activeTab === 'content' ? '1px solid rgba(255, 255, 255, 0.85)' : '1px solid transparent',
                  borderRadius: '9px',
                  backgroundColor: activeTab === 'content' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  boxShadow: activeTab === 'content' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
                  color: activeTab === 'content' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: activeTab === 'content' ? 600 : 500,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Words
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('photos')}
                style={{
                  padding: '8px 4px',
                  border: activeTab === 'photos' ? '1px solid rgba(255, 255, 255, 0.85)' : '1px solid transparent',
                  borderRadius: '9px',
                  backgroundColor: activeTab === 'photos' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  boxShadow: activeTab === 'photos' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
                  color: activeTab === 'photos' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: activeTab === 'photos' ? 600 : 500,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Photos
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('sections')}
                style={{
                  padding: '8px 4px',
                  border: activeTab === 'sections' ? '1px solid rgba(255, 255, 255, 0.85)' : '1px solid transparent',
                  borderRadius: '9px',
                  backgroundColor: activeTab === 'sections' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  boxShadow: activeTab === 'sections' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
                  color: activeTab === 'sections' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: activeTab === 'sections' ? 600 : 500,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Story
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('style')}
                style={{
                  padding: '8px 4px',
                  border: activeTab === 'style' ? '1px solid rgba(255, 255, 255, 0.85)' : '1px solid transparent',
                  borderRadius: '9px',
                  backgroundColor: activeTab === 'style' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  boxShadow: activeTab === 'style' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
                  color: activeTab === 'style' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
                  fontSize: '0.82rem',
                  fontWeight: activeTab === 'style' ? 600 : 500,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Aesthetic
              </button>
            </div>
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
            padding: viewportMode === 'desktop' ? '0' : '40px 24px',
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
              borderRadius: viewportMode === 'desktop' ? '0' : '28px',
              overflow: 'hidden',
              boxShadow: viewportMode === 'desktop' ? 'none' : 'var(--neumo-shadow-card), 0 20px 50px rgba(45, 36, 28, 0.15)',
              border: viewportMode === 'desktop' ? 'none' : '8px solid rgba(255, 255, 255, 0.85)',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
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
