'use client';
import React, {useEffect, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

function BeforeAfter({images_data, heightStyle}) {
  const [curPage, setCurPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [images, setImages] = useState(null);

  const height = heightStyle || 'h-[13rem] lg:h-[14.5rem]';

  useEffect(() => {
    const handleResize = () => {
      setPageSize(() => {
        let page_size = 3;
        if (window.innerWidth < 768) {
          page_size = 1;
        } else if (window.innerWidth < 1400) {
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
    <div className="flex flex-col justify-center items-center px-8 py-20 sm:py-[8.75rem] max-w-[1600px] mx-auto">
      <h3 className="leading-normal text-4xl sm:text-48px font-trajan">Before & After</h3>
      <div className="w-[6.25rem] h-2 bg-[#BDB5AA] my-[3.125rem]" />
      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-6 mt-10 sm:mt-[6.25rem]">
        <button disabled={curPage === 1} onClick={clickPrevSlide} className="max-sm:hidden">
          <Image src={'/icons/prev.svg'} alt="arrow left" width={30} height={30} sizes="100" className="w-12" />
        </button>
        <div className={`flex gap-4 `}>
          {images?.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt="Before & After Image"
                width={492}
                height={279}
                sizes="100"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                className={`${height} object-cover mx-auto`}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-8">
          <button disabled={curPage === 1} onClick={clickPrevSlide} className="sm:hidden">
            <Image src={'/icons/prev.svg'} alt="arrow left" width={30} height={30} sizes="100" className="w-12" />
          </button>
          <button disabled={curPage === Math.ceil(images_data.length / pageSize)} onClick={clickNextSlide} className="">
            <Image src={'/icons/next.svg'} alt="arrow right" width={30} height={30} sizes="100" className="w-12" />
          </button>
        </div>
      </div>
      <Link
        href={'/Before&After'}
        className="px-10 py-4 bg-[#d9d5cc] uppercase leading-loose font-semibold text-xl mt-20">
        view gallery
      </Link>
    </div>
  );
}

export default BeforeAfter;
