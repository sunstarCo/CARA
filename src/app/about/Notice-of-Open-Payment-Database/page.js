import React from 'react';

import AboutPaymentSecondBanner from '@/components/about/AboutPaymentSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Notice Of Open/Payments Database"
        contents="CaraPlastic Surgery is committed to transparency and compliance. As part of thiscommitment, we want to inform our patients that certain payments made to ourpractitioners may be publicly disclosed in the Open Payments Database, asmandated by federal regulations, providing transparency regarding financialrelationships within the healthcare industry."
      />
      <AboutPaymentSecondBanner />
    </div>
  );
}
