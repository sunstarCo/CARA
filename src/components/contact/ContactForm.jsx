'use client';
import React from 'react';

import {useForm} from 'react-hook-form';

import ContactFormErr from './ContactFormErr';

export default function ContactForm() {
  const onSubmit = async data => {
    // await new Promise(r => setTimeout(r, 1_000));
    alert(JSON.stringify(data));
  };
  const {
    register,
    handleSubmit,
    formState: {isSubmitting, isSubmitted, errors},
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-[47.875rem] flex flex-col gap-4  p-[4.5rem]">
      <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row">
        <div className={`relative contact_input contact_input_half ${errors.firstName && `border border-red-600`}`}>
          <input
            type="text"
            placeholder="First Name*"
            {...register('firstName', {
              required: 'Please enter your first name.',
            })}
            className="w-full h-full pl-5 contact_input"
          />
          {errors.firstName && <ContactFormErr>{errors.firstName.message}</ContactFormErr>}
        </div>
        <div className={`relative contact_input contact_input_half ${errors.lastName && `border border-red-600`}`}>
          <input
            type="text"
            placeholder="Last Name*"
            className="w-full h-full pl-5 contact_input"
            {...register('lastName', {
              required: 'Please enter your last name.',
            })}
          />
          {errors.lastName && <ContactFormErr>{errors.lastName?.message}</ContactFormErr>}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row">
        <div className={`relative contact_input contact_input_half ${errors.lastName && `border border-red-600`}`}>
          <input
            type="text"
            placeholder="Phone*"
            className="w-full h-full pl-5 contact_input"
            {...register('phone', {
              required: 'Please enter your phone number.',
              pattern: {
                value: /^[0-9\-]+$/,
                message: 'Please enter a valid phone numberaaa',
              },
              minLength: {
                value: 8,
                message: 'Please enter a valid phone number',
              },
            })}
          />
          {errors.phone && <ContactFormErr>{errors.phone.message}</ContactFormErr>}
        </div>
        <div className={`relative contact_input contact_input_half ${errors.email && `border border-red-600`}`}>
          <input
            type="text"
            placeholder="email*"
            className="w-full h-full pl-5 contact_input"
            {...register('email', {
              required: 'Please enter your email.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address.',
              },
            })}
          />
          {errors.email && <ContactFormErr>{errors.email.message}</ContactFormErr>}
        </div>
      </div>

      <div className={`relative ${errors.interest && `border border-red-600`}`}>
        <select
          name="interest"
          {...register('interest', {
            required: 'Field is required.',
          })}
          id="interest"
          className="w-full pl-5 contact_input contact_input_full"
          defaultValue={''}>
          <option value="" className="text-[#9D9893]" disabled>
            Procedure of interest?*
          </option>
          {interestArr.map(item => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        {errors.interest && <ContactFormErr>{errors.interest.message}</ContactFormErr>}
      </div>
      <div className={`relative ${errors.location && `border border-red-600`}`}>
        <select
          name="location"
          {...register('location', {
            required: 'Field is required.',
          })}
          id="location"
          className="w-full pl-5 contact_input contact_input_full"
          defaultValue={''}>
          <option className="text-[#9D9893]" value="" disabled>
            Preferred Location?*
          </option>
          <option value="LAS VEGAS">LAS VEGAS</option>
          <option value="LOS ANGELES">LOS ANGELES</option>
          <option value="ORANGE COUNTY">ORANGE COUNTY</option>
          <option value="SAN GABRIEL">SAN GABRIEL</option>
        </select>
        {errors.location && <ContactFormErr>{errors.location.message}</ContactFormErr>}
      </div>
      <textarea
        name="comments"
        id="comments"
        cols="30"
        rows="8"
        {...register('comments')}
        className="pt-3 text-lg font-medium opacity-90 leading-[2.1375rem] outline-none pl-5 contact_input_full"
        placeholder="Message"></textarea>

      <label htmlFor="accptTerms" required className="flex items-center gap-4 text-lg font-medium text-white">
        <input id="accptTerms" required type="checkbox" className="w-[1.875rem] h-[1.875rem] " />I accept the Terms of
        Use*
      </label>
      <button type="submit" className="bg-white w-[9.4375rem] text-xl font-medium text-[#302C29] py-4 px-10">
        SUBMIT
      </button>
    </form>
  );
}

const interestArr = [
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
];
