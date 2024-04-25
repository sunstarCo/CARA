'use client';
import React from 'react';

import '../header/header.css';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export const menus = [
  {
    menu: 'Home',
    default_path: '/',
  },
  {
    menu: 'About',
    default_path: '/about/Why-Choose-Cara',
    sub_menu: [
      {
        menu: 'Why Choose Cara',
        path: '/about/Why-Choose-Cara',
      },
      {
        menu: 'Meet The Doctor',
        path: '/about/Meet-The-Doctor',
      },
      {
        menu: 'Locations',
        path: '/about/Locations',
      },
      {
        menu: 'Financing & Insurance',
        path: '/about/Financing-and-Insurance',
      },
      {
        menu: 'Promotions',
        path: '/about/Promotions',
      },
      {
        menu: 'Reviews',
        path: '/about/Reviews',
      },
      {
        menu: 'Notice of Open Payment Database',
        path: '/about/Notice-of-Open-Payment-Database',
      },
    ],
  },
  {
    menu: 'Breast',
    default_path: '/breast/Breast-Augmentation',
    sub_menu: [
      {
        menu: 'Breast Augmentation',
        path: '/breast/Breast-Augmentation',
      },
      {
        menu: 'Breast Lift',
        path: '/breast/Breast-Lift',
      },
      {
        menu: 'Breast Reduction',
        path: '/breast/Breast-Reduction',
      },
      {
        menu: 'Male Breast Reduction',
        path: '/breast/Male-Breast-Reduction',
      },
      {
        menu: 'Breast Implant Removal',
        path: '/breast/Breast-Implant-Removal',
      },
    ],
  },
  {
    menu: 'Body',
    default_path: '/body/Liposuction',
    sub_menu: [
      {
        menu: 'Liposuction',
        path: '/body/Liposuction',
      },
      {
        menu: 'Tummy Tuck',
        path: '/body/Tummy-Tuck',
      },
      {
        menu: 'Mommy Makeover',
        path: '/body/Mommy-Makeover',
      },
      {
        menu: 'Brazilian Butt Lift',
        path: '/body/Brazilian-Butt-Lift',
      },
    ],
  },
  {
    menu: 'Nose',
    default_path: '/nose/Rhinoplasty',
    sub_menu: [
      {
        menu: 'Rhinoplasty',
        path: '/nose/Rhinoplasty',
      },
      {
        menu: 'Asian Rhinoplasty',
        path: '/nose/Asian-Rhinoplasty',
      },
      {
        menu: 'Hispanic Rhinoplasty',
        path: '/nose/Hispanic-Rhinoplasty',
      },
      {
        menu: 'Revision Rhinoplasty',
        path: '/nose/Revision-Rhinoplasty',
      },
    ],
  },
  {
    menu: 'Face',
    default_path: '/face/Lower-Eyelid-Surgery',
    sub_menu: [
      {
        menu: 'Lower Eyelid Surgery',
        path: '/face/Lower-Eyelid-Surgery',
      },
      {
        menu: 'Face Lift',
        path: '/face/Face-Lift',
      },
      {
        menu: 'Brow Lift',
        path: '/face/Brow-Lift',
      },
      {
        menu: 'Fat Transfer',
        path: '/face/Fat-Transfer',
      },
      {
        menu: 'Chin Augmentation',
        path: '/face/Chin-Augmentation',
      },
      {
        menu: 'Buccal Fat Removal',
        path: '/face/Buccal-Fat-Removal',
      },
    ],
  },
  {
    menu: 'Medspa',
    default_path: '/medspa/Injectables',
    sub_menu: [
      {
        menu: 'Injectables',
        path: '/medspa/Injectables',
      },
      {
        menu: 'Skin Tightening',
        path: '/medspa/Skin-Tightening',
      },
      {
        menu: 'Skin Rejuvenation',
        path: '/medspa/Skin-Rejuvenation',
      },
      {
        menu: 'Skin Lightening',
        path: '/medspa/Skin-Lightening',
      },
      {
        menu: 'Body Contouring',
        path: '/medspa/Body-Contouring',
      },
      {
        menu: 'Laser Hair Removal',
        path: '/medspa/Laser-Hair-Removal',
      },
      {
        menu: 'Vitamin Therapy',
        path: '/medspa/Vitamin-Therapy',
      },
    ],
  },
  {
    menu: 'Before & After',
    default_path: '/Before&After',
    sub_menu: [
      {
        menu: 'Breast',
        path: '/Before&After/Breast',
      },
      {
        menu: 'Body',
        path: '/Before&After/Body',
      },
      {
        menu: 'Face',
        path: '/Before&After/Face',
      },
      {
        menu: 'Medspa',
        path: '/Before&After/Medspa',
      },
    ],
  },
  {
    menu: 'Contact',
    default_path: '/contact',
  },
];

function MainHeader({clickMenu, isOpen}) {
  const curPath = usePathname();
  return (
    <header
      className={`fixed w-full border-b border-[#d1bfb7] px-4 lg:px-8 bg-white
      }`}>
      <div className="max-lg:h-[80px] max-w-[1600px] flex items-center justify-between gap-2 mx-auto">
        <Link href={'/'} className="">
          <Image src={`/logo/logo_new.svg`} alt="" width={0} height={0} sizes="100" className="min-w-32 xl:min-w-40" />
        </Link>
        <nav className="h-[100px] max-lg:hidden">
          <ul className="flex items-center h-full max-w-[1150px] gap-4 xl:gap-8 text-nowrap">
            {menus.map((menu, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    curPath.includes(menu.menu.toLowerCase()) | (curPath === '/' && menu.menu === 'Home') && 'on'
                  }`}>
                  <Link href={menu.default_path} className={`font-trajan font-bold 2xl:text-lg pb-2 `}>
                    {menu.menu}
                  </Link>
                  <ul className="flex flex-col depth_2">
                    {menu.sub_menu?.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.path}
                        className={`font-trajan font-bold  border-b-2 ${sub.path === curPath && 'on'}`}>
                        {sub.menu}
                      </Link>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="text-[#2b2928] max-lg:hidden ">
          <div className={`flex gap-2 text-black py-[17px] px-[19px] bg-[#EAE9E5] rounded-[30px]`}>
            <Image src={'/icons/call.svg'} alt="" sizes="100" width={0} height={0} className="w-4" />
            <Link href={'/contact'} className="leading-4 font-medium text-nowrap">
              855-212-9901
            </Link>
          </div>
        </div>
        <button onClick={clickMenu} className="flex items-end gap-4 py-4 text-lg font-trajan lg:hidden">
          Menu
          <div className={`flex flex-col w-fit ${isOpen ? 'gap-[14px]' : 'gap-[6px]'} p-1`}>
            <div
              className={`w-[24px] min-h-[2px] bg-black rounded-sm transition-all duration-300 ${
                isOpen && 'rotate-45 origin-top-left'
              }`}
            />
            <div
              className={`w-[24px] min-h-[2px] bg-black rounded-sm transition-color ${isOpen && 'opacity-0 hidden'}`}
            />
            <div
              className={`w-[24px] min-h-[2px] bg-black rounded-sm transition-all duration-300 ${
                isOpen && '-rotate-45 origin-bottom-left'
              }`}
            />
          </div>
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
