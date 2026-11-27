import { nempoBajidoran } from './nempo-bajidoran';
import { nempoSaduliDj } from './nempo-saduli-dj';

/**
 * NEMPO Feed slide 52 — day-of reminder on slide 50/51's stage frame: the Bajidoran & DJ night is today,
 * starting 18.00 until it is over.
 */
export const NEMPO_HARI_INI_SLIDE = 52;

export const nempoHariIni = {
  title: nempoBajidoran.title,
  partner: nempoBajidoran.partner,
  headline: 'Hari Ini!',
  lead: 'Jangan sampai ketinggalan',
  time: { label: 'Mulai jam', start: '18.00', end: 'Selesai', zone: 'WIB' },
  talent: nempoSaduliDj.talent,
  date: nempoBajidoran.date,
  venue: nempoBajidoran.venue,
  info: nempoBajidoran.info,
} as const;
