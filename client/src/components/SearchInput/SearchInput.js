import React from "react";

import "./SearchInput.css";

const SearchInput = ({ handleEnter, handleInput, placeholderText }) => {
  return (
    <div className="search-input-container">
      <input
        onChange={handleInput}
        onKeyDown={handleEnter}
        placeholder={placeholderText}
        type="text"
      />
    </div>
  );
};

export default SearchInput;
