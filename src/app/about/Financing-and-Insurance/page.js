import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Notice Of Open/Payments Database"
        contents="CaraPlastic Surgery is committed to transparency and compliance. As part of thiscommitment, we want to inform our patients that certain payments made to ourpractitioners may be publicly disclosed in the Open Payments Database, asmandated by federal regulations, providing transparency regarding financialrelationships within the healthcare industry."
      />
      <AboutSecondBanner
        mainDesc="We strongly believe that having/the procedure you desire when you need it/cansignificantly enhance your quality of life."
        subDesc="Our flexible financing options aredesigned to allow you to undergo your chosen treatment or procedure without theburden of financial stress. While some procedures may be covered, either whollyor partially, by your health insurance, it's important to note that manycosmetic procedures are not covered. Discover more about your options throughan email consultation or an in-person discussion with our team."
      />
    </div>
  );
}
