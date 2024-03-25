import React from 'react';

import Image from 'next/image';

import promotion1 from '../../../../public/banner/about/promotion/PromotionImg1.png';
import promotion2 from '../../../../public/banner/about/promotion/PromotionImg2.png';
import promotion3 from '../../../../public/banner/about/promotion/PromotionImg3.png';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Special Offers &/promotions"
        contents="Explorethe latest specials and promotions at Cara Plastic Surgery. Our enticingpromotions are updated monthly, so make sure to check back regularly todiscover our newest offerings."
      />
      <AboutSecondBanner mainDesc="Specials & /Promotions" subDesc="" />
      <div className="flex flex-col items-center w-full">
        <Image src={promotion1} width={1000} height={1000} sizes="100" className="" alt="promotionBanner" />

        <Image src={promotion2} width={1000} height={1000} sizes="100" className="" alt="promotionBanner" />

        <Image src={promotion3} width={1000} height={1000} sizes="100" className="" alt="promotionBanner" />
      </div>
    </div>
  );
}
