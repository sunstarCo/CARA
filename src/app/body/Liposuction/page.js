import React from 'react';

import CardContainer from '@/components/detail/body/CardContainer';
import WhyChoose from '@/components/detail/WhyChoose';

export default function Page() {
  const desc =
    'At Cara Plastic Surgery & Laser Center Las Vegas, ourboard-certified surgeons are committed to delivering exceptional results with apatient-centric approach. We tailor each liposuction procedure to the uniqueneeds and goals of our clients, ensuring a personalized and satisfyingexperience. Schedule a consultation today to discuss yourliposuction goals with our expert surgeons. Let us help you sculpt your idealsilhouette and unlock a more confident and empowered version of yourself.';
  return (
    <div>
      <CardContainer />
      <WhyChoose desc={desc} />
    </div>
  );
}
