'use client';
import React, {useEffect, useState} from 'react';

import Image from 'next/image';

function BeforeAfter({images_data}) {
  const [curPage, setCurPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [images, setImages] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(() => {
        let page_size = 3;
        if (window.innerWidth < 500) {
          page_size = 1;
        } else if (window.innerWidth < 1024) {
          page_size = 2;
        }
        setImages(images_data.slice(0, page_size));
        return page_size;
      });
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const clickNextSlide = () => {
    if (curPage === Math.ceil(images_data.length / pageSize)) {
      return;
    }
    setImages(images_data.slice(curPage * pageSize, (curPage + 1) * pageSize));
    setCurPage(curPage + 1);
  };

  const clickPrevSlide = () => {
    if (curPage === 1) {
      return;
    }
    setImages(images_data.slice((curPage - 2) * pageSize, (curPage - 1) * pageSize));
    setCurPage(curPage - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center px-8 py-[8.75rem]">
      <h3 className="uppercase text-[2.5rem] leading-normal">Before & After</h3>
      <div className="w-[6.25rem] h-2 bg-[#BDB5AA] my-[3.125rem]" />
      <div className="flex flex-col sm:flex-row justify-center w-full items-center gap-10 mt-[6.25rem] px-4 ">
        <button
          disabled={curPage === 1}
          onClick={clickPrevSlide}
          className="w-10 h-10 bg-[#D9D5CC] flex items-center justify-center rounded-full max-sm:hidden">
          <Image src={'/icons/prev.svg'} alt="arrow left" width={0} height={0} sizes="100" className="w-fit" />
        </button>
        <div className="flex w-[95%] md:w-[80%] justify-center">
          <div className={`card flex gap-10`}>
            {images?.map((image, index) => (
              <div key={index} className="w-full">
                <Image
                  src={image.image}
                  alt="patient"
                  width={492}
                  height={279}
                  sizes="100"
                  className="w-full object-cover"
                />
                <div className="absolute top-0 text-white font-semibold">{image.id}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <button
            disabled={curPage === 1}
            onClick={clickPrevSlide}
            className="w-10 h-10 bg-[#D9D5CC] flex items-center justify-center rounded-full sm:hidden">
            <Image src={'/icons/prev.svg'} alt="arrow left" width={0} height={0} sizes="100" className="w-fit" />
          </button>
          <button
            disabled={curPage === Math.ceil(images_data.length / pageSize)}
            onClick={clickNextSlide}
            className="w-10 h-10 bg-[#D9D5CC] flex items-center justify-center rounded-full">
            <Image src={'/icons/next.svg'} alt="arrow right" width={0} height={0} sizes="100" className="w-fit" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeAfter;
