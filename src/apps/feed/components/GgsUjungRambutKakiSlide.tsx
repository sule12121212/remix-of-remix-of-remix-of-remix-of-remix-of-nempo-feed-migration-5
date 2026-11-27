import type { RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2-rebuilt.webp.asset.json';
import pijatPhoto from '@/assets/ggs-feed-63-pijat.webp.asset.json';
import lulurPhoto from '@/assets/ggs-feed-63-lulur.webp.asset.json';
import creambathPhoto from '@/assets/ggs-feed-63-creambath.webp.asset.json';
import catokPhoto from '@/assets/ggs-feed-63-catok.webp.asset.json';
import {
  GGS_UJUNG_RAMBUT_KAKI as C,
  GGS_UJUNG_RAMBUT_KAKI_PERIOD,
  GGS_UJUNG_RAMBUT_KAKI_PRICE,
  GGS_UJUNG_RAMBUT_KAKI_TEXT,
} from './ggs-ujung-rambut-kaki';
import './GgsUjungRambutKakiSlide.css';

const THUMB_SRC = [lulurPhoto.url, creambathPhoto.url, catokPhoto.url];

/** GGS Feed slide 63: head-to-toe package — the salon's own massage room photo on the left, offer on a dark panel. */
export function GgsUjungRambutKakiSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggur-root"
      role="img"
      aria-label={`GGS Beauty — ${GGS_UJUNG_RAMBUT_KAKI_TEXT}`}
    >
      <img className="ggur-photo" src={pijatPhoto.url} alt="" aria-hidden="true" draggable={false} />
      <div className="ggur-veil" aria-hidden="true" />

      <div className="ggur-head" aria-hidden="true">
        <p className="ggur-kicker">{C.kicker}</p>
        <h2 className="ggur-title">
          <span className="ggur-title-top">{C.titleTop}</span>
          <em className="ggur-title-em">{C.titleBottom}</em>
        </h2>
      </div>

      <div className="ggur-side" aria-hidden="true">
        <p className="ggur-price">
          <span className="ggur-price-lead">{C.priceLead} Rp</span>
          <span className="ggur-price-num">{GGS_UJUNG_RAMBUT_KAKI_PRICE}</span>
        </p>

        <ul className="ggur-list">
          {C.services.map((s) => (
            <li key={s.name} className="ggur-item">
              <span className="ggur-name">{s.name}</span>
              {s.detail ? <span className="ggur-detail">{s.detail}</span> : null}
            </li>
          ))}
        </ul>
      </div>

      <div className="ggur-pack" aria-hidden="true">
        <p className="ggur-date">{GGS_UJUNG_RAMBUT_KAKI_PERIOD}</p>
        <div className="ggur-thumbs">
          {C.thumbs.map((label, i) => (
            <figure key={label} className="ggur-thumb">
              <img src={THUMB_SRC[i]} alt="" draggable={false} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {frame ? <img className="ggur-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
