import React, {Fragment, useState} from 'react';

import Image from 'next/image';
export default function GalleryDetailPN({surgeryInfo}) {
  const [curPage, setCurPage] = useState(1);
  const pageSize = 9;
  const imgArr = [...Array(surgeryInfo.quantity)];
  const [imgs, setImgs] = useState(imgArr.slice(0, pageSize));
  return (
    <div className="px-8 max-w-[90rem] grid grid-cols-3 gap-3 w-full">
      {imgs.map((review, index) => (
        <Fragment key={index}>
          <GalleryDetailPNCard title={surgeryInfo.surgery} count={index + 1} />
          {/* {index !== imgs.length - 1 && <hr className="my-10" />} */}
        </Fragment>
      ))}
      <div className="flex justify-between mt-24">
        <button
          disabled={curPage === 1}
          onClick={() => {
            if (curPage === 1) {
              return;
            }
            setImgs(imgArr.slice((curPage - 2) * pageSize, (curPage - 1) * pageSize));
            setCurPage(curPage - 1);
          }}
          className="text-[1.25rem] font-medium flex items-center gap-5 ">
          <Image src="/icons/prev.svg" width={32} height={32} alt="arrow left" />
          previous
        </button>
        <button
          disabled={curPage === Math.ceil(imgArr.length / pageSize)}
          onClick={() => {
            if (curPage === Math.ceil(imgArr.length / pageSize)) {
              return;
            }
            setImgs(imgArr.slice(curPage * pageSize, (curPage + 1) * pageSize));
            setCurPage(curPage + 1);
          }}
          className="text-[1.25rem] font-medium flex items-center gap-5 ">
          next
          <Image src="/icons/next.svg" width={32} height={32} alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

function GalleryDetailPNCard({title, count}) {
  const filePath = `/banner/gallery/${title.toLowerCase().replaceAll(' ', '-')}/${count}.jpg`;
  return (
    <div>
      <Image alt="surgeryBeforeAfterImg" width={493} height={280} src={filePath} />
    </div>
  );
}
