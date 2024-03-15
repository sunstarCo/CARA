import React from 'react';

import Image from 'next/image';

const reviews = [
  {
    name: 'Jessica L',
    comment:
      'I went somewhere else for my varicose vein consult first and did not feel comfortable with that particular office. A friend of mine told me about Dr. Buscaglia and his staff and how satisfied they were with the care they received.',
  },
  {
    name: 'Jessica L',
    comment:
      'I went somewhere else for my varicose vein consult first and did not feel comfortable with that particular office. A friend of mine told me about Dr. Buscaglia and his staff and how satisfied they were with the care they received.',
  },
];

function SingleReview({number = 0}) {
  const {name, comment} = reviews[number];
  return (
    <div className="bg-[#EAE9E5] flex flex-col items-center py-24 text-2xl ">
      <Image src={'/logo/quote.svg'} alt="quote icon" width={0} height={0} sizes="100" className="w-fit" />
      <p className="w-[70%] my-5 leading-loose tracking-[1px] text-center">{comment}</p>
      <div className="flex gap-2">
        <p className="font-bold leading-loose tracking-wide">{name}</p>
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
    </div>
  );
}

export default SingleReview;
