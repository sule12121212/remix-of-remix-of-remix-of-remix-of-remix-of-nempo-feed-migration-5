import { describe, expect, it } from 'vitest';
import { ggsPromoPijat, formatPijatPrice } from './ggs-promo-pijat';

describe('GGS promo pijat', () => {
  it('charges 85.000 for the massage promotion', () => {
    expect(ggsPromoPijat.price).toBe(85_000);
    expect(formatPijatPrice(ggsPromoPijat.price)).toBe('85.000');
  });
});