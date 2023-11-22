import { Purchase } from '@/types';
import React, { useEffect, useRef, useState } from 'react';

interface DropdownProps {
  options: any;
  initial: string;
}

const CustomDropdown = ({ options, initial }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [valueSelected, setValueSelected] = useState('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelected = (value: string) => {
    setValueSelected(value);
    toggleDropdown();
  };

  const handleClickOutside = (event: any) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as any).contains(event.target)
    ) {
      if (isOpen) {
        toggleDropdown();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex h-10 w-full cursor-pointer items-center justify-start rounded-md border border-light border-opacity-25 bg-dark-100 hover:border-opacity-75 dark:text-light"
        onClick={toggleDropdown}
      >
        <div className="mx-3">▼ {!valueSelected ? initial : valueSelected}</div>
        {
          <div
            className={`absolute z-40 ${
              options.length < 5
                ? `mt-[${options.length * 2.5 + 2.5}rem]`
                : 'mt-[15rem]'
            } ${
              options.length < 5 ? 'h-auto' : 'h-[12.5rem]'
            } w-full overflow-auto rounded bg-dark-400 ${
              isOpen
                ? 'pointer-events-auto scale-y-100'
                : 'pointer-events-none scale-y-0'
            } origin-top transform transition-all duration-150 ease-in-out`}
          >
            {options.map((value: any) => (
              <div
                className="duration-50 flex h-10 items-center border border-transparent px-4 transition ease-out hover:-translate-y-px hover:scale-95 hover:rounded hover:border-light hover:border-opacity-25 hover:bg-dark-500 focus:bg-dark-600 dark:text-light-800 hover:dark:text-light"
                key={value}
                onClick={() => handleOptionSelected(value)}
              >
                {value.toUpperCase()}
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default CustomDropdown;
