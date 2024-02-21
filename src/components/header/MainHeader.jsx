'use client';
import React, {useEffect, useState} from 'react';

import '../header/header.css';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const menus = [
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
    menu: 'Gallery',
    default_path: '/gallery/Breast',
    sub_menu: [
      {
        menu: 'Breast',
        path: '/gallery/Breast',
      },
      {
        menu: 'Body',
        path: '/gallery/Body',
      },
      {
        menu: 'Face',
        path: '/gallery/Face',
      },
      {
        menu: 'Medspa',
        path: '/gallery/Medspa',
      },
    ],
  },
  {
    menu: 'Contact',
    default_path: '/contact',
  },
];

function MainHeader() {
  const curPath = usePathname();
  const [position, setPosition] = useState(curPath === '/' ? 0 : 100);

  useEffect(() => {
    function onScroll() {
      if (curPath === '/') setPosition(window.scrollY);
    }
    if (curPath === '/') {
      window.addEventListener('scroll', onScroll);
      setPosition(0);
    }
    return () => {
      if (curPath === '/') {
        window.removeEventListener('scroll', onScroll);
      }
      setPosition(100);
    };
  }, [curPath]);
  return (
    <header
      className={`flex items-center justify-between w-full border-b-2 h-36 md:px-14 transition-colors duration-500 ${
        position > 70 && 'bg-white border-none'
      }`}>
      <Link href={'/'} className="">
        <Image src={'/logo/logo(black).svg'} alt="" width={0} height={0} sizes="100" className="w-28 md:w-fit" />
      </Link>
      <nav className="h-[144px]">
        <ul className="flex items-end h-full gap-12">
          {menus.map((menu, i) => {
            return (
              <li key={i}>
                <Link
                  href={menu.default_path}
                  className={`font-dm_serif_display ${
                    curPath.includes(menu.menu.toLowerCase()) | (curPath === '/' && menu.menu === 'Home') && 'underline'
                  }`}>
                  {menu.menu}
                </Link>
                <ul className="depth_2">
                  {menu.sub_menu?.map((sub, i) => (
                    <li key={i}>
                      <Link href={sub.path} className="font-playfair_display">
                        {sub.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex gap-2 text-white py-[17px] px-[21px] bg-[#bdab9d] rounded-[30px]">
        <Image src={'/icons/call.svg'} alt="" sizes="100" width={0} height={0} className="w-fit" />
        <p className="text-[13px] font-medium">855-212-9901</p>
      </div>
    </header>
  );
}

export default MainHeader;
