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
    desc: 'Hispanic rhinoplasty respects and celebrates the distinctive nasal characteristics of individuals of Hispanic descent, ensuring that ethnic features are preserved while enhancing overall facial aesthetics.',
  },
  {
    title: 'Improved Facial Harmony',
    desc: 'Our skilled surgeons specialize in creating noses that complement and enhance your facial features, achieving a balanced and harmonious appearance that maintains your cultural identity.',
  },
  {
    title: 'Increased Confidence',
    desc: 'By achieving your desired nasal contour, Hispanic rhinoplasty can boost your self-esteem and confidence, allowing you to feel more comfortable with and proud of your appearance.',
  },
  {
    title: 'Customized Results',
    desc: 'Each Hispanic rhinoplasty procedure is tailored to meet your unique anatomical needs and aesthetic preferences, ensuring natural-looking and satisfying outcomes that align with your cultural heritage.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'Las Vegas, our team of experienced surgeons is dedicated to providing personalized care and natural-looking results tailored to your unique needs. Contact us today to schedule a free consultation and discover how Hispanic rhinoplasty can help you achieve a nose that celebrates your cultural heritage and enhances your natural beauty.';
  const whoNeeds = [
    'Desire to refine the shape, size, or projection of their nose while celebrating their Hispanic heritage.',
    'Seek to enhance facial balance and harmony by addressing nasal asymmetry or disproportion.',
    'Experience functional issues such as nasal obstruction, breathing difficulties, or septal deviation.',
    'Have undergone previous rhinoplasty surgery and require revision to address unsatisfactory results or complications.',
  ];
  return (
    <div>
      <CommonTopBanner
        url="nose"
        title="Hispanic Rhinoplasty"
        subtitle="Celebrating Your Cultural Heritage, CARA Las Vegas"
        contents="Dr. Kahng specializes in customizing every rhinoplasty procedure to suit the distinct ethnic and cultural backgrounds of his patients. Throughout the process, he can address specific concerns regarding the nose's size or shape, all while preserving your cultural identity and working with you to determine the best care."
      />
      <Intro
        title={'Hispanic Rhinoplasty in Las Vegas'}
        desc={
          'Las Vegas, we understand the importance of preserving your cultural heritage while enhancing your natural beauty. Our Hispanic rhinoplasty services are designed to meet the unique aesthetic goals and cultural preferences of individuals of Hispanic descent. Let us help you achieve a nose that celebrates your heritage while enhancing your overall facial harmony.'
        }
      />
      <CardContainer title={'Benefits of Hispanic Rhinoplasty'} benefits={benefits} />
      <WhoNeedNose
        title={'Who Needs Hispanic Rhinoplasty?'}
        subtitle={'Hispanic Rhinoplasty may be suitable for individuals who'}
        desc={whoNeeds}
      />
      <NoseBeforeAfter />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
