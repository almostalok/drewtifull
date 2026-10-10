import { NextResponse } from 'next/server';
import { getProjectById, saveProject, deleteProject } from '@/lib/server/repository';
import { UpdateProjectSchema } from '@/lib/validation';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json({ project });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const existing = getProjectById(id);

  if (!existing) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  try {
    const body = await request.json();
    const validated = UpdateProjectSchema.parse(body);
    const updated = {
      ...existing,
      ...validated,
      updatedAt: new Date().toISOString(),
    };
    const saved = saveProject(updated as any);
    return NextResponse.json({ success: true, project: saved });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Invalid update payload' }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const success = deleteProject(id);

  if (!success) {
    return NextResponse.json({ error: 'Project not found or already deleted' }, { status: 404 });
  }

  return NextResponse.json({ success: true, deletedId: id });
}
