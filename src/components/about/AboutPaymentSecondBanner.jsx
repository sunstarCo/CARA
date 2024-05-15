import React from 'react';

import BG_DECO from '@img/banner/about/BGDeco.png';
import Image from 'next/image';

export default function AboutPaymentSecondBanner() {
  return (
    <div className="py-20 sm:py-[8.75rem] relative">
      <Image src={BG_DECO} alt="" layout="fill" className="object-cover object-left" />
      <div className="w-full md:px-32 px-10 xl:px-[16.375rem] flex flex-col items-center">
        <main className="text-center text-4xl sm:text-[2.5rem]  lg:text-nowrap break-keep font-trajan">
          <p className="">For informational purposes only, you may access the</p>
          <p className="">federal Centers for Medicare and Medicaid Services (CMS)</p>
          <p className="">
            Open Payments web page through this{' '}
            <a href="https://openpaymentsdata.cms.gov/" target="_blank" className="text-[#1C40FF] underline">
              link
            </a>
            .
          </p>
        </main>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <sub className="text-2xl leading-[2.8125rem] text-center">
          The federal Physician Payments Sunshine Act mandates the disclosure of comprehensive information on payments
          and other items of value exceeding ten dollars ($10) from manufacturers of drugs, medical devices, and
          biologics to physicians and teaching hospitals, ensuring transparency for the public.
        </sub>
      </div>
    </div>
  );
}
