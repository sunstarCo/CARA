import React from 'react';

import SelectDropdown from './SelectDropdown';

export default function ContactForm() {
  return (
    <form className="w-[47.875rem] flex flex-col gap-4 p-[4.5rem]">
      <div className="flex justify-between">
        <input type="text" placeholder="First Name*" className="contact_input contact_input_half" />
        <input type="text" placeholder="Last Name*" className="contact_input contact_input_half" />
      </div>
      <div className="flex justify-between">
        <input type="text" placeholder="Phone*" className="contact_input contact_input_half" />
        <input type="text" placeholder="Email*" className="contact_input contact_input_half" />
      </div>
      <input type="text" placeholder="How did you hear about us?" className="contact_input contact_input_full" />
      <SelectDropdown
        initialValue="Surgical Procedure of interest?"
        className="contact_input contact_input_full"
        options={[
          'Breast Augmentation',
          'Breast Lift',
          'Breast Reduction',
          'Male Breast Reduction',
          'Breast Implant Removal',
          'Liposuction',
          'Tummy Tuck',
          'Mommy Makeover',
          'Brazilian Butt Lift',
          'Rhinoplasty',
          'Asian Rhinoplasty',
          'Hispanic Rhinoplasty',
          'Revision Rhinoplasty',
          'Lower Eyelid Surgery',
          'Face Lift',
          'Brow Lift',
          'Fat Transfer',
          'Chin Augmentation',
          'Buccal Fat Removal',
          'Injectables',
          'Skin Tightening',
          'Skin Rejuvenation',
          'Skin Lightening',
          'Body Contouring',
          'Laser Hair Removal',
          'Vitamin Therapy',
        ]}
      />
      <SelectDropdown
        initialValue="Preferred Location?"
        className="contact_input contact_input_full"
        options={['LAS VEGAS', 'LOS ANGELES', 'ORANGE COUNTY', 'SAN GABRIEL']}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="8"
        className="text-lg font-medium leading-[2.1375rem] outline-none pl-5 contact_input_full"
        placeholder="Comments / Questions"></textarea>

      <label htmlFor="accptTerms" required className="flex items-center gap-4 text-lg font-medium text-white">
        <input id="accptTerms" type="checkbox" className="w-[1.875rem] h-[1.875rem]" />I accept the Terms of Use*
      </label>
    </form>
  );
}
