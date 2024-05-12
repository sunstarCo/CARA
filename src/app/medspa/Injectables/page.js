import React from 'react';

import TOP_BANNER_IMG from '@img/detailpage/medspa/Injectables.jpg';
import IMG_1 from '@img/detailpage/medspa/Medspa1.jpg';
import IMG_2 from '@img/detailpage/medspa/Medspa2.jpg';
import IMG_3 from '@img/detailpage/medspa/Medspa3.jpg';
import IMG_4 from '@img/detailpage/medspa/Medspa4.jpg';
import IMG_5 from '@img/detailpage/medspa/Medspa5.jpg';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

export default function Page() {
  const what_is = [
    {
      title: 'Xeomin',
      desc: 'Xeomin is an FDA-approved injectable treatment that contains botulinum toxin type A. Similar to Botox and Dysport, Xeomin is used to reduce the appearance of wrinkles and fine lines by temporarily relaxing the muscles responsible for causing them.',
      benefits: [
        `Smoothes wrinkles and fine lines, particularly in areas such as the forehead, between the eyebrows (glabellar lines), and around the eyes (crow's feet).`,
        'Provides a more youthful and rejuvenated appearance.',
        'Results typically last for several months, with minimal downtime or discomfort.',
      ],
      img: IMG_1,
    },
    {
      title: 'Juvederm',
      desc: 'Juvederm is a collection of hyaluronic acid-based dermal fillers that are designed to add volume to the skin and smooth away wrinkles and folds. These injectable treatments are ideal for individuals who are seeking to enhance their facial contours, restore lost volume, and achieve a more youthful appearance. With Juvéderm, you can enjoy natural-looking results that last for up to one year or more, depending on the formulation used.',
      benefits: [
        'Instantly adds volume and enhances facial contours.',
        'Smooths wrinkles and folds for a more youthful appearance.',
        'Results are natural-looking and long-lasting, with effects lasting up to one year or more depending on the formulation.',
      ],
      img: IMG_2,
    },
    {
      title: 'Restylane',
      desc: 'Restylane is another hyaluronic acid-based dermal filler used to add volume and fullness to the skin, as well as to correct moderate to severe facial wrinkles and folds. The Restylane line includes different formulations tailored to specific areas and concerns.',
      benefits: [
        'Restores volume and fullness to areas of the face affected by aging.',
        'Softens facial wrinkles and folds for a smoother appearance.',
        'Provides natural-looking results that last for several months.',
      ],
      img: IMG_3,
    },
    {
      title: 'Kybella',
      desc: 'Kybella is an FDA-approved injectable treatment used to reduce excess fat under the chin, also known as submental fat or a "double chin." It contains synthetic deoxycholic acid, a naturally occurring molecule in the body that aids in the breakdown and absorption of dietary fat. When injected into the fat beneath the chin, Kybella works to destroy fat cells, resulting in a more defined jawline and improved facial profile. This non-surgical treatment offers an effective way to address stubborn fat deposits in the submental area without the need for invasive surgery.',
      benefits: [
        'Reduction of excess fat under the chin.',
        'Improved definition of the jawline and facial profile.',
        'Non-surgical approach to addressing submental fat.',
        'Customizable treatment for individual needs.',
        'Minimal downtime and recovery compared to surgical options.',
        'Long-lasting results with proper maintenance.',
        'Enhancement of overall facial aesthetics and self-confidence.',
      ],
      img: IMG_4,
    },
    {
      title: 'Sculptra',
      desc: 'Sculptra is a unique injectable treatment that stimulates collagen production in the skin, helping to restore volume and improve skin texture over time. It is made from poly-L-lactic acid, a biocompatible and biodegradable substance.',
      benefits: [
        'Gradually restores facial volume and contours for a more youthful appearance.',
        'Improves skin texture and elasticity.',
        'Results are subtle and natural-looking, with effects lasting up to two years or more after a series of treatments.',
      ],
      img: IMG_5,
    },
  ];

  const extraDesc = {
    juvederm: [
      {
        title: 'Juvederm Ultra XC',
        desc: 'Juvederm Ultra XC is designed to add fullness and plumpness to the lips, as well as smooth out moderate to severe facial wrinkles and folds.',
      },
      {
        title: 'Juvederm Voluma XC',
        desc: 'Juvederm Voluma XC is specifically formulated to restore volume and contour to the cheeks, helping to lift and rejuvenate the midface area.',
      },
    ],
    restylane: [
      {
        title: 'Restylane Classic',
        desc: 'Restylane Classic is versatile and can be used to smooth wrinkles, add volume to the lips, and enhance facial contours.',
      },
      {
        title: 'Restylane Kysse',
        desc: 'Restylane Kysse is specifically formulated for lip augmentation and enhancement, providing natural-looking, soft, and plump lips.',
      },
    ],
  };

  const whyChoose_desc =
    'These injectable treatments offer safe and effective solutions for addressing a wide range of cosmetic concerns, helping you achieve a refreshed and rejuvenated appearance with minimal downtime. Schedule a free consultation with CARA Plastic Surgery & Laser Center Las Vegas today to determine the best treatment plan for your individual needs and goals.';

  return (
    <>
      <CommonTopBanner
        url="Medspa"
        img={TOP_BANNER_IMG}
        title="Injectables"
        contents={`Our injectable treatments offer subtle enhancements that can make a big impact on your appearance. Whether you're interested in smoothing fine lines and wrinkles, adding volume to your lips, or sculpting your cheekbones, our skilled practitioners will provide a treatment plan to address your unique needs and desires. With advanced techniques and premium products, we'll help you achieve natural-looking results that leave you looking refreshed and rejuvenated.`}
      />
      <Intro
        title={'Injectables'}
        desc={`At CARA Plastic Surgery & Laser Center Las Vegas, we offer a range of injectable treatments
          designed to address various cosmetic concerns and enhance your natural beauty. Explore our selection of injectables
          below to learn more about each option and discover how they can help you achieve your aesthetic goals.`}
      />
      {what_is.map((item, index) => {
        return (
          <>
            <Section1
              desc={item.desc}
              title={`What is ${item.title}?`}
              img={item.img}
              benefits={item.benefits}
              reverse={index % 2 === 0}
              key={index}
            />
            {extraDesc[item.title.toLowerCase()] && (
              <AboutSecondBanner contents={extraDesc[item.title.toLowerCase()]} />
            )}
          </>
        );
      })}
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
