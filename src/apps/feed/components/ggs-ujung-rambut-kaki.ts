/** Copy, price and dates for GGS Feed slide 63 — the head-to-toe treatment package. */
export type GgsUjungRambutKakiService = { name: string; detail?: string };

export const GGS_UJUNG_RAMBUT_KAKI = {
  slide: 63,
  kicker: 'Perawatan dari',
  titleTop: 'Ujung Rambut',
  titleBottom: 'sampai ujung kaki',
  priceLead: 'hanya',
  price: 250_000,
  services: [
    { name: 'Massage full body', detail: '60 menit' },
    { name: 'Lulur full body', detail: '30 menit' },
    { name: 'Creambath & catok' },
  ] as readonly GgsUjungRambutKakiService[],
  /** Captions under the three small treatment photos. */
  thumbs: ['Lulur', 'Creambath', 'Catok'] as readonly string[],
  /** Promo period, inclusive, as ISO dates. */
  startDate: '2026-11-24',
  endDate: '2026-12-05',
} as const;

const MONTHS_ID = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

/** "250000" → "250.000" (Indonesian thousands separator). */
export function formatRibuan(value: number): string {
  return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatTanggal(iso: string, withYear: boolean): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS_ID[m - 1]}${withYear ? ` ${y}` : ''}`;
}

/** "24 November – 5 Desember 2026" (year shown once when both dates share it). */
export function formatPeriode(startIso: string, endIso: string): string {
  const sameYear = startIso.slice(0, 4) === endIso.slice(0, 4);
  return `${formatTanggal(startIso, !sameYear)} – ${formatTanggal(endIso, true)}`;
}

/** True when the given ISO date (YYYY-MM-DD) falls inside the promo period. */
export function isPromoBerlaku(isoDate: string): boolean {
  return isoDate >= GGS_UJUNG_RAMBUT_KAKI.startDate && isoDate <= GGS_UJUNG_RAMBUT_KAKI.endDate;
}

export const GGS_UJUNG_RAMBUT_KAKI_PRICE = formatRibuan(GGS_UJUNG_RAMBUT_KAKI.price);
export const GGS_UJUNG_RAMBUT_KAKI_PERIOD = formatPeriode(GGS_UJUNG_RAMBUT_KAKI.startDate, GGS_UJUNG_RAMBUT_KAKI.endDate);

/** Spoken-label form of the whole slide, used for the aria-label. */
export const GGS_UJUNG_RAMBUT_KAKI_TEXT = [
  `${GGS_UJUNG_RAMBUT_KAKI.kicker} ${GGS_UJUNG_RAMBUT_KAKI.titleTop} ${GGS_UJUNG_RAMBUT_KAKI.titleBottom}`,
  `${GGS_UJUNG_RAMBUT_KAKI.priceLead} Rp ${GGS_UJUNG_RAMBUT_KAKI_PRICE}.`,
  GGS_UJUNG_RAMBUT_KAKI.services.map((s) => (s.detail ? `${s.name} ${s.detail}` : s.name)).join(', ') + '.',
  `Berlaku ${GGS_UJUNG_RAMBUT_KAKI_PERIOD}.`,
].join(' ');
