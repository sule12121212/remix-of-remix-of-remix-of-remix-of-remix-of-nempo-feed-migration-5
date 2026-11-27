import type { RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import treatmentPhoto from '@/assets/ggs-feed-62-treatment.jpg.asset.json';
import { GGS_WE_ARE_OPEN_62, GGS_WE_ARE_OPEN_62_TEXT } from './ggs-we-are-open-62';
import './GgsWeAreOpen62Slide.css';

/** GGS Feed slide 62: "We are open" announcement over the owner's treatment photo. */
export function GgsWeAreOpen62Slide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggop-root"
      role="img"
      aria-label={`GGS Beauty — ${GGS_WE_ARE_OPEN_62_TEXT}`}
    >
      <img className="ggop-photo" src={treatmentPhoto.url} alt="" aria-hidden="true" draggable={false} />
      <div className="ggop-veil-top" aria-hidden="true" />
      <div className="ggop-veil-bottom" aria-hidden="true" />

      <header className="ggop-head" aria-hidden="true">
        <h2 className="ggop-title">
          <span className="ggop-title-top">{GGS_WE_ARE_OPEN_62.titleTop}</span>
          <em className="ggop-title-em">{GGS_WE_ARE_OPEN_62.titleEmphasis}</em>
        </h2>
      </header>

      <section className="ggop-invite" aria-hidden="true">
        <h3 className="ggop-invite-title">{GGS_WE_ARE_OPEN_62.inviteTitle}</h3>
        <p className="ggop-invite-body">{GGS_WE_ARE_OPEN_62.inviteBody}</p>
        <span className="ggop-invite-line" aria-hidden="true" />
      </section>

      {frame ? <img className="ggop-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
