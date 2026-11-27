import type { RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_SANTA_HAIR, type GgsSantaHairSlideNumber } from './ggs-santa-hair';
import './GgsSantaHairSlide.css';

/**
 * GGS Feed slides 54–56 (Christmas series): the owner's hair photos made mirror-glossy with miniature
 * Santa stylists. Slide 54 sets its headline on the dark cape; 55–56 use a cream sticker card top-right.
 * `frame={false}` drops the overlay for the 3× capture.
 */
export function GgsSantaHairSlide({
  slide,
  exportRef,
  frame = true,
}: {
  slide: GgsSantaHairSlideNumber;
  exportRef?: RefObject<HTMLElement | null>;
  frame?: boolean;
}) {
  const d = GGS_SANTA_HAIR[slide];
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className={`ggsn-root ggsn--${d.layout}`}
      role="img"
      aria-label={`GGS Beauty — ${d.script} ${d.big}. ${d.sub}. ${d.label}`}
    >
      <img className="ggsn-photo" src={d.photo} alt="" aria-hidden="true" width={1440} height={1920} />
      <div className="ggsn-shade" aria-hidden="true" />

      {d.glints.map((g, i) => (
        <span
          key={i}
          className="ggsn-glint"
          aria-hidden="true"
          style={{ left: `${g.x}cqw`, top: `${g.y}cqw`, width: `${g.s}cqw`, height: `${g.s}cqw`, animationDelay: `${g.d}s` }}
        />
      ))}

      <section className="ggsn-head" aria-hidden="true">
        <span className="ggsn-kicker">{d.kicker}</span>
        <h2 className="ggsn-title">
          <span className="ggsn-script">{d.script}</span>
          <span className="ggsn-big">{d.big}</span>
        </h2>
        <span className="ggsn-sub">{d.sub}</span>
      </section>

      {frame ? <img className="ggsn-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
