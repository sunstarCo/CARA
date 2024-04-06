import React from 'react';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/common/CardContainer';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';
import NoseBeforeAfter from '@/components/detail/nose/NoseBeforeAfter';
import WhoNeedNose from '@/components/detail/nose/WhoNeedNose';

const benefits = [
  {
    title: 'Preservation of Ethnic Identity',
    desc: 'Asian rhinoplasty respects and preserves the cultural identity and features of individuals of Asian descent while enhancing nasal aesthetics.',
  },
  {
    title: 'Natural-Looking Results',
    desc: 'Our skilled surgeons strive to achieve natural-looking results that seamlessly integrate with your facial features, avoiding an overdone or unnatural appearance.',
  },
  {
    title: 'Enhanced Facial Balance',
    desc: 'Asian rhinoplasty can improve facial balance and proportion by harmonizing the nose with other facial features, creating a more aesthetically pleasing appearance.',
  },
  {
    title: 'Functional Improvements',
    desc: 'In addition to cosmetic enhancements, Asian rhinoplasty can address functional issues such as breathing difficulties or nasal obstruction, improving overall nasal function and quality of life.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'At CARA Plastic Surgery & Laser Center in Las Vegas, our team of experienced surgeons specializes in Asian rhinoplasty, offering personalized care and natural-looking results tailored to your unique needs. Contact us today to schedule a free consultation and start on your journey towards enhanced facial harmony with Asian rhinoplasty.';
  // const whatIs = `Rhinoplasty, commonly referred to as a "nose job," is a surgical procedure aimed at reshaping the nose to improve its appearance and function. Whether you're seeking to refine the size, shape, or symmetry of your nose, rhinoplasty offers a tailored solution to enhance your overall facial aesthetics. This procedure can address a variety of concerns, including a prominent nasal hump, wide nostrils, or a drooping nasal tip.`;
  const whoNeeds = [
    'Desire to refine the shape, size, or projection of their nose while maintaining ethnic features.',
    'Seek to improve facial balance and harmony by addressing nasal asymmetry or disproportion.',
    'Experience functional issues such as nasal obstruction, breathing difficulties, or septal deviation.',
    'Have undergone previous rhinoplasty surgery and require revision to address unsatisfactory results or complications.',
  ];
  return (
    <div>
      <CommonTopBanner
        url="nose"
        title="Asian Rhinoplasty"
        subtitle="Achieve Natural Facial Harmony"
        contents="Numerous individuals of Asian descent express dissatisfaction with their nose's size and shape, often desiring adjustments to achieve a harmonious and appealing facial appearance. Dr. Kahng is renowned for his exceptional skill in performing Asian rhinoplasty, crafting results that seamlessly enhance the overall facial structure while maintaining a natural aesthetic."
      />
      <Intro
        title={'Asian Rhinoplasty in Las Vegas'}
        desc={
          'Dr.David Kahng understands the unique aesthetic goals and cultural considerations of our patients of Asian descent. With our expertise and personalized approach, we aim to help you achieve natural facial harmony through Asian rhinoplasty.'
        }
      />
      {/* <Section1 desc={whatIs} title={'What is Rhinoplasty?'} img={'/detailpage/liposuction/liposuction_what_is.png'} /> */}
      <CardContainer title={'Benefits of Asian Rhinoplasty'} benefits={benefits} />
      <WhoNeedNose
        title={'Who Needs Asian Rhinoplasty?'}
        subtitle={'Asian Rhinoplasty may be suitable for individuals who'}
        desc={whoNeeds}
      />
      <NoseBeforeAfter />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
