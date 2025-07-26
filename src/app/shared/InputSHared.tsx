import React from 'react';

interface InputSharedProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconInput?: React.ReactNode;
  label?: string;
  name: string;
  register?: (name: string, options?: any) => any;
  validation?: any;
  type?: string;
}

const InputShared: React.FC<InputSharedProps> = ({
  iconInput,
  label,
  placeholder,
  type = 'text',
  name,
  register,
  validation,
  ...rest
}) => {
  return (
    <div className='w-full p-2'>
      {label && (
        <label htmlFor={name} className=" block mb-2 text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="relative mb-1">
        {iconInput && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {iconInput}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ${
            iconInput ? 'pl-10' : 'pl-3'
          } p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          {...(register ? register(name, validation) : {})}
          {...rest}
        />
      </div>
     
    </div>
  );
};

export default InputShared;
