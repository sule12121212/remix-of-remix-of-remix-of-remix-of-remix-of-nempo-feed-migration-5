import type { RefObject } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import logo from '@/assets/garut-beans/garut-beans-logo.webp.asset.json';
import mountains from '@/assets/garut-beans/garut-beans-mountain-watercolor.webp.asset.json';
import { GARUT_BEANS_BRAND, GARUT_BEANS_PHILOSOPHY } from './garut-beans-feed';
import './GarutBeansOpeningSlide.css';

/** Garut Beans feed slide 1 (3:4): the opening post — the philosophy behind the logo. */
export function GarutBeansOpeningSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { headline, lead, meanings } = GARUT_BEANS_PHILOSOPHY;
  return (
    <article
      ref={exportRef as RefObject<HTMLElement | null>}
      className="gbf-root"
      aria-label={`${GARUT_BEANS_BRAND.name} — ${headline.join(' ')}`}
    >
      <img className="gbf-mountains" src={mountains.url} alt="" width={1024} height={1024} />
      <div className="gbf-grain" aria-hidden="true" />

      <figure className="gbf-hero">
        <span className="gbf-hero-ring" aria-hidden="true" />
        <img className="gbf-hero-logo" src={logo.url} alt="Logo Garut Beans" width={900} height={889} />
      </figure>

      <section className="gbf-copy">
        <h2 className="gbf-headline">
          {headline[0]} <em>{headline[1]}</em>
        </h2>
        <span className="gbf-rule" aria-hidden="true" />
        <p className="gbf-lead">{lead}</p>
      </section>

      <ul className="gbf-meanings">
        {meanings.map((m) => (
          <li key={m.num} className="gbf-meaning">
            <span className="gbf-meaning-num">{m.num}</span>
            <span className="gbf-meaning-body">
              <span className="gbf-meaning-title">{m.title}</span>
              <span className="gbf-meaning-text">{m.text}</span>
            </span>
          </li>
        ))}
      </ul>

      <footer className="gbf-foot">
        <svg className="gbf-foot-ridge" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 6V4.2L7 3.1 13 4 21 1.6 27 2.9 34 .4 41 2.6 47 1.9 55 4 63 1.2 70 2.8 77 .9 85 3.4 92 2.2 100 3.6V6Z" />
        </svg>
        <div className="gbf-foot-inner">
          <span className="gbf-foot-badge">
            <img src={logo.url} alt="" width={900} height={889} />
          </span>
          <div className="gbf-foot-copy">
            <span className="gbf-foot-tag">
              {GARUT_BEANS_BRAND.taglineLines.map((line) => (
                <span key={line} className="gbf-foot-line">{line}</span>
              ))}
            </span>
            <span className="gbf-foot-contacts">
              <span className="gbf-foot-pill">
                <FaInstagram aria-hidden="true" />
                {GARUT_BEANS_BRAND.instagram}
              </span>
              <span className="gbf-foot-pill">
                <FaWhatsapp aria-hidden="true" />
                {GARUT_BEANS_BRAND.whatsapp}
              </span>
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
}
