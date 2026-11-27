import { nempoBajidoran } from './nempo-bajidoran';

/**
 * NEMPO Feed slide 50 — poster in the style of slide 31 (illustrated gamelan frame, stage backdrop,
 * date banner) that puts the Saduli Ragap dancers and DJ Dityar together for the Bajidoran & DJ night.
 */
export const NEMPO_SADULI_DJ_SLIDE = 50;

export const nempoSaduliDj = {
  title: nempoBajidoran.title,
  partner: nempoBajidoran.partner,
  kicker: 'Saduli Ragap × DJ Dityar',
  talent: { dancers: 'Saduli Ragap', dj: 'DJ Dityar' },
  date: nempoBajidoran.date,
  venue: nempoBajidoran.venue,
  info: nempoBajidoran.info,
} as const;
