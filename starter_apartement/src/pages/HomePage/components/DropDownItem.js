import React from "react";

const DropdownItem = ({ itemName, Icon, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 hover:bg-gray-100 focus:outline-none ${
        isActive ? "bg-gray-100" : ""
      }`}
    >
      <Icon className="mr-2" />
      <span>{itemName}</span>
    </button>
  );
};

export default DropdownItem;
