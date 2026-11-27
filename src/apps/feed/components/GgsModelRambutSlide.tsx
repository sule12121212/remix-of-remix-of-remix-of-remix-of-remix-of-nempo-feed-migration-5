import type { CSSProperties, RefObject } from 'react';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import {
  GGS_MODEL_RAMBUT_COPY,
  GGS_MODEL_RAMBUT_LOOP_SECONDS,
  GGS_MODEL_RAMBUT_STYLE_SECONDS,
  GGS_MODEL_RAMBUT_STYLES,
} from './ggs-model-rambut';
import './GgsModelRambutSlide.css';

const N = GGS_MODEL_RAMBUT_STYLES.length;
const HOLD = 0.76; // share of each style's turn it stays still; the rest crossfades into the next photo
const pct = (v: number) => `${((v / N) * 100).toFixed(3)}%`;
const at = (v: number) => `${((v / N) * 100 + 0.001).toFixed(3)}%`;
const fadeIn = pct(N - (1 - HOLD));
const half = HOLD + (1 - HOLD) / 2;

// Same stacking as GGS Cowok slide 6: lower index on top, the top photo fades out over the next one
// (already opaque underneath) so the salon never washes out mid-change; the first photo fades back in to close the loop.
const keyframes =
  `@keyframes ggpm-name{0%,${pct(HOLD)}{opacity:1;transform:none}${pct(half)},${pct(N - 1 + half)}{opacity:0;transform:translateY(.6cqw)}100%{opacity:1;transform:none}}` +
  `@keyframes ggpm-photo{0%,${pct(HOLD)}{opacity:1}${pct(1)},${pct(N - 1)}{opacity:0}${at(N - 1)},100%{opacity:1}}` +
  `@keyframes ggpm-photo-first{0%,${pct(HOLD)}{opacity:1}${pct(1)},${fadeIn}{opacity:0}100%{opacity:1}}` +
  `@keyframes ggpm-photo-last{0%,${pct(1)}{opacity:1}${at(1)},${pct(N - 1)}{opacity:0}${at(N - 1)},100%{opacity:1}}` +
  `@keyframes ggpm-dot{0%,${pct(HOLD)}{width:4.2cqw;background:var(--ggpm-dot-on)}${pct(1)},${fadeIn}{width:1.3cqw;background:var(--ggpm-dot-off)}100%{width:4.2cqw;background:var(--ggpm-dot-on)}}`;

const photoAnimation = (i: number) => (i === 0 ? 'ggpm-photo-first' : i === N - 1 ? 'ggpm-photo-last' : 'ggpm-photo');
const delay = (i: number) => (i === 0 ? '0s' : `${-(GGS_MODEL_RAMBUT_LOOP_SECONDS - i * GGS_MODEL_RAMBUT_STYLE_SECONDS).toFixed(2)}s`);

const { kicker, script, big, sub, ask } = GGS_MODEL_RAMBUT_COPY;

/** GGS Feed slide 59: one client, ten hairstyles — the face stays her own, only the hair changes. */
export function GgsModelRambutSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggpm-root"
      role="img"
      style={{ '--ggpm-loop': `${GGS_MODEL_RAMBUT_LOOP_SECONDS}s` } as CSSProperties}
      aria-label={`GGS Beauty — ${script} ${big}. ${sub}. ${GGS_MODEL_RAMBUT_STYLES.map((s) => s.name).join(', ')}. ${ask}`}
    >
      <style>{keyframes}</style>
      <div className="ggpm-photos" aria-hidden="true">
        {GGS_MODEL_RAMBUT_STYLES.map((s, i) => (
          <img key={s.name} className="ggpm-photo" src={s.photo} width={1440} height={1920} alt=""
            style={{ animationName: photoAnimation(i), animationDelay: delay(i), zIndex: N - i }} />
        ))}
      </div>
      <span className="ggpm-shade" aria-hidden="true" />

      <section className="ggpm-head" aria-hidden="true">
        <span className="ggpm-kicker">{kicker}</span>
        <h2 className="ggpm-title">
          <span className="ggpm-script">{script}</span>
          <span className="ggpm-big">{big}</span>
        </h2>
        <span className="ggpm-sub">{sub}</span>
      </section>

      <section className="ggpm-menu" aria-hidden="true">
        <div className="ggpm-names">
          {GGS_MODEL_RAMBUT_STYLES.map((s, i) => (
            <span key={s.name} style={{ animationDelay: delay(i) }}>
              <small>{String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}</small>
              {s.name}
            </span>
          ))}
        </div>
        <ul className="ggpm-dots">
          {GGS_MODEL_RAMBUT_STYLES.map((s, i) => (
            <li key={s.name} style={{ animationDelay: delay(i) }} />
          ))}
        </ul>
        <p className="ggpm-ask">{ask}</p>
      </section>

      <img className="ggpm-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" draggable={false} />
    </div>
  );
}
