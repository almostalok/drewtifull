import { Project, Occasion, SectionData } from './templates/types';
import { SAMPLE_PROJECTS } from './sampleProjects';
import { TEMPLATES } from './templates';

const STORAGE_KEY = 'drewtifull_projects_v1';

export function getStoredProjects(): Project[] {
  if (typeof window === 'undefined') {
    return SAMPLE_PROJECTS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SAMPLE_PROJECTS));
      return SAMPLE_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SAMPLE_PROJECTS;
  } catch (err) {
    console.error('Failed to read from localStorage:', err);
    return SAMPLE_PROJECTS;
  }
}

export function saveProject(project: Project): void {
  if (typeof window === 'undefined') return;

  const current = getStoredProjects();
  const index = current.findIndex((p) => p.id === project.id);
  let updated: Project[];

  if (index >= 0) {
    updated = [...current];
    updated[index] = {
      ...project,
      updatedAt: new Date().toISOString(),
    };
  } else {
    updated = [project, ...current];
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save project to localStorage:', e);
  }

  // Non-blocking sync with server repository
  try {
    fetch(`/api/projects/${project.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    })
      .then((res) => {
        if (res.status === 404) {
          // If not found on server, create it
          return fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              templateId: project.templateId,
              recipientName: project.recipientName,
              occasion: project.occasion,
              relationship: project.relationship,
            }),
          });
        }
      })
      .catch(() => {
        // Offline / background fallback
      });
  } catch {
    // Network errors are non-fatal for local state
  }
}

export function getProjectById(id: string): Project | undefined {
  const projects = getStoredProjects();
  return projects.find((p) => p.id === id);
}

export function getPublishedProjectBySlug(slug: string): Project | undefined {
  const projects = getStoredProjects();
  return projects.find((p) => (p.slug === slug || p.id === slug) && p.status === 'published');
}

export function createNewProject(
  templateId: string,
  recipientName: string,
  occasion: Occasion,
  relationship = 'Special Someone',
  customMessage = ''
): Project {
  const template = TEMPLATES.find((t) => t.id === templateId) || TEMPLATES[0];
  const id = `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const cleanName = recipientName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const slug = `${cleanName || 'gift'}-${occasion}-${Math.random().toString(36).substring(2, 6)}`;

  // Clone template sections
  const clonedSections = JSON.parse(JSON.stringify(template.defaultSections));

  // Personalize hero and letter if present
  clonedSections.forEach((sec: SectionData) => {
    if (sec.type === 'hero') {
      sec.subtitle = `for ${recipientName} ♡`;
    }
    if (sec.type === 'letter') {
      sec.greeting = `Dear ${recipientName},`;
      if (customMessage.trim()) {
        sec.paragraphs = [customMessage.trim(), ...sec.paragraphs.slice(1)];
      }
    }
  });

  const newProject: Project = {
    id,
    slug,
    templateId: template.id,
    occasion,
    recipientName: recipientName.trim() || 'My Love',
    relationship,
    date: new Date().toISOString().split('T')[0],
    status: 'draft',
    views: 0,
    sections: clonedSections,
    photos: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  saveProject(newProject);

  // Sync to server
  try {
    fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        templateId: newProject.templateId,
        recipientName: newProject.recipientName,
        occasion: newProject.occasion,
        relationship: newProject.relationship,
        customMessage,
      }),
    }).catch(() => {});
  } catch {}

  return newProject;
}

export function publishProject(id: string, customSlug?: string): Project | undefined {
  const project = getProjectById(id);
  if (!project) return undefined;

  const published: Project = {
    ...project,
    slug: customSlug || project.slug,
    status: 'published',
    publishedAt: project.publishedAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: Math.max(1, project.views || 1),
    shareUrl: `/p/${customSlug || project.slug}`,
  };

  saveProject(published);

  try {
    fetch(`/api/projects/${id}/publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: published.slug }),
    }).catch(() => {});
  } catch {}

  return published;
}

export function unpublishProject(id: string): Project | undefined {
  const project = getProjectById(id);
  if (!project) return undefined;

  const unpublished: Project = {
    ...project,
    status: 'draft',
    updatedAt: new Date().toISOString(),
  };

  saveProject(unpublished);

  try {
    fetch(`/api/projects/${id}/unpublish`, {
      method: 'POST',
    }).catch(() => {});
  } catch {}

  return unpublished;
}

export function deleteProject(id: string): void {
  if (typeof window === 'undefined') return;
  const current = getStoredProjects();
  const filtered = current.filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

  try {
    fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    }).catch(() => {});
  } catch {}
}

export function duplicateProject(id: string): Project | undefined {
  const original = getProjectById(id);
  if (!original) return undefined;

  const copy: Project = {
    ...JSON.parse(JSON.stringify(original)),
    id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    slug: `${original.slug}-copy`,
    recipientName: `${original.recipientName} (Copy)`,
    status: 'draft',
    views: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: undefined,
  };

  saveProject(copy);

  try {
    fetch(`/api/projects/${id}/duplicate`, {
      method: 'POST',
    }).catch(() => {});
  } catch {}

  return copy;
}
