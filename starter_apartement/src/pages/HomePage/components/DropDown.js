import React, { useState } from "react";

const Dropdown = ({ buttonLabel, Icon, children, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${
          isActive ? "bg-indigo-50" : ""
        }`}
        onClick={handleToggle}
      >
        <span className="flex items-center">
          <Icon size={20} />
          <span className="ml-2">{buttonLabel}</span>
        </span>
        <span className="flex items-center">
          <svg
            className={`w-5 h-5 transition-transform transform ${
              isOpen ? "-rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 13a1 1 0 01-.71-.29l-3.5-3.5a1 1 0 011.42-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-3.5 3.5A1 1 0 0110 13z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
