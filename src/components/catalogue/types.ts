export interface CatalogueTemplateItem {
  id: string;
  orderNumber: string; // e.g. "01"
  name: string;        // e.g. "Soft Garden"
  fullName: string;    // e.g. "01. Soft Garden"
  description: string; // e.g. "Floral, pastel, elegant and romantic."
  tags: string[];      // e.g. ["Floral", "Pastel", "Elegant"]
  filterCategory: string; // matches filter id: 'floral', 'cinematic', etc.
  occasion: string;    // 'birthday'
  accentColor: string;
}

export const CATALOGUE_TEMPLATES: CatalogueTemplateItem[] = [
  {
    id: 'soft-garden',
    orderNumber: '01',
    name: 'Soft Garden',
    fullName: '01. Soft Garden',
    description: 'Floral, pastel, elegant and romantic.',
    tags: ['Floral', 'Pastel', 'Elegant'],
    filterCategory: 'floral',
    occasion: 'birthday',
    accentColor: '#F28F91',
  },
  {
    id: 'film-diary',
    orderNumber: '02',
    name: 'Film Diary',
    fullName: '02. Film Diary',
    description: 'Cinematic, grainy, nostalgic.',
    tags: ['Cinematic', 'Film', 'Nostalgic'],
    filterCategory: 'cinematic',
    occasion: 'birthday',
    accentColor: '#D4AF37',
  },
  {
    id: 'scrapbook-birthday',
    orderNumber: '03',
    name: 'Scrapbook Birthday',
    fullName: '03. Scrapbook Birthday',
    description: 'Playful, doodle-filled and personal.',
    tags: ['Scrapbook', 'Playful', 'Nostalgic'],
    filterCategory: 'scrapbook',
    occasion: 'birthday',
    accentColor: '#B95B3B',
  },
  {
    id: 'minimal-editorial',
    orderNumber: '04',
    name: 'Minimal Editorial',
    fullName: '04. Minimal Editorial',
    description: 'Clean, sophisticated and emotional.',
    tags: ['Minimal', 'Editorial', 'Timeless'],
    filterCategory: 'minimal',
    occasion: 'birthday',
    accentColor: '#44403C',
  },
  {
    id: 'cute-and-cozy',
    orderNumber: '05',
    name: 'Cute & Cozy',
    fullName: '05. Cute & Cozy',
    description: 'Playful, cute, warm and adorable.',
    tags: ['Cute', 'Pastel', 'Whimsical'],
    filterCategory: 'cute',
    occasion: 'birthday',
    accentColor: '#DB2777',
  },
  {
    id: 'vintage-newspaper',
    orderNumber: '06',
    name: 'Vintage Newspaper',
    fullName: '06. Vintage Newspaper',
    description: 'Retro, journalistic and nostalgic.',
    tags: ['Vintage', 'Monochrome', 'Editorial'],
    filterCategory: 'vintage',
    occasion: 'birthday',
    accentColor: '#8A4A38',
  },
  {
    id: 'dreamy-night',
    orderNumber: '07',
    name: 'Dreamy Night',
    fullName: '07. Dreamy Night',
    description: 'Celestial, atmospheric and dreamy.',
    tags: ['Celestial', 'Dark', 'Dreamy'],
    filterCategory: 'celestial',
    occasion: 'birthday',
    accentColor: '#FACC15',
  },
  {
    id: 'polaroid-wall',
    orderNumber: '08',
    name: 'Polaroid Wall',
    fullName: '08. Polaroid Wall',
    description: 'Warm, photographic and casual.',
    tags: ['Polaroid', 'Collage', 'Warm'],
    filterCategory: 'polaroid',
    occasion: 'birthday',
    accentColor: '#B45309',
  },
  {
    id: 'pink-y2k',
    orderNumber: '09',
    name: 'Pink Y2K',
    fullName: '09. Pink Y2K',
    description: 'Bold, colourful and nostalgic.',
    tags: ['Y2K', 'Pink', 'Bold'],
    filterCategory: 'y2k',
    occasion: 'birthday',
    accentColor: '#FF1493',
  },
  {
    id: 'book-letter',
    orderNumber: '10',
    name: 'Book / Letter Style',
    fullName: '10. Book / Letter Style',
    description: 'Literary, intimate and timeless.',
    tags: ['Literary', 'Book', 'Timeless'],
    filterCategory: 'literary',
    occasion: 'birthday',
    accentColor: '#57534E',
  },
];
