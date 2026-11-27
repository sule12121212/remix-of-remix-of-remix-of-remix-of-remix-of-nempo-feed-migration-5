/** NEMPO Feed slide 46 — teaser "Coming Soon" Bajidoran & DJ di Good Story Cafe. */
export const NEMPO_BAJIDORAN_SLIDE = 46;

export const nempoBajidoran = {
  marquee: 'Coming Soon',
  kicker: 'Malam Sabtu di Good Story Cafe',
  title: 'Bajidoran',
  partner: 'DJ',
  tagline: ['Kendang jaipong ketemu beat DJ.', 'Satu malam, goyang bareng!'],
  date: { weekday: 'Jumat', day: '20', month: 'November', year: '2026', iso: '2026-11-20' },
  venue: { name: 'Good Story Cafe', address: 'Jl. Sudirman Copong No. 11' },
  info: { label: 'Info & reservasi', number: '08211612930' },
} as const;

const WEEKDAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

/** Indonesian weekday name for an ISO date (UTC, so time zones never shift the day). */
export function weekdayId(iso: string) {
  return WEEKDAYS_ID[new Date(`${iso}T00:00:00Z`).getUTCDay()];
}
