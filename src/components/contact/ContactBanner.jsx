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
        className="object-cover object-right-top -z-10 max-sm:hidden"
      />
      <Image
        src={'/banner/contact/DoctorMobile.jpg'}
        alt=""
        fill
        sizes="100"
        className="object-cover sm:hidden -z-10 "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 -z-10 sm:hidden" />
      <div className={`flex items-center text-white max-w-[2100px] mx-auto `}>
        <div className="max-w-[80rem] w-full px-8 2xl:px-64 flex justify-start ite flex-col">
          <h3 className=" text-[2.5rem] sm:text-54px leading-normal font-trajan">
            Schedule a <br />
            Consultation
          </h3>
          <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
          <p className="text-lg sm:text-xl leading-loose sm:leading-loose max-w-[700px]">
            At CARA Plastic Surgery & Laser Center in Las Vegas, we understand that choosing the right cosmetic
            procedure is an important decision. We offer &ldquo;Free&rdquo; consultations to help you explore your
            options and determine the best approach to achieve your aesthetic goals.
          </p>
          <Link
            href={'/contact'}
            className="mt-[3.125rem] text-[#302c29] sm:text-lg sm:leading-loose font-semibold bg-[#EAE9E5] text-center px-4 min-[350px]:px-10 py-4 w-fit uppercase hover:opacity-75 transition-opacity duration-300 ">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
