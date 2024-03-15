import React from 'react';

import Image from 'next/image';

import logo from '../../../public/logo/logo(black).svg';
function CoreFooter() {
  return (
    <>
      <div className="w-full flex px-[11.375rem] justify-between items-center bg-[#D9D5CC] py-40">
        <div>
          <p className="text-nowrap text-[1.375rem] font-bold mb-10">(855 212-9901)</p>
          <p className="text-[1.375rem] font-bold mb-2">ADDRESS</p>
          <p className="text-base leading-[1.875rem] font">
            Los Angeles, San Gabriel Valley <br /> Orange County, Landing
          </p>
        </div>
        <div className="sm:w-[25rem] min-w-60 min-mx-80">
          <Image src={logo} width={0} height={0} sizes="100" className="w-full" alt="로고" />
        </div>
        <div>
          <div className="flex gap-[0.875rem] mb-10 text-nowrap">
            {snsIcons.map(icon => {
              return (
                <div key={icon} className="relative w-5 h-5">
                  <Image src={`icons/sns/${icon}.svg`} fill alt="facebookIcon" />
                </div>
              );
            })}
          </div>
          <p className="text-[1.375rem] font-bold mb-2">WORKING HOURS</p>
          <p className="text-base leading-[1.875rem] font">
            Mon - Fri : 7am - 6pm <br /> Sat : 9am - 7pm, Sun : 9am - 6pm
          </p>
        </div>
      </div>
      <div className="py-6 text-center text-white bg-main-dark">
        <h1 className="text-base">
          ⓒ CARA PLASTIC SURGERY & LASER CENTER. ALL RIGHTS RESERVED. WEB DESIGN & INTERNET MARKETING BY SUNSTAR
        </h1>
      </div>
    </>
  );
}
const snsIcons = ['insta', 'facebook', 'youtube', 'yelp', 'kakao', 'wechat', 'tictoc'];

export default CoreFooter;
