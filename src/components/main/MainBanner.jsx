import React from 'react';

import MAINBANNER from '@img/banner/main/MainBanner.jpg';
import MAINBANNER_MOBILE from '@img/banner/main/MainBannerMobile.jpg';
import Image from 'next/image';
import Link from 'next/link';

function MainBanner() {
  return (
    <section>
      <div className="relative w-full h-[calc(100vh-8.875rem)] overflow-hidden font-trajan">
        <div className="absolute top-0 left-0 flex">
          <div className={`w-screen h-[calc(100vh-8.875rem)] relative flex justify-center items-center`}>
            <Image
              src={MAINBANNER}
              alt="Dr. David Khang"
              fill
              sizes="70vw"
              className="object-cover max-[480px]:hidden"
              priority
            />
            <Image
              src={MAINBANNER_MOBILE}
              alt="Dr. David Khang"
              fill
              sizes="70vw"
              className="object-cover min-[480px]:hidden"
              priority
            />
            <div className="absolute text-white transition-opacity animate-show">
              <div className="text-4xl font-normal leading-normal text-center lg:text-5xl 2xl:text-7xl -tracking-tight ">
                <p>A Leading of Plastic Sergeon</p>
                <p>in Las Vegas / Los Angeles</p>
              </div>
              <Link
                href={'/contact'}
                className="block mx-auto px-2 mt-8 sm:mt-12 text-2xl sm:text-3xl font-bold leading-normal hover:text-[#4b4a49]  w-fit">
                <div className="group">
                  <p>SCHEDULE CONSULTATION</p>
                  <div className="w-0 h-[2px] mt-2 transition-all duration-500 bg-[#4b4a49] group-hover:w-full " />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1700px] py-12 px-8 mx-auto flex gap-2 flex-wrap">
        {[...Array(7)].map((_, i) => (
          <Image
            key={i}
            src={`/banner/main/logos/logo${i + 1}.png`}
            alt=""
            width={0}
            height={0}
            sizes="250px"
            className={`min-w-[120px] w-[14%] mx-auto ${
              i === 6 ? 'h-[2rem] max-w-[320px]' : 'h-[3.125rem] max-w-[120px]'
            } my-auto  object-contain`}
          />
        ))}
      </div>
    </section>
  );
}

export default MainBanner;
