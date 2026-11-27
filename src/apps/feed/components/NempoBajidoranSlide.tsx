import type { RefObject } from 'react';
import { AudioLines, Disc3, MapPin, Music2 } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import stagePhoto from '@/assets/good-story-cafe-SJL01871.jpg.asset.json';
import { nempoBajidoran } from './nempo-bajidoran';
import './NempoBajidoranSlide.css';

/** NEMPO Feed slide 46: "Coming Soon" teaser — Bajidoran & DJ at Good Story Cafe. */
export function NempoBajidoranSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { marquee, kicker, title, partner, tagline, date, venue, info } = nempoBajidoran;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nbd-root kmt-root"
      aria-label={`${marquee}: ${title} & ${partner}, ${date.weekday} ${date.day} ${date.month} ${date.year} di ${venue.name}`}
    >
      <div className="nbd-bg" aria-hidden="true">
        <img src={stagePhoto.url} alt="" width={1088} height={1440} draggable={false} />
        <span className="nbd-shade" />
      </div>

      <header className="kmt-header nbd-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nbd-partners">
          <img className="nbd-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nbd-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nbd-hero">
        <span className="nbd-coming">{marquee}</span>
        <h2 className="nbd-title">{title}</h2>
        <p className="nbd-and"><span>&amp;</span> {partner}</p>
        <div className="nbd-sounds" aria-hidden="true"><Music2 /><span /><AudioLines /><span /><Disc3 /></div>
        <span className="nbd-kicker">{kicker}</span>
        <p className="nbd-tagline">{tagline[0]}<br />{tagline[1]}</p>
      </div>

      <div className="nbd-ticket">
        <div className="nbd-date">
          <span className="nbd-weekday">{date.weekday}</span>
          <strong>{date.day}</strong>
          <span className="nbd-month">{date.month} {date.year}</span>
        </div>
        <span className="nbd-perf" aria-hidden="true" />
        <div className="nbd-venue">
          <span className="nbd-label"><MapPin aria-hidden="true" />Lokasi</span>
          <strong>{venue.name}</strong>
          <span className="nbd-address">{venue.address}</span>
          <span className="nbd-info">{info.label} · <b>{info.number}</b></span>
        </div>
      </div>
    </section>
  );
}
