import { useEffect, useRef, useState, type RefObject } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NempoDjSlide({ src, poster, exportRef }: {
  src: string;
  poster: string;
  exportRef?: RefObject<HTMLElement | null>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (preference.matches) { video.pause(); video.currentTime = 0; }
      else void video.play().catch(() => setPlaying(false));
    };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, [src]);
  const play = () => {
    const video = videoRef.current;
    if (video) void video.play().catch(() => setPlaying(false));
  };
  return (
    <div className="w-full max-w-[430px]">
      <div className="mb-3 flex justify-center gap-2">
        <Button size="icon" variant="outline" title={playing ? 'Jeda' : 'Putar'} aria-label={playing ? 'Jeda slide 49' : 'Putar slide 49'} onClick={() => {
          const video = videoRef.current;
          if (!video) return;
          if (video.paused) play(); else video.pause();
        }}>{playing ? <Pause size={16} /> : <Play size={16} />}</Button>
        <Button size="icon" variant="outline" title="Ulangi" aria-label="Ulangi slide 49" onClick={() => {
          const video = videoRef.current;
          if (!video) return;
          video.currentTime = 0;
          play();
        }}><RotateCcw size={16} /></Button>
        <Button size="icon" variant="outline" title={muted ? 'Nyalakan suara' : 'Matikan suara'} aria-label={muted ? 'Nyalakan suara slide 49' : 'Matikan suara slide 49'} onClick={() => setMuted(value => !value)}>{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</Button>
      </div>
      <section ref={exportRef as RefObject<HTMLElement>} className="relative aspect-[3/4] w-full overflow-hidden bg-background" aria-label="NEMPO Feed slide 49 — DJ DITYAR">
        <video ref={videoRef} src={src} poster={poster} className="h-full w-full object-contain" muted={muted} loop playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setFailed(true); setPlaying(false); }} aria-label="Video animasi DJ DITYAR" />
        {failed && <p role="alert" className="absolute inset-x-0 bottom-0 bg-background p-3 text-center text-sm text-destructive">Video belum bisa diputar. Coba muat ulang halaman.</p>}
      </section>
    </div>
  );
}