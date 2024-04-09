'use client';
import React from 'react';

import ContactForm from './ContactForm';

export default function ContactConsultation() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:h-[57.5rem]">
      <div className="lg:w-[50%] h-full w-full bg-[url('/ContactScheduleBG.png')] bg-cover flex justify-center items-center">
        <ContactForm />
      </div>
      <div className="flex flex-col  lg:w-[50%] py-10 md:py-36 px-3 lg:px-[7.5rem] items-center   md:h-full justify-center ">
        <div className="text-[3.375rem] w-full text-start leading-normal ">
          <p>SCHEDULE A</p>
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
                      <div key={item.id} className="flex justify-between font-light text-[#9D9892] text-lg">
                        <span className="leading-[2.1375rem]">{item.day}</span>
                        <span>{item.hour}</span>
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
