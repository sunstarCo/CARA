import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CreditBanner from '@/components/about/financing/CreditBanner';
import InsuranceBanner from '@/components/about/financing/InsuranceBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="FINANCING &/INSURANCE"
        contents="If you arecontemplating plastic surgery, a cosmetic enhancement, or a non-surgicaltreatment, we offer viable financing options to make your desired treatmentaccessible and achievable."
      />
      <AboutSecondBanner
        mainDesc="We strongly believe that having/the procedure you desire when you need it/cansignificantly enhance your quality of life."
        subDesc="Our flexible financing options aredesigned to allow you to undergo your chosen treatment or procedure without theburden of financial stress. While some procedures may be covered, either whollyor partially, by your health insurance, it's important to note that manycosmetic procedures are not covered. Discover more about your options throughan email consultation or an in-person discussion with our team."
      />
      <CreditBanner />
      <InsuranceBanner />
    </div>
  );
}
