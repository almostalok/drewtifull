'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Gift, Heart, Menu, X } from 'lucide-react';

interface CatalogueHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function CatalogueHeader({ searchQuery, onSearchChange }: CatalogueHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 248, 242, 0.94)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(234, 219, 211, 0.7)',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Left: Wordmark with Coral Heart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.75rem',
            color: '#292321',
            letterSpacing: '-0.025em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontWeight: 400,
          }}
        >
          <span>drewtifull</span>
          <span
            style={{
              color: '#F28F91',
              fontSize: '1.25rem',
              transform: 'translateY(-1px)',
              display: 'inline-block',
            }}
          >
            ♡
          </span>
        </Link>
      </div>

      {/* Center: Main Navigation Links */}
      <nav
        className="hide-on-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '0.92rem',
            color: '#81746D',
            textDecoration: 'none',
            fontWeight: 400,
            transition: 'color 0.15s ease',
          }}
        >
          Home
        </Link>

        {/* Active "Templates" Link with Coral Underline */}
        <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link
            href="/templates"
            style={{
              fontSize: '0.92rem',
              color: '#292321',
              textDecoration: 'none',
              fontWeight: 500,
              paddingBottom: '4px',
            }}
          >
            Templates
          </Link>
          <span
            style={{
              position: 'absolute',
              bottom: '-2px',
              width: '100%',
              height: '2px',
              backgroundColor: '#F28F91',
              borderRadius: '2px',
            }}
          />
        </div>

        <Link
          href="/#how-it-works"
          style={{
            fontSize: '0.92rem',
            color: '#81746D',
            textDecoration: 'none',
            fontWeight: 400,
            transition: 'color 0.15s ease',
          }}
        >
          How it works
        </Link>

        <Link
          href="/#pricing"
          style={{
            fontSize: '0.92rem',
            color: '#81746D',
            textDecoration: 'none',
            fontWeight: 400,
            transition: 'color 0.15s ease',
          }}
        >
          Pricing
        </Link>
      </nav>

      {/* Right: Search, Gift Icon, Sign In, and Dark Rounded CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Search Input Box */}
        <div
          className="hide-on-mobile"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Search
            size={15}
            color="#A89C94"
            style={{ position: 'absolute', left: '14px', pointerEvents: 'none' }}
          />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              backgroundColor: '#FFF8F2',
              border: '1px solid #EADBD3',
              borderRadius: '999px',
              padding: '8px 16px 8px 36px',
              fontSize: '0.85rem',
              color: '#292321',
              outline: 'none',
              width: '190px',
              transition: 'all 0.2s ease',
            }}
          />
        </div>

        {/* Gift Icon */}
        <Link
          href="/templates/birthday"
          title="Browse occasions"
          style={{
            color: '#81746D',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Gift size={18} />
        </Link>

        {/* Sign in */}
        <Link
          href="/login"
          style={{
            fontSize: '0.88rem',
            color: '#292321',
            textDecoration: 'none',
            fontWeight: 400,
            marginLeft: '4px',
          }}
        >
          Sign in
        </Link>

        {/* Dark Rounded CTA: Create something ♡ */}
        <Link
          href="/create"
          style={{
            backgroundColor: '#292321',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '9px 20px',
            fontSize: '0.86rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 2px 10px rgba(41, 35, 33, 0.15)',
            transition: 'background-color 0.15s ease, transform 0.15s ease',
          }}
        >
          <span>Create something ♡</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="show-on-mobile-only"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#292321',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#FFF8F2',
            borderBottom: '1px solid #EADBD3',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
          }}
        >
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #EADBD3',
              borderRadius: '999px',
              padding: '10px 16px',
              fontSize: '0.9rem',
              color: '#292321',
            }}
          />
          <Link href="/" style={{ color: '#292321', textDecoration: 'none', fontSize: '1rem' }}>Home</Link>
          <Link href="/templates" style={{ color: '#F28F91', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Templates</Link>
          <Link href="/dashboard" style={{ color: '#292321', textDecoration: 'none', fontSize: '1rem' }}>My Studio</Link>
          <Link href="/login" style={{ color: '#292321', textDecoration: 'none', fontSize: '1rem' }}>Sign In</Link>
        </div>
      )}
    </header>
  );
}
