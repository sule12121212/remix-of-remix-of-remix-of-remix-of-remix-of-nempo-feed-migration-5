/**
 * NEMPO Feed slide 58 — the informative follow-up to slide 57: facts about the Sunday-morning Car Free Day on
 * Jl. Letjen Ibrahim Adjie, Garut, gathered from local news and travel write-ups, shown with two real news photos.
 *
 * Sources:
 * - Schedule (every Sunday morning, from ±06.00 WIB, road closed to motor vehicles) and the crowd photo:
 *   https://radargarut.id/2025/10/19/cfd-ibrahim-adjie-ikon-destinasi-wajib-setiap-minggu-pagi-di-garut/
 * - Three-mountain view (Guntur, Cikuray, Papandayan) over green rice fields; wide two-lane road, family-safe:
 *   https://radargarut.id/2026/02/05/surga-minggu-pagi-jalan-letjen-ibrahim-adjie-garut-sajikan-view-dan-makanan-viral/
 * - The road was inaugurated 28 December 2023, and the Gunung Guntur road photo:
 *   https://infogarut.id/posts/jalan-ibrahim-adjie-garut-dari-jalur-baru-jadi-spot-kuliner-favorit
 */
export const NEMPO_CFD_INFO_SLIDE = 58;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NCI_EXPORT = { width: 3240, height: 4320 } as const;

export const nempoCfdInfo = {
  badge: 'Info CFD',
  title: ['Car Free Day', 'Ibrahim Adjie'],
  tagline: 'Jl. Letjen Ibrahim Adjie, Garut',
  release: 'Setiap Minggu pagi · mulai 06.00 WIB',
  photos: [
    { caption: 'Ramai tiap Minggu pagi', credit: 'Foto: Radar Garut' },
    { caption: 'Langsung view Gunung Guntur', credit: 'Foto: Infogarut' },
  ],
  facts: [
    { icon: 'bike', heading: 'Bebas kendaraan', text: 'Jogging, sepedaan, atau jalan santai bareng keluarga.' },
    { icon: 'mountain', heading: 'View 3 gunung', text: 'Guntur, Cikuray & Papandayan sekaligus.' },
    { icon: 'food', heading: 'Pasar tumpah UMKM', text: 'Cilok, seblak, sate, baso, gorengan, sampai kopi.' },
    { icon: 'road', heading: 'Jalan baru yang hits', text: 'Diresmikan 28 Desember 2023, lebar dua jalur.' },
  ],
  cta: 'Minggu pagi ke sini, yuk!',
} as const;
