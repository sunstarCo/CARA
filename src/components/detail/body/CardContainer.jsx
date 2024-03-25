import React from 'react';

import Image from 'next/image';

const cardData = [
  {
    title: 'Benefits of Liposuction',
    desc: 'Liposuction allows forprecise targeting of specific areas, enabling the removal of stubborn fatdeposits that may be resistant to traditional weight loss methods.',
  },
  {
    title: 'Targeted FatReduction',
    desc: 'Liposuction allows forprecise targeting of specific areas, enabling the removal of stubborn fatdeposits that may be resistant to traditional weight loss methods.',
  },
  {
    title: 'EnhancedBody Contour',
    desc: 'Achieve a moresculpted and defined physique, enhancing your natural curves and proportions.',
  },
  {
    title: 'Improved Confidence',
    desc: 'Liposuction can lead toa boost in self-esteem and body confidence as you enjoy the results of aslimmer and more contoured appearance.',
  },
  {
    title: 'Minimally Invasive',
    desc: 'Our advanced liposuctiontechniques ensure minimal scarring and a quicker recovery compared totraditional surgical procedures.',
  },
  {
    title: 'Long-lasting Results',
    desc: 'While maintaining a healthylifestyle is essential, the results of liposuction are long-lasting, providingenduring improvements to your body contours.',
  },
];

function CardContainer() {
  return (
    <div className=" relative w-full h-[80rem] overflow-hidden bg-[#EAE9E5]">
      <div className="absolute top-0 left-0 flex ">
        <div className={`w-screen h-[80rem] relative flex flex-col items-center py-40`}>
          <Image
            src={'/detailpage/bg/Liposuction_bg.png'}
            alt=""
            fill
            sizes="100"
            className="object-cover object-left-top"
          />
          <h3 className="text-5xl leading-normal text-center max-w-[85%] uppercase">
            If you have areas ofpersistent fat that hinder your body goals, liposuction can be a suitablesolution to
            achieve the contours you desire.
          </h3>
          <div className="w-[6.25rem] h-2 bg-[#9d9892] my-10" />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
