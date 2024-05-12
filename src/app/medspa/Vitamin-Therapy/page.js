import React from 'react';

import WHAT_IS_IMG from '@img/detailpage/body/Tummy-Tuck2.jpg';
import TOP_BANNER_IMG from '@img/detailpage/medspa/Injectables.jpg';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';
import WhoNeedNose from '@/components/detail/nose/WhoNeedNose';

const benefits = [
  {
    title: 'Improved Nutrient Absorption',
    desc: `By delivering vitamins and minerals directly into the bloodstream, vitamin therapy ensures optimal absorption and utilization by the body, bypassing the digestive system's limitations.`,
  },
  {
    title: 'Boosted Energy Levels',
    desc: 'Vitamin therapy can help replenish essential nutrients that support energy production, helping to combat fatigue and boost overall vitality.',
  },
  {
    title: 'Enhanced Immune Function',
    desc: 'Certain vitamins and minerals, such as vitamin C and zinc, play key roles in immune function. Vitamin therapy can help strengthen the immune system and reduce the risk of illness.',
  },
  {
    title: 'Hydration and Replenishment',
    desc: 'IV fluids included in vitamin therapy treatments help hydrate the body and restore electrolyte balance, making it an effective solution for dehydration and nutrient depletion.',
  },
  {
    title: 'Accelerated Recovery',
    desc: 'Vitamin therapy can aid in post-workout recovery by providing essential nutrients that support muscle repair and reduce inflammation.',
  },
];

const whatIs = `Vitamin therapy, also known as intravenous (IV) vitamin infusion therapy, involves delivering a customized blend of vitamins, minerals, and other nutrients directly into the bloodstream via intravenous infusion. This method allows for rapid absorption and utilization of essential nutrients by the body, bypassing the digestive system for maximum effectiveness.`;
const howWorks =
  "During a vitamin therapy session, a sterile IV line is inserted into a vein in the arm, through which the customized vitamin solution is administered. The blend of vitamins and nutrients is carefully selected based on the individual's specific needs and health goals. The infusion typically takes about 30 to 60 minutes to complete, during which time the patient can relax and unwind.";
const whoNeeds = [
  'Individuals with busy lifestyles or high levels of stress who may have nutrient deficiencies.',
  'Athletes and fitness enthusiasts looking to enhance performance and recovery.',
  'Those experiencing fatigue, low energy levels, or immune system weaknesses.',
  'Individuals preparing for or recovering from surgical procedures, illness, or intense physical activity.',
];
const whyChoose_desc =
  'At CARA Plastic Surgery & Laser Center Las Vegas, our experienced providers offer personalized vitamin therapy treatments tailored to your individual needs and goals. Schedule a free  consultation today to discover how vitamin therapy can help you achieve optimal health and wellness from the inside out.';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="Medspa"
        title="Vitamin Therapy"
        contents="In recent years, advancements in anti-aging technology have reached unprecedented levels. Among these breakthroughs, IV vitamin therapy has emerged as a highly sought-after treatment for enhancing overall body health. Whether it's to super-hydrate, energize, boost the immune system, or even alleviate a hangover, IV vitamin therapy has garnered widespread popularity for its multifaceted benefits."
        img={TOP_BANNER_IMG}
      />
      <Intro
        title={'Vitamin Therapy in Las Vegas'}
        desc={
          'In recent years, there have been remarkable advancements in anti-aging technology. IV vitamin therapy has emerged as a highly sought-after treatment, offering a myriad of benefits to enhance overall body health. From super-hydration and energization to immune system support and even hangover resolution, IV vitamin therapy has become increasingly popular for its versatile and rejuvenating properties.'
        }
      />
      <Section1 desc={whatIs} title={'What is Vitamin Therapy?'} img={WHAT_IS_IMG} />
      <AboutSecondBanner mainDesc="How Does Vitamin Therapy Work?" subDesc={howWorks} />
      <CardContainer title={'Benefits of Vitamin Therapy'} benefits={benefits} />
      <WhoNeedNose
        title={'Who Needs Vitamin Therapy?'}
        subtitle={
          'Vitamin therapy can benefit individuals seeking to optimize their health and wellness, as well as those looking for targeted solutions to specific health concerns. It is particularly beneficial for'
        }
        desc={whoNeeds}
        sub_font
      />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
