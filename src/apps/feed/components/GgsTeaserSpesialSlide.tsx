import type { RefObject } from 'react';
import { BadgePercent, CalendarCheck, CalendarDays, Gift, Instagram, Scissors } from 'lucide-react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import webHome from '@/assets/ggs-feed-61-web-beranda.webp.asset.json';
import webNail from '@/assets/ggs-feed-61-web-nail-art-panggilan.webp.asset.json';
import { GGS_TEASER_SPESIAL, GGS_TEASER_SPESIAL_TEXT } from './ggs-teaser-spesial';
import './GgsTeaserSpesialSlide.css';

/** No crown icons here: the header overlay's logo already carries the GGS crown. */
const BENEFIT_ICONS = [CalendarCheck, CalendarDays, BadgePercent, Gift, Scissors] as const;
const SCREEN_SRC = { home: webHome.url, nail: webNail.url } as const;

/** GGS Feed slide 61: "Something Spesial" teaser with the owner's own screenshots of the GGS website. */
export function GgsTeaserSpesialSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggts-root"
      role="img"
      aria-label={`GGS Hair Studio — ${GGS_TEASER_SPESIAL_TEXT}`}
    >
      <span className="ggts-orbit ggts-orbit--one" aria-hidden="true" />
      <span className="ggts-orbit ggts-orbit--two" aria-hidden="true" />

      <header className="ggts-head" aria-hidden="true">
        <h2 className="ggts-title">
          <span className="ggts-something">Something</span>
          <span className="ggts-special">Spesial!</span>
        </h2>
        <p className="ggts-audience">{GGS_TEASER_SPESIAL.audience}</p>
      </header>

      <section className="ggts-web" aria-hidden="true">
        {GGS_TEASER_SPESIAL.web.screens.map((screen) => (
          <figure key={screen.key} className={`ggts-tablet ggts-tablet--${screen.key}`}>
            <span className="ggts-camera" />
            <img className="ggts-shot" src={SCREEN_SRC[screen.key]} alt="" draggable={false} />
            <figcaption className="ggts-label">{screen.label}</figcaption>
          </figure>
        ))}
        <p className="ggts-peek">{GGS_TEASER_SPESIAL.web.peek}</p>
      </section>

      <ul className="ggts-chips" aria-hidden="true">
        {GGS_TEASER_SPESIAL.benefits.map((benefit, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <li key={benefit.key} className={`ggts-chip ggts-chip--${benefit.key}`}>
              <span className="ggts-icon"><Icon strokeWidth={2} /></span>
              <span>{benefit.text}</span>
            </li>
          );
        })}
      </ul>

      <footer className="ggts-cta" aria-hidden="true">
        <span className="ggts-instagram"><Instagram strokeWidth={2} /></span>
        <p>{GGS_TEASER_SPESIAL.cta}</p>
      </footer>

      {frame ? <img className="ggts-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
