import React from 'react';

export default function DivideBoxCard({info}) {
  const {title, desc} = info;
  return (
    <div className="max-w-[47.375rem] bg-white  flex gap-10 flex-col mx-auto px-8 lg:px-20 py-[6.25rem]">
      <div className="text-4xl  text-[#1C1815] leading-normal text-center uppercase">
        {title.split('/').map(word => {
          return <p key={word}>{word}</p>;
        })}
      </div>
      <p className="text-xl text-center text-[#585451] leading-[2.375rem]">{desc}</p>
    </div>
  );
}