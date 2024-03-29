import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/body/CardContainer';
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

const card_data = [
  {
    title: 'Pain Relief',
    desc: 'Achieve a more masculine chest contour by reducing excess breast tissue, and boosting confidence in your physical appearance.',
  },
  {
    title: 'Improved Self-Esteem',
    desc: 'Experience a significant boost in self-esteem and body confidence, positively impacting mental well-being.',
  },
  {
    title: 'Improved Posture',
    desc: 'Enjoy greater ease in selecting and fitting into a broader range of clothing styles without concerns about visible breast tissue.',
  },
  {
    title: 'Physical Comfort',
    desc: 'Alleviate physical discomfort associated with gynecomastia, such as tenderness or pain in the chest area.',
  },
  {
    title: 'Lasting Results',
    desc: 'Our male breast reduction procedure offers long-lasting results, providing enduring improvements to the size and appearance of the chest.',
  },
];

export default function Page() {
  const whyChoose_desc =
    "At Cara Plastic Surgery & Laser Center LasVegas, our dedicated surgeons prioritize your comfort, safety, and satisfaction throughout the male breast reduction journey. Utilizing state-of-the-art techniques, we aim to deliver results that not only address physical discomfort but also enhance your overall quality of life. If you're considering male breast reduction or have questions about the procedure, contact us for a personalized consultation. Explore the possibilities and embark on a path to greater physical and emotional well-being with Cara Plastic Surgery & Laser Center Las Vegas.";
  const whatIs =
    'Gynecomastia is characterized by the enlargement of male breast tissue. Our male breast reduction procedure involves the surgical removal of excess fat, glandular tissue, and skin, utilizing advanced techniques to ensure optimal results. This targeted approach is designed to restore confidence and comfort, providing a more sculpted and masculine chest appearance.';
  const whoNeeds =
    'Ideal for individuals experiencing gynecomastia, our male breast reduction addresses emotional distress and impacts on self-esteem associated with this condition. Gynecomastia may result from hormonal changes, genetics, medications, or other factors. If you find yourself self-conscious about your breast size or experiencing physical discomfort due to gynecomastia, our procedure can help you regain confidence and achieve a more masculine physique.';
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={BreastSample}
        title="Male Breast Reduction"
        contents="At Cara Plastic Surgery & Laser Center in Las Vegas, we offer comprehensive solutions for breast reduction, including specialized procedures for male breast reduction, and addressing gynecomastia. Our male breast reduction, or gynecomastia surgery, is a transformative solution to reduce excess breast tissue and restore a masculine chest contour."
      />
      <Section1
        desc={whatIs}
        title={'What is Male Breast Reduction?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <CenterSection title={'Who Needs Male Breast Reduction?'} desc={whoNeeds} />
      <CardContainer title={'Benefits of Male Breast Reduction'} cardData={card_data} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
