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
          <Link href={menu.default_path} className="text-lg font-trajan">
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
                <Link href={sub.path} className="px-4 text-lg">
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
      <ul className="flex flex-col items-start gap-6 p-10 xl:gap-8">
        {menus.map((menu, i) => {
          return <MenuList key={i} menu={menu} clickMenu={clickMenu} />;
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

export default MoblieHeader;
