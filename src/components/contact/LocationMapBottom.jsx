import React from 'react';

import Image from 'next/image';

import ContactLoctionImg2 from '../../../public/detailpage/contactus/ContactMap2.png';
export default function LocationMapBottom() {
  return (
    <div>
      <p className="pt-10 text-48px text-center md:pt-36 pb-14 font-trajan">LAS VEGAS</p>
      <Image
        src={ContactLoctionImg2}
        width={1560}
        height={880}
        className="mx-auto"
        sizes="100"
        alt="LocationMapImage"></Image>
    </div>
  );
}
