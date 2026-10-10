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
        backgroundColor: '#FAF7F2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <Link
        href="/"
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#8A8077',
          fontSize: '0.9rem',
          textDecoration: 'none',
        }}
      >
        <ArrowLeft size={16} /> Back to Drewtifull
      </Link>

      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '40px 32px',
          boxShadow: 'var(--shadow-floating)',
          border: '1px solid rgba(60, 45, 35, 0.08)',
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
              fontSize: '2rem',
              color: '#2A2421',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '6px',
            }}
          >
            drewtifull
          </Link>
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '1.25rem', color: '#6B8572' }}>
            make something they will keep forever ♡
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#544D47', marginBottom: '6px' }}>
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Maya"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(60, 45, 35, 0.15)',
                fontSize: '0.95rem',
                backgroundColor: '#FAF7F2',
                color: '#2A2421',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#544D47', marginBottom: '6px' }}>
              Your Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(60, 45, 35, 0.15)',
                fontSize: '0.95rem',
                backgroundColor: '#FAF7F2',
                color: '#2A2421',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#544D47', marginBottom: '6px' }}>
              Create Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(60, 45, 35, 0.15)',
                fontSize: '0.95rem',
                backgroundColor: '#FAF7F2',
                color: '#2A2421',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '8px',
              backgroundColor: '#2A2421',
              color: '#FAF5ED',
              borderRadius: '999px',
              padding: '12px',
              fontSize: '0.95rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            Create Your Account ♡
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.88rem', color: '#6E655E' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#C97A6E', fontWeight: 600, textDecoration: 'none' }}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
