'use client';

import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { X, Download, Heart, Sparkles } from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  recipientName: string;
  occasion: string;
}

export function QrCodeModal({
  isOpen,
  onClose,
  url,
  recipientName,
  occasion,
}: QrCodeModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && url) {
      QRCode.toDataURL(url, {
        width: 320,
        margin: 2,
        color: {
          dark: '#2A2421',
          light: '#FFFFFF',
        },
      })
        .then((dataUri) => {
          setQrDataUrl(dataUri);
        })
        .catch((err) => {
          console.error('Error generating QR code:', err);
        });
    }
  }, [isOpen, url]);

  if (!isOpen) return null;

  const downloadQrCode = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `drewtifull-${recipientName.toLowerCase()}-qr.png`;
    a.click();
  };

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
          maxWidth: '450px',
          padding: '32px 28px',
          position: 'relative',
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

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--accent-terracotta)',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              marginBottom: '6px',
            }}
          >
            <Sparkles size={16} /> printable keepsake card
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.85rem',
              color: 'var(--ink-primary)',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            A Gift For {recipientName}
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginTop: '6px' }}>
            Print this or slide it into a card. When they scan the code with their phone camera, your
            Drewtifull will open.
          </p>
        </div>

        {/* Printable Card Preview: Neumo-Glass Frame */}
        <div
          ref={cardRef}
          className="glass-card"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            boxShadow: 'var(--neumo-shadow-card)',
            padding: '28px 20px 24px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Top Washi Tape */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-1deg)',
              width: '90px',
              height: '20px',
              backgroundColor: 'rgba(200, 101, 82, 0.45)',
              borderLeft: '2px dashed rgba(200, 101, 82, 0.6)',
              borderRight: '2px dashed rgba(200, 101, 82, 0.6)',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'var(--ink-primary)',
              marginBottom: '16px',
            }}
          >
            someone made a little corner of the internet for you ♡
          </p>

          {qrDataUrl ? (
            <div
              style={{
                display: 'inline-block',
                padding: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                boxShadow: 'var(--neumo-shadow-inset)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrDataUrl}
                alt={`QR code for ${recipientName}'s Drewtifull`}
                style={{ width: '180px', height: '180px', display: 'block' }}
              />
            </div>
          ) : (
            <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--ink-secondary)', fontSize: '0.85rem' }}>Generating QR code...</p>
            </div>
          )}

          <div style={{ marginTop: '16px' }}>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.35rem',
                color: 'var(--accent-terracotta)',
                fontWeight: 600,
              }}
            >
              scan to reveal your {occasion} gift
            </p>
            <p
              style={{
                fontSize: '0.72rem',
                color: 'var(--ink-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: '4px',
                fontWeight: 600,
              }}
            >
              drewtifull.com
            </p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginTop: '22px', display: 'flex', gap: '10px' }}>
          <button
            onClick={downloadQrCode}
            className="glass-cta"
            style={{
              flex: 1,
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <Download size={16} /> Download QR Image
          </button>
          <button
            onClick={onClose}
            className="glass-pill"
            style={{
              padding: '12px 20px',
              color: 'var(--ink-primary)',
              fontSize: '0.92rem',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
