import React from 'react';

import Location from './Location';

function LocationFooter() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center py-16 md:py-[9rem] max-w-[2100px] w-full mx-auto">
        {locations.map((data, i) => {
          return <Location key={data.region} locationData={data} i={i}></Location>;
        })}
      </div>
    </>
  );
}

const locations = [
  {
    region: 'LAS VEGAS',
    address: 'Spring Mountain/5808 Rd. #10/Las Vegas NV 89146',
    url: 'https://www.google.com/maps/place/CARA+Plastic+Surgery+%26+Laser+Center/@36.1260786,-115.2241888,17z/data=!3m1!4b1!4m6!3m5!1s0xac4275a5f158e4f7:0x97fd6cd9d83413cf!8m2!3d36.1260786!4d-115.2216139!16s%2Fg%2F11vwm258nx?entry=ttu',
  },
  {
    region: 'LOS ANGELES',
    address: 'Serrano Medical Building/4220 W. 3rd St. #102/Los Angeles, CA 90020',
    url: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x80c2bbf7d9899fd9:0xa90a8853fec53418?source=g.page.share',
  },
  {
    region: 'ORANGE COUNTY',
    address: 'Village Circle on the beach/5161 Beach Blvd. #A/Buena Park, CA 90621',
    url: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x80dd2b0b3dce352d:0x6f3c1965be05227c?source=g.page.share',
  },
  {
    region: 'SAN GABRIEL',
    address: 'San Gabriel Valley/1320 E Las Tunas Dr. #201/San Gabriel, CA 91776',
    url: 'https://www.google.com/maps/place/CARA+Plastic+Surgery+%26+Laser+Center+:+David+Kahng,+M.D.+%2F+Breast+Aug+%2F+Asian+Rhinoplasty/@34.103098,-118.0812269,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2db3528790a0b:0x36b07cc2293fb717!8m2!3d34.103098!4d-118.0790329?shorturl=1',
  },
];

export default LocationFooter;
