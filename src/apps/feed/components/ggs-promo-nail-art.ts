export const ggsPromoNailArt = {
  title: 'Nail Art',
  startLabel: 'start',
  price: 35_000,
} as const;

export function formatNailArtPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price);
}
