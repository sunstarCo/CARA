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
        mainDesc="For informational purposes only, you can access the/federalCenters for Medicare and Medicaid Services/(CMS) Open Payments web page through this link."
        subDesc="The federal Physician Payments Sunshine Act mandates the disclosure ofcomprehensive information on payments and other items of value exceeding tendollars ($10) from manufacturers of drugs, medical devices, and biologics tophysicians and teaching hospitals, ensuring transparency for the public."
      />
    </div>
  );
}
