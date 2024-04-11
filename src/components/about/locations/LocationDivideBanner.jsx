import React from 'react';

import LocationDivideCard from './LocationDivideCard';

export default function LocationDivideBanner() {
  return (
    <>
      <div className="bg-[#302C29] bg-[url('/banner/about/locations/LocationBGDeco.png')] bg-cover py-40">
        <p className="text-white text-center text-48px mb-[3.75rem] leading-normal font-trajan">
          Why Choose Cara Plastic Surgery & LaserCenter?
        </p>
        <div className="grid 2xl:grid-cols-2 gap-10 px-8 md:px-[11.375rem] ">
          {info.map((item, i) => (
            <LocationDivideCard key={item.title} info={item} i={i} />
          ))}
        </div>
      </div>
    </>
  );
}

const info = [
  {
    title: 'Experienced Professionals',
    desc: 'Nestled in the beautiful San Gabriel Valley,our facility provides a serene environment for your cosmetic procedures.Experience the perfect blend of natural beauty and personalized care.',
  },
  {
    title: 'Cutting-edge Technology',
    desc: 'We utilize the latest advancements in plastic surgery and laser treatments to ensure optimaloutcomes for our patients.',
  },
  {
    title: 'Personalized Approach',
    desc: 'Your unique needs andaspirations are our priority. We work closely with you to create a customizedtreatment plan that aligns with your goals. The sequence of locations forservices is Las Vegas first, Los Angeles, Buena Park, and San Gabriel Valley.',
  },
  {
    title: 'Comfortable Facilities',
    desc: 'Each of our locations is designed to provide a comfortable and welcoming atmosphere,ensuring a positive and stress-free experience.',
  },
];
