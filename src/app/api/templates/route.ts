import { NextResponse } from 'next/server';
import { TEMPLATES } from '@/lib/templates';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const occasion = searchParams.get('occasion');

  if (occasion && occasion !== 'all') {
    const filtered = TEMPLATES.filter((t) => t.occasion === occasion);
    return NextResponse.json({ templates: filtered });
  }

  return NextResponse.json({ templates: TEMPLATES });
}
