import React, {Fragment, useState} from 'react';

import Image from 'next/image';
export default function GalleryDetailPN({surgeryInfo}) {
  const [curPage, setCurPage] = useState(1);
  const pageSize = 9;
  const imgArr = [...Array(surgeryInfo.quantity)];
  const [imgs, setImgs] = useState(imgArr.slice(0, pageSize));

  return (
    <div className="flex flex-col items-center gap-10 mt-5">
      <div className=" px-8 max-w-[98rem] justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 w-full">
        {imgs.map((_, index) => (
          <Fragment key={index}>
            <GalleryDetailPNCard title={surgeryInfo.surgery} count={(index + 1) * curPage} />
            {/* {index !== imgs.length - 1 && <hr className="my-10" />} */}
          </Fragment>
        ))}
      </div>
      <div className="flex mb-24 gap-60">
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
  return <Image alt="surgeryBeforeAfterImg" className="h-56 mx-auto" width={493} height={225} src={filePath} />;
}
