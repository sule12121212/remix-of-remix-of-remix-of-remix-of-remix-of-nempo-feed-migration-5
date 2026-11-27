import { nempoBajidoran } from './nempo-bajidoran';

/**
 * NEMPO Feed slide 48 — 3:4 feed-size clip: the audience sawers (throws money) and the shy male
 * goat gets pulled into the dance by the cat dancer. Deliberately carries no "Coming Soon" label:
 * this one is the plain feed announcement of the same event as slides 46 and 47.
 */
export const NEMPO_BAJIDORAN_SAWER_SLIDE = 48;

export const nempoBajidoranSawer = {
  kicker: 'Nu kena sawer, kudu joget!',
  title: nempoBajidoran.title,
  partner: nempoBajidoran.partner,
  tagline: nempoBajidoran.tagline,
  date: nempoBajidoran.date,
  venue: nempoBajidoran.venue,
  info: nempoBajidoran.info,
} as const;
