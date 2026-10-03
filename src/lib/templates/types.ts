export type Occasion =
  | 'birthday'
  | 'anniversary'
  | 'proposal'
  | 'friendship'
  | 'graduation'
  | 'farewell'
  | 'just-because'
  | 'something-else';

export type AestheticTag =
  | 'soft'
  | 'cute'
  | 'minimal'
  | 'cinematic'
  | 'scrapbook'
  | 'editorial'
  | 'playful'
  | 'romantic'
  | 'vintage'
  | 'dark';

export type SectionType =
  | 'hero'
  | 'letter'
  | 'photoGrid'
  | 'polaroidCollage'
  | 'filmStrip'
  | 'timeline'
  | 'reasons'
  | 'favoriteThings'
  | 'proposalReveal'
  | 'starMap'
  | 'quote'
  | 'ending';

export interface PhotoItem {
  id: string;
  url: string;
  caption?: string;
  date?: string;
  isHero?: boolean;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface HeroSectionData {
  id: string;
  type: 'hero';
  title: string;
  subtitle: string;
  dateText?: string;
  heroPhoto?: string;
  badgeText?: string;
  audioHint?: string;
  layout?: 'centered' | 'editorial-split' | 'film-cover' | 'scrapbook-header' | 'celestial';
}

export interface LetterSectionData {
  id: string;
  type: 'letter';
  greeting: string;
  paragraphs: string[];
  closing: string;
  handwrittenSignature: string;
  waxSeal?: boolean;
  paperStyle?: 'lined' | 'plain' | 'parchment' | 'folded-envelope';
}

export interface PhotoGridSectionData {
  id: string;
  type: 'photoGrid';
  title?: string;
  subtitle?: string;
  layout: 'editorial' | 'masonry' | 'mosaic' | 'minimal-duo';
  images: Array<{
    url: string;
    caption?: string;
    aspect?: 'portrait' | 'landscape' | 'square';
  }>;
}

export interface PolaroidCollageSectionData {
  id: string;
  type: 'polaroidCollage';
  title?: string;
  subtitle?: string;
  polaroids: Array<{
    url: string;
    caption: string;
    date?: string;
    rotation?: number; // e.g. -3, 2, 4
    washiColor?: 'rose' | 'sage' | 'gold' | 'neutral';
  }>;
}

export interface FilmStripSectionData {
  id: string;
  type: 'filmStrip';
  title?: string;
  subtitle?: string;
  filmFormat?: '35mm' | 'warm-grain' | 'monochrome';
  frames: Array<{
    url: string;
    caption?: string;
    timestamp?: string;
    frameNumber?: string;
  }>;
}

export interface TimelineSectionData {
  id: string;
  type: 'timeline';
  title?: string;
  subtitle?: string;
  events: Array<{
    date: string;
    title: string;
    description: string;
    image?: string;
  }>;
}

export interface ReasonsSectionData {
  id: string;
  type: 'reasons';
  title: string;
  subtitle?: string;
  items: Array<{
    number: number;
    title: string;
    text: string;
    doodle?: string;
  }>;
}

export interface FavoriteThingsSectionData {
  id: string;
  type: 'favoriteThings';
  title: string;
  subtitle?: string;
  items: Array<{
    category: string;
    value: string;
    note?: string;
  }>;
}

export interface ProposalRevealSectionData {
  id: string;
  type: 'proposalReveal';
  introTitle: string;
  memories: Array<{
    text: string;
    image?: string;
  }>;
  suspenseText: string;
  questionText: string;
  celebrationTitle: string;
  celebrationMessage: string;
}

export interface StarMapSectionData {
  id: string;
  type: 'starMap';
  title: string;
  subtitle?: string;
  starQuote: string;
  coordinatesText?: string;
  photosAsStars: Array<{
    url: string;
    label: string;
    x: number; // percentage
    y: number; // percentage
  }>;
}

export interface QuoteSectionData {
  id: string;
  type: 'quote';
  quoteText: string;
  author?: string;
  subtext?: string;
}

export interface EndingSectionData {
  id: string;
  type: 'ending';
  message: string;
  subtext?: string;
  showDrewtifullBranding: boolean;
}

export type SectionData =
  | HeroSectionData
  | LetterSectionData
  | PhotoGridSectionData
  | PolaroidCollageSectionData
  | FilmStripSectionData
  | TimelineSectionData
  | ReasonsSectionData
  | FavoriteThingsSectionData
  | ProposalRevealSectionData
  | StarMapSectionData
  | QuoteSectionData
  | EndingSectionData;

export interface TemplateTheme {
  background: string;
  foreground: string;
  accent: string;
  accentSoft: string;
  paperTone: string;
  cardBackground: string;
  borderStyle: string;
  fontFamilySerif: string;
  fontFamilySans: string;
  fontFamilyHand: string;
  dark?: boolean;
}

export interface Template {
  id: string;
  name: string;
  tagline: string;
  occasion: Occasion;
  aesthetic: AestheticTag[];
  description: string;
  previewImage: string;
  theme: TemplateTheme;
  defaultMusicTrack?: string;
  defaultSections: SectionData[];
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
  url: string;
  genre: string;
}

export interface Project {
  id: string;
  slug: string;
  templateId: string;
  occasion: Occasion;
  recipientName: string;
  creatorName?: string;
  relationship: string;
  date: string;
  status: 'draft' | 'published';
  views: number;
  themeOverride?: Partial<TemplateTheme>;
  musicTrack?: MusicTrack | null;
  sections: SectionData[];
  photos: PhotoItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  shareUrl?: string;
}
