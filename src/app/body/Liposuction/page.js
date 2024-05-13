import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/body/Liposuction1.jpg';
import WHAT_IS_IMG from '@img/detailpage/body/Liposuction2.jpg';

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
    title: 'Targeted Fat Reduction',
    desc: 'Liposuction allows for precise targeting of specific areas, enabling the removal of stubborn fat deposits that may be resistant to traditional weight loss methods.',
  },
  {
    title: 'Enhanced Body Contour',
    desc: 'Achieve a more sculpted and defined physique, enhancing your natural curves and proportions.',
  },
  {
    title: 'Improved Confidence',
    desc: 'Liposuction can lead to a boost in self-esteem and body confidence as you enjoy the results of a slimmer and more contoured appearance.',
  },
  {
    title: 'Minimally Invasive',
    desc: 'Our advanced liposuction techniques ensure minimal scarring and a quicker recovery compared to traditional surgical procedures.',
  },
  {
    title: 'Long-lasting Results',
    desc: 'While maintaining a healthy lifestyle is essential, the results of liposuction are long-lasting, providing enduring improvements to your body contours.',
  },
];

const whyChoose_desc =
  'At Cara Plastic Surgery & Laser Center Las Vegas, our board-certified surgeons are committed to delivering exceptional results with a patient-centric approach. We tailor each liposuction procedure to the unique needs and goals of our clients, ensuring a personalized and satisfying experience. Schedule a consultation today to discuss your liposuction goals with our expert surgeons. Let us help you sculpt your ideal silhouette and unlock a more confident and empowered version of yourself.';
const whatIs =
  'Liposuction is a minimally invasive surgical procedure that targets and removes excess fat from specific areas of the body. Our skilled surgeons use advanced techniques to suction out unwanted fat, contouring your body for a smoother and more proportionate silhouette.';
const whoNeeds =
  'Liposuction is an excellent option for individuals who struggle with localized fat deposits that are resistant to diet and exercise. Common areas treated with liposuction include:';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Liposuction"
        subtitle="Sculpt Your Silhouette"
        contents="Say goodbye to stubborn pockets of fat that resist diet and exercise. Liposuction at Cara Plastic Surgery & Laser Center Las Vegas is a minimally invasive procedure that precisely targets and removes excess fat, revealing a more contoured and refined figure. Whether you're looking to trim your waistline or sculpt your thighs, our skilled surgeons can customize liposuction to meet your unique goals."
        img={TOP_BANNER_IMG}
      />
      <AboutSecondBanner
        longText
        mainDesc="Liposuction is a transformative procedure designed to remove stubborn pockets of fat, providing a more sculpted and refined appearance."
      />
      <Section1 desc={whatIs} title={'What is Liposuction?'} img={WHAT_IS_IMG} />
      <WhoNeeds title={'Who Needs Liposuction?'} desc={whoNeeds}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-16 mt-6 text-start text-[#808683]">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Abdomen</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Flanks (love handles)</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Thighs</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Hips</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Buttocks</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Arms</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl">Chin and Neck</p>
            </li>
          </ul>
        </div>
      </WhoNeeds>
      <CardContainer title={'Benefits of Liposuction'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
