import type { RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2-rebuilt.webp.asset.json';
import backdrop from '@/assets/ggs-feed-64-hari-guru-meja.webp.asset.json';
import { GGS_HARI_GURU as C, GGS_HARI_GURU_DATE, GGS_HARI_GURU_OFFERS, GGS_HARI_GURU_TEXT } from './ggs-hari-guru';
import './GgsHariGuruSlide.css';

/** GGS Feed slide 64: Hari Guru greeting + one-day promo (Massage, Creambath) above a blush still life; text and objects never overlap. */
export function GgsHariGuruSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="gghg-root"
      role="img"
      aria-label={`GGS Beauty — ${GGS_HARI_GURU_TEXT}`}
    >
      <img className="gghg-photo" src={backdrop.url} alt="" aria-hidden="true" draggable={false} />
      <div className="gghg-veil" aria-hidden="true" />

      <div className="gghg-head" aria-hidden="true">
        <p className="gghg-date">{GGS_HARI_GURU_DATE}</p>
        <h2 className="gghg-title">
          <em className="gghg-title-top">{C.greetingTop}</em>
          <span className="gghg-title-main">{C.greetingBottom}</span>
        </h2>
        <p className="gghg-thanks">{C.thanks}</p>
      </div>

      <div className="gghg-promo" aria-hidden="true">
        <p className="gghg-promo-label"><span>{C.promoLabel}</span></p>
        <div className="gghg-cards">
          {GGS_HARI_GURU_OFFERS.map((o) => (
            <div key={o.name} className="gghg-card">
              <span className="gghg-card-name">{o.name}</span>
              <span className="gghg-card-price"><small>Rp</small>{o.price}</span>
            </div>
          ))}
        </div>
      </div>

      <img className="gghg-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} />
    </div>
  );
}
