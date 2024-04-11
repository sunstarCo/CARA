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
  }, []);

  return (
    <section
      className={`bg-[#585451] relative w-full flex items-center max-lg:hidden justify-center px-20 transition-all ease-in-out duration-300 ${
        scrollLocation > 70 ? 'h-0 overflow-hidden' : 'h-12'
      }`}>
      <div className="flex items-center text-white gap-7 leading-none align-top font-trajan text-sm tracking-[0.5px] ">
        <p className="">Las Vegas</p>
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-1 mb-[2px]" />
        <p>Los Angeles</p>
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-1 mb-[2px]" />
        <p>Orange County</p>
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-1 mb-[2px]" />
        <p>San Gabriel Valley</p>
      </div>
      <div className="absolute top-0 right-0 flex items-center justify-end w-full h-full gap-6 pr-12 -z-0">
        <div className="flex gap-2 text-white items-center">
          <Image src={'/icons/country.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
          <Link href={'/'} className="hover:text-[#bdb5a8] px-1">
            English
          </Link>
          <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-1" />
          <Link
            href={'https://www.caraplasticsurgery.com/about/korean-patients/'}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#bdb5a8] px-1">
            Korean
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
