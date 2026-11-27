import { describe, expect, it } from 'vitest';
import { GGS_MEN_UNDANGAN } from './ggs-men-undangan';

describe('GGS Cowok invitation promo prices', () => {
  it('offers Perming for 175k', () => {
    expect(GGS_MEN_UNDANGAN.promos.find(p => p.service === 'Perming')?.price).toBe(175000);
  });
  it('offers Colouring for 225k', () => {
    expect(GGS_MEN_UNDANGAN.promos.find(p => p.service === 'Colouring')?.price).toBe(225000);
  });
});