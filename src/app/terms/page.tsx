import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p style={{ color: '#8A8077', fontSize: '0.95rem', marginBottom: '32px' }}>
          Last updated: October 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: 1.7, fontSize: '1rem', color: '#4A423B' }}>
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              1. Purpose of Service
            </h2>
            <p>
              Drewtifull provides digital stationery, interactive memory microsites, and keepsake creation tools for personal, non-commercial celebration between individuals.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              2. Acceptable Conduct
            </h2>
            <p>
              Users may not upload defamatory, infringing, abusive, or harmful material. Drewtifull reserves the right to suspend any published microsite that violates safety standards or copyright laws.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#2A2421', marginBottom: '8px' }}>
              3. Service Availability
            </h2>
            <p>
              We strive to keep your published keepsake pages accessible forever. We maintain regular data backups to ensure your memories remain safe and available for years to come.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
