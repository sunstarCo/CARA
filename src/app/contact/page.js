import React from 'react';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';
import ContactConsultation from '@/components/contact/ContactConsultation';
import LocationMapBottom from '@/components/contact/LocationMapBottom';
import LocationMapTop from '@/components/contact/LocationMapTop';

export default function Page() {
  return (
    <>
      <CommonTopBanner
        url="contact"
        title="contact us"
        contents="Say goodbye tostubborn pockets of fat that resist diet and exercise. Liposuction at CaraPlastic Surgery & Laser Center Las Vegas is a minimally invasive procedure thatprecisely targets and removes excess fat, revealing a more contoured andrefined figure. Whether you're looking to trim your waistline or sculpt yourthighs, our skilled surgeons can customize liposuction to meet your uniquegoals."
      />
      <ContactConsultation />
      <LocationMapTop />
      <LocationMapBottom />
    </>
  );
}
