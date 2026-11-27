import { describe, expect, it } from 'vitest';
import { GGS_TEASER_SPESIAL, GGS_TEASER_SPESIAL_SLIDE, GGS_TEASER_SPESIAL_TEXT } from './ggs-teaser-spesial';

describe('GGS Feed slide 61 teaser spesial', () => {
  it('is the new last slide, names 20 November 2026 and drops the word Besok', () => {
    expect(GGS_TEASER_SPESIAL_SLIDE).toBe(61);
    expect(GGS_TEASER_SPESIAL.date).toBe('20 November 2026');
    expect(GGS_TEASER_SPESIAL_TEXT).toContain('20 November 2026');
    expect(GGS_TEASER_SPESIAL_TEXT).not.toContain('Besok');
  });

  it('addresses GGS Hair Studio customers', () => {
    expect(GGS_TEASER_SPESIAL.title).toBe('Something Spesial');
    expect(GGS_TEASER_SPESIAL.audience).toBe('buat customer GGS Hair Studio');
  });

  it('promises easier booking and visible empty schedules', () => {
    expect(GGS_TEASER_SPESIAL.benefits[0].text).toBe('Booking lebih gampang');
    expect(GGS_TEASER_SPESIAL.benefits[1].text).toBe('Bisa lihat jadwal kosong');
  });

  it('promises daily treatment promos', () => {
    expect(GGS_TEASER_SPESIAL.benefits[2].text).toBe('Promo treatment melimpah setiap hari');
  });

  it('promises special points for treatment visits', () => {
    expect(GGS_TEASER_SPESIAL.benefits[3].text).toBe('Poin spesial buat kamu yang datang treatment');
  });

  it('closes the list and asks viewers to keep watching and follow GGS', () => {
    expect(GGS_TEASER_SPESIAL.benefits[4].text).toBe('Dan masih banyak lagi');
    expect(GGS_TEASER_SPESIAL.cta).toBe('Pantau terus & jangan lupa follow IG GGS ya!');
  });

  it('shows a website sneak peek of the homepage and the Nail Art Panggilan page', () => {
    expect(GGS_TEASER_SPESIAL.web.screens.map((screen) => screen.label)).toEqual(['Beranda', 'Nail Art Panggilan']);
  });

  it('mentions no website address because GGS has none yet', () => {
    expect(GGS_TEASER_SPESIAL_TEXT).not.toMatch(/https?:|www\.|\.com/);
  });
});
