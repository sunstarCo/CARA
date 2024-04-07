'use client';
import React from 'react';

import Image from 'next/image';

import DoctorImg from '../../../public/banner/about/AboutMeetTheDoctorImg.png';

import {useObserver} from '@/hooks/useObserver';

export default function ExpertBanner() {
  const {isVisible, domRef} = useObserver();
  return (
    <div className="flex flex-col w-full 2xl:flex-row overflow-hidden">
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
            Dr. Kahng has devotedhis life to the intricate art of Plastic & Reconstructive Surgery,specializing in both
            cosmetic and reconstructive procedures. His practice spansthe entire spectrum of aesthetic surgeries for the
            face and body, encompassingreconstructive treatments such as breast cancer reconstruction,
            burnreconstruction, body contouring after significant weight loss, and handsurgery. Serving as the medical
            director for the Grossman Burn Center in SantaAna from 2009-2012, Dr. Kahng managed minor to severe burn
            cases and oversawthe day-to-day operations of the burn center. Understandingthe importance of
            comprehensiveness in Plastic & Reconstructive surgery,Dr. Kahng firmly believes in practicing and
            comprehending every aspect of thefield. As a Korean-American, he possesses a natural eye for Asian
            aestheticsurgery, backed by extensive training with Korean board-certified plasticsurgeons in South Korea.
            Renowned in the United States, Dr. Kahng iscelebrated for his expertise in Asian plastic surgery,
            specializing in AsianEyelid, Asian Rhinoplasty, and Asian Facelift surgery. Holding a certificatefrom
            2008-2018, he also demonstrates a keen eye for treating non-Asian patientsin the greater Los Angeles area.
          </p>
        </div>
      </div>
    </div>
  );
}
