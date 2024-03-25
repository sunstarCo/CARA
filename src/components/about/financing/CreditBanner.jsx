import React from 'react';

import Image from 'next/image';

import CareCreditImage from '../../../../public/banner/about/financing/CareCreditImage.png';
export default function CreditBanner() {
  return (
    <div className=" py-[8.75rem] ">
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <div className="relative md:w-[46.25rem] w-[33.125rem] text-center md:h-52 h-[8.9375rem]">
          <Image src={CareCreditImage} fill alt="CareCreditLogo" />
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
