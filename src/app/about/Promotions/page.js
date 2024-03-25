import React from 'react';

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
    </div>
  );
}
