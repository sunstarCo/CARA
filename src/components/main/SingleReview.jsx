'use client';
import React from 'react';

import Image from 'next/image';

import {useObserver} from '@/hooks/useObserver';

const reviews = [
  {
    name: 'Jessica L',
    comment:
      'I went somewhere else for my varicose vein consult first and did not feel comfortable with that particular office. A friend of mine told me about Dr. Buscaglia and his staff and how satisfied they were with the care they received.',
  },
  {
    name: 'Sandra S',
    comment: `I recently had an outstanding Mommy Makeover experience at Cara Plastic Surgery, where Dr. David Kahng's expertise, personalized care, and the supportive staff resulted in transformative results that have boosted both my physical appearance and confidence, earning them a well-deserved five-star rating.`,
  },
];

function SingleReview({number = 0}) {
  const {name, comment} = reviews[number];
  const {domRef, isVisible} = useObserver();
  return (
    <div className="bg-[#EAE9E5] py-24 text-2xl px-8">
      <div
        className={`flex flex-col items-center opacity-0 transition-all ${isVisible && 'animate-show_move_top'}`}
        ref={domRef}>
        <Image src={'/logo/quote.svg'} alt="quote icon" width={0} height={0} sizes="100" className="w-fit" />
        <p className="max-w-[1244px] my-5 leading-loose tracking-[0.5px] text-center text-22px font-light">{comment}</p>
        <div className="flex gap-2">
          <p className="font-bold leading-loose tracking-[0.5px]">{name}</p>
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
      </div>
    </div>
  );
}

export default SingleReview;
