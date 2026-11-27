import { useEffect, useState, type RefObject } from 'react';
import massageVideo from '@/assets/ggs-story-08-pijat-tangan-kaki.mp4.asset.json';
import { GGS_STORY_MASSAGE as M } from './ggs-story-massage';
import './GgsStoryMassageSlide.css';

/**
 * GGS Story slide 08 (9:16): AI close-ups of a foot massage then a hand massage in the GGS
 * massage room (hands and feet only, no faces), with "Massage time" centred in a simple font.
 * The clip plays muted like slide 07; the downloaded MP4 keeps its soft spa audio.
 * `?ggsm=overlay` renders only the soft shade and the text on a transparent background (no video) so the
 * downloadable MP4 can composite exactly this layer over the same clip.
 */
export function GgsStoryMassageSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [overlayOnly, setOverlayOnly] = useState(false);
  useEffect(() => {
    setOverlayOnly(new URLSearchParams(window.location.search).get('ggsm') === 'overlay');
  }, []);

  return (
    <main
      ref={exportRef as RefObject<HTMLElement | null>}
      className={`ggsm-root${overlayOnly ? ' ggsm-root--overlay' : ''}`}
      aria-label={`GGS Beauty — Story slide 08, video pijat tangan dan kaki. ${M.title}.`}
    >
      {overlayOnly ? null : (
        <video
          className="ggsm-video"
          src={massageVideo.url}
          autoPlay
          muted
          loop
          playsInline
          width={1080}
          height={1920}
          aria-hidden="true"
        />
      )}
      <span className="ggsm-shade" aria-hidden="true" />
      <h2 className="ggsm-title" aria-hidden="true">{M.title}</h2>
    </main>
  );
}
