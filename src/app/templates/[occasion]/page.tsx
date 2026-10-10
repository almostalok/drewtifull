'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { TEMPLATES } from '@/lib/templates';
import { Occasion } from '@/lib/templates/types';
import { ArrowLeft, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { WashiTape } from '@/components/ui/WashiTape';

const OCCASION_TITLES: Record<string, { title: string; subtitle: string; icon: string }> = {
  birthday: {
    title: 'Birthday Gift Websites',
    subtitle: 'From nostalgic scrapbooks and 35mm film strips to vintage newspapers and starlight memories.',
    icon: '🎂',
  },
  anniversary: {
    title: 'Anniversary & Romantic Keepsakes',
    subtitle: 'Celebrate your journey from the day you met until today.',
    icon: '🕯️',
  },
  proposal: {
    title: 'Proposal Microsites',
    subtitle: 'A cinematic progression leading to the question of a lifetime.',
    icon: '💍',
  },
  friendship: {
    title: 'Friendship Keepsakes',
    subtitle: 'Inside jokes, chaotic memories, and unwavering loyalty.',
    icon: '🌿',
  },
  graduation: {
    title: 'Graduation Websites',
    subtitle: 'Honoring the milestones and the next chapter ahead.',
    icon: '🎓',
  },
  farewell: {
    title: 'Farewell & Long-Distance Memories',
    subtitle: 'Miles apart but never distant. Celebrating the memories we keep.',
    icon: '✈️',
  },
  'just-because': {
    title: 'Just Because Sites',
    subtitle: 'No anniversary, no holiday. Simply because I love you today.',
    icon: '💌',
  },
};

export default function OccasionTemplatesPage({
  params,
}: {
  params: Promise<{ occasion: string }>;
}) {
  const resolvedParams = use(params);
  const occKey = resolvedParams.occasion.toLowerCase();
  const occInfo = OCCASION_TITLES[occKey] || {
    title: `${resolvedParams.occasion.charAt(0).toUpperCase() + resolvedParams.occasion.slice(1)} Templates`,
    subtitle: 'Personalized digital gift templates made with love.',
    icon: '✨',
  };

  const templates = TEMPLATES.filter(
    (t) => t.occasion === occKey || occKey === 'all'
  );

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
            href="/templates"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#8A8077',
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> All Templates
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

        <Link
          href={`/create?occasion=${occKey}`}
          style={{
            backgroundColor: '#2A2421',
            color: '#FAF5ED',
            borderRadius: '999px',
            padding: '8px 20px',
            fontSize: '0.88rem',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          Create {occKey} Gift ♡
        </Link>
      </header>

      {/* Header Banner */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 32px', textAlign: 'center' }}>
        <span style={{ fontSize: '2.5rem', display: 'inline-block', marginBottom: '8px' }}>
          {occInfo.icon}
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            color: '#2A2421',
            fontWeight: 400,
            marginBottom: '12px',
          }}
        >
          {occInfo.title}
        </h1>
        <p
          style={{
            color: '#6E655E',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          {occInfo.subtitle}
        </p>
      </div>

      {/* Templates Grid */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {templates.map((template) => (
          <div
            key={template.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-paper)',
              border: '1px solid rgba(60, 45, 35, 0.08)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '220px',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: template.theme.background,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={template.previewImage}
                alt={template.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                <WashiTape color="rose" width="80px" />
              </div>
            </div>

            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.45rem',
                  color: '#2A2421',
                  marginBottom: '4px',
                }}
              >
                {template.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1.1rem',
                  color: '#8A8077',
                  marginBottom: '10px',
                }}
              >
                {template.tagline}
              </p>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#6E655E',
                  lineHeight: 1.5,
                  marginBottom: '20px',
                  flex: 1,
                }}
              >
                {template.description}
              </p>

              <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                <Link
                  href={`/templates/${occKey}/${template.id}`}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(60, 45, 35, 0.15)',
                    backgroundColor: '#FFFFFF',
                    color: '#2A2421',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  <Eye size={15} /> Preview
                </Link>

                <Link
                  href={`/create?template=${template.id}&occasion=${occKey}`}
                  style={{
                    flex: 1.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#2A2421',
                    color: '#FAF5ED',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  Personalize <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
