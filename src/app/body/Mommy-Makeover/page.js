import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const images_data = ['/B&A/example.jpg', '/B&A/example.jpg', '/B&A/example.jpg', '/B&A/example.jpg'];

const benefits = [
  {
    title: 'Holistic Restoration',
    desc: 'Mommy Makeovers offer a customized and holistic approach to address various concerns in one surgery, saving time and minimizing downtime.',
  },
  {
    title: 'Breast Enhancement',
    desc: 'Restore volume and firmness to the breasts with procedures like breast augmentation, lift, or reduction, tailored to your aesthetic goals.',
  },
  {
    title: 'Abdominal Refinement',
    desc: 'Tighten abdominal muscles, remove excess skin, and achieve a flatter tummy with procedures like a tummy tuck.',
  },
  {
    title: 'Targeted Fat Reduction',
    desc: 'Liposuction can be included to address stubborn fat deposits in areas such as the hips, thighs, or buttocks.',
  },
];

const whoNeedsContents = [
  {
    title: 'Mothers Seeking Restoration',
    desc: 'If you’ve experienced changes such as sagging breasts, stretched abdominal muscles, or stubborn pockets of fat post-pregnancy, a Mommy Makeover can help restore your body to its pre-pregnancy state.',
  },
  {
    title: 'Those Dealing with Multiple Concerns',
    desc: 'If you have multiple areas of concern, such as both breasts and the abdominal region, a Mommy Makeover allows for a comprehensive solution in a single procedure.',
  },
  {
    title: 'Women Wanting a Confidence Boost',
    desc: 'Pregnancy and childbirth are beautiful experiences, but they can impact your confidence. A Mommy Makeover not only addresses physical changes but also aims to boost your self-esteem and restore confidence in your appearance.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'Dr. David Kahng at Cara Plastic Surgery & Laser Center Las Vegas brings artistry and skill to every Mommy Makeover procedure. Our commitment is to help you restore not just your body but also your confidence, embracing the beauty that comes with motherhood. Schedule a consultation today to discuss your Mommy Makeover goals and embark on the journey to reclaiming your body and confidence in Las Vegas.';
  const whatIs =
    'A Mommy Makeover is a comprehensive set of procedures tailored to address the physical changes that often accompany pregnancy and breastfeeding. Dr. David Kahng combines surgical techniques to enhance the breasts, abdomen, and other areas, providing a holistic approach to rejuvenating your post-pregnancy body.';
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Mommy Makeover"
        subtitle="Restore Your Body After Pregnancy"
        contents="Motherhood is a beautiful journey, but it can take a toll on your body. Our Mommy Makeover combines various procedures tailored to address post-pregnancy changes. From breast enhancement and tummy tucks to liposuction, we can help you reclaim your pre-pregnancy body and feel rejuvenated."
      />
      <AboutSecondBanner
        longText
        mainDesc="Embracing motherhood is a joyous and fulfilling experience, yet it often comes with significant changes to the body. Many new mothers find themselves grappling with the physical toll that pregnancy and breastfeeding can take. At Cara Plastic Surgery & Laser Center Las Vegas, Dr. David Kahng specializes in mommy makeovers with artistry and skill, offering a transformative solution to help you regain a firm and youthful appearance after the beautiful journey of childbearing."
      />
      <Section1
        desc={whatIs}
        title={'What is Mommy Makeover?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <WhoNeeds title={'who needs Mommy Makeover?'}>
        <ul className="flex flex-col lg:flex-row gap-16 mt-16 text-white">
          {whoNeedsContents.map((content, index) => (
            <li key={index} className="flex flex-col items-center gap-4 w-[90%] lg:w-[30%] mx-auto py-10 bg-[#363636]">
              <h4 className="text-[1.75rem] leading-normal font-trajan">{content.title}</h4>
              <p className="text-xl leading-loose mt-2 px-8 max-w-[1200px] mx-auto">{content.desc}</p>
            </li>
          ))}
        </ul>
      </WhoNeeds>
      <CardContainer title={'Key Benefits of a Mommy Makeover'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
