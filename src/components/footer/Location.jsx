import React from 'react';

function Location({locationData, i}) {
  const {region, address} = locationData;
  const adds = address.split('/');
  return (
    <>
      <div className="text-center ">
        <p className="lg:text-[1.75rem] text-3xl  mb-4 text-nowrap">{region}</p>
        <p className="lg:text-xl text-2xl font-medium text-[#9D9892] mb-5">(855) 212-9901</p>
        <div className="leading-[2.1375rem] text-nowrap text-xl lg:text-lg">
          <p>{adds[0]}</p>
          <p>{adds[1]}</p>
          <p>{adds[2]}</p>
        </div>
      </div>
      {i < 3 && <div className="xl:w-[1px] xl:h-40 h-[1px] w-52  bg-[#D9D5CC] mx-[3.75rem] my-8 xl:my-auto" />}
    </>
  );
}

export default Location;
