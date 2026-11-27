import { useEffect, useState, type RefObject } from 'react';
import { MapPin } from 'lucide-react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import sawerVideo from '@/assets/nempo-feed-48-bajidoran-sawer-hd.mp4.asset.json';
import { nempoBajidoranSawer as R } from './nempo-bajidoran-sawer';
import './NempoBajidoranSawerSlide.css';

/**
 * NEMPO Feed slide 48 (3:4, normal feed size): the audience sawers while the cat dancer pulls the
 * shy male goat into the dance. Carries no "Coming Soon" label — this is the plain feed post.
 * Plays muted with no sound control (posted to the feed; the MP4 download carries the music).
 * `?nbf=overlay` renders only the static layers on a transparent background so the download MP4
 * composites exactly these layers over the same clip.
 */
export function NempoBajidoranSawerSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [overlayOnly, setOverlayOnly] = useState(false);
  useEffect(() => {
    setOverlayOnly(new URLSearchParams(window.location.search).get('nbf') === 'overlay');
  }, []);
  const { title, partner, date, venue, info, kicker, tagline } = R;

  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nbf-root kmt-root${overlayOnly ? ' nbf-root--overlay' : ''}`}
      aria-label={`${title} & ${partner}, ${date.weekday} ${date.day} ${date.month} ${date.year} di ${venue.name}. Reservasi ${info.number}.`}
    >
      {overlayOnly ? null : (
        <video className="nbf-video" src={sawerVideo.url} autoPlay muted loop playsInline width={1080} height={1920} aria-hidden="true" />
      )}
      <span className="nbf-shade" aria-hidden="true" />

      <header className="kmt-header nbf-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nbf-partners">
          <img className="nbf-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nbf-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>

      <div className="nbf-hero" aria-hidden="true">
        <h2 className="nbf-title">{title} <span>&amp;</span> {partner}</h2>
        <p className="nbf-tagline">{tagline[0]}<br />{tagline[1]}</p>
      </div>

      <div className="nbf-bottom" aria-hidden="true">
        <p className="nbf-kicker">{kicker}</p>
        <div className="nbf-ticket">
          <div className="nbf-date">
            <span className="nbf-weekday">{date.weekday}</span>
            <strong>{date.day}</strong>
            <span className="nbf-month">{date.month} {date.year}</span>
          </div>
          <span className="nbf-perf" />
          <div className="nbf-venue">
            <span className="nbf-label"><MapPin />Lokasi</span>
            <strong>{venue.name}</strong>
            <span className="nbf-address">{venue.address}</span>
            <span className="nbf-info">{info.label} · <b>{info.number}</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}
