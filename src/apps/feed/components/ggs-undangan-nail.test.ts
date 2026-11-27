import { describe, expect, it } from 'vitest';
import { GGS_UNDANGAN, GGS_UNDANGAN_PRICE, GGS_UNDANGAN_SLIDE } from './ggs-undangan-nail';

describe('GGS Feed slide 51 undangan persiapan malam minggu', () => {
  it('is an invitation to GGS Beauty', () => {
    expect(GGS_UNDANGAN.title).toBe('Undangan');
  });

  it('has no edition kicker above the title', () => {
    expect('kicker' in GGS_UNDANGAN).toBe(false);
  });

  it('features Nail Art at Rp 35.000', () => {
    expect(GGS_UNDANGAN_PRICE).toBe('Nail Art Rp 35.000');
  });

  it('asks the chat recipient to reply to book', () => {
    expect(GGS_UNDANGAN.cta).toMatch(/balas chat/i);
  });

  it('is slide 51, right after slide 50', () => {
    expect(GGS_UNDANGAN_SLIDE).toBe(51);
  });

  it('greets the reader as Halo Kakak, not Kepada Yth./warga Garut', () => {
    expect(GGS_UNDANGAN.guest).toBe('Halo, Kakak!');
    expect('to' in GGS_UNDANGAN).toBe(false);
  });

  it('also lists Creambath Rp 80.000 and Cuci catok Rp 50.000', () => {
    expect(GGS_UNDANGAN.extras).toEqual([
      { service: 'Creambath', price: '80.000' },
      { service: 'Cuci catok', price: '50.000' },
    ]);
  });
});
