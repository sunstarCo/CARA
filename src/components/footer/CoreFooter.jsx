import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
function CoreFooter() {
  return (
    <>
      <div className="w-full bg-[#D9D5CC] py-20 md:py-40">
        <div className="flex flex-col gap-16 md:gap-24 md:flex-row px-8 justify-between items-center max-w-[100rem] mx-auto">
          <div className="max-md:text-center">
            <p className="text-nowrap text-[1.375rem] font-bold mb-10 font-trajan">(855 212-9901)</p>
            <p className="text-[1.375rem] font-bold mb-2 font-trajan">ADDRESS</p>
            <p className="text-base leading-[1.875rem]">
              Los Angeles, San Gabriel Valley <br /> Orange County, Landing
            </p>
          </div>
          <Link href={'/'} className="">
            <Image
              src={`/logo/logo(black).svg`}
              alt=""
              width={0}
              height={0}
              sizes="100"
              className="min-w-56 sm:w-60 lg:min-w-72 xl:min-w-96"
            />
          </Link>
          <div className="text-nowrap">
            <div className="flex gap-[0.875rem] mb-12 text-nowrap max-md:justify-center max-md:-translate-y-8">
              {snsIcons.map(icon => {
                return (
                  <a href={icon.link} role="button" target="_blank" key={icon.sns} className="relative w-6 h-6">
                    <Image src={`/icons/sns/${icon.sns}.svg`} fill alt={`${icon.sns}icon`} />
                  </a>
                );
              })}
            </div>
            <p className="text-[1.375rem] font-bold mb-2 font-trajan">WORKING HOURS</p>
            <p className="text-base leading-[1.875rem]">
              Mon - Fri : 7am - 6pm <br /> Sat : 9am - 7pm, Sun : 9am - 6pm
            </p>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-white bg-main-dark">
        <h5 className="text-base">ⓒ CARA PLASTIC SURGERY & LASER CENTER. ALL RIGHTS RESERVED.</h5>
      </div>
    </>
  );
}
export const snsIcons = [
  {sns: 'insta', link: 'https://www.instagram.com/caraplasticsurgery/'},
  {sns: 'facebook', link: 'https://www.facebook.com/caraplasticsurgerycenter/?ref=page_internal'},
  {sns: 'youtube', link: 'https://www.youtube.com/channel/UCUaecNgJPbHBiDlJB5CeTuQ/videos'},
  {sns: 'yelp', link: 'https://www.yelp.com/biz/cara-plastic-surgery-and-laser-center-los-angeles-2'},
  {sns: 'kakao', link: 'https://pf.kakao.com/_bFiDd'},
  {sns: 'wechat', link: 'https://www.datocms-assets.com/59206/1645483716-qr-code.jpeg'},
  {sns: 'tictoc', link: 'https://www.tiktok.com/@caraplasticsurgery'},
];

export default CoreFooter;
