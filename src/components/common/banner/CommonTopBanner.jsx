import React from 'react';

import Image from 'next/image';

import AboutCommonBannerBGDeco from '../../../../public/banner/about/AboutCommonBannerBGDeco.png';
import AboutCommonImg from '../../../../public/banner/about/AboutCommonImg.png';
export default function CommonTopBanner({url, title, subtitle, contents}) {
  return (
    <div className="flex flex-col w-full 2xl:flex-row">
      <div className="relative py-[11.1875rem]  2xl:w-1/2 ">
        <Image src={AboutCommonBannerBGDeco} alt="backgroundDecoration" fill sizes="100" className="object-cover" />
        <div className="md:px-32 px-10 flex-col justify-center items-start gap-[0.625rem] ">
          <p className=" text-[#716B63] uppercase text-xl">HOME ·{url}</p>
          <h1 className="text-[3.125rem] uppercase leading-normal mb-[1.875rem]">
            {title.split('/').map(word => {
              return <p key={word}>{word}</p>;
            })}
          </h1>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#9D9892]"></div>
          {subtitle && <p>{subtitle}</p>}
          <p className="text-2xl leading-[2.6875rem] ">{contents}</p>
        </div>
      </div>
      <div className="relative  min-h-[55rem] 2xl:w-1/2">
        <Image src={AboutCommonImg} alt="doctorImage" fill sizes="100" className="object-cover" />
      </div>
    </div>
  );
}