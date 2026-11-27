import type { RefObject } from 'react';
import { GGS_POV_SCRUB, GGS_POV_SCRUB_TEXT } from './ggs-pov-scrub';
import './GgsPovScrubSlide.css';

/**
 * GGS Feed slide 53: slide 49's POV sticker (tilted white card, POV pill, scissors badge, hand-drawn arrow) on a
 * transparent 3:4 canvas — no photo, no header/footer. `checker={false}` hides the preview checkerboard
 * so the PNG capture keeps a transparent background.
 */
export function GgsPovScrubSlide({ exportRef, checker = true }: { exportRef?: RefObject<HTMLElement | null>; checker?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className={`ggpx-root${checker ? ' ggpx-root--checker' : ''}`}
      role="img"
      aria-label={`Stiker GGS — ${GGS_POV_SCRUB_TEXT}. Latar transparan.`}
    >
      <section className="ggpx-sticker" aria-hidden="true">
        <p className="ggpx-pov">{GGS_POV_SCRUB.kicker}</p>
        <h2 className="ggpx-title">
          {GGS_POV_SCRUB.line.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p className="ggpx-punch">
          {GGS_POV_SCRUB.punch.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <svg className="ggpx-scissors" viewBox="0 0 24 24" aria-hidden="true">
          <g className="ggpx-scissors-edge">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
            <path d="M14.8 14.8 20 20" />
          </g>
          <g className="ggpx-scissors-ink">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
            <path d="M14.8 14.8 20 20" />
          </g>
        </svg>
      </section>

      <svg className="ggpx-arrow" viewBox="0 0 110 110" aria-hidden="true">
        <path d="M92 4 C 106 48, 72 90, 14 96" />
        <path d="M30 80 L 12 96 L 32 108" />
      </svg>
    </div>
  );
}
