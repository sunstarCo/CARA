import React from 'react';

export default function AboutSecondBanner({mainDesc, subDesc}) {
  return (
    <div className="py-[8.75rem] bg-[url('/banner/about/BGDeco.png')] bg-cover md:px-32 px-8 xl:px-[16.375rem]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="text-center text-wrap font-trajan">
          {mainDesc.split('/').map(word => {
            return (
              <p key={word} className="text-[2.5rem] sm:text-[3.125rem] uppercase mt-4">
                {word}
              </p>
            );
          })}
        </div>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
        {subDesc && <sub className="text-2xl leading-[2.8125rem] text-center">{subDesc}</sub>}
      </div>
    </div>
  );
}
