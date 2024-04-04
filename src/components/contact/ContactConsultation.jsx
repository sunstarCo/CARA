'use client';
import React from 'react';

import ContactForm from './ContactForm';

export default function ContactConsultation() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full lg:h-[57.5rem]">
      <div className="lg:w-[50%] w-full bg-[url('/ContactScheduleBG.png')] bg-cover flex justify-center items-center">
        <ContactForm />
      </div>
      <div className="flex flex-col lg:w-[50%] py-36  lg:p-0 md:h-full justify-center ">
        <div className="text-[4rem] leading-normal mx-auto">
          <p>SCHEDULE A</p>
          <p>CONSULTATION</p>
          <div className="bg-[#BDB5AA] w-[6.25rem] h-2 my-10"></div>
        </div>
        <p className="text-2xl text-[#585451] text-center mt-2">This is a review of Search Plastic Surgery.</p>
      </div>
    </div>
  );
}
