'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save, Shield, User, Bell, Sparkles } from 'lucide-react';

export default function SettingsPage() {
  const [name, setName] = useState('Creator');
  const [email, setEmail] = useState('creator@drewtifull.com');
  const [indexSearchEngines, setIndexSearchEngines] = useState(false);
  const [ambientAudioDefault, setAmbientAudioDefault] = useState(true);
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('drewtifull_user');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.name) setName(parsed.name);
          if (parsed.email) setEmail(parsed.email);
        } catch {}
      }
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      localStorage.setItem('drewtifull_user', JSON.stringify({ name, email }));
    }
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 2500);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', paddingBottom: '6rem' }}>
      <header
        style={{
          padding: '18px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(60, 45, 35, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Link
            href="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#8A8077',
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> My Studio
          </Link>
          <div style={{ height: '20px', width: '1px', backgroundColor: 'rgba(60, 45, 35, 0.1)' }} />
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              color: '#2A2421',
              letterSpacing: '-0.02em',
              textDecoration: 'none',
            }}
          >
            drewtifull
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: '680px', margin: '40px auto 0', padding: '0 24px' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#2A2421', marginBottom: '8px' }}>
          Studio Settings
        </h1>
        <p style={{ color: '#6E655E', fontSize: '1rem', marginBottom: '32px' }}>
          Manage your creator profile, privacy preferences, and default gift settings.
        </p>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Creator Profile */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--shadow-paper)',
              border: '1px solid rgba(60, 45, 35, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <User size={18} color="#C97A6E" />
              <h3 style={{ fontSize: '1.1rem', color: '#2A2421', fontWeight: 600 }}>Creator Profile</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#544D47', marginBottom: '6px' }}>
                  Display Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
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
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(60, 45, 35, 0.15)',
                    fontSize: '0.95rem',
                    backgroundColor: '#FAF7F2',
                    color: '#2A2421',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Privacy & Gift Preferences */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: 'var(--shadow-paper)',
              border: '1px solid rgba(60, 45, 35, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Shield size={18} color="#6B8572" />
              <h3 style={{ fontSize: '1.1rem', color: '#2A2421', fontWeight: 600 }}>Privacy & Defaults</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={indexSearchEngines}
                  onChange={(e) => setIndexSearchEngines(e.target.checked)}
                  style={{ marginTop: '4px' }}
                />
                <div>
                  <div style={{ fontSize: '0.92rem', color: '#2A2421', fontWeight: 500 }}>
                    Allow search engines to index published gifts
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#8A8077' }}>
                    When disabled, a noindex meta tag is placed on all published gifts so only people with the direct link can view them.
                  </div>
                </div>
              </label>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={ambientAudioDefault}
                  onChange={(e) => setAmbientAudioDefault(e.target.checked)}
                  style={{ marginTop: '4px' }}
                />
                <div>
                  <div style={{ fontSize: '0.92rem', color: '#2A2421', fontWeight: 500 }}>
                    Enable ambient soundtrack player by default
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#8A8077' }}>
                    Places the floating acoustic music badge on new gift templates (user-initiated playback only).
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#2A2421',
                color: '#FAF5ED',
                padding: '12px 28px',
                borderRadius: '999px',
                fontSize: '0.92rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Save size={16} /> Save Changes
            </button>
            {savedMessage && (
              <span style={{ color: '#2F683D', fontSize: '0.9rem', fontWeight: 500 }}>
                ✓ Settings saved successfully ♡
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
