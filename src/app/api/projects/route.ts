import { NextResponse } from 'next/server';
import { SAMPLE_PROJECTS } from '@/lib/sampleProjects';

// In-memory cache for API requests during dev/server sessions
const memoryProjects = [...SAMPLE_PROJECTS];

export async function GET() {
  return NextResponse.json({ projects: memoryProjects });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    memoryProjects.unshift(body);
    return NextResponse.json({ success: true, project: body });
  } catch {
    return NextResponse.json({ error: 'Invalid project payload' }, { status: 400 });
  }
}
