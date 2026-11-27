import { describe, expect, it } from 'vitest';
import { NEMPO_BAJIDORAN_SLIDE, nempoBajidoran, weekdayId } from './nempo-bajidoran';

describe('NEMPO Bajidoran & DJ teaser', () => {
  it('is slide 46', () => {
    expect(NEMPO_BAJIDORAN_SLIDE).toBe(46);
  });
  it('is on Jumat, 20 November 2026', () => {
    const { date } = nempoBajidoran;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(date.iso).toBe('2026-11-20');
  });
  it('the shown weekday matches the calendar', () => {
    expect(weekdayId(nempoBajidoran.date.iso)).toBe(nempoBajidoran.date.weekday);
  });
  it('is at Good Story Cafe', () => {
    expect(nempoBajidoran.venue.name).toBe('Good Story Cafe');
  });
  it('uses the owner’s reservation number', () => {
    expect(nempoBajidoran.info.number).toBe('08211612930');
  });
  it('announces Bajidoran and DJ as coming soon', () => {
    expect(nempoBajidoran.title).toBe('Bajidoran');
    expect(nempoBajidoran.partner).toBe('DJ');
    expect(nempoBajidoran.marquee).toBe('Coming Soon');
  });
});
