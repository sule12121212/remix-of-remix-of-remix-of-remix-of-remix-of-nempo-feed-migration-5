import { describe, expect, it } from 'vitest';
import { GGS_POV_SENYUM, GGS_POV_SENYUM_SLIDE, GGS_POV_SENYUM_TEXT } from './ggs-pov-senyum';

describe('GGS Feed slide 49 POV tetap tersenyum', () => {
  it('reads the owner\'s POV line', () => {
    expect(GGS_POV_SENYUM_TEXT).toBe('POV: Tetap tersenyum di depan customer, walau hati lagi tidak baik-baik aja');
  });

  it('shows no price', () => {
    expect(GGS_POV_SENYUM.price).toBeNull();
  });

  it('is slide 49, right after the last slide 48', () => {
    expect(GGS_POV_SENYUM_SLIDE).toBe(49);
  });
});
