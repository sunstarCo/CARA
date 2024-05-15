import React from 'react';

import Image from 'next/image';

export default function SpotCard({spotInfo}) {
  return (
    <div className="flex flex-col  gap-[1.875rem]  items-center text-[1.625rem] font-trajan">
      <div className="relative overflow-hidden w-[23.5rem] h-[13.75rem]">
        <Image
          src={`/banner/main/spot/${spotInfo.image}-Spot.png`}
          fill
          sizes="350px"
          alt={`${spotInfo.name} spot Image`}
        />
      </div>
      <p>{spotInfo.name}</p>
    </div>
  );
}
