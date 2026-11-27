/**
 * NEMPO Feed slides 59–62 — the "Momen Digital" service (memory websites, starting with the class Year Book) in
 * slide 57's bright poster look. Copy follows the Year Book pages of github.com/nempocreative/nempo-web-20
 * (`/year-book` and `/year-book/2026`); names and photos in the web preview are samples, not real students.
 */
import { nempoKolaborasi } from './nempo-kolaborasi';

export const NEMPO_MOMEN_DIGITAL_SLIDES = [59, 60, 61, 62] as const;
export type NempoMomenDigitalSlideNumber = (typeof NEMPO_MOMEN_DIGITAL_SLIDES)[number];

/** Prebuilt PNG per slide, captured from the preview at 1080 CSS px × 3. */
export const NMD_EXPORT = { width: 3240, height: 4320 } as const;

export const nempoMomenDigital = {
  badge: 'Momen Digital',
  cta: `Chat Admin · WA ${nempoKolaborasi.whatsapp.number}`,

  /** Slide 59 — cover */
  cover: {
    title: ['Momen', 'Digital'],
    tagline: 'Kenangan Jadi Satu Link',
    lead: 'Satu konsep, banyak bentuk:',
    kinds: ['Year Book', 'Kelas', 'Geng & Grup', 'Organisasi', 'Event', 'Komunitas', 'Ucapan Spesial'],
  },

  /** Slide 60 — a look at the Year Book website */
  peek: {
    title: ['Intip', 'Web-nya!'],
    tagline: 'Contoh: Year Book Angkatan',
    lead: 'Apa saja yang masuk buku?',
    contents: ['Profil lulusan', 'Galeri momen', 'Linimasa angkatan', 'Pesan guru', 'Dinding pesan', 'Sampul & identitas'],
  },

  /** Slide 61 — interactive features */
  features: {
    title: ['Fiturnya', 'Seru!'],
    tagline: 'Bukan cuma buat dilihat',
    lead: 'Plus fitur interaktif:',
    extras: ['Video perpisahan', 'Voting si paling berkesan', 'Peta mimpi', 'Kartu Story', 'Tebak teman sekelas', 'Kapsul waktu'],
  },

  /** Slide 62 — how to order */
  order: {
    title: ['Cara', 'Pesannya!'],
    tagline: 'Empat langkah sampai jadi',
    steps: [
      { name: 'Konsultasi', note: 'Ceritain kelompok & acaramu' },
      { name: 'Kumpulkan isi', note: 'Foto, cerita & pesan' },
      { name: 'Desain & tinjau', note: 'Revisi bareng sampai pas' },
      { name: 'Cetak & bagikan', note: 'Satu link buat semua' },
    ],
    formats: [
      { name: 'Digital', points: ['Tautan khusus untuk angkatan', 'Foto bisa dibuka ukuran penuh', 'Isinya bisa ditambah setelah cetak'] },
      { name: 'Cetak', points: ['Pilihan ukuran dan jenis kertas', 'Sampul tebal dengan nama angkatan', 'Dibagikan pas hari perpisahan'] },
    ],
  },

  /** Sample Year Book shown inside the device mockups (from the /year-book/2026 demo). */
  web: {
    url: 'nempo.id/year-book/2026',
    kicker: 'Year Book',
    year: '2026',
    title: 'Sejuta Cerita',
    school: 'SMA Nempo Garut',
    intro: 'Tiga tahun, satu angkatan, sejuta cerita yang kita simpan di sini.',
    chapters: ['Sambutan', 'Linimasa', 'Kelas', 'Galeri', 'Pesan'],
    stats: [
      { label: 'Lulusan', value: '108' },
      { label: 'Kelas', value: '3' },
      { label: 'Momen', value: '240' },
      { label: 'Pesan', value: '512' },
    ],
    students: [
      { key: 'nadia', name: 'Nadia Putri', role: 'Ketua Angkatan', kelas: 'XII IPA 1' },
      { key: 'rayhan', name: 'Rayhan Aditya', role: 'Si Paling Strategis', kelas: 'XII IPA 2' },
      { key: 'salsa', name: 'Salsa Nuraini', role: 'Creative Soul', kelas: 'XII IPS 1' },
      { key: 'dimas', name: 'Dimas Pratama', role: 'Si Paling Kocak', kelas: 'XII IPS 1' },
    ],
    profileQuote: 'Kita mungkin punya arah berbeda, tapi pernah tumbuh di halaman yang sama.',
    gallery: { kicker: 'kangen nggak?', title: 'momen-momen kita' },
    wall: {
      title: 'Tanda tangan & pesan',
      notes: ['Jangan lupa reuni ya!', 'Makasih udah jadi temen terbaik', 'Sukses kuliahnya, bestie!', 'Kantin lantai 2 forever'],
    },
    playlist: { title: 'Lagu yang membawa kita pulang', now: 'Lagu Perpisahan Angkatan', time: '1:24' },
    capsule: 'Sampai jumpa, lima tahun lagi.',
  },
} as const;
