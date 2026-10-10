'use client';

import React, { useState } from 'react';
import { Project, LetterSectionData, Occasion } from '@/lib/templates/types';
import { Sparkles } from 'lucide-react';
import { AiAssistantModal } from './AiAssistantModal';

interface ContentTabProps {
  project: Project;
  onChange: (updated: Partial<Project>) => void;
  onUpdateSection: (sectionId: string, updatedFields: Record<string, unknown>) => void;
}

export function ContentTab({
  project,
  onChange,
  onUpdateSection,
}: ContentTabProps) {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Find letter section if present
  const letterSection = project.sections.find((s) => s.type === 'letter') as LetterSectionData | undefined;
  const letterBody = letterSection?.paragraphs?.join('\n\n') || '';

  const handleLetterChange = (text: string) => {
    if (letterSection) {
      const paragraphs = text
        .split('\n\n')
        .map((p) => p.trim())
        .filter(Boolean);
      onUpdateSection(letterSection.id, { paragraphs });
    }
  };

  const handleHeroChange = (field: string, value: string) => {
    const hero = project.sections.find((s) => s.type === 'hero');
    if (hero) {
      onUpdateSection(hero.id, { [field]: value });
    }
  };

  const occasions: Array<{ id: Occasion; label: string }> = [
    { id: 'birthday', label: 'Birthday' },
    { id: 'anniversary', label: 'Anniversary' },
    { id: 'proposal', label: 'Proposal' },
    { id: 'friendship', label: 'Friendship' },
    { id: 'graduation', label: 'Graduation' },
    { id: 'farewell', label: 'Farewell' },
    { id: 'just-because', label: 'Just Because' },
    { id: 'something-else', label: 'Something Else' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Recipient Name */}
      <div>
        <label
          style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#2A2421',
            marginBottom: '6px',
          }}
        >
          What’s their name?
        </label>
        <input
          type="text"
          value={project.recipientName}
          placeholder="e.g. Aanchal"
          onChange={(e) => {
            const name = e.target.value;
            onChange({ recipientName: name });
            handleHeroChange('subtitle', `for ${name} ♡`);
          }}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(60, 45, 35, 0.15)',
            backgroundColor: '#FFFFFF',
            fontSize: '0.95rem',
            color: '#2A2421',
            outline: 'none',
          }}
        />
      </div>

      {/* Your Name */}
      <div>
        <label
          style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#2A2421',
            marginBottom: '6px',
          }}
        >
          Your name or signature
        </label>
        <input
          type="text"
          value={project.creatorName || ''}
          placeholder="e.g. Alok ♡"
          onChange={(e) => {
            onChange({ creatorName: e.target.value });
            if (letterSection) {
              onUpdateSection(letterSection.id, {
                handwrittenSignature: e.target.value,
              });
            }
          }}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(60, 45, 35, 0.15)',
            backgroundColor: '#FFFFFF',
            fontSize: '0.95rem',
            color: '#2A2421',
            outline: 'none',
          }}
        />
      </div>

      {/* Relationship & Date Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#2A2421',
              marginBottom: '6px',
            }}
          >
            Relationship
          </label>
          <input
            type="text"
            value={project.relationship || ''}
            placeholder="e.g. Partner, Best Friend"
            onChange={(e) => onChange({ relationship: e.target.value })}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(60, 45, 35, 0.15)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.92rem',
              color: '#2A2421',
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#2A2421',
              marginBottom: '6px',
            }}
          >
            Special Date
          </label>
          <input
            type="text"
            value={project.date || ''}
            placeholder="e.g. 06 October"
            onChange={(e) => {
              onChange({ date: e.target.value });
              handleHeroChange('dateText', e.target.value);
            }}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(60, 45, 35, 0.15)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.92rem',
              color: '#2A2421',
            }}
          />
        </div>
      </div>

      {/* Occasion Selection */}
      <div>
        <label
          style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#2A2421',
            marginBottom: '6px',
          }}
        >
          Occasion
        </label>
        <select
          value={project.occasion}
          onChange={(e) => onChange({ occasion: e.target.value as Occasion })}
          style={{
            width: '100%',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(60, 45, 35, 0.15)',
            backgroundColor: '#FFFFFF',
            fontSize: '0.92rem',
            color: '#2A2421',
          }}
        >
          {occasions.map((occ) => (
            <option key={occ.id} value={occ.id}>
              {occ.label}
            </option>
          ))}
        </select>
      </div>

      {/* Heartfelt Note / Letter */}
      {letterSection && (
        <div style={{ marginTop: '8px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '6px',
            }}
          >
            <label
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#2A2421',
              }}
            >
              Your Heartfelt Message
            </label>

            <button
              type="button"
              onClick={() => setIsAiModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.78rem',
                color: '#C97A6E',
                backgroundColor: '#F9EBE8',
                padding: '4px 10px',
                borderRadius: '999px',
                fontWeight: 500,
              }}
            >
              <Sparkles size={12} /> ✨ Help me write this
            </button>
          </div>

          <textarea
            rows={6}
            value={letterBody}
            placeholder="Write from the heart... separate paragraphs with blank lines."
            onChange={(e) => handleLetterChange(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(60, 45, 35, 0.15)',
              backgroundColor: '#FFFFFF',
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: '#2A2421',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        </div>
      )}

      {/* AI Assistant Modal */}
      <AiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        originalText={letterBody}
        recipientName={project.recipientName}
        relationship={project.relationship}
        occasion={project.occasion}
        onApply={(newText) => handleLetterChange(newText)}
      />
    </div>
  );
}
