import { useEffect, useState, type RefObject } from 'react';
import catVideo from '@/assets/ggs-story-07-kucing-menari.mp4.asset.json';
import storyOverlay from '@/assets/ggs-story-header-footer.png.asset.json';
import { GGS_STORY_KUCING as K } from './ggs-story-kucing';
import './GgsStoryKucingSlide.css';

/**
 * GGS Story slide 07 (9:16): AI clip of a cat in an Indian dance costume dancing in a pink salon and
 * beckoning the viewer, with a static call-to-action and the Story header/footer on top.
 * The clip plays muted with no sound control: this slide is posted to the feed, where the caption
 * carries the message and a speaker button only clutters the frame.
 * `?ggsk=overlay` renders only the static layers on a transparent background (no video)
 * so the downloadable MP4 can composite exactly these layers over the same clip.
 */
export function GgsStoryKucingSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [overlayOnly, setOverlayOnly] = useState(false);
  useEffect(() => {
    setOverlayOnly(new URLSearchParams(window.location.search).get('ggsk') === 'overlay');
  }, []);

  return (
    <main
      ref={exportRef as RefObject<HTMLElement | null>}
      className={`ggsk-root${overlayOnly ? ' ggsk-root--overlay' : ''}`}
      aria-label={`GGS Beauty — Story slide 07, kucing menari. ${K.kicker}. ${K.title} ${K.line} ${K.cta}.`}
    >
      {overlayOnly ? null : (
        <video
          className="ggsk-video"
          src={catVideo.url}
          autoPlay
          muted
          loop
          playsInline
          width={1080}
          height={1920}
          aria-hidden="true"
        />
      )}
      <span className="ggsk-shade" aria-hidden="true" />

      <section className="ggsk-copy" aria-hidden="true">
        <p className="ggsk-kicker">{K.kicker}</p>
        <h2 className="ggsk-title">{K.title}</h2>
        <p className="ggsk-line">{K.line}</p>
        <p className="ggsk-cta">{K.cta}</p>
      </section>

      <img className="ggsk-overlay" src={storyOverlay.url} alt="" aria-hidden="true" draggable={false} />
    </main>
  );
}
