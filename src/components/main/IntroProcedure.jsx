'use client';
import React, {useState} from 'react';

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
    <div className="relative w-full h-[800px] lg:h-[960px] overflow-hidden">
      <div className="absolute top-0 left-0 flex">
        <div className={`w-screen h-[800px] lg:h-[960px] relative flex`}>
          <Image
            src={'/banner/main/IntroProcedureBG.png'}
            alt=""
            fill
            sizes="100"
            className="object-cover object-top"
          />
          <div className="absolute flex h-full  px-4 md:px-16">
            <p className=" w-1/2 text-white justify-center flex items-center text-[5rem] leading-normal h-full max-2xl:hidden font-trajan">
              {active.toUpperCase()}
            </p>
            <div className="flex flex-col w-full 2xl:w-1/2 text-white">
              <div className="flex uppercase z-20 my-[4rem] sm:my-[6.25rem]">
                {procedureData.map((data, index) => (
                  <div key={index}>
                    <div
                      className={`text-2xl sm:text-3xl flex text-center items-center leading-normal font-normal -tracking-tight `}>
                      <button
                        className={`${active !== data.title && 'opacity-40'} px-2 font-trajan`}
                        onClick={() => {
                          setActive(data.title);
                        }}>
                        {data.title.toUpperCase()}
                      </button>
                      {index !== procedureData.length - 1 && (
                        <div className="mx-2 min-[400px]:mx-4 md:mx-14 w-[1px] h-6 bg-[#BDB5AA]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[2.5rem] sm:text-[4rem] leading-normal uppercase font-trajan">
                {currentData.sub_title}
              </p>
              <div className="w-[6.25rem] h-2 bg-[#D9D5CC] my-4 sm:mt-10" />
              <p className="text-[1.375rem] leading-loose sm:mt-[3.125rem] w-full">{currentData.desc}</p>
              <Link
                href={currentData.path}
                className="px-10 py-4 bg-[#BDB5AA] w-fit text-black text-xl leading-normal uppercase font-medium mt-8 sm:mt-[3.75rem] ">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroProcedure;
