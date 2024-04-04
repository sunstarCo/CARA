import React from 'react';

import Image from 'next/image';

function WhoNeedNose({title, subtitle, desc}) {
  return (
    <div className="relative w-full overflow-hidden py-24 sm:py-[10rem]">
      <Image
        src={'/detailpage/bg/whoNeed_nose.png'}
        alt=""
        fill
        sizes="100"
        className="object-cover object-top -z-10"
      />
      <div className={`flex justify-end `}>
        <div className="flex flex-col w-full lg:w-4/6 2xl:w-1/2 px-8 sm:px-16">
          <p className="text-[2.5rem] sm:text-[3.125rem] leading-normal font-trajan ">{title}</p>
          <p
            className={`text-xl sm:text-2xl text-center mt-[0.625rem] text-[#808683] flex items-center leading-normal -tracking-tight font-trajan`}>
            {subtitle}
          </p>
          <div className="w-[100px] h-2 bg-[#9D9892] mt-10" />
          <p className="text-2xl leading-loose mt-12 w-full sm:w-[85%]">
            {/* {desc} */}
            Desire to correct aesthetic concerns such as a prominent dorsal hump, asymmetry, or a bulbous nasal tip.
            Experience functional issues such as difficulty breathing due to a deviated septum or nasal valve collapse.
            Seek to improve the overall balance and proportion of their facial features for a more attractive
            appearance. Have undergone previous rhinoplasty surgery and require revision to address unsatisfactory
            results or complications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoNeedNose;
