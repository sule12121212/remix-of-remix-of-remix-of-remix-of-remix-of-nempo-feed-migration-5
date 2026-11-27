import { describe, expect, it } from 'vitest';
import { GGS_MALMING, GGS_MALMING_SLIDE, GGS_MALMING_TEXT } from './ggs-malming-garut';

describe('GGS Feed slide 50 himbauan warga Garut malam minggu', () => {
  it('is a himbauan for the people of Garut', () => {
    expect(GGS_MALMING_TEXT).toBe('Himbauan untuk warga Garut');
  });

  it('is about getting ready for malam minggu', () => {
    expect(GGS_MALMING.kicker).toContain('Malam Minggu');
  });

  it('offers a 10–30% discount', () => {
    expect(`${GGS_MALMING.deal.label} ${GGS_MALMING.deal.value}`).toBe('Diskon 10–30%');
  });

  it('shows no rupiah price', () => {
    expect(GGS_MALMING.price).toBeNull();
    expect(JSON.stringify(GGS_MALMING)).not.toMatch(/Rp|\d{2}\.\d{3}/);
  });

  it('is slide 50, right after slide 49', () => {
    expect(GGS_MALMING_SLIDE).toBe(50);
  });
});
