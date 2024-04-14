import React from 'react';

import Image from 'next/image';

export default function GalleryModal({imageUrl, onClose}) {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      onClose(); //
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}>
      <div className="relative w-full max-w-3xl mx-4">
        <button
          className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 text-4xl text-white bg-black rounded-full"
          onClick={onClose}>
          <span>&times;</span>
        </button>
        <div className="p-4 bg-white">
          <Image src={imageUrl} alt="Large Image" width={800} height={600} />
        </div>
      </div>
    </div>
  );
}
