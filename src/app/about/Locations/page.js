import React from 'react';

import AboutSecondBanner from '@/components/about/AboutSecondBanner';
import LocationDivideBanner from '@/components/about/locations/LocationDivideBanner';
import LocationSection from '@/components/about/locations/LocationSection';
import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Page() {
  return (
    <div>
      <CommonTopBanner
        url="About"
        title="Discover/Our Locations"
        contents="At Cara Plastic Surgery & Laser Center, we strive to bring out the best in you, offering exceptional cosmetic and reconstructive services across multiple locations in California and Nevada. With state-of-the-art facilities and a team of skilled professionals, we are dedicated to helping you achieve your aesthetic goals. Explore our four convenient locations:"
      />
      <AboutSecondBanner
        mainDesc="Welcome to/Cara Plastic Surgery & Laser Center"
        subDesc="Your Premier Destination for Aesthetic Enhancements!"
      />
      <LocationSection />
      <LocationDivideBanner />
      <AboutSecondBanner
        mainDesc="Embark on your aesthetic journey/
with confidence at Cara Plastic Surgery & Laser Center./Schedule a consultation today and let us help/you reveal the best version of yourself."
      />
    </div>
  );
}
