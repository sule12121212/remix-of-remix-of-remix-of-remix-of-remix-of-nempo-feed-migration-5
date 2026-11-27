import { describe, expect, it } from 'vitest';
import { GGS_STORY_KUCING, GGS_STORY_KUCING_SLIDE } from './ggs-story-kucing';

describe('GGS Story slide 07 dancing cat', () => {
  it('is Story slide 07, right after slide 06', () => {
    expect(GGS_STORY_KUCING_SLIDE).toBe(7);
  });

  it('is a dance that calls customers in', () => {
    expect(GGS_STORY_KUCING.kicker.toLowerCase()).toContain('pemanggil customer');
  });

  it('shows no price', () => {
    expect(JSON.stringify(GGS_STORY_KUCING)).not.toMatch(/Rp|\d{2}\.\d{3}/);
  });
});
