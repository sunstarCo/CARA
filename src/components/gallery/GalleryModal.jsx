'use client';
import React, {useState} from 'react';

import Image from 'next/image';

export default function GalleryModal({imageUrl, onClose}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      onClose(); //
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}>
      <div className={`relative w-full max-w-3xl mx-4 ${!isLoaded && 'hidden'}`}>
        <button
          className="absolute flex items-center justify-center w-8 h-8 text-4xl text-white bg-black rounded-full top-1 right-1"
          onClick={onClose}>
          <span>&times;</span>
        </button>
        <div className="p-4 bg-white">
          <Image
            src={imageUrl}
            priority
            alt="before&after Image"
            onLoad={() => setIsLoaded(true)}
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
