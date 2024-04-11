import React from 'react';

import Image from 'next/image';

export default function CreditBanner() {
  return (
    <div className=" py-[8.75rem] ">
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <div className="md:w-[46.25rem] w-[33.125rem] text-center md:h-52 h-[8.9375rem]">
          <Image src={'/banner/financing/FinancingLogo0'} width={100} height={100} alt="CareCreditLogo" />
          <Image src={'/banner/financing/FinancingLogo1'} width={100} height={100} alt="CareCreditLogo" />
          <Image src={'/banner/financing/FinancingLogo2'} width={100} height={100} alt="CareCreditLogo" />
          <Image src={'/banner/financing/FinancingLogo3'} width={100} height={100} alt="CareCreditLogo" />
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
