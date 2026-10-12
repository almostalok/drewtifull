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
      className="glass-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '10px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '62px',
        boxSizing: 'border-box',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Left: Wordmark with Warm Terracotta Heart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.75rem',
            color: 'var(--ink-primary)',
            letterSpacing: '-0.025em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontWeight: 400,
            lineHeight: 1,
            transition: 'transform 0.2s ease',
          }}
        >
          <span>drewtifull</span>
          <span
            style={{
              color: 'var(--accent-terracotta)',
              fontSize: '1.25rem',
              transform: 'translateY(-1px)',
              display: 'inline-block',
              fontWeight: 300,
            }}
          >
            ♡
          </span>
        </Link>
      </div>

      {/* Center: Main Navigation Links with Non-AI Font */}
      <nav
        className="hide-on-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: '0.92rem',
            color: 'var(--ink-muted)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.15s ease',
          }}
        >
          Home
        </Link>

        {/* Active "Templates" Link with Terracotta Underline */}
        <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link
            href="/templates"
            style={{
              fontSize: '0.92rem',
              color: 'var(--ink-primary)',
              textDecoration: 'none',
              fontWeight: 600,
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
              height: '2.5px',
              backgroundColor: 'var(--accent-terracotta)',
              borderRadius: '999px',
              boxShadow: '0 1px 4px rgba(200, 101, 82, 0.4)',
            }}
          />
        </div>

        <Link
          href="/#how-it-works"
          style={{
            fontSize: '0.92rem',
            color: 'var(--ink-muted)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.15s ease',
          }}
        >
          How it works
        </Link>

        <Link
          href="/#pricing"
          style={{
            fontSize: '0.92rem',
            color: 'var(--ink-muted)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.15s ease',
          }}
        >
          Pricing
        </Link>
      </nav>

      {/* Right: Search, Gift Icon, Sign In, and Neumo-Glass CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Recessed Inset Neumorphic Search Input */}
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
            color="var(--ink-muted)"
            style={{ position: 'absolute', left: '14px', pointerEvents: 'none', zIndex: 2 }}
          />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="glass-input"
            style={{
              padding: '8px 16px 8px 36px',
              fontSize: '0.84rem',
              width: '190px',
            }}
          />
        </div>

        {/* Gift Icon Button in Glass Pill */}
        <Link
          href="/templates"
          title="Browse occasions"
          className="hide-on-mobile glass-icon-btn"
          style={{
            textDecoration: 'none',
          }}
        >
          <Gift size={16} />
        </Link>

        {/* Sign in */}
        <Link
          href="/login"
          className="hide-on-mobile"
          style={{
            fontSize: '0.88rem',
            color: 'var(--ink-secondary)',
            textDecoration: 'none',
            fontWeight: 500,
            padding: '6px 10px',
            transition: 'color 0.15s ease',
          }}
        >
          Sign in
        </Link>

        {/* Tactile Clay/Terracotta Neumo-Glass CTA */}
        <Link
          href="/create"
          className="hide-on-mobile glass-cta"
          style={{
            padding: '9px 20px',
            fontSize: '0.86rem',
            textDecoration: 'none',
          }}
        >
          <span>Create something ♡</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="show-on-mobile-only glass-icon-btn"
          style={{
            display: 'none',
          }}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu in Frosted Neumo-Glass */}
      {mobileMenuOpen && (
        <div
          className="glass-modal"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: '12px',
            right: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 100,
          }}
        >
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="glass-input"
            style={{
              padding: '10px 18px',
              fontSize: '0.9rem',
            }}
          />
          <Link href="/" style={{ color: 'var(--ink-primary)', textDecoration: 'none', fontSize: '0.96rem', fontWeight: 500 }}>Home</Link>
          <Link href="/templates" style={{ color: 'var(--accent-terracotta)', fontWeight: 600, textDecoration: 'none', fontSize: '0.96rem' }}>Templates</Link>
          <Link href="/#how-it-works" style={{ color: 'var(--ink-primary)', textDecoration: 'none', fontSize: '0.96rem', fontWeight: 500 }}>How it works</Link>
          <Link href="/#pricing" style={{ color: 'var(--ink-primary)', textDecoration: 'none', fontSize: '0.96rem', fontWeight: 500 }}>Pricing</Link>
          <Link href="/login" style={{ color: 'var(--ink-primary)', textDecoration: 'none', fontSize: '0.96rem', fontWeight: 500 }}>Sign In</Link>
          <Link
            href="/create"
            className="glass-cta"
            style={{
              padding: '12px 20px',
              fontSize: '0.92rem',
              textDecoration: 'none',
              textAlign: 'center',
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
