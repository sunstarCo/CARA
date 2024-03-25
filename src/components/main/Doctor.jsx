'use client';
import React, {useState} from 'react';

import Image from 'next/image';

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
  return (
    <div className="relative w-full h-[67.5rem] overflow-hidden">
      <div className="absolute top-0 left-0 flex">
        <div className={`w-screen h-[67.5rem] relative flex justify-end md:px-16`}>
          <Image
            src={'/banner/main/DoctorPhoto1.png'}
            alt=""
            fill
            sizes="100"
            className="object-cover object-left-top"
          />
          <div className="absolute flex flex-col px-8 2xl:w-1/2 text-white">
            <div className="flex uppercase z-20 mt-16 min-[400px]:mt-28 md:mt-40">
              {doctorData.map((data, index) => (
                <div key={index}>
                  <div
                    className={`text-xl sm:text-3xl flex text-center items-center leading-normal font-normal -tracking-tight `}>
                    <button
                      className={`${active !== data.title && 'opacity-40'} px-2`}
                      onClick={() => {
                        setActive(data.title);
                      }}>
                      {data.title.toUpperCase()}
                    </button>
                    {index !== doctorData.length - 1 && (
                      <div className="mx-2 min-[400px]:mx-4 md:mx-14 w-[1px] h-6 bg-[#BDB5AA]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 min-[400px]:mt-[4rem] 2xl:mt-[8.75rem] text-[3rem] sm:text-[4rem] leading-normal">
              DAVID KAHNG, MD
            </p>
            <div className="w-[6.25rem] h-2 bg-[#D9D5CC] mt-4 min-[400px]:mt-10" />
            <p className="text-[1.4rem] leading-loose mt-4 min-[400px]:mt-12 lg:w-full 2xl:w-[85%]">
              {doctorData.find(data => data.title === active).desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
