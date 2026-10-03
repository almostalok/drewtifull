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
        backgroundColor: 'rgba(30, 25, 20, 0.6)',
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
          maxWidth: '560px',
          padding: '28px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
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

        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-hand)',
              fontSize: '1.25rem',
              color: '#C97A6E',
              marginBottom: '4px',
            }}
          >
            <Sparkles size={16} /> AI Writing Assistant
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              color: '#2A2421',
              fontWeight: 500,
            }}
          >
            Find the right words for {recipientName || 'your loved one'}
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#6A625A' }}>
            Choose a tone or feeling. We will never overwrite your draft without your confirmation.
          </p>
        </div>

        {/* Tone Selector Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          {tones.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTone(t.id);
                handleGenerate(t.id);
              }}
              style={{
                backgroundColor: selectedTone === t.id ? '#C97A6E' : '#FFFFFF',
                color: selectedTone === t.id ? '#FFFFFF' : '#2A2421',
                border:
                  selectedTone === t.id
                    ? '1px solid #C97A6E'
                    : '1px solid rgba(60, 45, 35, 0.12)',
                borderRadius: '999px',
                padding: '6px 14px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Diff / Suggestion Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(60, 45, 35, 0.1)',
            borderRadius: '12px',
            padding: '18px',
            minHeight: '140px',
            marginBottom: '20px',
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
                color: '#8A8077',
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
                  color: '#C97A6E',
                }}
              >
                crafting...
              </span>
            )}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.96rem',
              lineHeight: 1.65,
              color: '#2A2421',
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
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => handleGenerate()}
            disabled={isGenerating}
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.2)',
              borderRadius: '999px',
              padding: '12px',
              color: '#2A2421',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
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
            style={{
              flex: 1,
              backgroundColor: suggestion ? '#2A2421' : '#B5ACA4',
              color: '#FFFFFF',
              borderRadius: '999px',
              padding: '12px',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: suggestion ? 'pointer' : 'not-allowed',
            }}
          >
            <Check size={16} /> Use this message
          </button>
        </div>
      </div>
    </div>
  );
}
