import React from 'react';

export default function AboutSecondBanner({mainDesc, subDesc}) {
  return (
    <div className=" py-[8.75rem]  bg-[url('/banner/about/BGDeco.png')] bg-cover">
      <div className="max-w-[87.25rem]  mx-auto flex flex-col items-center">
        <main className="text-center">
          {mainDesc.split('/').map(word => {
            return (
              <p key={word} className="text-[3.125rem] uppercase lg:text-nowrap break-keep">
                {word}
              </p>
            );
          })}
        </main>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]"></div>
        <sub className="text-2xl text-center leading-[2.8125rem]">{subDesc}</sub>
      </div>
    </div>
  );
}
