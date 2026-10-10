import { describe, it, expect } from 'vitest';
import { CreateProjectSchema, SlugAvailabilitySchema, UpdateProjectSchema } from '../src/lib/validation';

describe('Validation Schemas', () => {
  it('should accept valid create project payload', () => {
    const valid = {
      templateId: 'soft-garden',
      recipientName: 'Aanchal',
      occasion: 'birthday',
      relationship: 'Best Friend',
    };
    const result = CreateProjectSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should reject missing templateId or recipientName', () => {
    const invalid = {
      templateId: '',
      recipientName: '',
      occasion: 'birthday',
    };
    const result = CreateProjectSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('should validate slug format correctly', () => {
    expect(SlugAvailabilitySchema.safeParse({ slug: 'aanchal-birthday' }).success).toBe(true);
    expect(SlugAvailabilitySchema.safeParse({ slug: 'aanchal_birthday' }).success).toBe(false);
    expect(SlugAvailabilitySchema.safeParse({ slug: 'Aanchal-Birthday' }).success).toBe(false);
    expect(SlugAvailabilitySchema.safeParse({ slug: 'ab' }).success).toBe(false);
  });

  it('should validate project update payload', () => {
    const valid = {
      recipientName: 'Updated Name',
      sections: [{ id: 'hero-1', type: 'hero' }],
    };
    const result = UpdateProjectSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });
});
