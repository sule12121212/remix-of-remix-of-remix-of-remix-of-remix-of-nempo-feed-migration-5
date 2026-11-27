import { describe, expect, it } from 'vitest';
import { NEMPO_MOMEN_DIGITAL_SLIDES, NMD_EXPORT, nempoMomenDigital as M } from './nempo-momen-digital';

describe('nempoMomenDigital (slides 59–62)', () => {
  it('is the four-slide series 59–62 with 3:4 3× exports', () => {
    expect(NEMPO_MOMEN_DIGITAL_SLIDES).toEqual([59, 60, 61, 62]);
    expect(NMD_EXPORT).toEqual({ width: 3240, height: 4320 });
  });

  it('lists the seven Momen Digital forms from the Year Book page', () => {
    expect(M.cover.kinds).toEqual(['Year Book', 'Kelas', 'Geng & Grup', 'Organisasi', 'Event', 'Komunitas', 'Ucapan Spesial']);
  });

  it('lists the six Year Book contents', () => {
    expect(M.peek.contents).toHaveLength(6);
    expect(M.peek.contents).toContain('Dinding pesan');
  });

  it('orders in four steps with digital and print formats', () => {
    expect(M.order.steps.map((s) => s.name)).toEqual(['Konsultasi', 'Kumpulkan isi', 'Desain & tinjau', 'Cetak & bagikan']);
    expect(M.order.formats.map((f) => f.name)).toEqual(['Digital', 'Cetak']);
  });

  it('sends orders to the NEMPO WhatsApp admin', () => {
    expect(M.cta).toBe('Chat Admin · WA 0857 2498 1356');
  });

  it('previews the sample 2026 Year Book', () => {
    expect(M.web.url).toBe('nempo.id/year-book/2026');
    expect(M.web.title).toBe('Sejuta Cerita');
    expect(M.web.students).toHaveLength(4);
  });
});
