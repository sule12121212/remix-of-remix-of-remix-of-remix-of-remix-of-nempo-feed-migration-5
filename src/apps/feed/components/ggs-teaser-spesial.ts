export const GGS_TEASER_SPESIAL_SLIDE = 61;

export const GGS_TEASER_SPESIAL = {
  date: '20 November 2026',
  title: 'Something Spesial',
  audience: 'buat customer GGS Hair Studio',
  benefits: [
    { key: 'booking', text: 'Booking lebih gampang' },
    { key: 'schedule', text: 'Bisa lihat jadwal kosong' },
    { key: 'promo', text: 'Promo treatment melimpah setiap hari' },
    { key: 'points', text: 'Poin spesial buat kamu yang datang treatment' },
    { key: 'more', text: 'Dan masih banyak lagi' },
  ],
  cta: 'Pantau terus & jangan lupa follow IG GGS ya!',
  /** Sneak peek of the GGS website: the owner's own screenshots of two pages, shown on two tablets. */
  web: {
    peek: 'Intip web barunya!',
    screens: [
      { key: 'home', label: 'Beranda' },
      { key: 'nail', label: 'Nail Art Panggilan' },
    ],
  },
} as const;

export const GGS_TEASER_SPESIAL_TEXT = `${GGS_TEASER_SPESIAL.date}. ${GGS_TEASER_SPESIAL.title} ${GGS_TEASER_SPESIAL.audience}. ${GGS_TEASER_SPESIAL.benefits.map((item) => item.text).join('. ')}. ${GGS_TEASER_SPESIAL.web.peek} ${GGS_TEASER_SPESIAL.web.screens.map((screen) => screen.label).join(' dan ')}. ${GGS_TEASER_SPESIAL.cta}`;
