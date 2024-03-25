import React from 'react';

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

export default function Page() {
  const whyChoose_desc =
    'At Cara Plastic Surgery & Laser Center Las Vegas, ourboard-certified surgeons are committed to delivering exceptional results with apatient-centric approach. We tailor each liposuction procedure to the uniqueneeds and goals of our clients, ensuring a personalized and satisfyingexperience. Schedule a consultation today to discuss yourliposuction goals with our expert surgeons. Let us help you sculpt your idealsilhouette and unlock a more confident and empowered version of yourself.';
  const section1_desc =
    'Liposuction is a minimally invasive surgicalprocedure that targets and removes excess fat from specific areas of the body.Our skilled surgeons use advanced techniques to suction out unwanted fat,contouring your body for a smoother and more proportionate silhouette.';
  const section2_desc =
    'Liposuction is anexcellent option for individuals who struggle with localized fat deposits thatare resistant to diet and exercise. Common areas treated with liposuctioninclude.';
  return (
    <div>
      <Section1
        desc={section1_desc}
        title={'What is Liposuction?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <CenterSection title={'who needs liposuction?'} desc={section2_desc}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16 mt-6 text-start text-[#808683]">
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Abdomen</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Flanks (lovehandles)</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Thighs</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Hips</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Buttocks</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Arms</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-4 items-center">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Chin and Neck</p>
            </li>
          </ul>
        </div>
      </CenterSection>

      <CardContainer />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
