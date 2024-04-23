import React from 'react';

import Image from 'next/image';

function Intro({title, desc}) {
  return (
    <div className="relative">
      <Image
        src={'/banner/about/cara_text_bg.jpg'}
        alt="CARA text"
        width={0}
        height={0}
        sizes="100"
        className="w-[50rem] absolute bottom-0 right-0 -z-10"
      />
      <div className="text-center flex flex-col items-center max-w-[80rem] mx-auto py-24 md:py-[8.75rem] px-8">
        <h3 className="text-4xl sm:text-48px leading-loose font-trajan">{title}</h3>
        <div className="w-[6.25rem] h-2 bg-[#9D9892] my-[3.125rem]" />
        <p className="text-xl leading-loose">{desc}</p>
      </div>
    </div>
  );
}

export default Intro;
