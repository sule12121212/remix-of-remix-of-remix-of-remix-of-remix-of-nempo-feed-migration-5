import { describe, expect, it } from 'vitest';
import { GGS_POV_SCRUB, GGS_POV_SCRUB_SLIDE, GGS_POV_SCRUB_TEXT } from './ggs-pov-scrub';

describe('GGS Feed slide 53 POV playlist', () => {
  it("reads the owner's POV line", () => {
    expect(GGS_POV_SCRUB_TEXT).toBe('POV: Playlist yang diputar kalau gak ada owner');
  });

  it('shows no price', () => {
    expect(GGS_POV_SCRUB.price).toBeNull();
  });

  it('is slide 53, right after slide 52', () => {
    expect(GGS_POV_SCRUB_SLIDE).toBe(53);
  });
});
