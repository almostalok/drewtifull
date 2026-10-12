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
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent', paddingBottom: '5rem' }}>
      {/* Top Navbar */}
      <header
        className="glass-nav"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '14px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.65rem',
            color: 'var(--ink-primary)',
            letterSpacing: '-0.02em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
          }}
        >
          <span>drewtifull</span>
          <span style={{ color: 'var(--accent-terracotta)', fontSize: '1.2rem' }}>♡</span>
        </Link>

        {/* Step indicator in Neumo-Glass circular cushions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {[1, 2, 3].map((s, idx) => (
            <React.Fragment key={s}>
              {idx > 0 && (
                <div style={{ width: '22px', height: '2px', backgroundColor: 'rgba(180, 165, 150, 0.35)', borderRadius: '2px' }} />
              )}
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: step >= s
                    ? 'linear-gradient(135deg, #DE745D 0%, #BA5540 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 234, 226, 0.7) 100%)',
                  color: step >= s ? '#FFFFFF' : 'var(--ink-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  boxShadow: step >= s
                    ? '0 3px 10px rgba(200, 101, 82, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4)'
                    : 'var(--neumo-shadow-btn)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                }}
              >
                {s}
              </span>
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* STEP 1: Choose Occasion */}
      {step === 1 && (
        <main style={{ maxWidth: '980px', margin: '3rem auto 0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.4rem',
                color: 'var(--accent-terracotta)',
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
                color: 'var(--ink-primary)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '10px',
              }}
            >
              What are you making?
            </h1>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '1.05rem' }}>
              Every occasion holds a different emotion. Pick where your story begins.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '20px',
            }}
          >
            {OCCASIONS.map((occ) => (
              <div
                key={occ.id}
                onClick={() => handleNextStep1(occ.id)}
                className="glass-card"
                style={{
                  padding: '24px 20px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{occ.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: 'var(--ink-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {occ.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--ink-muted)', lineHeight: 1.4 }}>
                  “{occ.subtitle}”
                </p>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* STEP 2: Choose Template */}
      {step === 2 && (
        <main style={{ maxWidth: '1200px', margin: '3rem auto 0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <button
              onClick={() => setStep(1)}
              className="glass-pill"
              style={{
                padding: '6px 16px',
                fontSize: '0.86rem',
                marginBottom: '14px',
              }}
            >
              <ArrowLeft size={14} /> Back to occasions
            </button>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                color: 'var(--ink-primary)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '8px',
              }}
            >
              Pick a feeling.
            </h1>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '1.02rem' }}>
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
                  className="glass-card"
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    borderColor: isSelected ? 'var(--accent-terracotta)' : undefined,
                    boxShadow: isSelected
                      ? 'var(--neumo-shadow-card-hover), 0 0 0 2px var(--accent-terracotta)'
                      : undefined,
                  }}
                >
                  {/* Preview Image */}
                  <div
                    style={{
                      height: '240px',
                      backgroundColor: 'rgba(235, 227, 218, 0.45)',
                      overflow: 'hidden',
                      position: 'relative',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.7)',
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
                          className="glass-badge"
                          style={{
                            padding: '3px 10px',
                            fontSize: '0.72rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            fontWeight: 600,
                            color: 'var(--ink-primary)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '22px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.65rem',
                        color: 'var(--ink-primary)',
                        marginBottom: '4px',
                      }}
                    >
                      {template.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '1.25rem',
                        color: 'var(--accent-terracotta)',
                        marginBottom: '10px',
                      }}
                    >
                      {template.tagline}
                    </p>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--ink-secondary)',
                        lineHeight: 1.5,
                        marginBottom: '18px',
                      }}
                    >
                      {template.description}
                    </p>

                    <button
                      type="button"
                      className={isSelected ? 'glass-cta' : 'glass-pill'}
                      style={{
                        width: '100%',
                        padding: '11px',
                        fontSize: '0.9rem',
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
              className="glass-pill"
              style={{
                padding: '6px 16px',
                fontSize: '0.86rem',
                marginBottom: '14px',
              }}
            >
              <ArrowLeft size={14} /> Back to templates
            </button>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                color: 'var(--ink-primary)',
                fontWeight: 400,
                lineHeight: 1.15,
                marginBottom: '8px',
              }}
            >
              Who is this gift for?
            </h1>
            <p style={{ color: 'var(--ink-secondary)', fontSize: '0.98rem' }}>
              We will prepare your canvas. You can refine and add photos in the studio.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--ink-primary)',
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
                className="glass-input"
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
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
                  className="glass-input"
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    fontSize: '0.95rem',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--ink-primary)',
                    marginBottom: '8px',
                  }}
                >
                  Occasion
                </label>
                <input
                  type="text"
                  disabled
                  value={selectedOccasion.toUpperCase()}
                  className="glass-input"
                  style={{
                    width: '100%',
                    padding: '12px 18px',
                    borderRadius: '14px',
                    fontSize: '0.88rem',
                    color: 'var(--ink-muted)',
                    fontWeight: 600,
                    opacity: 0.8,
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--ink-primary)',
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
                className="glass-input"
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '14px',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="button"
              onClick={handleCreate}
              className="glass-cta"
              style={{
                padding: '16px',
                fontSize: '1.05rem',
                marginTop: '10px',
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
