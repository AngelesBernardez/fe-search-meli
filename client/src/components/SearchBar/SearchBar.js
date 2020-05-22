import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";
import SearchInput from "./../SearchInput/SearchInput";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (inputValue.value !== "") history.push(`/items?search=${inputValue}`);
    }
  };

  return (
    <div className="grid-layout search-bar">
      <img className="logo" src="/Logo_ML@2x.png" alt="Mercado Libre Logo" />
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
