import { describe, expect, it } from 'vitest';
import { GGS_STORY_MASSAGE, GGS_STORY_MASSAGE_SLIDE } from './ggs-story-massage';

describe('GGS Story slide 08 massage reel', () => {
  it('is Story slide 08, right after slide 07', () => {
    expect(GGS_STORY_MASSAGE_SLIDE).toBe(8);
  });

  it('shows only the text "Massage time"', () => {
    expect(GGS_STORY_MASSAGE.title).toBe('Massage time');
  });

  it('films only feet and hands', () => {
    expect([...GGS_STORY_MASSAGE.shots].sort()).toEqual(['kaki', 'tangan']);
  });
});
