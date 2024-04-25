'use client';
import React from 'react';

import ContactForm from './ContactForm';

export default function ContactConsultation() {
  return (
    <div className="flex  flex-col lg:flex-row items-center justify-center w-full lg:h-[70.5rem]">
      <div className="lg:w-[50%] flex-col lg:flex-row h-full w-full bg-[url('/ContactScheduleBG.png')] bg-cover flex justify-center items-center">
        <div className="lg:hidden leading-normal pt-5 text-[2.5rem] sm:text-48px text-start font-trajan text-white">
          <p className="whitespace-nowrap">SCHEDULE A</p>
          <p>CONSULTATION</p>
          <div className="bg-[#BDB5AA] w-[6.25rem] mx-auto h-2 my-10"></div>
        </div>
        <ContactForm />
      </div>
      <div className="flex flex-col w-1/2 px-2 py-16 lg:py-36">
        <div className="w-full mx-auto items-center md:h-full max-w-[600px] lg:px-12">
          <div className="w-full leading-normal hidden lg:block text-[2.5rem] sm:text-48px text-start font-trajan ">
            <p className="whitespace-nowrap">SCHEDULE A</p>
            <p>CONSULTATION</p>
            <div className="bg-[#BDB5AA] w-[6.25rem] h-2 my-10"></div>
          </div>
          <div className="flex flex-col justify-start w-full text-start">
            <p className="text-[1.75rem] leading-[3.325rem]">HOURS:</p>
            {Hours.map(item => {
              return (
                <div key={item.location} className="">
                  <p className="text-xl leading-[2.375rem]">{item.location}</p>
                  <div className="">
                    {item.hours.map(item => {
                      return (
                        <div key={item.id} className="flex justify-between font-light gap-6 text-[#9D9892] text-lg">
                          <span className="leading-[2.1375rem]">{item.day}</span>
                          <span className="text-nowrap">{item.hour}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Hours = [
  {
    location: 'LAS VEGAS',
    hours: [
      {id: 0, day: 'MON, WED, THURS, FRI, SAT', hour: '10:00AM-6:00PM'},
      {id: 1, day: 'THU & SUN', hour: 'Closed'},
    ],
  },
  {
    location: 'LOS ANGELES',
    hours: [
      {id: 2, day: 'MON', hour: '9:30AM-5:00AM'},
      {id: 3, day: 'TUE-FRI', hour: '9:30AM-5:30PM'},
      {id: 4, day: 'SAT', hour: '9:30AM-5:00PM'},
      {id: 5, day: 'SUN', hour: 'Closed'},
    ],
  },
  {
    location: 'SAN GABRIEL VALLEY',
    hours: [
      {id: 6, day: 'MON, TUES, THURS, FRI', hour: '9:30AM-5:30PM'},
      {id: 7, day: 'SAT', hour: '9:30AM-5:00PM'},
      {id: 8, day: 'WED & SUN', hour: 'Closed'},
    ],
  },
  {
    location: 'ORANGE COUNTY',
    hours: [
      {id: 9, day: 'MON-FRI', hour: '9:30AM-5:30PM'},
      {id: 10, day: 'SAT', hour: '9:30AM-5:00PM'},
      {id: 11, day: 'WED & SUN', hour: 'Closed'},
    ],
  },
];
