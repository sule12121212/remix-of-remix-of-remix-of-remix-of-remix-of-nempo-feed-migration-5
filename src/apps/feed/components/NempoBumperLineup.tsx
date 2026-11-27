import { useEffect, useRef } from 'react';
import bg from '@/assets/nempo-bumper/nempo-bumper-06-bg.jpg';
import mc from '@/assets/nempo-bumper/nempo-bumper-06-mc.png';
import dj from '@/assets/nempo-bumper/nempo-bumper-06-dj.png';
import kendang from '@/assets/nempo-bumper/nempo-bumper-06-kendang.png';
import penari from '@/assets/nempo-bumper/nempo-bumper-06-penari.png';
import { nempoBajidoranFest } from './nempo-bajidoran-fest';
import './NempoBumperLineup.css';

/** Bumper 6 is an 8 second loop like bumpers 4–5. */
export const NBL_LOOP_SECONDS = 8;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeOutBack = (v: number) => {
  const c1 = 1.5;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(v - 1, 3) + c1 * Math.pow(v - 1, 2);
};
const easeInOut = (v: number) => (v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2);

/** Performers in the order they enter, cropped from the owner's slide 63 poster. */
const CARDS = [
  { key: 'mc', src: mc, label: nempoBajidoranFest.mc, tone: 'dark', at: 1.0, from: -1 },
  { key: 'dj', src: dj, label: nempoBajidoranFest.dj, tone: 'dark', at: 1.7, from: 1 },
  { key: 'kendang', src: kendang, label: nempoBajidoranFest.activities[0], tone: 'orange', at: 2.4, from: -1 },
  { key: 'penari', src: penari, label: nempoBajidoranFest.activities[1], tone: 'pink', at: 3.1, from: 1 },
] as const;

/** Everything leaves together at the end so the loop restarts from an empty stage. */
function exitP(t: number) {
  return easeInOut(clamp01((t - 6.9) / 0.8));
}

export function nblCard(t: number, at: number) {
  const p = clamp01((t - at) / 0.7);
  const e = easeOutBack(p);
  const x = exitP(t);
  return { p, scale: (0.6 + 0.4 * e) * (1 - 0.15 * x), opacity: clamp01(p * 2) * (1 - x), offset: 1 - e };
}

export function nblTitle(t: number) {
  const p = clamp01((t - 0.15) / 0.75);
  const x = exitP(t);
  return { scale: (0.5 + 0.5 * easeOutBack(p)) * (1 + 0.02 * Math.sin((2 * Math.PI * t) / 2)), opacity: clamp01(p * 2) * (1 - x) };
}

export default function NempoBumperLineup() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const seek = (t: number) => {
      const root = rootRef.current;
      if (!root) return;
      const title = root.querySelector<HTMLElement>('.nbl-title');
      const tt = nblTitle(t);
      if (title) {
        title.style.transform = `translateX(-50%) rotate(-4deg) scale(${tt.scale})`;
        title.style.opacity = `${tt.opacity}`;
      }
      const foot = root.querySelector<HTMLElement>('.nbl-foot');
      if (foot) {
        const fp = clamp01((t - 3.8) / 0.6) * (1 - exitP(t));
        foot.style.opacity = `${fp}`;
        foot.style.transform = `translateX(-50%) translateY(${(1 - fp) * 40}px)`;
      }
      const bgEl = root.querySelector<HTMLElement>('.nbl-bg');
      if (bgEl) bgEl.style.transform = `scale(${1.06 + 0.04 * Math.sin((2 * Math.PI * t) / NBL_LOOP_SECONDS)})`;
      root.querySelectorAll<HTMLElement>('.nbl-glow').forEach((g, i) => {
        g.style.opacity = `${0.35 + 0.3 * Math.sin((2 * Math.PI * t) / 2 + i * 1.7)}`;
      });
      CARDS.forEach((c) => {
        const el = root.querySelector<HTMLElement>(`.nbl-card-${c.key}`);
        if (!el) return;
        const f = nblCard(t, c.at);
        const bob = 6 * Math.sin((2 * Math.PI * t) / 4 + c.at);
        el.style.opacity = `${f.opacity}`;
        el.style.transform = `translateX(${c.from * f.offset * 260}px) translateY(${bob}px) scale(${f.scale}) rotate(${c.from * -2}deg)`;
        const pill = el.querySelector<HTMLElement>('.nbl-pill');
        if (pill) {
          const pp = easeOutBack(clamp01((t - c.at - 0.35) / 0.5));
          pill.style.transform = `translateX(-50%) scale(${pp})`;
        }
      });
    };
    const w = window as typeof window & { __nblSeek?: (t: number) => void };
    w.__nblSeek = seek;
    seek(0);
    return () => {
      delete w.__nblSeek;
    };
  }, []);

  return (
    <div className="nbl-root" data-nbl-capture ref={rootRef}>
      <div className="nbl-bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="nbl-glow nbl-glow-a" />
      <div className="nbl-glow nbl-glow-b" />
      <div className="nbl-glow nbl-glow-c" />
      <div className="nbl-title">
        <span className="nbl-title-top">Pengisi</span>
        <span className="nbl-title-big">Acara</span>
      </div>
      {CARDS.map((c) => (
        <div key={c.key} className={`nbl-card nbl-card-${c.key}`}>
          <div className="nbl-photo" style={{ backgroundImage: `url(${c.src})` }} />
          {/* MC and DJ Dityar keep the name pills baked into the poster photo */}
          {c.tone === 'dark' ? <span className="sr-only">{c.label}</span> : <div className={`nbl-pill nbl-pill-${c.tone}`}>{c.label}</div>}
        </div>
      ))}
      <div className="nbl-foot">
        {nempoBajidoranFest.title} · {nempoBajidoranFest.date.day} {nempoBajidoranFest.date.month} {nempoBajidoranFest.date.year} · Good Story Cafe
      </div>
    </div>
  );
}
