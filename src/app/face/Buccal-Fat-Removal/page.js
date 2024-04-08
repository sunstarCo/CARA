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
    title: 'Refined Facial Contours',
    desc: 'Buccal fat removal can sculpt the cheeks and create a more defined facial appearance by reducing excess fat in the lower cheeks.',
  },
  {
    title: 'Enhanced Cheekbones',
    desc: 'Achieve a more sculpted and angular look by revealing your natural cheekbone structure and defining facial contours.',
  },
  {
    title: 'Youthful Appearance',
    desc: 'Slimming the cheeks can create a more youthful and balanced facial profile, enhancing overall facial harmony.',
  },
  {
    title: 'Customized Results',
    desc: 'Our experienced surgeons tailor the procedure to your unique facial anatomy and aesthetic goals, ensuring natural-looking results that complement your features.',
  },
];

export default function Page() {
  const what_is =
    'Buccal fat removal, also known as cheek reduction surgery, is a cosmetic procedure designed to slim the cheeks and define facial contours by removing excess fat pads from the lower cheeks. This technique targets the buccal fat pad, which can contribute to a round or chubby facial appearance, and creates a more sculpted and angular facial contour. Buccal fat removal offers a permanent solution to achieve a slimmer and more defined facial profile.';
  const who_needs =
    "Buccal fat removal is an ideal option for individuals who are bothered by excess fullness in the lower cheeks, creating a round or chubby facial appearance. Whether you're seeking to achieve a more sculpted facial contour, define your cheekbones, or enhance your natural beauty, our skilled surgeons can customize the procedure to meet your specific needs and aesthetic goals.";
  const whyChoose_desc =
    'Experience the transformative effects of buccal fat removal at CARA Plastic Surgery & Laser Center Las Vegas. Schedule a consultation with us today to learn more about how this procedure can help you sculpt your cheekbones and achieve the facial appearance you desire.';

  return (
    <>
      <CommonTopBanner
        url="Face"
        img={BreastSample}
        title="Buccal Fat Removal"
        contents={`While chubby cheeks may be endearing in children and infants, as adults, they can give the impression of a rounder face than desired. Buccal fat removal specifically targets the fat beneath the cheeks to achieve a slimmer appearance. This procedure is particularly beneficial for individuals with a "baby face," helping them achieve a more refined and sophisticated look.`}
      />
      <Intro
        title={'Buccal Fat Removal'}
        desc={
          "Unlock the potential of your cheekbones and achieve a more sculpted facial appearance with buccal fat removal at CARA Plastic Surgery & Laser Center Las Vegas. If you're seeking to refine your facial contours and enhance your natural beauty, our skilled surgeons are here to help you achieve your aesthetic goals."
        }
      />
      <Section1
        desc={what_is}
        title={'What is Buccal Fat Removal?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <CardContainer title={'Benefits of Buccal Fat Removal'} benefits={benefits} theme="dark" />
      <BeforeAfter images_data={images_data} />
      <AboutSecondBanner mainDesc="Who Can Benefit from Buccal Fat Removal?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
