import { describe, expect, it } from 'vitest';
import { weekdayId } from './nempo-bajidoran';
import { NEMPO_SADULI_DJ_SLIDE, nempoSaduliDj } from './nempo-saduli-dj';

describe('NEMPO Saduli × DJ poster', () => {
  it('is slide 50', () => {
    expect(NEMPO_SADULI_DJ_SLIDE).toBe(50);
  });
  it('features the Saduli Ragap dancers and DJ Dityar', () => {
    expect(nempoSaduliDj.talent).toEqual({ dancers: 'Saduli Ragap', dj: 'DJ Dityar' });
  });
  it('promotes the same Bajidoran & DJ night: Jumat, 20 November 2026 at Good Story Cafe', () => {
    const { title, partner, date, venue, info } = nempoSaduliDj;
    expect([title, partner]).toEqual(['Bajidoran', 'DJ']);
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(weekdayId(date.iso)).toBe(date.weekday);
    expect(venue.name).toBe('Good Story Cafe');
    expect(venue.address).toBe('Jl. Sudirman Copong No. 11');
    expect(info.number).toBe('08211612930');
  });
});
