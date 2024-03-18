import React from 'react';

import ContactForm from './ContactForm';

export default function ContactConsultation() {
  return (
    <div className="flex items-center justify-center w-full h-[57.5rem]">
      <div className="flex flex-col w-[50%] h-full justify-center ">
        <p className="text-[4rem] mx-auto">
          SCHEDULE A <br /> CONSULTATION
          <div className="bg-[#BDB5AA] w-[6.25rem] h-2"></div>
        </p>
        <p className="text-2xl text-[#585451] text-center">This is a review of Search Plastic Surgery.</p>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
}
