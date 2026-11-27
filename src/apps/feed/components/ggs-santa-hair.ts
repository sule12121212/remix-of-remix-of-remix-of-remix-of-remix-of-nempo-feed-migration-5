import photo54 from '@/assets/ggs-feed-54-santa-rambut-berkilau.jpg.asset.json';
import photo55 from '@/assets/ggs-feed-55-santa-rambut-gelombang.jpg.asset.json';
import photo56 from '@/assets/ggs-feed-56-santa-balayage.jpg.asset.json';
import photo57 from '@/assets/ggs-feed-57-santa-rambut-copper.jpg.asset.json';
import photo58 from '@/assets/ggs-feed-58-santa-rambut-hitam.jpg.asset.json';

import png54 from '@/assets/ggs-feed-54-santa-rambut-berkilau.png.asset.json';
import png55 from '@/assets/ggs-feed-55-santa-gelombang-berkilau.png.asset.json';
import png56 from '@/assets/ggs-feed-56-santa-balayage-glowing.png.asset.json';
import png57 from '@/assets/ggs-feed-57-santa-copper-glossy.png.asset.json';
import png58 from '@/assets/ggs-feed-58-santa-hitam-berkilau.png.asset.json';

export type GgsSantaHairSlideNumber = 54 | 55 | 56 | 57 | 58;

export const GGS_SANTA_HAIR_SLIDES: GgsSantaHairSlideNumber[] = [54, 55, 56, 57, 58];

export type GgsSantaHairData = {
  photo: string;
  /** `cape` = bare text on the dark cape (slide 54); `card-tr` / `card-bl` = cream sticker card top-right under the tagline or bottom-left above the footer, wherever no Santa sits. */
  layout: 'cape' | 'card-tr' | 'card-bl';
  kicker: string;
  script: string;
  big: string;
  sub: string;
  label: string;
  fileName: string;
  /** Prebuilt 3240×4320 PNG download captured from the preview (1080 CSS px × 3, overlay composited via Lanczos 3×). */
  png: string;
  /** Four-point glints on the brightest hair bands (cqw from the slide's top-left, size, delay s). */
  glints: { x: number; y: number; s: number; d: number }[];
};

/** GGS Feed slides 54–56: the owner's hair photos made glossy with miniature Santa stylists (Christmas series). */
export const GGS_SANTA_HAIR: Record<GgsSantaHairSlideNumber, GgsSantaHairData> = {
  54: {
    photo: photo54.url,
    png: png54.url,
    layout: 'cape',
    kicker: 'Christmas Glow',
    script: 'Rambut',
    big: 'Berkilau',
    sub: 'Santa pun ikut terpukau',
    label: 'Rambut lurus panjang yang mengilap dirawat para Santa mini: menyisir, mencatok, menyemprot dan mengeringkan.',
    fileName: 'GGS-Feed-54-Santa-Rambut-Berkilau.png',
    glints: [
      { x: 47, y: 60, s: 5.2, d: 0 },
      { x: 60, y: 69, s: 3.6, d: 0.9 },
      { x: 44, y: 81, s: 4.2, d: 1.6 },
      { x: 58, y: 92, s: 3, d: 2.3 },
      { x: 52, y: 40, s: 3.2, d: 1.2 },
    ],
  },
  55: {
    photo: photo55.url,
    png: png55.url,
    layout: 'card-bl',
    kicker: 'Christmas Glow',
    script: 'Gelombang',
    big: 'Berkilau',
    sub: 'Santa jadi stylist hari ini',
    label: 'Rambut panjang bergelombang merah kecokelatan yang mengilap dirawat para Santa mini dengan catok keriting, sisir, serum dan hair dryer.',
    fileName: 'GGS-Feed-55-Santa-Rambut-Gelombang.png',
    glints: [
      { x: 47, y: 37, s: 4.4, d: 0.3 },
      { x: 55, y: 58, s: 5, d: 1.1 },
      { x: 40, y: 76, s: 3.6, d: 1.9 },
      { x: 62, y: 86, s: 4, d: 0.6 },
      { x: 49, y: 101, s: 3.2, d: 2.4 },
    ],
  },
  56: {
    photo: photo56.url,
    png: png56.url,
    layout: 'card-tr',
    kicker: 'Merry Christmas',
    script: 'Balayage',
    big: 'Glowing',
    sub: 'Hadiah Natal untuk rambutmu',
    label: 'Rambut balayage karamel bergelombang yang berkilau dirawat para Santa mini, di salon dengan latar aslinya.',
    fileName: 'GGS-Feed-56-Santa-Balayage-Glowing.png',
    glints: [
      { x: 46, y: 46, s: 4.6, d: 0.2 },
      { x: 58, y: 63, s: 5, d: 1.3 },
      { x: 41, y: 79, s: 3.6, d: 2 },
      { x: 53, y: 93, s: 4, d: 0.8 },
      { x: 64, y: 50, s: 3, d: 2.6 },
    ],
  },
  57: {
    photo: photo57.url,
    png: png57.url,
    layout: 'card-tr',
    kicker: 'Christmas Glow',
    script: 'Copper',
    big: 'Glossy',
    sub: 'Rapi, lembut, kinclong',
    label: 'Rambut sebahu cokelat tembaga dengan ujung curly yang mengilap dirawat para Santa mini dengan catok, semprotan dan hair dryer.',
    fileName: 'GGS-Feed-57-Santa-Copper-Glossy.png',
    glints: [
      { x: 44, y: 38, s: 4.4, d: 0.4 },
      { x: 53, y: 55, s: 5, d: 1.2 },
      { x: 37, y: 70, s: 3.4, d: 2.1 },
      { x: 58, y: 86, s: 4, d: 0.7 },
    ],
  },
  58: {
    photo: photo58.url,
    png: png58.url,
    layout: 'card-tr',
    kicker: 'Merry Christmas',
    script: 'Hitam',
    big: 'Berkilau',
    sub: 'Kilau alami ala Santa',
    label: 'Rambut hitam panjang dengan ujung blow yang berkilau dirawat para Santa mini dengan catok, semprotan, hair dryer dan masker rambut.',
    fileName: 'GGS-Feed-58-Santa-Hitam-Berkilau.png',
    glints: [
      { x: 46, y: 36, s: 4.4, d: 0.3 },
      { x: 56, y: 52, s: 5, d: 1.1 },
      { x: 40, y: 68, s: 3.6, d: 1.9 },
      { x: 60, y: 82, s: 4, d: 0.8 },
      { x: 50, y: 97, s: 3.2, d: 2.4 },
    ],
  },
};
