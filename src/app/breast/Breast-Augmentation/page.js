import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/breast/BreastAugmentationImg.jpg';
import WHAT_IS_IMG from '@img/detailpage/breast/BreastImg1.jpg';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const img_count = 9;
const img_name = 'breast-augmentation';
const images_data = [...Array(img_count)].map((_, i) => `/banner/gallery/${img_name}/${i + 1}.jpg`);

const benefits = [
  {
    title: 'Enhanced Confidence',
    desc: 'Breast augmentation can significantly boost self-esteem and body confidence, allowing you to feel more comfortable and empowered in your skin.',
  },
  {
    title: 'Improved Symmetry',
    desc: 'For those with naturally uneven breasts, breast augmentation can achieve a more balanced and symmetrical appearance.',
  },
  {
    title: 'Customized Results',
    desc: 'Our surgeons work closely with each patient to understand their unique goals and preferences, tailoring the procedure to achieve the desired size, shape, and overall aesthetic.',
  },
  {
    title: 'Clothing Fit',
    desc: 'Enjoy a broader range of clothing options and styles as you achieve a more proportionate and flattering silhouette.',
  },
  {
    title: 'Positive Impact on Mental Well-being',
    desc: 'Many individuals report a positive impact on their mental well-being and overall quality of life after breast augmentation, feeling more comfortable and confident in both social and intimate settings.',
  },
];

const whyChoose_desc =
  "At Cara Plastic Surgery & Laser Center Las Vegas, our commitment is to provide a personalized and supportive experience throughout your breast augmentation journey. Our skilled surgeons prioritize your safety, comfort, and satisfaction, utilizing state-of-the-art techniques to ensure optimal results. /If you're considering breast augmentation or have questions about the procedure, contact us today to schedule a consultation. Discover the possibilities and embark on the path to a more confident and enhanced self with Cara Plastic Surgery & Laser Center Las Vegas.";
const whatIs =
  'Breast augmentation, also known as augmentation mammoplasty, is a cosmetic surgical procedure aimed at increasing the size, fullness, and symmetry of the breasts. This is typically achieved through the use of implants placed either behind the breast tissue or beneath the chest muscle. At Cara Plastic Surgery & Laser Center Las Vegas, our board-certified plastic surgeons employ advanced techniques and FDA-approved implants to ensure natural-looking and proportionate results.';
const whoNeeds =
  "Breast augmentation is a suitable option for individuals who desire to enhance the size of their breasts for various reasons. Whether you have always felt self-conscious about the size of your breasts, experienced changes due to pregnancy or weight loss, or simply want to achieve a more balanced and proportionate figure, breast augmentation could be the solution you've been looking for.";

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={TOP_BANNER_IMG}
        title="Breast Augmentation"
        contents="Breast augmentation is a transformative procedure designed to enhance the size and shape of your breasts, providing a boost in confidence and a renewed sense of femininity."
      />
      <Section1 desc={whatIs} title={'What is Breast Augmentation?'} img={WHAT_IS_IMG} />
      <WhoNeeds title={'Who Needs Breast Augmentation?'} desc={whoNeeds} />
      <CardContainer title={'Benefits of Breast augmentation'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
