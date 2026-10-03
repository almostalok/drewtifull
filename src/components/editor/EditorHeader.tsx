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
  Check,
} from 'lucide-react';
import { Project } from '@/lib/templates/types';

interface EditorHeaderProps {
  project: Project;
  viewportMode: 'mobile' | 'tablet' | 'desktop';
  onChangeViewport: (mode: 'mobile' | 'tablet' | 'desktop') => void;
  onPublish: () => void;
  onOpenShareModal: () => void;
  isSaving: boolean;
}

export function EditorHeader({
  project,
  viewportMode,
  onChangeViewport,
  onPublish,
  onOpenShareModal,
  isSaving,
}: EditorHeaderProps) {
  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid rgba(60, 45, 35, 0.1)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Left: Brand + Back + Project Details */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <Link
          href="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#8A8077',
            fontSize: '0.88rem',
            transition: 'color 0.2s',
          }}
          title="Return to My Drewtifulls"
        >
          <ArrowLeft size={16} />
          <span className="hide-on-mobile">Dashboard</span>
        </Link>

        <div style={{ height: '24px', width: '1px', backgroundColor: 'rgba(60, 45, 35, 0.12)' }} />

        <div>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              fontWeight: 400,
              color: '#2A2421',
              letterSpacing: '-0.02em',
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

      {/* Center: Device Viewport Switcher */}
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
            padding: '6px 12px',
            borderRadius: '999px',
            backgroundColor: viewportMode === 'mobile' ? '#FFFFFF' : 'transparent',
            color: viewportMode === 'mobile' ? '#2A2421' : '#8A8077',
            boxShadow: viewportMode === 'mobile' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
          title="Mobile preview (390px)"
        >
          <Smartphone size={15} />
          <span className="hide-on-mobile">Mobile</span>
        </button>

        <button
          type="button"
          onClick={() => onChangeViewport('tablet')}
          style={{
            padding: '6px 12px',
            borderRadius: '999px',
            backgroundColor: viewportMode === 'tablet' ? '#FFFFFF' : 'transparent',
            color: viewportMode === 'tablet' ? '#2A2421' : '#8A8077',
            boxShadow: viewportMode === 'tablet' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
          title="Tablet preview (768px)"
        >
          <Tablet size={15} />
          <span className="hide-on-mobile">Tablet</span>
        </button>

        <button
          type="button"
          onClick={() => onChangeViewport('desktop')}
          style={{
            padding: '6px 12px',
            borderRadius: '999px',
            backgroundColor: viewportMode === 'desktop' ? '#FFFFFF' : 'transparent',
            color: viewportMode === 'desktop' ? '#2A2421' : '#8A8077',
            boxShadow: viewportMode === 'desktop' ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            fontWeight: 500,
          }}
          title="Full desktop layout"
        >
          <Monitor size={15} />
          <span className="hide-on-mobile">Desktop</span>
        </button>
      </div>

      {/* Right: Save Status & Publish Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          className="hide-on-mobile"
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: '1rem',
            color: '#8A8077',
          }}
        >
          {isSaving ? 'saving memories...' : 'saved automatically ♡'}
        </span>

        {project.status === 'published' && (
          <button
            type="button"
            onClick={onOpenShareModal}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.15)',
              borderRadius: '999px',
              padding: '8px 16px',
              fontSize: '0.85rem',
              color: '#2A2421',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 500,
            }}
          >
            <Share2 size={15} /> Share
          </button>
        )}

        <button
          type="button"
          onClick={onPublish}
          style={{
            backgroundColor: '#C97A6E',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '8px 20px',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 8px rgba(201, 122, 110, 0.35)',
            transition: 'background-color 0.2s',
          }}
        >
          <Heart size={15} fill="#FFFFFF" />
          <span>{project.status === 'published' ? 'Update & Share ♡' : 'Send it into the world ♡'}</span>
        </button>
      </div>
    </header>
  );
}
