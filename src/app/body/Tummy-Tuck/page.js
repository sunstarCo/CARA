import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/body/Tummy-Tuck1.jpg';
import WHAT_IS_IMG from '@img/detailpage/body/Tummy-Tuck2.jpg';

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
    title: 'Abdominal Tightening',
    desc: 'Tummy Tuck surgery tightens weakened abdominal muscles, providing a firmer and more sculpted midsection.',
  },
  {
    title: 'Excess Skin Removal',
    desc: 'The procedure removes surplus skin, addressing sagging and creating a smoother, toned appearance.',
  },
  {
    title: 'Enhanced Body Contour',
    desc: 'Enjoy a more defined waistline and a rejuvenated silhouette, boosting overall body proportions.',
  },
  {
    title: 'Increased Confidence',
    desc: 'A Tummy Tuck can lead to a significant boost in confidence, allowing you to feel more comfortable and empowered in your own skin.',
  },
];

const whoHave = [
  'Experienced significant weight loss',
  'Undergone pregnancy and childbirth, leading to stretched abdominal muscles and skin',
  'Noticeable sagging or excess skin in the abdominal area',
  'Weakened abdominal muscles causing a protruding belly',
];

const whyChoose_desc =
  'At Cara Plastic Surgery & Laser Center Las Vegas, our experienced surgeons prioritize your safety and satisfaction throughout the Tummy Tuck journey. We understand the transformative impact this procedure can have on your confidence and overall well-being, and we are committed to delivering exceptional results tailored to your unique needs. Schedule a consultation today to discuss your Tummy Tuck goals with our expert surgeons. Let us help you rediscover your toned midsection and embrace a more confident and revitalized you.';
const whatIs =
  'A Tummy Tuck, or abdominoplasty, is a transformative surgical procedure designed to address excess skin and weakened muscles in the abdominal area. Our skilled surgeons utilize advanced techniques to tighten abdominal muscles and remove surplus skin, resulting in a smoother and more toned midsection.';
const whoNeeds = 'A Tummy Tuck is an excellent option for individuals who have:';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Tummy Tuck"
        subtitle="Flatten and Tighten Your Abdomen"
        contents="Regain a flat and firm abdomen with a Tummy Tuck procedure. Pregnancy, weight fluctuations, and aging can lead to excess skin and weakened muscles. Our Tummy Tuck surgery tightens abdominal muscles and removes excess skin, resulting in a smoother, more toned midsection. Rediscover confidence in your appearance and embrace a revitalized silhouette."
        img={TOP_BANNER_IMG}
      />
      <AboutSecondBanner
        longText
        mainDesc="The natural processes of pregnancy, weight loss, and aging often lead to the development of loose, sagging skin, and weakened muscles in the abdominal region. When traditional methods such as diet and exercise prove ineffective, a Tummy Tuck in Las Vegas emerges as a transformative solution to help you attain the desired stomach appearance."
      />
      <Section1 desc={whatIs} title={'What is Tummy Tuck?'} img={WHAT_IS_IMG} />
      <WhoNeeds title={'who needs Tummy Tuck?'} desc={whoNeeds}>
        <div className="flex flex-col mt-12 text-start text-[#808683]">
          <ul className="flex flex-col gap-8">
            {whoHave.map((who, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
                <p className="text-xl">{who}</p>
              </li>
            ))}
          </ul>
        </div>
      </WhoNeeds>
      <CardContainer title={'Benefits of Tummy Tuck'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
