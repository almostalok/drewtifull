'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { CatalogueTemplateItem } from './types';
import { TemplatePreviewRenderer } from './TemplatePreviews';

interface TemplatePreviewModalProps {
  template: CatalogueTemplateItem | null;
  onClose: () => void;
}

export function TemplatePreviewModal({ template, onClose }: TemplatePreviewModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (template) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [template, onClose]);

  if (!template) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(41, 35, 33, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFDF9',
          borderRadius: '24px',
          border: '1px solid #EADBD3',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.2)',
          maxWidth: '720px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
          animation: 'scaleUp 0.22s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid #EADBD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFF8F2',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  color: '#292321',
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                {template.fullName}
              </h2>
              <span
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: '#F5DCD5',
                  color: '#A84D58',
                  borderRadius: '999px',
                  padding: '2px 8px',
                  fontWeight: 500,
                }}
              >
                Birthday
              </span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.86rem', color: '#81746D' }}>
              {template.description}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#81746D',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F8EEE6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Preview Body */}
        <div
          style={{
            padding: '24px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: '#FAF5ED',
          }}
        >
          {/* Card preview representation in large view */}
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '4 / 4.6',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(41, 35, 33, 0.12)',
              border: '1px solid #EADBD3',
              backgroundColor: '#FFFFFF',
            }}
          >
            <TemplatePreviewRenderer templateId={template.id} />
          </div>

          {/* Tags list */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {template.tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.8rem',
                  color: '#544D47',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #EADBD3',
                  borderRadius: '999px',
                  padding: '4px 12px',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid #EADBD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFF8F2',
          }}
        >
          <Link
            href={`/templates/birthday/${template.id}`}
            style={{
              color: '#544D47',
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <span>Open full live demo</span>
            <ExternalLink size={14} />
          </Link>

          <Link
            href={`/create?template=${template.id}&occasion=${template.occasion}`}
            style={{
              backgroundColor: '#292321',
              color: '#FFF8F2',
              borderRadius: '999px',
              padding: '10px 24px',
              fontSize: '0.88rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(41, 35, 33, 0.2)',
            }}
          >
            <span>Use this template</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
