import './globals.css';
import {Outfit} from 'next/font/google';
import Script from 'next/script';

import ContactBanner from '@/components/contact/ContactBanner';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const outpit = Outfit({subsets: ['latin'], display: 'swap', weight: '300'});

export const metadata = {
  metadataBase: new URL('https://cara-nu.vercel.app'),
  title: 'CARA',
  description:
    'CARA Plastic Surgery & Laser Center is a premier destination for aesthetic enhancement in Orange County, Los Angeles, and Las Vegas. Dr. David Kahng is a highly skilled plastic surgeon who specializes in cosmetic and reconstructive surgery.',
  icons: {
    icon: '/logo/favicon.png',
  },
  openGraph: {
    title: 'CARA',
    description:
      'CARA Plastic Surgery & Laser Center is a premier destination for aesthetic enhancement in Orange County, Los Angeles, and Las Vegas. Dr. David Kahng is a highly skilled plastic surgeon who specializes in cosmetic and reconstructive surgery.',
    images: 'banner/about/AboutCommonImg.png',
  },
};

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
        {/* <Script
          id="podium"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `function insertJS() {
            let body = window.parent.document.body;
            let jsScriptNode = document.createElement('script');
            jsScriptNode.setAttribute('type', 'text/javascript');
            jsScriptNode.setAttribute(
              'src',
              'https://connect.podium.com/widget.js#ORG_TOKEN=24659e29-032e-42bd-9ade-29bf1f4c99df',
            );
            jsScriptNode.setAttribute('id', 'podium-widget');
            jsScriptNode.setAttribute('data-organization-api-token', '24659e29-032e-42bd-9ade-29bf1f4c99df');
            body.appendChild(jsScriptNode);
          }

          let start = Date.now();
          let interval = 9;
      
          function main() {
            let body = document.body;
            if (body) {
              insertJS();
            } else if (Date.now() - start > 10000) {
              return null;
            } else {
              setTimeout(function () {
                main();
              }, interval);
              interval *= 2;
            }
          }
          main();`,
          }}
        /> */}
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
