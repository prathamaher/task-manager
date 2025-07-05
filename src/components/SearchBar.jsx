import { useState } from "react";

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
           focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full ps-2 p-2 bg-gray-700 
            placeholder-gray-400"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <svg
            className="w-3.5 h-3.5  text-gray-400 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
