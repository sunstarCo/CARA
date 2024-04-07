import {Outfit} from 'next/font/google';

import './globals.css';
import ContactBanner from '@/components/contact/ContactBanner';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const outpit = Outfit({subsets: ['latin'], display: 'swap', weight: '300'});

export const metadata = {
  title: 'CARA',
  description: 'CARA Plastic Surgery & Laser Center',
  image: '/logo.png',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://connect.podium.com/widget.js#ORG_TOKEN=24659e29-032e-42bd-9ade-29bf1f4c99df"
          id="podium-widget"
          data-organization-api-token="24659e29-032e-42bd-9ade-29bf1f4c99df"
        />
        <link href="https://fonts.cdnfonts.com/css/trajan-pro?styles=17675,17676" rel="stylesheet" />
      </head>
      <body className={`${outpit.className} min-h-screen`}>
        <Header />
        {/* <div className="pt-[192px]">
        </div> */}
        <div className="flex-1 w-full h-[cacl(100vh-8.875rem)] pt-[95px] lg:pt-[142px]">{children}</div>
        <ContactBanner />
        <Footer />
      </body>
    </html>
  );
}
