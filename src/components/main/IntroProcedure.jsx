'use client';
import React, {useState} from 'react';

import BANNER_IMG from '@img/banner/main/IntroProcedure.jpg';
import Image from 'next/image';
import Link from 'next/link';

const procedureData = [
  {
    title: 'Rhinoplasty',
    sub_title: 'Elevate and Perfect',
    path: '/nose/Rhinoplasty',
    desc: 'Renowned as a leading provider of plastic surgery in Los Angeles and Las Vegas, Dr. Kahng specializes in rhinoplasty, attracting patients seeking to refine their nasal structure and achieve a more balanced and harmonious facial appearance. Perfecting the art of delicate surgical procedures, he excels in enhancing the subtleties of the facial structure, particularly excelling in complex procedures such as double eyelid surgery, fulfilling the desires of Los Angeles and Las Vegas patients with exceptional skill.',
  },
  {
    title: 'FaceLift',
    sub_title: 'Lift and Revitalize',
    path: '/face/Face-Lift',
    desc: "Embracing the possibilities of modern surgical techniques, we no longer have to endure the visible signs of aging – now, it's possible to seamlessly smooth, tighten, firm, and sculpt the face, achieving a remarkable enhancement and fostering a more youthful, rejuvenated appearance. Dr. Kahng's meticulous approach ensures that these procedures are executed with utmost delicacy and care, delivering outcomes that are not only incredibly natural but also beautifully transformative for the plastic surgery communities in both Los Angeles and Las Vegas.",
  },
  {
    title: 'Eyelid',
    sub_title: 'Reshape and Rejuvenate',
    path: '/face/Lower-Eyelid-Surgery',
    desc: "Patients seek our state-of-the-art plastic surgery clinics in Los Angeles, Koreatown, Orange County, and now Las Vegas, drawn by our exceptional expertise in eyelid surgery. Employing a delicate surgical technique, we can assist you in achieving a beautiful double fold, leaving your eyes looking more attractive, open, and appealing. Dr. Kahng's mastery and attention to detail have established him as one of the premier destinations for double eyelid surgery across these diverse locations.",
  },
];

function IntroProcedure() {
  const [active, setActive] = useState('Rhinoplasty');
  const currentData = procedureData.find(data => data.title === active);
  return (
    <>
      <Image src={BANNER_IMG} sizes="100" alt="" className="h-[30rem] object-cover object-left" />
      <div className="relative w-full overflow-hidden py-20 sm:py-40">
        <Image src={BANNER_IMG} alt="" fill sizes="100" className="object-cover object-left-top -z-10 max-sm:hidden" />
        <div className="absolute top-0 left-0 bg-black opacity-80 w-full h-full -z-10 sm:hidden" />
        <div className="flex justify-end h-full px-4 md:px-16 max-w-[1700px] mx-auto">
          {/* <p className="w-1/2 text-white flex justify-start px-12 text-54px leading-normal -translate-y-1/3 h-full max-2xl:hidden font-trajan">
          {active}
        </p> */}
          <div className="flex flex-col max-w-[766px] text-white">
            <div className="flex z-20 mb-[4rem] sm:mb-[6.25rem]">
              {procedureData.map((data, index) => (
                <div key={index}>
                  <div className={`text-lg sm:text-3xl flex text-center items-center leading-normal font-normal`}>
                    <button
                      className={`${active !== data.title && 'opacity-40'} font-trajan`}
                      onClick={() => {
                        setActive(data.title);
                      }}>
                      {data.title}
                    </button>
                    {index !== procedureData.length - 1 && (
                      <div className="mx-2 min-[400px]:mx-4 md:mx-14 w-[1px] h-6 bg-[#BDB5AA] max-sm:opacity-0" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[2rem] sm:text-54px leading-normal font-trajan">{currentData.sub_title}</p>
            <div className="w-[6.25rem] h-2 bg-[#D9D5CC] my-4 sm:mt-10" />
            <p className="text-xl leading-loose sm:mt-[3.125rem] w-full tracking-[0.5px] min-h-[20rem]">
              {currentData.desc}
            </p>
            <Link
              href={currentData.path}
              className="px-10 py-4 bg-[#BDB5AA] w-fit text-black text-xl leading-normal  font-medium mt-8 sm:mt-[3.75rem] ">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroProcedure;
