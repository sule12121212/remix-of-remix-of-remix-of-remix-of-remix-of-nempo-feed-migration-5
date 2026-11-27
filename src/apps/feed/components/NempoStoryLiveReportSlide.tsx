import type { RefObject } from 'react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import { nempoStoryLiveReport } from './nempo-story-today';
import './NempoAjakRequestSlide.css';
import './KalaMudaRecruitSlide.css';
import './NempoStoryLiveReportSlide.css';

/**
 * NEMPO Story slide 02: an orange-and-gold live-report overlay. Only the outer
 * frame is painted; the large centre opening stays transparent for event footage.
 */
export function NempoStoryLiveReportSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const P = nempoStoryLiveReport;

  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nslr-root kmt-root"
      aria-label={`${P.headline} — ${P.event} — ${P.venue}`}
      data-nslr-capture
    >
      <span className="nslr-panel nslr-panel--top" aria-hidden="true" />
      <span className="nslr-panel nslr-panel--left" aria-hidden="true" />
      <span className="nslr-panel nslr-panel--right" aria-hidden="true" />
      <span className="nslr-panel nslr-panel--bottom" aria-hidden="true" />

      <span className="nslr-opening" aria-hidden="true">
        <i className="nslr-corner nslr-corner--tl" />
        <i className="nslr-corner nslr-corner--tr" />
        <i className="nslr-corner nslr-corner--bl" />
        <i className="nslr-corner nslr-corner--br" />
      </span>

      <header className="kmt-header nslr-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nar-partners nslr-partners">
          <img className="nar-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nar-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nslr-heading">
        <h2><span className="nslr-live-dot" aria-hidden="true" />{P.headline}</h2>
        <p>{P.event}</p>
      </div>

      <footer className="nslr-footer">
        <span>{P.venue}</span>
      </footer>
    </section>
  );
}
