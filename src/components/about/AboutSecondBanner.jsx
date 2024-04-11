'use client';
import React, {Fragment} from 'react';

import {useObserver} from '@/hooks/useObserver';

export default function AboutSecondBanner({mainDesc, subDesc, contents}) {
  const {isVisible, domRef} = useObserver();
  return (
    <div className="py-[8.75rem] bg-[url('/banner/about/BGDeco.png')] bg-cover bg-center md:px-32 px-8 2xl:px-[16.375rem]">
      <div
        className={`max-w-[2100px] mx-auto flex flex-col items-center justify-center opacity-0 transition-all ${
          isVisible && 'animate-show_move_top'
        }`}>
        {contents ? (
          <div ref={domRef} className="flex flex-col lg:flex-row">
            {contents.map((content, index) => (
              <Fragment key={content.title}>
                <div key={index} className=" flex flex-col items-center max-w-[660px]">
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
            <div className="text-center text-wrap font-trajan">
              {mainDesc.split('/').map(word => {
                return (
                  <p key={word} className={`text-[2.5rem] ${subDesc ? 'sm:text-48px' : 'sm:text-4xl'}  mt-4`}>
                    {word}
                  </p>
                );
              })}
            </div>
            <div ref={domRef} className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
            {subDesc && (
              <sub className="text-xl font-light leading-[2.8125rem] text-center max-w-[1400px] mx-auto">{subDesc}</sub>
            )}
          </>
        )}
      </div>
    </div>
  );
}
