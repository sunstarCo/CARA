'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {useObserver} from '@/hooks/useObserver';

function Gallery() {
  const {domRef, isVisible} = useObserver();
  return (
    <div ref={domRef} className="relative w-full overflow-hidden py-24 sm:py-[11.75rem]">
      <Image
        src={'/banner/main/GalleryBG.jpg'}
        alt=""
        fill
        sizes="100"
        className="object-cover object-left-top max-sm:opacity-40 -z-10"
      />
      <div className="bg-white opacity-10 w-full h-full absolute top-0 left-0 -z-10" />
      <div
        className={`flex justify-end max-w-[2100px] mx-auto transition-all opacity-0 ${
          isVisible && 'animate-show_move_top'
        }`}>
        <div className="flex flex-col w-full px-8 lg:w-4/6 2xl:w-1/2 sm:px-16">
          <div className="z-20 flex">
            <div
              className={`text-2xl sm:text-3xl flex text-center text-[#585451] items-center leading-normal -tracking-tight font-trajan`}>
              Before & After
            </div>
          </div>
          <p className="mt-5 text-[2.5rem] sm:text-54px leading-normal font-trajan">View Our Gallery</p>
          <div className="w-[100px] h-2 bg-[#9D9892] mt-10" />
          <p className="text-xl leading-loose mt-[3.125rem] w-full sm:w-[85%] max-w-[560px] tracking-wide">
            Renowned for his mastery of state-of-the-art techniques and technology, Dr. Kahng is celebrated in the field
            of Korean Plastic Surgery in Los Angeles and beyond for his ability to achieve symmetry, harmony, and
            balance.
          </p>
          <Link
            href={'/Before&After'}
            className="px-10 py-4 bg-[#585451] w-fit text-white text-lg leading-normal font-semibold mt-[3.75rem] uppercase hover:bg-opacity-75">
            View All Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
