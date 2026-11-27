import { describe, expect, it } from 'vitest';
import { GGS_STORY_PROMOS, GGS_HAPPY_PACKAGE } from './ggs-story-promos';

describe('GGS Story 09 offers', () => {
  it('lists six offers', () => expect(GGS_STORY_PROMOS).toHaveLength(6));
  it('offers massage for 85,000 for 90 minutes', () => {
    expect(GGS_STORY_PROMOS[0].price).toBe(85000);
    expect(GGS_STORY_PROMOS[0].minutes).toBe(90);
  });
  it('offers creambath for 80,000', () => {
    expect(GGS_STORY_PROMOS[1].name).toBe('Creambath');
    expect(GGS_STORY_PROMOS[1].price).toBe(80000);
  });
  it('offers plain natural-nail art for 35,000', () => expect(GGS_STORY_PROMOS[2].price).toBe(35000));
  it('offers plain artificial nails for 80,000', () => expect(GGS_STORY_PROMOS[3].price).toBe(80000));
  it('offers cat eye on regular nails for 80,000', () => expect(GGS_STORY_PROMOS[4].price).toBe(80000));
  it('offers cat eye on artificial nails for 100,000', () => expect(GGS_STORY_PROMOS[5].price).toBe(100000));
  it('prices Happy Package at 250,000', () => expect(GGS_HAPPY_PACKAGE.price).toBe(250000));
  it('includes a 60-minute full-body massage', () => expect(GGS_HAPPY_PACKAGE.massageMinutes).toBe(60));
  it('includes a 30-minute full-body scrub', () => expect(GGS_HAPPY_PACKAGE.scrubMinutes).toBe(30));
  it('finishes with styling for men and flat ironing for women', () => {
    expect(GGS_HAPPY_PACKAGE.menFinish).toBe('Styling');
    expect(GGS_HAPPY_PACKAGE.womenFinish).toBe('Catok');
  });
});
