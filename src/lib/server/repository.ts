import fs from 'fs';
import path from 'path';
import { Project, SectionData } from '@/lib/templates/types';
import { SAMPLE_PROJECTS } from '@/lib/sampleProjects';
import { TEMPLATES } from '@/lib/templates';

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'projects.json');

// In-memory cache for synchronous speed and concurrency safety
let memoryCache: Project[] | null = null;

function ensureDataFile(): Project[] {
  if (memoryCache && memoryCache.length > 0) {
    return memoryCache;
  }

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      memoryCache = JSON.parse(JSON.stringify(SAMPLE_PROJECTS));
      fs.writeFileSync(DATA_FILE, JSON.stringify(memoryCache, null, 2), 'utf8');
      return memoryCache!;
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8').trim();
    if (!raw) {
      memoryCache = JSON.parse(JSON.stringify(SAMPLE_PROJECTS));
      fs.writeFileSync(DATA_FILE, JSON.stringify(memoryCache, null, 2), 'utf8');
      return memoryCache!;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      memoryCache = parsed;
      return memoryCache;
    }
    memoryCache = JSON.parse(JSON.stringify(SAMPLE_PROJECTS));
    return memoryCache!;
  } catch (err) {
    console.error('Recovering project data file:', err);
    memoryCache = JSON.parse(JSON.stringify(SAMPLE_PROJECTS));
    return memoryCache!;
  }
}

function persistProjects(projects: Project[]): void {
  memoryCache = projects;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tmpFile = `${DATA_FILE}.${Date.now()}.${Math.random().toString(36).substring(2, 6)}.tmp`;
    fs.writeFileSync(tmpFile, JSON.stringify(projects, null, 2), 'utf8');
    fs.renameSync(tmpFile, DATA_FILE);
  } catch (err) {
    // If atomic rename fails on Windows due to lock, fallback to direct write
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), 'utf8');
    } catch (writeErr) {
      console.error('Error persisting projects to disk:', writeErr);
    }
  }
}

export function getAllProjects(): Project[] {
  return ensureDataFile();
}

export function getProjectById(id: string): Project | undefined {
  const projects = ensureDataFile();
  return projects.find((p) => p.id === id);
}

export function getPublishedProjectBySlug(slug: string): Project | undefined {
  const projects = ensureDataFile();
  return projects.find(
    (p) => (p.slug === slug || p.id === slug) && p.status === 'published'
  );
}

export function checkSlugAvailability(slug: string, excludeProjectId?: string): boolean {
  const projects = ensureDataFile();
  const collision = projects.find(
    (p) => p.slug === slug && p.id !== excludeProjectId
  );
  return !collision;
}

export function generateUniqueSlug(baseName: string, occasion: string, excludeProjectId?: string): string {
  const clean = (baseName || 'gift').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const base = `${clean || 'gift'}-${occasion}`;
  
  if (checkSlugAvailability(base, excludeProjectId)) {
    return base;
  }
  
  for (let i = 2; i <= 99; i++) {
    const candidate = `${base}-${i}`;
    if (checkSlugAvailability(candidate, excludeProjectId)) {
      return candidate;
    }
  }

  const randomSuffix = Math.random().toString(36).substring(2, 6);
  return `${base}-${randomSuffix}`;
}

export function saveProject(project: Project): Project {
  const projects = [...ensureDataFile()];
  const index = projects.findIndex((p) => p.id === project.id);
  const updatedProject = {
    ...project,
    updatedAt: new Date().toISOString(),
  };

  if (index >= 0) {
    projects[index] = updatedProject;
  } else {
    projects.unshift(updatedProject);
  }

  persistProjects(projects);
  return updatedProject;
}

export function createProject(data: {
  templateId: string;
  recipientName: string;
  occasion: any;
  relationship?: string;
  customMessage?: string;
}): Project {
  const template = TEMPLATES.find((t) => t.id === data.templateId) || TEMPLATES[0];
  const id = `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const slug = generateUniqueSlug(data.recipientName, data.occasion);

  // Clone sections
  const clonedSections = JSON.parse(JSON.stringify(template.defaultSections));
  clonedSections.forEach((sec: SectionData) => {
    if (sec.type === 'hero') {
      sec.subtitle = `for ${data.recipientName} ♡`;
    }
    if (sec.type === 'letter') {
      sec.greeting = `Dear ${data.recipientName},`;
      if (data.customMessage?.trim()) {
        sec.paragraphs = [data.customMessage.trim(), ...sec.paragraphs.slice(1)];
      }
    }
  });

  const newProject: Project = {
    id,
    slug,
    templateId: template.id,
    occasion: data.occasion,
    recipientName: data.recipientName.trim() || 'My Love',
    relationship: data.relationship || 'Special Someone',
    date: new Date().toISOString().split('T')[0],
    status: 'draft',
    views: 0,
    sections: clonedSections,
    photos: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return saveProject(newProject);
}

export function duplicateProject(id: string): Project | undefined {
  const original = getProjectById(id);
  if (!original) return undefined;

  const newId = `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const newSlug = generateUniqueSlug(`${original.recipientName}-copy`, original.occasion);

  const copy: Project = {
    ...JSON.parse(JSON.stringify(original)),
    id: newId,
    slug: newSlug,
    recipientName: `${original.recipientName} (Copy)`,
    status: 'draft',
    views: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    publishedAt: undefined,
  };

  return saveProject(copy);
}

export function deleteProject(id: string): boolean {
  const projects = [...ensureDataFile()];
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length !== projects.length) {
    persistProjects(filtered);
    return true;
  }
  return false;
}

export function publishProject(id: string, customSlug?: string): Project | undefined {
  const project = getProjectById(id);
  if (!project) return undefined;

  let finalSlug = project.slug;
  if (customSlug && customSlug.trim() && customSlug !== project.slug) {
    const clean = customSlug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (checkSlugAvailability(clean, project.id)) {
      finalSlug = clean;
    }
  }

  const updated: Project = {
    ...project,
    slug: finalSlug,
    status: 'published',
    publishedAt: project.publishedAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    views: Math.max(1, project.views || 1),
    shareUrl: `/p/${finalSlug}`,
  };

  return saveProject(updated);
}

export function unpublishProject(id: string): Project | undefined {
  const project = getProjectById(id);
  if (!project) return undefined;

  const updated: Project = {
    ...project,
    status: 'draft',
    updatedAt: new Date().toISOString(),
  };

  return saveProject(updated);
}
