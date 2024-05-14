import React from 'react';

function Location({locationData, i}) {
  const {region, address, url} = locationData;
  const adds = address.split('/');
  return (
    <>
      <div className="sm:w-[15rem] 2xl:w-[17rem] text-center mx-auto">
        <a
          href={url}
          target="_blank"
          className="text-2xl 2xl:text-[1.75rem] hover:text-gray-400 mb-4 font-trajan text-nowrap">
          {region}
        </a>
        <p className="text-xl font-medium text-[#9D9892] mb-5">(855) 212-9901</p>
        <div className="leading-[2.1375rem] text-lg">
          <p>{adds[0]}</p>
          <p>{adds[1]}</p>
          <p>{adds[2]}</p>
        </div>
      </div>
      {i < 3 && (
        <div className="w-[1px] h-40 bg-[#D9D5CC] mx-4 min-[1100px]:mx-10 2xl:mx-[3.75rem] my-auto max-lg:hidden" />
      )}
      {i < 3 && <div className="w-[70%] h-[1px] mx-auto bg-[#D9D5CC] my-8 lg:hidden" />}
    </>
  );
}

export default Location;
