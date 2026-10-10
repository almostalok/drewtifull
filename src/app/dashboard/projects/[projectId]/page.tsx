'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Project } from '@/lib/templates/types';
import { getProjectById, saveProject, publishProject, unpublishProject, deleteProject } from '@/lib/storage';
import { TEMPLATES } from '@/lib/templates';
import {
  ArrowLeft,
  ExternalLink,
  Edit3,
  Copy,
  Check,
  QrCode,
  Trash2,
  Share2,
  Eye,
  Calendar,
  Heart,
  Globe,
  Lock,
} from 'lucide-react';
import { ShareModal } from '@/components/ui/ShareModal';
import { QrCodeModal } from '@/components/ui/QrCodeModal';

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(() => getProjectById(resolvedParams.projectId) ?? null);
  const [customSlug, setCustomSlug] = useState(project?.slug || '');
  const [slugStatus, setSlugStatus] = useState<'idle' | 'checking' | 'available' | 'taken'>('idle');
  const [isCopied, setIsCopied] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [loading, setLoading] = useState(!project);

  useEffect(() => {
    if (!project) {
      fetch(`/api/projects/${resolvedParams.projectId}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.project) {
            setProject(data.project);
            setCustomSlug(data.project.slug);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [resolvedParams.projectId, project]);

  const handleSlugCheck = async (slugVal: string) => {
    const clean = slugVal.trim().toLowerCase().replace(/[^a-z0-9-]+/g, '');
    setCustomSlug(clean);
    if (clean.length < 3 || clean === project?.slug) {
      setSlugStatus('idle');
      return;
    }
    setSlugStatus('checking');
    try {
      const res = await fetch(`/api/slugs/${clean}/availability?excludeProjectId=${project?.id}`);
      const data = await res.json();
      setSlugStatus(data.available ? 'available' : 'taken');
    } catch {
      setSlugStatus('idle');
    }
  };

  const handleSaveSlug = () => {
    if (!project || slugStatus === 'taken') return;
    const updated = { ...project, slug: customSlug };
    saveProject(updated);
    setProject(updated);
    setSlugStatus('idle');
  };

  const handleTogglePublish = () => {
    if (!project) return;
    if (project.status === 'published') {
      const unpub = unpublishProject(project.id);
      if (unpub) setProject(unpub);
    } else {
      const pub = publishProject(project.id, customSlug);
      if (pub) setProject(pub);
    }
  };

  const handleDelete = () => {
    if (!project) return;
    if (confirm(`Permanently delete this project for "${project.recipientName}"?`)) {
      deleteProject(project.id);
      router.push('/dashboard');
    }
  };

  const copyUrl = () => {
    if (!project) return;
    const url = `${window.location.origin}/p/${project.slug}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF7F2' }}>
        loading project details...
      </div>
    );
  }

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FAF7F2' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '12px' }}>Project not found</h2>
        <Link href="/dashboard" style={{ backgroundColor: '#2A2421', color: '#FAF5ED', padding: '10px 24px', borderRadius: '999px', textDecoration: 'none' }}>
          Back to My Studio
        </Link>
      </div>
    );
  }

  const template = TEMPLATES.find((t) => t.id === project.templateId) || TEMPLATES[0];

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            href="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#8A8077',
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> My Studio
          </Link>
          <div style={{ height: '20px', width: '1px', backgroundColor: 'rgba(60, 45, 35, 0.1)' }} />
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              color: '#2A2421',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
            }}
          >
            drewtifull
          </Link>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Link
            href={`/editor/${project.id}`}
            style={{
              backgroundColor: '#2A2421',
              color: '#FAF5ED',
              borderRadius: '999px',
              padding: '9px 22px',
              fontSize: '0.88rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Edit3 size={15} /> Open Editor
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div style={{ maxWidth: '900px', margin: '40px auto 0', padding: '0 24px' }}>
        {/* Header Block */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: 'var(--shadow-paper)',
            border: '1px solid rgba(60, 45, 35, 0.08)',
            marginBottom: '28px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    backgroundColor: project.status === 'published' ? '#EBF2EC' : '#FAF3E6',
                    color: project.status === 'published' ? '#2F683D' : '#946317',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {project.status === 'published' ? <Globe size={13} /> : <Lock size={13} />}
                  {project.status === 'published' ? 'Published Online' : 'Private Draft'}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#8A8077', textTransform: 'capitalize' }}>
                  {project.occasion} gift · {template.name}
                </span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#2A2421', fontWeight: 400, marginBottom: '6px' }}>
                For {project.recipientName}
              </h1>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.25rem', color: '#C97A6E' }}>
                Created for your {project.relationship} ♡
              </p>
            </div>

            <button
              type="button"
              onClick={handleTogglePublish}
              style={{
                backgroundColor: project.status === 'published' ? '#FAF7F2' : '#C97A6E',
                color: project.status === 'published' ? '#544D47' : '#FFFFFF',
                border: project.status === 'published' ? '1px solid rgba(60, 45, 35, 0.15)' : 'none',
                borderRadius: '999px',
                padding: '10px 22px',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: project.status === 'published' ? 'none' : '0 2px 8px rgba(201, 122, 110, 0.35)',
              }}
            >
              <Heart size={15} fill={project.status === 'published' ? 'none' : '#FFFFFF'} />
              {project.status === 'published' ? 'Unpublish to Draft' : 'Publish to World ♡'}
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '18px',
              backgroundColor: '#FAF7F2',
              borderRadius: '12px',
              border: '1px solid rgba(60, 45, 35, 0.06)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8A8077', fontWeight: 600 }}>Total Views</div>
              <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: '#2A2421', marginTop: '4px' }}>
                {project.views || 0}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8A8077', fontWeight: 600 }}>Photos Attached</div>
              <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: '#2A2421', marginTop: '4px' }}>
                {project.photos.length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8A8077', fontWeight: 600 }}>Story Sections</div>
              <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: '#2A2421', marginTop: '4px' }}>
                {project.sections.length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#8A8077', fontWeight: 600 }}>Last Updated</div>
              <div style={{ fontSize: '0.95rem', color: '#544D47', marginTop: '8px' }}>
                {new Date(project.updatedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Public Sharing & Slug Settings */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-paper)',
            border: '1px solid rgba(60, 45, 35, 0.08)',
            marginBottom: '28px',
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#2A2421', marginBottom: '8px' }}>
            Public Web Address & Slug
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#6E655E', marginBottom: '20px' }}>
            Customize the unique link where {project.recipientName} can open their gift from any device.
          </p>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.92rem', color: '#8A8077' }}>drewtifull.com/p/</span>
            <input
              type="text"
              value={customSlug}
              onChange={(e) => handleSlugCheck(e.target.value)}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(60, 45, 35, 0.15)',
                fontSize: '0.95rem',
                backgroundColor: '#FAF7F2',
                color: '#2A2421',
              }}
            />
            {customSlug !== project.slug && (
              <button
                type="button"
                onClick={handleSaveSlug}
                disabled={slugStatus === 'taken'}
                style={{
                  backgroundColor: slugStatus === 'taken' ? '#D6D0CA' : '#2A2421',
                  color: '#FFFFFF',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: slugStatus === 'taken' ? 'not-allowed' : 'pointer',
                  fontSize: '0.88rem',
                }}
              >
                Save Custom Link
              </button>
            )}
          </div>

          {slugStatus === 'available' && (
            <p style={{ fontSize: '0.85rem', color: '#2F683D', marginBottom: '16px' }}>
              ✓ Link is available! Remember to click save.
            </p>
          )}
          {slugStatus === 'taken' && (
            <p style={{ fontSize: '0.85rem', color: '#C97A6E', marginBottom: '16px' }}>
              ✗ This address is already taken. Try adding a number or word.
            </p>
          )}

          {/* Share Actions */}
          {project.status === 'published' ? (
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid rgba(60, 45, 35, 0.08)' }}>
              <button
                type="button"
                onClick={copyUrl}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: '1px solid rgba(60, 45, 35, 0.15)',
                  backgroundColor: '#FAF7F2',
                  color: '#2A2421',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                {isCopied ? <Check size={15} color="#2F683D" /> : <Copy size={15} />}
                {isCopied ? 'Link Copied!' : 'Copy Public Link'}
              </button>

              <button
                type="button"
                onClick={() => setIsShareOpen(true)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: '1px solid rgba(60, 45, 35, 0.15)',
                  backgroundColor: '#FAF7F2',
                  color: '#2A2421',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <Share2 size={15} /> WhatsApp & Social
              </button>

              <button
                type="button"
                onClick={() => setIsQrOpen(true)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: '1px solid rgba(60, 45, 35, 0.15)',
                  backgroundColor: '#FAF7F2',
                  color: '#2A2421',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                <QrCode size={15} /> Printable Keepsake Card
              </button>

              <Link
                href={`/p/${project.slug}`}
                target="_blank"
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#2A2421',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  marginLeft: 'auto',
                }}
              >
                <ExternalLink size={15} /> Visit Public Site
              </Link>
            </div>
          ) : (
            <p style={{ fontSize: '0.88rem', color: '#8A8077', fontStyle: 'italic' }}>
              Publish this gift to enable direct link sharing, WhatsApp cards, and keepsake QR generation.
            </p>
          )}
        </div>

        {/* Danger Zone */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px 28px',
            border: '1px solid rgba(201, 122, 110, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1rem', color: '#2A2421', fontWeight: 600 }}>Delete this Project</h4>
            <p style={{ fontSize: '0.85rem', color: '#8A8077' }}>
              Once deleted, this project and its uploaded memories cannot be recovered.
            </p>
          </div>
          <button
            type="button"
            onClick={handleDelete}
            style={{
              backgroundColor: '#FBEBE8',
              color: '#B94B3B',
              border: '1px solid rgba(185, 75, 59, 0.3)',
              borderRadius: '8px',
              padding: '8px 18px',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Trash2 size={14} /> Delete Permanently
          </button>
        </div>
      </div>

      {isShareOpen && (
        <ShareModal
          isOpen={true}
          onClose={() => setIsShareOpen(false)}
          url={`${typeof window !== 'undefined' ? window.location.origin : 'https://drewtifull.com'}/p/${project.slug}`}
          recipientName={project.recipientName}
          occasion={project.occasion}
          onOpenQrCode={() => {
            setIsShareOpen(false);
            setIsQrOpen(true);
          }}
        />
      )}
      {isQrOpen && (
        <QrCodeModal
          isOpen={true}
          onClose={() => setIsQrOpen(false)}
          url={`${typeof window !== 'undefined' ? window.location.origin : 'https://drewtifull.com'}/p/${project.slug}`}
          recipientName={project.recipientName}
          occasion={project.occasion}
        />
      )}
    </div>
  );
}
