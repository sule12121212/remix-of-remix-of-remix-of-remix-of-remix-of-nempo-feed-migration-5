/** GGS Feed slide 51: invitation to GGS Beauty, "edisi persiapan malam minggu", for IG DM / WhatsApp blasts — the star is Nail Art Rp 35.000. */
export const GGS_UNDANGAN_SLIDE = 51 as const;

export const GGS_UNDANGAN = {
  title: 'Undangan',
  guest: 'Halo, Kakak!',
  body: ['Mau dinner, main, atau nongkrong malming ini?', 'Glow up dulu di GGS, biar makin pede.'],
  service: 'Nail Art',
  price: { currency: 'Rp', value: '35.000' },
  extras: [
    { service: 'Creambath', price: '80.000' },
    { service: 'Cuci catok', price: '50.000' },
  ],
  closer: 'Datang polos, pulang geulis.',
  cta: 'Balas chat ini buat booking',
} as const;

export const GGS_UNDANGAN_PRICE = `${GGS_UNDANGAN.service} ${GGS_UNDANGAN.price.currency} ${GGS_UNDANGAN.price.value}`;
