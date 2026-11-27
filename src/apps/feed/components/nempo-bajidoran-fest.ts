import { nempoBajidoran, weekdayId } from './nempo-bajidoran';

/**
 * NEMPO Feed slide 63 — Vibez-Fest-style event poster for the next Bajidoran DJ night at Good Story Cafe:
 * the owner's 3D "BAJIDORAN DJ" lettering, the kendang group, the dancers and the MC (left) and DJ Dityar (right) as cut-outs over a warm
 * hazy stage backdrop, with the same header as the earlier Good Story Cafe event slides (46–53).
 */
export const NEMPO_BAJIDORAN_FEST_SLIDE = 63;
export const NEMPO_BAJIDORAN_STORY_SLIDE = 65;
export const NBX_STORY_EXPORT = { width: 3240, height: 5760 } as const;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NBX_EXPORT = { width: 3240, height: 4320 } as const;

const iso = '2026-11-27';

export const nempoBajidoranFest = {
  title: 'Bajidoran DJ',
  activitiesLabel: 'Acara:',
  activities: ['Kendang Jaipong', 'Penari Bajidor', 'DJ Set'],
  mc: 'MC',
  dj: 'DJ Dityar',
  schedule: [
    { label: 'Mulai', value: '18.00 WIB' },
    { label: 'Sampai', value: 'Selesai' },
  ],
  date: { iso, weekday: weekdayId(iso), day: '27', month: 'Nov', year: '2026' },
  venue: nempoBajidoran.venue,
  info: nempoBajidoran.info,
  socials: '@nempo.id',
} as const;
