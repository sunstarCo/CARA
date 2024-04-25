import React from 'react';

import Image from 'next/image';

function CardContainer({title, benefits, theme = 'default'}) {
  const isDark = theme == 'dark';
  return (
    <div className={`relative w-full overflow-hidden ${isDark || 'bg-[#EAE9E5]'} `}>
      <Image
        src={'/detailpage/bg/Liposuction_bg.png'}
        alt=""
        fill
        sizes="100"
        className={`object-cover object-left-top ${isDark && 'hidden'}`}
      />
      <div className={`flex flex-col items-center py-20 sm:py-40`}>
        <h3 className="text-4xl sm:text-48px leading-normal text-center max-w-[85%] font-trajan">{title}</h3>
        <div className="w-[6.25rem] h-2 bg-[#9d9892] my-16" />
        <div className="grid sm:grid-cols-2 justify-center gap-10 w-[85%] max-w-[1800px]">
          {benefits.slice(0, 4).map((data, index) => (
            <div
              key={index}
              className={`text-center p-6 sm:p-[3.75rem] relative ${
                isDark ? 'bg-[#302C29] bg-opacity-80 text-white' : 'bg-white'
              }`}>
              <Image
                src={'/detailpage/bg/card_bg_deco.png'}
                alt=""
                fill
                sizes="100"
                className={`object-cover object-left-top ${isDark || 'hidden'}`}
              />
              <div className="pt-[6px] px-[16px] w-fit mx-auto mb-5 relative bg-[#D9D5CC] text-[1.625rem] text-black font-trajan leading-normal">
                <div className="absolute bg-[#D9D5CC] w-full h-full top-0 left-0 -z-10" />
                {index + 1}
              </div>
              <h4 className="text-[1.75rem] leading-normal font-trajan">{data.title}</h4>
              <p className={`text-xl leading-loose mt-2 ${isDark || 'text-[#585451]'}`}>{data.desc}</p>
            </div>
          ))}
        </div>
        {benefits[4] && (
          <div
            className={`text-center p-6 sm:p-[3.75rem] w-[85%] mt-10 relative  ${
              isDark ? 'bg-[#302C29] bg-opacity-80 text-white' : 'bg-white'
            }`}>
            <Image
              src={'/detailpage/bg/card_bg_deco.png'}
              alt=""
              fill
              sizes="100"
              className={`object-cover object-left-top ${isDark || 'hidden'}`}
            />
            <div className="pt-[6px] px-[16px] w-fit mx-auto mb-5 relative bg-[#D9D5CC] text-[1.625rem] text-black font-trajan leading-normal">
              <div className="absolute bg-[#D9D5CC] w-full h-full top-0 left-0 -z-10" />5
            </div>
            <h4 className="text-[1.75rem] leading-normal font-trajan">{benefits[4].title}</h4>
            <p className={`text-xl leading-loose mt-2 max-w-[1200px] mx-auto ${isDark || 'text-[#585451]'}`}>
              {benefits[4].desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardContainer;
