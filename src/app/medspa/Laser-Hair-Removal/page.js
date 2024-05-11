import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.jpg';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

export default function Page() {
  const what_is = {
    Alma_Soprano_ICE: {
      title: 'Alma Soprano Ice',
      desc: 'The Alma Soprano ICE is a revolutionary laser hair removal system that utilizes advanced diode laser technology to safely and effectively remove unwanted hair from virtually any part of the body. This innovative system combines innovative technology with a unique cooling mechanism to ensure maximum comfort and safety during treatment.',
      benefits: [
        `Effective on all skin types, including tanned and dark skin.`,
        'Virtually painless treatment with built-in cooling technology.',
        'Fast, efficient sessions with minimal discomfort and downtime.',
        'Long-lasting results with reduced risk of side effects.',
      ],
    },
  };

  const who_needs = `Laser hair removal is an ideal solution for individuals who are tired of the inconvenience and discomfort of traditional hair removal methods such as shaving, waxing, or plucking. It is suitable for both men and women and can be used to treat unwanted hair on various areas of the body, including the face, legs, arms, underarms, bikini area, and more. Whether you're looking to eliminate unwanted facial hair, achieve silky-smooth legs, or enjoy a hair-free bikini line, laser hair removal offers a safe, effective, and long-lasting solution.`;
  const whyChoose_desc = `At CARA Plastic Surgery & Laser Center Las Vegas, our experienced team is dedicated to helping you achieve your desired results with personalized laser hair removal treatments tailored to your unique needs and skin type. Schedule a free consultation today to learn more about our laser hair removal services and start your journey to smooth, hair-free skin.`;

  return (
    <>
      <CommonTopBanner
        url="Medspa"
        img={BreastSample}
        title="Laser Hair Removal"
        contents={`Experience the freedom of smooth, hair-free skin with our laser hair removal treatments.Our advanced laser technology targets hair follicles to inhibit future growth, leaving you with silky-smooth skin that's ready to be shown off. With quick, comfortable treatments and minimal downtime, you can enjoy the convenience of hair-free skin without the fuss.`}
      />
      <Intro
        title={'Laser Hair Removal'}
        desc={`At CARA Plastic Surgery & Laser Center, we offer advanced and comfortable hair removal treatments to help you achieve smooth, hair-free skin with lasting results. Explore our premier laser technology below to learn more about our approach to laser hair removal.`}
      />
      <Section1
        desc={what_is.Alma_Soprano_ICE.desc}
        title={`What is ${what_is.Alma_Soprano_ICE.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.Alma_Soprano_ICE.benefits}
      />
      <AboutSecondBanner mainDesc="Who Needs Laser Hair Removal?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
