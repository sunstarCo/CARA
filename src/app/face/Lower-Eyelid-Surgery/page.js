import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/face/FaceCommon.jpg';
import WHAT_IS_IMG from '@img/detailpage/face/LowerEyelid.jpg';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

const img_count = 9;
const img_name = 'lower-blepharoplasty';
const images_data = [...Array(img_count)].map((_, i) => `/banner/gallery/${img_name}/${i + 1}.jpg`);

const benefits = [
  {
    title: 'Improved Appearance',
    desc: 'Lower eyelid surgery can significantly enhance the appearance of your eyes, reducing puffiness and tightening the skin for a more youthful and alert look.',
  },
  {
    title: 'Reduced Under-Eye Bags',
    desc: 'Say goodbye to under-eye bags and dark circles that can make you appear tired or older than you feel.',
  },
  {
    title: 'Enhanced Confidence',
    desc: 'Achieve a more vibrant and refreshed appearance, boosting your confidence in social and professional settings.',
  },
  {
    title: 'Long-lasting Results',
    desc: 'Enjoy the long-lasting results of lower eyelid surgery, with many patients experiencing improvements that last for years. Who Needs Lower Eyelid Surgery?',
  },
];

const what_is =
  'Lower eyelid surgery, also known as lower blepharoplasty, is a cosmetic procedure designed to address various concerns related to the lower eyelids. These concerns may include puffiness, sagging skin, wrinkles, and the appearance of dark circles or bags under the eyes. Our experienced surgeons employ precise techniques to rejuvenate the lower eyelid area, providing you with a refreshed and youthful look.';
const who_needs =
  "Lower eyelid surgery is an ideal option for individuals who are bothered by the appearance of puffiness, sagging skin, wrinkles, or under-eye bags. It is suitable for both men and women who wish to rejuvenate their appearance and achieve a more youthful look around the eyes. Whether you're concerned about the signs of aging or simply want to enhance your natural beauty, our skilled surgeons can tailor the procedure to meet your unique goals and preferences.";
const whyChoose_desc =
  "At Cara Plastic Surgery & Laser Center Las Vegas, our commitment is to provide a personalized and supportive experience throughout your breast augmentation journey. Our skilled surgeons prioritize your safety, comfort, and satisfaction, utilizing state-of-the-art techniques to ensure optimal results. If you're considering breast augmentation or have questions about the procedure, contact us today to schedule a consultation. Discover the possibilities and embark on the path to a more confident and enhanced you with Cara Plastic Surgery & Laser Center Las Vegas.";

export default function Page() {
  return (
    <>
      <CommonTopBanner
        url="Face"
        img={TOP_BANNER_IMG}
        title="Lower Eyelid Surgery"
        contents="The eyes often make the first impression. However, excess, dark, or puffy skin beneath them can prematurely age or exhaust your appearance. Lower eyelid surgery offers a solution to rejuvenate your look, making you appear more youthful and refreshed in a natural manner."
      />
      <Intro
        title={'Lower Eyelid Surgery in Las Vegas'}
        desc={
          "At CARA Plastic Surgery & Laser Center Las Vegas, we specialize in enhancing your natural beauty through advanced surgical techniques. If you're considering rejuvenating your appearance, particularly the delicate area around your eyes, our lower eyelid surgery might be the perfect solution for you."
        }
      />
      <Section1 desc={what_is} title={'What is Lower Eyelid Surgery?'} img={WHAT_IS_IMG} />
      <CardContainer title={'Benefits of Lower Eyelid Surgery'} benefits={benefits} theme="dark" />
      <BeforeAfter images_data={images_data} heightStyle={'h-[16rem] lg:h-[20rem]'} />
      <AboutSecondBanner mainDesc="Who Can Benefit from Lower Eyelid Surgery?" subDesc={who_needs} />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
