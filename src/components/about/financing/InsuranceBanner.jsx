import React from 'react';

import InsuranceImage from '@img/banner/about/financing/InsuranceImage.jpg';
import Image from 'next/image';

export default function InsuranceBanner() {
  return (
    <div className="flex flex-col w-full 2xl:flex-row">
      <div className="relative max-sm:h-[30rem]  sm:min-h-[63.6875rem] 2xl:w-1/2">
        <Image src={InsuranceImage} alt="doctorImage" fill sizes="40vw" className="object-cover " />
      </div>
      <div className="py-[6.25rem] bg-[#EAE9E5] 2xl:w-1/2 ">
        <div className="md:px-32 px-10 flex-col justify-center items-start gap-[0.625rem] ">
          <h1 className="text-48px leading-normal mb-[1.875rem] font-trajan">
            <p>
              Accepted
              <br />
              Insurance Plans
            </p>
          </h1>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#9D9892]"></div>
          <p className="text-xl leading-[2.375rem] mb-10">
            For the convenience of our patients, we strive to accommodate as many insurance plans as possible as an
            out-of-network provider. We are dedicated to working closely with you and your insurance plan, recognizing
            that coverage can vary significantly depending on your specific plan and the state of its origin. Our team
            will be delighted to assess your insurance benefits and determine coverage for specific procedures. Among
            the commonly accepted insurance plans as an out-of-network provider are:
          </p>
          <ul>
            <li className="flex items-center gap-2 text-xl leading-[2.375rem] font-medium text-[#585451]">
              <div className="w-[0.625rem] h-[0.625rem] bg-[#9D9892]"></div>
              <p>Blue Cross/Blue Shield</p>
            </li>
            <li className="flex items-center gap-2 text-xl leading-[2.375rem] font-medium text-[#585451]">
              <div className="w-[0.625rem] h-[0.625rem] bg-[#9D9892]"></div>
              <p>United Healthcare</p>
            </li>
            <li className="flex items-center gap-2 text-xl leading-[2.375rem] font-medium text-[#585451]">
              <div className="w-[0.625rem] h-[0.625rem] bg-[#9D9892]"></div>
              <p>Cigna</p>
            </li>
            <li className="flex items-center gap-2 text-xl leading-[2.375rem] font-medium text-[#585451]">
              <div className="w-[0.625rem] h-[0.625rem] bg-[#9D9892]"></div>
              <p>Aetna</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
