import type { RefObject } from 'react';
import { formatNailArtPrice, ggsPromoNailArt } from './ggs-promo-nail-art';
import './GgsPromoNailArtSlide.css';

export function GgsPromoNailArtSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggnp-root"
      aria-label={`${ggsPromoNailArt.startLabel} ${ggsPromoNailArt.title} ${formatNailArtPrice(ggsPromoNailArt.price)}`}
    >
      <section className="ggnp-card">
        <h2 className="ggnp-kicker">Promo</h2>
        <p className="ggnp-title">{ggsPromoNailArt.title}</p>
        <div className="ggnp-rule" aria-hidden="true" />
        <p className="ggnp-start">{ggsPromoNailArt.startLabel}</p>
        <p className="ggnp-price">{formatNailArtPrice(ggsPromoNailArt.price)}</p>
      </section>
    </div>
  );
}
