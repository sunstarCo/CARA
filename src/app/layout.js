import './globals.css';

import {Outfit} from 'next/font/google';
import {headers} from 'next/headers';
import Script from 'next/script';

import ContactBanner from '@/components/contact/ContactBanner';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import {METADATA} from '@/constants/MetaData';

const outpit = Outfit({subsets: ['latin'], display: 'swap', weight: '300'});

export async function generateMetadata() {
  const headersList = headers();
  const headerPathname = headersList.get('x-pathname') || '';
  const [_, mainTitle, subTitle] = headerPathname.split('/');

  const meta_data = {
    title:
      headerPathname === '/'
        ? 'CARA Plastic Surgery'
        : `${subTitle || mainTitle} | CARA Plastic Surgery`.replaceAll('-', ' '),
    description: METADATA[mainTitle.toUpperCase()]?.description || METADATA.DEFAULT.description,
    image: METADATA[mainTitle.toUpperCase()]?.image || METADATA.DEFAULT.image,
  };

  return {
    ...meta_data,
    metadataBase: new URL('https://https://cara-nu.vercel.app/'),
    icons: {
      icon: '/logo/favicon.png',
    },
    openGraph: meta_data,
  };
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://connect.podium.com/widget.js#ORG_TOKEN=24659e29-032e-42bd-9ade-29bf1f4c99df"
          id="podium-widget"
          data-organization-api-token="24659e29-032e-42bd-9ade-29bf1f4c99df"
        />
        {/* <Script defer src="/src/podium.js" id="podium-widget" /> */}
        <link href="https://fonts.cdnfonts.com/css/trajan-pro?styles=17675,17676" rel="stylesheet" />
      </head>
      <body className={`${outpit.className} min-h-screen`}>
        <Header />
        <div className="flex-1 w-full h-[cacl(100vh-8.875rem)] pt-[81px] lg:pt-[142px]">{children}</div>
        <ContactBanner />
        <Footer />
      </body>
    </html>
  );
}
