import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/body/Mommy-Makeover.jpg';
import WHAT_IS_IMG from '@img/detailpage/body/Tummy-Tuck1.jpg';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import BeforeAfter from '@/components/detail/common/BeforeAfter';
import CardContainer from '@/components/detail/common/CardContainer';
import Section1 from '@/components/detail/common/Section1';
import WhoNeeds from '@/components/detail/common/WhoNeeds';
import WhyChoose from '@/components/detail/common/WhyChoose';

const img_count = 9;
const img_name = 'brazilian-butt-lift';
const images_data = [...Array(img_count)].map((_, i) => `/banner/gallery/${img_name}/${i + 1}.jpg`);

const benefits = [
  {
    title: 'Natural-Looking Results',
    desc: "Using your body's own fat ensures a more natural and harmonious enhancement, avoiding the use of implants.",
  },
  {
    title: 'Dual Benefit of Liposuction',
    desc: 'The liposuction process not only sculpts donor areas but also allows for targeted fat removal, further enhancing body contours.',
  },
  {
    title: 'Increased Fullness and Lift',
    desc: 'Achieve a fuller, lifted, and more youthful appearance of the buttocks, enhancing overall body proportions.',
  },
  {
    title: 'Long-Lasting Results',
    desc: 'The Brazilian Butt Lift provides enduring results, as the injected fat establishes a lasting presence in the augmented area.',
  },
];

const whoHave = [
  'Desire fuller and shapelier buttocks',
  'Wish to improve the proportions and symmetry of their lower body',
  'Seek a natural and long-lasting enhancement',
  'Have sufficient donor fat for the liposuction process',
];

const whyChoose_desc =
  'At Cara Plastic Surgery & Laser Center Las Vegas, our plastic surgeons prioritize your safety, comfort, and satisfaction. With a focus on artistic precision, we aim to provide you with the beautifully sculpted curves you desire, enhancing your confidence and overall well-being. Schedule a consultation today to discuss your Brazilian Butt Lift goals with our expert surgeons and embark on the journey to a more confident and enhanced silhouette.';
const whatIs =
  "The Brazilian Butt Lift is a transformative cosmetic procedure designed to enhance the shape and volume of the buttocks using your body's own fat. During the procedure, excess fat is harvested from areas such as the abdomen, flanks, or thighs through liposuction. This fat is then purified and strategically injected into the buttocks, creating a fuller, lifted, and more youthful appearance.";
const whoNeeds = 'A Brazilian Butt Lift is ideal for individuals who';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="body"
        title="Brazilian Butt Lift"
        subtitle="Enhance Your Curves"
        contents="Achieve fuller and shapelier buttocks with our Brazilian Butt Lift procedure. Using your body's own fat, we can sculpt and enhance your buttocks for a natural-looking and lifted appearance. Our surgeons focus on creating harmonious proportions, ensuring beautiful and balanced results."
        img={TOP_BANNER_IMG}
      />
      <AboutSecondBanner
        longText
        mainDesc={
          "In today's era, many women aspire to enhance the allure of their derriere. The Brazilian Butt Lift (BBL) is increasingly becoming a popular choice for buttocks augmentation, offering a less invasive option with several notable advantages. At Cara Plastic Surgery & Laser Center Las Vegas, our skilled plastic surgeons specialize in Brazilian Butt Lift procedures performed in an AAAASF-accredited facility. This accreditation ensures the highest standards of safety and comfort for our valued patients."
        }
      />
      <Section1 desc={whatIs} title={'What is Brazilian Butt Lift?'} img={WHAT_IS_IMG} />
      <WhoNeeds title={'Who Can Benefit from a Brazilian ButtLift?'} desc={whoNeeds}>
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
      <CardContainer title={'Benefits of Brazilian Butt Lift'} benefits={benefits} />
      <BeforeAfter images_data={images_data} />
      <WhyChoose desc={whyChoose_desc} />
    </div>
  );
}
