/** GGS Feed slide 53: transparent POV sticker (card + arrow only, no photo, no header/footer). */
export const GGS_POV_SCRUB_SLIDE = 53 as const;

export const GGS_POV_SCRUB = {
  kicker: 'POV:',
  line: ['Playlist yang', 'diputar kalau'],
  punch: ['gak ada owner'],
  price: null,
} as const;

export const GGS_POV_SCRUB_TEXT = `${GGS_POV_SCRUB.kicker} ${[...GGS_POV_SCRUB.line, ...GGS_POV_SCRUB.punch].join(' ')}`;
