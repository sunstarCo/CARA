import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/face/Chin-Augmentation.jpg';
import WHAT_IS_IMG from '@img/detailpage/face/LowerEyelid.jpg';

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
    title: 'Improved Facial Harmony',
    desc: 'Chin augmentation can enhance facial proportions and create a more balanced profile, bringing symmetry to your features and enhancing overall facial harmony.',
  },
  {
    title: 'Enhanced Jawline Definition',
    desc: 'A well-defined chin can accentuate the jawline, creating a more sculpted and youthful appearance.',
  },
  {
    title: 'Boosted Confidence',
    desc: 'Enjoy newfound confidence and self-assurance as you see a more proportionate and attractive reflection in the mirror.',
  },
  {
    title: 'Customized Results',
    desc: 'Whether you prefer a subtle enhancement or a more dramatic transformation, chin augmentation can be customized to achieve your desired level of enhancement, ensuring natural-looking results that complement your unique facial features.',
  },
];

const what_is =
  'Chin augmentation, also known as genioplasty, is a surgical procedure designed to enhance the size, shape, and projection of the chin. By placing implants or reshaping the existing bone, chin augmentation can improve facial proportions, correct a weak or receding chin, and create a more aesthetically pleasing profile. Whether you desire a more prominent chin or wish to achieve better facial balance, our skilled surgeons can tailor the procedure to meet your unique needs and goals.';
const who_needs =
  "Chin augmentation is an excellent option for individuals who are bothered by a weak or recessed chin, lack of definition in the jawline, or facial asymmetry. Whether you're looking to enhance your facial profile, correct a congenital deformity, or achieve a more youthful appearance, our experienced surgeons can help you achieve your aesthetic goals with precision and expertise.";
const whyChoose_desc =
  'At CARA Plastic Surgery & Laser Center Las Vegas, we are committed to providing personalized care and exceptional results. Schedule a consultation with us today to learn more about how chin augmentation can help you define your profile and enhance your natural beauty.';

export default function Page() {
  return (
    <>
      <CommonTopBanner
        url="Face"
        img={TOP_BANNER_IMG}
        title="Chin Augmentation"
        contents="Every aspect of the face contributes to achieving facial harmony. A receding chin can detract from your profile's attractiveness and create a sense of disproportion among other features. Chin augmentation surgery offers a solution to enhance your facial appearance, restoring balance, harmony, and aesthetic appeal."
      />
      <Intro
        title={'Chin Augmentation'}
        desc={
          "A balanced and defined chin can greatly enhance your facial profile, enabling you to exude confidence and symmetry. If you're looking to achieve a more proportionate and harmonious appearance, consider chin augmentation at CARA Plastic Surgery & Laser Center Las Vegas. Let us help you redefine your features and unleash your full aesthetic potential."
        }
      />
      <Section1 desc={what_is} title={'What is Chin Augmentation?'} img={WHAT_IS_IMG} />
      <CardContainer title={'Benefits of Chin Augmentation'} benefits={benefits} theme="dark" />
      <BeforeAfter images_data={images_data} />
      <AboutSecondBanner mainDesc="Who Can Benefit from Chin Augmentation?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
