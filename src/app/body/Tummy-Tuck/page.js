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
    title: 'Abdominal Tightening',
    desc: 'Tummy Tuck surgery tightensweakened abdominal muscles, providing a firmer and more sculpted midsection.',
  },
  {
    title: 'Excess Skin Removal',
    desc: 'The procedure removes surplusskin, addressing sagging and creating a smoother, toned appearance.',
  },
  {
    title: 'Enhanced Body Contour',
    desc: 'Enjoy a more definedwaistline and a rejuvenated silhouette, boosting overall body proportions.',
  },
  {
    title: 'Increased Confidence',
    desc: 'A Tummy Tuck can lead to asignificant boost in confidence, allowing you to feel more comfortable andempowered in your own skin.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'At CaraPlastic Surgery & Laser Center Las Vegas, our experienced surgeonsprioritize your safety and satisfaction throughout the Tummy Tuck journey. Weunderstand the transformative impact this procedure can have on your confidenceand overall well-being, and we are committed to delivering exceptional resultstailored to your unique needs. Schedule aconsultation today to discuss your Tummy Tuck goals with our expert surgeons.Let us help you rediscover your toned midsection and embrace a more confidentand revitalized you.';
  const whatIs =
    'A TummyTuck, or abdominoplasty, is a transformative surgical procedure designed toaddress excess skin and weakened muscles in the abdominal area. Our skilledsurgeons utilize advanced techniques to tighten abdominal muscles and removesurplus skin, resulting in a smoother and more toned midsection.';
  const whoNeeds = 'A Tummy Tuck is an excellent option for individuals who have';
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Tummy Tuck"
        subtitle="Flatten and Tighten Your Abdomen"
        contents="Regain a flat andfirm abdomen with a Tummy Tuck procedure. Pregnancy, weight fluctuations, andaging can lead to excess skin and weakened muscles. Our Tummy Tuck surgerytightens abdominal muscles and removes excess skin, resulting in a smoother,more toned midsection. Rediscover confidence in your appearance and embrace arevitalized silhouette."
      />
      <AboutSecondBanner mainDesc="The naturalprocesses of pregnancy, weight loss, and aging often lead to the development ofloose, sagging skin, and weakened muscles in the abdominal region. Whentraditional methods such as diet and exercise prove ineffective, a Tummy Tuckin Las Vegas emerges as a transformative solution to help you attain thedesired stomach appearance." />
      <Section1 desc={whatIs} title={'What is Tummy Tuck?'} img={'/detailpage/liposuction/liposuction_what_is.png'} />
      <WhoNeeds title={'who needs Tummy Tuck?'} desc={whoNeeds}>
        <div className="flex flex-col mt-12 text-start text-[#808683]">
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Experienced significant weight loss</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">
                Undergone pregnancy and childbirth, leading tostretched abdominal muscles and skin
              </p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Noticeable sagging or excess skin in the abdominalarea</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Weakened abdominal muscles causing a protrudingbelly</p>
            </li>
          </ul>
        </div>
      </WhoNeeds>
      <CardContainer title={'Benefits of Tummy Tuck'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
