import { describe, expect, it } from 'vitest';
import {
  NEMPO_KOLABORASI_CARA_SLIDE, NEMPO_KOLABORASI_SLIDE, NKO_EXPORT, nempoKolaborasi, nempoKolaborasiPoster,
} from './nempo-kolaborasi';

describe('NEMPO collaboration call for cafes & tourist spots', () => {
  it('is NEMPO Feed slide 55, continued on slide 56', () => {
    expect(NEMPO_KOLABORASI_SLIDE).toBe(55);
    expect(NEMPO_KOLABORASI_CARA_SLIDE).toBe(56);
  });
  it('calls both cafes and tourist spots', () => {
    expect(nempoKolaborasi.call.venues.map((v) => v.label)).toEqual(['Cafe & Resto', 'Tempat Wisata']);
  });
  it('uses the NEMPO admin WhatsApp 0857 2498 1356', () => {
    expect(nempoKolaborasi.whatsapp.number).toBe('0857 2498 1356');
    expect(nempoKolaborasi.whatsapp.href).toBe('https://wa.me/6285724981356');
  });
  it('downloads each slide as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NKO_EXPORT).toEqual({ width: 3240, height: 4320 });
  });
});

describe('NEMPO Feed slide 56 movie poster layout', () => {
  it('keeps the "kamu siapin tempat" promise as the poster headline', () => {
    expect(nempoKolaborasiPoster.title).toEqual(['Kamu Siapin', 'Tempat,']);
    expect(nempoKolaborasiPoster.tagline).toBe('Kami Urus Acaranya!');
  });
  it('lists exactly the four things NEMPO handles as the billing block', () => {
    expect(nempoKolaborasiPoster.credits).toEqual(nempoKolaborasi.cara.benefits.map((b) => b.label));
    expect(nempoKolaborasiPoster.credits).toEqual([
      'Konsep & rundown',
      'Talent & pengisi acara',
      'Promosi di sosmed NEMPO',
      'Dokumentasi foto & video',
    ]);
  });
  it('keeps the three collaboration steps in order', () => {
    expect(nempoKolaborasiPoster.steps).toEqual(['Chat admin NEMPO', 'Atur konsep & jadwal', 'Event jalan!']);
    expect(nempoKolaborasiPoster.stepsLabel).toBe('Cara kolaborasi');
  });
  it('puts the admin WhatsApp number on the poster CTA', () => {
    expect(nempoKolaborasiPoster.cta).toBe('Chat Admin · WA 0857 2498 1356');
  });
});
