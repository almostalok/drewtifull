'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Share2, QrCode, ExternalLink, Heart, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  recipientName: string;
  occasion: string;
  onOpenQrCode?: () => void;
}

export function ShareModal({
  isOpen,
  onClose,
  url,
  recipientName,
  occasion,
  onOpenQrCode,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C97A6E', '#F4D4CD', '#B9863B', '#FAF7F2'],
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      triggerCelebration();
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `A gift for ${recipientName} ♡`,
          text: `I made something special for you on Drewtifull:`,
          url: url,
        });
      } catch (e) {
        console.log('Share dismissed', e);
      }
    } else {
      copyToClipboard();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `I made something special for you for your ${occasion} ♡: ${url}`
  )}`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(30, 24, 20, 0.55)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '490px',
          padding: '36px 30px',
          position: 'relative',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="glass-icon-btn"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            color: 'var(--ink-secondary)',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Heart Stamp Badge */}
        <div
          className="glass-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--accent-terracotta)',
            padding: '6px 14px',
            fontSize: '0.88rem',
            fontFamily: 'var(--font-hand)',
            marginBottom: '14px',
          }}
        >
          <Heart size={14} fill="var(--accent-terracotta)" /> It’s ready to send
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
            fontSize: '2.1rem',
            color: 'var(--ink-primary)',
            lineHeight: 1.15,
            marginBottom: '8px',
            fontWeight: 600,
          }}
        >
          Send It Into The World ♡
        </h3>

        <p
          style={{
            fontSize: '0.94rem',
            color: 'var(--ink-secondary)',
            maxWidth: '380px',
            margin: '0 auto 24px auto',
            lineHeight: 1.5,
          }}
        >
          Your gift for <strong style={{ color: 'var(--ink-primary)' }}>{recipientName}</strong> is published. Send them this link or give them a
          printed QR card.
        </p>

        {/* Link Copy Box: Inset Neumo Track */}
        <div
          style={{
            backgroundColor: 'rgba(235, 227, 218, 0.65)',
            boxShadow: 'var(--neumo-shadow-inset)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '14px',
            padding: '6px 6px 6px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            marginBottom: '22px',
          }}
        >
          <input
            type="text"
            readOnly
            value={url}
            style={{
              border: 'none',
              outline: 'none',
              background: 'none',
              color: 'var(--ink-primary)',
              fontSize: '0.88rem',
              width: '100%',
              fontFamily: 'inherit',
              fontWeight: 500,
            }}
          />
          <button
            onClick={copyToClipboard}
            className={copied ? 'glass-pill' : 'glass-cta'}
            style={{
              padding: '9px 18px',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backgroundColor: copied ? 'rgba(95, 125, 103, 0.15)' : undefined,
              color: copied ? 'var(--accent-sage)' : undefined,
            }}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>

        {/* Social Share Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            marginBottom: '24px',
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card"
            style={{
              padding: '14px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--ink-primary)',
              fontSize: '0.82rem',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <Send size={20} color="#25D366" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={handleNativeShare}
            className="glass-card"
            style={{
              padding: '14px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--ink-primary)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <Share2 size={20} color="var(--accent-terracotta)" />
            <span>Device Share</span>
          </button>

          <button
            onClick={() => {
              if (onOpenQrCode) {
                onOpenQrCode();
              }
            }}
            className="glass-card"
            style={{
              padding: '14px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--ink-primary)',
              fontSize: '0.82rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <QrCode size={20} color="var(--accent-amber)" />
            <span>Print QR Card</span>
          </button>
        </div>

        {/* View published button */}
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-cta"
            style={{
              width: '100%',
              padding: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <ExternalLink size={16} /> Open Published Gift
          </a>
        </div>
      </div>
    </div>
  );
}
