import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.jpg';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

export default function Page() {
  const what_is = {
    ultherapy: {
      title: 'Ultherapy',
      desc: 'Ultherapy is a non-invasive ultrasound treatment that stimulates the production of collagen deep within the skin. By targeting the foundational layers of tissue, Ultherapy lifts and tightens sagging skin on the face, neck, and décolletage, resulting in a more lifted and youthful appearance.',
      benefits: [
        `Lifts and tightens sagging skin without surgery or downtime.`,
        'Stimulates collagen production for gradual, natural-looking results.',
        'Improves skin texture and elasticity for a smoother and more rejuvenated appearance.',
      ],
    },
    oligio: {
      title: 'Oligio',
      desc: 'Oligio is a radiofrequency (RF) skin tightening treatment that delivers controlled heat energy to the deeper layers of the skin. By promoting collagen production and remodeling, Oligio helps tighten loose skin, reduce wrinkles, and improve overall skin texture.',
      benefits: [
        'Tightens and firms sagging skin on the face and body.',
        'Reduces the appearance of fine lines and wrinkles.',
        'Stimulates collagen production for long-lasting results',
      ],
    },
    potenza: {
      title: 'Potenza',
      desc: 'Potenza is a microneedling RF (radiofrequency) device that combines the benefits of traditional microneedling with the added advantage of RF energy. By delivering RF energy directly into the skin through tiny needles, Potenza stimulates collagen production and tightens loose skin, resulting in improved texture and firmness.',
      benefits: [
        'Tightens and firms sagging skin on the face and body.',
        'Reduces the appearance of wrinkles, acne scars, and other skin imperfections.',
        'Minimizes downtime and discomfort compared to traditional surgical procedures.',
      ],
    },
    inmode_Forma: {
      title: 'Inmode Forma',
      desc: 'Inmode Forma is a non-invasive RF skin tightening treatment that utilizes thermal energy to stimulate collagen production and tighten loose skin. By gently heating the deeper layers of the skin, Forma helps improve skin laxity and reduce the appearance of wrinkles, giving you a smoother and more youthful complexion.',
      benefits: [
        'Lifts and tightens sagging skin on the face and neck',
        'Improves skin texture and tone for a more youthful appearance.',
        'Safe and comfortable treatment with no downtime.',
      ],
    },
    thread_lift: {
      title: 'Thread Lift',
      desc: `Thread lift, also known as a non-surgical facelift, is a minimally invasive procedure that uses dissolvable threads to lift and tighten sagging skin on the face and neck. By strategically placing absorbable threads beneath the skin's surface, thread lift provides immediate lifting effects while also stimulating collagen production for long-term skin tightening benefits.`,
      benefits: [
        'Lifts and tightens sagging skin without surgery or scars.',
        'Improves facial contours and restores youthful definition.',
        'Results continue to improve over time as collagen production increases.',
      ],
    },
  };

  const whyChoose_desc =
    'These advanced skin tightening treatments offer safe and effective solutions for addressing a wide range of concerns, from mild skin laxity to more pronounced signs of aging. Schedule a free consultation with CARA Plastic Surgery & Laser Center Las Vegas to determine the best treatment plan for your individual needs and goals.';

  return (
    <>
      <CommonTopBanner
        url="Medspa"
        img={BreastSample}
        title="Skin Tightening"
        contents={`Using advanced technology, we stimulate collagen production to tighten and tone loose skin, reducing the appearance of wrinkles and fine lines. Whether you're targeting areas on your face, neck, or body, our non-invasive procedures will leave you with smoother, more radiant skin that exudes confidence.`}
      />
      <Intro
        title={'Skin Tightening'}
        desc={`At CARA Plastic Surgery & Laser Center Las Vegas, we offer advanced skin tightening treatments to help you achieve firmer, smoother, and more youthful-looking skin. Explore our selection of innovative technologies below to learn more about each option and discover how they can help you achieve your aesthetic goals.`}
      />
      <Section1
        desc={what_is.ultherapy.desc}
        title={`What is ${what_is.ultherapy.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.ultherapy.benefits}
      />
      <Section1
        reverse
        desc={what_is.oligio.desc}
        title={`What is ${what_is.oligio.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.oligio.benefits}
        no_bg
      />
      <Section1
        desc={what_is.potenza.desc}
        title={`What is ${what_is.potenza.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.potenza.benefits}
        no_bg
      />
      <Section1
        reverse
        desc={what_is.inmode_Forma.desc}
        title={`What is ${what_is.inmode_Forma.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.inmode_Forma.benefits}
        no_bg
      />
      <Section1
        desc={what_is.thread_lift.desc}
        title={`What is ${what_is.thread_lift.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.thread_lift.benefits}
        no_bg
      />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
