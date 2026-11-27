import { useEffect, useState, type RefObject } from 'react';
import { MapPin } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import reelVideo from '@/assets/nempo-feed-47-bajidoran-sato-menari.mp4.asset.json';
import { nempoBajidoranReel as R } from './nempo-bajidoran-reel';
import './NempoBajidoranReelSlide.css';

/**
 * NEMPO Feed slide 47 (9:16 reel): AI clip of a cat, a Garut sheep and a rabbit in kebaya with
 * sanggul hair dancing Bajidoran while a monkey plays kendang, with the event info on top.
 * Plays muted with no sound control (posted to the feed; the MP4 download carries the music).
 * `?nbr=overlay` renders only the static layers on a transparent background so the download
 * MP4 composites exactly these layers over the same clip.
 */
export function NempoBajidoranReelSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [overlayOnly, setOverlayOnly] = useState(false);
  useEffect(() => {
    setOverlayOnly(new URLSearchParams(window.location.search).get('nbr') === 'overlay');
  }, []);
  const { marquee, title, partner, date, venue, info, kicker } = R;

  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nbr-root kmt-root${overlayOnly ? ' nbr-root--overlay' : ''}`}
      aria-label={`${marquee}: ${title} & ${partner}, ${date.weekday} ${date.day} ${date.month} ${date.year} di ${venue.name}. Reservasi ${info.number}.`}
    >
      {overlayOnly ? null : (
        <video className="nbr-video" src={reelVideo.url} autoPlay muted loop playsInline width={1080} height={1920} aria-hidden="true" />
      )}
      <span className="nbr-shade" aria-hidden="true" />

      <header className="kmt-header nbr-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nbr-partners">
          <img className="nbr-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nbr-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nbr-hero" aria-hidden="true">
        <span className="nbr-coming">{marquee}</span>
        <h2 className="nbr-title">{title} <span>&amp;</span> {partner}</h2>
      </div>

      <div className="nbr-bottom" aria-hidden="true">
        <p className="nbr-kicker">{kicker}</p>
        <div className="nbr-ticket">
          <div className="nbr-date">
            <span className="nbr-weekday">{date.weekday}</span>
            <strong>{date.day}</strong>
            <span className="nbr-month">{date.month} {date.year}</span>
          </div>
          <span className="nbr-perf" />
          <div className="nbr-venue">
            <span className="nbr-label"><MapPin />Lokasi</span>
            <strong>{venue.name}</strong>
            <span className="nbr-address">{venue.address}</span>
            <span className="nbr-info">{info.label} · <b>{info.number}</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}
