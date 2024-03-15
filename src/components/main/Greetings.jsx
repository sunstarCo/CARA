import React from 'react';

import Image from 'next/image';

function Greetings() {
  return (
    <div className="w-full bg-[url('/banner/main/BGDeco.png')] py-[140px] px-[182px] flex items-center justify-around bg-no-repeat bg-cover">
      <div>
        <p className="text-[52px] uppercase leading-normal">
          <span className="text-[80px]">D</span>
          iscover the Expertise of
          <br /> Dr. David Kahng
        </p>
        <p className="text-3xl text-[#B3ABA0] font-medium leading-loose">
          A leader in plastic and reconstructive surgery
        </p>
        <div className="w-[100px] h-2 bg-[#BDB5AA] mt-10" />
        <p className=" mt-12 text-2xl leading-loose">
          With a lifelong commitment to the realms of plastic and reconstructive surgery, <br />
          Dr. David Kahng leads the way in transforming lives. At Cara Plastic Surgery,
          <br /> his dedicated practice, he welcomes patients seeking both cosmetic enhancements
          <br /> and reconstructive solutions. Driven by a passion to merge his meticulous eye for
          <br /> detail with the noble endeavor of aiding others, he has chosen this field as his calling.
        </p>
      </div>
      <div>
        <Image src={'/banner/main/CR_text_img.svg'} alt="" width={0} height={0} sizes="100" className="w-[467px] " />
      </div>
    </div>
  );
}

export default Greetings;
