import React from 'react';

import Link from 'next/link';

function NavFooter() {
  return (
    <div className=" bg-main-beige">
      <div className="justify-between hidden px-8 font-bold md:flex py-9 max-w-[100rem] mx-auto font-trajan">
        {menus.map(menu => {
          return (
            <Link
              key={menu.link}
              href={menu.link}
              className="hover:border-black border-b-2 pb-1 transition-colors duration-300">
              {menu.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
const menus = [
  {title: 'HOME', link: '/'},
  {title: 'ABOUT', link: '/about/Why-Choose-Cara'},
  {title: 'BREAST', link: '/breast/Breast-Augmentation'},
  {title: 'BODY', link: '/body/Liposuction'},
  {title: 'NOSE', link: '/nose/Rhinoplasty'},
  {title: 'FACE', link: '/face/Lower-Eyelid-Surgery'},
  {title: 'MEDSPA', link: '/medspa/Injectables'},
  {title: 'BEFORE & AFTER', link: '/Before&After'},
  {title: 'CONTACT', link: '/contact'},
];

export default NavFooter;
