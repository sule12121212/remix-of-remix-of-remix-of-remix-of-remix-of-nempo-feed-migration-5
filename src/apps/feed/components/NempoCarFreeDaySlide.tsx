import type { RefObject } from 'react';
import { MapPin } from 'lucide-react';
import streetArt from '@/assets/nempo-feed-57/nempo-feed-57-cfd-latar.webp.asset.json';
import titleArt from '@/assets/nempo-feed-57/nempo-feed-57-judul-putih.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoCarFreeDay as C } from './nempo-car-free-day';
import './NempoCarFreeDaySlide.css';

/**
 * NEMPO Feed slide 57 (3:4): Car Free Day morning on Jl. Ibrahim Adjie, Garut, in slide 56's bright poster look —
 * shared header, AI-lettered white title in the sky (real words kept as screen-reader text), sticker tagline,
 * tilted date line, then a white card with the "jajan apa?" question and four numbered answers above the shared
 * footer, over a 3D street-food CFD artwork. Both images belong to this project.
 */
export function NempoCarFreeDaySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="ncfd-root kmt-root"
      aria-label={`${C.title.join(' ')} ${C.tagline}. ${C.release}. ${C.question} ${C.options.map((o, i) => `${i + 1}. ${o}`).join(', ')}. ${C.cta}`}
    >
      <img
        className="ncfd-photo"
        src={streetArt.url}
        alt="Ilustrasi 3D Car Free Day pagi hari di jalan kota Garut: katak berkacamata jogging membawa tusukan cilok, orang bersepeda dan lari pagi, gerobak jajanan di kiri-kanan jalan, gunung hijau di belakang."
        draggable={false}
      />

      <NempoHeader badge={C.badge} />

      <h2 className="ncfd-title">
        {/* AI-lettered bouncy white title (transparent webp); the real words stay for screen readers */}
        <img className="ncfd-title-art" src={titleArt.url} alt="" draggable={false} />
        <span className="ncfd-sr">{C.title.join(' ')}</span>
      </h2>

      <p className="ncfd-tagline"><MapPin aria-hidden="true" />{C.tagline}</p>
      <p className="ncfd-release">{C.release}</p>

      <div className="ncfd-card">
        <p className="ncfd-question">{C.question}</p>
        <ol className="ncfd-options">
          {C.options.map((o, i) => (
            <li key={o}><span>{i + 1}</span>{o}</li>
          ))}
        </ol>
        <p className="ncfd-cta">{C.cta}</p>
      </div>

      <NempoFooter />
    </section>
  );
}
