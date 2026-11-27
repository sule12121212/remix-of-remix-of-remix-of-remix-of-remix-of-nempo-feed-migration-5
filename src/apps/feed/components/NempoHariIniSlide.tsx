import type { RefObject } from 'react';
import { Clock3, Disc3, Drama, MapPin, Phone } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import bgImage from '@/assets/nempo-feed-slide-50-bg.jpg';
// Slide 50's truss frame with the gold ribbon confetti painted out (owner asked for no ribbons on this slide).
import frameAsset from '@/assets/nempo-feed-52-stage-frame-no-ribbons.webp.asset.json';
import titleLettering from '@/assets/nempo-feed-50-title-graffiti-dj-large.png';
import { nempoHariIni as P } from './nempo-hari-ini';
import { STAGE_LAMPS, STAGE_SPOTS, stageLightStyle } from './nempo-stage-lights';
import './NempoAjakRequestSlide.css';
import './NempoHariIniSlide.css';

/**
 * NEMPO Feed slide 52: day-of reminder on slide 50/51's green stage + lighting-truss frame —
 * "Hari Ini!", start time 18.00 – selesai, performers, date and venue. Every animation loops within 6 s.
 */
export function NempoHariIniSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { title, partner, headline, lead, time, talent, date, venue, info } = P;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nar-root nhi-root kmt-root"
      aria-label={`${title} & ${partner} ${headline} ${date.weekday}, ${date.day} ${date.month} ${date.year}, ${time.label} ${time.start} – ${time.end} di ${venue.name}`}
    >
      <img className="nar-bg" src={bgImage} alt="" aria-hidden="true" width={1088} height={1440} draggable={false} />
      <span className="nar-beams" aria-hidden="true" />
      <span className="nar-glow" aria-hidden="true" />
      <span className="nar-spots" aria-hidden="true">
        {STAGE_SPOTS.map((l, i) => (
          <span key={i} className={`nar-beam nar-beam--${l.tone}`} style={stageLightStyle(l)} />
        ))}
      </span>
      <img className="nar-frame" src={frameAsset.url} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
      <img className="nar-frame-chase" src={frameAsset.url} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />
      <span className="nar-lamps" aria-hidden="true">
        {STAGE_LAMPS.map((l, i) => (
          <span key={i} className={`nar-lamp nar-lamp--${l.tone}`} style={stageLightStyle(l)} />
        ))}
      </span>

      <header className="kmt-header nar-header">
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

      <div className="nhi-top">
        <img className="nhi-event" src={titleLettering} alt={`${title} & ${partner}`} width={1439} height={512} draggable={false} />
        <h2 className="nhi-headline" data-text={headline}>{headline}</h2>
        <p className="nhi-lead">{lead}</p>
      </div>

      <div className="nhi-time">
        <span className="nhi-ribbon"><span className="nhi-ribbon-edge"><span className="nhi-ribbon-fill">{time.label}</span></span></span>
        <div className="nhi-time-row">
          <span className="nhi-clock" aria-hidden="true">
            <Clock3 className="nhi-clock-face" />
            <span className="nhi-clock-hand" />
          </span>
          <span className="nhi-start">{time.start}</span>
          <span className="nhi-dash" aria-hidden="true">–</span>
          <span className="nhi-end">{time.end}</span>
        </div>
        <span className="nhi-zone">{time.zone} · {date.weekday} malam</span>
      </div>

      <div className="nhi-talent">
        <span className="nhi-pill nhi-pill--pink"><span className="nhi-pill-icon"><Drama aria-hidden="true" /></span>{talent.dancers}</span>
        <b className="nhi-x" aria-hidden="true">×</b>
        <span className="nhi-pill nhi-pill--violet"><span className="nhi-pill-icon"><Disc3 aria-hidden="true" /></span>{talent.dj}</span>
      </div>

      <div className="nhi-date">
        <b>{date.weekday}, {date.day} {date.month} {date.year}</b>
        <span className="nhi-venue"><MapPin aria-hidden="true" />{venue.name}</span>
        <small>{venue.address} · <Phone aria-hidden="true" />{info.label} {info.number}</small>
      </div>
    </section>
  );
}
