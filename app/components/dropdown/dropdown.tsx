import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { DropdownProps } from "@/app/types/interfaces";

const Dropdown: React.FC<DropdownProps> = ({ items, handleSuperstarTypeOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>(items[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (selectedDropDownItem: string) => {
    handleSuperstarTypeOption(selectedDropDownItem);
    setSelectedOption(selectedDropDownItem);
    setIsDropdownOpen(false);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-4/12" data-cy="agent-selection">
      <button
        className="bg-gray-900 text-white px-8 py-4 focus:outline-none w-full uppercase flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className="mr-2" data-cy="selected-agent">
          {selectedOption || "Select an option"}
        </span>
        {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
      </button>
      {isDropdownOpen && (
        <div className="absolute bg-gray-900 px-4 pb-4 shadow-lg z-10 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              data-cy={`dropdown-option-${item}`}
              className={`cursor-pointer px-4 py-4 text-white hover:bg-gray-800 uppercase ${
                index !== items.length - 1 ? "border-b border-gray-800" : ""
              }`}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
