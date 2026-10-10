import { NextResponse } from 'next/server';
import { checkSlugAvailability } from '@/lib/server/repository';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(request.url);
  const excludeProjectId = searchParams.get('excludeProjectId') || undefined;

  const clean = slug.trim().toLowerCase();
  const available = checkSlugAvailability(clean, excludeProjectId);

  return NextResponse.json({
    slug: clean,
    available,
  });
}
