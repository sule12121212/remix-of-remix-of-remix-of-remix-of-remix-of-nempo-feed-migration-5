import type { RefObject } from 'react';
import stageArt from '@/assets/nempo-feed-56/nempo-feed-56-panggung-kelapa.webp.asset.json';
import titleArt from '@/assets/nempo-feed-56/nempo-feed-56-judul-putih.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoKolaborasiPoster as P } from './nempo-kolaborasi';
import './NempoKolaborasiPosterSlide.css';

/**
 * NEMPO Feed slide 56 (3:4): the "cara kolaborasi" content as a bright, playful poster — the same Nempo Feed
 * header every other slide uses, an AI-lettered bouncy white title in the sky, a sticker tagline, then a white
 * card with the benefits and the three steps above the shared footer, over the owner's coconut-stage artwork
 * (a frog singer on a tropical stage inside a coconut, crowd with light sticks, open sea).
 */
export function NempoKolaborasiPosterSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nkp-root kmt-root"
      aria-label={`${P.title.join(' ')} ${P.tagline} ${P.credits.join(', ')}. ${P.stepsLabel}: ${P.steps.join(', ')}. ${P.cta}`}
    >
      <img
        className="nkp-photo"
        src={stageArt.url}
        alt="Ilustrasi 3D panggung konser di dalam buah kelapa di tengah laut: katak berkacamata bernyanyi, penonton mengangkat lightstick, pohon kelapa dan lampu panggung warna-warni."
        draggable={false}
      />

      <NempoHeader badge={P.badge} />

      <h2 className="nkp-title">
        {/* AI-lettered bouncy white title (transparent webp); the real words stay for screen readers */}
        <img className="nkp-title-art" src={titleArt.url} alt="" draggable={false} />
        <span className="nkp-sr">{P.title.join(' ')}</span>
      </h2>

      <p className="nkp-tagline">{P.tagline}</p>
      <p className="nkp-release">{P.release}</p>

      <div className="nkp-billing">
        <p className="nkp-credits">
          <strong>{P.creditsLabel}</strong>
          {P.credits.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </p>

        <p className="nkp-steps-label">{P.stepsLabel}</p>
        <ol className="nkp-steps">
          {P.steps.map((s, i) => (
            <li key={s}><span>{i + 1}</span>{s}</li>
          ))}
        </ol>
      </div>

      <NempoFooter />
    </section>
  );
}
