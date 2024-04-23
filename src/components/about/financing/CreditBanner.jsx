import React from 'react';

import Image from 'next/image';

export default function CreditBanner() {
  return (
    <div className=" py-[8.75rem] ">
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
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
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <sub className="text-2xl leading-[2.8125rem] text-center">
          The federal Physician Payments Sunshine Act mandates the disclosure ofcomprehensive information on payments
          and other items of value exceeding tendollars ($10) from manufacturers of drugs, medical devices, and
          biologics tophysicians and teaching hospitals, ensuring transparency for the public.
        </sub>
      </div>
    </div>
  );
}
