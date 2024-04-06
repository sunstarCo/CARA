import React from 'react';

import Image from 'next/image';

function WhoNeedNose({title, subtitle, desc}) {
  return (
    <div className="relative w-full overflow-hidden py-24 sm:py-[10rem] px-8">
      <Image
        src={'/detailpage/bg/whoNeed_nose.png'}
        alt=""
        fill
        sizes="100"
        className="object-cover object-top -z-10"
      />
      <div className={`flex justify-end max-w-[1920px]`}>
        <div className="flex flex-col w-full max-w-[780px]">
          <p className="text-[2.5rem] sm:text-48px leading-normal font-trajan ">{title}</p>
          <p
            className={`text-xl sm:text-2xl mt-[0.625rem] text-[#585451] flex items-center leading-normal -tracking-tight font-trajan`}>
            {subtitle}
          </p>
          <div className="w-[100px] h-2 bg-[#9D9892] mt-10" />
          <ul className="text-xl leading-loose font-light tracking-[0.5px] mt-12 w-full">
            {desc.map((item, index) => (
              <li key={index} className="flex items-center gap-6 mt-4">
                <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
                <p className="font-ligh text-[#585451]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhoNeedNose;
