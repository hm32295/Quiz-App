import React from 'react';

const InputSHared = ({ onchange, valueinput, iconInput, TypeInput, Lable, placeholder }:any) => {
  return (
    <div className="p-4">
      <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {Lable}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {iconInput}
        </div>
        <input
          type={TypeInput}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={valueinput}
          onChange={onchange}
        />
      </div>
    </div>
  );
};

export default InputSHared;