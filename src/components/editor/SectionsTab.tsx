'use client';

import React from 'react';
import { SectionData, SectionType } from '@/lib/templates/types';
import { Plus, ArrowUp, ArrowDown, Trash2, Eye } from 'lucide-react';

interface SectionsTabProps {
  sections: SectionData[];
  onChange: (sections: SectionData[]) => void;
}

const SECTION_OPTIONS: Array<{
  type: SectionType;
  label: string;
  desc: string;
  createDefault: () => SectionData;
}> = [
  {
    type: 'letter',
    label: 'Stationery Letter',
    desc: 'Intimate wax-sealed letter with handwritten signature',
    createDefault: () => ({
      id: `sec_${Date.now()}_letter`,
      type: 'letter',
      greeting: 'Dear loved one,',
      paragraphs: ['I wanted to take a moment to write down what you mean to me...'],
      closing: 'With all my heart,',
      handwrittenSignature: 'Always yours ♡',
      waxSeal: true,
      paperStyle: 'lined',
    }),
  },
  {
    type: 'polaroidCollage',
    label: 'Polaroid Memories',
    desc: 'Tilted polaroid frames taped with washi tape and captions',
    createDefault: () => ({
      id: `sec_${Date.now()}_polaroid`,
      type: 'polaroidCollage',
      title: 'Moments to Remember',
      subtitle: 'stuck together with love',
      polaroids: [
        {
          url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
          caption: 'the best day together',
          rotation: -2.5,
          washiColor: 'rose',
        },
        {
          url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
          caption: 'endless laughs',
          rotation: 3,
          washiColor: 'sage',
        },
      ],
    }),
  },
  {
    type: 'filmStrip',
    label: '35mm Film Strip',
    desc: 'Analog film reel with timestamps and sprocket holes',
    createDefault: () => ({
      id: `sec_${Date.now()}_film`,
      type: 'filmStrip',
      title: 'Roll 01 // Special Moments',
      subtitle: 'unfiltered memory frames',
      filmFormat: '35mm',
      frames: [
        {
          url: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80',
          caption: 'candid afternoon',
          timestamp: '16:40:12',
          frameNumber: 'EXP 01',
        },
      ],
    }),
  },
  {
    type: 'timeline',
    label: 'Our Story Timeline',
    desc: 'Interactive chapter-by-chapter romantic milestone journey',
    createDefault: () => ({
      id: `sec_${Date.now()}_timeline`,
      type: 'timeline',
      title: 'Our Journey',
      subtitle: 'every chapter with you',
      events: [
        {
          date: 'The Beginning',
          title: 'When we first met',
          description: 'A day that quietly changed everything.',
        },
      ],
    }),
  },
  {
    type: 'reasons',
    label: 'Reasons I Love You',
    desc: 'Numbered cards highlighting their extraordinary qualities',
    createDefault: () => ({
      id: `sec_${Date.now()}_reasons`,
      type: 'reasons',
      title: '3 Reasons You Make Life Beautiful',
      items: [
        { number: 1, title: 'Your Compassion', text: 'You notice everyone who needs comfort.', doodle: '✨' },
        { number: 2, title: 'Your Laugh', text: 'Lights up whatever room you walk into.', doodle: '💛' },
      ],
    }),
  },
  {
    type: 'favoriteThings',
    label: 'Favorite Things Catalog',
    desc: 'Little quirks, habits, and details you treasure most',
    createDefault: () => ({
      id: `sec_${Date.now()}_favs`,
      type: 'favoriteThings',
      title: 'Things I Adore About You',
      items: [
        { category: 'Your Smile', value: 'The way your eyes dance when you are excited.' },
      ],
    }),
  },
  {
    type: 'quote',
    label: 'Editorial Quote',
    desc: 'A large, poetic pull-quote that captures your feelings',
    createDefault: () => ({
      id: `sec_${Date.now()}_quote`,
      type: 'quote',
      quoteText: 'Some people make the world feel a little softer simply by being in it.',
      author: 'Unknown',
    }),
  },
];

export function SectionsTab({ sections, onChange }: SectionsTabProps) {
  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newIdx = direction === 'up' ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= sections.length) return;

    const copy = [...sections];
    const item = copy.splice(index, 1)[0];
    copy.splice(newIdx, 0, item);
    onChange(copy);
  };

  const handleRemove = (index: number) => {
    const copy = sections.filter((_, i) => i !== index);
    onChange(copy);
  };

  const handleAdd = (creator: () => SectionData) => {
    // Insert right before ending section if ending exists
    const endingIdx = sections.findIndex((s) => s.type === 'ending');
    const newSec = creator();
    if (endingIdx >= 0) {
      const copy = [...sections];
      copy.splice(endingIdx, 0, newSec);
      onChange(copy);
    } else {
      onChange([...sections, newSec]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Active Section List */}
      <div>
        <h5
          style={{
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#8A8077',
            marginBottom: '12px',
          }}
        >
          Active Story Sections ({sections.length})
        </h5>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sections.map((sec, idx) => (
            <div
              key={sec.id || idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(60, 45, 35, 0.12)',
                borderRadius: '8px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    color: '#C97A6E',
                    fontFamily: 'monospace',
                    marginRight: '8px',
                  }}
                >
                  0{idx + 1}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: '#2A2421',
                    textTransform: 'capitalize',
                  }}
                >
                  {sec.type.replace(/([A-Z])/g, ' $1')}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <button
                  type="button"
                  onClick={() => handleMove(idx, 'up')}
                  disabled={idx === 0}
                  style={{
                    padding: '4px',
                    color: idx === 0 ? '#DDD6CE' : '#7A726A',
                  }}
                  title="Move Up"
                >
                  <ArrowUp size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => handleMove(idx, 'down')}
                  disabled={idx === sections.length - 1}
                  style={{
                    padding: '4px',
                    color: idx === sections.length - 1 ? '#DDD6CE' : '#7A726A',
                  }}
                  title="Move Down"
                >
                  <ArrowDown size={15} />
                </button>

                {sec.type !== 'hero' && sec.type !== 'ending' && (
                  <button
                    type="button"
                    onClick={() => handleRemove(idx)}
                    style={{ padding: '4px', color: '#B5ACA4', marginLeft: '4px' }}
                    title="Remove Section"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add New Section Drawer */}
      <div>
        <h5
          style={{
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#8A8077',
            marginBottom: '12px',
          }}
        >
          Add to the story
        </h5>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
          {SECTION_OPTIONS.map((opt) => (
            <button
              key={opt.type}
              type="button"
              onClick={() => handleAdd(opt.createDefault)}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(60, 45, 35, 0.12)',
                borderRadius: '8px',
                padding: '12px 14px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease, transform 0.15s ease',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#2A2421',
                  }}
                >
                  {opt.label}
                </p>
                <p style={{ fontSize: '0.78rem', color: '#8A8077' }}>{opt.desc}</p>
              </div>
              <Plus size={16} color="#C97A6E" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
