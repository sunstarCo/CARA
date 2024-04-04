import React from 'react';

export default function PhilosophyBanner() {
  return (
    <div className=" py-[8.75rem] max-w-[2100px] mx-auto ">
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <main className="text-center">
          <p className="text-[4rem] font-trajan lg:text-nowrap break-keep leading-normal">Philosophy</p>
        </main>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <sub className="text-2xl flex flex-col md:flex-row gap-[3.125rem] leading-[2.8125rem] md:justify-center">
          <p className="w-1/2 text-start">
            At the core of Dr.Kahng&apos;s philosophy is the commitment to instill trust, uphold integrity,
            andprioritize safety for his patients while restoring both form and function. Whether performingcosmetic or
            reconstructive surgery, Dr. Kahng&apos;s overarching goal is to providepatients with realistic outcomes.
          </p>
          <p className="w-1/2 text-start">
            All outpatient procedures are conducted inhis AAAASF certified surgery center, equipped with a Board
            CertifiedAnesthesiologist within his office, while inpatient surgeries are exclusivelycarried out at major
            hospitals, such as Cedar-Sinai Medical Center or CHAHollywood Presbyterian Medical Center.
          </p>
        </sub>
      </div>
    </div>
  );
}
