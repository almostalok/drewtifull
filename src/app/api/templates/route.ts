import { NextResponse } from 'next/server';
import { TEMPLATES } from '@/lib/templates';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const occasion = searchParams.get('occasion');
  const aesthetic = searchParams.get('aesthetic');
  const query = searchParams.get('q') || searchParams.get('search');

  let results = [...TEMPLATES];

  if (occasion && occasion !== 'all') {
    results = results.filter((t) => t.occasion === occasion);
  }

  if (aesthetic && aesthetic !== 'all') {
    results = results.filter((t) => t.aesthetic.includes(aesthetic as any));
  }

  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    results = results.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ templates: results, total: results.length });
}
