import { InputHTMLAttributes } from 'react';
type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <input
      onChange={onChange}
      aria-placeholder={placeholder}
      placeholder={placeholder}
      className="w-full border text-xs font-semibold border-gray-400 p-2 text-gray-400 bg-gray-100 rounded-md focus:outline-none"
      type={type}
    />
  );
};

export default Input;
