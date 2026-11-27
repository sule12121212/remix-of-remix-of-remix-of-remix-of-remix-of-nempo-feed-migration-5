/**
 * NEMPO Feed slide 54 — Saturday-night engagement post in the basic NEMPO blue look (slide 45):
 * "Malam Minggu, kamu ke mana?" with numbered answers followers pick in the comments.
 */
export const NEMPO_MALAM_MINGGU_SLIDE = 54;

/** Prebuilt PNG, captured from the preview at 1080 CSS px × 3. */
export const NMM_EXPORT = { width: 3240, height: 4320 } as const;

export type MalamMingguIcon = 'coffee' | 'heart' | 'music' | 'bed';

export const nempoMalamMinggu = {
  kicker: 'Sabtu malam',
  headline: { lead: 'Malam Minggu,', accent: 'kamu ke mana?' },
  subtitle: 'Pilih satu jawaban, terus tulis nomornya di kolom komentar ya!',
  pickLabel: 'Pilih satu',
  options: [
    { label: 'Nongkrong bareng temen', icon: 'coffee' },
    { label: 'Jalan sama ayang', icon: 'heart' },
    { label: 'Nonton live musik', icon: 'music' },
    { label: 'Rebahan di rumah aja', icon: 'bed' },
  ] as ReadonlyArray<{ label: string; icon: MalamMingguIcon }>,
  cta: { title: 'Tulis nomornya di komentar', note: 'Tag temen malam mingguanmu!' },
  date: { weekday: 'Sabtu', day: '21', month: 'November', year: '2026', iso: '2026-11-21' },
} as const;
