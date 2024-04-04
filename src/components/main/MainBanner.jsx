import React from 'react';

import Image from 'next/image';

function MainBanner() {
  return (
    <section>
      <div className="relative w-full h-[calc(100vh-8.875rem)] overflow-hidden font-trajan">
        <div className="absolute top-0 left-0 flex">
          <div className={`w-screen h-[calc(100vh-8.875rem)] relative flex justify-center items-center`}>
            <Image src={'/banner/main/MainBanner.jpg'} alt="" fill sizes="100" className="object-cover" priority />
            <div className="absolute text-white animate-show transition-opacity">
              <div className="text-4xl lg:text-7xl text-center leading-normal font-normal -tracking-tight ">
                <p>A Leading of Plastic Sergeon</p>
                <p>in Las Vegas / Los Angeles</p>
              </div>
              <p className="text-2xl font-bold leading-normal mt-8 pb-2 border-b border-white w-fit mx-auto px-2">
                SCHEDULE CONSULTATION
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1700px] py-12 px-8 mx-auto flex gap-2 flex-wrap">
        {[...Array(7)].map((_, i) => (
          <Image
            key={i}
            src={`/banner/main/logos/logo${i + 1}.png`}
            alt=""
            width={0}
            height={0}
            sizes="100"
            className={`min-w-[120px] w-[14%] mx-auto ${
              i === 6 ? 'h-[2rem] max-w-[320px]' : 'h-[3.125rem] max-w-[120px]'
            } my-auto  object-contain`}
          />
        ))}
      </div>
    </section>
  );
}

export default MainBanner;
