"use client";

import { useEffect, useState } from "react";
import SuperstarList from "../components/superstarList/superstarList";
import Autocomplete from "../components/autocomplete/autocomplete";
import Dropdown from "../components/dropdown/dropdown";
import { selectionOptions } from "../utils/data";

const Page: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("NXT");

  const options: string[] = selectionOptions;

  const handleSuperstarTypeOption = (option: string): void => {
    setSelectedOption(option);
  };

  useEffect(() => {
    document.title = `Superstars - ${process.env.NEXT_PUBLIC_APP_NAME}`;
  }, []);
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between relative w-full">
        <Dropdown items={options} handleSuperstarTypeOption={handleSuperstarTypeOption} />
        <Autocomplete threshold={2} maxSuggestions={5} />
      </div>
      <SuperstarList selectedOption={selectedOption} />
    </div>
  );
};

export default Page;
