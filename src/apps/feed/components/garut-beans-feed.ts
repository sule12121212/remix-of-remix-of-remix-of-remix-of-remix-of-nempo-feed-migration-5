/** Garut Beans feed (own tab). Copy and coffee facts are taken from the Garut Beans website data. */
export const GARUT_BEANS_SLIDES = [1] as const;
export type GarutBeansSlide = (typeof GARUT_BEANS_SLIDES)[number];

export const GARUT_BEANS_BRAND = {
  name: 'Garut Beans',
  sub: 'G-BEANS · SPECIALTY COFFEE',
  tagline: 'Kopi spesialti dari lereng gunung Garut',
  /** Footer tagline, one straight line sized to sit flush with the WhatsApp pill's right edge. */
  taglineLines: ['Kopi spesialti dari lereng gunung Garut'],
  region: 'Garut, Jawa Barat',
  instagram: '@garutbeans',
  /** Orders and questions go through NEMPO's WhatsApp. */
  whatsapp: '0857 2498 1356',
} as const;

/** Slide 1: the opening post — the philosophy behind the logo. */
export const GARUT_BEANS_PHILOSOPHY = {
  headline: ['Filosofi', 'Logo'],
  lead: 'Setiap garis di logo kami menyimpan cerita — dari tanah Garut sampai cangkir Anda.',
  meanings: [
    { num: '01', title: 'Huruf "G"', text: 'Garut — rumah kami. Tanah vulkanik subur tempat kopi terbaik tumbuh.' },
    { num: '02', title: 'Biji kopi', text: 'Jantung dari setiap cangkir — dipetik dan disangrai dengan penuh perhatian.' },
    { num: '03', title: 'Daun emas', text: 'Lereng dan kebun yang menumbuhkan — alam yang kami jaga bersama petani.' },
  ],
} as const;

/** Coffee facts from the website, kept for upcoming slides. */
export const GARUT_BEANS_OPENING = {
  kicker: 'Postingan pertama kami',
  headline: ['Panen rasa', 'dari Garut.'],
  lead: 'Temukan kopi spesialti dari lereng pilihan — ikuti ceritanya dari kebun sampai cangkir.',
  closing: 'Dari lereng ke cangkir',
  coffees: [
    { name: 'Darajat Sunset', altitude: '1.200 mdpl', notes: 'karamel · cokelat · rempah' },
    { name: 'Garut House Blend', altitude: '1.300–1.650 mdpl', notes: 'gula aren · cokelat susu · jeruk' },
    { name: 'Cikuray Series', altitude: '1.450 mdpl', notes: 'stroberi · biji kakao · molase' },
  ],
} as const;
