import React from 'react';

import BreastSample from '../../../../public/detailpage/breast/BreastAugmentationImg.png';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import Section1 from '@/components/detail/common/Section1';
import WhyChoose from '@/components/detail/common/WhyChoose';
import Intro from '@/components/detail/nose/Intro';

export default function Page() {
  const what_is = {
    PRP_Injection: {
      title: 'PRP Injection',
      desc: 'PRP (Platelet-Rich Plasma) injection therapy harnesses the healing power of your own blood to stimulate collagen production and promote skin renewal. A small sample of blood is drawn from your arm, processed to isolate the platelet-rich plasma, and then injected into targeted areas of the skin. PRP contains growth factors and other nutrients that help improve skin texture, tone, and elasticity.',
      benefits: [
        `Stimulates collagen production for firmer, smoother skin.`,
        'Improves skin tone and texture, reducing the appearance of fine lines and wrinkles.',
        'Enhances overall skin quality and radiance.',
      ],
    },
    Microneedling: {
      title: 'Microneedling',
      desc: `Microneedling, also known as collagen induction therapy, is a minimally invasive procedure that uses tiny needles to create controlled micro-injuries in the skin. This stimulates the body's natural healing process, promoting collagen and elastin production. Microneedling helps improve skin texture, reduce acne scars, minimize pores, and enhance overall skin tone and clarity.`,
      benefits: [
        'Stimulates collagen production for firmer, more youthful skin.',
        'Improves the appearance of acne scars, fine lines, and wrinkles.',
        'Enhances skin texture and tone for a smoother, more radiant complexion',
      ],
    },
    Skin_Booster: {
      title: 'Skin Booster',
      desc: 'Skin booster treatments involve the injection of hyaluronic acid-based dermal fillers into the skin to hydrate, plump, and rejuvenate from within. Unlike traditional dermal fillers, which add volume to specific areas, skin boosters are designed to improve overall skin quality and hydration. They can help reduce fine lines, improve elasticity, and restore a youthful glow to the skin.',
      benefits: [
        'Hydrates and nourishes the skin for a radiant, glowing complexion.',
        'Improves skin texture and elasticity, reducing the appearance of fine lines and wrinkles.',
        'Restores volume and fullness to the skin, resulting in a more youthful appearance.',
      ],
    },
  };

  const whyChoose_desc =
    'At CARA Plastic Surgery & Laser Center Las Vegas, our skilled providers are dedicated to helping you achieve your skincare goals with personalized treatment plans tailored to your unique needs. Schedule a free consultation today to explore our skin rejuvenation options and start your journey to beautiful, youthful-looking skin.';

  return (
    <>
      <CommonTopBanner
        url="Medspa"
        img={BreastSample}
        title="Skin Rejuvenation"
        contents={`Restore your skin's youthful glow and vitality with our rejuvenating skincare treatments. From skin booster to PRP, we offer a range of options to address various concerns such as acne scars, sun damage, and uneven skin tone.`}
      />
      <Intro
        title={'Skin Rejuvenation'}
        desc={`At CARA Plastic Surgery & Laser Center, we specialize in advanced skin rejuvenation treatments to help you achieve a radiant, youthful complexion. Explore our selection of state-of-the-art procedures below to learn more about each option and discover how they can revitalize your skin.`}
      />
      <Section1
        desc={what_is.PRP_Injection.desc}
        title={`What is ${what_is.PRP_Injection.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.PRP_Injection.benefits}
      />
      <Section1
        reverse
        desc={what_is.Microneedling.desc}
        title={`What is ${what_is.Microneedling.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.Microneedling.benefits}
        no_bg
      />
      <Section1
        desc={what_is.Skin_Booster.desc}
        title={`What is ${what_is.Skin_Booster.title}?`}
        img={'/detailpage/liposuction/liposuction_what_is.png'}
        benefits={what_is.Skin_Booster.benefits}
        no_bg
      />
      <WhyChoose desc={whyChoose_desc} />
    </>
  );
}
