import React from 'react';

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
    title: 'Natural Results',
    desc: "Utilizing your body's own fat cells ensures natural-looking results, seamlessly integrating with your existing tissues for a harmonious outcome.",
  },
  {
    title: 'Versatility',
    desc: ' Fat transfer can be tailored to address various concerns, including facial rejuvenation, breast augmentation, and buttock enhancement, providing versatile solutions to enhance your natural beauty.',
  },
  {
    title: 'Minimally Invasive',
    desc: 'As a minimally invasive procedure, fat transfer offers reduced downtime and faster recovery compared to traditional surgical techniques, allowing you to return to your daily activities with minimal disruption.',
  },
  {
    title: 'Long-lasting Results',
    desc: 'Unlike synthetic fillers, fat transfer offers long-lasting results, with the potential for permanent enhancement in some cases, providing enduring satisfaction and confidence.',
  },
];

export default function Page() {
  const what_is =
    'Fat transfer, also known as fat grafting or fat injection, is an advanced cosmetic procedure designed to address volume loss and enhance contours by relocating fat from one area of the body to another. This innovative technique involves harvesting excess fat through gentle liposuction, purifying it, and strategically injecting it into areas that lack volume or require enhancement, such as the face, breasts, or buttocks.';
  const who_needs =
    'Fat transfer is an ideal option for individuals seeking to address volume loss, contour irregularities, or asymmetry in various areas of the body. Whether you desire fuller cheeks, rejuvenated hands, or enhanced curves, our experienced surgeons can customize a fat transfer procedure to suit your unique goals and preferences, helping you achieve a naturally beautiful and rejuvenated appearance.';
  const whyChoose_desc =
    'Experience the transformative power of fat transfer at CARA Plastic Surgery & Laser Center Las Vegas. Schedule a consultation with us today to learn more about how fat transfer can help you enhance your natural beauty and regain confidence in your appearance.';

  return (
    <>
      <CommonTopBanner
        url="Face"
        img="/detailpage/face/FatTransfer.jpg"
        title="Fat Transfer"
        contents="Many of our patients inquire about fat transfer, an innovative advancement in safe and natural plastic surgery. Unlike synthetic fillers, this procedure involves extracting, purifying, and injecting your own fat into facial areas to enhance volume, firmness, and contours. Fat transfer offers longer-lasting results compared to fillers."
      />
      <Intro
        title={'Fat Transfer'}
        desc={
          "Many of us have excess fat in areas where we'd prefer not to, often wishing we could redistribute it to areas where it's lacking. Enter fat transfer – a revolutionary procedure that allows precisely that. This innovative technique involves extracting fat from one part of the body and strategically injecting it into another area that requires additional volume."
        }
      />
      <Section1 desc={what_is} title={'What is Fat Transfer?'} img="/detailpage/face/LowerEyelid.jpg" />
      <CardContainer title={'Benefits of Fat Transfer'} benefits={benefits} theme="dark" />
      <BeforeAfter images_data={images_data} />
      <AboutSecondBanner mainDesc="Who Can Benefit from Fat Transfer?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
