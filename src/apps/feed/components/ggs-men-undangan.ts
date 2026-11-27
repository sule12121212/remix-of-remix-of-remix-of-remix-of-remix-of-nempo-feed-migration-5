/** Prices apply to this Saturday-night invitation, not older promos. */
export const GGS_MEN_UNDANGAN = {
  title: 'Undangan',
  guest: 'Halo, Kakak!',
  body: ['Mau dinner, main, atau nongkrong malming ini?', 'Rapihin rambut dulu di GGS, biar makin pede.'],
  promos: [
    { service: 'Perming', price: 175000 },
    { service: 'Colouring', price: 225000 },
  ],
  closer: 'Rambut on point, malming makin asik.',
  cta: 'Balas chat ini buat booking',
} as const;

export function invitationRupiah(value: number) {
  return new Intl.NumberFormat('id-ID').format(value);
}