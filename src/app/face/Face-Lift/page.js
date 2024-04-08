import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

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
    title: 'Rejuvenated Appearance',
    desc: 'Say goodbye to sagging skin and deep wrinkles, and hello to a revitalized, more youthful-looking face.',
  },
  {
    title: 'Improved Facial Contours',
    desc: 'Face lift surgery can restore definition to the jawline and neck, creating a more sculpted and balanced facial profile.',
  },
  {
    title: 'Boosted Confidence',
    desc: 'Enjoy renewed confidence and self-esteem as you see a more vibrant and refreshed reflection in the mirror.',
  },
  {
    title: 'Long-lasting Results',
    desc: 'While no procedure can stop the aging process entirely, face lift surgery offers long-lasting results that can significantly turn back the clock on your appearance.',
  },
];

export default function Page() {
  const what_is =
    'A face lift, clinically known as rhytidectomy, is a surgical procedure designed to address signs of aging in the face and neck. Over time, factors such as gravity, sun exposure, and the natural aging process can cause the skin to lose elasticity, resulting in sagging, wrinkles, and a loss of facial volume. Face lift surgery aims to tighten underlying facial muscles, remove excess skin, and reposition facial tissues to create a smoother, more youthful contour.';
  const who_needs =
    "Face lift surgery is an ideal option for individuals who are bothered by visible signs of facial aging, including sagging skin, deep wrinkles, jowls, and a loss of facial volume. Whether you're in your 40s, 50s, 60s, or beyond, our skilled surgeons can customize a face lift procedure to address your specific concerns and help you achieve your aesthetic goals.";
  const whyChoose_desc =
    'At CARA Plastic Surgery & Laser Center Las Vegas, we understand that the decision to undergo cosmetic surgery is deeply personal. Our compassionate team is here to guide you every step of the way, from your initial consultation to your post-operative care, ensuring that you feel confident and supported throughout your journey to a more youthful appearance. Schedule a consultation with us today to learn more about how face lift surgery can help you reclaim your youth and enhance your natural beauty.';

  return (
    <>
      <CommonTopBanner
        url="Face"
        img={BreastSample}
        title="Face Lift"
        contents="Facial structures vary across ethnicities, highlighting the significance of seeking an facelift plastic surgeon in Las Vegas for optimal results. Not all surgeons possess the expertise and understanding required to achieve the most aesthetically pleasing enhancements in an facelift procedure. Consult with Dr. Kahng, renowned as one of the most experienced plastic surgeons in Orange County/Los Angeles/Las Vegas, to learn more about your options."
      />
      <Intro
        title={'Face Lift'}
        desc={
          "If you're looking to turn back the hands of time and restore a more youthful appearance to your face, our face lift surgery might be the solution you've been searching for."
        }
      />
      <Section1 desc={what_is} title={'What is Face Lift?'} img={'/detailpage/liposuction/liposuction_what_is.png'} />
      <CardContainer title={'Benefits of Face Lift'} benefits={benefits} theme="dark" />
      <BeforeAfter images_data={images_data} />
      <AboutSecondBanner mainDesc="Who Can Benefit from Face Lift?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
