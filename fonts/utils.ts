import { Poppins, Roboto_Slab } from '@next/font/google';

export const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400', '500', '600', '700'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});
