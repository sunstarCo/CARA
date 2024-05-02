import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const benefits = [
  {
    title: 'Adapt to Change',
    desc: 'Accommodate changes in personal preference by removing or changing the type of breast implants.',
  },
  {
    title: 'Lifestyle Flexibility',
    desc: 'Adjust to lifestyle changes that may prompt a desire for a different breast appearance.',
  },
  {
    title: 'Address Medical Concerns',
    desc: 'Effectively address medical concerns related to breast implants, prioritizing overall health and well-being.',
  },
  {
    title: 'Natural Aesthetics',
    desc: 'Achieve a more natural breast appearance after implant removal, promoting aesthetic harmony.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'At Cara Plastic Surgery & Laser Center LasVegas, we are dedicated to providing personalized and compassionate care throughout the breast implant removal journey. Our surgeons prioritize safety, comfort, and satisfaction, utilizing advanced techniques for optimal and natural-looking results. If you are considering breast implant removal or have questions about the procedure, we invite you to contact us for a consultation. Explore the possibilities and make informed decisions about your breast health and aesthetics with Cara Plastic Surgery & Laser Center in LasVegas.';
  const whatIs =
    "Breast implant removal is a surgical procedure focused on the extraction of breast implants. Whether you're seeking a change in your breast augmentation, experiencing issues with your implants, or considering a lifestyle adjustment, our skilled surgeons at Cara Plastic Surgery & Laser Center ensure a meticulous removal process. We utilize advanced techniques to prioritize safety and precision.";
  const whoNeeds =
    "Breast augmentation is a suitable option for individuals who desire to enhance the size of their breasts for various reasons. Whether you have always felt self-conscious about the size of your breasts, experienced changes due to pregnancy or weight loss, or simply want to achieve a more balanced and proportionate figure, breast augmentation could be the solution you've been looking for.";
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={BreastSample}
        title="Breast Implant Removal"
        contents="Welcome to Cara Plastic Surgery & Laser Center Las Vegas, where we specialize in breast implant removal procedures tailored to meet individual needs. Our breast implant removal, or explantation services are designed to address changes in preference, lifestyle adjustments, and medical considerations, providing a safe and precise solution."
      />
      <Section1
        desc={whatIs}
        title={'What is breast Implant Removal?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <WhoNeeds title={'Who Needs Breast Implant Removal?'} desc={whoNeeds} />
      <CardContainer title={'Benefits of Breast Implant Removal'} benefits={benefits} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
