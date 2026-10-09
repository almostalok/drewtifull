import { Project } from './templates/types';
import { TEMPLATES } from './templates';
import { CURATED_MUSIC_TRACKS } from './musicTracks';

export const SAMPLE_PROJECTS: Project[] = [
  // 1. Soft Garden
  {
    id: 'proj_aanchal_bday',
    slug: 'aanchal-birthday',
    templateId: 'soft-garden',
    occasion: 'birthday',
    recipientName: 'Aanchal',
    creatorName: 'Alok',
    relationship: 'Partner',
    date: '2026-10-06',
    status: 'published',
    views: 42,
    musicTrack: CURATED_MUSIC_TRACKS[0], // Acoustic Sunbeams
    photos: [
      {
        id: 'p1',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
        caption: 'your radiant morning light',
        isHero: true,
        aspect: 'portrait',
      },
      {
        id: 'p2',
        url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
        caption: 'botanical garden day',
        aspect: 'square',
      },
      {
        id: 'p3',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
        caption: 'golden hour smile',
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'soft-garden')?.defaultSections || [],
    createdAt: '2026-10-01T10:00:00Z',
    updatedAt: '2026-10-03T18:00:00Z',
    publishedAt: '2026-10-03T18:30:00Z',
  },

  // 2. Film Diary
  {
    id: 'proj_film_diary',
    slug: 'film-diary-aanchal',
    templateId: 'film-diary',
    occasion: 'birthday',
    recipientName: 'Aanchal',
    creatorName: 'Alok',
    relationship: 'Partner',
    date: '2026-10-06',
    status: 'published',
    views: 68,
    musicTrack: CURATED_MUSIC_TRACKS[2], // Lo-Fi Memories
    photos: [
      {
        id: 'p4',
        url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80',
        caption: 'analog memories',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'film-diary')?.defaultSections || [],
    createdAt: '2026-10-02T12:00:00Z',
    updatedAt: '2026-10-03T14:00:00Z',
    publishedAt: '2026-10-03T14:30:00Z',
  },

  // 3. Scrapbook
  {
    id: 'proj_scrapbook',
    slug: 'scrapbook-aanchal',
    templateId: 'scrapbook-birthday',
    occasion: 'birthday',
    recipientName: 'Aanchal',
    creatorName: 'Alok',
    relationship: 'Partner',
    date: '2026-10-06',
    status: 'published',
    views: 55,
    musicTrack: CURATED_MUSIC_TRACKS[0],
    photos: [
      {
        id: 'p5',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
        caption: 'scrapbook smile',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'scrapbook-birthday')?.defaultSections || [],
    createdAt: '2026-10-02T10:00:00Z',
    updatedAt: '2026-10-03T16:00:00Z',
    publishedAt: '2026-10-03T16:30:00Z',
  },

  // 4. Cute & Cozy
  {
    id: 'proj_cute_cozy',
    slug: 'cute-cozy-aanchal',
    templateId: 'cute-and-cozy',
    occasion: 'birthday',
    recipientName: 'Aanchal',
    creatorName: 'Alok',
    relationship: 'Partner',
    date: '2026-10-06',
    status: 'published',
    views: 82,
    musicTrack: CURATED_MUSIC_TRACKS[0],
    photos: [
      {
        id: 'p6',
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
        caption: 'cutest sunshine',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'cute-and-cozy')?.defaultSections || [],
    createdAt: '2026-10-03T09:00:00Z',
    updatedAt: '2026-10-03T11:00:00Z',
    publishedAt: '2026-10-03T11:30:00Z',
  },

  // 5. Vintage Newspaper
  {
    id: 'proj_newspaper',
    slug: 'newspaper-aanchal',
    templateId: 'vintage-newspaper',
    occasion: 'birthday',
    recipientName: 'Aanchal',
    creatorName: 'Alok',
    relationship: 'Partner',
    date: '2026-10-06',
    status: 'published',
    views: 94,
    musicTrack: CURATED_MUSIC_TRACKS[1],
    photos: [
      {
        id: 'p7',
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
        caption: 'front page chronicle',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'vintage-newspaper')?.defaultSections || [],
    createdAt: '2026-10-03T10:00:00Z',
    updatedAt: '2026-10-03T12:00:00Z',
    publishedAt: '2026-10-03T12:30:00Z',
  },

  // 6. Pink Y2K
  {
    id: 'proj_pink_y2k',
    slug: 'y2k-aanchal',
    templateId: 'pink-y2k',
    occasion: 'birthday',
    recipientName: 'Aanchal',
    creatorName: 'Alok',
    relationship: 'Partner',
    date: '2026-10-06',
    status: 'published',
    views: 110,
    musicTrack: CURATED_MUSIC_TRACKS[0],
    photos: [
      {
        id: 'p8',
        url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
        caption: 'sparkle baby',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'pink-y2k')?.defaultSections || [],
    createdAt: '2026-10-03T15:00:00Z',
    updatedAt: '2026-10-03T17:00:00Z',
    publishedAt: '2026-10-03T17:30:00Z',
  },

  // Anniversary: Our Story
  {
    id: 'proj_anniversary_leo',
    slug: 'three-years-leo',
    templateId: 'our-story',
    occasion: 'anniversary',
    recipientName: 'Leo',
    creatorName: 'Claire',
    relationship: 'Fiancé',
    date: '2026-10-12',
    status: 'published',
    views: 89,
    musicTrack: CURATED_MUSIC_TRACKS[1],
    photos: [
      {
        id: 'p9',
        url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1000&q=80',
        caption: 'watching the sunset',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'our-story')?.defaultSections || [],
    createdAt: '2026-09-20T12:00:00Z',
    updatedAt: '2026-10-02T14:15:00Z',
    publishedAt: '2026-10-02T15:00:00Z',
  },

  // Proposal: Before I Ask
  {
    id: 'proj_proposal_maya',
    slug: 'before-i-ask-maya',
    templateId: 'before-i-ask',
    occasion: 'proposal',
    recipientName: 'Maya',
    creatorName: 'Julian',
    relationship: 'The Love of My Life',
    date: '2026-10-20',
    status: 'published',
    views: 134,
    musicTrack: CURATED_MUSIC_TRACKS[3],
    photos: [
      {
        id: 'p10',
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
        caption: 'under the lantern lights',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'before-i-ask')?.defaultSections || [],
    createdAt: '2026-09-28T08:00:00Z',
    updatedAt: '2026-10-03T11:20:00Z',
    publishedAt: '2026-10-03T11:45:00Z',
  },
];
