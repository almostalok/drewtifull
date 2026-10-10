import { z } from 'zod';

export const OccasionEnum = z.enum([
  'birthday',
  'anniversary',
  'proposal',
  'friendship',
  'graduation',
  'farewell',
  'just-because',
  'something-else',
]);

export const PhotoItemSchema = z.object({
  id: z.string(),
  url: z.string(),
  caption: z.string().optional(),
  date: z.string().optional(),
  isHero: z.boolean().optional(),
  aspect: z.enum(['portrait', 'landscape', 'square']).optional(),
});

export const SectionSchema = z.object({
  id: z.string(),
  type: z.string(),
}).passthrough();

export const CreateProjectSchema = z.object({
  templateId: z.string().min(1, 'Template ID is required'),
  recipientName: z.string().min(1, 'Recipient name is required'),
  occasion: OccasionEnum,
  relationship: z.string().optional().default('Special Someone'),
  customMessage: z.string().optional().default(''),
});

export const UpdateProjectSchema = z.object({
  recipientName: z.string().optional(),
  creatorName: z.string().optional(),
  relationship: z.string().optional(),
  date: z.string().optional(),
  sections: z.array(SectionSchema).optional(),
  photos: z.array(PhotoItemSchema).optional(),
  themeOverride: z.record(z.string(), z.any()).optional(),
  musicTrack: z.any().optional(),
  slug: z.string().regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens').optional(),
});

export const SlugAvailabilitySchema = z.object({
  slug: z.string().min(3).max(64).regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
});
