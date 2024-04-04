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
    title: 'Natural-Looking Results',
    desc: "Using your body'sown fat ensures a more natural and harmonious enhancement, avoiding the use ofimplants.",
  },
  {
    title: 'Dual Benefit of Liposuction',
    desc: 'The liposuctionprocess not only sculpts donor areas but also allows for targeted fat removal,further enhancing body contours.',
  },
  {
    title: 'Increased Fullness and Lift',
    desc: 'Achieve a fuller,lifted, and more youthful appearance of the buttocks, enhancing overall bodyproportions.',
  },
  {
    title: 'Long-Lasting Results',
    desc: 'The Brazilian ButtLift provides enduring results, as the injected fat establishes a lastingpresence in the augmented area.',
  },
];

export default function Page() {
  const whyChoose_desc =
    'At Cara Plastic Surgery & Laser Center Las Vegas, ourplastic surgeons prioritize your safety, comfort, and satisfaction. With afocus on artistic precision, we aim to provide you with the beautifullysculpted curves you desire, enhancing your confidence and overall well-being. Schedule a consultation todayto discuss your Brazilian Butt Lift goals with our expert surgeons and embarkon the journey to a more confident and enhanced silhouette.';
  const whatIs =
    "TheBrazilian Butt Lift is a transformative cosmetic procedure designed to enhancethe shape and volume of the buttocks using your body's own fat. During theprocedure, excess fat is harvested from areas such as the abdomen, flanks, orthighs through liposuction. This fat is then purified and strategicallyinjected into the buttocks, creating a fuller, lifted, and more youthfulappearance.";
  const whoNeeds = 'A Brazilian Butt Lift is ideal for individuals who';
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Brazilian Butt Lift"
        subtitle="Enhance Your Curves"
        contents="Achieve a fuller andshapelier buttocks with our Brazilian Butt Lift procedure. Using your body'sown fat, we can sculpt and enhance your buttocks for a natural-looking andlifted appearance. Our surgeons focus on creating harmonious proportions,ensuring beautiful and balanced results."
      />
      <AboutSecondBanner
        mainDesc={
          "In today'sera, many women aspire to enhance the allure of their derriere. The BrazilianButt Lift (BBL) is increasingly becoming a popular choice for buttocksaugmentation, offering a less invasive option with several notable advantages.At Cara Plastic Surgery & Laser Center Las Vegas, our skilled plasticsurgeons specialize in Brazilian Butt Lift procedures performed in anAAAASF-accredited facility. This accreditation ensures the highest standards ofsafety and comfort for our valued patients."
        }
      />
      <Section1
        desc={whatIs}
        title={'What is Brazilian Butt Lift?'}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
      />
      <WhoNeeds title={'Who Can Benefit from a Brazilian ButtLift?'} desc={whoNeeds}>
        <div className="flex flex-col mt-12 text-start text-[#808683]">
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Desire a fuller and shapelier buttocks</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Wish to improve the proportions and symmetry oftheir lower body</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Seek a natural and long-lasting enhancement</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="min-w-[0.625rem] min-h-[0.625rem] bg-[#9D9892]" />
              <p className="text-xl ">Have sufficient donor fat for the liposuctionprocess</p>
            </li>
          </ul>
        </div>
      </WhoNeeds>
      <CardContainer
        title={
          "Whether you're looking to enhance your curves, achieve amore youthful appearance, or address asymmetry, the Brazilian Butt Lift can betailored to meet your unique aesthetic goals."
        }
        benefits={benefits}
      />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
