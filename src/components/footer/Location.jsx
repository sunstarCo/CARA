import React from 'react';

function Location({locationData, i}) {
  const {region, address} = locationData;
  const adds = address.split('/');
  return (
    <>
      <div className="w-[18.75rem] text-center mx-auto">
        <p className="text-[1.75rem] mb-4 font-trajan">{region}</p>
        <p className="text-xl font-medium text-[#9D9892] mb-5">(855) 212-9901</p>
        <div className="leading-[2.1375rem] text-lg">
          <p>{adds[0]}</p>
          <p>{adds[1]}</p>
          <p>{adds[2]}</p>
        </div>
      </div>
      {i < 3 && <div className="w-[1px] h-40 bg-[#D9D5CC] mx-4 2xl:mx-[3.75rem] my-auto max-lg:hidden" />}
      {i < 3 && <div className="w-[80%] h-[1px] mx-auto bg-[#D9D5CC] my-8 lg:hidden" />}
    </>
  );
}

export default Location;
