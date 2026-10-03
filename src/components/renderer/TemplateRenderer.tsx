'use client';

import React from 'react';
import { Project, Template } from '@/lib/templates/types';
import { TEMPLATES } from '@/lib/templates';
import { CURATED_MUSIC_TRACKS } from '@/lib/musicTracks';
import { HeroSection } from './sections/HeroSection';
import { LetterSection } from './sections/LetterSection';
import { PolaroidCollageSection } from './sections/PolaroidCollageSection';
import { FilmStripSection } from './sections/FilmStripSection';
import { TimelineSection } from './sections/TimelineSection';
import { ReasonsSection } from './sections/ReasonsSection';
import { FavoriteThingsSection } from './sections/FavoriteThingsSection';
import { ProposalRevealSection } from './sections/ProposalRevealSection';
import { StarMapSection } from './sections/StarMapSection';
import { QuoteSection } from './sections/QuoteSection';
import { EndingSection } from './sections/EndingSection';
import { AudioPlayer } from '@/components/ui/AudioPlayer';

interface TemplateRendererProps {
  project: Project;
  template?: Template;
  isEditorPreview?: boolean;
  viewportMode?: 'mobile' | 'tablet' | 'desktop';
  isPublishedView?: boolean;
}

export function TemplateRenderer({
  project,
  template: propTemplate,
  isEditorPreview = false,
  viewportMode = 'desktop',
  isPublishedView = false,
}: TemplateRendererProps) {
  const template =
    propTemplate ||
    TEMPLATES.find((t) => t.id === project.templateId) ||
    TEMPLATES[0];

  const theme = {
    ...template.theme,
    ...(project.themeOverride || {}),
  };

  const musicTrack =
    project.musicTrack ||
    (template.defaultMusicTrack
      ? CURATED_MUSIC_TRACKS.find((m) => m.id === template.defaultMusicTrack)
      : null);

  // Viewport container width constraints for responsive testing in editor
  const viewportStyles: Record<string, React.CSSProperties> = {
    mobile: {
      maxWidth: '414px',
      margin: '0 auto',
      boxShadow: '0 0 0 12px #221F1E, 0 25px 60px rgba(0,0,0,0.3)',
      borderRadius: '36px',
      overflow: 'hidden',
      minHeight: '820px',
      backgroundColor: theme.background,
    },
    tablet: {
      maxWidth: '768px',
      margin: '0 auto',
      boxShadow: '0 0 0 12px #221F1E, 0 25px 60px rgba(0,0,0,0.25)',
      borderRadius: '24px',
      overflow: 'hidden',
      minHeight: '820px',
      backgroundColor: theme.background,
    },
    desktop: {
      width: '100%',
      backgroundColor: theme.background,
    },
  };

  const activeContainerStyle = isEditorPreview
    ? viewportStyles[viewportMode] || viewportStyles.desktop
    : { width: '100%', backgroundColor: theme.background };

  return (
    <div
      className="drewtifull-rendered-page"
      style={{
        ...activeContainerStyle,
        color: theme.foreground,
        minHeight: '100vh',
        position: 'relative',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Sections rendering loop */}
      {project.sections.map((section) => {
        switch (section.type) {
          case 'hero':
            return (
              <HeroSection
                key={section.id}
                data={section}
                theme={theme}
                recipientName={project.recipientName}
                creatorName={project.creatorName}
              />
            );
          case 'letter':
            return (
              <LetterSection key={section.id} data={section} theme={theme} />
            );
          case 'polaroidCollage':
            return (
              <PolaroidCollageSection
                key={section.id}
                data={section}
                theme={theme}
              />
            );
          case 'filmStrip':
            return (
              <FilmStripSection
                key={section.id}
                data={section}
                theme={theme}
              />
            );
          case 'timeline':
            return (
              <TimelineSection key={section.id} data={section} theme={theme} />
            );
          case 'reasons':
            return (
              <ReasonsSection key={section.id} data={section} theme={theme} />
            );
          case 'favoriteThings':
            return (
              <FavoriteThingsSection
                key={section.id}
                data={section}
                theme={theme}
              />
            );
          case 'proposalReveal':
            return (
              <ProposalRevealSection
                key={section.id}
                data={section}
                theme={theme}
              />
            );
          case 'starMap':
            return (
              <StarMapSection key={section.id} data={section} theme={theme} />
            );
          case 'quote':
            return (
              <QuoteSection key={section.id} data={section} theme={theme} />
            );
          case 'ending':
            return (
              <EndingSection
                key={section.id}
                data={section}
                theme={theme}
                isPublishedView={isPublishedView}
              />
            );
          default:
            return null;
        }
      })}

      {/* Floating Ambient Soundtrack Player on published view */}
      {musicTrack && isPublishedView && (
        <AudioPlayer track={musicTrack} floating={true} />
      )}
    </div>
  );
}
