import React from 'react';

const Input = ({ placeholder_text }) => {
  return (
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-right"
      id="grid-first-name"
      type="text"
      placeholder={placeholder_text}
    />
  );
};

export default Input;
