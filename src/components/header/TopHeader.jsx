import React from 'react';

import Image from 'next/image';

function TopHeader() {
  return (
    <section className="bg-[#151515] w-full h-12 flex items-center justify-center px-20 relative">
      <div className="flex text-white gap-9">
        <Image src={'/icons/Los Angeles.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/SaN Gablel Velley.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/blo.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <Image src={'/icons/OrangeCounty.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
      </div>
      {/* <div className="absolute top-0 right-0 flex items-center justify-end w-full h-full gap-6 pr-20">
        <div className="flex gap-2 text-white">
          <Image src={'/icons/call.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
          <p>855-212-9901</p>
        </div>
        <div className="flex gap-2 text-white">
          <Image src={'/icons/country.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
          <div>
            <p>English</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default TopHeader;
