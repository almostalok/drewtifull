'use client';

import React from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Tablet,
  Monitor,
  Eye,
  Heart,
  ArrowLeft,
  Share2,
  Undo2,
  Redo2,
  Check,
  Loader2,
} from 'lucide-react';
import { Project } from '@/lib/templates/types';

interface EditorHeaderProps {
  project: Project;
  viewportMode: 'mobile' | 'tablet' | 'desktop';
  onChangeViewport: (mode: 'mobile' | 'tablet' | 'desktop') => void;
  onPublish: () => void;
  onOpenShareModal: () => void;
  isSaving: boolean;
  canUndo?: boolean;
  canRedo?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
}

export function EditorHeader({
  project,
  viewportMode,
  onChangeViewport,
  onPublish,
  onOpenShareModal,
  isSaving,
  canUndo = false,
  canRedo = false,
  onUndo,
  onRedo,
}: EditorHeaderProps) {
  return (
    <header
      className="glass-nav"
      style={{
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        flexWrap: 'wrap',
        gap: '12px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.65)',
        boxShadow: '0 8px 24px -4px rgba(45, 36, 28, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
      }}
    >
      {/* Left: Brand + Back + Project Details */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <Link
          href="/dashboard"
          className="glass-pill"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--ink-secondary)',
            fontSize: '0.84rem',
            padding: '6px 14px',
            textDecoration: 'none',
          }}
          title="Return to My Studio"
        >
          <ArrowLeft size={15} />
          <span className="hide-on-mobile">Studio</span>
        </Link>

        <div style={{ height: '22px', width: '1px', backgroundColor: 'rgba(60, 45, 35, 0.12)' }} />

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.4rem',
              fontWeight: 600,
              color: 'var(--ink-primary)',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            drewtifull
            <span style={{ color: 'var(--accent-terracotta)', fontSize: '1rem', lineHeight: 1 }}>♡</span>
          </Link>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.1rem',
              color: 'var(--accent-terracotta)',
              fontWeight: 500,
            }}
          >
            for {project.recipientName || 'Someone Special'}
          </span>
        </div>
      </div>

      {/* Center: Device Viewport Switcher + Undo / Redo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Undo & Redo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(235, 227, 218, 0.65)',
            boxShadow: 'var(--neumo-shadow-inset)',
            borderRadius: '10px',
            padding: '3px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        >
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            style={{
              background: canUndo ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
              border: canUndo ? '1px solid rgba(255, 255, 255, 0.9)' : 'none',
              boxShadow: canUndo ? '1px 2px 5px rgba(45, 36, 28, 0.08)' : 'none',
              cursor: canUndo ? 'pointer' : 'not-allowed',
              padding: '6px 8px',
              borderRadius: '7px',
              color: canUndo ? 'var(--ink-primary)' : 'rgba(120, 105, 95, 0.4)',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.15s ease',
            }}
            title="Undo (Ctrl+Z)"
          >
            <Undo2 size={15} />
          </button>
          <button
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            style={{
              background: canRedo ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
              border: canRedo ? '1px solid rgba(255, 255, 255, 0.9)' : 'none',
              boxShadow: canRedo ? '1px 2px 5px rgba(45, 36, 28, 0.08)' : 'none',
              cursor: canRedo ? 'pointer' : 'not-allowed',
              padding: '6px 8px',
              borderRadius: '7px',
              color: canRedo ? 'var(--ink-primary)' : 'rgba(120, 105, 95, 0.4)',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.15s ease',
            }}
            title="Redo (Ctrl+Y)"
          >
            <Redo2 size={15} />
          </button>
        </div>

        {/* Viewport switch with Neumorphic Inset Capsule */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(235, 227, 218, 0.65)',
            boxShadow: 'var(--neumo-shadow-inset)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '999px',
            padding: '3px',
            gap: '2px',
          }}
        >
          <button
            type="button"
            onClick={() => onChangeViewport('mobile')}
            style={{
              padding: '5px 12px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'mobile' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
              color: viewportMode === 'mobile' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
              boxShadow: viewportMode === 'mobile' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
              border: viewportMode === 'mobile' ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.78rem',
              fontWeight: viewportMode === 'mobile' ? 600 : 500,
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            title="Mobile preview"
          >
            <Smartphone size={14} />
            <span className="hide-on-mobile">Mobile</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeViewport('tablet')}
            style={{
              padding: '5px 12px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'tablet' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
              color: viewportMode === 'tablet' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
              boxShadow: viewportMode === 'tablet' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
              border: viewportMode === 'tablet' ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.78rem',
              fontWeight: viewportMode === 'tablet' ? 600 : 500,
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            title="Tablet preview"
          >
            <Tablet size={14} />
            <span className="hide-on-mobile">Tablet</span>
          </button>

          <button
            type="button"
            onClick={() => onChangeViewport('desktop')}
            style={{
              padding: '5px 12px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'desktop' ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
              color: viewportMode === 'desktop' ? 'var(--accent-terracotta)' : 'var(--ink-secondary)',
              boxShadow: viewportMode === 'desktop' ? '0 2px 8px rgba(45, 36, 28, 0.08), -1px -1px 3px rgba(255, 255, 255, 0.9)' : 'none',
              border: viewportMode === 'desktop' ? '1px solid rgba(255, 255, 255, 0.8)' : '1px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.78rem',
              fontWeight: viewportMode === 'desktop' ? 600 : 500,
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            title="Desktop view"
          >
            <Monitor size={14} />
            <span className="hide-on-mobile">Desktop</span>
          </button>
        </div>
      </div>

      {/* Right: Autosave status, Full Preview, Share & Publish Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span
          className="hide-on-mobile"
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1rem',
            color: isSaving ? 'var(--accent-terracotta)' : 'var(--accent-sage)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            padding: '4px 10px',
            borderRadius: '999px',
            backgroundColor: isSaving ? 'rgba(200, 101, 82, 0.08)' : 'rgba(95, 125, 103, 0.1)',
          }}
        >
          {isSaving ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} color="var(--accent-sage)" />}
          {isSaving ? 'saving memories...' : 'all changes saved ♡'}
        </span>

        {/* Full Private Preview Link */}
        <Link
          href={`/preview/${project.id}`}
          target="_blank"
          className="glass-pill"
          style={{
            padding: '7px 16px',
            fontSize: '0.84rem',
            color: 'var(--ink-primary)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            fontWeight: 500,
          }}
          title="Open Fullscreen Preview"
        >
          <Eye size={14} /> Preview
        </Link>

        {project.status === 'published' && (
          <button
            type="button"
            onClick={onOpenShareModal}
            className="glass-pill"
            style={{
              padding: '7px 16px',
              fontSize: '0.84rem',
              color: 'var(--ink-primary)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <Share2 size={14} /> Share
          </button>
        )}

        <button
          type="button"
          onClick={onPublish}
          className="glass-cta"
          style={{
            padding: '8px 20px',
            fontSize: '0.88rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          <Heart size={14} fill="#FFFFFF" />
          <span>{project.status === 'published' ? 'Update Gift ♡' : 'Send it into the world ♡'}</span>
        </button>
      </div>
    </header>
  );
}
