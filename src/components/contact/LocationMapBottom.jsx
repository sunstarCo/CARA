import React from 'react';

import Image from 'next/image';

import ContactLoctionImg2 from '../../../public/detailpage/contactus/ContactMap2.png';
export default function LocationMapBottom() {
  return (
    <div className="max-sm:hidden">
      <p className="pt-10 text-3xl text-center lg:text-48px md:pt-36 pb-14 font-trajan">
        <a
          target="_blank"
          className="hover:text-gray-400"
          href="https://www.google.com/maps/place/CARA+Plastic+Surgery+%26+Laser+Center/@36.1260786,-115.2241888,17z/data=!3m1!4b1!4m6!3m5!1s0xac4275a5f158e4f7:0x97fd6cd9d83413cf!8m2!3d36.1260786!4d-115.2216139!16s%2Fg%2F11vwm258nx?sca_esv=924f3957077d70b1&output=search&q=cara+plastic+surgery+las+vegas&source=lnms&ved=1t:200715&ictx=111&coh=209933&entry=tts">
          LAS VEGAS
        </a>
      </p>
      <Image
        src={ContactLoctionImg2}
        width={1560}
        height={880}
        className="px-5 mx-auto"
        sizes="100"
        alt="LocationMapImage"></Image>
    </div>
  );
}
