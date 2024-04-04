'use client';
import React, {useEffect, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

function TopHeader() {
  const [scrollLocation, setScrollLocation] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollLocation(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollLocation(window.scrollY);
      });
    };
  });
  return (
    <section
      className={`bg-[#151515] relative w-full h-12 flex items-center max-lg:hidden justify-center px-20 transition-all ease-in-out duration-300 ${
        scrollLocation > 70 && 'h-0 overflow-hidden'
      }`}>
      <div className="flex text-white gap-9">
        <Image src={'/icons/Vegas.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/Los.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/Oran.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/San.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
      </div>
      <div className="absolute top-0 right-0 flex items-center justify-end w-full h-full gap-6 pr-20">
        <div className="flex gap-2 text-white items-center">
          <Image src={'/icons/country.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
          <p>English</p>
          <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
          <Link
            href={'https://www.caraplasticsurgery.com/about/korean-patients/'}
            target="_blank"
            rel="noopener noreferrer"
            className="">
            Korean
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
