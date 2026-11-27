import { describe, expect, it } from 'vitest';
import { GGS_HARI_GURU, GGS_HARI_GURU_DATE, GGS_HARI_GURU_OFFERS, isPromoHariGuruBerlaku } from './ggs-hari-guru';

describe('GGS Feed slide 64 — promo Hari Guru', () => {
  it('is slide 64, right after slide 63', () => {
    expect(GGS_HARI_GURU.slide).toBe(64);
  });
  it('offers Massage for Rp 85.000', () => {
    expect(GGS_HARI_GURU_OFFERS[0]).toEqual({ name: 'Massage', price: '85.000' });
  });
  it('offers Creambath for Rp 80.000', () => {
    expect(GGS_HARI_GURU_OFFERS[1]).toEqual({ name: 'Creambath', price: '80.000' });
  });
  it('has only those two offers', () => {
    expect(GGS_HARI_GURU_OFFERS).toHaveLength(2);
  });
  it('is on Hari Guru, Rabu 25 November 2026', () => {
    expect(GGS_HARI_GURU_DATE).toBe('Rabu, 25 November 2026');
  });
  it('is valid on 25 November 2026 only', () => {
    expect(isPromoHariGuruBerlaku('2026-11-25')).toBe(true);
    expect(isPromoHariGuruBerlaku('2026-11-24')).toBe(false);
    expect(isPromoHariGuruBerlaku('2026-11-26')).toBe(false);
  });
});
