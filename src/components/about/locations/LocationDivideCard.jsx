import React from 'react';

export default function LocationDivideCard({info, i}) {
  const {title, desc} = info;
  return (
    <div className="max-w-[47.375rem] bg-white text-white bg-opacity-20  flex gap-10 flex-col mx-auto px-8 lg:px-20 py-[6.25rem]">
      <div className="text-3xl text-white bg-[rgb(48,44,41)] leading-normal w-[3.125rem] mx-auto h-[3.125rem] text-center">
        <p>{i}</p>
      </div>
      <div className="text-4xl leading-normal text-center uppercase">
        {title.split('/').map(word => {
          return <p key={word}>{word}</p>;
        })}
      </div>
      <p className="text-xl text-center  leading-[2.375rem]">{desc}</p>
    </div>
  );
}
