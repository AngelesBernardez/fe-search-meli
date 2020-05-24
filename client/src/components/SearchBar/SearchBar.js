import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SearchBar.css";
import SearchInput from "./../SearchInput/SearchInput";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  /**
   * Handles if the user presses the enter key.
   * @param {Object} e - The event that was triggered.
   */
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (inputValue.value !== "") history.push(`/items?search=${inputValue}`);
    }
  };

  return (
    <div className="grid-layout search-bar">
      <Link to="/">
        <img className="logo" src="/Logo_ML@2x.png" alt="Mercado Libre Logo" />
      </Link>
      <div className="search-input-component">
        <SearchInput
          handleEnter={(e) => handleEnter(e)}
          handleInput={(e) => setInputValue(e.target.value)}
          inputValue={inputValue}
          placeholderText="Nunca dejes de buscar"
        />
      </div>
    </div>
  );
};

export default SearchBar;
