'use client';
import React, {useEffect, useState} from 'react';

import Image from 'next/image';

const reviews = [
  {
    name: 'Belli Smith1',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
  },
  {
    name: 'Belli Smith2',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
  },
  {
    name: 'Belli Smith3',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
  },
  {
    name: 'Belli Smith4',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
  },
];

function PatientReview() {
  const [curSlide, setCurSlide] = useState(0);
  const [numOfSlides, setNumOfSlides] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setNumOfSlides(window.innerWidth > 1300 ? 2 : 1);
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const clickNextSlide = () => {
    if (curSlide + numOfSlides >= reviews.length) {
      setCurSlide(0);
      return;
    }
    setCurSlide(prev => prev + numOfSlides);
  };

  const clickPrevSlide = () => {
    if (curSlide === 0) {
      setCurSlide(reviews.length - numOfSlides);
      return;
    }
    setCurSlide(prev => prev - numOfSlides);
  };

  return (
    <div className="pt-40 pb-[12.5rem] flex flex-col items-center px-6">
      <div className="text-[2.5rem] sm:text-54px leading-normal font-trajan">Real Patient Review</div>
      <div className="flex flex-col sm:flex-row justify-center w-full items-center gap-12 mt-[6.25rem] px-4">
        <button onClick={clickPrevSlide}>
          <Image
            src={'/icons/prev.svg'}
            alt="arrow left"
            width={0}
            height={0}
            sizes="100"
            className="min-w-10 min-h-10 bg-[#D9D5CC] flex items-center justify-center max-sm:hidden"
          />
        </button>
        <div className="flex">
          <div className={`card flex gap-[1.875rem] w-full xl:w-1/2`}>
            <div className="max-sm:min-w-[20vw] sm:w-60 max-sm:max-h-[15rem]">
              <Image
                src={reviews[curSlide].image || '/reviews/user_profile_default.png'}
                alt="patient"
                width={0}
                height={0}
                sizes="100"
                className="w-full object-cover"
              />
            </div>
            <div className="max-w-[20rem]">
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl font-bold font-trajan">{reviews[curSlide].name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={'/icons/star.svg'}
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
                  className="w-14 sm:w-fit"
                />
              </div>
              <p className="mt-[1.875rem] leading-loose text-xl ">{reviews[curSlide].comment}</p>
            </div>
          </div>
          <div className={`card flex gap-[1.875rem] w-1/2 ml-[3.125rem] max-xl:hidden`}>
            <div className="w-60 h-[17.5rem]">
              <Image
                src={reviews[curSlide + 1]?.image || reviews[0]?.image || '/reviews/user_profile_default.png'}
                alt="patient"
                width={0}
                height={0}
                sizes="100"
                className="w-full object-cover"
              />
            </div>
            <div className="max-w-[20rem]">
              <div className="flex justify-between">
                <div>
                  <p className="text-3xl font-bold font-trajan">{reviews[curSlide + 1]?.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Image
                        key={index}
                        src={'/icons/star.svg'}
                        alt="star icon"
                        width={0}
                        height={0}
                        sizes="100"
                        className="w-fit"
                      />
                    ))}
                  </div>
                </div>
                <Image src={'/logo/quote.svg'} alt="quote icon" width={0} height={0} sizes="100" className="w-fit" />
              </div>
              <p className="mt-[1.875rem] leading-loose text-xl">{reviews[curSlide + 1]?.comment}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <button onClick={clickPrevSlide}>
            <Image
              src={'/icons/prev.svg'}
              alt="arrow left"
              width={0}
              height={0}
              sizes="100"
              className="min-w-10 min-h-10 bg-[#D9D5CC] flex items-center justify-center sm:hidden"
            />
          </button>
          <button onClick={clickNextSlide}>
            <Image
              src={'/icons/next.svg'}
              alt="arrow right"
              width={0}
              height={0}
              sizes="100"
              className="min-w-10 min-h-10 bg-[#D9D5CC] flex items-center justify-center"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientReview;
