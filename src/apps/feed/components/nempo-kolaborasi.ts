/**
 * NEMPO Feed slides 55–56 — open collaboration call for cafes and tourist spots, in the basic NEMPO blue
 * look of slide 45. Slide 55 = the call + event ideas, slide 56 = benefits, steps and contact.
 */
import { nempoCs } from './nempo-cs';

export const NEMPO_KOLABORASI_SLIDE = 55;
export const NEMPO_KOLABORASI_CARA_SLIDE = 56;

/** Prebuilt PNGs, captured from the preview at 1080 CSS px × 3. */
export const NKO_EXPORT = { width: 3240, height: 4320 } as const;

export type KolaborasiIcon = 'music' | 'drum' | 'disc' | 'users' | 'clipboard' | 'mic' | 'megaphone' | 'camera';

export const nempoKolaborasi = {
  badge: 'Open Collab',
  call: {
    kicker: 'Calling!',
    title: ['Cafe &', 'Tempat Wisata'],
    subtitle: 'Yuk bikin event bareng NEMPO di tempatmu — kami bantu dari konsep sampai acaranya jalan.',
    venues: [
      { key: 'cafe', label: 'Cafe & Resto', note: 'Nongkrong makin rame' },
      { key: 'wisata', label: 'Tempat Wisata', note: 'Pengunjung makin betah' },
    ],
    ideasLabel: 'Event yang bisa kita bikin',
    ideas: [
      { label: 'Live Musik', desc: 'Akustik & band lokal', icon: 'music' },
      { label: 'Bajidoran', desc: 'Kesenian Sunda', icon: 'drum' },
      { label: 'DJ Night', desc: 'Malam makin seru', icon: 'disc' },
      { label: 'Gathering', desc: 'Komunitas & festival', icon: 'users' },
    ] as ReadonlyArray<{ label: string; desc: string; icon: KolaborasiIcon }>,
    next: 'Geser untuk cara kolaborasi',
  },
  cara: {
    kicker: 'Kenapa bareng NEMPO?',
    title: ['Kamu siapin tempat,', 'kami urus acaranya.'],
    benefits: [
      { label: 'Konsep & rundown', icon: 'clipboard' },
      { label: 'Talent & pengisi acara', icon: 'mic' },
      { label: 'Promosi di sosmed NEMPO', icon: 'megaphone' },
      { label: 'Dokumentasi foto & video', icon: 'camera' },
    ] as ReadonlyArray<{ label: string; icon: KolaborasiIcon }>,
    stepsLabel: 'Cara kolaborasi',
    steps: ['Chat admin NEMPO', 'Atur konsep & jadwal', 'Event jalan!'],
  },
  whatsapp: { label: 'Ajukan kolaborasi via WhatsApp', number: nempoCs.whatsapp.number, href: nempoCs.whatsapp.href },
  channels: nempoCs.channels,
} as const;

/**
 * Slide 56 poster copy — the "cara" content laid out as a movie one-sheet under the shared Nempo Feed header:
 * big metallic title, italic tagline, release line, then a billing block of the benefits, the three steps and
 * the WhatsApp CTA, over a night stage at a cafe / tourist spot with performers and a silhouetted audience.
 */
export const nempoKolaborasiPoster = {
  badge: 'Open Collab',
  title: ['Kamu Siapin', 'Tempat,'],
  tagline: 'Kami Urus Acaranya!',
  release: 'Segera di cafe & tempat wisata',
  creditsLabel: 'NEMPO urus',
  credits: [
    'Konsep & rundown',
    'Talent & pengisi acara',
    'Promosi di sosmed NEMPO',
    'Dokumentasi foto & video',
  ],
  stepsLabel: nempoKolaborasi.cara.stepsLabel,
  steps: nempoKolaborasi.cara.steps,
  cta: `Chat Admin · WA ${nempoKolaborasi.whatsapp.number}`,
} as const satisfies {
  credits: ReadonlyArray<string>;
  steps: ReadonlyArray<string>;
  [key: string]: unknown;
};
