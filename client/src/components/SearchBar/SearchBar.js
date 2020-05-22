import React from "react";
import "./SearchBar.css";
import SearchInput from "./../SearchInput/SearchInput";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img className="logo" src="/Logo_ML@2x.png" alt="Mercado Libre Logo" />
      <div className="search-input-component">
        <SearchInput placeholderText="Nunca dejes de buscar" />
      </div>
    </div>
  );
};

export default SearchBar;
