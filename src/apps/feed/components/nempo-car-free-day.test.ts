import { describe, expect, it } from 'vitest';
import { NCFD_EXPORT, NEMPO_CAR_FREE_DAY_SLIDE, nempoCarFreeDay } from './nempo-car-free-day';

describe('NEMPO Feed slide 57 car free day post', () => {
  it('is NEMPO Feed slide 57', () => {
    expect(NEMPO_CAR_FREE_DAY_SLIDE).toBe(57);
  });
  it('is set on Jl. Ibrahim Adjie, Garut', () => {
    expect(nempoCarFreeDay.tagline).toBe('Jl. Ibrahim Adjie, Garut');
  });
  it('shows the Sunday date on the poster', () => {
    expect(nempoCarFreeDay.release).toBe('Minggu pagi · 29 November 2026');
  });
  it('asks which snack followers hunt for at car free day', () => {
    expect(nempoCarFreeDay.question).toBe('Biasanya car free day kalian nginjer jajanan apa?');
  });
  it('offers four numbered snack answers', () => {
    expect(nempoCarFreeDay.options).toEqual(['Cilok & Cimol', 'Seblak', 'Bubur Ayam', 'Surabi']);
  });
  it('downloads as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NCFD_EXPORT).toEqual({ width: 3240, height: 4320 });
  });
});
