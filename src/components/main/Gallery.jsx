import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Gallery() {
  return (
    <div className="relative w-full overflow-hidden py-24 sm:py-[11.75rem]">
      <Image
        src={'/logo/BG_logo.svg'}
        alt=""
        width={0}
        height={0}
        sizes="100"
        className="w-fit absolute bottom-0 left-0 max-lg:hidden"
      />
      <Image src={'/banner/main/GalleryBG.png'} alt="" fill sizes="100" className="object-cover object-top -z-10" />
      <div className={`flex justify-end `}>
        <div className="flex flex-col w-full lg:w-4/6 2xl:w-1/2  text-white px-8 sm:px-16">
          <div className="flex uppercase z-20">
            <div
              className={`text-2xl sm:text-3xl flex text-center items-center leading-normal -tracking-tight font-trajan`}>
              BEFORE & AFTER
            </div>
          </div>
          <p className="mt-5 text-[2.5rem] sm:text-[4rem] leading-normal font-trajan">VIEW OUR GALLERY</p>
          <div className="w-[100px] h-2 bg-[#D9D5CC] mt-10" />
          <p className="text-2xl leading-loose mt-12 w-full sm:w-[85%]">
            Renowned for his mastery of state-of-the-art techniques and technology, Dr. Kahng is celebrated in the field
            of Korean Plastic Surgery in Los Angeles and beyond for his ability to achieve symmetry, harmony, and
            balance.
          </p>
          <Link
            href={'/before&after'}
            className="px-10 py-4 bg-[#EAE9E5] w-fit text-black text-xl leading-normal uppercase font-medium mt-[3.75rem]">
            View All Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
