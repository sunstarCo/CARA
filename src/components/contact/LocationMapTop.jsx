import React from 'react';

import Image from 'next/image';

import ContactLoctionImg1 from '../../../public/detailpage/contactus/ContactMap1.png';
export default function LocationMapTop() {
  return (
    <div>
      <p className="pt-10 text-48px text-center md:pt-48 pb-14 font-trajan">
        LOS ANGELES & ORANGE COUNTY & SAN GABRIEL VALLEY
      </p>
      <Image
        src={ContactLoctionImg1}
        width={1560}
        height={880}
        className="mx-auto"
        sizes="100"
        alt="LocationMapImage"></Image>
    </div>
  );
}
