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
        backgroundColor: 'rgba(30, 25, 20, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FAF7F2',
          border: '1px solid rgba(60, 45, 35, 0.15)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '480px',
          padding: '32px 28px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            color: '#8A8077',
            background: 'none',
            border: 'none',
          }}
        >
          <X size={20} />
        </button>

        {/* Heart Stamp Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#F9EBE8',
            color: '#C97A6E',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-hand)',
            marginBottom: '12px',
          }}
        >
          <Heart size={15} fill="#C97A6E" /> It’s ready to send
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.2rem',
            color: '#2A2421',
            lineHeight: 1.15,
            marginBottom: '8px',
          }}
        >
          Send It Into The World ♡
        </h3>

        <p
          style={{
            fontSize: '0.95rem',
            color: '#6A625A',
            maxWidth: '380px',
            margin: '0 auto 24px auto',
          }}
        >
          Your gift for <strong>{recipientName}</strong> is published. Send them this link or give them a
          printed QR card.
        </p>

        {/* Link Copy Box */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(60, 45, 35, 0.12)',
            borderRadius: '12px',
            padding: '8px 8px 8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            marginBottom: '20px',
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
              color: '#2A2421',
              fontSize: '0.88rem',
              width: '100%',
              fontFamily: 'var(--font-body)',
            }}
          />
          <button
            onClick={copyToClipboard}
            style={{
              backgroundColor: copied ? '#4E7A5A' : '#C97A6E',
              color: '#FFFFFF',
              borderRadius: '8px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'background-color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
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
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.1)',
              borderRadius: '12px',
              padding: '12px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: '#2A2421',
              fontSize: '0.82rem',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            <Send size={20} color="#25D366" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={handleNativeShare}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.1)',
              borderRadius: '12px',
              padding: '12px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: '#2A2421',
              fontSize: '0.82rem',
            }}
          >
            <Share2 size={20} color="#C97A6E" />
            <span>Device Share</span>
          </button>

          <button
            onClick={() => {
              if (onOpenQrCode) {
                onOpenQrCode();
              }
            }}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.1)',
              borderRadius: '12px',
              padding: '12px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: '#2A2421',
              fontSize: '0.82rem',
            }}
          >
            <QrCode size={20} color="#B9863B" />
            <span>Print QR Card</span>
          </button>
        </div>

        {/* View published button */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              backgroundColor: '#2A2421',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.95rem',
              fontWeight: 500,
            }}
          >
            <ExternalLink size={16} /> Open Published Gift
          </a>
        </div>
      </div>
    </div>
  );
}
