'use client';
import React, {Fragment} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {useObserver} from '@/hooks/useObserver';

const sections = {
  Breast: {
    title: 'Breast',
    sub_title: '',
    image: '/banner/main/Breast.jpg',
    desc: 'Under the skilled hands of Dr. Kahng, our breast procedures are meticulously executed, employing state-of-the-art surgical techniques in breast augmentation, lifts, and a comprehensive array of surgeries aimed at enhancing body balance and harmony, which extends to specialized procedures such as breast reconstruction.',
    links: [
      {title: 'Breast Augmentation', path: '/breast/Breast-Augmentation'},
      {title: 'Breast Lift', path: '/breast/Breast-Lift'},
      {title: 'Breast Reduction', path: '/breast/Breast-Reduction'},
      {title: 'Male Breast Reduction', path: '/breast/Male-Breast_Reduction'},
      {title: 'Breast Implant Removal', path: '/breast/Breast-Implant-Removal'},
    ],
  },
  'Face&Nose': {
    title: 'Face & Nose',
    sub_title: '',
    image: '/banner/main/Face&Nose.jpg',
    desc: "When facial imperfections affect your self-esteem, we're here to assist you in realizing your cosmetic aspirations through our comprehensive range of facial surgery procedures, crafting a sophisticated elegance, seamless harmony, and enduring beauty.Employing cutting-edge surgical techniques, we enhance your innate features, infusing more allure, balance, and rejuvenation into your appearance through the latest innovations in cosmetic surgery and technology.",
    links: [
      {title: 'Rhinoplasty', path: '/nose/Rhinoplasty'},
      {title: 'Face Lift', path: '/face/Facelift'},
      {title: 'Neck Lift', path: '/face/Neck-Lift'},
      {title: 'Chin Augmentation', path: '/face/Chin-Augmentation'},
    ],
  },
  Body: {
    title: 'Body',
    sub_title: '',
    image: '/banner/main/Body.jpg',
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
  const animate = reverse ? 'animate-show_move_left' : 'animate-show_move_right';
  const {domRef, isVisible} = useObserver();
  return (
    <div
      ref={domRef}
      className={`flex flex-col items-center justify-center relative pt-[8.75rem] px-8 pb-[6.875rem] opacity-0 transition-all ${
        isVisible && animate
      }`}>
      <Image
        src={'/logo/BG_logo.svg'}
        alt=""
        width={0}
        height={0}
        sizes="100"
        className="absolute bottom-0 right-0 w-fit -z-10"
      />
      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } gap-10 lg:gap-[6.25rem] items-center justify-center w-full`}>
        <Image
          src={image}
          alt=""
          width={760}
          height={720}
          sizes="800px"
          className="w-full md:w-1/2 md:min-w-[400px] max-w-[760px] object-cover"
        />
        <div className="max-w-[680px] w-full">
          <p className="leading-normal text-[3rem] md:text-54px font-trajan">{title}</p>
          <div className="w-[100px] h-2 bg-[#D9D5CC] mt-10" />
          <p className="mt-12 text-2xl leading-loose font-trajan">{sub_title}</p>
          <p className="text-xl leading-loose mt-[0.625rem] font-light tracking-[0.5px]">{desc}</p>
        </div>
      </div>
      <div className="flex flex-col mt-[6.875rem] items-center gap-6 text-center font-trajan">
        {section === 'Breast' ? (
          <>
            <div className="flex items-center text-xl leading-normal max-sm:gap-8 text-nowrap sm:text-22px max-sm:hidden">
              {links.slice(0, 3).map((link, index) => (
                <Fragment key={index + link.title}>
                  <Link href={link.path} className={`text-wrap hover:text-[#BDB5AA] transition-colors`}>
                    {link.title}
                  </Link>
                  {index !== 2 && <div className="mx-10 md:mx-20 w-[1px] h-6 bg-[#BDB5AA]" />}
                </Fragment>
              ))}
            </div>
            <div className="flex items-center gap-8 leading-normal text-22px max-sm:hidden">
              {links.slice(3, 5).map((link, index) => (
                <Fragment key={index + link.title}>
                  <Link href={link.path} className={`text-wrap hover:text-[#BDB5AA] transition-colors `}>
                    {link.title}
                  </Link>
                  {index !== 1 && <div className="mx-10 md:mx-20 w-[1px] h-6 bg-[#BDB5AA]" />}
                </Fragment>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 leading-normal text-22px sm:hidden">
              {links.map((link, index) => (
                <Fragment key={index + link.title}>
                  <Link href={link.path} className={`text-wrap hover:text-[#BDB5AA] transition-colors`}>
                    {link.title}
                  </Link>
                  {index !== 4 && <div className="h-2 w-2 bg-[#BDB5AA] rounded-full" />}
                </Fragment>
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center grid-cols-2 gap-8 mx-auto w-fit max-lg:grid ">
            {links.map((link, index) => (
              <div key={index + link.title} className="flex items-center justify-center">
                {index !== 0 && (
                  <div
                    className={`w-[1px] h-6 mx-6 md:mx-16 bg-[#BDB5AA] max-lg:hidden max-sm:${
                      index === 2 && 'hidden'
                    } `}
                  />
                )}
                <Link
                  href={link.path}
                  className={`text-xl sm:text-22px leading-normal hover:text-[#BDB5AA] transition-colors`}>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
