import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Reviews"
        contents="Discoverfirsthand accounts of our expertise by exploring reviews from individuals whohave undergone procedures at our clinics. Take a moment to read the experiencesshared by our satisfied patients."
      />
      <AboutSecondBanner mainDesc="Reviews" subDesc="" />
    </div>
  );
}
