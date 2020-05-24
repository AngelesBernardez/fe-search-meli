import React from "react";
import PropTypes from "prop-types";
import "./SmallText.css";

const SmallText = ({ grey, smaller, text }) => {
  return (
    <p className={`small-text ${grey && "grey"} ${smaller && "smaller"}`}>
      {text}
    </p>
  );
};

export default SmallText;

SmallText.propTypes = {
  grey: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string.isRequired,
};
