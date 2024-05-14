import React from 'react';

import LocationDivideCard from './LocationDivideCard';

export default function LocationDivideBanner() {
  return (
    <>
      <div className="bg-[#302C29] bg-[url('/banner/about/locations/LocationBGDeco.png')] bg-cover py-20 sm:py-40">
        <p className="text-white text-center text-3xl sm:text-48px mb-[3.75rem] leading-normal font-trajan">
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
    desc: 'Our team of board-certified surgeons and skilled professionals is dedicated to providing you with the highest quality care and results.',
  },
  {
    title: 'State-of-the-art Technology',
    desc: 'We utilize the latest advancements in plastic surgery and laser treatments to ensure optimal outcomes for our patients.',
  },
  {
    title: 'Personalized Approach',
    desc: 'Your unique needs and goals are our priority. We work closely with you to create a customized treatment plan that aligns with your vision. That plan may include a sequence of visits, first to our Las Vegas location, then Los Angeles, Buena Park, and finally concluding in our San Gabriel office',
  },
  {
    title: 'Quality Facilities',
    desc: 'Each of our locations is designed to provide a comfortable and welcoming atmosphere, ensuring a positive and stress-free experience.',
  },
];
