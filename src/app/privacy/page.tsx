import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', paddingBottom: '6rem' }}>
      <header
        style={{
          padding: '18px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(60, 45, 35, 0.08)',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#8A8077',
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} /> Drewtifull Home
        </Link>
      </header>

      <main style={{ maxWidth: '780px', margin: '48px auto 0', padding: '0 24px', color: '#2A2421' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '12px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#8A8077', fontSize: '0.95rem', marginBottom: '32px' }}>
          Last updated: October 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.7, fontSize: '1rem', color: '#4A423B' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              1. Our Intimate Memory Promise
            </h2>
            <p>
              Drewtifull is built for love, warmth, and intimacy. We are not an advertising company and we never sell, monetize, or train generative models on your personal photos, handwritten letters, or loved ones’ names.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              2. Photos & Uploaded Content
            </h2>
            <p>
              Photos uploaded to Drewtifull are stored in secure object storage solely to render your gift website for your chosen recipient. You retain 100% ownership of all images, text, and memories.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              3. Publishing & Public Visibility
            </h2>
            <p>
              When you publish a gift microsite, it is accessible via a unique URL (e.g. <code>/p/your-slug</code>). You have full control to unpublish your project back to a private draft at any time from your studio dashboard, instantly removing it from public view.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              4. Deletion
            </h2>
            <p>
              When you delete a project from your studio, all associated text content and uploaded media assets are permanently purged from our servers.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
