import { describe, expect, it } from 'vitest';
import { NEMPO_STORY_EXPORT, nempoStoryBajidoran } from './nempo-story-today';

describe('Nempo Story slide', () => {
  it('shows the owner’s copy word for word', () => {
    expect(nempoStoryBajidoran.headline).toBe('Hari Ini!');
    expect(nempoStoryBajidoran.venue).toBe('Good Story Cafe');
    expect(nempoStoryBajidoran.act).toEqual({ left: 'BAJIDORAN', joiner: 'x', right: 'Dj' });
  });
  it('is dated for the Bajidoran & DJ night, Jumat 27 November 2026', () => {
    const { date } = nempoStoryBajidoran;
    expect([date.weekday, date.day, date.month, date.year]).toEqual(['Jumat', '27', 'November', '2026']);
    expect(date.iso).toBe('2026-11-27');
  });
  it('exports as a 9:16 story PNG', () => {
    expect(NEMPO_STORY_EXPORT.width / NEMPO_STORY_EXPORT.height).toBeCloseTo(9 / 16, 6);
    expect(NEMPO_STORY_EXPORT).toEqual({ width: 3240, height: 5760 });
  });
});
