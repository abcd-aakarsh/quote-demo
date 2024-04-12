import React, { useState } from "react";

const QuoteSearchBar = ({ fetchQuote }) => {
  const [inputField, setInputField] = useState("");

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuote(inputField);
  };

  return (
    <div className="w-4/5 mx-auto px-8 py-4 h-32 rounded-lg bg-gray-700 gap-6 mb-12 flex items-center justify-start">
      <form
        onSubmit={handleSubmit}
        name="search"
        className="flex items-center gap-12 w-full"
      >
        <input
          type="text"
          placeholder="Type a word/quote eg:Fight"
          required
          className="border border-black outline-none border-none pl-2 pr-16 w-9/12 py-4 rounded-md"
          value={inputField}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-16 py-4 rounded-lg bg-amber-400 text-black text-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default QuoteSearchBar;
