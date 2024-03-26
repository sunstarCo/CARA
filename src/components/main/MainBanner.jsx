import React from 'react';

import Image from 'next/image';

function MainBanner() {
  return (
    <section>
      <div className="relative w-full h-[calc(100vh-8.875rem)] overflow-hidden font-trajan">
        <div className="absolute top-0 left-0 flex">
          <div className={`w-screen h-[calc(100vh-8.875rem)] relative flex justify-center items-center`}>
            <Image src={'/banner/main/MainBanner.jpg'} alt="" fill sizes="100" className="object-cover" />
            <div className="absolute text-white uppercase">
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
      <Image src={'/banner/main/SlideBanner.png'} alt="" width={0} height={0} sizes="100" className="w-full" />
    </section>
  );
}

export default MainBanner;
