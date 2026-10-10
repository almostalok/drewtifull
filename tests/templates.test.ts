import { describe, it, expect } from 'vitest';
import { TEMPLATES } from '../src/lib/templates';

describe('Template Registry', () => {
  it('should register at least 10 birthday templates', () => {
    const birthdayTemplates = TEMPLATES.filter((t) => t.occasion === 'birthday');
    expect(birthdayTemplates.length).toBeGreaterThanOrEqual(10);
  });

  const expectedBirthdayIds = [
    'soft-garden',
    'film-diary',
    'scrapbook-birthday',
    'minimal-editorial',
    'cute-and-cozy',
    'vintage-newspaper',
    'dreamy-night',
    'polaroid-wall',
    'pink-y2k',
    'book-letter',
  ];

  expectedBirthdayIds.forEach((id) => {
    it(`should include template "${id}" with valid structure`, () => {
      const template = TEMPLATES.find((t) => t.id === id);
      expect(template).toBeDefined();
      expect(template?.name).toBeTruthy();
      expect(template?.tagline).toBeTruthy();
      expect(template?.theme.background).toBeTruthy();
      expect(template?.theme.foreground).toBeTruthy();
      expect(template?.defaultSections.length).toBeGreaterThan(0);

      // Verify hero section exists
      const hero = template?.defaultSections.find((s) => s.type === 'hero');
      expect(hero).toBeDefined();
    });
  });

  it('should assign unique IDs to all templates', () => {
    const ids = TEMPLATES.map((t) => t.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
