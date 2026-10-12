'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { WashiTape } from '@/components/ui/WashiTape';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Local / session guest access
    if (typeof window !== 'undefined') {
      localStorage.setItem('drewtifull_user', JSON.stringify({ email: email || 'creator@drewtifull.com' }));
    }
    router.push('/dashboard');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
      }}
    >
      <Link
        href="/"
        className="glass-pill"
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          padding: '8px 18px',
          fontSize: '0.86rem',
          textDecoration: 'none',
        }}
      >
        <ArrowLeft size={15} /> Back to Drewtifull
      </Link>

      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '44px 34px',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '-14px', right: '30px' }}>
          <WashiTape color="rose" width="90px" />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.1rem',
              color: 'var(--ink-primary)',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '4px',
            }}
          >
            drewtifull
          </Link>
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--accent-terracotta)' }}>
            welcome back to your memory studio ♡
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ink-secondary)', fontWeight: 500, marginBottom: '6px' }}>
              Your Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input"
              style={{
                width: '100%',
                padding: '12px 18px',
                borderRadius: '14px',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', fontWeight: 500 }}>Password</label>
              <a href="#" style={{ fontSize: '0.82rem', color: 'var(--accent-terracotta)', textDecoration: 'none', fontWeight: 500 }}>
                Forgot?
              </a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass-input"
              style={{
                width: '100%',
                padding: '12px 18px',
                borderRadius: '14px',
                fontSize: '0.95rem',
              }}
            />
          </div>

          <button
            type="submit"
            className="glass-cta"
            style={{
              marginTop: '10px',
              padding: '14px',
              fontSize: '0.96rem',
            }}
          >
            <span>Enter Studio</span>
            <Heart size={14} fill="#FFFFFF" />
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--ink-muted)' }}>
          New to Drewtifull?{' '}
          <Link href="/signup" style={{ color: 'var(--accent-terracotta)', fontWeight: 600, textDecoration: 'none' }}>
            Start creating free
          </Link>
        </div>
      </div>
    </div>
  );
}
