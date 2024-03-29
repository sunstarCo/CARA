import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CenterSection from '@/components/detail/common/CenterSection';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/WhyChoose';
const images_data = [
  {
    id: 1,
    image: '/B&A/example.jpg',
  },
  {
    id: 2,
    image: '/B&A/example.jpg',
  },
  {
    id: 3,
    image: '/B&A/example.jpg',
  },
  {
    id: 4,
    image: '/B&A/example.jpg',
  },
  {
    id: 5,
    image: '/B&A/example.jpg',
  },
  {
    id: 6,
    image: '/B&A/example.jpg',
  },
  {
    id: 7,
    image: '/B&A/example.jpg',
  },
];

export default function Page() {
  const whyChoose_desc =
    'At Cara Plastic Surgery & Laser Center LasVegas, we are dedicated to providing personalized and compassionate care throughout the breast implant removal journey. Our surgeons prioritize safety, comfort, and satisfaction, utilizing advanced techniques for optimal and natural-looking results. If you are considering breast implant removal or have questions about the procedure, we invite you to contact us for a consultation. Explore the possibilities and make informed decisions about your breast health and aesthetics with Cara Plastic Surgery & Laser Center in LasVegas.';
  const section1_desc =
    "Breast implant removal is a surgical procedure focused on the extraction of breast implants. Whether you're seeking a change in your breast augmentation, experiencing issues with your implants, or considering lifestyle adjustments, our skilled surgeons at Cara Plastic Surgery& Laser Center ensure a meticulous removal process. We utilize advanced techniques to prioritize safety and precision.";
  const section2_desc =
    "Breast augmentation is a suitable option for individuals who desire to enhance the size of their breasts for various reasons. Whether you have always felt self-conscious about the size of your breasts, experienced changes due to pregnancy or weight loss, or simply want to achieve a more balanced and proportionate figure, breast augmentation could be the solution you've been looking for.";
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={BreastSample}
        title="Breast Implant Removal"
        contents="Welcome to Cara Plastic Surgery & LaserCenter Las Vegas, where we specialize in breast implant removal procedures tailored to meet individual needs. Our breast implant removal, or explantation, services are designed to address changes in preference, lifestyle adjustments, and medical considerations, providing a safe and precise solution."
      />
      <Section1
        desc={section1_desc}
        title={'What is breast Implant Removal?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <CenterSection title={'Who Needs Breast Implant Removal?'} desc={section2_desc} />
      {/* <CardContainer /> */}
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
