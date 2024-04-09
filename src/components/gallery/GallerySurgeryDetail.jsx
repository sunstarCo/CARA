import React from 'react';

import GalleryDetailIntro from './GalleryDetailIntro';
import GalleryDetailMain from './GalleryDetailMain';

export default function GallerySurgeryDetail({surgery}) {
  return (
    <div className="max-w-[98rem] mx-auto">
      <GalleryDetailIntro title={surgery} />
      <GalleryDetailMain title={surgery} />
    </div>
  );
}
