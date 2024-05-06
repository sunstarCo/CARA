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
        <p className="mt-8 sm:mt-12 text-xl leading-loose max-w-[1080px]">
          Dr. David Kahng has dedicated a significant portion of his life to the disciplines of plastic and
          reconstructive surgery. At Cara Plastic Surgery, his practice caters to patients seeking both cosmetic
          enhancements and reconstructive procedures. Driven by a passion to merge his meticulous eye for detail with
          the noble endeavor of aiding others, he has chosen this field as his calling. His decision to specialize in
          this field stems from his desire to utilize his keen attention to detail in order to make a meaningful impact
          on other&apos;s lives. When you choose to work with Dr. Kahng, you&apos;re collaborating with a frontrunner in
          the field, distinguished not only by his extensive training but also by his distinctive, global viewpoint that
          informs every procedure he undertakes.
        </p>
      </div>
    </div>
  );
}

export default Greetings;
