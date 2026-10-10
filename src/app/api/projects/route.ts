import { NextResponse } from 'next/server';
import { getAllProjects, createProject } from '@/lib/server/repository';
import { CreateProjectSchema } from '@/lib/validation';

export async function GET() {
  try {
    const projects = getAllProjects();
    return NextResponse.json({ projects });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = CreateProjectSchema.parse(body);
    const newProject = createProject(validated);
    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Invalid project payload' }, { status: 400 });
  }
}
