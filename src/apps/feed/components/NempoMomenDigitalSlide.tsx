import type { ReactNode, RefObject } from 'react';
import { Heart, Link2, Lock, Music2, Pause, SkipForward } from 'lucide-react';
import bgGraduation from '@/assets/momen-digital/momen-digital-latar-kelulusan.webp.asset.json';
import bgClass from '@/assets/momen-digital/momen-digital-latar-kelas-tanpa-bintang.webp.asset.json';
import titleMomen from '@/assets/momen-digital/momen-digital-judul-momen-digital-tanpa-bintang.webp.asset.json';
import titlePeek from '@/assets/momen-digital/momen-digital-judul-intip-web-tanpa-bintang.webp.asset.json';
import titleFeatures from '@/assets/momen-digital/momen-digital-judul-fitur-seru-tanpa-bintang.webp.asset.json';
import titleOrder from '@/assets/momen-digital/momen-digital-judul-cara-pesan-tanpa-bintang.webp.asset.json';
import classPhoto from '@/assets/momen-digital/momen-digital-foto-angkatan.webp.asset.json';
import nadia from '@/assets/momen-digital/momen-digital-siswa-nadia.webp.asset.json';
import rayhan from '@/assets/momen-digital/momen-digital-siswa-rayhan.webp.asset.json';
import salsa from '@/assets/momen-digital/momen-digital-siswa-salsa.webp.asset.json';
import dimas from '@/assets/momen-digital/momen-digital-siswa-dimas.webp.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoMomenDigital as M, type NempoMomenDigitalSlideNumber } from './nempo-momen-digital';
import './NempoMomenDigitalSlide.css';

const W = M.web;
const PHOTOS: Record<string, string> = { nadia: nadia.url, rayhan: rayhan.url, salsa: salsa.url, dimas: dimas.url };

type ExportRef = RefObject<HTMLElement | null> | undefined;

const BG_ALT = {
  graduation:
    'Ilustrasi 3D lucu siswa SMA berseragam putih abu merayakan kelulusan di depan sekolah: selfie bareng, topi toga dilempar, pesawat kertas, bendera warna-warni dan maskot burung hantu berkacamata.',
  class:
    'Ilustrasi 3D lucu siswa SMA berseragam putih abu berkerumun di kelas melihat laptop dan ponsel sambil tertawa, papan tulis penuh coretan hati dan foto polaroid.',
} as const;

/** Slide 57's poster shell: artwork with its own sky, shared header, AI-lettered white title, sticker, tilted line, footer. */
function Shell({
  exportRef, variant, bg, title, titleWords, tagline, label, children,
}: {
  exportRef: ExportRef;
  variant: string;
  bg: keyof typeof BG_ALT;
  title: string;
  titleWords: readonly string[];
  tagline: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section ref={exportRef as RefObject<HTMLElement>} className={`nmd-root kmt-root nmd-${variant}`} aria-label={label}>
      <img className="nmd-photo" src={bg === 'graduation' ? bgGraduation.url : bgClass.url} alt={BG_ALT[bg]} draggable={false} />
      <NempoHeader badge={M.badge} />
      <h2 className="nmd-title">
        <img className="nmd-title-art" src={title} alt="" draggable={false} />
        <span className="nmd-sr">{titleWords.join(' ')}</span>
      </h2>
      <p className="nmd-tagline"><Link2 aria-hidden="true" />{tagline}</p>
      {children}
      <NempoFooter />
    </section>
  );
}

function UrlBar() {
  return (
    <div className="nmd-url"><Lock aria-hidden="true" />{W.url}</div>
  );
}

function Phone({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`nmd-phone ${className}`} aria-hidden="true">
      <div className="nmd-phone-screen">
        <span className="nmd-notch" />
        {children}
      </div>
    </div>
  );
}

/** Year Book cover screen (navy & gold), as on /year-book/2026. */
function CoverScreen() {
  return (
    <div className="nmd-cover">
      <UrlBar />
      <p className="nmd-cover-kicker">{W.kicker}</p>
      <p className="nmd-cover-year">{W.year}</p>
      <p className="nmd-cover-title">{W.title}</p>
      <p className="nmd-cover-school">{W.school}</p>
      <figure className="nmd-polaroid">
        <img src={classPhoto.url} alt="" draggable={false} />
        <figcaption>foto bareng satu angkatan ♡</figcaption>
      </figure>
      <p className="nmd-cover-intro">{W.intro}</p>
      <MiniPlayer />
    </div>
  );
}

function MiniPlayer() {
  return (
    <div className="nmd-player">
      <span className="nmd-player-icon"><Music2 /></span>
      <span className="nmd-player-text"><b>{W.playlist.now}</b><i /></span>
      <Pause className="nmd-player-btn" />
    </div>
  );
}

export function NempoMomenDigitalCoverSlide({ exportRef }: { exportRef?: ExportRef }) {
  const C = M.cover;
  return (
    <Shell
      exportRef={exportRef}
      variant="cover"
      bg="graduation"
      title={titleMomen.url}
      titleWords={C.title}
      tagline={C.tagline}
      label={`${C.title.join(' ')}: ${C.tagline}. ${C.lead} ${C.kinds.join(', ')}. ${M.cta}`}
    >
      <Phone className="nmd-phone-cover"><CoverScreen /></Phone>
      <div className="nmd-card nmd-card-cover">
        <p className="nmd-lead">{C.lead}</p>
        <ul className="nmd-chips">
          {C.kinds.map((k) => <li key={k}>{k}</li>)}
        </ul>
        <p className="nmd-cta">{M.cta}</p>
      </div>
    </Shell>
  );
}

/** Desktop Year Book page inside a laptop. */
function LaptopPage() {
  return (
    <div className="nmd-site">
      <div className="nmd-browser">
        <span className="nmd-dots"><i /><i /><i /></span>
        <UrlBar />
      </div>
      <nav className="nmd-site-nav">
        <b>Year Book <em>{W.year}</em></b>
        <span>{W.chapters.map((c) => <i key={c}>{c}</i>)}</span>
      </nav>
      <div className="nmd-site-hero">
        <div className="nmd-site-cover">
          <p className="nmd-cover-kicker">{W.kicker}</p>
          <p className="nmd-cover-year">{W.year}</p>
          <p className="nmd-cover-title">{W.title}</p>
          <p className="nmd-cover-school">{W.school}</p>
          <p className="nmd-site-intro">{W.intro}</p>
        </div>
        <figure className="nmd-polaroid nmd-polaroid-wide">
          <img src={classPhoto.url} alt="" draggable={false} />
          <figcaption>foto bareng satu angkatan ♡</figcaption>
        </figure>
      </div>
      <ul className="nmd-stats">
        {W.stats.map((s) => <li key={s.label}><b>{s.value}</b>{s.label}</li>)}
      </ul>
    </div>
  );
}

function ProfileScreen() {
  const s = W.students[0];
  return (
    <div className="nmd-profile">
      <UrlBar />
      <p className="nmd-profile-class">{s.kelas}</p>
      <figure className="nmd-taped">
        <img src={PHOTOS[s.key]} alt="" draggable={false} />
      </figure>
      <p className="nmd-profile-name">{s.name}</p>
      <p className="nmd-profile-role">{s.role}</p>
      <p className="nmd-profile-quote">“{W.profileQuote}”</p>
      <ul className="nmd-profile-tags"><li>Basket</li><li>Fotografi</li><li>Kedokteran</li></ul>
      <p className="nmd-profile-ig">@nadiaputri</p>
    </div>
  );
}

export function NempoMomenDigitalPeekSlide({ exportRef }: { exportRef?: ExportRef }) {
  const P = M.peek;
  return (
    <Shell
      exportRef={exportRef}
      variant="peek"
      bg="class"
      title={titlePeek.url}
      titleWords={P.title}
      tagline={P.tagline}
      label={`${P.title.join(' ')} ${P.tagline}. Gambaran web Year Book ${W.title}, ${W.school}. ${P.lead} ${P.contents.join(', ')}.`}
    >
      <div className="nmd-laptop" aria-hidden="true">
        <div className="nmd-laptop-screen"><LaptopPage /></div>
        <div className="nmd-laptop-base" />
      </div>
      <Phone className="nmd-phone-peek"><ProfileScreen /></Phone>
      <div className="nmd-card nmd-card-peek">
        <p className="nmd-lead">{P.lead}</p>
        <ol className="nmd-numbered">
          {P.contents.map((c, i) => <li key={c}><span>{i + 1}</span>{c}</li>)}
        </ol>
      </div>
    </Shell>
  );
}

function GalleryScreen() {
  const shots = [classPhoto.url, PHOTOS.salsa, PHOTOS.rayhan, PHOTOS.dimas];
  return (
    <div className="nmd-feature-screen">
      <UrlBar />
      <p className="nmd-hand">{W.gallery.kicker}</p>
      <p className="nmd-screen-title">{W.gallery.title}</p>
      <ul className="nmd-masonry">
        {shots.map((src, i) => (
          <li key={i}><img src={src} alt="" draggable={false} /></li>
        ))}
      </ul>
    </div>
  );
}

function WallScreen() {
  return (
    <div className="nmd-feature-screen">
      <UrlBar />
      <p className="nmd-hand">tulis kenanganmu</p>
      <p className="nmd-screen-title">{W.wall.title}</p>
      <ul className="nmd-notes">
        {W.wall.notes.map((n, i) => (
          <li key={n}>
            <span>{n}</span>
            <b>— {W.students[i]?.name.split(' ')[0]}</b>
          </li>
        ))}
      </ul>
      <p className="nmd-likes"><Heart aria-hidden="true" />{W.stats[3]?.value} pesan</p>
    </div>
  );
}

function PlaylistScreen() {
  const songs = ['Lagu Perpisahan Angkatan', 'Kenangan di Kantin'];
  return (
    <div className="nmd-feature-screen nmd-feature-dark">
      <UrlBar />
      <p className="nmd-hand">putar bareng</p>
      <p className="nmd-screen-title">{W.playlist.title}</p>
      <div className="nmd-disc"><img src={classPhoto.url} alt="" draggable={false} /></div>
      <div className="nmd-progress"><i /></div>
      <div className="nmd-controls"><span>{W.playlist.time}</span><Pause /><SkipForward /></div>
      <ul className="nmd-songs">{songs.map((s, i) => <li key={s} className={i === 0 ? 'is-on' : ''}><Music2 />{s}</li>)}</ul>
    </div>
  );
}

export function NempoMomenDigitalFeaturesSlide({ exportRef }: { exportRef?: ExportRef }) {
  const F = M.features;
  return (
    <Shell
      exportRef={exportRef}
      variant="features"
      bg="class"
      title={titleFeatures.url}
      titleWords={F.title}
      tagline={F.tagline}
      label={`${F.title.join(' ')} ${F.tagline}. Galeri ${W.gallery.title}, ${W.wall.title}, playlist ${W.playlist.title}. ${F.lead} ${F.extras.join(', ')}.`}
    >
      <Phone className="nmd-phone-fan nmd-phone-left"><GalleryScreen /></Phone>
      <Phone className="nmd-phone-fan nmd-phone-right"><PlaylistScreen /></Phone>
      <Phone className="nmd-phone-fan nmd-phone-mid"><WallScreen /></Phone>
      <div className="nmd-card nmd-card-features">
        <p className="nmd-lead">{F.lead}</p>
        <ul className="nmd-chips nmd-chips-3">
          {F.extras.map((k) => <li key={k}>{k}</li>)}
        </ul>
      </div>
    </Shell>
  );
}

export function NempoMomenDigitalOrderSlide({ exportRef }: { exportRef?: ExportRef }) {
  const O = M.order;
  return (
    <Shell
      exportRef={exportRef}
      variant="order"
      bg="graduation"
      title={titleOrder.url}
      titleWords={O.title}
      tagline={O.tagline}
      label={`${O.title.join(' ')} ${O.steps.map((s, i) => `${i + 1}. ${s.name}`).join(', ')}. ${O.formats.map((f) => `${f.name}: ${f.points.join(', ')}`).join('. ')}. ${M.cta}`}
    >
      <ol className="nmd-steps">
        {O.steps.map((s, i) => (
          <li key={s.name}>
            <span>{i + 1}</span>
            <b>{s.name}</b>
            <em>{s.note}</em>
          </li>
        ))}
      </ol>
      <div className="nmd-formats">
        {O.formats.map((f) => (
          <div key={f.name} className="nmd-format">
            <p>{f.name}</p>
            <ul>{f.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="nmd-order-cta">{M.cta}</p>
    </Shell>
  );
}

export function NempoMomenDigitalSlide({ slide, exportRef }: { slide: NempoMomenDigitalSlideNumber; exportRef?: ExportRef }) {
  if (slide === 60) return <NempoMomenDigitalPeekSlide exportRef={exportRef} />;
  if (slide === 61) return <NempoMomenDigitalFeaturesSlide exportRef={exportRef} />;
  if (slide === 62) return <NempoMomenDigitalOrderSlide exportRef={exportRef} />;
  return <NempoMomenDigitalCoverSlide exportRef={exportRef} />;
}
