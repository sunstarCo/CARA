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
        contents="Whether you are contemplating plastic surgery, a cosmetic enhancement, or a non-surgical treatment, we offer viable financing options to make your desired treatment accessible and achievable."
      />
      <AboutSecondBanner
        mainDesc="We strongly believe that having/the procedure you desire when you need it can significantly enhance your quality of life."
        subDesc="Our flexible financing options are designed to allow you to undergo your chosen treatment or procedure without the burden of financial stress. While some procedures may be covered, either wholly or partially, by your health insurance, it's important to note that many cosmetic procedures are not covered. Discover more about your options through an email consultation or an in-person discussion with our team."
      />
      <CreditBanner />
      <InsuranceBanner />
    </div>
  );
}
