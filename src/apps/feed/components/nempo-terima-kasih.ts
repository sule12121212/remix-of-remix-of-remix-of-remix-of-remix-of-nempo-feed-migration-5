import { nempoBajidoran } from './nempo-bajidoran';
import { nempoSaduliDj } from './nempo-saduli-dj';

/**
 * NEMPO Feed slide 53 — after-event thank-you for last night's Bajidoran & DJ at Good Story Cafe:
 * text only inside slide 52's lighting-truss frame, exported as a transparent PNG (no background photo).
 */
export const NEMPO_TERIMA_KASIH_SLIDE = 53;

/** Prebuilt transparent PNG, captured from the preview at 1080 CSS px × 3. */
export const NTE_EXPORT = { width: 3240, height: 4320 } as const;

export const nempoTerimaKasih = {
  eyebrow: 'Semalam di Good Story Cafe',
  headline: { lead: 'Hatur', accent: 'Nuhun!' },
  ribbon: 'Makasih udah datang!',
  body: 'Terima kasih sudah hadir, goyang, dan enjoy bareng kami tadi malam. Kalian yang bikin malam itu hidup!',
  title: nempoBajidoran.title,
  partner: nempoBajidoran.partner,
  date: nempoBajidoran.date,
  venue: nempoBajidoran.venue,
  talent: nempoSaduliDj.talent,
} as const;


