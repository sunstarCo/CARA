import React from 'react';

import Image from 'next/image';
export default function ImgCard(src, num) {
  return (
    <>
      <Image src={src} alt="sergeryImage" width={493} height={280} />
      <div></div>
    </>
  );
}
