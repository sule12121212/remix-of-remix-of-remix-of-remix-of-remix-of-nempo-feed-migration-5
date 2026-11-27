import type { RefObject } from 'react';
import logo from '@/assets/ggs-story-promo-logo.png.asset.json';
import french from '@/assets/ggs-december-french.webp.asset.json';
import cherryRed from '@/assets/ggs-december-cherry-red.webp.asset.json';
import catEye from '@/assets/ggs-december-cat-eye.webp.asset.json';
import pearl from '@/assets/ggs-december-pearl-chrome.webp.asset.json';
import cherry from '@/assets/ggs-december-cherry-art.webp.asset.json';
import marble from '@/assets/ggs-december-marble-gold.webp.asset.json';
import forest from '@/assets/ggs-december-forest-green.webp.asset.json';
import daisy from '@/assets/ggs-december-daisy.webp.asset.json';
import glitter from '@/assets/ggs-december-glitter-tips.webp.asset.json';
import './GgsStoryPromosSlide.css';
import './GgsDecemberNailsSlide.css';

const looks = [
  { name: 'Soft French', photo: french, detail: 'Kuku pendek rounded dengan French tip putih tipis' },
  { name: 'Cherry Red', photo: cherryRed, detail: 'Kuku almond merah ceri mengilap' },
  { name: 'Velvet Cat Eye', photo: catEye, detail: 'Kuku oval champagne dengan kilau magnetik lembut' },
  { name: 'Pearl Chrome', photo: pearl, detail: 'Kuku almond pink dengan lapisan chrome mutiara' },
  { name: 'Sweet Cherry', photo: cherry, detail: 'Kuku squoval pink dengan lukisan ceri mungil' },
  { name: 'Golden Marble', photo: marble, detail: 'Kuku oval marble putih pink dengan serpihan emas' },
  { name: 'Forest Green', photo: forest, detail: 'Kuku pendek hijau dengan garis emas tipis' },
  { name: 'Little Daisy', photo: daisy, detail: 'Kuku oval lilac dengan bunga daisy putih' },
  { name: 'Glitter Tips', photo: glitter, detail: 'Kuku squoval nude dengan glitter perak di ujung' },
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
        <p>Kuku cantik, mood manis sepanjang Desember.</p>
      </div>
      <div className="ggdn-grid">
        {looks.map(look => (
          <figure className="ggdn-look" key={look.name}>
            <div className="ggdn-circle"><img src={look.photo.url} alt={look.detail} /></div>
            <figcaption>{look.name}</figcaption>
          </figure>
        ))}
      </div>
      <p className="ggdn-note">Dari yang simpel sampai playful, kamu pilih yang mana?</p>
      <footer className="ggsp-footer"><span>@ggsbeauty.hair.co</span><strong>BOOKING <em>NOW</em></strong><span>0823-4277-7723</span></footer>
    </div>
  );
}