'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project } from '@/lib/templates/types';
import { getStoredProjects, deleteProject, duplicateProject, saveProject } from '@/lib/storage';
import { SAMPLE_PROJECTS } from '@/lib/sampleProjects';
import { TEMPLATES } from '@/lib/templates';
import {
  Plus,
  Edit3,
  ExternalLink,
  Copy,
  Share2,
  Trash2,
  QrCode,
  Heart,
  RefreshCw,
} from 'lucide-react';
import { ShareModal } from '@/components/ui/ShareModal';
import { QrCodeModal } from '@/components/ui/QrCodeModal';
import { WashiTape } from '@/components/ui/WashiTape';

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(getStoredProjects);
  const [activeShareProject, setActiveShareProject] = useState<Project | null>(null);
  const [activeQrProject, setActiveQrProject] = useState<Project | null>(null);

  const loadProjects = () => {
    setProjects(getStoredProjects());
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Let this one go for "${name}"?`)) {
      deleteProject(id);
      loadProjects();
    }
  };

  const handleDuplicate = (id: string) => {
    const copy = duplicateProject(id);
    if (copy) {
      loadProjects();
    }
  };

  const handleResetDefaults = () => {
    SAMPLE_PROJECTS.forEach((p) => saveProject(p));
    loadProjects();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent', paddingBottom: '6rem' }}>
      {/* Top Navbar */}
      <header
        className="glass-nav"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '16px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              color: 'var(--ink-primary)',
              letterSpacing: '-0.02em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
            }}
          >
            <span>drewtifull</span>
            <span style={{ color: 'var(--accent-terracotta)', fontSize: '1.25rem' }}>♡</span>
          </Link>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              color: 'var(--accent-terracotta)',
            }}
          >
            studio
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <Link
            href="/templates"
            style={{
              color: 'var(--ink-secondary)',
              fontSize: '0.9rem',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Templates
          </Link>
          <Link
            href="/settings"
            style={{
              color: 'var(--ink-secondary)',
              fontSize: '0.9rem',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Settings
          </Link>
          <Link
            href="/create"
            className="glass-cta"
            style={{
              padding: '9px 20px',
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            <Plus size={16} /> Create something new ♡
          </Link>
        </div>
      </header>

      {/* Main Studio Gallery */}
      <main style={{ maxWidth: '1240px', margin: '3.5rem auto 0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: 'var(--ink-primary)',
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: '6px',
              }}
            >
              My Drewtifulls
            </h1>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '1.02rem' }}>
              Your digital keepsakes, letters, and memories made for the people you love.
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetDefaults}
            className="glass-pill"
            style={{
              padding: '6px 16px',
              fontSize: '0.84rem',
            }}
            title="Reload showcase examples"
          >
            <RefreshCw size={13} /> Reset showcase gifts
          </button>
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <div
            className="glass-panel"
            style={{
              padding: '80px 20px',
              textAlign: 'center',
              maxWidth: '540px',
              margin: '3rem auto',
            }}
          >
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>💌</span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--ink-primary)',
                marginBottom: '8px',
              }}
            >
              Nothing here yet.
            </h3>
            <p style={{ color: 'var(--ink-secondary)', marginBottom: '24px' }}>
              Let’s make something worth remembering for someone you love.
            </p>
            <Link
              href="/create"
              className="glass-cta"
              style={{
                padding: '12px 28px',
                fontSize: '0.96rem',
                textDecoration: 'none',
              }}
            >
              <Heart size={16} fill="#FFFFFF" /> Create your first Drewtifull ♡
            </Link>
          </div>
        ) : (
          /* Visual Editorial Cards Grid in Neumo-Glass */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '30px',
            }}
          >
            {projects.map((project, idx) => {
              const template =
                TEMPLATES.find((t) => t.id === project.templateId) || TEMPLATES[0];

              const heroImg =
                project.photos.find((p) => p.isHero)?.url ||
                project.photos[0]?.url ||
                template.previewImage;

              const isPublished = project.status === 'published';
              const shareUrl =
                typeof window !== 'undefined'
                  ? `${window.location.origin}/p/${project.slug}`
                  : `https://drewtifull.com/p/${project.slug}`;

              return (
                <div
                  key={project.id}
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {/* Card Thumbnail */}
                  <div
                    style={{
                      height: '220px',
                      backgroundColor: 'rgba(235, 227, 218, 0.45)',
                      overflow: 'hidden',
                      position: 'relative',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={heroImg}
                      alt={project.recipientName}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />

                    {/* Washi Tape Accent */}
                    <WashiTape
                      color={idx % 2 === 0 ? 'rose' : 'gold'}
                      rotation={idx % 2 === 0 ? -2 : 1.5}
                      width="80px"
                      style={{ top: '8px', right: '14px' }}
                    />

                    {/* Status Pill in Frosted Glass */}
                    <div
                      className="glass-badge"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        color: isPublished ? 'var(--accent-sage)' : 'var(--ink-secondary)',
                        padding: '4px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {isPublished ? '● Published' : '○ Draft'}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '22px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--accent-terracotta)',
                          fontWeight: 600,
                        }}
                      >
                        {project.occasion} gift
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.75rem',
                          color: 'var(--ink-primary)',
                          marginTop: '2px',
                        }}
                      >
                        <Link
                          href={`/dashboard/projects/${project.id}`}
                          style={{ color: 'var(--ink-primary)', textDecoration: 'none' }}
                        >
                          For {project.recipientName}
                        </Link>
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-hand)',
                          fontSize: '1.2rem',
                          color: 'var(--ink-muted)',
                        }}
                      >
                        {template.name} theme · {project.photos.length} memories
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      {/* Left: Open Studio button */}
                      <Link
                        href={`/editor/${project.id}`}
                        className="glass-pill"
                        style={{
                          padding: '8px 18px',
                          fontSize: '0.86rem',
                          textDecoration: 'none',
                        }}
                      >
                        <Edit3 size={14} /> Open Studio
                      </Link>

                      {/* Right: Actions menu with Neumo-Glass circular buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {isPublished && (
                          <Link
                            href={`/p/${project.slug}`}
                            target="_blank"
                            title="View published gift"
                            className="glass-icon-btn"
                            style={{
                              width: '34px',
                              height: '34px',
                              textDecoration: 'none',
                            }}
                          >
                            <ExternalLink size={15} />
                          </Link>
                        )}

                        <button
                          type="button"
                          onClick={() => setActiveShareProject(project)}
                          title="Share link"
                          className="glass-icon-btn"
                          style={{
                            width: '34px',
                            height: '34px',
                          }}
                        >
                          <Share2 size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveQrProject(project)}
                          title="Printable QR card"
                          className="glass-icon-btn"
                          style={{
                            width: '34px',
                            height: '34px',
                          }}
                        >
                          <QrCode size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDuplicate(project.id)}
                          title="Duplicate this project"
                          className="glass-icon-btn"
                          style={{
                            width: '34px',
                            height: '34px',
                          }}
                        >
                          <Copy size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(project.id, project.recipientName)}
                          title="Let this one go (Delete)"
                          className="glass-icon-btn"
                          style={{
                            width: '34px',
                            height: '34px',
                            color: 'var(--accent-terracotta)',
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Share Modal */}
      {activeShareProject && (
        <ShareModal
          isOpen={true}
          onClose={() => setActiveShareProject(null)}
          url={
            typeof window !== 'undefined'
              ? `${window.location.origin}/p/${activeShareProject.slug}`
              : `https://drewtifull.com/p/${activeShareProject.slug}`
          }
          recipientName={activeShareProject.recipientName}
          occasion={activeShareProject.occasion}
          onOpenQrCode={() => {
            setActiveQrProject(activeShareProject);
            setActiveShareProject(null);
          }}
        />
      )}

      {/* QR Code Modal */}
      {activeQrProject && (
        <QrCodeModal
          isOpen={true}
          onClose={() => setActiveQrProject(null)}
          url={
            typeof window !== 'undefined'
              ? `${window.location.origin}/p/${activeQrProject.slug}`
              : `https://drewtifull.com/p/${activeQrProject.slug}`
          }
          recipientName={activeQrProject.recipientName}
          occasion={activeQrProject.occasion}
        />
      )}
    </div>
  );
}
