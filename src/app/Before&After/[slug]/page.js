import React from 'react';

import NotFoundPage from '@/components/common/NotFoundPage';
import GallerySection from '@/components/gallery/GallerySection';
import GallerySurgeryDetail from '@/components/gallery/GallerySurgeryDetail';
export default function Page({params: {slug}}) {
  let sort;

  if (surgerys.includes(slug.replaceAll('-', ' '))) {
    return <GallerySurgeryDetail surgery={slug.replaceAll('-', ' ')} />;
  }
  switch (slug) {
    case 'Breast':
      sort = 'Breast';
      break;
    case 'Body':
      sort = 'Body';
      break;
    case 'Face':
      sort = 'Face';
      break;
    case 'Medspa':
      sort = 'Medspa';
      break;
    default:
      return <NotFoundPage />;
  }

  return <GallerySection sort={sort} />;
}

const surgerys = [
  'Asian Breast Augmentation',
  'Breast Augmentation',
  'Breast Lift',
  'Liposuction',
  'Tummy Tuck',
  'Brazilian Butt Lift',
  'Rhinoplasty',
  'Chin Augmentation',
  'Face Lift',
  'Lower Blepharoplasty',
  'Filler',
  'Laser Resurfacing',
  'Thread Lift',
];
