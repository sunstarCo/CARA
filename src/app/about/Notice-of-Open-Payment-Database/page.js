import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';

export default function Page() {
  return (
    <div>
      <div>
        <AboutSecondBanner
          mainDesc="For informational purposes only, you can access the/federalCenters for Medicare and Medicaid Services/(CMS) Open Payments web page through this link."
          subDesc="The federal Physician Payments Sunshine Act mandates the disclosure ofcomprehensive information on payments and other items of value exceeding tendollars ($10) from manufacturers of drugs, medical devices, and biologics tophysicians and teaching hospitals, ensuring transparency for the public."
        />
      </div>
    </div>
  );
}
