import { describe, expect, it } from 'vitest';
import { GGS_WE_ARE_OPEN_62, GGS_WE_ARE_OPEN_62_TEXT } from './ggs-we-are-open-62';

describe('GGS Feed slide 62 — We are open', () => {
  it('is slide 62, right after the teaser slide 61', () => {
    expect(GGS_WE_ARE_OPEN_62.slide).toBe(62);
  });

  it('announces the studio is open', () => {
    expect(`${GGS_WE_ARE_OPEN_62.titleTop} ${GGS_WE_ARE_OPEN_62.titleEmphasis}`).toBe('We are open.');
  });

  it('names GGS Beauty in the invitation', () => {
    expect(GGS_WE_ARE_OPEN_62.inviteTitle).toContain('GGS Beauty');
  });

  it('invites customers to a me-time treatment', () => {
    expect(GGS_WE_ARE_OPEN_62.inviteTitle).toBe('Yuk, perawatan di GGS Beauty!');
    expect(GGS_WE_ARE_OPEN_62.inviteBody).toContain('me-time');
  });

  it('shows no prices', () => {
    expect(GGS_WE_ARE_OPEN_62_TEXT).not.toMatch(/\d{2,3}[.]\d{3}/);
    expect(GGS_WE_ARE_OPEN_62_TEXT).not.toMatch(/Rp/i);
  });

  it('reads the whole slide aloud in the aria label', () => {
    for (const part of ['We are open.', GGS_WE_ARE_OPEN_62.inviteTitle, GGS_WE_ARE_OPEN_62.inviteBody]) {
      expect(GGS_WE_ARE_OPEN_62_TEXT).toContain(part);
    }
  });
});
