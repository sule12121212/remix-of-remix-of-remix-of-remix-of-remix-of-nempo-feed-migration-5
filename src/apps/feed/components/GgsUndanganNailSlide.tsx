import type { RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-51-undangan-kartu.jpg.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_UNDANGAN, GGS_UNDANGAN_PRICE } from './ggs-undangan-nail';
import './GgsUndanganNailSlide.css';

/**
 * GGS Feed slide 51: "Undangan" — red nail-art hands hold a blank invitation card; the invite is set on the card
 * in Cormorant Garamond with Nail Art Rp 35.000 as the centrepiece. `frame={false}` drops the overlay for 2× capture.
 */
export function GgsUndanganNailSlide({ exportRef, frame = true }: { exportRef?: RefObject<HTMLElement | null>; frame?: boolean }) {
  const u = GGS_UNDANGAN;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggin-root"
      role="img"
      aria-label={`GGS Beauty — ${u.title}. ${u.guest}. ${u.body.join(' ')} ${GGS_UNDANGAN_PRICE}. ${u.extras.map((x) => `${x.service} Rp ${x.price}`).join('. ')}. ${u.closer} ${u.cta}.`}
    >
      <img className="ggin-photo" src={photoAsset.url} alt="" aria-hidden="true" width={1440} height={1920} />

      <section className="ggin-head" aria-hidden="true">
        <h2 className="ggin-title">{u.title}</h2>
      </section>

      <article className="ggin-card" aria-hidden="true">
        <h3 className="ggin-guest">{u.guest}</h3>
        <p className="ggin-body">
          {u.body.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <p className="ggin-orn">
          <span />
          <i />
          <span />
        </p>
        <p className="ggin-service">{u.service}</p>
        <p className="ggin-price">
          <small>{u.price.currency}</small>
          <b>{u.price.value}</b>
        </p>
        <ul className="ggin-extras">
          {u.extras.map((x) => (
            <li key={x.service}>
              <span>{x.service}</span>
              <i />
              <b>
                <small>Rp</small> {x.price}
              </b>
            </li>
          ))}
        </ul>
        <p className="ggin-closer">{u.closer}</p>
        <p className="ggin-cta">{u.cta}</p>
      </article>

      {frame ? <img className="ggin-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </div>
  );
}
