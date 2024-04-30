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
    desc: 'Our commitment to patient safety is exemplified by our accreditation from the AmericanAssociation for Accreditation of Ambulatory Surgery Facilities (AAAASF),setting the highest standard for safety in the industry. At Cara PlasticSurgery & Laser Center, we boast full accreditation from the AAAASF,ensuring the highest standards are met. Our facility is staffed withhighly-skilled, certified professionals and equipped with state-of-the-artsurgical technology.',
  },
  {
    title: 'Customize:/Tailored Aesthetic Program',
    desc: 'Recognizing your uniqueness and individual aesthetic concerns, we adopt a personalized approachto crafting a customized treatment plan for your face or body, whether forcosmetic or reconstructive purposes. Our goal is not just to enhance yourappearance but to elevate your life experience through personalized care.',
  },
  {
    title: 'Pioneering:/Cutting-Edge Technology and Advanced Equipment',
    desc: 'In theever-evolving landscape of plastic surgery and non-surgical treatments, westrive to be at the forefront by providing our patients with access to thelatest advancements in technology. Offering acomprehensive array of treatments and utilizing modern surgical techniques, ourgoal is to facilitate faster healing and achieve exceptionally beautiful resultsfor our patients.',
  },
  {
    title: 'Aftercare:/Attentive Supervision for Optimal Recovery',
    desc: 'Achieving the mostpositive results hinges on a smooth healing process. Our commitment involvesproviding attentive supervision to our patients throughout their recovery journey. This ensures a seamless recuperation and enhances the overallpost-treatment experience.',
  },
];
