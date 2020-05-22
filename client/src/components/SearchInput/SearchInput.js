import React from "react";

import "./SearchInput.css";

const SearchInput = ({ placeholderText }) => {
  return (
    <div className="search-input-container">
      <input placeholder={placeholderText} />
    </div>
  );
};

export default SearchInput;
