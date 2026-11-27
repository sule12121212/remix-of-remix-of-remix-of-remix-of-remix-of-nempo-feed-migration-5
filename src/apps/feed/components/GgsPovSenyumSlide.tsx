import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-49-pov-senyum-photo.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_POV_SENYUM, GGS_POV_SENYUM_TEXT } from './ggs-pov-senyum';
import './GgsPovSenyumSlide.css';

/**
 * GGS Feed slide 49: GGS Cowok POV sticker style (tilted white card, POV pill, hand-drawn arrow)
 * in GGS Beauty pink over the owner's therapist photo. `frame={false}` drops the overlay for 2× capture.
 */
export function GgsPovSenyumSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggps-root"
      role="img"
      aria-label={`GGS Beauty — ${GGS_POV_SENYUM_TEXT}. Terapis tersenyum sambil membawa nampan perawatan.`}
    >
      <img className="ggps-photo" src={photoAsset.url} alt="" aria-hidden="true" width={1440} height={1920} />
      <span className="ggps-wash" aria-hidden="true" />

      <section className="ggps-sticker" aria-hidden="true">
        <p className="ggps-pov">{GGS_POV_SENYUM.kicker}</p>
        <h2 className="ggps-title">
          {GGS_POV_SENYUM.line.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p className="ggps-punch">
          {GGS_POV_SENYUM.punch.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <svg className="ggps-heart" viewBox="0 0 100 92" aria-hidden="true">
          <path className="ggps-heart-fill" d="M50 86 C 18 64, 4 46, 6 28 C 8 12, 22 4, 34 6 C 42 7, 47 12, 50 18 C 53 12, 58 7, 66 6 C 78 4, 92 12, 94 28 C 96 46, 82 64, 50 86 Z" />
          <path className="ggps-heart-crack" d="M50 18 L 43 34 L 55 46 L 45 60 L 52 72" />
        </svg>
      </section>

      <svg className="ggps-arrow" viewBox="0 0 110 110" aria-hidden="true">
        <path d="M92 4 C 106 48, 72 90, 14 96" />
        <path d="M30 80 L 12 96 L 32 108" />
      </svg>

      {frame ? <img className="ggps-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
