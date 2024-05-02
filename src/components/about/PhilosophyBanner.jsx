import React from 'react';

import Image from 'next/image';

export default function PhilosophyBanner() {
  return (
    <div className="py-[8.75rem] max-w-[2100px] mx-auto relative">
      <Image
        src={'/banner/about/cara_text_bg.jpg'}
        alt="CARA text"
        width={0}
        height={0}
        sizes="100"
        className="w-[50rem] absolute bottom-0 right-0"
      />
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <main className="text-center">
          <p className="leading-normal text-48px font-trajan lg:text-nowrap break-keep">Philosophy</p>
        </main>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <sub className="text-xl font-light flex flex-col md:flex-row gap-[3.125rem] leading-[2.8125rem] text-center md:justify-center">
          At the core of Dr. Kahng&apos;s philosophy is the commitment to instill trust, uphold integrity, and
          prioritize safety for his patients while restoring both form and function.
          <br /> Whether performing cosmetic or reconstructive surgery, Dr. Kahng&apos;s overarching goal is to provide
          patients with realistic outcomes. All outpatient procedures are conducted in his AAAASF certified surgery
          center, equipped with a Board Certified Anesthesiologist within his office, while inpatient surgeries are
          exclusively carried out at major hospitals, such as Cedar-Sinai Medical Center or CHA Hollywood Presbyterian
          Medical Center.
        </sub>
      </div>
    </div>
  );
}
