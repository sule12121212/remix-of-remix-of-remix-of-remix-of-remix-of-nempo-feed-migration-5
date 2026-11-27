import { describe, expect, it } from 'vitest';
import { GGS_PROMO_AKHIR_TAHUN, GGS_PROMO_AKHIR_TAHUN_SLIDE, GGS_PROMO_AKHIR_TAHUN_TEXT } from './ggs-promo-akhir-tahun';

describe('GGS Feed slide 60 promo akhir tahun', () => {
  it('runs 18 November to 31 Desember 2026', () => {
    expect(GGS_PROMO_AKHIR_TAHUN.period).toBe('18 November – 31 Desember 2026');
  });

  it('is a split-end hair treatment promo, not nail art', () => {
    expect(GGS_PROMO_AKHIR_TAHUN.line).toEqual(['Treatment', 'Rambut Bercabang']);
    expect(GGS_PROMO_AKHIR_TAHUN_TEXT).not.toMatch(/kuku|nail/i);
  });

  it('shouts the hempas rambut bercabang hook', () => {
    expect(GGS_PROMO_AKHIR_TAHUN.punch.join(' ')).toBe('Hempas Rambut Bercabang');
  });

  it('shows the discount as text, with no prices', () => {
    expect(GGS_PROMO_AKHIR_TAHUN.offer).toBe('Promo 10–30%');
    expect(GGS_PROMO_AKHIR_TAHUN.note).toBe('S&K berlaku');
    expect(GGS_PROMO_AKHIR_TAHUN_TEXT).not.toMatch(/Rp|\d{3}\.\d{3}/);
  });

  it('uses GGS feed slide 60', () => {
    expect(GGS_PROMO_AKHIR_TAHUN_SLIDE).toBe(60);
  });

  it('reads the full promo aloud', () => {
    expect(GGS_PROMO_AKHIR_TAHUN_TEXT).toBe(
      'PROMO Treatment Rambut Bercabang Hempas Rambut Bercabang. Promo 10–30%. S&K berlaku. Berlaku 18 November – 31 Desember 2026.',
    );
  });
});
