import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/nose/Rhinoplasty1.jpg';
import WHAT_IS_IMG from '@img/detailpage/nose/Rhinoplasty2.jpg';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';
import NoseBeforeAfter from '@/components/detail/nose/NoseBeforeAfter';
import WhoNeedNose from '@/components/detail/nose/WhoNeedNose';

const benefits = [
  {
    title: 'Enhanced Facial Aesthetics',
    desc: 'Rhinoplasty can improve the balance and symmetry of your facial features, creating a more harmonious appearance.',
  },
  {
    title: 'Improved Self-Confidence',
    desc: 'By achieving your desired nasal contour, rhinoplasty can boost your self-esteem and instill confidence in your appearance.',
  },
  {
    title: 'Correction of Functional Issues',
    desc: 'In addition to cosmetic enhancements, rhinoplasty can address breathing difficulties or structural abnormalities that affect optimal nasal function.',
  },
  {
    title: 'Personalized Results',
    desc: 'Each rhinoplasty procedure is customized to meet your unique anatomical needs and aesthetic preferences, ensuring the most natural-looking and satisfying outcomes.',
  },
];

const whyChoose_desc =
  'Las Vegas, Dr. Kahng and our experienced team are committed to providing exceptional care and achieving optimal results for our patients. Contact us today to schedule a free consultation and start your journey towards a more harmonious facial aesthetic and a more appealing, confident self.';
const whatIs = `Rhinoplasty, commonly referred to as a "nose job," is a surgical procedure aimed at reshaping the nose to improve its appearance and function. Whether you're seeking to refine the size, shape, or symmetry of your nose, rhinoplasty offers a tailored solution to enhance your overall facial aesthetics. This procedure can address a variety of concerns, including a prominent nasal hump, wide nostrils, or a drooping nasal tip.`;
const whoNeeds = [
  'Desire to correct aesthetic concerns such as a prominent dorsal hump, asymmetry, or a bulbous nasal tip.',
  'Experience functional issues such as difficulty breathing due to a deviated septum or nasal valve collapse.',
  'Seek to improve the overall balance and proportion of their facial features for a more attractive appearance.',
  'Have undergone previous rhinoplasty surgery and require revision to address any unsatisfactory results or complications.',
];

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="nose"
        title="Rhinoplasty"
        subtitle="Enhancing Your Facial Harmony, CARA Las Vegas"
        contents='The medical term for a nose job is "rhinoplasty." This surgical process requires complete personalization to achieve the utmost aesthetic balance in your facial features. Dr. Kahng is esteemed for his surgical proficiency and is recognized in the field for his skill and craftsmanship in facial cosmetic surgery, specifically in the domain of rhinoplasty procedures.'
        img={TOP_BANNER_IMG}
      />
      <Intro
        title={'Rhinoplasty in Las Vegas'}
        desc={
          'Rhinoplasty is a surgical procedure designed to enhance the appearance and functionality of the nose. At our office, CARA Las Vegas, we understand the importance of achieving facial harmony and are dedicated to providing personalized care to meet your aesthetic goals.'
        }
      />
      <Section1 desc={whatIs} title={'What is Rhinoplasty?'} img={WHAT_IS_IMG} />
      <CardContainer title={'Benefits of Rhinoplasty'} benefits={benefits} />
      <WhoNeedNose
        title={'Who Needs Rhinoplasty?'}
        subtitle={'Rhinoplasty may be suitable for individuals who'}
        desc={whoNeeds}
      />
      <NoseBeforeAfter />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
