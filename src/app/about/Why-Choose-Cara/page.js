import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import DivideBoxBanner from '@/components/about/why-choose-cara/DivideBoxBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Why Choose Cara"
        contents="Dr. David Kahng stands as a plastic surgeon with a global perspective.Having traversed the world, he has garnered professional insights into thelatest advancements in modern plastic surgery techniques in both the USA andSouth Korea. His wealth of experience and expertise in executingcosmetic and reconstructive surgeries has positioned him as one of the mosthighly sought-after professionals in his field."
      />
      <AboutSecondBanner
        mainDesc="Why Choose/CARA Plastic Surgery?"
        subDesc="Since 2006, breastaugmentation has consistently ranked as the most sought-after cosmetic surgeryin the USA. When contemplating a cosmetic procedure, the credentials of yourplastic surgeon play a pivotal role, and in this regard, Dr. David Kahng standsas a highly skilled and top-tier surgeon in the USA. Renownedfor his mastery in Asian plastic surgery techniques and exceptional proficiencyin breast enhancement, anti-aging treatments, and face and body rejuvenation,Dr. David Kahng is a trusted authority known for his impeccable qualifications,credentials, artistry, and extensive experience. As ahighly accomplished and skilled plastic surgeon in the Los Angeles/OrangeCounty/Las Vegas area, Dr. Kahng is recognized for delivering outstandingresults and exemplary patient care."
      />
      <DivideBoxBanner />
    </div>
  );
}
