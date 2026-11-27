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

/** 0 = curtains closed, 1 = curtains fully open. */
function openness(t: number) {
  if (t < 0.4) return 0;
  if (t < 1.7) return easeInOut(clamp01((t - 0.4) / 1.3));
  if (t < 6.3) return 1;
  if (t < 7.6) return 1 - easeInOut(clamp01((t - 6.3) / 1.3));
  return 0;
}

/** Every term is periodic over 8 s (or starts and ends at the same value) so the loop is seamless. */
export function nbtFrame(t: number) {
  const open = openness(t);
  const pulse = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / 2 - Math.PI / 2);
  const phase = (((t % 4) + 4) % 4) / 4;
  return {
    // curtain panels gather towards their outer edges
    k: 1 - 0.94 * open,
    // 1.006 base crop hides the 1 px seam left by the artwork edges
    zoom: 1.006 + 0.018 * (1 - Math.cos((2 * Math.PI * t) / NBT_LOOP_SECONDS)),
    float: 7 * Math.sin((2 * Math.PI * t) / 4),
    opacity: 0.9 + 0.1 * pulse,
    brightness: 1 + 0.16 * pulse,
    glintX: -700 + 1850 * phase,
    glintOpacity: Math.sin(Math.PI * phase) * 0.9,
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
  const glintRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const seek = (t: number) => {
      const f = nbtFrame(t);
      if (stageRef.current) {
        stageRef.current.style.transform = `scale(${f.zoom})`;
      }
      if (lettersRef.current) {
        lettersRef.current.style.transform = `translateY(${f.float}px)`;
        lettersRef.current.style.opacity = `${f.opacity}`;
        lettersRef.current.style.filter = `brightness(${f.brightness})`;
      }
      if (glintRef.current) {
        glintRef.current.style.transform = `translateX(${f.glintX}px)`;
        glintRef.current.style.opacity = `${f.glintOpacity}`;
      }
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
        <div className="nbt-letters" ref={lettersRef} />
        <div className="nbt-glint-wrap">
          <div className="nbt-glint" ref={glintRef} />
        </div>
        <div className="nbt-curt-l" ref={leftRef} />
        <div className="nbt-curt-r" ref={rightRef} />
        <div className="nbt-valance" />
      </div>
    </div>
  );
}
