'use client';
import React, {useState} from 'react';

import doctorPhoto from '@img/banner/main/DoctorPhoto1.jpg';
import Image from 'next/image';

import {useObserver} from '@/hooks/useObserver';

const doctorData = [
  {
    title: 'Overview',
    desc: 'Meet Dr. David Kahng, a renowned board-certified Korean plastic surgeon serving the vibrant communities of Los Angeles, Orange County, and now, Las Vegas. In a dynamic realm where beauty wields power, Dr. David Kahng stands out as a leading figure. As a prominent plastic surgeon in Los Angeles and now as he extends his expertise to Las Vegas, he has devoted his professional journey to crafting exquisite aesthetic enhancements for the face and body. Distinguished for his mastery of state-of-the-art techniques and technology, Dr. Kahng is celebrated in the field of Asian Plastic Surgery in Los Angeles and beyond for his ability to achieve symmetry, harmony, and balance.',
  },
  {
    title: 'Philosophy',
    desc: 'Renowned Plastic Surgeon in Los Angeles, Orange County, and now Las Vegas, is distinguished for his unwavering commitment to honesty, integrity, and remarkable surgical skills. At the heart of our philosophy is the conviction that delicately performed surgical procedures have the power to enhance the inherent beauty of your features. Dr. Kahng firmly believes that each patient is unique, deserving of a customized cosmetic surgery plan tailored to their individual needs. \n Dr. Kahng prioritizes establishing trust and rapport with his patients, and this foundational relationship commences with the first consultation. During the consultation, Dr. Kahng will address your inquiries and apprehensions, facilitating a thorough assessment to ascertain whether you are an ideal candidate for your desired procedure. Collaboratively, you and Dr. Kahng can discuss and explore various options to fulfill your aesthetic aspirations.',
  },
  {
    title: 'Safety',
    desc: 'As a dedicated plastic surgeon serving the Los Angeles, Koreatown, Orange County, and now Las Vegas communities, Dr. David Kahng places paramount importance on patient safety. Our commitment to safety is exemplified by the meticulous attention to detail maintained across our state-of-the-art AAAASF certified surgery centers. At each location, including the newly introduced Las Vegas clinic, our highly trained professional staff is dedicated to ensuring your well-being with the same level of care we extend to our own families. Learn more about our unwavering commitment to safety by scheduling a complimentary consultation with Dr. Kahng today.',
  },
];

function Doctor() {
  const [active, setActive] = useState('Overview');
  const {isVisible, domRef} = useObserver();
  return (
    <>
      <Image
        src={doctorPhoto}
        sizes="70vw"
        alt="doctor"
        className="h-[24rem] object-cover object-left sm:hidden -scale-x-100"
      />
      <div className="relative w-full py-20 overflow-hidden md:pt-40">
        <Image
          src={doctorPhoto}
          alt="doctor"
          fill
          sizes="70vw"
          className="object-cover object-left-top -z-10 max-sm:hidden"
        />
        <div className="absolute top-0 left-0 bg-black opacity-80 w-full h-full -z-10 sm:hidden" />
        <div className={`flex justify-end md:px-16 max-w-[1700px] mx-auto`}>
          <div className="flex flex-col text-white max-w-[766px] px-8">
            <div className="flex">
              {doctorData.map((data, index) => (
                <div key={index}>
                  <div className={`text-xl sm:text-3xl flex text-center items-center leading-normal font-normal`}>
                    <button
                      className={`${active !== data.title && 'opacity-40'} font-trajan`}
                      onClick={() => {
                        setActive(data.title);
                      }}>
                      {data.title}
                    </button>
                    {index !== doctorData.length - 1 && (
                      <div className="mx-2 min-[400px]:mx-4 md:mx-14 w-[1px] h-6 bg-[#BDB5AA] max-sm:opacity-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p
              ref={domRef}
              className="mt-6 min-[400px]:mt-[4rem] 2xl:mt-[5rem] text-[2rem] sm:text-[4rem] sm:leading-normal font-trajan">
              David Kahng, MD
            </p>
            <div className="w-[6.25rem] h-2 bg-[#D9D5CC] mt-4 min-[400px]:mt-10" />
            <div
              className={`opacity-0 text-[1.25rem] leading-loose sm:min-h-[550px] mt-4 min-[400px]:mt-12 w-full ${
                isVisible && 'animate-show_move_top'
              } transition-opacity`}>
              {doctorData
                .find(data => data.title === active)
                .desc.split('\n')
                .map((line, index) => (
                  <p key={index} className="mb-4">
                    {line}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctor;
