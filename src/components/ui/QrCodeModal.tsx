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
        backgroundColor: 'rgba(30, 25, 20, 0.65)',
        backdropFilter: 'blur(6px)',
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
          borderRadius: '16px',
          width: '100%',
          maxWidth: '440px',
          padding: '28px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
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

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#C97A6E',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              marginBottom: '6px',
            }}
          >
            <Sparkles size={16} /> printable keepsake card
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              color: '#2A2421',
              fontWeight: 500,
            }}
          >
            A Gift For {recipientName}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#6A625A', marginTop: '4px' }}>
            Print this or slide it into a card. When they scan the code with their phone camera, your
            Drewtifull will open.
          </p>
        </div>

        {/* Printable Card Preview */}
        <div
          ref={cardRef}
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(60, 45, 35, 0.1)',
            borderRadius: '12px',
            padding: '24px 20px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(40, 30, 25, 0.06)',
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
              backgroundColor: 'rgba(244, 212, 205, 0.88)',
              borderLeft: '2px dashed rgba(215, 175, 166, 0.4)',
              borderRight: '2px dashed rgba(215, 175, 166, 0.4)',
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: '#2A2421',
              marginBottom: '16px',
            }}
          >
            someone made a little corner of the internet for you ♡
          </p>

          {qrDataUrl ? (
            <div
              style={{
                display: 'inline-block',
                padding: '10px',
                backgroundColor: '#FAF7F2',
                borderRadius: '8px',
                border: '1px solid rgba(60, 45, 35, 0.08)',
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
              <p style={{ color: '#8A8077', fontSize: '0.85rem' }}>Generating QR code...</p>
            </div>
          )}

          <div style={{ marginTop: '16px' }}>
            <p
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.3rem',
                color: '#C97A6E',
              }}
            >
              scan to reveal your {occasion} gift
            </p>
            <p
              style={{
                fontSize: '0.72rem',
                color: '#A0968D',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '4px',
              }}
            >
              drewtifull.com
            </p>
          </div>
        </div>

        {/* Actions */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button
            onClick={downloadQrCode}
            style={{
              flex: 1,
              backgroundColor: '#2A2421',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.92rem',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(42, 36, 33, 0.2)',
            }}
          >
            <Download size={16} /> Download QR Image
          </button>
          <button
            onClick={onClose}
            style={{
              padding: '12px 20px',
              borderRadius: '999px',
              border: '1px solid rgba(60, 45, 35, 0.2)',
              color: '#2A2421',
              fontSize: '0.92rem',
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
