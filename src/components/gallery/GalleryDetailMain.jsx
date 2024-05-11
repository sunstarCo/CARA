'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

import GalleryDetailPN from './GalleryDetailPN';
import prevIcon from '../../../public/icons/prevBtn.svg';

export default function GalleryDetailMain({title}) {
  const router = useRouter();
  const surgery = surgeryInfo.find(item => item.surgery == title);
  const target = surgery.sort;
  const menus = surgeryInfo.filter(item => {
    return item.sort == target && item.surgery != title;
  });

  const handleSelectChange = event => {
    const selectedSurgery = event.target.value;
    if (selectedSurgery == title) return;
    router.push(`/Before&After/${selectedSurgery.replaceAll(' ', '-')}`);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between max-[360px]:justify-center w-full px-5">
        <select
          onChange={handleSelectChange}
          name="surgery"
          id="surgery"
          className="px-3 contact_input half bg-[#D9D5CC]">
          <option defaultValue={title} className="bg-white">
            {title}
          </option>
          {menus.map(item => {
            return (
              <option value={item.surgery} className="bg-white" key={item.surgery}>
                {item.surgery}
              </option>
            );
          })}
        </select>
        <Link href={'/Before&After'} className="flex items-center gap-2 max-[360px]:hidden">
          <Image alt="prevIcon" src={prevIcon} width={20} height={17}></Image>
          <span className="sm:text-base text-center">Back to Gallery</span>
        </Link>
      </div>
      <GalleryDetailPN surgeryInfo={surgery} />
    </div>
  );
}

const surgeryInfo = [
  {sort: 'breast', surgery: 'Asian Breast Augmentation', quantity: 16},
  {sort: 'breast', surgery: 'Breast Augmentation', quantity: 9},
  {sort: 'breast', surgery: 'Breast Lift', quantity: 10},
  {sort: 'body', surgery: 'Liposuction', quantity: 0},
  {sort: 'body', surgery: 'Tummy Tuck', quantity: 6},
  {sort: 'body', surgery: 'Brazilian Butt Lift', quantity: 9},
  {sort: 'face', surgery: 'Rhinoplasty', quantity: 52},
  {sort: 'face', surgery: 'Chin Augmentation', quantity: 0},
  {sort: 'face', surgery: 'Face Lift', quantity: 0},
  {sort: 'face', surgery: 'Lower Blepharoplasty', quantity: 0},
  {sort: 'medspa', surgery: 'Filler', quantity: 0},
  {sort: 'medspa', surgery: 'Laser Resurfacing', quantity: 0},
  {sort: 'medspa', surgery: 'Thread Lift', quantity: 0},
];

// 'use client';
// import React, {Fragment, useState} from 'react';

// import Image from 'next/image';

// const review_data = [
//   {
//     name: 'Belli Smith',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/14/2024',
//   },
//   {
//     name: 'Kim berly K',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/15/2024',
//   },
//   {
//     name: 'Jenny Smith',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/16/2024',
//   },
//   {
//     name: 'berly Smith1',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/17/2024',
//   },
//   {
//     name: 'berly Smith2',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/18/2024',
//   },
//   {
//     name: 'berly Smith3',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/19/2024',
//   },
//   {
//     name: 'berly Smith4',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/20/2024',
//   },
//   {
//     name: 'berly Smith5',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/21/2024',
//   },
//   {
//     name: 'berly Smith6',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/22/2024',
//   },
//   {
//     name: 'berly Smith7',
//     comment:
//       'Centuries but also the leap into electronic typesetting,established fact that a reader will bdistracted the readable content.',
//     date: '3/23/2024',
//   },
// ];

// function Reviews() {
//   const [curPage, setCurPage] = useState(1);
//   const pageSize = 4;
//   const [reviews, setReviews] = useState(review_data.slice(0, pageSize));

// return (
//   <div className="px-8 max-w-[90rem] w-full">
//     {reviews.map((review, index) => (
//       <Fragment key={index}>
//         <ReviewCard review={review} />
//         {index !== reviews.length - 1 && <hr className="my-10" />}
//       </Fragment>
//     ))}
//     <div className="flex justify-between mt-24">
//       <button
//         disabled={curPage === 1}
//         onClick={() => {
//           if (curPage === 1) {
//             return;
//           }
//           setReviews(review_data.slice((curPage - 2) * pageSize, (curPage - 1) * pageSize));
//           setCurPage(curPage - 1);
//         }}
//         className="text-[1.25rem] font-medium flex items-center gap-5 ">
//         <Image src="/icons/prev.svg" width={32} height={32} alt="arrow left" />
//         previous
//       </button>
//       <button
//         disabled={curPage === Math.ceil(review_data.length / pageSize)}
//         onClick={() => {
//           if (curPage === Math.ceil(review_data.length / pageSize)) {
//             return;
//           }
//           setReviews(review_data.slice(curPage * pageSize, (curPage + 1) * pageSize));
//           setCurPage(curPage + 1);
//         }}
//         className="text-[1.25rem] font-medium flex items-center gap-5 ">
//         next
//         <Image src="/icons/next.svg" width={32} height={32} alt="arrow right" />
//       </button>
//     </div>
//   </div>
// );

// function ReviewCard({review}) {
//   return (
//     <div>
//       <p className="text-[1.375rem] leading-loose">{review.comment}</p>
//       <div className="flex justify-between mt-5 text-xl font-medium leading-loose">
//         <div className="flex gap-2">
//           <Image src="/icons/comment.svg" width={36} height={'36'} alt="speech bubble" className="object-cover " />
//           <p className="">{review.name}</p>
//         </div>
//         <p className="text-[#9D9892]">{review.date}</p>
//       </div>
//     </div>
//   );
// }

// export default Reviews;
