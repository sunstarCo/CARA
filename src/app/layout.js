import {DM_Serif_Display, Manrope, Playfair_Display} from 'next/font/google';

import './globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

// const inter = Inter({subsets: ['latin']});

const dm_serif_display = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_serif_display',
  weight: '400',
});
const playfair_display = Playfair_Display({subsets: ['latin'], display: 'swap', variable: '--font-playfair_display'});
const manrope = Manrope({subsets: ['latin']});

export const metadata = {
  title: 'CARA',
  description: 'Generated by create next app',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${dm_serif_display.variable} ${playfair_display.variable} min-h-screen`}>
        <Header />
        {/* <div className="pt-[192px]">
        </div> */}
        <div className="flex-1 w-full h-[cacl(100vh-148px)] pt-[148px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
