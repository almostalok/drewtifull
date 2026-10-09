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
      samplePhoto: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'anniversary',
      title: 'Anniversary',
      sub: 'for all the moments between then and now',
      icon: '🕯️',
      themeClass: 'terracotta',
      samplePhoto: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'proposal',
      title: 'Proposal',
      sub: 'for the beginning of forever',
      icon: '💍',
      themeClass: 'gold',
      samplePhoto: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'friendship',
      title: 'Friendship',
      sub: 'for your favorite human',
      icon: '🌿',
      themeClass: 'sage',
      samplePhoto: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'graduation',
      title: 'Graduation',
      sub: 'for the next chapter',
      icon: '🎓',
      themeClass: 'neutral',
      samplePhoto: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'farewell',
      title: 'Farewell',
      sub: 'for the memories we’ll keep',
      icon: '✈️',
      themeClass: 'rose',
      samplePhoto: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'just-because',
      title: 'Just Because',
      sub: 'because you don’t need a reason',
      icon: '💌',
      themeClass: 'gold',
      samplePhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'something-else',
      title: 'Something Else',
      sub: 'make it yours',
      icon: '✨',
      themeClass: 'sage',
      samplePhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
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
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', position: 'relative' }}>
      {/* Editorial Top Navigation */}
      <header
        style={{
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1360px',
          margin: '0 auto',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.9rem',
            color: '#2A2421',
            letterSpacing: '-0.02em',
          }}
        >
          drewtifull
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            href="/dashboard"
            style={{
              fontSize: '0.92rem',
              color: '#5A524B',
              fontWeight: 500,
            }}
          >
            My Gifts
          </Link>
          <a
            href="#templates"
            style={{
              fontSize: '0.92rem',
              color: '#5A524B',
              fontWeight: 500,
            }}
          >
            Templates
          </a>
          <Link
            href="/create"
            style={{
              backgroundColor: '#2A2421',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '10px 22px',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(42, 36, 33, 0.15)',
            }}
          >
            Create something ♡
          </Link>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section
        style={{
          padding: '4.5rem 1.5rem 6rem 1.5rem',
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#F9EBE8',
                color: '#C97A6E',
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '0.92rem',
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
                color: '#2A2421',
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Make something <br />
              <span style={{ fontStyle: 'italic', color: '#C97A6E' }}>beautiful</span> for <br />
              someone you love.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#5C544E',
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
                style={{
                  backgroundColor: '#C97A6E',
                  color: '#FFFFFF',
                  borderRadius: '999px',
                  padding: '16px 36px',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(201, 122, 110, 0.4)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <span>Create something ♡</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href="#templates"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(60, 45, 35, 0.15)',
                  color: '#2A2421',
                  borderRadius: '999px',
                  padding: '16px 30px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Explore templates
              </a>
            </div>

            {/* Handwritten Note Accent */}
            <div
              style={{
                marginTop: '2.5rem',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.25rem',
                color: '#8A8077',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>takes less than 3 minutes to publish & send</span>
              <Heart size={14} fill="#C97A6E" color="#C97A6E" />
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
                  url="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80"
                  caption="laughing until sunset"
                  rotation={4}
                  washiColor="gold"
                />
              </div>

              {/* Main Scrapbook Page Container */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid rgba(60, 45, 35, 0.1)',
                  padding: '24px 22px 32px 22px',
                  boxShadow: '0 20px 50px rgba(40, 30, 25, 0.12)',
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

                <div style={{ borderBottom: '1px solid rgba(60, 45, 35, 0.08)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#C97A6E',
                    }}
                  >
                    PREVIEW · FOR AANCHAL ♡
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.75rem',
                      color: '#2A2421',
                      marginTop: '4px',
                    }}
                  >
                    Happy Birthday, My Love
                  </h3>
                </div>

                <div
                  style={{
                    height: '240px',
                    backgroundColor: '#F3EFEA',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '16px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Sample microsite cover"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.35rem',
                    color: '#4A423B',
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
                    borderTop: '1px dashed rgba(60, 45, 35, 0.15)',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: '#8A8077', fontFamily: 'monospace' }}>
                    ♫ Acoustic Sunbeams
                  </span>
                  <Link
                    href="/p/aanchal-birthday"
                    target="_blank"
                    style={{
                      fontSize: '0.82rem',
                      color: '#C97A6E',
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
          padding: '6rem 1.5rem',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.4rem',
              color: '#C97A6E',
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
              color: '#2A2421',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            What are you making?
          </h2>
          <p style={{ color: '#7A726A', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
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
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(60, 45, 35, 0.12)',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 18px rgba(40, 30, 25, 0.05)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(40, 30, 25, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(40, 30, 25, 0.05)';
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
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  backgroundColor: '#F3EFEA',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={occ.samplePhoto}
                  alt={occ.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{occ.icon}</div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.7rem',
                  color: '#2A2421',
                  marginBottom: '4px',
                }}
              >
                {occ.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.15rem',
                  color: '#8A8077',
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
                  color: '#C97A6E',
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
          padding: '6rem 1.5rem',
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.4rem',
              color: '#C97A6E',
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
              color: '#2A2421',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            Pick a feeling.
          </h2>
          <p style={{ color: '#7A726A', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
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
            gap: '8px',
            marginBottom: '14px',
          }}
        >
          {occasionFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveOccasionFilter(f.id)}
              style={{
                backgroundColor: activeOccasionFilter === f.id ? '#2A2421' : '#FFFFFF',
                color: activeOccasionFilter === f.id ? '#FFFFFF' : '#2A2421',
                border: '1px solid rgba(60, 45, 35, 0.12)',
                borderRadius: '999px',
                padding: '8px 18px',
                fontSize: '0.88rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Aesthetic Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '6px',
            marginBottom: '3.5rem',
          }}
        >
          {aestheticFilters.map((a) => (
            <button
              key={a.id}
              onClick={() => setActiveAestheticFilter(a.id)}
              style={{
                backgroundColor: activeAestheticFilter === a.id ? '#F9EBE8' : 'transparent',
                color: activeAestheticFilter === a.id ? '#C97A6E' : '#7A726A',
                border: activeAestheticFilter === a.id ? '1px solid #C97A6E' : '1px solid transparent',
                borderRadius: '999px',
                padding: '4px 12px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.05rem',
                transition: 'all 0.2s ease',
              }}
            >
              #{a.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
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
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(60, 45, 35, 0.12)',
                overflow: 'hidden',
                boxShadow: '0 6px 24px rgba(40, 30, 25, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(40, 30, 25, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(40, 30, 25, 0.05)';
              }}
            >
              {/* Preview Image with Aesthetic Badges */}
              <div
                style={{
                  height: '250px',
                  backgroundColor: '#F3EFEA',
                  position: 'relative',
                  overflow: 'hidden',
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
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.94)',
                        backdropFilter: 'blur(4px)',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: 600,
                        color: '#2A2421',
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
                    backgroundColor: 'rgba(42, 36, 33, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#FAF5ED',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
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
                    fontSize: '1.8rem',
                    color: '#2A2421',
                    marginBottom: '4px',
                  }}
                >
                  {template.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '1.25rem',
                    color: '#C97A6E',
                    marginBottom: '10px',
                  }}
                >
                  {template.tagline}
                </p>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#6E655E',
                    lineHeight: 1.55,
                    marginBottom: '20px',
                  }}
                >
                  {template.description}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <Link
                    href={`/create?template=${template.id}&occasion=${template.occasion}`}
                    style={{
                      width: '100%',
                      backgroundColor: '#2A2421',
                      color: '#FFFFFF',
                      borderRadius: '999px',
                      padding: '12px',
                      fontSize: '0.92rem',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.2s',
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
          padding: '6rem 1.5rem',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: '1.35rem',
              color: '#C97A6E',
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
              color: '#2A2421',
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            What it feels like to receive one.
          </h2>
          <p style={{ color: '#7A726A', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
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
          {SAMPLE_PROJECTS.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setPreviewSampleId(sample.id)}
              style={{
                backgroundColor: previewSampleId === sample.id ? '#2A2421' : '#FFFFFF',
                color: previewSampleId === sample.id ? '#FFFFFF' : '#2A2421',
                border: '1px solid rgba(60, 45, 35, 0.15)',
                borderRadius: '999px',
                padding: '10px 20px',
                fontSize: '0.88rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>{sample.recipientName} ({sample.occasion})</span>
            </button>
          ))}
        </div>

        {/* Embedded Interactive Viewer Frame */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(60, 45, 35, 0.12)',
            boxShadow: '0 25px 60px rgba(40, 30, 25, 0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Top Browser Bar */}
          <div
            style={{
              padding: '12px 20px',
              backgroundColor: '#F8F4EE',
              borderBottom: '1px solid rgba(60, 45, 35, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#E29A8F' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EAD292' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#A2C2A7' }} />
            </div>

            <div
              style={{
                fontFamily: 'monospace',
                fontSize: '0.82rem',
                color: '#6A625A',
                backgroundColor: '#FFFFFF',
                padding: '4px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(60, 45, 35, 0.08)',
              }}
            >
              drewtifull.com/p/{selectedPreviewProject.slug}
            </div>

            <Link
              href={`/p/${selectedPreviewProject.slug}`}
              target="_blank"
              style={{
                fontSize: '0.82rem',
                color: '#C97A6E',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Full Screen <ExternalLink size={12} />
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
          maxWidth: '920px',
          margin: '0 auto',
          textAlign: 'center',
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
            color: '#2A2421',
            lineHeight: 1.15,
            fontWeight: 400,
            marginBottom: '1.5rem',
          }}
        >
          Drewtifull is not where people build websites. <br />
          <span style={{ fontStyle: 'italic', color: '#C97A6E' }}>
            It’s where people turn memories into gifts.
          </span>
        </h2>

        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: '#5C544E',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto',
          }}
        >
          When was the last time someone made you something on the internet that wasn’t a meme,
          an ad, or a text message? A Drewtifull is an intentional artifact of affection.
        </p>

        <Link
          href="/create"
          style={{
            backgroundColor: '#2A2421',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '16px 36px',
            fontSize: '1.05rem',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 18px rgba(42, 36, 33, 0.25)',
          }}
        >
          <span>Start making yours now ♡</span>
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '4rem 1.5rem 3rem 1.5rem',
          borderTop: '1px solid rgba(60, 45, 35, 0.1)',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem',
              color: '#2A2421',
              letterSpacing: '-0.02em',
            }}
          >
            drewtifull
          </span>
          <p style={{ fontSize: '0.85rem', color: '#8A8077', marginTop: '4px' }}>
            Make something beautiful for someone you love.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#6A625A' }}>
          <Link href="/dashboard">My Studio</Link>
          <a href="#templates">Templates</a>
          <Link href="/create">Create Gift</Link>
        </div>
      </footer>
    </div>
  );
}
