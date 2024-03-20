import React from 'react';

import Link from 'next/link';

function NavFooter() {
  return (
    <>
      <div className="justify-center hidden xl:flex font-bold py-9 gap-[7.5rem] bg-main-beige">
        {menus.map(menu => {
          return (
            <Link key={menu.link} href={menu.link}>
              {menu.title}
            </Link>
          );
        })}
      </div>
    </>
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
