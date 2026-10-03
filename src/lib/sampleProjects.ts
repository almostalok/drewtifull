import { Project } from './templates/types';
import { TEMPLATES } from './templates';
import { CURATED_MUSIC_TRACKS } from './musicTracks';

export const SAMPLE_PROJECTS: Project[] = [
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
    musicTrack: CURATED_MUSIC_TRACKS[1], // Warm Piano Waltz
    photos: [
      {
        id: 'p4',
        url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1000&q=80',
        caption: 'watching the sunset at the harbor',
        isHero: true,
        aspect: 'portrait',
      },
      {
        id: 'p5',
        url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
        caption: 'the day we reached for the same book',
        aspect: 'landscape',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'our-story')?.defaultSections || [],
    createdAt: '2026-09-20T12:00:00Z',
    updatedAt: '2026-10-02T14:15:00Z',
    publishedAt: '2026-10-02T15:00:00Z',
  },
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
    musicTrack: CURATED_MUSIC_TRACKS[3], // Starlight Music Box
    photos: [
      {
        id: 'p6',
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
  {
    id: 'proj_bestie_maya',
    slug: 'best-friend-maya',
    templateId: 'my-favorite-human',
    occasion: 'friendship',
    recipientName: 'Maya',
    creatorName: 'Sam',
    relationship: 'Best Friend',
    date: '2026-10-04',
    status: 'draft',
    views: 12,
    musicTrack: CURATED_MUSIC_TRACKS[2], // Lo-Fi
    photos: [
      {
        id: 'p7',
        url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80',
        caption: 'legendary chaotic duo',
        isHero: true,
        aspect: 'portrait',
      },
    ],
    sections: TEMPLATES.find((t) => t.id === 'my-favorite-human')?.defaultSections || [],
    createdAt: '2026-10-03T16:00:00Z',
    updatedAt: '2026-10-03T19:00:00Z',
  },
];
