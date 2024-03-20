import React from 'react';

import CoreFooter from './CoreFooter';
import LocationFooter from './LocationFooter';
import NavFooter from './NavFooter';

function Footer() {
  return (
    <div className="flex flex-col w-full">
      <LocationFooter />
      <NavFooter />
      <CoreFooter />
    </div>
  );
}

export default Footer;
