import { NextResponse } from 'next/server';
import { publishProject } from '@/lib/server/repository';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let customSlug: string | undefined;

  try {
    const body = await request.json().catch(() => ({}));
    customSlug = body.slug;
  } catch {
    // Body optional
  }

  const project = publishProject(id, customSlug);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json({
    success: true,
    publishedUrl: `/p/${project.slug}`,
    project,
  });
}
