import { useEffect, useRef } from 'react';
import plate from '@/assets/nempo-bumper/nempo-bumper-05-plate.png';
import letters from '@/assets/nempo-bumper/nempo-bumper-05-letters.png';
import curtain from '@/assets/nempo-bumper/nempo-bumper-05-curtain.png';
import './NempoBumperTitle.css';

/** Bumper 5 is an 8 second loop, same as the NEMPO deer bumper. */
export const NBT_LOOP_SECONDS = 8;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const easeInOut = (value: number) =>
  value < 0.5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2;
const easeOutBack = (value: number) => {
  const c1 = 1.35;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(value - 1, 3) + c1 * Math.pow(value - 1, 2);
};
const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

interface EmberSpec {
  x: number;
  y0: number;
  speed: number; // loops per 8s (integer for seamless loop)
  size: number;
  sway: number;
  phase: number;
  star: boolean;
}

/** 28 deterministic golden embers/sparkles; integer speeds guarantee seamless 8 s loop. */
const EMBERS: EmberSpec[] = Array.from({ length: 28 }, (_, i) => {
  const s = (i * 137.508) % 360;
  const r1 = (Math.sin(i * 12.9898) * 43758.5453) % 1;
  const r2 = (Math.sin(i * 78.233 + 1.7) * 43758.5453) % 1;
  const f1 = r1 < 0 ? r1 + 1 : r1;
  const f2 = r2 < 0 ? r2 + 1 : r2;
  return {
    x: 8 + f1 * 84,
    y0: f2,
    speed: i % 3 === 0 ? 2 : 1,
    size: i % 5 === 0 ? 14 : 4 + (i % 4) * 2.5,
    sway: 14 + (i % 5) * 7,
    phase: (s * Math.PI) / 180,
    star: i % 5 === 0,
  };
});

/** 0 = curtains closed, 1 = curtains fully open. */
function openness(t: number) {
  if (t < 0.4) return 0;
  if (t < 1.7) return easeInOut(clamp01((t - 0.4) / 1.3));
  if (t < 6.3) return 1;
  if (t < 7.6) return 1 - easeInOut(clamp01((t - 6.3) / 1.3));
  return 0;
}

/** Title reveal/recede envelope synced with curtains. */
function titleEnvelope(t: number) {
  if (t < 0.55) return { scale: 0.84, opacity: 0 };
  if (t < 1.95) {
    const p = clamp01((t - 0.55) / 1.4);
    return { scale: 0.84 + 0.16 * easeOutBack(p), opacity: easeOutCubic(clamp01(p * 1.4)) };
  }
  if (t < 6.2) return { scale: 1, opacity: 1 };
  if (t < 7.45) {
    const p = clamp01((t - 6.2) / 1.25);
    return { scale: 1 - 0.12 * easeInOut(p), opacity: 1 - easeInOut(p) };
  }
  return { scale: 0.88, opacity: 0 };
}

/** Every term is periodic over 8 s (or starts and ends at the same value) so the loop is seamless. */
export function nbtFrame(t: number) {
  const open = openness(t);
  const env = titleEnvelope(t);
  const pulse = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / 2 - Math.PI / 2);
  const phase = (((t % 2.6666667) + 2.6666667) % 2.6666667) / 2.6666667;
  const phase2 = ((((t + 1.3333333) % 2.6666667) + 2.6666667) % 2.6666667) / 2.6666667;
  const burstP = clamp01((t - 0.85) / 1.35);
  const burstScale = 0.45 + 1.15 * easeOutCubic(burstP);
  const burstOpacity = t > 0.85 && t < 2.2 ? Math.sin(Math.PI * burstP) * 0.85 : 0;
  const ringPulseP = (((t % 2) + 2) % 2) / 2;
  return {
    // curtain panels gather towards their outer edges
    k: 1 - 0.94 * open,
    // 1.006 base crop hides the 1 px seam left by the artwork edges
    zoom: 1.006 + 0.022 * (1 - Math.cos((2 * Math.PI * t) / NBT_LOOP_SECONDS)),
    float: 9 * Math.sin((2 * Math.PI * t) / 4),
    titleScale: env.scale * (1 + 0.016 * Math.sin((2 * Math.PI * t) / 4)),
    opacity: env.opacity * (0.94 + 0.06 * pulse),
    brightness: 1.02 + 0.2 * pulse,
    glowBlur: 18 + 16 * pulse,
    glintX: -700 + 1850 * phase,
    glintOpacity: Math.sin(Math.PI * phase) * 0.95 * env.opacity,
    glint2X: -620 + 1750 * phase2,
    glint2Opacity: Math.sin(Math.PI * phase2) * 0.65 * env.opacity,
    mandalaRotOuter: (t / NBT_LOOP_SECONDS) * 90,
    mandalaRotInner: -(t / NBT_LOOP_SECONDS) * 180,
    mandalaScale: 0.72 + 0.28 * open * (1 + 0.025 * pulse),
    mandalaOpacity: open * (0.58 + 0.18 * pulse),
    frameOpacity: clamp01((open - 0.15) / 0.85),
    crestScaleX: easeOutCubic(clamp01((open - 0.1) / 0.9)),
    beamLeftDeg: -22 + 12 * Math.sin((2 * Math.PI * t) / NBT_LOOP_SECONDS),
    beamRightDeg: 22 - 12 * Math.sin((2 * Math.PI * t) / NBT_LOOP_SECONDS),
    beamOpacity: open * (0.34 + 0.14 * pulse),
    burstScale,
    burstOpacity,
    ringRippleScale: 0.75 + 0.55 * easeOutCubic(ringPulseP),
    ringRippleOpacity: open * Math.sin(Math.PI * ringPulseP) * 0.45,
    open,
  };
}

/**
 * Bumper 5 capture view: the gold "BAJIDORAN DJ" lettering alone (no deer) over the
 * night stage, opened and closed by the same gold curtains as bumper 4.
 * Rendered only for the `?nbt=css` recording pass; the app itself plays the MP4.
 */
export default function NempoBumperTitle() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const lettersRef = useRef<HTMLDivElement | null>(null);
  const glintWrapRef = useRef<HTMLDivElement | null>(null);
  const glintRef = useRef<HTMLDivElement | null>(null);
  const glint2Ref = useRef<HTMLDivElement | null>(null);
  const mandalaOuterRef = useRef<SVGSVGElement | null>(null);
  const mandalaInnerRef = useRef<SVGSVGElement | null>(null);
  const burstRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const crestRef = useRef<HTMLDivElement | null>(null);
  const organizerRef = useRef<HTMLDivElement | null>(null);
  const beamLeftRef = useRef<HTMLDivElement | null>(null);
  const beamRightRef = useRef<HTMLDivElement | null>(null);
  const ringRippleRef = useRef<HTMLDivElement | null>(null);
  const embersRef = useRef<(HTMLDivElement | null)[]>([]);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const seek = (t: number) => {
      const f = nbtFrame(t);
      if (stageRef.current) {
        stageRef.current.style.transform = `scale(${f.zoom})`;
      }
      const titleTf = `translateY(${f.float}px) scale(${f.titleScale})`;
      if (lettersRef.current) {
        lettersRef.current.style.transform = titleTf;
        lettersRef.current.style.opacity = `${f.opacity}`;
        lettersRef.current.style.filter = `brightness(${f.brightness}) drop-shadow(0 0 ${f.glowBlur}px rgba(255, 210, 96, 0.55))`;
      }
      if (glintWrapRef.current) {
        glintWrapRef.current.style.transform = titleTf;
      }
      if (glintRef.current) {
        glintRef.current.style.transform = `translateX(${f.glintX}px)`;
        glintRef.current.style.opacity = `${f.glintOpacity}`;
      }
      if (glint2Ref.current) {
        glint2Ref.current.style.transform = `translateX(${f.glint2X}px)`;
        glint2Ref.current.style.opacity = `${f.glint2Opacity}`;
      }
      if (mandalaOuterRef.current) {
        mandalaOuterRef.current.style.transform = `translate(-50%, -50%) scale(${f.mandalaScale}) rotate(${f.mandalaRotOuter}deg)`;
        mandalaOuterRef.current.style.opacity = `${f.mandalaOpacity}`;
      }
      if (mandalaInnerRef.current) {
        mandalaInnerRef.current.style.transform = `translate(-50%, -50%) scale(${f.mandalaScale}) rotate(${f.mandalaRotInner}deg)`;
        mandalaInnerRef.current.style.opacity = `${f.mandalaOpacity * 0.9}`;
      }
      if (burstRef.current) {
        burstRef.current.style.transform = `translate(-50%, -50%) scale(${f.burstScale})`;
        burstRef.current.style.opacity = `${f.burstOpacity}`;
      }
      if (frameRef.current) {
        frameRef.current.style.opacity = `${f.frameOpacity}`;
      }
      if (crestRef.current) {
        crestRef.current.style.transform = `translateX(-50%) scaleX(${f.crestScaleX})`;
        crestRef.current.style.opacity = `${f.frameOpacity}`;
      }
      if (organizerRef.current) {
        organizerRef.current.style.opacity = `${f.opacity}`;
        organizerRef.current.style.transform = `translateX(-50%) translateY(${f.float * 0.5}px)`;
      }
      if (beamLeftRef.current) {
        beamLeftRef.current.style.transform = `rotate(${f.beamLeftDeg}deg)`;
        beamLeftRef.current.style.opacity = `${f.beamOpacity}`;
      }
      if (beamRightRef.current) {
        beamRightRef.current.style.transform = `rotate(${f.beamRightDeg}deg)`;
        beamRightRef.current.style.opacity = `${f.beamOpacity}`;
      }
      if (ringRippleRef.current) {
        ringRippleRef.current.style.transform = `translate(-50%, -50%) scale(${f.ringRippleScale})`;
        ringRippleRef.current.style.opacity = `${f.ringRippleOpacity}`;
      }
      const u = (((t % NBT_LOOP_SECONDS) + NBT_LOOP_SECONDS) % NBT_LOOP_SECONDS) / NBT_LOOP_SECONDS;
      EMBERS.forEach((e, idx) => {
        const el = embersRef.current[idx];
        if (!el) return;
        const progress = (e.y0 + u * e.speed) % 1;
        const yPct = 94 - progress * 82;
        const dx = Math.sin(u * Math.PI * 2 * e.speed + e.phase) * e.sway;
        const edgeFade = Math.sin(Math.PI * progress);
        const twinkle = 0.55 + 0.45 * Math.sin(u * Math.PI * 4 + e.phase * 2);
        el.style.left = `${e.x}%`;
        el.style.top = `${yPct}%`;
        el.style.transform = `translate3d(${dx}px, 0, 0) scale(${0.7 + 0.45 * twinkle})`;
        el.style.opacity = `${f.open * edgeFade * twinkle * 0.92}`;
      });
      const gather = `scaleX(${f.k})`;
      if (leftRef.current) leftRef.current.style.transform = gather;
      if (rightRef.current) rightRef.current.style.transform = gather;
    };
    seek(0);
    const w = window as typeof window & { __nbtSeek?: (t: number) => void };
    w.__nbtSeek = seek;
    return () => {
      delete w.__nbtSeek;
    };
  }, []);

  const art = {
    '--nbt-plate': `url(${plate})`,
    '--nbt-letters': `url(${letters})`,
    '--nbt-curtain': `url(${curtain})`,
  } as React.CSSProperties;

  return (
    <div className="nbt-root" data-nbt-capture style={art}>
      <div className="nbt-stage" ref={stageRef}>
        <div className="nbt-plate" />

        {/* Sweeping gold stage light beams */}
        <div className="nbt-beam nbt-beam-l" ref={beamLeftRef} />
        <div className="nbt-beam nbt-beam-r" ref={beamRightRef} />

        {/* Glowing floor ring energy ripple */}
        <div className="nbt-ring-ripple" ref={ringRippleRef} />

        {/* Rotating ornamental gold mandala halo behind title */}
        <svg className="nbt-mandala nbt-mandala-outer" ref={mandalaOuterRef} viewBox="0 0 600 600" aria-hidden="true">
          <defs>
            <linearGradient id="nbtGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff4c4" />
              <stop offset="50%" stopColor="#f5be48" />
              <stop offset="100%" stopColor="#b87814" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="276" fill="none" stroke="url(#nbtGoldGrad)" strokeWidth="1.6" strokeDasharray="8 6" />
          <circle cx="300" cy="300" r="258" fill="none" stroke="url(#nbtGoldGrad)" strokeWidth="2.4" />
          <circle cx="300" cy="300" r="236" fill="none" stroke="url(#nbtGoldGrad)" strokeWidth="1.2" opacity="0.7" />
          {Array.from({ length: 24 }, (_, i) => {
            const a = i * 15;
            return (
              <g key={i} transform={`rotate(${a} 300 300)`}>
                <path d="M300 26 L309 50 L300 62 L291 50 Z" fill="url(#nbtGoldGrad)" opacity={i % 2 === 0 ? 0.95 : 0.45} />
                <line x1="300" y1="68" x2="300" y2="96" stroke="url(#nbtGoldGrad)" strokeWidth="1.4" opacity="0.65" />
              </g>
            );
          })}
        </svg>

        <svg className="nbt-mandala nbt-mandala-inner" ref={mandalaInnerRef} viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="196" fill="none" stroke="#ffd97d" strokeWidth="1.8" strokeDasharray="3 9" />
          <circle cx="300" cy="300" r="174" fill="none" stroke="#f5be48" strokeWidth="1.2" opacity="0.75" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = i * 30;
            return (
              <g key={i} transform={`rotate(${a} 300 300)`}>
                <path d="M300 106 Q314 134 300 156 Q286 134 300 106 Z" fill="none" stroke="#ffe59e" strokeWidth="1.6" />
                <circle cx="300" cy="100" r="3.2" fill="#fff3c4" />
              </g>
            );
          })}
        </svg>

        {/* Reveal shockwave light burst */}
        <div className="nbt-burst" ref={burstRef} />

        {/* Hero gold lettering + dual specular glint */}
        <div className="nbt-letters" ref={lettersRef} />
        <div className="nbt-glint-wrap" ref={glintWrapRef}>
          <div className="nbt-glint" ref={glintRef} />
          <div className="nbt-glint nbt-glint-sharp" ref={glint2Ref} />
        </div>

        <div className="nbt-organizer" ref={organizerRef}>
          <span>Organized by</span> NEMPO.id
        </div>
        {/* Ornamental gold crest divider below title */}
        <div className="nbt-crest" ref={crestRef} aria-hidden="true">
          <svg viewBox="0 0 680 44" width="680" height="44">
            <defs>
              <linearGradient id="nbtCrestLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f5be48" stopOpacity="0" />
                <stop offset="30%" stopColor="#ffe49e" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#fff8dc" stopOpacity="1" />
                <stop offset="70%" stopColor="#ffe49e" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#f5be48" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="20" y1="22" x2="296" y2="22" stroke="url(#nbtCrestLine)" strokeWidth="2.4" />
            <line x1="384" y1="22" x2="660" y2="22" stroke="url(#nbtCrestLine)" strokeWidth="2.4" />
            <path d="M340 5 L358 22 L340 39 L322 22 Z" fill="#ffe7a3" stroke="#fff9e2" strokeWidth="1.5" />
            <path d="M312 22 L322 14 L316 22 L322 30 Z" fill="#f5be48" />
            <path d="M368 22 L358 14 L364 22 L358 30 Z" fill="#f5be48" />
            <circle cx="340" cy="22" r="4" fill="#fffdf0" />
          </svg>
        </div>

        {/* Broadcast luxury corner filigree frame */}
        <div className="nbt-frame" ref={frameRef} aria-hidden="true">
          {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
            <svg key={pos} className={`nbt-corner nbt-corner-${pos}`} viewBox="0 0 140 140">
              <path d="M10 130 L10 26 Q10 10 26 10 L130 10" fill="none" stroke="#ffd97d" strokeWidth="2.6" />
              <path d="M22 112 L22 34 Q22 22 34 22 L112 22" fill="none" stroke="#f5be48" strokeWidth="1.3" opacity="0.8" />
              <path d="M10 10 L36 36" stroke="#fff3c4" strokeWidth="1.5" opacity="0.7" />
              <path d="M26 26 L36 16 L46 26 L36 36 Z" fill="#ffe6a0" />
              <circle cx="10" cy="130" r="3" fill="#ffe6a0" />
              <circle cx="130" cy="10" r="3" fill="#ffe6a0" />
            </svg>
          ))}
        </div>

        {/* Rising golden embers & 4-point diamond sparkles */}
        <div className="nbt-embers" aria-hidden="true">
          {EMBERS.map((e, idx) => (
            <div
              key={idx}
              ref={(el) => {
                embersRef.current[idx] = el;
              }}
              className={e.star ? 'nbt-ember nbt-ember-star' : 'nbt-ember'}
              style={{ width: e.size, height: e.size }}
            />
          ))}
        </div>

        <div className="nbt-curt-l" ref={leftRef} />
        <div className="nbt-curt-r" ref={rightRef} />
        <div className="nbt-valance" />
      </div>
    </div>
  );
}
