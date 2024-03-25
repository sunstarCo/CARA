import React from 'react';

import Image from 'next/image';

function WhyChoose({desc}) {
  return (
    <div className="relative py-[6.25rem] px-8">
      <Image
        src="/logo/BG_logo.svg"
        alt="bg-logo"
        width={0}
        height={0}
        sizes="100"
        className="w-fit absolute bottom-0 right-0 -z-10"
      />
      <div className="flex flex-col justify-center items-center lg:flex-row gap-[6.25rem] max-w-[1556px] mx-auto">
        <Image
          src="/detailpage/doctor_1.jpg"
          width={766}
          height={800}
          sizes="100"
          className="lg:w-1/2 object-cover"
          alt="why-choose"
        />
        <div className="lg:w-1/2">
          <h3 className="uppercase text-[3.125rem] leading-normal">Why Choose Cara Plastic Surgery & Laser Center?</h3>
          <div className="h-2 w-[6.25rem] bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
          <p className="text-2xl leading-loose">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
