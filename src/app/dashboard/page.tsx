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
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', paddingBottom: '6rem' }}>
      {/* Top Navbar */}
      <header
        style={{
          padding: '18px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(60, 45, 35, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem',
              color: '#2A2421',
              letterSpacing: '-0.02em',
            }}
          >
            drewtifull
          </Link>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.15rem',
              color: '#C97A6E',
            }}
          >
            studio
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Link
            href="/create"
            style={{
              backgroundColor: '#2A2421',
              color: '#FAF5ED',
              borderRadius: '999px',
              padding: '10px 22px',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(42, 36, 33, 0.2)',
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
                color: '#2A2421',
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: '6px',
              }}
            >
              My Drewtifulls
            </h1>
            <p style={{ color: '#7A726A', fontSize: '1rem' }}>
              Your digital keepsakes, letters, and memories made for the people you love.
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetDefaults}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              color: '#8A8077',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.1)',
              padding: '6px 14px',
              borderRadius: '999px',
            }}
            title="Reload showcase examples"
          >
            <RefreshCw size={13} /> Reset showcase gifts
          </button>
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(60, 45, 35, 0.1)',
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
                color: '#2A2421',
                marginBottom: '8px',
              }}
            >
              Nothing here yet.
            </h3>
            <p style={{ color: '#7A726A', marginBottom: '24px' }}>
              Let’s make something worth remembering for someone you love.
            </p>
            <Link
              href="/create"
              style={{
                backgroundColor: '#C97A6E',
                color: '#FFFFFF',
                borderRadius: '999px',
                padding: '12px 28px',
                fontSize: '0.95rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Heart size={16} fill="#FFFFFF" /> Create your first Drewtifull ♡
            </Link>
          </div>
        ) : (
          /* Visual Editorial Cards Grid */
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
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid rgba(60, 45, 35, 0.12)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(40, 30, 25, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(40, 30, 25, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(40, 30, 25, 0.05)';
                  }}
                >
                  {/* Card Thumbnail */}
                  <div
                    style={{
                      height: '220px',
                      backgroundColor: '#EBE4DB',
                      overflow: 'hidden',
                      position: 'relative',
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

                    {/* Status Pill */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: isPublished ? 'rgba(42, 36, 33, 0.9)' : 'rgba(255, 255, 255, 0.95)',
                        color: isPublished ? '#FAF5ED' : '#6A625A',
                        backdropFilter: 'blur(4px)',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
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
                          color: '#C97A6E',
                          fontWeight: 600,
                        }}
                      >
                        {project.occasion} gift
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.75rem',
                          color: '#2A2421',
                          marginTop: '2px',
                        }}
                      >
                        For {project.recipientName}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-hand)',
                          fontSize: '1.15rem',
                          color: '#8A8077',
                        }}
                      >
                        {template.name} theme · {project.photos.length} memories
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: 'auto',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(60, 45, 35, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      {/* Left: Edit button */}
                      <Link
                        href={`/editor/${project.id}`}
                        style={{
                          backgroundColor: '#FAF7F2',
                          border: '1px solid rgba(60, 45, 35, 0.12)',
                          color: '#2A2421',
                          padding: '8px 16px',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Edit3 size={14} /> Open Studio
                      </Link>

                      {/* Right: Actions menu */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {isPublished && (
                          <Link
                            href={`/p/${project.slug}`}
                            target="_blank"
                            title="View published gift"
                            style={{
                              padding: '8px',
                              color: '#7A726A',
                              borderRadius: '50%',
                            }}
                          >
                            <ExternalLink size={16} />
                          </Link>
                        )}

                        <button
                          type="button"
                          onClick={() => setActiveShareProject(project)}
                          title="Share link"
                          style={{
                            padding: '8px',
                            color: '#7A726A',
                          }}
                        >
                          <Share2 size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveQrProject(project)}
                          title="Printable QR card"
                          style={{
                            padding: '8px',
                            color: '#7A726A',
                          }}
                        >
                          <QrCode size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDuplicate(project.id)}
                          title="Duplicate this project"
                          style={{
                            padding: '8px',
                            color: '#7A726A',
                          }}
                        >
                          <Copy size={16} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(project.id, project.recipientName)}
                          title="Let this one go (Delete)"
                          style={{
                            padding: '8px',
                            color: '#B5ACA4',
                          }}
                        >
                          <Trash2 size={16} />
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
