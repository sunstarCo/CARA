import React from 'react';

import Image from 'next/image';

import logo from '../../../public/logo/logo(black).svg';
function CoreFooter() {
  return (
    <>
      <div className="w-full  bg-[#D9D5CC] py-20 md:py-40">
        <div className="flex flex-col gap-24 md:flex-row px-8 justify-between items-center max-w-[100rem] mx-auto">
          <div>
            <p className="text-nowrap text-[1.375rem] font-bold mb-10 font-trajan">(855 212-9901)</p>
            <p className="text-[1.375rem] font-bold mb-2 font-trajan">ADDRESS</p>
            <p className="text-base leading-[1.875rem] font">
              Los Angeles, San Gabriel Valley <br /> Orange County, Landing
            </p>
          </div>
          <div className="w-[20rem] sm:w-[20rem] lg:w-[25rem]">
            <Image src={logo} width={0} height={0} sizes="100" className="w-full" alt="로고" />
          </div>
          <div>
            <div className="flex  gap-[0.875rem] mb-10 text-nowrap">
              {snsIcons.map(icon => {
                return (
                  <a href={icon.link} role="button" target="_blank" key={icon.sns} className="relative w-5 h-5">
                    <Image src={`/icons/sns/${icon.sns}.svg`} fill alt={`${icon.sns}icon`} />
                  </a>
                );
              })}
            </div>
            <p className="text-[1.375rem] font-bold mb-2 font-trajan">WORKING HOURS</p>
            <p className="text-base leading-[1.875rem] font">
              Mon - Fri : 7am - 6pm <br /> Sat : 9am - 7pm, Sun : 9am - 6pm
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-white bg-main-dark">
        <h5 className="text-base">
          ⓒ CARA PLASTIC SURGERY & LASER CENTER. ALL RIGHTS RESERVED. WEB DESIGN & INTERNET MARKETING BY SUNSTAR
        </h5>
      </div>
    </>
  );
}
const snsIcons = [
  {sns: 'insta', link: 'https://www.instagram.com/caraplasticsurgery/'},
  {sns: 'facebook', link: 'https://www.facebook.com/caraplasticsurgerycenter/?ref=page_internal'},
  {sns: 'youtube', link: 'https://www.youtube.com/channel/UCUaecNgJPbHBiDlJB5CeTuQ/videos'},
  {sns: 'yelp', link: 'https://www.yelp.com/biz/cara-plastic-surgery-and-laser-center-los-angeles-2'},
  {sns: 'kakao', link: 'https://pf.kakao.com/_bFiDd'},
  {sns: 'wechat', link: 'https://www.datocms-assets.com/59206/1645483716-qr-code.jpeg'},
  {sns: 'tictoc', link: 'https://www.tiktok.com/@caraplasticsurgery'},
];

export default CoreFooter;
