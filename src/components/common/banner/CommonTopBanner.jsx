import React from 'react';

import Image from 'next/image';

import AboutCommonBannerBGDeco from '../../../../public/banner/about/AboutCommonBannerBGDeco.png';
import AboutCommonImg from '../../../../public/banner/about/AboutCommonImg.png';

export default function CommonTopBanner({url, title, subtitle, contents, children, img, imgAlign = 'center'}) {
  let imgPosition = 'center';
  switch (imgAlign) {
    case 'left':
      imgPosition = 'object-left';
      break;
    case 'right':
      imgPosition = 'object-right';
      break;
    case 'top':
      imgPosition = 'object-top';
      break;
    default:
      imgPosition = 'center';
  }
  return (
    <div className="flex flex-col w-full xl:flex-row min-[1700px]:max-h-[57rem]">
      <div className="relative py-16 md:pt-[6rem] min-[1920px]:pt-[11.1875rem] md:pb-20 xl:w-1/2">
        <Image
          src={AboutCommonBannerBGDeco}
          alt="backgroundDecoration"
          fill
          sizes="100"
          className="object-cover max-xl:hidden -z-10"
        />
        <Image
          src={img || AboutCommonImg}
          alt="surgeryImg"
          placeholder="blur"
          priority
          fill
          sizes="100"
          className="object-cover xl:hidden -z-10"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70 xl:hidden -z-10" />
        <div className="md:px-24 px-10 flex-col justify-center items-start gap-[0.625rem] max-w-[1100px] mx-auto ">
          <div className="flex flex-col gap-[0.625rem] mb-10">
            <p className=" text-[#716B63] text-xl font-trajan">Home · {url}</p>
            <h1 className="text-4xl sm:text-[3.125rem] font-trajan leading-normal">
              {title.split('/').map(word => {
                return <p key={word}>{word}</p>;
              })}
            </h1>
            {subtitle && <p className="text-2xl text-[#302C29] leading-[2.85rem]">{subtitle}</p>}
          </div>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#9D9892]"></div>
          {contents !== undefined ? <p className="text-2xl leading-[2.5rem] ">{contents}</p> : children}
        </div>
      </div>
      <Image
        src={img || AboutCommonImg}
        alt="doctorImage"
        placeholder="blur"
        priority
        className={`object-cover ${imgPosition} max-xl:hidden xl:w-1/2`}
      />
    </div>
  );
}
