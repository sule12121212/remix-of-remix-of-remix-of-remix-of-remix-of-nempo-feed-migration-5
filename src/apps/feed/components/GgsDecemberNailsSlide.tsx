import type { RefObject } from 'react';
import logo from '@/assets/ggs-story-promo-logo.png.asset.json';
import french from '@/assets/ggs-festive-candy-cane.webp.asset.json';
import cherryRed from '@/assets/ggs-festive-snowflake-red.webp.asset.json';
import catEye from '@/assets/ggs-festive-gold-cat-eye.webp.asset.json';
import pearl from '@/assets/ggs-festive-snow-pearl.webp.asset.json';
import cherry from '@/assets/ggs-festive-gift-ribbon.webp.asset.json';
import marble from '@/assets/ggs-festive-gold-confetti.webp.asset.json';
import forest from '@/assets/ggs-festive-christmas-tree.webp.asset.json';
import daisy from '@/assets/ggs-festive-fireworks.webp.asset.json';
import glitter from '@/assets/ggs-festive-silver-tips.webp.asset.json';
import './GgsStoryPromosSlide.css';
import './GgsDecemberNailsSlide.css';

const looks = [
  { name: 'Candy Cane', photo: french, detail: 'Kuku pendek dengan French tip motif candy cane merah putih' },
  { name: 'Red Snowflake', photo: cherryRed, detail: 'Kuku almond merah dengan snowflake putih di kuku aksen' },
  { name: 'Gold Cat Eye', photo: catEye, detail: 'Kuku champagne cat eye dengan glitter emas untuk Tahun Baru' },
  { name: 'Snow Pearl', photo: pearl, detail: 'Kuku pearl chrome putih dengan ujung glitter perak' },
  { name: 'Gift Ribbon', photo: cherry, detail: 'Kuku pink dengan pita kado merah dan French tip merah' },
  { name: 'Gold Confetti', photo: marble, detail: 'Kuku blush dengan serpihan emas seperti confetti perayaan' },
  { name: 'Christmas Tree', photo: forest, detail: 'Kuku hijau tua dengan pohon Natal emas mungil' },
  { name: 'NYE Fireworks', photo: daisy, detail: 'Kuku nude dengan motif kembang api perak untuk malam Tahun Baru' },
  { name: 'Silver Tips', photo: glitter, detail: 'Kuku nude dengan glitter perak lembut di ujung' },
];

/** GGS Feed 69: a still editorial nail-art selection with the shared GGS branding. */
export function GgsDecemberNailsSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div ref={exportRef as RefObject<HTMLDivElement | null>} className="ggdn-root ggsp-root" aria-label="GGS Feed 69 — December Nail Edit">
      <header className="ggsp-header">
        <img className="ggsp-logo" src={logo.url} alt="GGS Beauty Salon & Spa" />
        <p className="ggsp-motto">Grooming is better<em>your style, your crown</em></p>
      </header>
      <div className="ggdn-heading">
        <h2>December<em>Nail Edit</em></h2>
        <p>Merry Christmas &amp; Happy New Year</p>
      </div>
      <div className="ggdn-grid">
        {looks.map(look => (
          <figure className="ggdn-look" key={look.name}>
            <div className="ggdn-circle"><img src={look.photo.url} alt={look.detail} /></div>
            <figcaption>{look.name}</figcaption>
          </figure>
        ))}
      </div>
      <p className="ggdn-note">Dari hangatnya Natal sampai gemerlap Tahun Baru.</p>
      <footer className="ggsp-footer"><span>@ggsbeauty.hair.co</span><strong>BOOKING <em>NOW</em></strong><span>0823-4277-7723</span></footer>
    </div>
  );
}