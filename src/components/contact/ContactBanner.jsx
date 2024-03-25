'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

function ContactBanner() {
  const headerPathname = usePathname();
  return (
    <div className={`relative w-full h-[60rem] overflow-hidden ${headerPathname === '/contact' && 'hidden'}`}>
      <div className="absolute top-0 left-0 flex">
        <div className={`w-screen h-[60rem] relative flex items-center px-8 2xl:px-64 text-white`}>
          <Image
            src={'/banner/contact/contact_banner_bg.jpg'}
            alt=""
            fill
            sizes="100"
            className="object-cover object-center"
          />
          <div className="absolute max-w-[43.75rem] w-fit flex justify-start flex-col">
            <h3 className="uppercase text-4xl sm:text-[4rem] leading-normal ">
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
              className="uppercase mt-[3.125rem] text-[#302c29] text-xl leading-loose font-medium bg-[#EAE9E5] px-10 py-4 w-fit">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
