'use client';
import React, {Fragment, useState} from 'react';

import Image from 'next/image';

const review_data = [
  {
    name: 'Belli Smith',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/14/2024',
  },
  {
    name: 'Kim berly K',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content. Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content. Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/15/2024',
  },
  {
    name: 'Jenny Smith',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/16/2024',
  },
  {
    name: 'berly Smith1',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/17/2024',
  },
  {
    name: 'berly Smith2',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/18/2024',
  },
  {
    name: 'berly Smith3',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/19/2024',
  },
  {
    name: 'berly Smith4',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/20/2024',
  },
  {
    name: 'berly Smith5',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/21/2024',
  },
  {
    name: 'berly Smith6',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/22/2024',
  },
  {
    name: 'berly Smith7',
    comment:
      'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
    date: '3/23/2024',
  },
];

function Reviews() {
  const [curPage, setCurPage] = useState(1);
  const pageSize = 4;
  const [reviews, setReviews] = useState(review_data.slice(0, pageSize));

  const clickNext = () => {
    if (curPage === Math.ceil(review_data.length / pageSize)) {
      return;
    }
    setReviews(review_data.slice(curPage * pageSize, (curPage + 1) * pageSize));
    setCurPage(curPage + 1);
  };

  const clickPrev = () => {
    if (curPage === 1) {
      return;
    }
    setReviews(review_data.slice((curPage - 2) * pageSize, (curPage - 1) * pageSize));
    setCurPage(curPage - 1);
  };

  return (
    <div className="px-8 max-w-[1520px] w-full">
      {reviews.map((review, index) => (
        <Fragment key={index}>
          <ReviewCard review={review} />
          {index !== reviews.length - 1 && <hr className="my-10" />}
        </Fragment>
      ))}
      <div className="flex justify-between mt-24 font-trajan text-2xl">
        <button disabled={curPage === 1} onClick={clickPrev} className="flex items-center gap-5 ">
          <Image src="/icons/prev.svg" width={32} height={32} alt="arrow left" />
          Previous
        </button>
        <button
          disabled={curPage === Math.ceil(review_data.length / pageSize)}
          onClick={clickNext}
          className="flex items-center gap-5 ">
          Next
          <Image src="/icons/next.svg" width={32} height={32} alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

function ReviewCard({review}) {
  return (
    <div>
      <p className="text-xl leading-loose">{review.comment}</p>
      <div className="text-xl flex justify-between mt-5 leading-loose font-semibold">
        <div className="flex gap-2">
          <Image src="/icons/comment.svg" width={36} height={'36'} alt="speech bubble" className="object-cover " />
          <p>{review.name}</p>
        </div>
        <p className="text-[#9D9892]">{review.date}</p>
      </div>
    </div>
  );
}

export default Reviews;
