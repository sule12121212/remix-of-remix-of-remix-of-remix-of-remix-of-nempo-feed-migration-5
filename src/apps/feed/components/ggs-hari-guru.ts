import { formatRibuan } from './ggs-ujung-rambut-kaki';

/** Copy, prices and date for GGS Feed slide 64 — Hari Guru Nasional one-day promo. */
export const GGS_HARI_GURU = {
  slide: 64,
  greetingTop: 'Selamat',
  greetingBottom: 'Hari Guru',
  thanks: 'Terima kasih, Bapak & Ibu Guru',
  promoLabel: 'Promo hari ini saja',
  /** Hari Guru Nasional; the promo is valid on this day only. */
  date: '2026-11-25',
  offers: [
    { name: 'Massage', price: 85_000 },
    { name: 'Creambath', price: 80_000 },
  ],
} as const;

const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

/** "2026-11-25" → "Rabu, 25 November 2026" (UTC, so the weekday never shifts with the viewer's timezone). */
export function formatHariTanggal(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const day = DAYS_ID[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return `${day}, ${d} ${MONTHS_ID[m - 1]} ${y}`;
}

/** The promo is valid on Hari Guru only. */
export function isPromoHariGuruBerlaku(isoDate: string): boolean {
  return isoDate === GGS_HARI_GURU.date;
}

export const GGS_HARI_GURU_DATE = formatHariTanggal(GGS_HARI_GURU.date);
export const GGS_HARI_GURU_OFFERS = GGS_HARI_GURU.offers.map((o) => ({ name: o.name, price: formatRibuan(o.price) }));

export const GGS_HARI_GURU_TEXT = [
  `${GGS_HARI_GURU.greetingTop} ${GGS_HARI_GURU.greetingBottom}, ${GGS_HARI_GURU_DATE}.`,
  `${GGS_HARI_GURU.thanks}.`,
  `${GGS_HARI_GURU.promoLabel}:`,
  GGS_HARI_GURU_OFFERS.map((o) => `${o.name} Rp ${o.price}`).join(', ') + '.',
].join(' ');
