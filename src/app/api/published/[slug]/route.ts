import { NextResponse } from 'next/server';
import { SAMPLE_PROJECTS } from '@/lib/sampleProjects';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = SAMPLE_PROJECTS.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return NextResponse.json({ error: 'Published gift not found' }, { status: 404 });
  }

  return NextResponse.json({ project });
}
