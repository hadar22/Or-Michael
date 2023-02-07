import React from 'react';

const Selector = ({ options }) => {
  return (
    <select
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
      id="grid-state"
    >
      {options.map((option) => (
        <option key={option.toString()}>{option}</option>
      ))}
    </select>
  );
};

export default Selector;
