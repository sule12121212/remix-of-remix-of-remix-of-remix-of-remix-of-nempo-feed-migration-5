import { describe, expect, it } from 'vitest';
import {
  GGS_MODEL_RAMBUT_LOOP_SECONDS,
  GGS_MODEL_RAMBUT_SLIDE,
  GGS_MODEL_RAMBUT_STYLES,
} from './ggs-model-rambut';

describe('GGS Feed hairstyle-choice video', () => {
  it('is the slide after 58', () => {
    expect(GGS_MODEL_RAMBUT_SLIDE).toBe(59);
  });
  it('opens on the original photo, then nine other hairstyles', () => {
    expect(GGS_MODEL_RAMBUT_STYLES[0].original).toBe(true);
    expect(GGS_MODEL_RAMBUT_STYLES.filter((s) => s.original)).toHaveLength(1);
    expect(new Set(GGS_MODEL_RAMBUT_STYLES.map((s) => s.name)).size).toBe(10);
    expect(new Set(GGS_MODEL_RAMBUT_STYLES.map((s) => s.photo)).size).toBe(10);
  });
  it('includes the trending cuts beside Butterfly', () => {
    const names = GGS_MODEL_RAMBUT_STYLES.map((s) => s.name);
    for (const n of ['Butterfly Layer', 'Hush Cut', 'Hime Cut', 'Octopus Cut', 'Korean C-Curl']) expect(names).toContain(n);
  });
  it('keeps the original face on every hairstyle', () => {
    expect(GGS_MODEL_RAMBUT_STYLES.every((s) => s.faceFromOriginal)).toBe(true);
  });
  it('loops in 25 seconds', () => {
    expect(GGS_MODEL_RAMBUT_LOOP_SECONDS).toBe(25);
  });
});
