'use client';

import React from 'react';
import Link from 'next/link';

export function CatalogueFooter() {
  return (
    <footer
      style={{
        backgroundColor: '#F8EEE6',
        borderTop: '1px solid #EADBD3',
        padding: '48px 36px 36px 36px',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          maxWidth: '1560px',
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
                fontSize: '1.45rem',
                color: '#292321',
              }}
            >
              drewtifull
            </span>
            <span style={{ color: '#F28F91', fontSize: '1.1rem' }}>♡</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.84rem', color: '#81746D', maxWidth: '380px' }}>
            Turn your memories into a little corner of the internet that feels just like them.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#544D47', fontSize: '0.86rem', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/templates" style={{ color: '#544D47', fontSize: '0.86rem', textDecoration: 'none' }}>
            Templates
          </Link>
          <Link href="/create" style={{ color: '#544D47', fontSize: '0.86rem', textDecoration: 'none' }}>
            Create
          </Link>
          <Link href="/privacy" style={{ color: '#81746D', fontSize: '0.82rem', textDecoration: 'none' }}>
            Privacy
          </Link>
          <Link href="/terms" style={{ color: '#81746D', fontSize: '0.82rem', textDecoration: 'none' }}>
            Terms
          </Link>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1560px',
          margin: '28px auto 0 auto',
          paddingTop: '20px',
          borderTop: '1px solid rgba(234, 219, 211, 0.6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: '#A89C94',
        }}
      >
        <span>© {new Date().getFullYear()} drewtifull. All rights reserved.</span>
        <span>Crafted with love for cherished memories.</span>
      </div>
    </footer>
  );
}
