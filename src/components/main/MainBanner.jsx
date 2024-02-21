'use client';
import React, {useEffect, useRef, useState} from 'react';

function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [0, 1, 2, 0];
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = 4000;
    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        let newSlide = prev + 1;
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 0.5s ease-in-out';
          slideRef.current.style.transform = `translateX(-${newSlide * (100 / images.length)}%)`;
          if (newSlide > images.length - 1) {
            slideRef.current.style.transition = '';
            slideRef.current.style.transform = `translateX(-0px)`;
            newSlide = 0;
          }
        }
        return newSlide;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden -z-10">
      <div ref={slideRef} className="absolute top-0 left-0 flex">
        {images.map((index, i) => (
          <div key={i} className={`w-screen h-screen flex justify-center items-center bg-slate-300 `}>
            <h1 className="text-3xl font-semibold">{`${index + 1}번째 슬라이드`}</h1>
          </div>
        ))}
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
