import type { RefObject } from 'react';
import { MapPin } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import { nempoTerimaKasih as T } from './nempo-terima-kasih';
import { STAGE_LAMPS, stageLightStyle } from './nempo-stage-lights';
import frameAsset from '@/assets/nempo-feed-52-stage-frame-no-ribbons.webp.asset.json';
import './NempoAjakRequestSlide.css';
import './NempoTerimaKasihSlide.css';

/**
 * NEMPO Feed slide 53 (3:4): after-event "Hatur Nuhun!" — text only inside slide 52's lighting-truss
 * frame (same ribbon-free frame image, chase highlight and blinking lamps), no background, so the PNG
 * is transparent. Text sits in the lower part so the event video stays visible above it.
 * `checker={false}` hides the preview checkerboard while the PNG is captured.
 */
export function NempoTerimaKasihSlide({ exportRef, checker = true }: { exportRef?: RefObject<HTMLElement | null>; checker?: boolean }) {
  const { eyebrow, headline, ribbon, body, title, partner, date, venue } = T;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nar-root nte-root kmt-root${checker ? ' nte-root--checker' : ''}`}
      aria-label={`${headline.lead} ${headline.accent} ${body} ${title} & ${partner}, ${date.weekday} ${date.day} ${date.month} ${date.year} di ${venue.name}.`}
    >
      <img className="nar-frame" src={frameAsset.url} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
      <img className="nar-frame-chase" src={frameAsset.url} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
      <span className="nar-lamps" aria-hidden="true">
        {STAGE_LAMPS.map((l, i) => (
          <span key={i} className={`nar-lamp nar-lamp--${l.tone}`} style={stageLightStyle(l)} />
        ))}
      </span>

      <header className="kmt-header nar-header nte-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nar-partners">
          <img className="nar-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nar-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nte-copy">
        <p className="nte-kicker">{eyebrow}</p>
        <h2 className="nte-headline">
          <span data-text={headline.lead}>{headline.lead}</span>
          <span data-text={headline.accent}>{headline.accent}</span>
        </h2>

        <div className="nte-panel">
          <span className="nte-ribbon"><span className="nte-ribbon-edge"><span className="nte-ribbon-fill">{ribbon}</span></span></span>
          <p className="nte-body">{body}</p>
        </div>

        <p className="nte-date">
          <b>{date.weekday}, {date.day} {date.month} {date.year}</b>
          <span><MapPin aria-hidden="true" />{venue.name}</span>
        </p>
      </div>
    </section>
  );
}
