import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Gallery() {
  return (
    <div className="relative w-full h-[940px] overflow-hidden">
      <Image
        src={'/logo/BG_logo.svg'}
        alt=""
        width={0}
        height={0}
        sizes="100"
        className="w-fit absolute bottom-0 left-0 z-10"
      />
      <div className="absolute top-0 left-0 flex">
        <div className={`w-screen h-[940px] relative flex justify-end px-16`}>
          <Image src={'/banner/main/GalleryBG.png'} alt="" fill sizes="100" className="object-cover object-top" />
          <div className="absolute flex flex-col  w-1/2 text-white">
            <div className="flex uppercase z-20 mt-[188px]">
              <div className={`text-3xl flex text-center items-center leading-normal -tracking-tight `}>
                BEFORE & AFTER
              </div>
            </div>
            <p className="mt-5 text-[64px] leading-normal">VIEW OUR GALLERY</p>
            <div className="w-[100px] h-2 bg-[#D9D5CC] mt-10" />
            <p className="text-2xl leading-loose mt-12 w-[85%]">
              Renowned for his mastery of state-of-the-art techniques and technology, Dr. Kahng is celebrated in the
              field of Korean Plastic Surgery in Los Angeles and beyond for his ability to achieve symmetry, harmony,
              and balance.
            </p>
            <Link
              href={'/before&after'}
              className="px-10 py-4 bg-[#EAE9E5] w-fit text-black text-xl leading-normal uppercase font-medium mt-[3.75rem]">
              View All Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
