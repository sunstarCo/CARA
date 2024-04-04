'use client';
import React from 'react';

import Image from 'next/image';

import {useObserver} from '@/hooks/useObserver';

function Greetings() {
  const {domRef, isVisible} = useObserver();

  return (
    <div
      ref={domRef}
      className="w-full bg-[url('/banner/main/BGDeco.png')] max-w-[2100px] mx-auto py-16 sm:py-[8.75rem] px-8 flex flex-col sm:flex-row items-center justify-evenly bg-no-repeat bg-cover">
      <div
        className={`w-full flex flex-col items-center opacity-0 ${
          isVisible && 'animate-show_move_top'
        } transition-all`}>
        <Image
          src={'/banner/main/cara_logo.png'}
          alt=""
          width={0}
          height={0}
          sizes="100"
          className="w-[20rem] mt-10 sm:w-[38rem]"
        />
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] my-16" />
        <p className="text-[2rem] sm:text-48px sm:leading-normal font-trajan">
          Discover the Expertise of Dr. David Kahng
        </p>
        <p className="text-2xl text-[#B3ABA0] mt-2 font-medium sm:leading-loose">
          A leader in plastic and reconstructive surgery
        </p>
        <p className="mt-8 sm:mt-12 text-xl leading-loose max-w-[1280px]">
          With a lifelong commitment to the realms of plastic and reconstructive surgery, Dr. David Kahng leads the way
          in transforming lives. <br className="max-2xl:hidden" /> At Cara Plastic Surgery, his dedicated practice, he
          welcomes patients seeking both cosmetic enhancements and reconstructive solutions.
          <br className="max-2xl:hidden" />
          Driven by a passion to merge his meticulous eye for detail with the noble endeavor of aiding others, he has
          chosen this field as his calling.
        </p>
      </div>
    </div>
  );
}

export default Greetings;
