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
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid rgba(60, 45, 35, 0.1)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      {/* Left: Brand + Back + Project Details */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link
          href="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#8A8077',
            fontSize: '0.88rem',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          title="Return to My Studio"
        >
          <ArrowLeft size={16} />
          <span className="hide-on-mobile">Studio</span>
        </Link>

        <div style={{ height: '22px', width: '1px', backgroundColor: 'rgba(60, 45, 35, 0.12)' }} />

        <div>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              fontWeight: 400,
              color: '#2A2421',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
            }}
          >
            drewtifull
          </Link>
          <span
            style={{
              marginLeft: '8px',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.05rem',
              color: '#C97A6E',
            }}
          >
            for {project.recipientName || 'Someone Special'}
          </span>
        </div>
      </div>

      {/* Center: Device Viewport Switcher + Undo / Redo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Undo & Redo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: canUndo ? 'pointer' : 'not-allowed',
              padding: '6px',
              borderRadius: '6px',
              color: canUndo ? '#2A2421' : '#C7BFB7',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Undo (Ctrl+Z)"
          >
            <Undo2 size={16} />
          </button>
          <button
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: canRedo ? 'pointer' : 'not-allowed',
              padding: '6px',
              borderRadius: '6px',
              color: canRedo ? '#2A2421' : '#C7BFB7',
              display: 'flex',
              alignItems: 'center',
            }}
            title="Redo (Ctrl+Y)"
          >
            <Redo2 size={16} />
          </button>
        </div>

        {/* Viewport switch */}
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
            onClick={() => onChangeViewport('mobile')}
            style={{
              padding: '5px 10px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'mobile' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'mobile' ? '#2A2421' : '#8A8077',
              boxShadow: viewportMode === 'mobile' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
              fontWeight: 500,
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
              padding: '5px 10px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'tablet' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'tablet' ? '#2A2421' : '#8A8077',
              boxShadow: viewportMode === 'tablet' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
              fontWeight: 500,
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
              padding: '5px 10px',
              borderRadius: '999px',
              backgroundColor: viewportMode === 'desktop' ? '#FFFFFF' : 'transparent',
              color: viewportMode === 'desktop' ? '#2A2421' : '#8A8077',
              boxShadow: viewportMode === 'desktop' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.78rem',
              fontWeight: 500,
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
            fontSize: '0.98rem',
            color: isSaving ? '#C97A6E' : '#8A8077',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          {isSaving ? <Loader2 size={13} className="animate-spin" /> : <Check size={13} color="#2F683D" />}
          {isSaving ? 'saving memories...' : 'all changes saved ♡'}
        </span>

        {/* Full Private Preview Link */}
        <Link
          href={`/preview/${project.id}`}
          target="_blank"
          style={{
            backgroundColor: '#FAF7F2',
            border: '1px solid rgba(60, 45, 35, 0.15)',
            borderRadius: '999px',
            padding: '7px 14px',
            fontSize: '0.82rem',
            color: '#2A2421',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
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
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.15)',
              borderRadius: '999px',
              padding: '7px 14px',
              fontSize: '0.82rem',
              color: '#2A2421',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
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
          style={{
            backgroundColor: '#C97A6E',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '7px 18px',
            fontSize: '0.88rem',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 8px rgba(201, 122, 110, 0.35)',
            transition: 'background-color 0.2s',
          }}
        >
          <Heart size={14} fill="#FFFFFF" />
          <span>{project.status === 'published' ? 'Update Gift ♡' : 'Send it into the world ♡'}</span>
        </button>
      </div>
    </header>
  );
}
