import React, {useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {menus} from './MainHeader';
import {snsIcons} from '../footer/CoreFooter';

function MenuList({menu, clickMenu}) {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);
  const {sub_menu} = menu;
  return (
    <li className="w-full">
      <div className="flex justify-between w-full">
        <div onClick={clickMenu}>
          <Link href={menu.default_path} className="font-trajan text-lg">
            {menu.menu}
          </Link>
        </div>
        {sub_menu && <button onClick={() => setIsOpenSubmenu(prev => !prev)}>{isOpenSubmenu ? '▲' : '▼'}</button>}
      </div>
      {isOpenSubmenu && (
        <ul className="my-2">
          {sub_menu.map((sub, i) => (
            <li key={i} className="my-2">
              <div onClick={clickMenu}>
                <Link href={sub.path} className="text-lg px-4">
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

function MoblieHeader({clickMenu}) {
  return (
    <div className="bg-[#e5e5e5] w-screen md:w-[600px] h-screen pt-[95px] lg:pt-[142px] ml-auto">
      <ul className="p-10 flex flex-col items-start gap-6 xl:gap-8">
        {menus.map((menu, i) => {
          return <MenuList key={i} menu={menu} clickMenu={clickMenu} />;
        })}
      </ul>
      <div className="flex gap-5 mb-10 text-nowrap mx-auto w-fit mt-10">
        {snsIcons.map(icon => {
          return (
            <div key={icon} className="relative w-6 h-6">
              <Image src={`/icons/sns/${icon}.svg`} fill alt={`${icon}icon`} />
            </div>
          );
        })}
      </div>
      <div className="text-[#2b2928] mt-10">
        <div className={`flex gap-2 text-black py-[17px] px-[19px] bg-white w-fit mx-auto rounded-[30px]`}>
          <Image src={'/icons/call.svg'} alt="" sizes="100" width={0} height={0} className="w-4" />
          <p className="text-[16px] leading-4 font-medium text-nowrap">855-212-9901</p>
        </div>
      </div>
    </div>
  );
}

export default MoblieHeader;