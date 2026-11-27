import { describe, expect, it } from 'vitest';
import { NEMPO_BAJIDORAN_SAWER_SLIDE, nempoBajidoranSawer } from './nempo-bajidoran-sawer';

describe('NEMPO Bajidoran sawer feed slide', () => {
  it('is slide 48', () => {
    expect(NEMPO_BAJIDORAN_SAWER_SLIDE).toBe(48);
  });
  it('never says coming soon', () => {
    expect(JSON.stringify(nempoBajidoranSawer)).not.toMatch(/coming soon/i);
    expect(nempoBajidoranSawer).not.toHaveProperty('marquee');
  });
  it('is about sawer and dancing', () => {
    expect(nempoBajidoranSawer.kicker).toBe('Nu kena sawer, kudu joget!');
  });
  it('keeps the same event as slides 46 and 47', () => {
    const { title, partner, date, venue, info } = nempoBajidoranSawer;
    expect([title, partner]).toEqual(['Bajidoran', 'DJ']);
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(date.iso).toBe('2026-11-20');
    expect(venue.name).toBe('Good Story Cafe');
    expect(info.number).toBe('08211612930');
  });
});
