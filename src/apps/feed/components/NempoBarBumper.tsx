import { useRef, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rusaBumper from '@/assets/nempo-bumper/nempo-rusa-bumper-kecil.mp4.asset.json';
import './NempoBarBumper.css';

export const NBB_LOOP_SECONDS = 8;

/** NEMPO bumper: the Sundanese golden-antlered deer mascot walking around the 3D gold NEMPO logo. */
export function NempoBarBumper({ src = rusaBumper.url, title = 'NEMPO' }: { src?: string; title?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const toggle = () => {
    const v = ref.current; if (!v) return;
    if (v.paused) { void v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  const replay = () => { const v = ref.current; if (!v) return; v.currentTime = 0; void v.play(); setPlaying(true); };
  return (
    <section className="nbb-tool" aria-label={`Bumper acara ${title}`}>
      <div className="nbb-controls">
        <Button variant="outline" size="icon" aria-label={playing ? 'Jeda bumper' : 'Putar bumper'} onClick={toggle}>{playing ? <Pause /> : <Play />}</Button>
        <Button variant="outline" size="icon" aria-label="Putar ulang bumper" onClick={replay}><RotateCcw /></Button>
      </div>
      <div className="nbb-stage">
        <video ref={ref} src={src} autoPlay loop muted playsInline className="nbb-video" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label={`Rusa NEMPO dengan judul ${title}`} />
      </div>
    </section>
  );
}
