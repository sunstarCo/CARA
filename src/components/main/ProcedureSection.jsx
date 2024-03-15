import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const sections = {
  Breast: {
    title: 'BREAST',
    sub_title: 'Refine Your Silhouette',
    image: '/banner/main/Breastmain.png',
    desc: 'Crafting the Perfect Contour Under the skilled hands of Dr. Kahng, our breast procedures are meticulously executed, employing state-of-the-art surgical techniques in breast augmentation, lifts, and a comprehensive array of surgeries aimed at enhancing body balance and harmony, which extends to specialized procedures like breast reconstruction.',
    links: [
      {title: 'Breast Augmentation', path: '/breast/Breast-Augmentation'},
      {title: 'Breast Lift', path: '/breast/Breast-Lift'},
      {title: 'Breast Reduction', path: '/breast/Breast-Reduction'},
      {title: 'Male Breast Reduction', path: '/breast/Male-Breast_Reduction'},
      {title: 'Breast Impant Removal', path: '/breast/Breast-Impant-Removal'},
    ],
  },
  'Face&Nose': {
    title: 'FACE&NOSE',
    sub_title: 'Harmonize Your Facial Features',
    image: '/banner/main/Breastmain.png',
    desc: "When facial imperfections affect your self-esteem, we're here to assist you in realizing your cosmetic aspirations through our comprehensive range of facial surgery procedures, crafting a sophisticated elegance, seamless harmony, and enduring beauty.Employing cutting-edge surgical techniques, we enhance your innate features, infusing more allure, balance, and rejuvenation into your appearance through the latest innovations in cosmetic surgery and technology.",
    links: [
      {title: 'Rhinoplasty', path: '/nose/Rhinoplasty'},
      {title: 'Face Lift', path: '/face/Facelift'},
      {title: 'Neck Lift', path: '/face/Neck-Lift'},
      {title: 'Chin Augmentation', path: '/face/Chin-Augmentation'},
    ],
  },
  Body: {
    title: 'BODY',
    sub_title: 'Refine Your Figure',
    image: '/banner/main/Breastmain.png',
    desc: 'Patients entrust us to reshape, rejuvenate, and elevate body contours using cutting-edge techniques and technologies, encompassing a prominent array of Asian plastic surgery procedures for our Las Vegas clientele. If you seek complete satisfaction with your body, Dr. Kahng is the expert you should reach out to.',
    links: [
      {title: 'Liposuction', path: '/body/Liposuction'},
      {title: 'Tummy Tuck', path: '/body/Tummy-Tuck'},
      {title: 'Mommy Makeover', path: '/body/Mommy-Makeover'},
      {title: 'Brazilian Butt Lift', path: '/body/Brazilian-Butt-Lift'},
    ],
  },
};

export default function ProcedureSection({section, reverse = false}) {
  const {title, sub_title, desc, links, image} = sections[section];
  return (
    <div className="flex flex-col w-full relative pt-[140px] px-[182px] pb-[110px]">
      <Image
        src={'/logo/BG_logo.svg'}
        alt=""
        width={0}
        height={0}
        sizes="100"
        className="w-fit absolute bottom-0 right-0 -z-10"
      />
      <div className="flex gap-[100px]">
        {!reverse && <Image src={image} alt="" width={0} height={0} sizes="100" className="w-1/2 object-cover" />}
        <div className="w-1/2">
          <p className="leading-normal text-[64px] uppercase">{title}</p>
          <div className="w-[100px] h-2 bg-[#D9D5CC] mt-10" />
          <p className="text-[1.75rem] leading-loose mt-12 uppercase">{sub_title}</p>
          <p className="text-2xl leading-loose mt-[0.625rem]">{desc}</p>
        </div>
        {reverse && <Image src={image} alt="" width={0} height={0} sizes="100" className="w-1/2 object-cover" />}
      </div>

      <div className="flex flex-col mt-[110px] items-center gap-6">
        {section === 'Breast' ? (
          <>
            <div className="flex items-center">
              <Link href={'/breast/Breast-Augmentation'} className="text-[26px] leading-normal">
                Breast Augmentation
              </Link>
              <div className="mx-20 w-[1px] h-6 bg-[#BDB5AA]" />
              <Link href={'/breast/Breast-Lift'} className="text-[26px] leading-normal">
                Breast Lift
              </Link>
              <div className="mx-20 w-[1px] h-6 bg-[#BDB5AA]" />
              <Link href={'/breast/Breast-Reduction'} className="text-[26px] leading-normal">
                Breast Reduction
              </Link>
            </div>
            <div className="flex items-center">
              <Link href={'/breast/Male-Breast-Reduction'} className="text-[26px] leading-normal">
                Male Breast Reduction
              </Link>
              <div className="mx-20 w-[1px] h-6 bg-[#BDB5AA]" />
              <Link href={'/breast/Breast-Impant-Removal'} className="text-[26px] leading-normal">
                Breast Impant Removal
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            {links.map((link, index) => (
              <div key={index + link.title} className="flex items-center">
                <Link href={link.path} className="text-[26px] leading-normal">
                  {link.title}
                </Link>
                {index !== links.length - 1 && <div className="mx-20 w-[1px] h-6 bg-[#BDB5AA]" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
