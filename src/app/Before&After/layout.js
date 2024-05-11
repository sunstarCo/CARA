import React from 'react';

import GalleryTopBannerImg from '../../../public/banner/gallery/GalleryTopBannerImg.jpg';

import CommonTopBanner from '@/components/common/banner/CommonTopBanner';

export default function Layout({children}) {
  return (
    <>
      <CommonTopBanner
        url="Before & after"
        title="before & after"
        subtitle=""
        img={GalleryTopBannerImg}
        contents="Say goodbye tostubborn pockets of fat that resist diet and exercise. Liposuction at CaraPlastic Surgery & Laser Center Las Vegas is a minimally invasive procedure thatprecisely targets and removes excess fat, revealing a more contoured andrefined figure. Whether you're looking to trim your waistline or sculpt yourthighs, our skilled surgeons can customize liposuction to meet your uniquegoals."
      />
      {children}
    </>
  );
}
