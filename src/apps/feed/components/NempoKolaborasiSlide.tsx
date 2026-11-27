import type { RefObject } from 'react';
import {
  ArrowRight, ArrowUpRight, Camera, ClipboardList, Coffee, Disc3, Drum, Handshake, Megaphone, Mic, Mountain, Music2, Users,
} from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { NempoHeader } from './KalaMudaRecruitSlide';
import { nempoKolaborasi as K, type KolaborasiIcon } from './nempo-kolaborasi';
import './NempoKolaborasiSlide.css';

const ICONS: Record<KolaborasiIcon, typeof Coffee> = {
  music: Music2, drum: Drum, disc: Disc3, users: Users, clipboard: ClipboardList, mic: Mic, megaphone: Megaphone, camera: Camera,
};
const VENUE_ICONS = { cafe: Coffee, wisata: Mountain } as const;
const CHANNEL_ICONS = { instagram: FaInstagram, tiktok: FaTiktok } as const;
const TILES = ['yellow', 'white', 'white', 'blue'] as const;

function Backdrop() {
  return (
    <div className="nko-bg" aria-hidden="true">
      <span className="nko-grid" />
      <span className="nko-ring nko-ring-a" />
      <span className="nko-ring nko-ring-b" />
      <span className="nko-glow" />
    </div>
  );
}

/**
 * NEMPO Feed slides 55–56 (3:4) in the basic NEMPO blue look of slide 45: an open-collaboration call for
 * cafes and tourist spots. `page="call"` (55) = the call + event ideas, `page="cara"` (56) = benefits, steps, contact.
 */
export function NempoKolaborasiSlide({ page, exportRef }: { page: 'call' | 'cara'; exportRef?: RefObject<HTMLElement | null> }) {
  return page === 'call' ? <CallPage exportRef={exportRef} /> : <CaraPage exportRef={exportRef} />;
}

function CallPage({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { kicker, title, subtitle, venues, ideasLabel, ideas, next } = K.call;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nko-root kmt-root"
      aria-label={`${kicker} ${title.join(' ')}. ${subtitle} ${ideas.map((i) => i.label).join(', ')}.`}
    >
      <Backdrop />
      <NempoHeader badge={K.badge} />

      <div className="nko-hero">
        <span className="nko-kicker"><Megaphone aria-hidden="true" />{kicker}</span>
        <h2 className="nko-title">{title[0]}<br /><em>{title[1]}</em></h2>
        <p className="nko-sub">{subtitle}</p>
      </div>

      <div className="nko-venues" aria-hidden="true">
        {venues.map(({ key, label, note }) => {
          const Icon = VENUE_ICONS[key];
          return (
            <div key={key} className={`nko-venue nko-venue--${key}`}>
              <span className="nko-venue-icon"><Icon /></span>
              <strong>{label}</strong>
              <span>{note}</span>
            </div>
          );
        })}
        <span className="nko-venue-plus"><Handshake /></span>
      </div>

      <div className="nko-bottom">
        <span className="nko-label"><span />{ideasLabel}<span /></span>
        <ol className="nko-tiles">
          {ideas.map((idea, i) => {
            const Icon = ICONS[idea.icon];
            return (
              <li key={idea.label} className={`nko-tile nko-tile--${TILES[i]}`}>
                <span className="nko-tile-icon"><Icon aria-hidden="true" /></span>
                <strong>{idea.label}</strong>
                <span className="nko-tile-desc">{idea.desc}</span>
              </li>
            );
          })}
        </ol>
        <p className="nko-next">{next}<ArrowRight aria-hidden="true" /></p>
      </div>
    </section>
  );
}

function CaraPage({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { kicker, title, benefits, stepsLabel, steps } = K.cara;
  const { whatsapp, channels } = K;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nko-root nko-root--cara kmt-root"
      aria-label={`${kicker} ${title.join(' ')} ${steps.join(', ')}. WhatsApp ${whatsapp.number}`}
    >
      <Backdrop />
      <NempoHeader badge={K.badge} />

      <div className="nko-hero nko-hero--wide">
        <span className="nko-kicker"><Handshake aria-hidden="true" />{kicker}</span>
        <h2 className="nko-title nko-title--cara">{title[0]}<br /><em>{title[1]}</em></h2>
      </div>

      <ul className="nko-benefits">
        {benefits.map((b) => {
          const Icon = ICONS[b.icon];
          return (
            <li key={b.label} className="nko-benefit">
              <span className="nko-benefit-icon"><Icon aria-hidden="true" /></span>
              <strong>{b.label}</strong>
            </li>
          );
        })}
      </ul>

      <div className="nko-bottom">
        <span className="nko-label"><span />{stepsLabel}<span /></span>
        <ol className="nko-steps">
          {steps.map((s, i) => (
            <li key={s} className="nko-step">
              <span className="nko-step-no">{i + 1}</span>
              <strong>{s}</strong>
            </li>
          ))}
        </ol>

        <a className="nko-wa" href={whatsapp.href} target="_blank" rel="noreferrer">
          <span className="nko-wa-icon"><FaWhatsapp aria-hidden="true" /></span>
          <span className="nko-wa-text"><span>{whatsapp.label}</span><strong>{whatsapp.number}</strong></span>
          <span className="nko-wa-go"><ArrowUpRight aria-hidden="true" /></span>
        </a>

        <div className="nko-channels">
          {channels.map(({ key, name, handle, href }) => {
            const Icon = CHANNEL_ICONS[key];
            return (
              <a key={key} className={`nko-channel nko-channel--${key}`} href={href} target="_blank" rel="noreferrer">
                <span className="nko-channel-icon"><Icon aria-hidden="true" /></span>
                <span className="nko-channel-name">{name}</span>
                <strong>{handle}</strong>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
