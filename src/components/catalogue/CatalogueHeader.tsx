'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Gift, Menu, X } from 'lucide-react';

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
        backgroundColor: 'rgba(255, 248, 242, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(234, 219, 211, 0.75)',
        padding: '8px 44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '52px',
        boxSizing: 'border-box',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Left: Wordmark with Coral Heart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.65rem',
            color: '#292321',
            letterSpacing: '-0.025em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          <span>drewtifull</span>
          <span
            style={{
              color: '#F28F91',
              fontSize: '1.2rem',
              transform: 'translateY(-1px)',
              display: 'inline-block',
              fontWeight: 300,
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
            fontSize: '0.9rem',
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
              fontSize: '0.9rem',
              color: '#292321',
              textDecoration: 'none',
              fontWeight: 500,
              paddingBottom: '3px',
            }}
          >
            Templates
          </Link>
          <span
            style={{
              position: 'absolute',
              bottom: '-3px',
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
            fontSize: '0.9rem',
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
            fontSize: '0.9rem',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
            size={14}
            color="#A89C94"
            style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }}
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
              padding: '6px 14px 6px 32px',
              fontSize: '0.82rem',
              color: '#292321',
              outline: 'none',
              width: '180px',
              transition: 'all 0.2s ease',
            }}
          />
        </div>

        {/* Gift Icon */}
        <Link
          href="/templates/birthday"
          title="Browse occasions"
          className="hide-on-mobile"
          style={{
            color: '#81746D',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Gift size={17} />
        </Link>

        {/* Sign in */}
        <Link
          href="/login"
          className="hide-on-mobile"
          style={{
            fontSize: '0.86rem',
            color: '#292321',
            textDecoration: 'none',
            fontWeight: 400,
            marginLeft: '2px',
          }}
        >
          Sign in
        </Link>

        {/* Dark Rounded CTA: Create something ♡ */}
        <Link
          href="/create"
          className="hide-on-mobile"
          style={{
            backgroundColor: '#292321',
            color: '#FFFFFF',
            borderRadius: '999px',
            padding: '7px 18px',
            fontSize: '0.84rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: '0 2px 8px rgba(41, 35, 33, 0.15)',
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
            padding: '6px',
            borderRadius: '6px',
          }}
          aria-label="Toggle mobile menu"
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
            gap: '14px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            zIndex: 100,
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
              padding: '8px 16px',
              fontSize: '0.88rem',
              color: '#292321',
            }}
          />
          <Link href="/" style={{ color: '#292321', textDecoration: 'none', fontSize: '0.95rem' }}>Home</Link>
          <Link href="/templates" style={{ color: '#F28F91', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>Templates</Link>
          <Link href="/#how-it-works" style={{ color: '#292321', textDecoration: 'none', fontSize: '0.95rem' }}>How it works</Link>
          <Link href="/#pricing" style={{ color: '#292321', textDecoration: 'none', fontSize: '0.95rem' }}>Pricing</Link>
          <Link href="/login" style={{ color: '#292321', textDecoration: 'none', fontSize: '0.95rem' }}>Sign In</Link>
          <Link
            href="/create"
            style={{
              backgroundColor: '#292321',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '10px 18px',
              fontSize: '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              marginTop: '4px',
            }}
          >
            Create something ♡
          </Link>
        </div>
      )}
    </header>
  );
}
