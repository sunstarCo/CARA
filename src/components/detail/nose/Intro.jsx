import React from 'react';

function Intro({title, desc}) {
  return (
    <div className="text-center flex flex-col items-center max-w-[98rem] mx-auto pt-24 md:py-[8.75rem] px-8">
      <h3 className="text-[2.5rem] leading-loose uppercase font-trajan">{title}</h3>
      <div className="w-[6.25rem] h-2 bg-[#9D9892] my-[3.125rem]" />
      <p className="text-3xl leading-loose">{desc}</p>
    </div>
  );
}

export default Intro;
