import { SelectHTMLAttributes } from 'react';

interface Item {
  displayValue: string;
  [key: string]: unknown;
}
type SelectProps = {
  label?: string;
  options: Item[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ label, name, options, onChange }: SelectProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm font-semibold text-left" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        onChange={onChange}
        className=" text-sm font-semibold focus:outline-none border border-gray-400 p-0.5 rounded-md bg-gray-100"
        name={name}
        id={name}
      >
        {options.map((option, i) => {
          return (
            <option key={i} value={option.displayValue}>
              {option.displayValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
