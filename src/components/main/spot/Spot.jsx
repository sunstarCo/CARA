import React from 'react';

import Image from 'next/image';

import SpotCard from './SpotCard';

export default function Spot() {
  return (
    <div className="relative w-full h-[940px] overflow-hidden">
      <div className="absolute top-0 left-0 flex">
        <div className={`w-screen h-[940px] relative flex  justify-center`}>
          <Image src={'/banner/main/spot/SpotBG.png'} alt="" fill sizes="100" className="object-cover object-top" />
          <div className="absolute flex flex-col gap-[6.25rem] items-center justify-center w-full h-full px-4 text-white ">
            <div className="flex flex-col items-center text-center leading-loose sm:leading-[3.5rem] 2xl:leading-[4.5rem] text-3xl sm:text-4xl 2xl:text-5xl opacity-80 font-trajan">
              <p>CARA PLASTIC SURGERY & LASER CENTER</p>
              <p>AESTHETIC EXCELLENCE IN LAS VEGAS,</p>
              <p>
                LOS ANGELES, BUENA PARK,
                <br className="lg:hidden" /> AND SAN GABRIEL VALLEY
              </p>
            </div>
            <div className="overflow-auto w-[90%] py-4">
              <div className="flex gap-5 mx-auto w-fit">
                {spotArr.map(spot => {
                  return <SpotCard key={spot.name} spotInfo={spot} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const spotArr = [
  {name: 'LAS VEGAS', image: 'LasVegas'},
  {name: 'LOS ANGELES', image: 'LA'},
  {name: 'BUENA PARK', image: 'BuenaPark'},
  {name: 'SAN GABRIEL VALLEY', image: 'SanGabrielValley'},
];
