import type { RefObject } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import feedPoster from '@/assets/nempo-feed-63/nempo-feed-63-bajidoran-dj.png.asset.json';
import storyStage from '@/assets/nempo-feed-65/nempo-feed-65-bajidoran-stage.png.asset.json';
import { nempoBajidoranFest as F } from './nempo-bajidoran-fest';
import './NempoAjakRequestSlide.css';
import './NempoBajidoranFestSlide.css';

/**
 * NEMPO Feed slide 63 (3:4): Bajidoran DJ poster, shown as the owner's finished poster image
 * (the original layer photos are locked in an old project).
 * Slide 65 (9:16 story): the same poster, its own colours extended top and bottom, with a "Hari Ini!"
 * hook above the logos and the contact details rebuilt as larger pills below the venue cards; the same
 * files are downloaded.
 */
export function NempoBajidoranFestSlide({ exportRef, story = false }: { exportRef?: RefObject<HTMLElement | null>; story?: boolean }) {
  const { date, venue, info } = F;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className={`nbx-root kmt-root${story ? ' nbx-story' : ''}`}
      aria-label={`${F.title} — ${F.activities.join(', ')}. ${date.weekday}, ${date.day} ${date.month} ${date.year}, ${F.schedule.map((s) => `${s.label} ${s.value}`).join(' ')} di ${venue.name}, ${venue.address}. ${info.label} ${info.number}`}
    >
      {story ? (
        <>
          {/* Story "hari ini": the owner's poster with its own sky/ground colours extended above and
              below (one continuous design, nothing cropped), a hook in the top band and the contacts
              rebuilt bigger in the bottom band. */}
          <img className="nbx-story-stage" src={storyStage.url} alt="" draggable={false} />
          <p className="nbx-story-hook">
            <span className="nbx-story-kicker">
              {date.weekday}, {date.day} {date.month} {date.year}
            </span>
            <strong>Hari Ini!</strong>
          </p>
          <p className="nbx-story-contacts">
            <span className="nbx-story-pill">
              <FaWhatsapp aria-hidden="true" />
              {info.number}
            </span>
            <span className="nbx-story-pill">
              <FaInstagram aria-hidden="true" />
              <FaTiktok aria-hidden="true" />
              {F.socials}
            </span>
          </p>
        </>
      ) : (
        /* The owner's finished poster (the original layer photos are locked in an old project). */
        <img className="nbx-poster" src={feedPoster.url} alt="" draggable={false} />
      )}
    </section>
  );
}
