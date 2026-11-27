import { describe, expect, it } from 'vitest';
import {
  GGS_UJUNG_RAMBUT_KAKI,
  GGS_UJUNG_RAMBUT_KAKI_PERIOD,
  GGS_UJUNG_RAMBUT_KAKI_PRICE,
  GGS_UJUNG_RAMBUT_KAKI_TEXT,
  isPromoBerlaku,
} from './ggs-ujung-rambut-kaki';

describe('GGS Feed slide 63 — perawatan ujung rambut sampai ujung kaki', () => {
  it('is slide 63, right after slide 62', () => {
    expect(GGS_UJUNG_RAMBUT_KAKI.slide).toBe(63);
  });

  it('costs Rp 250.000 for the whole package', () => {
    expect(GGS_UJUNG_RAMBUT_KAKI.price).toBe(250000);
    expect(GGS_UJUNG_RAMBUT_KAKI_PRICE).toBe('250.000');
  });

  it('includes a 60-minute full body massage', () => {
    expect(GGS_UJUNG_RAMBUT_KAKI.services[0]).toEqual({ name: 'Massage full body', detail: '60 menit' });
  });

  it('includes a 30-minute full body lulur', () => {
    expect(GGS_UJUNG_RAMBUT_KAKI.services[1]).toEqual({ name: 'Lulur full body', detail: '30 menit' });
  });

  it('includes creambath & catok, and nothing else', () => {
    expect(GGS_UJUNG_RAMBUT_KAKI.services[2]?.name).toBe('Creambath & catok');
    expect(GGS_UJUNG_RAMBUT_KAKI.services).toHaveLength(3);
  });

  it('runs from 24 November to 5 December 2026', () => {
    expect(GGS_UJUNG_RAMBUT_KAKI_PERIOD).toBe('24 November – 5 Desember 2026');
  });

  it('is valid on the first and last day but not outside them', () => {
    expect(isPromoBerlaku('2026-11-23')).toBe(false);
    expect(isPromoBerlaku('2026-11-24')).toBe(true);
    expect(isPromoBerlaku('2026-12-05')).toBe(true);
    expect(isPromoBerlaku('2026-12-06')).toBe(false);
  });

  it('reads price, services and dates aloud', () => {
    for (const part of ['Rp 250.000', 'Massage full body 60 menit', 'Lulur full body 30 menit', 'Creambath & catok', '24 November – 5 Desember 2026']) {
      expect(GGS_UJUNG_RAMBUT_KAKI_TEXT).toContain(part);
    }
  });
});
