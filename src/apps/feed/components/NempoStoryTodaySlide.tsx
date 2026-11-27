import type { RefObject } from 'react';
import gscLogo from '@/assets/good-story-cafe-logo.jpg';
import saduliLogo from '@/assets/saduli-ragap-entertainment-logo-keyed.png';
import bgImage from '@/assets/nempo-feed-slide-50-bg.jpg';
import { nempoStoryAjakan, nempoStoryBajidoran } from './nempo-story-today';
import posterAsset from '@/assets/nempo-feed-63/nempo-feed-63-bajidoran-dj.png.asset.json';
import { STORY_POSTER_SPOTS, stageLightStyle } from './nempo-stage-lights';
import './NempoAjakRequestSlide.css';
import './KalaMudaRecruitSlide.css';
import './NempoStoryTodaySlide.css';

/**
 * NEMPO Story: 9:16 story slide — slide 52's green stage backdrop, the header logos, the owner's
 * finished Bajidoran DJ poster with soft corner spotlights sweeping over it, and the "Hari Ini"
 * date pill under the poster. Static (no animation) so the PNG matches the preview.
 */
export function NempoStoryTodaySlide({
  exportRef,
  variant = 'today',
}: {
  exportRef?: RefObject<HTMLElement | null>;
  /** 'ajakan' is Story slide 03: same stage, with the invitation wording around a smaller poster. */
  variant?: 'today' | 'ajakan';
}) {
  const P = nempoStoryBajidoran;
  const A = nempoStoryAjakan;
  const { headline, venue, act } = P;
  const isAjakan = variant === 'ajakan';
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nar-root nst-root kmt-root${isAjakan ? ' nst-root--ajakan' : ''}`}
      aria-label={
        isAjakan
          ? `${A.kicker} — ${A.headline.join(' ')} — ${A.invite} ${A.venue}`
          : `${headline} — ${venue} — ${act.left} ${act.joiner} ${act.right}`
      }
    >
      <img className="nar-bg nst-bg" src={bgImage} alt="" aria-hidden="true" width={1088} height={1440} draggable={false} />
      <span className="nar-beams nst-backdrop" aria-hidden="true" />
      <span className="nst-glow nst-backdrop" aria-hidden="true" />

      <span className="nar-spots nst-bj-spots" aria-hidden="true">
        {STORY_POSTER_SPOTS.map((l, i) => (
          <span key={i} className={`nar-beam nar-beam--${l.tone}`} style={stageLightStyle(l)} />
        ))}
      </span>
      <span className="nar-lamps nst-bj-lamps" aria-hidden="true">
        {STORY_POSTER_SPOTS.map((l, i) => (
          <span key={i} className={`nar-lamp nar-lamp--${l.tone}`} style={stageLightStyle(l)} />
        ))}
      </span>

      <div className="nst-poster-wrap">
        {isAjakan && (
          <div className="nst-ajak">
            <p className="nst-ajak-kicker">{A.kicker}</p>
            <h2 className="nst-ajak-title">
              {A.headline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
        )}
        <img className="nst-poster" src={posterAsset.url} alt="Poster Bajidoran DJ" width={1440} height={1920} draggable={false} />
        {isAjakan ? (
          <p className="nst-kicker nst-kicker--today nst-kicker--ajak">
            <span>{A.invite}</span>
            <b>{A.venue}</b>
          </p>
        ) : (
          <p className="nst-kicker nst-kicker--today">
            <b>Hari Ini</b>
            <span className="nst-kicker-dot" aria-hidden="true" />
            <span>{P.date.weekday}, {P.date.day} {P.date.month} {P.date.year}</span>
          </p>
        )}
      </div>

      <header className="kmt-header nst-header">
        <span className="kmt-brand">
          <span className="kmt-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="Logo N resmi Nempo" draggable={false} /></span>
          <span className="kmt-name">
            <strong>NEMPO.ID</strong>
            <span><b>×</b> Kala Muda</span>
          </span>
        </span>
        <span className="nar-partners nst-partners">
          <img className="nar-saduli" src={saduliLogo} alt="Saduli Ragap Entertainment" draggable={false} />
          <span className="nar-gsc"><img src={gscLogo} alt="Logo Good Story Cafe" draggable={false} /></span>
        </span>
      </header>
    </section>
  );
}
