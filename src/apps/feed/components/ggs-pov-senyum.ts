/** GGS Feed slide 49: "POV: tetap tersenyum di depan customer, walau hati lagi tidak baik-baik aja" on the owner's therapist photo (no price). */
export const GGS_POV_SENYUM_SLIDE = 49 as const;

export const GGS_POV_SENYUM = {
  kicker: 'POV:',
  line: ['Tetap tersenyum', 'di depan customer,'],
  punch: ['walau hati lagi', 'tidak baik-baik aja'],
  price: null,
} as const;

export const GGS_POV_SENYUM_TEXT = `${GGS_POV_SENYUM.kicker} ${[...GGS_POV_SENYUM.line, ...GGS_POV_SENYUM.punch].join(' ')}`;
