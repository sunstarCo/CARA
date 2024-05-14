import React from 'react';

import Image from 'next/image';

import ContactLoctionImg1 from '../../../public/detailpage/contactus/ContactMap1.png';
export default function LocationMapTop() {
  return (
    <div className="max-sm:hidden">
      <p className="pt-10 text-3xl text-center lg:text-48px md:pt-48 pb-14 font-trajan">
        <a
          target="_blank"
          className="hover:text-gray-400"
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x80c2bbf7d9899fd9:0xa90a8853fec53418?source=g.page.share">
          LOS ANGELES
        </a>{' '}
        &{' '}
        <a
          target="_blank"
          className="hover:text-gray-400"
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x80dd2b0b3dce352d:0x6f3c1965be05227c?source=g.page.share">
          ORANGE COUNTY
        </a>{' '}
        &{' '}
        <a
          target="_blank"
          className="hover:text-gray-400"
          href="https://www.google.com/maps/place/CARA+Plastic+Surgery+%26+Laser+Center+:+David+Kahng,+M.D.+%2F+Breast+Aug+%2F+Asian+Rhinoplasty/@34.103098,-118.0812269,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2db3528790a0b:0x36b07cc2293fb717!8m2!3d34.103098!4d-118.0790329?shorturl=1">
          SAN GABRIEL VALLEY
        </a>
      </p>
      <Image
        src={ContactLoctionImg1}
        width={1560}
        height={880}
        className="px-5 mx-auto"
        sizes="100"
        alt="LocationMapImage"></Image>
    </div>
  );
}
