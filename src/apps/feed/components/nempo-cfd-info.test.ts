import { describe, expect, it } from 'vitest';
import { NCI_EXPORT, NEMPO_CFD_INFO_SLIDE, nempoCfdInfo } from './nempo-cfd-info';

describe('nempoCfdInfo (slide 58)', () => {
  it('is slide 58 with a 3:4 3× export', () => {
    expect(NEMPO_CFD_INFO_SLIDE).toBe(58);
    expect(NCI_EXPORT).toEqual({ width: 3240, height: 4320 });
  });

  it('keeps the CFD schedule: every Sunday morning from 06.00 WIB', () => {
    expect(nempoCfdInfo.release).toBe('Setiap Minggu pagi · mulai 06.00 WIB');
    expect(nempoCfdInfo.tagline).toBe('Jl. Letjen Ibrahim Adjie, Garut');
  });

  it('lists exactly four facts, each with heading and text', () => {
    expect(nempoCfdInfo.facts).toHaveLength(4);
    for (const fact of nempoCfdInfo.facts) {
      expect(fact.heading.length).toBeGreaterThan(0);
      expect(fact.text.length).toBeGreaterThan(0);
    }
  });

  it('mentions the three mountains and the 2023 road inauguration', () => {
    const all = nempoCfdInfo.facts.map((f) => `${f.heading} ${f.text}`).join(' ');
    expect(all).toContain('Guntur');
    expect(all).toContain('Cikuray');
    expect(all).toContain('Papandayan');
    expect(all).toContain('28 Desember 2023');
  });
});
