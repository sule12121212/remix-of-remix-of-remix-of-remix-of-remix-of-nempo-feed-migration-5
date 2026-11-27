import { useEffect, useState, type RefObject } from 'react';
import { BadgePercent, CalendarCheck, CalendarDays, Gift, Instagram, Scissors } from 'lucide-react';
import menOverlay from '@/assets/ggs-men-header-footer.png.asset.json';
import webHome from '@/assets/ggs-feed-61-web-beranda.webp.asset.json';
import { GGS_MEN_TEASER_SPESIAL as teaser, GGS_MEN_TEASER_SPESIAL_TEXT } from './ggs-men-teaser-spesial';
import './GgsMenTeaserSpesialSlide.css';

/** No crown icons here: the header overlay's logo already carries the GGS crowns. */
const BENEFIT_ICONS = [CalendarCheck, CalendarDays, BadgePercent, Gift, Scissors] as const;

/** GGS Cowok slide 11: slide 61's website teaser in the men's navy-and-brass style. `?ggmt=plain` drops the overlay for the 3× PNG capture. */
export function GgsMenTeaserSpesialSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [frame, setFrame] = useState(true);
  useEffect(() => {
    setFrame(new URLSearchParams(window.location.search).get('ggmt') !== 'plain');
  }, []);
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggmt-root"
      role="img"
      aria-label={`GGS Cowok — ${GGS_MEN_TEASER_SPESIAL_TEXT}`}
      style={{ ['--ggmt-shot' as string]: `url("${webHome.url}")` }}
    >
      <span className="ggmt-orbit ggmt-orbit--one" aria-hidden="true" />
      <span className="ggmt-orbit ggmt-orbit--two" aria-hidden="true" />

      <header className="ggmt-head" aria-hidden="true">
        <h2 className="ggmt-title">
          <span className="ggmt-something">Something</span>
          <span className="ggmt-special">Spesial!</span>
        </h2>
        <p className="ggmt-audience">{teaser.audience}</p>
      </header>

      <section className="ggmt-web" aria-hidden="true">
        <figure className="ggmt-tablet">
          <span className="ggmt-camera" />
          <img className="ggmt-shot" src={webHome.url} alt="" draggable={false} />
          <figcaption className="ggmt-label">{teaser.web.screen}</figcaption>
        </figure>
        <p className="ggmt-peek">{teaser.web.peek}</p>
        <div className="ggmt-menu">
          <p className="ggmt-menu-label">{teaser.web.menuLabel}</p>
          {teaser.web.tiles.map((tile) => (
            <span key={tile.key} className={`ggmt-tile ggmt-tile--${tile.key}`} />
          ))}
        </div>
      </section>

      <ul className="ggmt-chips" aria-hidden="true">
        {teaser.benefits.map((benefit, index) => {
          const Icon = BENEFIT_ICONS[index];
          return (
            <li key={benefit.key} className={`ggmt-chip ggmt-chip--${benefit.key}`}>
              <span className="ggmt-icon"><Icon strokeWidth={2} /></span>
              <span>{benefit.text}</span>
            </li>
          );
        })}
      </ul>

      <footer className="ggmt-cta" aria-hidden="true">
        <span className="ggmt-instagram"><Instagram strokeWidth={2} /></span>
        <p>{teaser.cta}</p>
      </footer>

      {frame ? <img className="ggmt-watermark" src={menOverlay.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
