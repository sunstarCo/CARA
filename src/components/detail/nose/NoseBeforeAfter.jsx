import React from 'react';

import BeforeAfter from '../common/BeforeAfter';

function NoseBeforeAfter() {
  const img_count = 52;
  const img_name = 'rhinoplasty';
  const images_data = [...Array(img_count)].map((_, i) => `/banner/gallery/${img_name}/${i + 1}.jpg`);

  return <BeforeAfter images_data={images_data} />;
}

export default NoseBeforeAfter;
