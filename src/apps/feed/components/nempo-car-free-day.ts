/**
 * NEMPO Feed slide 57 — Sunday-morning Car Free Day engagement post at Jl. Ibrahim Adjie, Garut, in the same
 * bright playful poster look as slide 56: AI-lettered title, sticker tagline, tilted date line, then a white
 * card asking which snack followers hunt for, with numbered answers to write in the comments.
 */
export const NEMPO_CAR_FREE_DAY_SLIDE = 57;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NCFD_EXPORT = { width: 3240, height: 4320 } as const;

export const nempoCarFreeDay = {
  badge: 'Car Free Day',
  title: ['Car Free Day,', 'Jajan Apa?'],
  tagline: 'Jl. Ibrahim Adjie, Garut',
  release: 'Minggu pagi · 29 November 2026',
  question: 'Biasanya car free day kalian nginjer jajanan apa?',
  options: ['Cilok & Cimol', 'Seblak', 'Bubur Ayam', 'Surabi'],
  cta: 'Tulis nomornya di komentar ya!',
} as const;
