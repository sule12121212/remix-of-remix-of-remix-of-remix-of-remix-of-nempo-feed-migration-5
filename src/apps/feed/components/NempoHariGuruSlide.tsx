import type { RefObject } from 'react';
import backdrop from '@/assets/nempo-feed-64/nempo-feed-64-latar-merah.png.asset.json';
import teachers from '@/assets/nempo-feed-64/nempo-feed-64-guru.png.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { NEMPO_HARI_GURU_DATE, nempoHariGuru as P } from './nempo-hari-guru';
import './NempoHariGuruSlide.css';

/**
 * NEMPO Feed slide 64 (3:4): Hari Guru Nasional commemoration poster after the owner's red reference —
 * a distressed giant "Selamat Hari Guru" on a deep red grunge wall, four teachers standing in front,
 * thank-you line at the lower left, shared Nempo header/footer.
 */
export function NempoHariGuruSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nhg-root kmt-root"
      aria-label={`${P.title.join(' ')}. ${P.arc}. ${P.kicker}, ${NEMPO_HARI_GURU_DATE}. ${P.thanks.join(' ')}. ${P.tagline}.`}
    >
      <img className="nhg-wall" src={backdrop.url} alt="" draggable={false} />

      <NempoHeader badge={NEMPO_HARI_GURU_DATE} />

      <div className="nhg-hero" aria-hidden="true">
        <h2 className="nhg-title">
          {P.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className="nhg-arc">{P.arc}</p>
      </div>

      <img className="nhg-teachers" src={teachers.url} alt="" draggable={false} />

      <div className="nhg-thanks" aria-hidden="true">
        <p>
          {P.thanks.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <p className="nhg-tagline">{P.tagline}</p>
      </div>

      <NempoFooter />
    </section>
  );
}
