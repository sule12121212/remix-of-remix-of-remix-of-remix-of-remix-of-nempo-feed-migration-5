/** GGS Feed slide 60: transparent year-end split-end hair treatment promo sticker (same sticker style as slide 53). */
export const GGS_PROMO_AKHIR_TAHUN_SLIDE = 60 as const;

export const GGS_PROMO_AKHIR_TAHUN = {
  kicker: 'PROMO',
  line: ['Treatment', 'Rambut Bercabang'],
  punch: ['Hempas', 'Rambut Bercabang'],
  offer: 'Promo 10–30%',
  note: 'S&K berlaku',
  period: '18 November – 31 Desember 2026',
} as const;

export const GGS_PROMO_AKHIR_TAHUN_TEXT = `${GGS_PROMO_AKHIR_TAHUN.kicker} ${[
  ...GGS_PROMO_AKHIR_TAHUN.line,
  ...GGS_PROMO_AKHIR_TAHUN.punch,
].join(' ')}. ${GGS_PROMO_AKHIR_TAHUN.offer}. ${GGS_PROMO_AKHIR_TAHUN.note}. Berlaku ${GGS_PROMO_AKHIR_TAHUN.period}.`;
