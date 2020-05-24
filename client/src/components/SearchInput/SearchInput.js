import React from "react";
import PropTypes from "prop-types";
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

SearchInput.propTypes = {
  handleEnter: PropTypes.func,
  handleInput: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
};
