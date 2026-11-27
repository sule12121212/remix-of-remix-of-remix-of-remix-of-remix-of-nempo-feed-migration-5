/** GGS Feed slide 50: playful "himbauan untuk warga Garut" printed on a newspaper before malam minggu (no prices). */
export const GGS_MALMING_SLIDE = 50 as const;

export const GGS_MALMING = {
  kicker: 'GGS Beauty · Edisi Malam Minggu',
  title: 'Himbauan',
  masthead: { name: 'GGS Post', edition: 'Garut · Sabtu Malam' },
  headline: 'untuk warga Garut',
  body: 'Menjelang malam minggu, warga dihimbau tidak keluar rumah dengan rambut lepek, kuku polos, dan muka kusam.',
  deal: { label: 'Diskon', value: '10–30%' },
  closer: 'Hayu, ka GGS heula.',
  tickets: [
    { stub: 'Berlaku', text: 'Setiap Sabtu malam' },
    { stub: 'Wajib', text: 'Geulis & Kasep' },
  ],
  price: null,
} as const;

export const GGS_MALMING_TEXT = `${GGS_MALMING.title} ${GGS_MALMING.headline}`;
