import React from 'react';

import Image from 'next/image';

import GalleryLink from './GalleryLink';

export default function GalleryCard({info}) {
  const {title, sub, img} = info;
  return (
    <div className="max-w-[28.3125rem] mx-auto">
      <Image src={img} alt={`${title} image`} width={453} height={320} />
      <p className="text-[2.5rem] font-trajan mt-10">{title}</p>
      <div className="flex flex-col">
        {sub.map(item => {
          return <GalleryLink key={item} title={title} item={item} />;
        })}
      </div>
    </div>
  );
}
