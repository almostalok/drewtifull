import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { getProjectById, saveProject } from '@/lib/server/repository';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const caption = (formData.get('caption') as string) || '';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Validate size (max 10MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'Image exceeds 10MB limit' }, { status: 400 });
    }

    // Validate MIME type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Only JPEG, PNG, WebP, or GIF images are supported' },
        { status: 400 }
      );
    }

    // Target upload directory in public/uploads/<projectId>
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', id);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const ext = path.extname(file.name) || '.jpg';
    const safeBase = path
      .basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '_')
      .substring(0, 32);
    const filename = `${Date.now()}_${safeBase}${ext}`;
    const filePath = path.join(uploadDir, filename);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${id}/${filename}`;

    const newPhoto = {
      id: `photo_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      url: publicUrl,
      caption: caption || safeBase.replace(/_/g, ' '),
      aspect: 'portrait' as const,
      isHero: project.photos.length === 0,
    };

    const updatedPhotos = [...project.photos, newPhoto];
    let updatedSections = project.sections;
    if (project.photos.length === 0) {
      updatedSections = project.sections.map((s) =>
        s.type === 'hero' ? { ...s, heroPhoto: publicUrl } : s
      );
    }

    saveProject({
      ...project,
      photos: updatedPhotos,
      sections: updatedSections,
    });

    return NextResponse.json(
      {
        success: true,
        asset: {
          ...newPhoto,
          fileSize: file.size,
          mimeType: file.type,
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: err.message || 'Upload failed' }, { status: 500 });
  }
}
