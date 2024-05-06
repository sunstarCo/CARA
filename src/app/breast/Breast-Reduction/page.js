import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const images_data = ['/B&A/example.jpg', '/B&A/example.jpg', '/B&A/example.jpg', '/B&A/example.jpg'];

const benefits = [
  {
    title: 'Pain Relief',
    desc: 'Alleviate back, neck, and shoulder pain associated with the strain of large breasts, contributing to improved daily comfort.',
  },
  {
    title: 'Improved Posture',
    desc: 'Experience enhanced posture and physical comfort with a more proportionate breast size, promoting overall musculoskeletal well-being.',
  },
  {
    title: 'Emotional Well-being',
    desc: 'Breast reduction often leads to a boost in self-esteem and body confidence, positively impacting emotional well-being and overall quality of life.',
  },
  {
    title: 'Increased Physical Activity',
    desc: 'Enjoy increased participation in physical activities and exercise without the hindrance of overly large breasts, promoting a healthier lifestyle.',
  },
  {
    title: 'Clothing Comfort',
    desc: 'Find greater ease in selecting and fitting into a broader range of clothing styles after achieving a more balanced and proportionate breast size, increasing overall wardrobe options.',
  },
];

export default function Page() {
  const whyChoose_desc =
    "At Cara Plastic Surgery & Laser Center Las Vegas, our dedicated surgeons prioritize your comfort, safety, and satisfaction throughout the breast reduction journey. Our commitment to excellence is reflected in our utilization of state-of-the-art techniques to deliver results that not only address physical discomfort but also enhance your overall quality of life./If you're considering breast reduction or have questions about the procedure, we invite you to contact us for a personalized consultation. Discover the possibilities and embark on a path to greater physical and emotional well-being with Cara Plastic Surgery & Laser Center Las Vegas";
  const whatIs =
    'Breast reduction involves the surgical removal of excess fat, glandular tissue, and skin to reduce the size and volume of the breasts. This procedure is meticulously performed by our experienced surgeons to alleviate physical discomfort and enhance overall well-being, resulting in a more balanced and harmonious breast appearance. Our advanced techniques ensure optimal results, prioritizing both functionality and aesthetic satisfaction.';
  const whoNeeds =
    'Breast reduction is an ideal option for individuals facing physical and emotional challenges due to disproportionately large breasts. If you experience issues such as persistent back pain, neck pain, shoulder grooving from bra straps, or difficulty finding properly fitting clothing, our breast reduction procedure can offer significant relief. This transformative surgery is also suitable for those seeking to enhance their quality of life by achieving a more proportionate and balanced silhouette.';
  return (
    <div>
      <CommonTopBanner
        url="breast"
        img={BreastSample}
        title="Breast Reduction"
        contents="At Cara Plastic Surgery & Laser Center in Las Vegas, our breast reduction procedures are designed to provide effective relief from the challenges associated with overly large breasts. Reduction mammoplasty, commonly known as breast reduction, is a surgical solution aimed at achieving a more proportionate and comfortable breast size."
      />
      <Section1
        desc={whatIs}
        title={'What is Breast Reduction?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <WhoNeeds title={'Who Needs Breast Reduction?'} desc={whoNeeds} />
      <CardContainer title={'Benefits of Breast Reduction'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
