'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { TEMPLATES } from '@/lib/templates';
import { Occasion, Template } from '@/lib/templates/types';
import { createNewProject } from '@/lib/storage';
import { Heart, ArrowLeft, ArrowRight, Sparkles, Check } from 'lucide-react';
import { WashiTape } from '@/components/ui/WashiTape';

const OCCASIONS: Array<{ id: Occasion; title: string; subtitle: string; icon: string }> = [
  { id: 'birthday', title: 'Birthday', subtitle: 'for another trip around the sun', icon: '🎂' },
  { id: 'anniversary', title: 'Anniversary', subtitle: 'for all the moments between then and now', icon: '🕯️' },
  { id: 'proposal', title: 'Proposal', subtitle: 'for the beginning of forever', icon: '💍' },
  { id: 'friendship', title: 'Friendship', subtitle: 'for your favorite human', icon: '🌿' },
  { id: 'graduation', title: 'Graduation', subtitle: 'for the next chapter', icon: '🎓' },
  { id: 'farewell', title: 'Farewell', subtitle: 'for the memories we’ll keep', icon: '✈️' },
  { id: 'just-because', title: 'Just Because', subtitle: 'because you don’t need a reason', icon: '💌' },
  { id: 'something-else', title: 'Something Else', subtitle: 'make it yours', icon: '✨' },
];

function CreateFlowContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialOccasion = (searchParams.get('occasion') as Occasion) || 'birthday';
  const initialTemplate = searchParams.get('template') || '';

  const [step, setStep] = useState<1 | 2 | 3>(initialTemplate ? 3 : 1);
  const [selectedOccasion, setSelectedOccasion] = useState<Occasion>(initialOccasion);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    initialTemplate || TEMPLATES.find((t) => t.occasion === initialOccasion)?.id || TEMPLATES[0].id
  );

  const [recipientName, setRecipientName] = useState('');
  const [relationship, setRelationship] = useState('Partner');
  const [customMessage, setCustomMessage] = useState('');

  // Filter templates matching occasion, or fallback to all
  const filteredTemplates = TEMPLATES.filter(
    (t) => t.occasion === selectedOccasion || selectedOccasion === 'something-else'
  );
  const displayTemplates = filteredTemplates.length > 0 ? filteredTemplates : TEMPLATES;

  const handleNextStep1 = (occ: Occasion) => {
    setSelectedOccasion(occ);
    const match = TEMPLATES.find((t) => t.occasion === occ);
    if (match) {
      setSelectedTemplateId(match.id);
    }
    setStep(2);
  };

  const handleNextStep2 = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setStep(3);
  };

  const handleCreate = () => {
    const project = createNewProject(
      selectedTemplateId,
      recipientName || 'Someone Special',
      selectedOccasion,
      relationship,
      customMessage
    );
    router.push(`/editor/${project.id}`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', paddingBottom: '5rem' }}>
      {/* Top Navbar */}
      <header
        style={{
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(60, 45, 35, 0.08)',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            color: '#2A2421',
            letterSpacing: '-0.02em',
          }}
        >
          drewtifull
        </Link>

        {/* Step indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: step >= 1 ? '#C97A6E' : '#E2D8CE',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.78rem',
              fontWeight: 600,
            }}
          >
            1
          </span>
          <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(60, 45, 35, 0.2)' }} />
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: step >= 2 ? '#C97A6E' : '#E2D8CE',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.78rem',
              fontWeight: 600,
            }}
          >
            2
          </span>
          <div style={{ width: '20px', height: '1px', backgroundColor: 'rgba(60, 45, 35, 0.2)' }} />
          <span
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: step >= 3 ? '#C97A6E' : '#E2D8CE',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.78rem',
              fontWeight: 600,
            }}
          >
            3
          </span>
        </div>
      </header>

      {/* STEP 1: Choose Occasion */}
      {step === 1 && (
        <main style={{ maxWidth: '960px', margin: '3rem auto 0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.3rem',
                color: '#C97A6E',
                marginBottom: '6px',
                display: 'block',
              }}
            >
              Step 1 of 3
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#2A2421',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '10px',
              }}
            >
              What are you making?
            </h1>
            <p style={{ color: '#7A726A', fontSize: '1.05rem' }}>
              Every occasion holds a different emotion. Pick where your story begins.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '18px',
            }}
          >
            {OCCASIONS.map((occ) => (
              <div
                key={occ.id}
                onClick={() => handleNextStep1(occ.id)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(60, 45, 35, 0.12)',
                  borderRadius: '14px',
                  padding: '24px 20px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  position: 'relative',
                  boxShadow: '0 2px 10px rgba(40, 30, 25, 0.04)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(40, 30, 25, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(40, 30, 25, 0.04)';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{occ.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    color: '#2A2421',
                    marginBottom: '4px',
                  }}
                >
                  {occ.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#8A8077', lineHeight: 1.4 }}>
                  “{occ.subtitle}”
                </p>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* STEP 2: Choose Template */}
      {step === 2 && (
        <main style={{ maxWidth: '1180px', margin: '3rem auto 0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setStep(1)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#8A8077',
                fontSize: '0.85rem',
                marginBottom: '10px',
              }}
            >
              <ArrowLeft size={14} /> Back to occasions
            </button>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: '#2A2421',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '8px',
              }}
            >
              Pick a feeling.
            </h1>
            <p style={{ color: '#7A726A', fontSize: '1rem' }}>
              Choose a design aesthetic for this {selectedOccasion} gift. You can customize every photo and word.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {displayTemplates.map((template) => {
              const isSelected = selectedTemplateId === template.id;

              return (
                <div
                  key={template.id}
                  onClick={() => handleNextStep2(template.id)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: isSelected
                      ? '2px solid #C97A6E'
                      : '1px solid rgba(60, 45, 35, 0.12)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 16px 36px rgba(201, 122, 110, 0.2)'
                      : '0 4px 18px rgba(40, 30, 25, 0.05)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  {/* Preview Image */}
                  <div
                    style={{
                      height: '240px',
                      backgroundColor: '#EBE4DB',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        display: 'flex',
                        gap: '6px',
                      }}
                    >
                      {template.aesthetic.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.92)',
                            backdropFilter: 'blur(4px)',
                            padding: '3px 10px',
                            borderRadius: '999px',
                            fontSize: '0.72rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontWeight: 600,
                            color: '#2A2421',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '20px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.6rem',
                        color: '#2A2421',
                        marginBottom: '4px',
                      }}
                    >
                      {template.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.15rem',
                        color: '#C97A6E',
                        marginBottom: '10px',
                      }}
                    >
                      {template.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#7A726A',
                        lineHeight: 1.5,
                        marginBottom: '16px',
                      }}
                    >
                      {template.description}
                    </p>

                    <button
                      type="button"
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '999px',
                        backgroundColor: isSelected ? '#C97A6E' : '#2A2421',
                        color: '#FFFFFF',
                        fontSize: '0.88rem',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>Use this template</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}

      {/* STEP 3: Personalize & Open Studio */}
      {step === 3 && (
        <main style={{ maxWidth: '640px', margin: '3rem auto 0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setStep(2)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#8A8077',
                fontSize: '0.85rem',
                marginBottom: '10px',
              }}
            >
              <ArrowLeft size={14} /> Back to templates
            </button>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                color: '#2A2421',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '8px',
              }}
            >
              Who is this gift for?
            </h1>
            <p style={{ color: '#7A726A', fontSize: '0.95rem' }}>
              We will prepare your canvas. You can refine and add photos in the studio.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(60, 45, 35, 0.12)',
              borderRadius: '16px',
              padding: '32px 28px',
              boxShadow: '0 8px 30px rgba(40, 30, 25, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#2A2421',
                  marginBottom: '8px',
                }}
              >
                Their Name
              </label>
              <input
                type="text"
                value={recipientName}
                placeholder="e.g. Aanchal"
                onChange={(e) => setRecipientName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(60, 45, 35, 0.15)',
                  fontSize: '1rem',
                  color: '#2A2421',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#2A2421',
                    marginBottom: '8px',
                  }}
                >
                  Relationship
                </label>
                <input
                  type="text"
                  value={relationship}
                  placeholder="e.g. Girlfriend, Best Friend"
                  onChange={(e) => setRelationship(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(60, 45, 35, 0.15)',
                    fontSize: '0.95rem',
                    color: '#2A2421',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#2A2421',
                    marginBottom: '8px',
                  }}
                >
                  Occasion
                </label>
                <input
                  type="text"
                  disabled
                  value={selectedOccasion.toUpperCase()}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(60, 45, 35, 0.1)',
                    backgroundColor: '#FAF7F2',
                    fontSize: '0.88rem',
                    color: '#7A726A',
                    fontWeight: 600,
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#2A2421',
                  marginBottom: '8px',
                }}
              >
                A quick message from your heart (optional)
              </label>
              <textarea
                rows={4}
                value={customMessage}
                placeholder="I wanted to make something special for you..."
                onChange={(e) => setCustomMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(60, 45, 35, 0.15)',
                  fontSize: '0.95rem',
                  color: '#2A2421',
                  lineHeight: 1.5,
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="button"
              onClick={handleCreate}
              style={{
                backgroundColor: '#2A2421',
                color: '#FFFFFF',
                borderRadius: '999px',
                padding: '16px',
                fontSize: '1.05rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '10px',
                boxShadow: '0 4px 16px rgba(42, 36, 33, 0.25)',
              }}
            >
              <span>Create My Drewtifull ♡</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default function CreateFlowPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          loading...
        </div>
      }
    >
      <CreateFlowContent />
    </Suspense>
  );
}
