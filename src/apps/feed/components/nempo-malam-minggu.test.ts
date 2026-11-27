import { describe, expect, it } from 'vitest';
import { weekdayId } from './nempo-bajidoran';
import { NEMPO_MALAM_MINGGU_SLIDE, NMM_EXPORT, nempoMalamMinggu } from './nempo-malam-minggu';

describe('NEMPO "Malam Minggu" slide', () => {
  it('is NEMPO Feed slide 54, right after "Hatur Nuhun!" (53)', () => {
    expect(NEMPO_MALAM_MINGGU_SLIDE).toBe(54);
  });
  it('is dated on a Saturday (malam minggu): Sabtu, 21 November 2026', () => {
    const { date } = nempoMalamMinggu;
    expect(weekdayId(date.iso)).toBe('Sabtu');
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Sabtu', '21', 'November', '2026']);
  });
  it('offers four numbered answers to pick in the comments', () => {
    expect(nempoMalamMinggu.options).toHaveLength(4);
  });
  it('downloads as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NMM_EXPORT).toEqual({ width: 3240, height: 4320 });
  });
});
