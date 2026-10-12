'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';
import { WashiTape } from '@/components/ui/WashiTape';

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('drewtifull_user', JSON.stringify({ name, email: email || 'creator@drewtifull.com' }));
    }
    router.push('/create');
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
          <WashiTape color="sage" width="90px" />
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
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.3rem', color: 'var(--accent-sage)' }}>
            make something they will keep forever ♡
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ink-secondary)', fontWeight: 500, marginBottom: '6px' }}>
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Maya"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label style={{ display: 'block', fontSize: '0.88rem', color: 'var(--ink-secondary)', fontWeight: 500, marginBottom: '6px' }}>
              Create Password
            </label>
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
            Create Your Account ♡
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--ink-muted)' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: 'var(--accent-terracotta)', fontWeight: 600, textDecoration: 'none' }}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
