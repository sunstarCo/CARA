'use client';
import React from 'react';

import Image from 'next/image';

import DoctorImg from '../../../public/banner/about/AboutMeetTheDoctorImg.png';

import {useObserver} from '@/hooks/useObserver';

export default function ExpertBanner() {
  const {isVisible, domRef} = useObserver();
  return (
    <div className="flex flex-col w-full overflow-hidden 2xl:flex-row">
      <div className="relative 2xl:w-1/2">
        <Image src={DoctorImg} alt="doctorImage" fill className="object-cover object-top" />
      </div>
      <div ref={domRef} className={`py-[6.25rem]  bg-[#9D9892] 2xl:w-1/2 text-white`}>
        <div
          className={`md:px-32 px-10 flex-col justify-center items-start gap-[0.625rem] ${
            isVisible && 'animate-show_move_left'
          }`}>
          <h1 className="text-48px leading-normal mb-[1.875rem] font-trajan">
            <p>Expertise</p>
          </h1>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#EAE9E5]"></div>
          <p className="text-lg font-light leading-[2.375rem] max-w-[800px]">
            Dedicated to achieving excellence across every aspect of his plastic surgery practice, Dr. Kahng finds
            fulfillment in providing outcomes that enhance patients&apos; comfort with their appearance. Dr. Kahng
            blends refined medical expertise with artistic flair to create cosmetic enhancements that seamlessly blend
            with natural aesthetics, earning him national acclaim for his expertise and compassionate care. <br /> Dr.
            Kahng has devoted his life to the intricate art of Plastic & Reconstructive Surgery, specializing in both
            cosmetic and reconstructive procedures. His practice spans the entire spectrum of aesthetic surgeries for
            the face and body, encompassing reconstructive treatments such as breast cancer reconstruction, burn
            reconstruction, and body contouring after significant weight loss. His wealth of expertise comes partially
            from serving as the medical director for the Grossman Burn Center in Santa Ana from 2009-2012, where he
            managed minor to severe burn cases and oversaw the day-to-day operations of the burn center.
          </p>
        </div>
      </div>
    </div>
  );
}
