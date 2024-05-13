'use client';
import React from 'react';

import Image from 'next/image';

import {useObserver} from '@/hooks';

function Section1({img, desc, title, reverse = false, benefits, no_bg = false}) {
  const {isVisible, domRef} = useObserver();
  return (
    <div className="relative py-16 sm:py-[6.25rem] px-8 mx-auto w-fit">
      {no_bg || (
        <Image
          src="/logo/BG_logo.svg"
          alt="bg-logo"
          width={0}
          height={0}
          sizes="100"
          className="w-fit absolute bottom-0 right-0 -z-10"
        />
      )}
      <div
        className={`flex max-md:max-w-[500px] max-md:aspect-video ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } flex-col justify-center items-center gap-10 sm:gap-[6.25rem] max-w-[1556px] mx-auto`}>
        <Image src={img} placeholder="blur" className="lg:w-1/2 object-cover" alt="example" />
        <div ref={domRef} className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h3 className="text-4xl max-sm:text-center sm:text-48px leading-normal font-trajan">{title}</h3>
          <div className="h-2 w-[6.25rem] bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
          {desc.split('/').map(word => {
            return (
              <p key={word} className="text-xl leading-loose">
                {word}
              </p>
            );
          })}
          {benefits && (
            <div className={`mt-[3.125rem] opacity-0 transition-all ${isVisible && 'animate-show_move_top'}`}>
              <p className="text-32px leading-loose font-trajan">Benefits:</p>
              {
                <ul className="mt-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-5 text-lg leading-loose mt-5">
                      <div className="min-w-[10px] min-h-[10px] bg-[#BDB5AA]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section1;
