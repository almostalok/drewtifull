'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Wand2 } from 'lucide-react';
import { generateAITextSuggestion, AiTone } from '@/lib/aiPrompts';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalText: string;
  recipientName: string;
  relationship: string;
  occasion: string;
  onApply: (newText: string) => void;
}

export function AiAssistantModal({
  isOpen,
  onClose,
  originalText,
  recipientName,
  relationship,
  occasion,
  onApply,
}: AiAssistantModalProps) {
  const [selectedTone, setSelectedTone] = useState<AiTone>('sweeter');
  const [suggestion, setSuggestion] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const tones: Array<{ id: AiTone; label: string; icon: string }> = [
    { id: 'sweeter', label: 'Make it sweeter', icon: '🍯' },
    { id: 'more-romantic', label: 'More romantic', icon: '💌' },
    { id: 'funnier', label: 'Make it funnier', icon: '🍕' },
    { id: 'more-poetic', label: 'More poetic', icon: '✨' },
    { id: 'shorter', label: 'Make it shorter', icon: '✂️' },
    { id: 'more-personal', label: 'More personal', icon: '🌿' },
  ];

  const handleGenerate = (toneToUse = selectedTone) => {
    setIsGenerating(true);
    setTimeout(() => {
      const result = generateAITextSuggestion({
        recipientName,
        relationship,
        occasion,
        originalText,
        tone: toneToUse,
      });
      setSuggestion(result);
      setIsGenerating(false);
    }, 350);
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
          maxWidth: '560px',
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

        <div style={{ marginBottom: '22px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              color: 'var(--accent-terracotta)',
              marginBottom: '6px',
            }}
          >
            <Sparkles size={16} /> Heartfelt Writing Companion
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.75rem',
              color: 'var(--ink-primary)',
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: '6px',
            }}
          >
            Find the right words for {recipientName || 'your loved one'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)' }}>
            Choose a tone or feeling. We will never overwrite your draft without your confirmation.
          </p>
        </div>

        {/* Tone Selector Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '22px',
          }}
        >
          {tones.map((t) => {
            const isSelected = selectedTone === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTone(t.id);
                  handleGenerate(t.id);
                }}
                className={isSelected ? 'glass-cta' : 'glass-pill'}
                style={{
                  padding: '7px 14px',
                  fontSize: '0.82rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontWeight: isSelected ? 600 : 500,
                }}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Diff / Suggestion Card */}
        <div
          className="glass-card"
          style={{
            boxShadow: 'var(--neumo-shadow-inset)',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '20px',
            minHeight: '140px',
            marginBottom: '22px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              borderBottom: '1px solid rgba(60, 45, 35, 0.08)',
              paddingBottom: '8px',
            }}
          >
            <span
              style={{
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--ink-secondary)',
                fontWeight: 600,
              }}
            >
              Suggested Words
            </span>
            {isGenerating && (
              <span
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '1rem',
                  color: 'var(--accent-terracotta)',
                }}
              >
                crafting...
              </span>
            )}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-serif-fraunces, var(--font-serif))',
              fontSize: '1.02rem',
              lineHeight: 1.65,
              color: 'var(--ink-primary)',
              fontStyle: 'italic',
            }}
          >
            {suggestion ||
              (originalText
                ? `Click any tone above to rewrite your draft with more feeling.`
                : `Select a feeling above to generate a heartfelt message for ${recipientName || 'them'}.`)}
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => handleGenerate()}
            disabled={isGenerating}
            className="glass-pill"
            style={{
              flex: 1,
              padding: '12px',
              color: 'var(--ink-primary)',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: isGenerating ? 'wait' : 'pointer',
            }}
          >
            <Wand2 size={16} /> Try another idea
          </button>

          <button
            onClick={() => {
              if (suggestion) {
                onApply(suggestion);
                onClose();
              }
            }}
            disabled={!suggestion}
            className={suggestion ? 'glass-cta' : 'glass-pill'}
            style={{
              flex: 1,
              padding: '12px',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: suggestion ? 'pointer' : 'not-allowed',
              opacity: suggestion ? 1 : 0.6,
            }}
          >
            <Check size={16} /> Use this message
          </button>
        </div>
      </div>
    </div>
  );
}
