import { useEffect, useState, type RefObject } from 'react';
import photo from '@/assets/ggs-men-10-undangan-kartu.jpg';
import overlay from '@/assets/ggs-men-header-footer.png.asset.json';
import { GGS_MEN_UNDANGAN as invite, invitationRupiah } from './ggs-men-undangan';
import './GgsMenUndanganSlide.css';

export function GgsMenUndanganSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [frame, setFrame] = useState(true);
  useEffect(() => {
    setFrame(new URLSearchParams(window.location.search).get('ggmi') !== 'plain');
  }, []);
  return <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggmi-root" role="img" aria-label={`GGS Cowok — Undangan malam minggu. ${invite.guest} ${invite.body.join(' ')}. ${invite.promos.map(p => `${p.service} Rp${invitationRupiah(p.price)}`).join('. ')}.`}>
    <img className="ggmi-photo" src={photo} alt="" aria-hidden="true" />
    <h2 className="ggmi-title" aria-hidden="true">{invite.title}</h2>
    <article className="ggmi-card" aria-hidden="true">
      <h3 className="ggmi-guest">{invite.guest}</h3>
      <p className="ggmi-body">{invite.body.map(line => <span key={line}>{line}</span>)}</p>
      <p className="ggmi-edition">Promo persiapan malam minggu</p>
      <dl className="ggmi-promos">{invite.promos.map(p => <div className="ggmi-offer" key={p.service}>
        <dt>{p.service}</dt><dd><small>Rp</small><b>{invitationRupiah(p.price)}</b></dd>
      </div>)}</dl>
      <p className="ggmi-closer">{invite.closer}</p>
      <p className="ggmi-cta">{invite.cta}</p>
    </article>
    {frame && <img className="ggmi-watermark" src={overlay.url} alt="" aria-hidden="true" />}
  </div>;
}