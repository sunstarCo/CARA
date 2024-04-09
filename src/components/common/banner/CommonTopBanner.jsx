import React from 'react';

import Image from 'next/image';

import AboutCommonBannerBGDeco from '../../../../public/banner/about/AboutCommonBannerBGDeco.png';
import AboutCommonImg from '../../../../public/banner/about/AboutCommonImg.png';
export default function CommonTopBanner({url, title, subtitle, contents, img}) {
  return (
    <div className="flex flex-col w-full xl:flex-row">
      <div className="relative py-[11.1875rem]  xl:w-1/2 ">
        <Image
          src={AboutCommonBannerBGDeco}
          alt="backgroundDecoration"
          fill
          sizes="100"
          className="object-cover -z-10"
        />
        <div className="md:px-32 px-10 flex-col justify-center items-start gap-[0.625rem] max-w-[1100px] mx-auto ">
          <div className="flex flex-col gap-[0.625rem] mb-10">
            <p className=" text-[#716B63] text-xl font-trajan">Home · {url}</p>
            <h1 className="text-[3.125rem] font-trajan leading-normal">
              {title.split('/').map(word => {
                return <p key={word}>{word}</p>;
              })}
            </h1>
            {subtitle && <p className="text-2xl text-[#302C29] leading-[2.85rem]">{subtitle}</p>}
          </div>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#9D9892]"></div>
          <p className="text-2xl leading-[2.6875rem] ">{contents}</p>
        </div>
      </div>
      <div className="relative  min-h-[55rem] xl:w-1/2 hidden  xl:block">
        <Image src={img || AboutCommonImg} alt="doctorImage" fill sizes="100" className="object-cover " />
      </div>
    </div>
  );
}
