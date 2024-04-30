import React from 'react';

import Spinner from '@/components/loading/Spinner';

export default function Loading() {
  return (
    <div className="text-48px h-screen w-screen absolute flex justify-center items-center bg-white z-[9999] top-0 left-0">
      <Spinner />
    </div>
  );
}
