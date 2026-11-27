import { describe, expect, it } from 'vitest';
import { NEMPO_HARI_GURU_DATE, NEMPO_HARI_GURU_SLIDE, NHG_EXPORT, nempoHariGuru } from './nempo-hari-guru';

describe('NEMPO Feed slide 64 — poster Hari Guru', () => {
  it('is NEMPO Feed slide 64, right after slide 63', () => {
    expect(NEMPO_HARI_GURU_SLIDE).toBe(64);
  });
  it('is dated Hari Guru Nasional: Rabu, 25 November 2026', () => {
    expect(NEMPO_HARI_GURU_DATE).toBe('Rabu, 25 November 2026');
  });
  it('is a greeting only — no price or promo in the copy', () => {
    expect(JSON.stringify(nempoHariGuru)).not.toMatch(/promo|Rp|diskon|\d{2,3}\.\d{3}/i);
  });
  it('downloads as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NHG_EXPORT).toEqual({ width: 3240, height: 4320 });
  });
});
