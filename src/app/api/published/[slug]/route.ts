import { NextResponse } from 'next/server';
import { getPublishedProjectBySlug } from '@/lib/server/repository';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getPublishedProjectBySlug(slug);

  if (!project) {
    return NextResponse.json({ error: 'Published gift not found or draft' }, { status: 404 });
  }

  return NextResponse.json({ project });
}
