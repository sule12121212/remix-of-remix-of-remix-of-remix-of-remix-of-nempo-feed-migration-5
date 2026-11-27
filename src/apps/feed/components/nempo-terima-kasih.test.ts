import { describe, expect, it } from 'vitest';
import { weekdayId } from './nempo-bajidoran';
import { NEMPO_TERIMA_KASIH_SLIDE, NTE_EXPORT, nempoTerimaKasih } from './nempo-terima-kasih';

describe('NEMPO after-event thank-you slide', () => {
  it('is the slide after "Hari Ini" (53)', () => {
    expect(NEMPO_TERIMA_KASIH_SLIDE).toBe(53);
  });
  it('thanks guests for last night: Jumat, 20 November 2026 at Good Story Cafe', () => {
    const { date, venue } = nempoTerimaKasih;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(weekdayId(date.iso)).toBe('Jumat');
    expect(venue.name).toBe('Good Story Cafe');
  });
  it('downloads as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NTE_EXPORT).toEqual({ width: 3240, height: 4320 });
    expect(NTE_EXPORT.width / NTE_EXPORT.height).toBe(3 / 4);
  });
});
