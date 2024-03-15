import React from 'react';

function Location({locationData, i}) {
  const {region, address} = locationData;
  const adds = address.split('/');
  return (
    <>
      <div className="w-[18.75rem] text-center">
        <p className="text-[1.75rem]  mb-4">{region}</p>
        <p className="text-xl font-medium text-[#9D9892] mb-5">(855) 212-9901</p>
        <div className="leading-[2.1375rem] text-lg">
          <p>{adds[0]}</p>
          <p>{adds[1]}</p>
          <p>{adds[2]}</p>
        </div>
      </div>
      {i < 3 && <div className="w-[1px] h-40 bg-[#D9D5CC] mx-[3.75rem] my-auto" />}
    </>
  );
}

export default Location;
