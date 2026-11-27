export const ggsPromoPijat = {
  title: 'Promo Pijat',
  price: 85_000,
} as const;

export function formatPijatPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price);
}