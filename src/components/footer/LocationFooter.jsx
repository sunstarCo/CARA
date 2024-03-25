import React from 'react';

import Location from './Location';

function LocationFooter() {
  return (
    <>
      <div className="flex flex-col xl:flex-row 2xl:gap-10 items-center justify-center py-24 px-5 lg:py-[10.6875rem]">
        {locations.map((data, i) => {
          return <Location key={data.region} locationData={data} i={i}></Location>;
        })}
      </div>
    </>
  );
}

const locations = [
  {region: 'LAS VEGAS', address: 'Spring Mountain/5808 Rd. #10/Las Vegas NV 89146'},
  {region: 'LOS ANGELES', address: 'Serrano Medical Building/4220 W. 3rd St. #102/Los Angeles, CA 90020'},
  {
    region: 'ORANGE COUNTY',
    address: 'Village Circle on the beach/5161 Beach Blvd. #A/Buena Park, CA 90621',
  },
  {region: 'SAN GABRIEL', address: 'San Gabriel Valley/1320 E Las Tunas Dr. #201/San Gabriel, CA 91776'},
];

export default LocationFooter;
