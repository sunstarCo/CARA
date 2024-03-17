'use client';
import React, {useState} from 'react';

const SelectDropdown = ({initialValue, options}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full max-w-xs">
      <select
        className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow bg-opacity-90 hover:border-gray-500 focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={handleChange}>
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
