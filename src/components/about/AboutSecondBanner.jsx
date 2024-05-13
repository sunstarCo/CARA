'use client';
import React, {Fragment} from 'react';

import {useObserver} from '@/hooks/useObserver';

export default function AboutSecondBanner({mainDesc, subDesc, contents, longText = false}) {
  const {isVisible, domRef} = useObserver();
  return (
    <div
      ref={domRef}
      className="py-16 md:py-[8.75rem] bg-[url('/banner/about/BGDeco.png')] bg-cover bg-center px-8 md:px-32 2xl:px-[16.375rem]">
      <div
        className={`max-w-[2100px] mx-auto flex flex-col items-center justify-center transition-all ${
          isVisible & !contents ? 'opacity-0 animate-show_move_top' : ''
        }`}>
        {contents !== undefined ? (
          <div className="flex flex-col lg:flex-row">
            {isVisible &&
              contents.map((content, index) => (
                <Fragment key={content.title}>
                  <div
                    key={index}
                    className={`flex flex-col items-center max-w-[660px] opacity-0 ${
                      isVisible && index === 0 ? 'animate-show_move_right' : 'animate-show_move_left'
                    }`}>
                    <p className={`text-4xl mt-4 font-trajan text-center leading-normal`}>{content.title}</p>
                    <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
                    <sub className="text-xl leading-loose text-center tracking-[0.5px]">{content.desc}</sub>
                  </div>
                  {index !== contents.length - 1 && (
                    <div className="w-[1px] h-[12.5rem] max-lg:opacity-0 bg-[#BDB5AA] mx-[7.5rem]" />
                  )}
                </Fragment>
              ))}
          </div>
        ) : (
          <>
            <div className="text-xl sm:text-3xl leading-loose sm:text-center text-wrap max-w-[1400px]">
              {mainDesc.split('/').map(word => {
                return (
                  <p key={word} className={`${!longText && 'text-5xl leading-normal font-trajan'}`}>
                    {word}
                  </p>
                );
              })}
            </div>
            <div className={`w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem] ${longText && 'hidden'}`} />
            {subDesc && (
              <sub className="text-xl font-light leading-[2.8125rem] text-center max-w-[1400px] mx-auto">
                {subDesc.includes('/') ? subDesc.split('/').map(a => <p key={a}>{a}</p>) : subDesc}
              </sub>
            )}
          </>
        )}
      </div>
    </div>
  );
}
