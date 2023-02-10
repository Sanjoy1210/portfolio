import { Poppins } from '@next/font/google';
import localFont from '@next/font/local';

export const roboto_slab = localFont({
  src: [
    {
      path: '/roboto-slab/RobotoSlab-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/roboto-slab/RobotoSlab-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/roboto-slab/RobotoSlab-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/roboto-slab/RobotoSlab-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/roboto-slab/RobotoSlab-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/roboto-slab/RobotoSlab-ExtraBold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-roboto_slab',
});

export const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});
