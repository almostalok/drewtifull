import { describe, it, expect } from 'vitest';
import { TEMPLATES } from '../src/lib/templates';
import {
  createProject,
  getProjectById,
  saveProject,
  publishProject,
  unpublishProject,
  getPublishedProjectBySlug,
  deleteProject,
} from '../src/lib/server/repository';

describe('End-to-End User Creation to Publishing Journey', () => {
  it('should successfully execute the complete user lifecycle', () => {
    // 1. Discover and browse birthday templates
    const birthdayTemplates = TEMPLATES.filter((t) => t.occasion === 'birthday');
    expect(birthdayTemplates.length).toBeGreaterThanOrEqual(10);

    const chosenTemplate = birthdayTemplates.find((t) => t.id === 'soft-garden');
    expect(chosenTemplate).toBeDefined();

    // 2. Create project
    const newProject = createProject({
      templateId: chosenTemplate!.id,
      recipientName: 'Riya Sharma',
      occasion: 'birthday',
      relationship: 'Soulmate',
      customMessage: 'Happy 25th Birthday to the most special person in my universe!',
    });

    expect(newProject.id).toBeTruthy();
    expect(newProject.recipientName).toBe('Riya Sharma');
    expect(newProject.status).toBe('draft');

    // 3. Customize project content & sections
    const editedSections = newProject.sections.map((sec) => {
      if (sec.type === 'hero') {
        return { ...sec, subtitle: 'Celebrating 25 wonderful years of your magic ♡' };
      }
      return sec;
    });

    const updated = saveProject({
      ...newProject,
      sections: editedSections,
      photos: [
        {
          id: 'photo_test_1',
          url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
          caption: 'Sunset smiles',
          isHero: true,
          aspect: 'portrait',
        },
      ],
    });

    expect(updated.photos.length).toBe(1);
    expect(updated.sections[0].type).toBe('hero');

    // 4. Verify draft is NOT visible as public site
    const draftSearch = getPublishedProjectBySlug(updated.slug);
    expect(draftSearch).toBeUndefined();

    // 5. Publish the project to public URL
    const published = publishProject(updated.id);
    expect(published).toBeDefined();
    expect(published?.status).toBe('published');
    expect(published?.publishedAt).toBeTruthy();

    // 6. Public recipient accesses the published URL
    const publicGift = getPublishedProjectBySlug(published!.slug);
    expect(publicGift).toBeDefined();
    expect(publicGift?.recipientName).toBe('Riya Sharma');
    expect(publicGift?.photos.length).toBe(1);

    // 7. Creator unpublishes the project
    const unpublished = unpublishProject(published!.id);
    expect(unpublished?.status).toBe('draft');

    // 8. Public access now returns 404 (undefined)
    const afterUnpublish = getPublishedProjectBySlug(published!.slug);
    expect(afterUnpublish).toBeUndefined();

    // 9. Clean up
    deleteProject(updated.id);
    expect(getProjectById(updated.id)).toBeUndefined();
  });
});
