import type { RefObject } from 'react';
import logo from '@/assets/ggs-story-promo-logo.png.asset.json';
import nailPhoto from '@/assets/ggs-story-09-ai-nails.png.asset.json';
import { GGS_STORY_PROMOS, GGS_HAPPY_PACKAGE, formatStoryPromoPrice } from './ggs-story-promos';
import './GgsStoryPromosSlide.css';

export function GgsStoryPromosSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggsp-root" aria-label="GGS Story 09 — Daftar Promo Cowok & Cewek">
      <img className="ggsp-background" src={nailPhoto.url} alt="" aria-hidden="true" />
      <div className="ggsp-background-wash" aria-hidden="true" />
      <header className="ggsp-header">
        <img className="ggsp-logo" src={logo.url} alt="GGS Beauty Salon & Spa" />
        <p className="ggsp-motto">Grooming is better<em>your style, your crown</em></p>
      </header>
      <div className="ggsp-heading">
        <p className="ggsp-audience">COWOK &amp; CEWEK</p>
        <h2>Daftar Promo</h2>
      </div>
      <ol className="ggsp-offers">
        {GGS_STORY_PROMOS.map(promo => (
          <li className="ggsp-offer" key={promo.id}>
            <span className="ggsp-number">0{promo.id}</span>
            <span className="ggsp-name">{promo.name}<small>{promo.detail}</small></span>
            <strong className="ggsp-price">{formatStoryPromoPrice(promo.price)}</strong>
          </li>
        ))}
      </ol>
      <section className="ggsp-happy">
        <div className="ggsp-happy-heading"><h3>Paket Happy</h3><strong className="ggsp-happy-price">{formatStoryPromoPrice(GGS_HAPPY_PACKAGE.price)}</strong></div>
        <ul>
          <li><span>Massage full body</span><strong>{GGS_HAPPY_PACKAGE.massageMinutes} menit</strong></li>
          <li><span>Lulur full body</span><strong>{GGS_HAPPY_PACKAGE.scrubMinutes} menit</strong></li>
          <li><span>Creambath dan catok</span></li>
        </ul>
        <p className="ggsp-happy-note">Cowok: creambath dan styling</p>
      </section>
      <div className="ggsp-home-service">
        <strong>Layanan ke rumah &amp; acara</strong>
        <p>Perawatan sesuai kebutuhan Anda,<br />di lokasi pilihan Anda.</p>
      </div>
      <footer className="ggsp-footer"><span>@ggsbeauty.hair.co</span><strong>BOOKING <em>NOW</em></strong><span>0823-4277-7723</span></footer>
    </div>
  );
}