import { describe, expect, it } from 'vitest';
import { NEMPO_AJAK_REQUEST_SLIDE, nempoAjakRequest } from './nempo-ajak-request';

describe('NEMPO ajak & request lagu slide', () => {
  it('is slide 51', () => {
    expect(NEMPO_AJAK_REQUEST_SLIDE).toBe(51);
  });
  it('asks whom followers will bring, answered in the comments', () => {
    expect(nempoAjakRequest.invite.question).toBe('Mau ajak siapa?');
    expect(nempoAjakRequest.invite.cta).toBe('Tulis di kolom komentar');
  });
  it('lists the five request songs in the owner’s order', () => {
    expect(nempoAjakRequest.request.songs).toEqual(['Helikopter', 'Negoro Angin', 'Hatimu Aduh', 'Singkong dan Keju', 'Kopi Susu']);
  });
  it('is for the same Bajidoran & DJ night: Jumat, 20 November 2026 at Good Story Cafe', () => {
    const { date, venue } = nempoAjakRequest;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '20', 'November', '2026']);
    expect(venue.name).toBe('Good Story Cafe');
  });
});
