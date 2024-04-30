import React from 'react';

import Reviews from '@/components/about/Reviews';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Reviews"
        contents="Discover our expertise firsthand by exploring reviews from individuals who have undergone procedures at our clinics. Take a moment to read the experiences shared by our satisfied patients."
      />
      <div className="flex flex-col items-center py-40">
        <h3 className="text-[2.5rem] sm:text-48px text-center mt-[3.125rem] font-trajan">Real Patient Reviews</h3>
        <div className="w-[6.25rem] h-2 bg-[#BDB5AA] mt-10 mb-[3.125rem]" />
        <Reviews />
      </div>
    </div>
  );
}
