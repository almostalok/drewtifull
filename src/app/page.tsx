'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TEMPLATES } from '@/lib/templates';
import { SAMPLE_PROJECTS } from '@/lib/sampleProjects';
import { Occasion, AestheticTag } from '@/lib/templates/types';
import { WashiTape } from '@/components/ui/WashiTape';
import { PolaroidFrame } from '@/components/ui/PolaroidFrame';
import { TemplateRenderer } from '@/components/renderer/TemplateRenderer';
import {
  Heart,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export default function LandingPage() {
  const [activeOccasionFilter, setActiveOccasionFilter] = useState<string>('all');
  const [activeAestheticFilter, setActiveAestheticFilter] = useState<string>('all');
  const [previewSampleId, setPreviewSampleId] = useState<string>('proj_aanchal_bday');

  const occasionCards: Array<{
    id: Occasion;
    title: string;
    sub: string;
    icon: string;
    themeClass: string;
    samplePhoto: string;
  }> = [
    {
      id: 'birthday',
      title: 'Birthday',
      sub: 'for another trip around the sun',
      icon: '🎂',
      themeClass: 'rose',
      samplePhoto: '/occasions/birthday.jpg',
    },
    {
      id: 'anniversary',
      title: 'Anniversary',
      sub: 'for all the moments between then and now',
      icon: '🕯️',
      themeClass: 'terracotta',
      samplePhoto: '/occasions/anniversary.jpg',
    },
    {
      id: 'proposal',
      title: 'Proposal',
      sub: 'for the beginning of forever',
      icon: '💍',
      themeClass: 'gold',
      samplePhoto: '/occasions/proposal.jpg',
    },
    {
      id: 'friendship',
      title: 'Friendship',
      sub: 'for your favorite human',
      icon: '🌿',
      themeClass: 'sage',
      samplePhoto: '/occasions/friendship.jpg',
    },
    {
      id: 'graduation',
      title: 'Graduation',
      sub: 'for the next chapter',
      icon: '🎓',
      themeClass: 'neutral',
      samplePhoto: '/occasions/graduation.jpg',
    },
    {
      id: 'farewell',
      title: 'Farewell',
      sub: 'for the memories we’ll keep',
      icon: '✈️',
      themeClass: 'rose',
      samplePhoto: '/occasions/farewell.jpg',
    },
    {
      id: 'just-because',
      title: 'Just Because',
      sub: 'because you don’t need a reason',
      icon: '💌',
      themeClass: 'gold',
      samplePhoto: '/occasions/just_because.jpg',
    },
    {
      id: 'something-else',
      title: 'Something Else',
      sub: 'make it yours',
      icon: '✨',
      themeClass: 'sage',
      samplePhoto: '/occasions/parents.jpg',
    },
  ];

  const aestheticFilters: Array<{ id: string; label: string }> = [
    { id: 'all', label: 'All Feels' },
    { id: 'soft', label: 'Soft' },
    { id: 'cute', label: 'Cute' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'cinematic', label: 'Cinematic' },
    { id: 'scrapbook', label: 'Scrapbook' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'romantic', label: 'Romantic' },
    { id: 'vintage', label: 'Vintage' },
    { id: 'dark', label: 'Dark Sky' },
    { id: 'y2k', label: 'Y2K' },
    { id: 'retro', label: 'Retro News' },
  ];

  const occasionFilters: Array<{ id: string; label: string }> = [
    { id: 'all', label: 'All' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'proposal', label: 'Proposal' },
    { id: 'friendship', label: 'Friendship' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'farewell', label: 'Farewell' },
    { id: 'just-because', label: 'Just Because' },
  ];

  // Filter templates
  const filteredTemplates = TEMPLATES.filter((t) => {
    const matchOccasion =
      activeOccasionFilter === 'all' || t.occasion === activeOccasionFilter;
    const matchAesthetic =
      activeAestheticFilter === 'all' ||
      t.aesthetic.includes(activeAestheticFilter as AestheticTag);
    return matchOccasion && matchAesthetic;
  });

  const selectedPreviewProject =
    SAMPLE_PROJECTS.find((p) => p.id === previewSampleId) || SAMPLE_PROJECTS[0];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent', position: 'relative' }}>
      {/* Neumorphic Frosted Glass Sticky Top Navigation */}
      <header
        className="glass-nav"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '12px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.25s ease',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.95rem',
            color: 'var(--ink-primary)',
            letterSpacing: '-0.025em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
          }}
        >
          <span>drewtifull</span>
          <span style={{ color: 'var(--accent-terracotta)', fontSize: '1.35rem' }}>♡</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          <Link
            href="/dashboard"
            style={{
              fontSize: '0.92rem',
              color: 'var(--ink-secondary)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
          >
            My Gifts
          </Link>
          <Link
            href="/templates"
            style={{
              fontSize: '0.92rem',
              color: 'var(--ink-secondary)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.15s ease',
            }}
          >
            Templates
          </Link>
          <Link
            href="/create"
            className="glass-cta"
            style={{
              padding: '9px 22px',
              fontSize: '0.88rem',
              textDecoration: 'none',
            }}
          >
            Create something ♡
          </Link>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section
        style={{
          padding: '4.5rem 1.5rem 5.5rem 1.5rem',
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left Hero Statement */}
          <div>
            <div
              className="glass-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--accent-terracotta)',
                padding: '6px 16px',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-hand)',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={15} /> digital gift platform
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.2rem, 6.5vw, 5.6rem)',
                lineHeight: 1.04,
                fontWeight: 400,
                color: 'var(--ink-primary)',
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Make something <br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent-terracotta)' }}>beautiful</span> for <br />
              someone you love.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: 1.6,
                color: 'var(--ink-secondary)',
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              Turn your photos, unspoken words, and favorite memories into a little corner of the internet.
              No design skills. No generic cards. Just pure feeling.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/create"
                className="glass-cta"
                style={{
                  padding: '16px 36px',
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                }}
              >
                <span>Create something ♡</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/templates"
                className="glass-pill"
                style={{
                  padding: '15px 30px',
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                Explore templates
              </Link>
            </div>

            {/* Handwritten Note Accent */}
            <div
              style={{
                marginTop: '2.5rem',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: 'var(--ink-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>takes less than 3 minutes to publish & send</span>
              <Heart size={14} fill="var(--accent-terracotta)" color="var(--accent-terracotta)" />
            </div>
          </div>

          {/* Right Hero Visual: Tactile Scrapbook Layering */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
              }}
            >
              {/* Decorative Background Stamp Frame */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '100%',
                  height: '100%',
                  border: '1.5px dashed rgba(201, 122, 110, 0.35)',
                  borderRadius: '16px',
                  pointerEvents: 'none',
                }}
              />

              {/* Tilted Polaroid 1: Top Right */}
              <div
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-10px',
                  zIndex: 10,
                  transform: 'rotate(5deg)',
                }}
              >
                <PolaroidFrame
                  url="/memories/anniversary_laugh.jpg"
                  caption="laughing until sunset"
                  rotation={4}
                  washiColor="gold"
                />
              </div>

              {/* Main Scrapbook Page Container in Neumo-Glass Panel */}
              <div
                className="glass-panel"
                style={{
                  padding: '24px 22px 32px 22px',
                  position: 'relative',
                  zIndex: 5,
                }}
              >
                <WashiTape
                  color="rose"
                  rotation={-2}
                  width="110px"
                  style={{ top: '-10px', left: '30px' }}
                />

                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.65)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-terracotta)',
                      fontWeight: 600,
                    }}
                  >
                    PREVIEW · FOR AANCHAL ♡
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.85rem',
                      color: 'var(--ink-primary)',
                      marginTop: '4px',
                    }}
                  >
                    Happy Birthday, My Love
                  </h3>
                </div>

                <div
                  style={{
                    height: '240px',
                    backgroundColor: 'rgba(235, 227, 218, 0.45)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    boxShadow: 'var(--neumo-shadow-inset)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/memories/hero_portrait.jpg"
                    alt="Sample microsite cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.4rem',
                    color: 'var(--ink-secondary)',
                    lineHeight: 1.4,
                    marginBottom: '14px',
                  }}
                >
                  “I wanted to make something for you that you could keep forever. Here is to all our sunny days...”
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '12px',
                    borderTop: '1px dashed rgba(180, 165, 150, 0.35)',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', fontFamily: 'monospace' }}>
                    ♫ Acoustic Sunbeams
                  </span>
                  <Link
                    href="/p/aanchal-birthday"
                    target="_blank"
                    style={{
                      fontSize: '0.84rem',
                      color: 'var(--accent-terracotta)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Live gift <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OCCASION SELECTION */}
      <section
        style={{
          padding: '5rem 1.5rem',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.45rem',
              color: 'var(--accent-terracotta)',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Start with the heart
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--ink-primary)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            What are you making?
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
            Choose an occasion. Each one is curated with dedicated storytelling sequences, editorial layouts,
            and gentle typography.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {occasionCards.map((occ, idx) => (
            <Link
              key={occ.id}
              href={`/create?occasion=${occ.id}`}
              className="glass-card"
              style={{
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              <WashiTape
                color={
                  occ.themeClass === 'rose' || occ.themeClass === 'sage' || occ.themeClass === 'gold'
                    ? occ.themeClass
                    : 'neutral'
                }
                rotation={idx % 2 === 0 ? -1.5 : 2}
                width="70px"
                style={{ top: '-8px', right: '20px' }}
              />

              <div
                style={{
                  height: '160px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  backgroundColor: 'rgba(235, 227, 218, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: 'var(--neumo-shadow-inset)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={occ.samplePhoto}
                  alt={occ.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                />
              </div>

              <div style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{occ.icon}</div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  color: 'var(--ink-primary)',
                  marginBottom: '4px',
                }}
              >
                {occ.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.2rem',
                  color: 'var(--ink-muted)',
                  marginBottom: '16px',
                }}
              >
                “{occ.sub}”
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-terracotta)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                <span>Make a {occ.title} gift</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: TEMPLATE EXPLORER */}
      <section
        id="templates"
        style={{
          padding: '5rem 1.5rem',
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.45rem',
              color: 'var(--accent-terracotta)',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Aesthetic library
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--ink-primary)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            Pick a feeling.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
            Browse through 12 bespoke handcrafted concepts. Every template is mobile-first, editorial, and
            infused with warmth.
          </p>
        </div>

        {/* Occasion Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '14px',
          }}
        >
          {occasionFilters.map((f) => {
            const isActive = activeOccasionFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveOccasionFilter(f.id)}
                className={`glass-pill ${isActive ? 'active' : ''}`}
                style={{
                  padding: '8px 22px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#FFFFFF' : 'var(--ink-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, #DE745D 0%, #BA5540 100%)'
                    : undefined,
                  boxShadow: isActive
                    ? 'inset 2px 2px 4px rgba(0,0,0,0.25), inset -2px -2px 4px rgba(255,255,255,0.25), 0 2px 8px rgba(200, 101, 82, 0.3)'
                    : undefined,
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Aesthetic Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '3.5rem',
          }}
        >
          {aestheticFilters.map((a) => {
            const isActive = activeAestheticFilter === a.id;
            return (
              <button
                key={a.id}
                onClick={() => setActiveAestheticFilter(a.id)}
                className={`glass-pill ${isActive ? 'active' : ''}`}
                style={{
                  padding: '5px 14px',
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.15rem',
                  color: isActive ? 'var(--accent-terracotta)' : 'var(--ink-muted)',
                  borderColor: isActive ? 'var(--accent-terracotta)' : undefined,
                }}
              >
                #{a.label}
              </button>
            );
          })}
        </div>

        {/* Templates Grid in Neumo-Glass Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="glass-card"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Preview Image with Aesthetic Badges */}
              <div
                style={{
                  height: '250px',
                  backgroundColor: 'rgba(235, 227, 218, 0.45)',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={template.previewImage}
                  alt={template.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    gap: '6px',
                  }}
                >
                  {template.aesthetic.map((tag, idx) => (
                    <span
                      key={idx}
                      className="glass-badge"
                      style={{
                        padding: '3px 10px',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: 600,
                        color: 'var(--ink-primary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(37, 32, 29, 0.78)',
                    backdropFilter: 'blur(6px)',
                    color: '#FAF5ED',
                    padding: '3px 12px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {template.occasion}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.85rem',
                    color: 'var(--ink-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {template.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.3rem',
                    color: 'var(--accent-terracotta)',
                    marginBottom: '10px',
                  }}
                >
                  {template.tagline}
                </p>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--ink-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {template.description}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <Link
                    href={`/create?template=${template.id}&occasion=${template.occasion}`}
                    className="glass-cta"
                    style={{
                      width: '100%',
                      padding: '12px',
                      fontSize: '0.94rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Use this template</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: LIVE SHOWCASE INTERACTIVE DEMO */}
      <section
        style={{
          padding: '5rem 1.5rem',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.45rem',
              color: 'var(--accent-terracotta)',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Experience the feeling
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--ink-primary)',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            What it feels like to receive one.
          </h2>
          <p style={{ color: 'var(--ink-secondary)', fontSize: '1.02rem', maxWidth: '580px', margin: '0 auto' }}>
            Switch between real published gifts below. Every page is a full interactive microsite
            with ambient soundtrack, wax-sealed letters, and photo memories.
          </p>
        </div>

        {/* Showcase Switcher Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {SAMPLE_PROJECTS.map((sample) => {
            const isActive = previewSampleId === sample.id;
            return (
              <button
                key={sample.id}
                onClick={() => setPreviewSampleId(sample.id)}
                className={`glass-pill ${isActive ? 'active' : ''}`}
                style={{
                  padding: '10px 22px',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#FFFFFF' : 'var(--ink-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, #322A26 0%, #1F1917 100%)'
                    : undefined,
                  boxShadow: isActive
                    ? 'inset 2px 2px 4px rgba(0,0,0,0.35), inset -2px -2px 4px rgba(255,255,255,0.2), 0 2px 8px rgba(40, 30, 25, 0.25)'
                    : undefined,
                }}
              >
                <span>{sample.recipientName} ({sample.occasion})</span>
              </button>
            );
          })}
        </div>

        {/* Embedded Interactive Viewer Frame in Frosted Glass */}
        <div
          className="glass-panel"
          style={{
            overflow: 'hidden',
          }}
        >
          {/* Top Browser Bar */}
          <div
            style={{
              padding: '14px 24px',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '7px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E29A8F', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.1)' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EAD292', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.1)' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#A2C2A7', boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.1)' }} />
            </div>

            <div
              className="glass-input"
              style={{
                fontFamily: 'monospace',
                fontSize: '0.84rem',
                color: 'var(--ink-secondary)',
                padding: '5px 22px',
              }}
            >
              drewtifull.com/p/{selectedPreviewProject.slug}
            </div>

            <Link
              href={`/p/${selectedPreviewProject.slug}`}
              target="_blank"
              style={{
                fontSize: '0.84rem',
                color: 'var(--accent-terracotta)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Full Screen <ExternalLink size={13} />
            </Link>
          </div>

          {/* Embedded Renderer Preview */}
          <div style={{ maxHeight: '680px', overflowY: 'auto' }}>
            <TemplateRenderer
              project={selectedPreviewProject}
              isEditorPreview={false}
              isPublishedView={false}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: PHILOSOPHY */}
      <section
        style={{
          padding: '6rem 1.5rem',
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          className="glass-panel"
          style={{
            padding: '4rem 2.5rem',
          }}
        >
          <WashiTape
            color="rose"
            rotation={-2}
            width="130px"
            style={{ position: 'relative', margin: '0 auto 2rem auto', display: 'block' }}
          />

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              color: 'var(--ink-primary)',
              lineHeight: 1.15,
              fontWeight: 400,
              marginBottom: '1.5rem',
            }}
          >
            Drewtifull is not where people build websites. <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent-terracotta)' }}>
              It’s where people turn memories into gifts.
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'var(--ink-secondary)',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            When was the last time someone made you something on the internet that wasn’t a meme,
            an ad, or a text message? A Drewtifull is an intentional artifact of affection.
          </p>

          <Link
            href="/create"
            className="glass-cta"
            style={{
              padding: '16px 36px',
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            <span>Start making yours now ♡</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: 'rgba(247, 243, 237, 0.75)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.85)',
          padding: '4rem 2.5rem 3rem 2.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.7rem',
                  color: 'var(--ink-primary)',
                  letterSpacing: '-0.02em',
                }}
              >
                drewtifull
              </span>
              <span style={{ color: 'var(--accent-terracotta)', fontSize: '1.25rem' }}>♡</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', marginTop: '4px' }}>
              Make something beautiful for someone you love.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '22px', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
            <Link href="/dashboard" style={{ color: 'var(--ink-secondary)', textDecoration: 'none', fontWeight: 500 }}>My Studio</Link>
            <Link href="/templates" style={{ color: 'var(--ink-secondary)', textDecoration: 'none', fontWeight: 500 }}>Templates</Link>
            <Link href="/create" style={{ color: 'var(--ink-secondary)', textDecoration: 'none', fontWeight: 500 }}>Create Gift</Link>
            <Link href="/privacy" style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>Privacy</Link>
            <Link href="/terms" style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
