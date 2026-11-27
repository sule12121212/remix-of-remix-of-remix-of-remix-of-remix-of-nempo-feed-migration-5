import type React from 'react';

export type StageLight = { x: number; y: number; a: number; tone: 'pink' | 'gold'; d: number };

/** Moving-head spotlights on slide 50's truss frame (positions in cqw of the 3:4 artboard, a = aim in deg, 0 = straight down). */
export const STAGE_SPOTS: StageLight[] = [
  { x: 15.2, y: 6.9, a: -24, tone: 'pink', d: 0 },
  { x: 28.6, y: 6.5, a: -10, tone: 'gold', d: -0.75 },
  { x: 71.2, y: 6.5, a: 10, tone: 'gold', d: -1.5 },
  { x: 83.8, y: 6.9, a: 24, tone: 'pink', d: -2.25 },
  { x: 5.4, y: 24.3, a: -58, tone: 'gold', d: -0.5 },
  { x: 5.6, y: 48.2, a: -70, tone: 'pink', d: -1.25 },
  { x: 5.6, y: 78.6, a: -62, tone: 'gold', d: -2 },
  { x: 94.6, y: 24.3, a: 58, tone: 'gold', d: -2.5 },
  { x: 94.2, y: 48.2, a: 70, tone: 'pink', d: -1.75 },
  { x: 93.8, y: 78.6, a: 62, tone: 'gold', d: -1 },
];

/** LED par cans and spotlight lenses that blink. */
export const STAGE_LAMPS: StageLight[] = [
  ...STAGE_SPOTS,
  { x: 38.2, y: 3.9, a: 0, tone: 'pink', d: -0.25 },
  { x: 54.7, y: 3.9, a: 0, tone: 'pink', d: -0.75 },
  { x: 4.3, y: 36.9, a: 0, tone: 'pink', d: -0.5 },
  { x: 4.3, y: 64.2, a: 0, tone: 'gold', d: 0 },
  { x: 95, y: 36.9, a: 0, tone: 'pink', d: 0 },
  { x: 94.6, y: 64.2, a: 0, tone: 'gold', d: -0.5 },
];

export const stageLightStyle = (l: StageLight) =>
  ({ left: `${l.x}cqw`, top: `${l.y}cqw`, '--nar-a': `${l.a}deg`, animationDelay: `${l.d}s` }) as React.CSSProperties;

/** Story 02 (9:16): spotlights only in the story's outer corners, aimed in onto the poster (cqw; story is 177.8cqw tall). */
export const STORY_POSTER_SPOTS: StageLight[] = [
  { x: 3, y: 2, a: -32, tone: 'gold', d: 0 },
  { x: 97, y: 2, a: 32, tone: 'gold', d: -1.5 },
  { x: 3, y: 175.8, a: -148, tone: 'pink', d: -0.75 },
  { x: 97, y: 175.8, a: 148, tone: 'pink', d: -2.25 },
];
