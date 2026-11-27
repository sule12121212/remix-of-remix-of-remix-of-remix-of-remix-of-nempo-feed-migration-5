import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-52-open-nail-hands.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsNailOpenSlide.css';

/**
 * GGS Feed slide 52: "We are open" over the owner's nail-art hands on the GGS Studio coaster
 * (skin retouched fair and clean, nails/ring/coaster kept). Title sits on the dark top-right corner,
 * the daily hours on the black nail lamp above the footer. `frame={false}` drops the overlay for 2× capture.
 */
export function GgsNailOpenSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggno-root"
      role="img"
      aria-label="GGS Beauty — We are open, setiap hari jam 09.00 sampai 21.00. Nail art, walk-in dan booking welcome."
    >
      <img className="ggno-photo" src={photoAsset.url} alt="" aria-hidden="true" width={1440} height={1920} />
      <div className="ggno-shade" aria-hidden="true" />

      <section className="ggno-head" aria-hidden="true">
        <h2 className="ggno-title">
          <span className="ggno-script">We are</span>
          <span className="ggno-open">Open</span>
        </h2>
      </section>

      <section className="ggno-hours" aria-hidden="true">
        <span className="ggno-days">Setiap hari</span>
        <span className="ggno-time">
          09.00<em>&ndash;</em>21.00
        </span>
        <span className="ggno-note">Walk-in &amp; booking welcome</span>
      </section>

      {frame ? <img className="ggno-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
