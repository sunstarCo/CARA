'use client';
import React from 'react';

import {useObserver} from '@/hooks/useObserver';

export default function AboutSecondBanner({mainDesc, subDesc}) {
  const {isVisible, domRef} = useObserver();
  return (
    <div className="py-[8.75rem] bg-[url('/banner/about/BGDeco.png')] bg-cover md:px-32 px-8 xl:px-[16.375rem]">
      <div
        className={`max-w-[2100px] mx-auto flex flex-col items-center justify-center opacity-0 transition-all ${
          isVisible && 'animate-show_move_top'
        }`}>
        {mainDesc && (
          <div className="text-center text-wrap font-trajan">
            {mainDesc.split('/').map(word => {
              return (
                <p key={word} className="text-[2.5rem] sm:text-4xl mt-4">
                  {word}
                </p>
              );
            })}
          </div>
        )}
        <div ref={domRef} className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
        {subDesc && (
          <sub className="text-xl font-light leading-[2.8125rem] text-center max-w-[1400px] mx-auto">{subDesc}</sub>
        )}
      </div>
    </div>
  );
}
