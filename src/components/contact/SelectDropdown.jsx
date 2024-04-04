'use client';
import React, {useState} from 'react';

const SelectDropdown = ({initialValue, options}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <select className="w-full contact_input contact_input_full" value={selectedOption} onChange={handleChange}>
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
  );
};

export default SelectDropdown;
