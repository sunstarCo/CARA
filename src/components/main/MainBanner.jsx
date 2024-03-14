'use client';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';

function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ['/banner/main/HeroBanner01.png', '', '', '/banner/main/HeroBanner01.png'];
  const slideRef = useRef(null);

  useEffect(() => {
    //   const interval = 4000;
    //   const timer = setInterval(() => {
    //     setCurrentSlide(prev => {
    //       let newSlide = prev + 1;
    //       if (slideRef.current) {
    //         slideRef.current.style.transition = 'all 0.7s ease-in-out';
    //         slideRef.current.style.transform = `translateX(-${newSlide * (100 / images.length)}%)`;
    //         if (newSlide > images.length - 1) {
    //           slideRef.current.style.transition = '';
    //           slideRef.current.style.transform = `translateX(-0px)`;
    //           newSlide = 0;
    //         }
    //       }
    //       return newSlide;
    //     });
    //   }, interval);
    //   return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-44px)] mt-[44px] overflow-hidden -z-10">
      <div ref={slideRef} className="absolute top-0 left-0 flex">
        {images.map((img, i) => {
          if (img !== '') {
            return (
              <div key={i} className={`w-screen h-[calc(100vh-44px)] relative flex justify-center items-center`}>
                <Image src={img} alt="" fill sizes="100" className="object-cover" />
              </div>
            );
          }
          return (
            <div key={i} className={`w-screen h-screen flex justify-center items-center bg-slate-300 `}>
              <h1 className="text-3xl font-semibold">{`${i + 1}번째 슬라이드`}</h1>
            </div>
          );
        })}
      </div>
      <div className="absolute flex justify-center w-full gap-2 mx-auto bottom-10">
        {[0, 1, 2].map(index => (
          <div key={index} className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-slate-400'}`} />
        ))}
      </div>
    </div>
  );
}

export default MainBanner;
