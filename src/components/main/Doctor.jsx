'use client';
import React, {useState} from 'react';

import Image from 'next/image';

import {useObserver} from '@/hooks/useObserver';

const doctorData = [
  {
    title: 'Overview',
    desc: 'Meet Dr. David Kahng, an esteemed board-certified plastic surgeon serving the vibrant communities of Los A ngeles, Orange County, and now, Las Vegas. In the dynamic realm where beauty wields its power, Dr. David Kahng stands out as a leading figure. As a prominent plastic surgeon in Los Angeles and now extending his expertise to Las Vegas, he has devoted his professional journey to crafting exquisite aesthetic enhancements for the face and body.  Renowned for his mastery of state-of-the-art techniques and technology, Dr. Kahng is celebrated in the field of Korean Plastic Surgery in Los Angeles and beyond for his ability to achieve symmetry, harmony, and balance.',
  },
  {
    title: 'Philosophy',
    desc: "Discover the guiding principles at the core of Dr. David Kahng's plastic surgery practice, now serving the Los Angeles, Orange County, and Las Vegas areas.At the heart of our philosophy is the conviction that delicately performed surgical procedures have the power to enhance the inherent beauty of your features. We firmly believe that each patient is unique, deserving of a customized cosmetic surgery plan tailored to their individual needs. Dr. Kahng, renowned in Los Angeles, Orange County, and now Las Vegas, is distinguished for his unwavering commitment to honesty, integrity, and remarkable surgical skills. Take the time to explore how Dr. Kahng can partner with you to realize and surpass your aesthetic goals.",
  },
  {
    title: 'Safety',
    desc: 'As a dedicated plastic surgeon serving the Los Angeles, Koreatown, Orange County, andnow Las Vegas communities, Dr. David Kahng places paramount importance on patient safety. Our commitment to safety is exemplified by the meticulous attention to detail maintained across our state-of-the-art AAAASF certified surgery centers. At each location, including the newly introduced Las Vegas clinic, our highly trained professionalstaff is dedicated to ensuring your well-being with the same level of care we extend to our own families. Learn more about our unwavering commitment to safety by scheduling a complimentary consultation with Dr. Kahng.',
  },
];

function Doctor() {
  const [active, setActive] = useState('Overview');
  const {isVisible, domRef} = useObserver();
  return (
    <div className="relative w-full overflow-hidden py-20 md:py-40">
      <Image
        src={'/banner/main/DoctorPhoto1.png'}
        alt=""
        fill
        sizes="100"
        className="object-cover object-left-top -z-10"
      />
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
                    <div className="mx-2 min-[400px]:mx-4 md:mx-14 w-[1px] h-6 bg-[#BDB5AA]" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <p
            ref={domRef}
            className="mt-6 min-[400px]:mt-[4rem] 2xl:mt-[6.75rem] text-[3rem] sm:text-[4rem] leading-normal font-trajan">
            David Kahng, MD
          </p>
          <div className="w-[6.25rem] h-2 bg-[#D9D5CC] mt-4 min-[400px]:mt-10" />
          <p
            className={`opacity-0 text-[1.4rem] leading-loose min-h-[500px] mt-4 min-[400px]:mt-12 w-full ${
              isVisible && 'animate-show_move_top'
            } transition-opacity`}>
            {doctorData.find(data => data.title === active).desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
