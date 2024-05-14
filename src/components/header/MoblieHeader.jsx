import React, {useEffect, useMemo, useRef, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

import {menus} from './MainHeader';
import {snsIcons} from '../footer/CoreFooter';

import {useLockBodyScroll} from '@/hooks';

function MenuList({menu, clickMenu, curPath}) {
  const {sub_menu, menu: menu_title} = menu;
  const isIncludMenu = useMemo(() => curPath.includes(menu_title.toLowerCase()), [curPath, menu_title]);
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(isIncludMenu);
  return (
    <li className="w-full">
      <div className="flex justify-between w-full">
        <div onClick={clickMenu}>
          <Link
            href={menu.default_path}
            className={`text-lg font-trajan ${
              isIncludMenu | (curPath === '/' && menu_title === 'Home') && 'font-bold'
            }`}>
            {menu.menu}
          </Link>
        </div>
        {sub_menu && (
          <button className="flex-1 text-end" onClick={() => setIsOpenSubmenu(prev => !prev)}>
            {isOpenSubmenu ? '▲' : '▼'}
          </button>
        )}
      </div>
      {isOpenSubmenu && (
        <ul className="flex flex-col gap-3 my-2">
          {sub_menu?.map((sub, i) => (
            <li key={i} className="w-full">
              <div onClick={clickMenu}>
                <Link
                  href={sub.path}
                  className={`block w-full pl-4 text-lg text-start ${sub.path === curPath && 'font-bold'}`}>
                  {sub.menu}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MoblieHeader({clickMenu}) {
  const {lockScroll, unlockScroll} = useLockBodyScroll();
  const menu = useRef(null);
  const curPath = usePathname();

  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
  }, []);

  return (
    <div
      ref={menu}
      className="bg-[#e5e5e5] w-screen md:w-[600px] h-screen py-[95px] lg:py-[142px] ml-auto overflow-y-scroll lg:hidden">
      <ul className="flex flex-col items-start gap-6 p-10 xl:gap-8">
        {menus.map((menu, i) => {
          return <MenuList key={i} menu={menu} clickMenu={clickMenu} curPath={curPath} />;
        })}
      </ul>
      <div className="flex gap-5 mx-auto mt-10 mb-10 text-nowrap w-fit">
        {snsIcons.map(icon => {
          return (
            <a href={icon.link} target="_blank" key={icon.sns} className="relative w-6 h-6">
              <Image src={`/icons/sns/${icon.sns}.svg`} fill alt={`${icon.sns}icon`} />
            </a>
          );
        })}
      </div>
      <div className="text-[#2b2928] mt-10">
        <div className={`flex gap-2 text-black py-[17px] px-[19px] bg-white w-fit mx-auto rounded-[30px]`}>
          <Image src={'/icons/call.svg'} alt="" sizes="100" width={0} height={0} className="w-4" />
          <a href="tel:855-212-9901" className="text-[16px] leading-4 font-medium text-nowrap">
            855-212-9901
          </a>
        </div>
      </div>
    </div>
  );
}
