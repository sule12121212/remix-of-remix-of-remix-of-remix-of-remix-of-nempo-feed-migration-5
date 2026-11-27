import { describe, expect, it } from 'vitest';
import { GGS_TEASER_SPESIAL } from './ggs-teaser-spesial';
import { GGS_MEN_TEASER_SPESIAL, GGS_MEN_TEASER_SPESIAL_SLIDE, GGS_MEN_TEASER_SPESIAL_TEXT } from './ggs-men-teaser-spesial';

describe('GGS Cowok slide 11 teaser spesial', () => {
  it('is GGS Cowok slide 11', () => {
    expect(GGS_MEN_TEASER_SPESIAL_SLIDE).toBe(11);
  });

  it('keeps the same benefits and follow call as GGS Feed slide 61', () => {
    expect(GGS_MEN_TEASER_SPESIAL.benefits.map((b) => b.text)).toEqual(GGS_TEASER_SPESIAL.benefits.map((b) => b.text));
    expect(GGS_MEN_TEASER_SPESIAL.cta).toBe(GGS_TEASER_SPESIAL.cta);
  });

  it('shows the website homepage and its men-only menu items', () => {
    expect(GGS_MEN_TEASER_SPESIAL.web.screen).toBe('Beranda');
    expect(GGS_MEN_TEASER_SPESIAL.web.tiles.map((t) => t.label)).toEqual(['Model Rambut Pria', 'Pricelist Pria']);
  });

  it('shows no website address because there is none yet', () => {
    expect(GGS_MEN_TEASER_SPESIAL_TEXT).not.toMatch(/https?:|www\.|\.com/);
  });
});
