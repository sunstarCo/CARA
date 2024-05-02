import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

export default function Page() {
  const what_is = {
    Inmode_BodyFX: {
      title: 'Inmode BodyFX',
      desc: 'Inmode BodyFX is a non-invasive body contouring treatment that uses radiofrequency energy and vacuum suction to target stubborn fat deposits, reduce cellulite, and tighten the skin. This advanced technology heats and destroys fat cells while simultaneously stimulating collagen production, resulting in smoother, firmer skin and a slimmer silhouette.',
      benefits: [
        `Reduces stubborn fat deposits and cellulite.`,
        'Tightens and firms skin for a smoother, more toned appearance.',
        'Non-invasive treatment with minimal discomfort and downtime.',
      ],
    },
    Non_Surgical_Butt_Lift: {
      title: 'Non-Surgical Butt Lift',
      desc: `Our non-surgical butt lift treatment uses a combination of advanced techniques, including radiofrequency energy, ultrasound therapy, and injectable fillers, to enhance and lift the buttocks without surgery. By stimulating collagen production and adding volume to targeted areas, this procedure improves buttock shape, contour, and projection for a more sculpted and lifted appearance.`,
      benefits: [
        'Lifts and enhances the buttocks without surgery or implants.',
        'Improves buttock shape and contour for a more youthful appearance.',
        'Results are natural-looking and long-lasting with minimal downtime',
      ],
    },
    Weight_Loss: {
      title: 'Weight Loss',
      desc: 'Our weight loss program is designed to help you achieve your desired weight and body composition through a combination of personalized diet, exercise, and lifestyle modifications. Our team of experts will work with you to develop a customized plan tailored to your individual needs and goals, providing guidance, support, and motivation every step of the way.',
      benefits: [
        'Achieves sustainable weight loss and improved overall health.',
        'Customized plan based on your unique needs and goals.',
        'Receive ongoing support and guidance to help you stay on track.',
      ],
    },
  };

  const whyChoose_desc = `Whether you're looking to eliminate stubborn fat, enhance your curves, or achieve your weight loss goals, CARA Plastic Surgery & Laser Center Las Vegas offers comprehensive body contouring solutions to help you look and feel your best. Schedule a free consultation today to explore your options and start your journey to a more confident and sculpted silhouette.`;

  return (
    <>
      <CommonTopBanner
        url="Medspa"
        img={BreastSample}
        title="Body Contouring"
        contents={`Restore your skin's youthful glow and vitality with our rejuvenating skincare treatments. From skin booster to PRP, we offer a range of options to address various concerns such as acne scars, sun damage, and uneven skin tone.`}
      />
      <Intro
        title={'Body Contouring'}
        desc={`At CARA Plastic Surgery & Laser Center, we offer innovative body contouring treatments to help you achieve the sculpted physique you desire. Explore our selection of state-of-the-art procedures below to learn more about each option and discover how they can help you achieve your aesthetic goals.`}
      />
      <Section1
        desc={what_is.Inmode_BodyFX.desc}
        title={`What is ${what_is.Inmode_BodyFX.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.Inmode_BodyFX.benefits}
      />
      <Section1
        reverse
        desc={what_is.Non_Surgical_Butt_Lift.desc}
        title={`What is ${what_is.Non_Surgical_Butt_Lift.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.Non_Surgical_Butt_Lift.benefits}
        no_bg
      />
      <Section1
        desc={what_is.Weight_Loss.desc}
        title={`What is ${what_is.Weight_Loss.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.Weight_Loss.benefits}
        no_bg
      />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
