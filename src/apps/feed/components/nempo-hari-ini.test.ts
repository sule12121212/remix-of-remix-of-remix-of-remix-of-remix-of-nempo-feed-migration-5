import { describe, expect, it } from 'vitest';
import { weekdayId } from './nempo-bajidoran';
import { NEMPO_HARI_INI_SLIDE, nempoHariIni } from './nempo-hari-ini';

describe('NEMPO "Hari Ini" slide', () => {
  it('is slide 52', () => {
    expect(NEMPO_HARI_INI_SLIDE).toBe(52);
  });
  it('starts at 18.00 and runs until it is over (selesai)', () => {
    expect(nempoHariIni.time.start).toBe('18.00');
    expect(nempoHariIni.time.end).toBe('Selesai');
  });
  it('is for today’s Bajidoran & DJ night: Jumat, 20 November 2026 at Good Story Cafe', () => {
    const { date, venue } = nempoHariIni;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(weekdayId(date.iso)).toBe('Jumat');
    expect(venue.name).toBe('Good Story Cafe');
  });
  it('names Saduli Ragap and DJ Dityar as performers', () => {
    expect(nempoHariIni.talent).toEqual({ dancers: 'Saduli Ragap', dj: 'DJ Dityar' });
  });
});
