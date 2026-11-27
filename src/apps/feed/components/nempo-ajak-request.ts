import { nempoBajidoran } from './nempo-bajidoran';

/**
 * NEMPO Feed slide 51 — engagement post on slide 50's stage frame: ask followers whom they will bring
 * to the Bajidoran & DJ night (answer in the comments) and which song they want to request.
 */
export const NEMPO_AJAK_REQUEST_SLIDE = 51;

export const nempoAjakRequest = {
  title: nempoBajidoran.title,
  partner: nempoBajidoran.partner,
  invite: {
    question: 'Mau ajak siapa?',
    lead: 'ke acara nanti',
    cta: 'Tulis di kolom komentar',
  },
  request: {
    heading: 'Request lagunya mau apa?',
    note: 'Pilih nomornya, tulis di komentar',
    songs: ['Helikopter', 'Negoro Angin', 'Hatimu Aduh', 'Singkong dan Keju', 'Kopi Susu'],
  },
  date: nempoBajidoran.date,
  venue: nempoBajidoran.venue,
} as const;
