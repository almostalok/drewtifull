import { NextResponse } from 'next/server';
import { duplicateProject } from '@/lib/server/repository';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = duplicateProject(id);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, project }, { status: 201 });
}
