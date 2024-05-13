import React from 'react';

export default function GalleryDetailIntro({title}) {
  return (
    <div className="text-center flex flex-col items-center pt-40 pb-10 px-8">
      <h3 className="text-4xl md:text-5xl leading-loose font-trajan">{title}</h3>
      <div className="w-[6.25rem] h-2 bg-[#9D9892] my-[3.125rem]" />
    </div>
  );
}
