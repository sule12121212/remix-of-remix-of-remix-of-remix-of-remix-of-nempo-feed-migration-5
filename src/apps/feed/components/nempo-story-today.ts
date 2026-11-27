/** NEMPO Story — the story slide's copy (owner's wording, kept word for word). */
export const nempoStoryBajidoran = {
  headline: 'Hari Ini!',
  venue: 'Good Story Cafe',
  act: { left: 'BAJIDORAN', joiner: 'x', right: 'Dj' },
  /** The story is dated for the night itself, in Indonesian weekday style. */
  date: { weekday: 'Jumat', day: '27', month: 'November', year: '2026', iso: '2026-11-27' },
} as const;

/** Prebuilt PNGs are captured from the preview at 1080 CSS px × 3. */
export const NEMPO_STORY_EXPORT = { width: 3240, height: 5760 } as const;
