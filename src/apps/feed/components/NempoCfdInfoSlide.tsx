import type { RefObject } from 'react';
import { Bike, MapPin, Mountain, Route, UtensilsCrossed } from 'lucide-react';
import crowdPhoto from '@/assets/nempo-feed-58/nempo-feed-58-cfd-keramaian.webp.asset.json';
import mountainPhoto from '@/assets/nempo-feed-58/nempo-feed-58-cfd-gunung.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoCfdInfo as C } from './nempo-cfd-info';
import './NempoCfdInfoSlide.css';

const FACT_ICONS = { bike: Bike, mountain: Mountain, food: UtensilsCrossed, road: Route } as const;

const PHOTOS = [
  {
    src: crowdPhoto.url,
    alt: 'Foto asli suasana ramai Car Free Day Minggu pagi di Jl. Ibrahim Adjie Garut: pengunjung berjalan di antara tenda pedagang warna-warni.',
  },
  {
    src: mountainPhoto.url,
    alt: 'Foto asli Jl. Ibrahim Adjie Garut dengan deretan gerobak pedagang dan Gunung Guntur di belakangnya.',
  },
];

/**
 * NEMPO Feed slide 58 (3:4): the informative Car Free Day post for Jl. Letjen Ibrahim Adjie, Garut — slide 57's
 * bright palette with two real news photos as taped polaroids (caption + credit), then a white card of four
 * icon facts above the shared footer.
 */
export function NempoCfdInfoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nci-root kmt-root"
      aria-label={`${C.title.join(' ')}. ${C.tagline}. ${C.release}. ${C.facts.map((f) => `${f.heading}: ${f.text}`).join(' ')} ${C.cta}`}
    >
      <NempoHeader badge={C.badge} />

      <h2 className="nci-title">
        {C.title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>

      <p className="nci-tagline"><MapPin aria-hidden="true" />{C.tagline}</p>
      <p className="nci-release">{C.release}</p>

      <div className="nci-photos">
        {PHOTOS.map((p, i) => (
          <figure key={p.src} className="nci-polaroid">
            <img src={p.src} alt={p.alt} draggable={false} />
            <figcaption>
              <span className="nci-caption">{C.photos[i]?.caption}</span>
              <span className="nci-credit">{C.photos[i]?.credit}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="nci-card">
        <ul className="nci-facts">
          {C.facts.map((f) => {
            const Icon = FACT_ICONS[f.icon];
            return (
              <li key={f.heading}>
                <span className="nci-fact-icon"><Icon aria-hidden="true" /></span>
                <div>
                  <p className="nci-fact-heading">{f.heading}</p>
                  <p className="nci-fact-text">{f.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="nci-cta">{C.cta}</p>
      </div>

      <NempoFooter />
    </section>
  );
}
