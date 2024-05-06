import React from 'react';

import AboutPaymentSecondBanner from '@/components/about/AboutPaymentSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner url="About" title="Notice Of Open/Payments Database">
        <p className="text-2xl leading-[2.5rem] ">
          Cara Plastic Surgery is committed to transparency and compliance. As part of this commitment, we want to
          inform our patients that payments worth over ten dollars ($10) made to our practitioners may be publicly
          disclosed in the Open Payments Database, as mandated by federal regulations, providing transparency regarding
          financial relationships within the healthcare industry. This data is used solely for informational purposes,
          and you can find a link{' '}
          <a href="https://openpaymentsdata.cms.gov/" target="_blank" className="underline text-[#1C40FF]">
            here
          </a>{' '}
          to the federal Centers for Medicare and Medicaid Services, Open Payments web page.
        </p>
      </CommonTopBanner>
      <AboutPaymentSecondBanner />
    </div>
  );
}
