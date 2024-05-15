import React, {useState} from 'react';

import Image from 'next/image';

import GalleryModal from './GalleryModal';

export default function GalleryDetailPN({surgeryInfo}) {
  const [curPage, setCurPage] = useState(1);
  const pageSize = 9;
  const imgArr = [...Array(surgeryInfo.quantity)];
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imgs, setImgs] = useState(imgArr.slice(0, pageSize));
  const handleImageClick = imageUrl => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };
  return (
    <div className="flex flex-col items-center gap-10 mt-5">
      <div className="px-8 max-w-[98rem] justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        {imgs.map((_, index) => (
          <div
            key={index}
            onClick={() =>
              handleImageClick(
                `/banner/gallery/${surgeryInfo.surgery.toLowerCase().replaceAll(' ', '-')}/${
                  (index + 1) * curPage
                }.jpg`,
              )
            }>
            <GalleryDetailPNCard title={surgeryInfo.surgery} count={(index + 1) * curPage} />
            {/* {index !== imgs.length - 1 && <hr className="my-10" />} */}
          </div>
        ))}
      </div>
      <div className="flex gap-40 mb-24">
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
          Prev
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
          Next
          <Image src="/icons/next.svg" width={32} height={32} alt="arrow right" />
        </button>
      </div>
      {showModal && <GalleryModal imageUrl={selectedImage} onClose={closeModal} />}
    </div>
  );
}

function GalleryDetailPNCard({title, count}) {
  const filePath = `/banner/gallery/${title.toLowerCase().replaceAll(' ', '-')}/${count}.jpg`;
  return (
    <Image
      alt="surgeryBeforeAfterImg"
      className="sm:h-[14.5rem] object-cover mx-auto object-center"
      width={493}
      height={210}
      src={filePath}
      sizes="250px"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
    />
  );
}
