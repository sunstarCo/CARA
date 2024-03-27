'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

function ContactBanner() {
  const headerPathname = usePathname();
  return (
    <div className={`relative w-full overflow-hidden ${headerPathname === '/contact' && 'hidden'} py-20 md:py-40`}>
      <Image
        src={'/banner/contact/contact_banner_bg.jpg'}
        alt=""
        fill
        sizes="100"
        className="object-cover object-top -z-10"
      />
      <div className={`flex items-center text-white`}>
        <div className="max-w-[80rem] w-full px-8 2xl:px-64 flex justify-start ite flex-col">
          <h3 className="uppercase text-4xl sm:text-[4rem] leading-normal font-trajan">
            Schedule a <br />
            Consultation
          </h3>
          <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
          <p className="text-xl sm:text-2xl leading-loose sm:leading-loose">
            At CARA Plastic Surgery & Laser Center in Las Vegas, we understand that choosing the right cosmetic
            procedure is an important decision. We offer &ldquo;Free&rdquo; consultations to help you explore your
            options and determine the best approach to achieve your aesthetic goals.
          </p>
          <Link
            href={'/contact'}
            className="uppercase mt-[3.125rem] text-[#302c29] text-lg sm:text-xl sm:leading-loose font-medium bg-[#EAE9E5] px-10 py-4 w-fit">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
