import type { RefObject } from 'react';
import { formatPijatPrice, ggsPromoPijat } from './ggs-promo-pijat';
import './GgsPromoPijatSlide.css';

export function GgsPromoPijatSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggpp-root" aria-label={`${ggsPromoPijat.title} ${formatPijatPrice(ggsPromoPijat.price)}`}>
      <section className="ggpp-card">
        <h2 className="ggpp-kicker">Promo</h2>
        <p className="ggpp-title">Pijat</p>
        <div className="ggpp-rule" aria-hidden="true" />
        <p className="ggpp-price">{formatPijatPrice(ggsPromoPijat.price)}</p>
      </section>
    </div>
  );
}