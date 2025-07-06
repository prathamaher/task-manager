import { useState } from "react";
import { SearchIcon } from "./Icons";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // perform search
    console.log("Searching for:", input);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex items-center max-w-lg mx-1"
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
        <input
          type="text"
          id="voice-search"
          value={input}
          onChange={handleInputChange}
          className=" border border-gray-500 text-sm rounded-sm
           focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full ps-2 p-2 bg-neutral-900 
            placeholder-gray-400"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <SearchIcon className="text-gray-400 hover:text-gray-200" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
