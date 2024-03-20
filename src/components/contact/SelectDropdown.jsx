'use client';
import React, {useState} from 'react';

const SelectDropdown = ({initialValue, options}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full ">
      <select className="contact_input contact_input_full" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          {initialValue}
        </option>
        {options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectDropdown;
