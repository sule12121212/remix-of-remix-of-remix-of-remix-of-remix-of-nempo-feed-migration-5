import type { RefObject } from 'react';
import { Disc3, Drama, MapPin } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import bgImage from '@/assets/nempo-feed-slide-50-bg.jpg';
import frameImage from '@/assets/nempo-feed-50-stage-truss-frame.webp';
import titleLettering from '@/assets/nempo-feed-50-title-graffiti-dj-large.png';
import djCutout from '@/assets/nempo-feed-50-dj-dityar-tilted.png';
import groupAsset from '@/assets/musicomedy-group.webp.asset.json';
import { nempoSaduliDj as P } from './nempo-saduli-dj';
import './NempoSaduliDjPosterSlide.css';

/**
 * NEMPO Feed slide 50: slide-31-style poster — green stage, concert lighting-truss frame (neon, gunungan, mega mendung, speakers + bonang) —
 * with the Saduli Ragap performers (the slide 31 group photo) and DJ Dityar beside them, plus the event date banner.
 */
export function NempoSaduliDjPosterSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { title, partner, talent, date, venue, info } = P;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nsd-root kmt-root"
      aria-label={`Poster ${title} & ${partner}: pengisi ${talent.dancers} bersama ${talent.dj}, ${date.weekday} ${date.day} ${date.month} ${date.year} di ${venue.name}`}
    >
      <img className="nsd-bg" src={bgImage} alt="" aria-hidden="true" width={1088} height={1440} draggable={false} />
      <span className="nsd-beams" aria-hidden="true" />
      <span className="nsd-glow" aria-hidden="true" />

      <img
        className="nsd-dancers"
        src={groupAsset.url}
        alt={`Para pengisi ${talent.dancers} berbusana adat Sunda`}
        width={1068}
        height={1529}
        draggable={false}
      />
      <img
        className="nsd-dj"
        src={djCutout}
        alt={`${talent.dj} berpose miring sambil memegang kacamata hitam`}
        width={540}
        height={1046}
        draggable={false}
      />

      <img className="nsd-frame" src={frameImage} alt="" aria-hidden="true" width={1152} height={1536} draggable={false} />

      <header className="kmt-header nsd-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nsd-partners">
          <img className="nsd-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nsd-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nsd-heading">
        <h2 className="nsd-title">
          <img src={titleLettering} alt={`${title} & ${partner}`} width={1439} height={512} draggable={false} />
        </h2>
      </div>

      <span className="nsd-tag nsd-tag--saduli">
        <span className="nsd-tag-icon" aria-hidden="true"><Drama /></span>
        <span className="nsd-tag-name">{talent.dancers}</span>
      </span>
      <span className="nsd-tag nsd-tag--dj">
        <span className="nsd-tag-icon" aria-hidden="true"><Disc3 /></span>
        <span className="nsd-tag-name">{talent.dj}</span>
      </span>

      <div className="nsd-banner">
        <span className="nsd-day nsd-ribbon"><span className="nsd-ribbon-edge"><span className="nsd-ribbon-fill">{date.weekday}</span></span></span>
        <strong className="nsd-date">{date.day} {date.month} {date.year}</strong>
        <div className="nsd-venue">
          <MapPin aria-hidden="true" />
          <span>
            <b>Lokasi : <em>{venue.name}</em></b>
            <small>{venue.address} · {info.label} {info.number}</small>
          </span>
        </div>
      </div>
    </section>
  );
}
