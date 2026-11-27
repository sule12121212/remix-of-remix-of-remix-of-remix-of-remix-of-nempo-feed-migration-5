export const GGS_STORY_PROMOS = [
  { id: 1, name: 'Promo Massage', price: 85000, detail: 'Durasi 90 menit', minutes: 90 },
  { id: 2, name: 'Creambath', price: 80000, detail: 'Rambut segar & wangi' },
  { id: 3, name: 'Nail Art', price: 35000, detail: 'Polos kuku asli' },
  { id: 4, name: 'Polosan kuku palsu', price: 80000, detail: 'Kuku palsu' },
  { id: 5, name: 'Cat Eye kuku biasa', price: 80000, detail: 'Kuku biasa' },
  { id: 6, name: 'Cat Eye kuku palsu', price: 100000, detail: 'Kuku palsu' },
] as const;

export const GGS_HAPPY_PACKAGE = {
  price: 250000,
  massageMinutes: 60,
  scrubMinutes: 30,
  womenFinish: 'Catok',
  menFinish: 'Styling',
} as const;

export const formatStoryPromoPrice = (price: number) => new Intl.NumberFormat('id-ID').format(price);