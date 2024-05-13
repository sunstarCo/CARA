import React from 'react';

import TOP_BANNER_IMG from '../../../../public/detailpage/breast/MaleBreast1.jpg';
import WHAT_IS_IMG from '../../../../public/detailpage/breast/MaleBreast2.jpg';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const benefits = [
  {
    title: 'Restored Masculine Contour',
    desc: 'Achieve a more masculine chest contour by reducing excess breast tissue, boosting confidence in your physical appearance.',
  },
  {
    title: 'Improved Self-Esteem',
    desc: 'Experience a significant boost in self-esteem and body confidence, positively impacting mental well-being.',
  },
  {
    title: 'Enhanced Wardrobe Options',
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

const whyChoose_desc =
  "At Cara Plastic Surgery & Laser Center LasVegas, our dedicated surgeons prioritize your comfort, safety, and satisfaction throughout the male breast reduction journey. Utilizing state-of-the-art techniques, we aim to deliver results that not only address physical discomfort but also enhance your overall quality of life. /If you're considering male breast reduction or have questions about the procedure, contact us for a personalized consultation. Explore the possibilities and embark on a path to greater physical and emotional well-being with Cara Plastic Surgery & Laser Center Las Vegas.";
const whatIs =
  'Gynecomastia is characterized by the enlargement of male breast tissue. Our male breast reduction procedure involves the surgical removal of excess fat, glandular tissue, and skin, utilizing advanced techniques to ensure optimal results. This targeted approach is designed to restore confidence and comfort, providing a more sculpted and masculine chest appearance.';
const whoNeeds =
  'Ideal for individuals experiencing gynecomastia, our male breast reduction addresses emotional distress and impacts on self-esteem associated with this condition. Gynecomastia may result from hormonal changes, genetics, medications, or other factors. If you find yourself self-conscious about your chest size or experiencing physical discomfort due to gynecomastia, our procedure can help you regain confidence and achieve a more masculine physique.';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={TOP_BANNER_IMG}
        imgAlign="right"
        title="Male Breast Reduction"
        contents="At Cara Plastic Surgery & Laser Center Las Vegas, we offer comprehensive solutions for breast reduction, including specialized procedures for male breast reduction, or gynecomastia. Our male breast reduction, or gynecomastia surgery, is a transformative solution to reduce excess breast tissue and restore a masculine chest contour."
      />
      <Section1 desc={whatIs} title={'What is Male Breast Reduction?'} img={WHAT_IS_IMG} />
      <WhoNeeds title={'Who Needs Male Breast Reduction?'} desc={whoNeeds} />
      <CardContainer title={'Benefits of Male Breast Reduction'} benefits={benefits} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
