import type { RefObject } from 'react';
import { ArrowUpRight, BedDouble, Coffee, Heart, MessageCircle, Moon, Music2 } from 'lucide-react';
import { NempoHeader } from './KalaMudaRecruitSlide';
import { nempoMalamMinggu as P, type MalamMingguIcon } from './nempo-malam-minggu';
import './NempoMalamMingguSlide.css';

const ICONS: Record<MalamMingguIcon, typeof Coffee> = { coffee: Coffee, heart: Heart, music: Music2, bed: BedDouble };
const TILES = ['yellow', 'white', 'white', 'blue'] as const;

/** Star positions (cqw) around the moon in the top-right sky. */
const STARS = [
  { x: 60, y: 22, s: 1, d: 0 }, { x: 92, y: 26, s: .7, d: .5 }, { x: 70, y: 46, s: .6, d: 1 },
  { x: 95, y: 50, s: .9, d: .3 }, { x: 64, y: 58, s: .55, d: 1.3 }, { x: 84, y: 17, s: .6, d: .8 },
];

/**
 * NEMPO Feed slide 54 (3:4): "Malam Minggu, kamu ke mana?" engagement post in the basic NEMPO blue
 * look of slide 45 — blue grid + rings, yellow kicker, a moon with stars and four numbered answer tiles.
 */
export function NempoMalamMingguSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { kicker, headline, subtitle, pickLabel, options, cta, date } = P;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nmm-root kmt-root"
      aria-label={`${headline.lead} ${headline.accent} ${options.map((o, i) => `${i + 1}. ${o.label}`).join(', ')}. ${cta.title}.`}
    >
      <div className="nmm-bg" aria-hidden="true">
        <span className="nmm-grid" />
        <span className="nmm-ring nmm-ring-a" />
        <span className="nmm-ring nmm-ring-b" />
        <span className="nmm-glow" />
        <span className="nmm-moon-wrap"><span className="nmm-moon" /></span>
        {STARS.map((s, i) => (
          <span key={i} className="nmm-star" style={{ left: `${s.x}cqw`, top: `${s.y}cqw`, width: `${s.s * 2.6}cqw`, height: `${s.s * 2.6}cqw`, animationDelay: `-${s.d}s` }} />
        ))}
      </div>

      <NempoHeader badge={`${date.weekday}, ${date.day} ${date.month} ${date.year}`} />

      <div className="nmm-hero">
        <span className="nmm-kicker"><Moon aria-hidden="true" />{kicker}</span>
        <h2 className="nmm-title">{headline.lead}<br /><em>{headline.accent}</em></h2>
        <p className="nmm-sub">{subtitle}</p>
      </div>

      <div className="nmm-bottom">
        <span className="nmm-label"><span />{pickLabel}<span /></span>
        <ol className="nmm-grid-options">
          {options.map((o, i) => {
            const Icon = ICONS[o.icon];
            return (
              <li key={o.label} className={`nmm-tile nmm-tile--${TILES[i]}`}>
                <span className="nmm-tile-no">{i + 1}</span>
                <span className="nmm-tile-icon"><Icon aria-hidden="true" /></span>
                <strong>{o.label}</strong>
              </li>
            );
          })}
        </ol>

        <p className="nmm-cta">
          <span className="nmm-cta-icon"><MessageCircle aria-hidden="true" /></span>
          <span className="nmm-cta-text"><span>{cta.note}</span><strong>{cta.title}</strong></span>
          <span className="nmm-cta-go"><ArrowUpRight aria-hidden="true" /></span>
        </p>
      </div>
    </section>
  );
}
