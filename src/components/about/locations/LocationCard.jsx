import React from 'react';

import Image from 'next/image';

import LasVegas from '../../../../public/banner/about/locations/LasVegas.png';
import LosAngeles from '../../../../public/banner/about/locations/LosAngeles.png';
import OrangeCounty from '../../../../public/banner/about/locations/OrangeCounty.png';
import SanGabriel from '../../../../public/banner/about/locations/SanGabriel.png';

export default function LocationCard({locationInfo}) {
  const {id, region, address, explain} = locationInfo;
  return (
    <div
      className={`flex flex-col w-full ${
        (id == 'LasVegas' || id == 'OrangeCounty') && `flex-col 2xl:flex-row-reverse`
      } 2xl:flex-row`}>
      <div className="relative min-h-[63.6875rem] 2xl:w-1/2">
        <Image src={imgFind(id)} alt="doctorImage" fill className="object-cover" />
      </div>
      <div className="py-[6.25rem] flex items-center  bg-[#EAE9E5] 2xl:w-1/2 ">
        <div className="  md:px-[11.375rem] px-10 flex-col justify-center items-start gap-[0.625rem] ">
          <h1 className="text-[3.125rem] uppercase leading-normal mb-[1.875rem]">
            <p>{region}</p>
          </h1>
          <div className="w-[6.25rem] h-2 mb-10 bg-[#9D9892]"></div>
          <div className="flex flex-col gap-1 mb-3">
            <p className="text-2xl font-bold leading-[2.1375rem]">ADDRESS</p>
            <p className="text-lg leading-[2.1375rem]">{address}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-2xl leading-[2.1375rem] font-bold">CONTACT</p>
            <p className="text-lg leading-[2.1375rem]">(855) 212-9901</p>
          </div>
          <p className="text-2xl leading-[2.375rem]  mt-10">{explain}</p>
        </div>
      </div>
    </div>
  );
}
const imgFind = id => {
  if (id == 'LasVegas') return LasVegas;
  if (id == 'LosAngeles') return LosAngeles;
  if (id == 'OrangeCounty') return OrangeCounty;
  if (id == 'SanGabriel') return SanGabriel;
};