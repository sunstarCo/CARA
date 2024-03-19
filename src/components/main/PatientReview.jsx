'use client';
import React, {useEffect, useRef, useState} from 'react';

import Image from 'next/image';

const reviews = [
  {
    name: 'Belli Smith1',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    image: '/reviews/patient1.png',
  },
  {
    name: 'Belli Smith2',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    image: '/reviews/patient2.png',
  },
  {
    name: 'Belli Smith3',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    image: '/reviews/patient1.png',
  },
  {
    name: 'Belli Smith4',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    image: '/reviews/patient2.png',
  },
];

function PatientReview() {
  const slides = [reviews[reviews.length - 2], reviews[reviews.length - 1], ...reviews, reviews[0], reviews[1]];
  const [curSlide, setCurSlide] = useState(2);
  const slideRef = useRef(null);

  const isThrottled = useRef(false);

  const throttleClick = func => {
    if (!isThrottled.current) {
      isThrottled.current = true;
      func();
      setTimeout(() => {
        isThrottled.current = false;
      }, 500);
    }
  };

  const clickNextSlide = () => {
    throttleClick(() => {
      setCurSlide(prev => prev + 2);
    });
  };

  const clickPrevSlide = () => {
    throttleClick(() => {
      setCurSlide(prev => prev - 2);
    });
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${curSlide * 50}%)`;
    slideRef.current.style.transition = 'all 0.5s ease';
    if (curSlide <= 1) {
      setTimeout(() => {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(-${reviews.length * 50}%)`;
        setCurSlide(reviews.length);
      }, 550);
    } else if (curSlide >= slides.length - 2) {
      setTimeout(() => {
        slideRef.current.style.transition = 'none';
        slideRef.current.style.transform = `translateX(-100%)`;
        setCurSlide(2);
      }, 550);
    }
  }, [curSlide]);

  return (
    <div className="pt-40 pb-[12.5rem] flex flex-col items-center">
      <div className="uppercase text-[3.125rem] leading-normal">Real Patient Review</div>
      <div className="flex items-center gap-16 mt-[6.25rem]">
        <button
          onClick={clickPrevSlide}
          className="w-10 h-10 bg-[#D9D5CC] flex items-center justify-center rounded-full">
          <Image src={'/logo/prev.svg'} alt="arrow left" width={0} height={0} sizes="100" className="w-fit" />
        </button>
        <div className="container w-[80rem] overflow-hidden">
          <div className="flex" ref={slideRef}>
            {slides.map((review, index) => (
              <div
                className={`card flex gap-[1.875rem] w-[36.875rem] ${index % 2 === 1 && 'ml-[6.25rem]'}`}
                key={index}>
                <div className="w-60 h-[17.5rem]">
                  <Image
                    src={review.image}
                    alt="patient"
                    width={0}
                    height={0}
                    sizes="100"
                    className="w-full object-cover"
                  />
                </div>
                <div className="w-[20rem]">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-3xl font-bold">{review.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Image
                            key={index}
                            src={'/logo/star.svg'}
                            alt="star icon"
                            width={0}
                            height={0}
                            sizes="100"
                            className="w-fit"
                          />
                        ))}
                      </div>
                    </div>
                    <Image
                      src={'/logo/quote.svg'}
                      alt="quote icon"
                      width={0}
                      height={0}
                      sizes="100"
                      className="w-fit"
                    />
                  </div>
                  <p className="mt-[1.875rem] leading-loose text-xl">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={clickNextSlide}
          className="w-10 h-10 bg-[#D9D5CC] flex items-center justify-center rounded-full">
          <Image src={'/logo/next.svg'} alt="arrow right" width={0} height={0} sizes="100" className="w-fit" />
        </button>
      </div>
    </div>
  );
}

export default PatientReview;
