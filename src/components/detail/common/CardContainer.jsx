import React from 'react';

import Image from 'next/image';

function CardContainer({title, benefits}) {
  return (
    <div className="relative w-full overflow-hidden bg-[#EAE9E5]">
      <Image
        src={'/detailpage/bg/Liposuction_bg.png'}
        alt=""
        fill
        sizes="100"
        className="object-cover object-left-top "
      />
      <div className={`flex flex-col items-center py-20 sm:py-40`}>
        <h3 className="text-4xl leading-normal text-center max-w-[85%] font-trajan">{title}</h3>
        <div className="w-[6.25rem] h-2 bg-[#9d9892] my-16" />
        <div className="grid sm:grid-cols-2 justify-center gap-10 w-[85%]">
          {benefits.slice(0, 4).map((data, index) => (
            <div key={index} className="text-center bg-white p-4 sm:p-[3.75rem]">
              <div className="pt-1 px-[10px] w-[3.125rem] h-[3.125rem] mx-auto mb-5 bg-[#D9D5CC] text-3xl leading-normal">
                {index + 1}
              </div>
              <h4 className="text-[1.75rem] leading-normal font-trajan">{data.title}</h4>
              <p className="text-xl leading-loose mt-2">{data.desc}</p>
            </div>
          ))}
        </div>
        {benefits[4] && (
          <div className="text-center bg-white p-[3.75rem] w-[85%] mt-10">
            <div className="pt-1 px-[10px] w-[3.125rem] h-[3.125rem] mx-auto mb-5 bg-[#D9D5CC] text-3xl leading-normal">
              5
            </div>
            <h4 className="text-[1.75rem] leading-normal font-trajan">{benefits[4].title}</h4>
            <p className="text-xl leading-loose mt-2 max-w-[1200px] mx-auto">{benefits[4].desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardContainer;
