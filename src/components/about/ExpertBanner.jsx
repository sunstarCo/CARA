import React from 'react';

import Image from 'next/image';

import DoctorImg from '../../../public/banner/about/AboutMeetTheDoctorImg.png';
export default function ExpertBanner() {
  return (
    <div className="flex flex-col w-full 2xl:flex-row">
      <div className="relative min-h-[63.6875rem] 2xl:w-1/2">
        <Image src={DoctorImg} alt="doctorImage" fill className="object-cover" />
      </div>
      <div className=" py-[6.25rem]  bg-[#EAE9E5] 2xl:w-1/2 ">
        <div className="  md:px-32 px-10 flex-col justify-center items-start gap-[0.625rem] ">
          <h1 className="text-[3.125rem] uppercase leading-normal mb-[1.875rem]">
            <p>EXPERTISE</p>
          </h1>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#9D9892]"></div>
          <p className="text-xl leading-[2.375rem] ">
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
