import React from 'react';

import MainHeader from './MainHeader';
import TopHeader from './TopHeader';

function Header() {
  return (
    <div className="fixed w-full">
      <TopHeader />
      <MainHeader />
    </div>
  );
}

export default Header;
