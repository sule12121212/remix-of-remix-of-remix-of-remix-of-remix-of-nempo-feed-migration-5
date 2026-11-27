export const GGS_MEN_TEASER_SPESIAL_SLIDE = 11;

/** GGS Cowok slide 11: the men's version of GGS Feed slide 61's website teaser. */
export const GGS_MEN_TEASER_SPESIAL = {
  title: 'Something Spesial',
  audience: 'buat customer GGS Barber Hairstudio',
  benefits: [
    { key: 'booking', text: 'Booking lebih gampang' },
    { key: 'schedule', text: 'Bisa lihat jadwal kosong' },
    { key: 'promo', text: 'Promo treatment melimpah setiap hari' },
    { key: 'points', text: 'Poin spesial buat kamu yang datang treatment' },
    { key: 'more', text: 'Dan masih banyak lagi' },
  ],
  cta: 'Pantau terus & jangan lupa follow IG GGS ya!',
  /** The owner's own homepage screenshot, plus two zoomed men's menu tiles cut from that same screenshot. */
  web: {
    peek: 'Intip web barunya!',
    screen: 'Beranda',
    menuLabel: 'Menu khusus cowok',
    tiles: [
      { key: 'model', label: 'Model Rambut Pria' },
      { key: 'price', label: 'Pricelist Pria' },
    ],
  },
} as const;

export const GGS_MEN_TEASER_SPESIAL_TEXT = `${GGS_MEN_TEASER_SPESIAL.title} ${GGS_MEN_TEASER_SPESIAL.audience}. ${GGS_MEN_TEASER_SPESIAL.benefits.map((item) => item.text).join('. ')}. ${GGS_MEN_TEASER_SPESIAL.web.peek} ${GGS_MEN_TEASER_SPESIAL.web.screen}: ${GGS_MEN_TEASER_SPESIAL.web.tiles.map((tile) => tile.label).join(' dan ')}. ${GGS_MEN_TEASER_SPESIAL.cta}`;
