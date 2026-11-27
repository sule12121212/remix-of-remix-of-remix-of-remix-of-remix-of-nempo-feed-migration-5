import { useEffect, useRef, useState } from 'react';
import { Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** One rendered film supplies both the feed preview and the MP4 download. */
export function GgsFestiveNailsVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    void video.play().catch(() => setPlaying(false));
  }, [src]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };
  const replay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => setPlaying(false));
  };

  return (
    <section className="relative w-full pb-12" aria-label="GGS December Nail Edit — video Natal dan Tahun Baru">
      <div className="absolute bottom-1 right-0 z-10 flex gap-1">
        <Button variant="secondary" size="icon" title={playing ? 'Jeda video' : 'Putar video'} aria-label={playing ? 'Jeda video nail art' : 'Putar video nail art'} onClick={toggle}>{playing ? <Pause /> : <Play />}</Button>
        <Button variant="secondary" size="icon" title="Putar ulang" aria-label="Putar ulang video nail art" onClick={replay}><RotateCcw /></Button>
        <Button variant="secondary" size="icon" title={muted ? 'Nyalakan suara' : 'Matikan suara'} aria-label={muted ? 'Nyalakan suara video nail art' : 'Matikan suara video nail art'} onClick={() => setMuted(value => !value)}>{muted ? <VolumeX /> : <Volume2 />}</Button>
      </div>
      <video ref={videoRef} className="block aspect-[3/4] w-full object-contain" src={src} poster={poster} muted={muted} loop playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} aria-label="Pilihan nail art Natal dan Tahun Baru berganti-ganti" />
      {failed && <p className="absolute inset-x-3 bottom-3 bg-background p-2 text-center text-sm text-foreground">Video belum bisa diputar. Coba buka video di tab baru.</p>}
    </section>
  );
}