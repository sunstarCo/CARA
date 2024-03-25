import React from 'react';

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
    "At Cara Plastic Surgery & Laser Center Las Vegas, our commitment is to provide a personalized and supportive experience throughout your breast augmentation journey. Our skilled surgeons prioritize your safety, comfort, and satisfaction, utilizing state-of-the-art techniques to ensure optimal results. If you're considering breast augmentation or have questions about the procedure, contact us today to schedule a consultation. Discover the possibilities and embark on the path to a more confident and enhanced you with Cara Plastic Surgery & Laser Center Las Vegas.";
  const section1_desc =
    'Breast augmentation, also known as augmentation mammoplasty, is a cosmetic surgical procedure aimed at increasing the size, fullness, and symmetry of the breasts. This is typically achieved through the use of implants placed either behind the breast tissue or beneath the chest muscle. At Cara Plastic Surgery & Laser Center Las Vegas, our board-certified plastic surgeons employ advanced techniques and FDA-approved implants to ensure natural-looking and proportionate results.';
  const section2_desc =
    "Breast augmentation is a suitable option for individuals who desire to enhance the size of their breasts for various reasons. Whether you have always felt self-conscious about the size of your breasts, experienced changes due to pregnancy or weight loss, or simply want to achieve a more balanced and proportionate figure, breast augmentation could be the solution you've been looking for.";
  return (
    <div>
      <Section1
        desc={section1_desc}
        title={'What is Breast Augmentation?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <CenterSection title={'Who Needs Breast Augmentation?'} desc={section2_desc} />
      {/* <CardContainer /> */}
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
