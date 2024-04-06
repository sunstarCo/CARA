'use client';
import React, {useState} from 'react';

import MainHeader from './MainHeader';
import MoblieHeader from './MoblieHeader';
import TopHeader from './TopHeader';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const clickMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="fixed w-full z-50">
      <TopHeader />
      <MainHeader clickMenu={clickMenu} isOpen={isOpen} />
      {isOpen && <MoblieHeader clickMenu={clickMenu} />}
    </div>
  );
}

export default Header;
