import React from 'react';

import Image from 'next/image';

function Section1({img, desc, title, reverse = false, benefits, no_bg = false}) {
  return (
    <div className="relative py-[6.25rem] px-8">
      {no_bg || (
        <Image
          src="/logo/BG_logo.svg"
          alt="bg-logo"
          width={0}
          height={0}
          sizes="100"
          className="w-fit absolute bottom-0 right-0 -z-10"
        />
      )}

      <div className="flex flex-col justify-center items-center lg:flex-row gap-[6.25rem] max-w-[1556px] mx-auto">
        {!reverse && (
          <Image src={img} width={766} height={800} sizes="100" className="lg:w-1/2 object-cover" alt="why-choose" />
        )}
        <div className="lg:w-1/2">
          <h3 className=" text-[3.125rem] leading-normal font-trajan">{title}</h3>
          <div className="h-2 w-[6.25rem] bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
          <p className="text-xl leading-loose">{desc}</p>
          {benefits && (
            <div className="mt-[3.125rem]">
              <p className="text-32px leading-loose font-trajan">Benefits:</p>
              {
                <ul className="mt-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-5 text-lg leading-loose mt-5">
                      <div className="min-w-[10px] min-h-[10px] bg-[#BDB5AA]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              }
            </div>
          )}
        </div>
        {reverse && (
          <Image src={img} width={766} height={800} sizes="100" className="lg:w-1/2 object-cover" alt="why-choose" />
        )}
      </div>
    </div>
  );
}

export default Section1;
