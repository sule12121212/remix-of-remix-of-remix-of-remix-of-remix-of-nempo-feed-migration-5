import { useEffect, useRef } from 'react';
import plate from '@/assets/nempo-bumper/nempo-bumper-05-plate.png';
import curtain from '@/assets/nempo-bumper/nempo-bumper-05-curtain.png';
import mc from '@/assets/nempo-bumper/nempo-bumper-06-mc.png';
import dj from '@/assets/nempo-bumper/nempo-bumper-06-dj.png';
import kendang from '@/assets/nempo-bumper/nempo-bumper-06-kendang.png';
import penari from '@/assets/nempo-bumper/nempo-bumper-06-penari.png';
import { nempoBajidoranFest } from './nempo-bajidoran-fest';
import './NempoBumperLineup.css';

/** Bumpers 6–7 are 8 second loops like bumpers 4–5. */
export const NBL_LOOP_SECONDS = 8;

export type LineupVariant = 'saduli' | 'djmc';

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeOutBack = (v: number) => {
  const c1 = 1.5;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(v - 1, 3) + c1 * Math.pow(v - 1, 2);
};
const easeInOut = (v: number) => (v < 0.5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2);

/** Same curtain timing as bumper 5: 0 = closed, 1 = open. */
export function nblOpenness(t: number) {
  if (t < 0.4) return 0;
  if (t < 1.7) return easeInOut(clamp01((t - 0.4) / 1.3));
  if (t < 6.3) return 1;
  if (t < 7.6) return 1 - easeInOut(clamp01((t - 6.3) / 1.3));
  return 0;
}

function exitP(t: number) {
  return easeInOut(clamp01((t - 5.9) / 0.6));
}

export function nblCard(t: number, at: number) {
  const p = clamp01((t - at) / 0.7);
  const e = easeOutBack(p);
  const x = exitP(t);
  return { scale: (0.6 + 0.4 * e) * (1 - 0.15 * x), opacity: clamp01(p * 2) * (1 - x), offset: 1 - e };
}

/** Performer cards are cropped from the owner's slide 63 poster; MC/DJ keep the poster's own name pills. */
const VARIANTS = {
  saduli: {
    title: 'Saduli Ragap',
    kicker: 'Pengisi Acara',
    cards: [
      { key: 'kendang', src: kendang, label: nempoBajidoranFest.activities[0], at: 1.3, from: -1 },
      { key: 'penari', src: penari, label: nempoBajidoranFest.activities[1], at: 2.0, from: 1 },
    ],
  },
  djmc: {
    title: `${nempoBajidoranFest.dj} & ${nempoBajidoranFest.mc}`,
    kicker: 'Pengisi Acara',
    cards: [
      { key: 'mc', src: mc, label: null, at: 1.3, from: -1 },
      { key: 'dj', src: dj, label: null, at: 2.0, from: 1 },
    ],
  },
} as const;

export default function NempoBumperLineup({ variant }: { variant: LineupVariant }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const v = VARIANTS[variant];

  useEffect(() => {
    const seek = (t: number) => {
      const root = rootRef.current;
      if (!root) return;
      const open = nblOpenness(t);
      const k = 1 - 0.94 * open;
      const l = root.querySelector<HTMLElement>('.nbl-curt-l');
      const r = root.querySelector<HTMLElement>('.nbl-curt-r');
      if (l) l.style.transform = `scaleX(${k})`;
      if (r) r.style.transform = `scaleX(${k})`;
      const stage = root.querySelector<HTMLElement>('.nbl-stage');
      if (stage) stage.style.transform = `scale(${1.006 + 0.02 * (1 - Math.cos((2 * Math.PI * t) / NBL_LOOP_SECONDS))})`;
      const ring = root.querySelector<HTMLElement>('.nbl-ring');
      if (ring) ring.style.opacity = `${open * (0.5 + 0.4 * Math.sin((2 * Math.PI * t) / 2) ** 2)}`;
      const title = root.querySelector<HTMLElement>('.nbl-title');
      if (title) {
        const p = clamp01((t - 0.9) / 0.7);
        title.style.opacity = `${clamp01(p * 2) * (1 - exitP(t))}`;
        title.style.transform = `translateX(-50%) scale(${(0.5 + 0.5 * easeOutBack(p)) * (1 + 0.015 * Math.sin((2 * Math.PI * t) / 2))})`;
      }
      v.cards.forEach((c) => {
        const el = root.querySelector<HTMLElement>(`.nbl-card-${c.key}`);
        if (!el) return;
        const f = nblCard(t, c.at);
        const bob = 6 * Math.sin((2 * Math.PI * t) / 4 + c.at);
        el.style.opacity = `${f.opacity}`;
        el.style.transform = `translateX(${c.from * f.offset * 300}px) translateY(${bob}px) scale(${f.scale}) rotate(${c.from * -2.5}deg)`;
        const pill = el.querySelector<HTMLElement>('.nbl-pill');
        if (pill) pill.style.transform = `translateX(-50%) scale(${easeOutBack(clamp01((t - c.at - 0.35) / 0.5))})`;
      });
    };
    const w = window as typeof window & { __nblSeek?: (t: number) => void };
    w.__nblSeek = seek;
    seek(0);
    return () => {
      delete w.__nblSeek;
    };
  }, [v]);

  return (
    <div className={`nbl-root nbl-${variant}`} data-nbl-capture ref={rootRef} style={{ '--nbl-curtain': `url(${curtain})` } as React.CSSProperties}>
      <div className="nbl-stage">
        <div className="nbl-plate" style={{ backgroundImage: `url(${plate})` }} />
        <div className="nbl-ring" />
        <div className="nbl-title">
          <span className="nbl-kicker">{v.kicker}</span>
          <span className="nbl-name">{v.title}</span>
        </div>
        {v.cards.map((c) => (
          <div key={c.key} className={`nbl-card nbl-card-${c.key}`}>
            <div className="nbl-photo" style={{ backgroundImage: `url(${c.src})` }} />
            {c.label ? <div className="nbl-pill">{c.label}</div> : null}
          </div>
        ))}
      </div>
      <div className="nbl-curt-l" />
      <div className="nbl-curt-r" />
      <div className="nbl-valance" />
    </div>
  );
}
