'use client';
import React from 'react';

import Image from 'next/image';

import DivideBoxCard from './DivideBoxCard';

import {useObserver} from '@/hooks/useObserver';
export default function DivideBoxBanner() {
  const {isVisible, domRef} = useObserver();
  return (
    <div className="relative w-full overflow-hidden bg-[#EAE9E5]">
      <Image
        src={'/banner/about/AboutDivideBoxDeco.png'}
        alt=""
        fill
        sizes="80"
        priority
        className="object-cover object-left-top"
      />
      <div
        ref={domRef}
        className={`${
          isVisible && 'animate-show_move_top'
        }  opacity-0 grid 2xl:grid-cols-2 px-8 md:px-[11.375rem] gap-12 py-40 max-w-[2100px] mx-auto`}>
        {info.map(item => (
          <DivideBoxCard key={item.title} info={item} />
        ))}
      </div>
    </div>
  );
}

const info = [
  {
    title: 'Safety:/AAAASF Accredited Facility',
    desc: 'Our commitment to patient safety is exemplified by our accreditation from the American Association for Accreditation of Ambulatory Surgery Facilities (AAAASF), which sets the highest standard for safety in the industry. At Cara Plastic Surgery & Laser Center, we boast full accreditation from the AAAASF, ensuring that the highest standards are met with every procedure. Our facility is staffed with highly-skilled, certified professionals and equipped with state-of-the-art surgical technology.',
  },
  {
    title: 'Customize:/Tailored Aesthetic Program',
    desc: 'Recognizing your uniqueness and individual aesthetic concerns, we adopt a personalized approach to crafting a customized treatment plan for your face or body, whether for cosmetic or reconstructive purposes. Our goal is not just to enhance your appearance but to elevate your life experience through personalized care.',
  },
  {
    title: 'Pioneering:/Cutting-Edge Technology and Advanced Equipment',
    desc: 'In the ever-evolving landscape of plastic surgery and non-surgical treatments, we strive to be at the forefront by providing our patients with access to the latest advancements in technology. By offering a comprehensive array of treatments and utilizing modern surgical techniques, our goal is to facilitate faster healing and achieve exceptionally beautiful results for our patients.',
  },
  {
    title: 'Aftercare:/Attentive Supervision for Optimal Recovery',
    desc: 'Achieving the most positive results hinges on a smooth healing process. Our commitment involves providing attentive supervision to our patients throughout their recovery journey. This ensures a seamless recuperation and enhances the overall post-treatment experience.',
  },
];
