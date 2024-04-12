import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import nextIcon from '../../../public/icons/next.svg';

export default function GalleryLink({item, title}) {
  return (
    <div className="">
      <Link
        className="text-[#585451] flex justify-between py-4 border-b text-lg font-light"
        href={`/Before&After/${item.split(' ').join('-')}`}>
        <span>{item}</span>
        <Image alt="linkIcon" src={nextIcon} width={24} height={24} />
      </Link>
    </div>
  );
}
