'use client';

import React from 'react';
import Link from 'next/link';

export function CatalogueFooter() {
  return (
    <footer
      style={{
        background: 'rgba(247, 243, 237, 0.72)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.85)',
        padding: '48px 40px 36px 40px',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                color: 'var(--ink-primary)',
              }}
            >
              drewtifull
            </span>
            <span style={{ color: 'var(--accent-terracotta)', fontSize: '1.15rem' }}>♡</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--ink-muted)', maxWidth: '380px' }}>
            Turn your memories into a little corner of the internet that feels just like them.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--ink-secondary)', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}>
            Home
          </Link>
          <Link href="/templates" style={{ color: 'var(--ink-secondary)', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}>
            Templates
          </Link>
          <Link href="/create" style={{ color: 'var(--ink-secondary)', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 500 }}>
            Create
          </Link>
          <Link href="/privacy" style={{ color: 'var(--ink-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>
            Privacy
          </Link>
          <Link href="/terms" style={{ color: 'var(--ink-muted)', fontSize: '0.84rem', textDecoration: 'none' }}>
            Terms
          </Link>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1440px',
          margin: '28px auto 0 auto',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.55)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--ink-muted)',
        }}
      >
        <span>© {new Date().getFullYear()} drewtifull. All rights reserved.</span>
        <span>Crafted with love for cherished memories.</span>
      </div>
    </footer>
  );
}
