import { describe, it, expect, beforeEach } from 'vitest';
import {
  createProject,
  getProjectById,
  getAllProjects,
  publishProject,
  unpublishProject,
  duplicateProject,
  deleteProject,
  checkSlugAvailability,
  generateUniqueSlug,
  saveProject,
} from '../src/lib/server/repository';

describe('Server Repository & State Lifecycle', () => {
  it('should create and retrieve a project', () => {
    const project = createProject({
      templateId: 'soft-garden',
      recipientName: 'Test Recipient',
      occasion: 'birthday',
      relationship: 'Friend',
    });

    expect(project).toBeDefined();
    expect(project.id).toBeTruthy();
    expect(project.recipientName).toBe('Test Recipient');
    expect(project.status).toBe('draft');

    const retrieved = getProjectById(project.id);
    expect(retrieved).toBeDefined();
    expect(retrieved?.id).toBe(project.id);
  });

  it('should generate unique collision-free slugs', () => {
    const slug1 = generateUniqueSlug('unique-person', 'birthday');
    expect(slug1).toContain('unique-person-birthday');

    // Creating a project with slug1
    const p1 = createProject({
      templateId: 'film-diary',
      recipientName: 'unique-person',
      occasion: 'birthday',
    });

    const slug2 = generateUniqueSlug('unique-person', 'birthday');
    expect(slug2).not.toBe(p1.slug);
  });

  it('should transition project from draft to published and back', () => {
    const project = createProject({
      templateId: 'cute-and-cozy',
      recipientName: 'Sweet Heart',
      occasion: 'birthday',
    });

    expect(project.status).toBe('draft');

    const published = publishProject(project.id);
    expect(published?.status).toBe('published');
    expect(published?.publishedAt).toBeTruthy();

    const unpublished = unpublishProject(project.id);
    expect(unpublished?.status).toBe('draft');
  });

  it('should duplicate a project cleanly', () => {
    const original = createProject({
      templateId: 'pink-y2k',
      recipientName: 'Iconic Soul',
      occasion: 'birthday',
    });

    const copy = duplicateProject(original.id);
    expect(copy).toBeDefined();
    expect(copy?.id).not.toBe(original.id);
    expect(copy?.slug).not.toBe(original.slug);
    expect(copy?.recipientName).toContain('Copy');
    expect(copy?.status).toBe('draft');
  });

  it('should delete a project cleanly', () => {
    const p = createProject({
      templateId: 'book-letter',
      recipientName: 'Temporary User',
      occasion: 'birthday',
    });

    expect(getProjectById(p.id)).toBeDefined();

    const deleted = deleteProject(p.id);
    expect(deleted).toBe(true);
    expect(getProjectById(p.id)).toBeUndefined();
  });
});
