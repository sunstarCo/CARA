import React from 'react';

import Image from 'next/image';

function Greetings() {
  return (
    <div className="w-full bg-[url('/banner/main/BGDeco.png')] py-16 sm:py-[8.75rem] px-8 sm:px-[11.25rem] flex flex-col gap-10 sm:flex-row items-center justify-around bg-no-repeat bg-cover">
      <div className="w-full sm:w-[80%]">
        <p className="text-[2rem] sm:text-[3.25rem] uppercase sm:leading-normal font-trajan">
          <span className="text-[3rem] sm:text-[5rem]">D</span>
          iscover the Expertise of
          <br className="max-sm:hidden" /> Dr. David Kahng
        </p>
        <p className="text-3xl text-[#B3ABA0] font-medium max-sm:mt-8 sm:leading-loose">
          A leader in plastic and reconstructive surgery
        </p>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-6 sm:mt-10" />
        <p className="mt-8 sm:mt-12 text-2xl leading-loose">
          With a lifelong commitment to the realms of plastic and reconstructive surgery,{' '}
          <br className="max-2xl:hidden" />
          Dr. David Kahng leads the way in transforming lives. At Cara Plastic Surgery,
          <br className="max-2xl:hidden" /> his dedicated practice, he welcomes patients seeking both cosmetic
          enhancements
          <br className="max-2xl:hidden" /> and reconstructive solutions. Driven by a passion to merge his meticulous
          eye for
          <br className="max-2xl:hidden" /> detail with the noble endeavor of aiding others, he has chosen this field as
          his calling.
        </p>
      </div>
      <div>
        <Image
          src={'/banner/main/CR_text_img.svg'}
          alt=""
          width={0}
          height={0}
          sizes="100"
          className="w-[20rem] mt-10 sm:w-[29.1875rem]"
        />
      </div>
    </div>
  );
}

export default Greetings;
