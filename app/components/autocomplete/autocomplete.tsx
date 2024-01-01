import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { ApiService } from "../../services/ApiService";
import { Superstar } from "../../types/interfaces";
import { useRouter } from "next/navigation";
import { AutocompleteProps } from "../../types/interfaces";

const Autocomplete: React.FC<AutocompleteProps> = ({ threshold, maxSuggestions }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Superstar[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const autocompleteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        // Clicked outside the autocomplete, close the suggestions
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await ApiService.fetchSuperstars(maxSuggestions, 0, "", inputValue);
        // console.log(response);
        setSuggestions(response);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (inputValue.length >= threshold) {
      fetchSuggestions();
    } else {
      // Clear suggestions when inputValue is below the threshold
      setSuggestions([]);
      setIsDropdownOpen(false);
    }
  }, [inputValue, threshold, maxSuggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSuggestionClick = (suggestion: Superstar) => {
    setInputValue(suggestion.name);
    setIsDropdownOpen(false);
    router.push(`/superstars/${suggestion.id}`);
  };

  return (
    <div ref={autocompleteRef} data-cy="search-autocomplete" className="relative w-4/12">
      <input
        data-cy="search-autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="SEARCH"
        className="bg-gray-900 text-white px-8 py-4 w-full"
      />
      <FaSearch className="absolute top-1/2 right-8 transform -translate-y-1/2 text-white" />
      {isDropdownOpen && suggestions.length > 0 && (
        <div
          className="absolute bg-gray-900 px-4 pb-4 shadow-lg z-10 w-full"
          data-cy="search-autocomplete-suggestions"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              data-cy={`search-autocomplete-option-${suggestion.name}`}
              className={`cursor-pointer px-4 py-4 text-white hover:bg-gray-800 uppercase ${
                index !== suggestions.length - 1 ? "border-b border-gray-800" : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
