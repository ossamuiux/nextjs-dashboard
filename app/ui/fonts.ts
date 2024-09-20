import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트는 weight지정없이 사용
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

// 변수형 아닌경우 사용할 weight지
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
