import type { RefObject } from 'react';
import { GGS_PROMO_AKHIR_TAHUN, GGS_PROMO_AKHIR_TAHUN_TEXT } from './ggs-promo-akhir-tahun';
import './GgsPromoAkhirTahunSlide.css';

/**
 * GGS Feed slide 60: year-end split-end hair treatment promo sticker in slide 53's style (tilted white card,
 * promo pill, scissors badge, hand-drawn arrow) on a transparent 3:4 canvas — no photo, no header/footer.
 * `checker={false}` hides the preview checkerboard so the PNG capture keeps a transparent background.
 */
export function GgsPromoAkhirTahunSlide({ exportRef, checker = true }: { exportRef?: RefObject<HTMLElement | null>; checker?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className={`ggpa-root${checker ? ' ggpa-root--checker' : ''}`}
      role="img"
      aria-label={`Stiker GGS — ${GGS_PROMO_AKHIR_TAHUN_TEXT}. Latar transparan.`}
    >
      <section className="ggpa-sticker" aria-hidden="true">
        <p className="ggpa-pill">{GGS_PROMO_AKHIR_TAHUN.kicker}</p>
        <h2 className="ggpa-title">
          {GGS_PROMO_AKHIR_TAHUN.line.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p className="ggpa-punch">
          {GGS_PROMO_AKHIR_TAHUN.punch.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <p className="ggpa-offer">{GGS_PROMO_AKHIR_TAHUN.offer}</p>
        <p className="ggpa-note">{GGS_PROMO_AKHIR_TAHUN.note}</p>

        <p className="ggpa-period">{GGS_PROMO_AKHIR_TAHUN.period}</p>

        <svg className="ggpa-scissors" viewBox="0 0 24 24" aria-hidden="true">
          <g className="ggpa-scissors-edge">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
            <path d="M14.8 14.8 20 20" />
          </g>
          <g className="ggpa-scissors-ink">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
            <path d="M14.8 14.8 20 20" />
          </g>
        </svg>
      </section>

      <svg className="ggpa-arrow" viewBox="0 0 110 110" aria-hidden="true">
        <path d="M92 4 C 106 48, 72 90, 14 96" />
        <path d="M30 80 L 12 96 L 32 108" />
      </svg>
    </div>
  );
}
