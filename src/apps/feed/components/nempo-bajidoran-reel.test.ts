import { describe, expect, it } from 'vitest';
import { NEMPO_BAJIDORAN_REEL_SLIDE, nempoBajidoranReel } from './nempo-bajidoran-reel';

describe('NEMPO Bajidoran reel', () => {
  it('is slide 47', () => {
    expect(NEMPO_BAJIDORAN_REEL_SLIDE).toBe(47);
  });
  it('promotes the same event: Jumat, 20 November 2026 at Good Story Cafe', () => {
    const { date, venue } = nempoBajidoranReel;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(venue.name).toBe('Good Story Cafe');
  });
  it('uses the owner’s reservation number', () => {
    expect(nempoBajidoranReel.info.number).toBe('08211612930');
  });
});
