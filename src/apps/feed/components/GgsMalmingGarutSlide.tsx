import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-50-himbauan-koran.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_MALMING, GGS_MALMING_TEXT } from './ggs-malming-garut';
import './GgsMalmingGarutSlide.css';

/**
 * GGS Feed slide 50: "Himbauan untuk warga Garut" — a woman peeking over a blank newspaper; the notice is set
 * on the paper in Cormorant Garamond (GGS Cowok's elegant serif), with two small tickets. `frame={false}` drops the overlay for 2× capture.
 */
export function GgsMalmingGarutSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  const m = GGS_MALMING;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmm-root"
      role="img"
      aria-label={`GGS Beauty — ${GGS_MALMING_TEXT}. ${m.body} ${m.deal.label} ${m.deal.value}. ${m.closer}`}
    >
      <img className="ggmm-photo" src={photoAsset.url} alt="" aria-hidden="true" width={1440} height={1920} />

      <section className="ggmm-head" aria-hidden="true">
        <p className="ggmm-kicker">{m.kicker}</p>
        <h2 className="ggmm-title">{m.title}</h2>
      </section>

      {m.tickets.map((t, i) => (
        <p key={t.stub} className={`ggmm-ticket ggmm-ticket--${i === 0 ? 'left' : 'right'}`} aria-hidden="true">
          <span className="ggmm-ticket-text">{t.text}</span>
          <span className="ggmm-ticket-stub">{t.stub}</span>
        </p>
      ))}

      <article className="ggmm-paper" aria-hidden="true">
        <p className="ggmm-mast">
          <b>{m.masthead.name}</b>
          <span>{m.masthead.edition}</span>
        </p>
        <h3 className="ggmm-headline">{m.headline}</h3>
        <p className="ggmm-body">{m.body}</p>
        <p className="ggmm-deal">
          <span>{m.deal.label}</span>
          <b>{m.deal.value}</b>
        </p>
        <p className="ggmm-closer">{m.closer}</p>
      </article>

      {frame ? <img className="ggmm-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
