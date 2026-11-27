import { useEffect, useState, type MouseEvent } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

function isAppleTouchDevice() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

/**
 * Download button for a prebuilt MP4. The file is fetched into memory as soon as the slide is
 * shown. On computers a tap saves it through a same-origin blob link; on iPad/iPhone it opens the
 * share sheet ("Simpan Video" / "Simpan ke File").
 *
 * Inside the Lovable preview frame downloads and the share sheet can be blocked silently, so a
 * second link always opens the file itself in a new tab, where it can be saved. That link is a
 * real target="_blank" anchor: a window.open() after an async share rejection loses the tap and
 * gets blocked as a pop-up.
 */
export function PrebuiltVideoDownload({ src, fileName }: { src: string; fileName: string }) {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [shareBlocked, setShareBlocked] = useState(false);
  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | undefined;
    setBlob(null);
    setBlobUrl(null);
    setShareBlocked(false);
    // `no-store` keeps this copy out of the HTTP cache: the <video> on the slide streams the same
    // file, and sharing the cache entry made Chrome abort this fetch (ERR_CACHE_WRITE_FAILURE).
    const load = () => fetch(src, { cache: 'no-store' }).then((response) => {
      if (!response.ok) throw new Error('Video tidak tersedia');
      return response.blob();
    });
    load().catch(() => load()).then((data) => {
      if (cancelled) return;
      const mp4 = new Blob([data], { type: 'video/mp4' });
      objectUrl = URL.createObjectURL(mp4);
      setBlob(mp4);
      setBlobUrl(objectUrl);
    }).catch(() => {});
    return () => {
      cancelled = true;
      const previousUrl = objectUrl;
      if (previousUrl) window.setTimeout(() => URL.revokeObjectURL(previousUrl), 30_000);
    };
  }, [src]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isAppleTouchDevice() || !blob || shareBlocked) return; // plain link download
    const file = new File([blob], fileName, { type: 'video/mp4' });
    if (!navigator.canShare?.({ files: [file] })) return;
    event.preventDefault();
    navigator.share({ files: [file], title: fileName }).catch((error: DOMException) => {
      if (error?.name !== 'AbortError') setShareBlocked(true);
    });
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <Button asChild size="sm">
        <a href={blobUrl ?? src} download={fileName} onClick={handleClick} data-ready={Boolean(blobUrl)}>
          <Download aria-hidden="true" size={16} /> Download video · MP4
        </a>
      </Button>
      <a
        href={src}
        target="_blank"
        rel="noopener"
        className={
          shareBlocked
            ? 'inline-flex items-center gap-1 rounded-full border border-primary px-3 py-1 text-[11px] font-bold text-primary'
            : 'inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground underline underline-offset-2'
        }
      >
        <ExternalLink aria-hidden="true" size={12} />
        {shareBlocked ? 'Ketuk di sini untuk membuka & menyimpan video' : 'Tidak terunduh? Buka video di tab baru'}
      </a>
    </div>
  );
}
