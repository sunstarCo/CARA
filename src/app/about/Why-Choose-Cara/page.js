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
        contents="Dr. David Kahng stands as a plastic surgeon with a global perspective. Dr. Kahng cultivated a global outlook on beauty through his upbringing in diverse countries around the world. Having traversed the world, he has garnered professional insights into the latest advancements in modern plastic surgery techniques in both the USA and South Korea. His wealth of experience and expertise in executing cosmetic and reconstructive surgeries has positioned him as one of the most highly sought-after professionals in his field."
      />
      <AboutSecondBanner
        mainDesc="Why Choose/CARA Plastic Surgery?"
        subDesc={`Since 2006, breast augmentation has consistently ranked as the most sought-after cosmetic surgery in the USA. When contemplating a cosmetic procedure, the credentials of your plastic surgeon play a pivotal role, and in this regard, you can rest assured you are in good hands when you work with Dr. David Kahng, who stands as a highly skilled and top-tier surgeon in the USA. Renowned for his mastery in plastic surgery techniques and exceptional proficiency in breast enhancement, anti-aging treatments, and face and body rejuvenation, Dr. David Kahng is a trusted authority known for his impeccable qualifications, credentials, artistry, and extensive experience. As a highly accomplished and skilled plastic surgeon in the Los Angeles, Orange County, and Las Vegas areas, Dr. Kahng is recognized for delivering outstanding results as well as exemplary patient care.`}
      />
      <DivideBoxBanner />
    </div>
  );
}
