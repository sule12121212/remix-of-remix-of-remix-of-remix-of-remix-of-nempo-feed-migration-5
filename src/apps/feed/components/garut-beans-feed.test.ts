import { describe, expect, it } from 'vitest';
import { GARUT_BEANS_BRAND, GARUT_BEANS_OPENING, GARUT_BEANS_PHILOSOPHY, GARUT_BEANS_SLIDES } from './garut-beans-feed';

describe('Garut Beans feed', () => {
  it('starts with the opening post as slide 1', () => {
    expect(GARUT_BEANS_SLIDES[0]).toBe(1);
  });

  it('uses the website tagline', () => {
    expect(GARUT_BEANS_BRAND.tagline).toBe('Kopi spesialti dari lereng gunung Garut');
  });

  it('keeps the footer tagline as one straight line', () => {
    expect(GARUT_BEANS_BRAND.taglineLines.join(' ')).toBe(GARUT_BEANS_BRAND.tagline);
    expect(GARUT_BEANS_BRAND.taglineLines).toEqual(['Kopi spesialti dari lereng gunung Garut']);
  });

  it('shows the website altitudes for the three coffees', () => {
    expect(GARUT_BEANS_OPENING.coffees.map((c) => `${c.name} ${c.altitude}`)).toEqual([
      'Darajat Sunset 1.200 mdpl',
      'Garut House Blend 1.300–1.650 mdpl',
      'Cikuray Series 1.450 mdpl',
    ]);
  });

  it('explains the three logo meanings in order', () => {
    expect(GARUT_BEANS_PHILOSOPHY.meanings.map((m) => m.title)).toEqual([
      'Huruf "G"',
      'Biji kopi',
      'Daun emas',
    ]);
  });

  it('titles slide 1 "Filosofi Logo"', () => {
    expect(GARUT_BEANS_PHILOSOPHY.headline.join(' ')).toBe('Filosofi Logo');
  });

  it('shows Instagram @garutbeans and the NEMPO WhatsApp in the footer', () => {
    expect(GARUT_BEANS_BRAND.instagram).toBe('@garutbeans');
    expect(GARUT_BEANS_BRAND.whatsapp).toBe('0857 2498 1356');
  });
});
