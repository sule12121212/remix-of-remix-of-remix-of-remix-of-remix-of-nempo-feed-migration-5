import { useEffect, useState, type RefObject } from 'react';
import photoAsset from '@/assets/ggs-feed-50-himbauan-koran.jpg.asset.json';
import storyOverlay from '@/assets/ggs-story-header-footer.png.asset.json';
import { GGS_MALMING, GGS_MALMING_TEXT } from './ggs-malming-garut';
import './GgsStoryHimbauanSlide.css';

/**
 * GGS Story slide 06 (9:16): story version of GGS Feed slide 50 "Himbauan untuk warga Garut" — same photo
 * (anchored to the bottom, its blush backdrop faded into the extra story height), same copy and tickets.
 * `?ggsth=plain` drops the overlay so the 3× PNG can composite a Lanczos-upscaled overlay afterwards.
 */
export function GgsStoryHimbauanSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const [frame, setFrame] = useState(true);
  useEffect(() => {
    setFrame(new URLSearchParams(window.location.search).get('ggsth') !== 'plain');
  }, []);
  const m = GGS_MALMING;
  return (
    <main
      ref={exportRef as RefObject<HTMLElement | null>}
      className="ggsth-root"
      aria-label={`GGS Beauty — Story slide 06, ${GGS_MALMING_TEXT}. ${m.body} ${m.deal.label} ${m.deal.value}. ${m.closer}`}
    >
      <img className="ggsth-photo" src={photoAsset.url} alt="" aria-hidden="true" width={1440} height={1920} />
      <span className="ggsth-shade" aria-hidden="true" />

      <section className="ggsth-head" aria-hidden="true">
        <p className="ggsth-kicker">{m.kicker}</p>
        <h2 className="ggsth-title">{m.title}</h2>
        <span className="ggsth-rule" />
      </section>

      {m.tickets.map((t, i) => (
        <p key={t.stub} className={`ggsth-ticket ggsth-ticket--${i === 0 ? 'left' : 'right'}`} aria-hidden="true">
          <span className="ggsth-ticket-text">{t.text}</span>
          <span className="ggsth-ticket-stub">{t.stub}</span>
        </p>
      ))}

      <article className="ggsth-paper" aria-hidden="true">
        <p className="ggsth-mast">
          <b>{m.masthead.name}</b>
          <span>{m.masthead.edition}</span>
        </p>
        <h3 className="ggsth-headline">{m.headline}</h3>
        <p className="ggsth-body">{m.body}</p>
        <p className="ggsth-deal">
          <span>{m.deal.label}</span>
          <b>{m.deal.value}</b>
        </p>
        <p className="ggsth-closer">{m.closer}</p>
      </article>

      {frame ? <img className="ggsth-overlay" src={storyOverlay.url} alt="" aria-hidden="true" draggable={false} /> : null}
    </main>
  );
}
