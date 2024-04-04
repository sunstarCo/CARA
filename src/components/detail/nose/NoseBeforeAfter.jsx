import React from 'react';

import BeforeAfter from '../common/BeforeAfter';

function NoseBeforeAfter() {
  const images_data = [...Array(52)].map((_, i) => '/B&A/rhinoplasty/nose_' + (i + 1) + '.jpg');

  return <BeforeAfter images_data={images_data} />;
}

export default NoseBeforeAfter;
