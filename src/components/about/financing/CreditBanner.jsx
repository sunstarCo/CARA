import React from 'react';

import Image from 'next/image';

export default function CreditBanner() {
  return (
    <div className=" py-[8.75rem] ">
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <p className="text-4xl leading-normal font-trajan">CareCredit</p>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <div className="w-full  lg:flex grid grid-cols-2 gap-14 lg:gap-[4.375rem]">
          <Image
            src={'/banner/financing/FinancingLogo0.png'}
            width={0}
            height={0}
            sizes="100"
            className="w-[23.875rem] max-h-20 mx-auto"
            alt="CareCreditLogo"
          />
          <Image
            src={'/banner/financing/FinancingLogo1.png'}
            width={0}
            height={0}
            sizes="100"
            className="w-[25.6875rem] max-h-20 mx-auto"
            alt="CareCreditLogo"
          />
          <Image
            src={'/banner/financing/FinancingLogo2.png'}
            width={0}
            height={0}
            sizes="100"
            className="w-[16.5625rem] max-h-20 mx-auto"
            alt="CareCreditLogo"
          />
          <Image
            src={'/banner/financing/FinancingLogo3.png'}
            width={0}
            height={0}
            sizes="100"
            className="w-[17.5rem] max-h-20 mx-auto"
            alt="CareCreditLogo"
          />
        </div>

        <sub className="text-xl mt-20 font-light leading-[2.8125rem] text-center max-w-[1400px] mx-auto">
          Recognizing CareCredit as a leading medical financing program, we proudly extend this option to our patients.
          Functioning similarly to a credit card specifically for medical purposes, CareCredit provides a variety of
          payment plans with attractive benefits and transparent terms. Our welcoming administrative staff is ready to
          assist you in applying for CareCredit, or you can conveniently submit your application online.
        </sub>
      </div>
    </div>
  );
}
