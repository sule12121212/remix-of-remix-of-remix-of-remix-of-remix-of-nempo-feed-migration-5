import { describe, expect, it } from 'vitest';
import { ggsPromoNailArt, formatNailArtPrice } from './ggs-promo-nail-art';

describe('GGS promo nail art', () => {
  it('starts the nail art promotion at 35.000', () => {
    expect(ggsPromoNailArt.price).toBe(35_000);
    expect(formatNailArtPrice(ggsPromoNailArt.price)).toBe('35.000');
    expect(ggsPromoNailArt.startLabel).toBe('start');
  });
});
