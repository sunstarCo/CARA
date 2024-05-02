import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/common/CardContainer';
import WhyChoose from '@/components/detail/common/WhyChoose';
import NoseBeforeAfter from '@/components/detail/nose/NoseBeforeAfter';
import WhoNeedNose from '@/components/detail/nose/WhoNeedNose';

const benefits = [
  {
    title: 'Correction of Unsatisfactory Results',
    desc: 'Revision rhinoplasty allows for the correction of cosmetic imperfections or functional issues that may have resulted from previous nose surgeries.',
  },
  {
    title: 'Improved Nasal Function',
    desc: 'In addition to addressing aesthetic concerns, revision rhinoplasty can also improve nasal airflow and alleviate breathing difficulties caused by structural abnormalities.',
  },
  {
    title: 'Enhanced Facial Harmony',
    desc: 'Our skilled surgeons specialize in refining nasal contours to achieve better facial balance and harmony, ensuring that your nose complements your overall facial aesthetics.',
  },
  {
    title: 'Personalized Solutions',
    desc: 'Each revision rhinoplasty procedure is tailored to address your specific concerns and goals, ensuring natural-looking and satisfying results that align with your aesthetic preferences.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'Las Vegas, our experienced team is committed to providing expert care and achieving optimal results for our patients who choose to undergo revision rhinoplasty. Contact us today to schedule a free consultation and take the first step towards restoring confidence and refining your nasal aesthetics with revision rhinoplasty.';
  const whoNeeds = [
    'Have undergone previous rhinoplasty surgery and are dissatisfied with the outcomes or experience complications such as asymmetry, irregularities, or breathing difficulties.',
    'Seek to address functional issues such as nasal obstruction, septal deviation, or collapse of nasal valves that have not been adequately corrected by previous surgeries.',
    'Desire further refinement or enhancement of their nasal appearance to achieve their desired aesthetic goals.',
  ];
  return (
    <div>
      <CommonTopBanner
        url="nose"
        title="Revision Rhinoplasty"
        subtitle="Restoring Confidence, Refining Results at CARA Las Vegas"
        contents="If you are dissatisfied with the outcome of a prior rhinoplasty procedure, it is imperative to seek the expertise of a skilled surgeon for corrective measures. With his knowledge and experience, Dr. Kahng possesses the necessary proficiency to address complications arising from previous surgeries. He will be able to restore optimal nasal function and ultimately ensure your satisfaction with the results."
      />
      <AboutSecondBanner
        mainDesc={
          'Dr. David Kahng specializes in revision rhinoplasty to address unsatisfactory results or complications from previous nose surgeries. We understand the frustration and disappointment that can accompany suboptimal outcomes, and our experienced team is dedicated to restoring your confidence and refining your nasal aesthetics, providing you with the excellent service that you deserve.'
        }
        longText
      />
      <CardContainer title={'Benefits of Revision Rhinoplasty'} benefits={benefits} />
      <WhoNeedNose
        title={'Who Needs Revision Rhinoplasty?'}
        subtitle={'Revision Rhinoplasty may be suitable for individuals who'}
        desc={whoNeeds}
      />
      <NoseBeforeAfter />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
