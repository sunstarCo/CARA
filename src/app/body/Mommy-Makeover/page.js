import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import CardContainer from '@/components/detail/body/CardContainer';
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

const card_data = [
  {
    title: 'Holistic Restoration',
    desc: 'Mommy Makeover soffer a customized and holistic approach to address various concerns in onesurgery, saving time and minimizing downtime.',
  },
  {
    title: 'Breast Enhancement',
    desc: 'Restore volume and firmness to the breasts with procedures like breast augmentation, lift, orreduction, tailored to your aesthetic goals.',
  },
  {
    title: 'Abdominal Refinement',
    desc: 'Tighten abdominalmuscles, remove excess skin, and achieve a flatter tummy with procedures like atummy tuck.',
  },
  {
    title: 'Targeted Fat Reduction',
    desc: 'Liposuction can beincluded to address stubborn fat deposits in areas such as the hips, thighs, orbuttocks.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'Dr. DavidKahng at Cara Plastic Surgery & Laser Center Las Vegas brings artistry andskill to every Mommy Makeover procedure. Our commitment is to help you restorenot just your body but also your confidence, embracing the beauty that comeswith motherhood. Schedule aconsultation today to discuss your Mommy Makeover goals and embark on thejourney to reclaiming your body and confidence in Las Vegas.';
  const whatIs =
    'A MommyMakeover is a comprehensive set of procedures tailored to address the physicalchanges that often accompany pregnancy and breastfeeding. Dr. David Kahngcombines surgical techniques to enhance the breasts, abdomen, and other areas,providing a holistic approach to rejuvenating your post-pregnancy body.';
  // const whoNeeds = 'A Mommy Makeover is ideal for';
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Mommy Makeover"
        subtitle="Restore Your Body After Pregnancy"
        contents="Motherhood is abeautiful journey, but it can take a toll on your body. Our Mommy Makeover combines various procedures tailored to address post-pregnancy changes. Frombreast enhancement and tummy tucks to liposuction, we can help you reclaim yourpre-pregnancy body and feel rejuvenated."
      />
      <AboutSecondBanner mainDesc="The naturalprocesses of pregnancy, weight loss, and aging often lead to the development ofloose, sagging skin, and weakened muscles in the abdominal region. Whentraditional methods such as diet and exercise prove ineffective, a Mommy Makeoverin Las Vegas emerges as a transformative solution to help you attain thedesired stomach appearance." />
      <Section1
        desc={whatIs}
        title={'What is Mommy Makeover?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <CenterSection title={'who needs Mommy Makeover?'}>
        <ul className="flex flex-col lg:flex-row gap-16 mt-16">
          <li className="flex flex-col items-center gap-4 w-[90%] lg:w-[30%] mx-auto">
            <h4 className="text-[1.75rem] leading-normal font-trajan">Mothers Seeking Restoration</h4>
            <p className="text-xl leading-loose mt-2 px-8 max-w-[1200px] mx-auto">
              If you&apos;ve experienced changes such as sagging breasts, stretched abdominal muscles, orstubborn
              pockets of fat post-pregnancy, a Mommy Makeover can help restore yourbody to its pre-pregnancy state.
            </p>
          </li>
          <li className="flex flex-col items-center gap-4 w-[90%] lg:w-[30%] mx-auto">
            <h4 className="text-[1.75rem] leading-normal font-trajan">Those Dealing with Multiple Concerns</h4>
            <p className="text-xl leading-loose mt-2 px-8 max-w-[1200px] mx-auto">
              If youhave multiple areas of concern, such as both breasts and the abdominal region,a Mommy Makeover
              allows for a comprehensive solution in a single procedure.
            </p>
          </li>
          <li className="flex flex-col items-center gap-4 w-[90%] lg:w-[30%] mx-auto">
            <h4 className="text-[1.75rem] leading-normal font-trajan">Women Wanting a Confidence Boost</h4>
            <p className="text-xl leading-loose mt-2 px-8 max-w-[1200px] mx-auto">
              Pregnancyand childbirth are beautiful experiences, but they can impact your confidence.A Mommy Makeover
              not only addresses physical changes but also aims to boostyour self-esteem and restore confidence in your
              appearance.
            </p>
          </li>
        </ul>
      </CenterSection>
      <CardContainer title={'Key Benefits of a Mommy Makeover'} cardData={card_data} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
