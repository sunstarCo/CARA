import React from 'react';

import WHAT_IS_IMG from '@img/detailpage/face/FaceCommon.jpg';
import TOP_BANNER_IMG from '@img/detailpage/face/LowerEyelid.jpg';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

const images_data = ['/B&A/example.jpg', '/B&A/example.jpg', '/B&A/example.jpg', '/B&A/example.jpg'];

const benefits = [
  {
    title: 'Youthful, Alert Appearance',
    desc: 'Brow lift surgery can rejuvenate your appearance by restoring a more youthful and lifted brow position, making you appear more alert and refreshed.',
  },
  {
    title: 'Smoothed Forehead',
    desc: 'Say goodbye to deep wrinkles and furrows on your forehead, achieving a smoother and more youthful-looking complexion.',
  },
  {
    title: 'Enhanced Facial Harmony',
    desc: 'By lifting the brows, brow lift surgery can improve the overall balance and symmetry of your facial features, enhancing your natural beauty.',
  },
  {
    title: 'Boosted Confidence',
    desc: 'Enjoy newfound confidence and self-assurance as you see a more vibrant and refreshed reflection in the mirror.',
  },
];

export default function Page() {
  const what_is =
    'A brow lift, also known as a forehead lift, is a surgical procedure designed to elevate the brows and smooth forehead wrinkles, resulting in a more refreshed and youthful appearance. As we age, the skin on the forehead can lose elasticity, causing the brows to droop and creating deep furrows or lines across the forehead. Brow lift surgery addresses these concerns by lifting the brow line, tightening underlying muscles, and removing excess skin to create a more youthful and harmonious facial contour.';
  const who_needs =
    "Brow lift surgery is an excellent option for individuals who are bothered by sagging brows, deep forehead wrinkles, or a tired or angry expression caused by drooping brows. Whether you're experiencing these signs of aging due to genetics, sun exposure, or the natural aging process, our experienced surgeons can tailor a brow lift procedure to address your specific concerns and help you achieve your desired aesthetic outcome.";
  const whyChoose_desc =
    'At CARA Plastic Surgery & Laser Center Las Vegas, we are committed to providing personalized care and exceptional results. Schedule a consultation with us today to learn more about how brow lift surgery can help you elevate your look and restore a more youthful appearance.';

  return (
    <>
      <CommonTopBanner
        url="Face"
        img={TOP_BANNER_IMG}
        title="Brow Lift"
        contents="Endoscopic surgery offers a pathway to rejuvenating your overall facial appearance by repositioning the brow, resulting in a more youthful and refreshed look. This procedure avoids the need for cutting or shaving hair and has the potential to revitalize your entire appearance."
      />
      <Intro
        title={'Brow Lift'}
        desc={
          "At CARA Plastic Surgery & Laser Center Las Vegas, we specialize in helping you achieve your aesthetic goals with precision and expertise. If you're seeking to rejuvenate your appearance and restore a more youthful, lifted brow, our brow lift surgery may be the ideal solution for you."
        }
      />
      <Section1 desc={what_is} title={'What is Brow Lift?'} img={WHAT_IS_IMG} />
      <CardContainer title={'Benefits of Brow Lift'} benefits={benefits} theme="dark" />
      <BeforeAfter images_data={images_data} />
      <AboutSecondBanner mainDesc="Who Can Benefit from Brow Lift?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
